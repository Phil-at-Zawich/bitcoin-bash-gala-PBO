
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-50">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-bitcoin/10 w-16 h-16 flex items-center justify-center">
            <Bitcoin className="h-8 w-8 text-bitcoin" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        
        <Button 
          asChild
          className="bg-bitcoin hover:bg-bitcoin/90 text-white px-8 py-6 rounded-full"
        >
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
