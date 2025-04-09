import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

// Configure your Google Sheets credentials
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID";
const SHEET_NAME = "Registrations";

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, company, role } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !company || !role) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Setup Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Add the row to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [firstName, lastName, email, company, role, new Date().toISOString()],
        ],
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Registration saved successfully" });
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to save registration" });
  }
}
