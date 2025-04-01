import React from "react";

interface GalaIconProps {
  className?: string;
}

const GalaIcon: React.FC<GalaIconProps> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="url(#bgGrad)" />

      <path
        d="M22 18h6v-4h-6v4zm0 32h6v-4h-6v4zm4-28v20h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8zm4 4h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4v-8zm0 12h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4v-8z"
        fill="url(#coinGrad)"
        stroke="#ffaa00"
        stroke-width="1.5"
      />

      <path
        d="M26 22v20h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8z"
        fill="rgba(0,0,0,0.2)"
        transform="translate(2, 2)"
      />

      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ff6600" />
          <stop offset="100%" style="stop-color:#cc3300" />
        </linearGradient>
        <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffd700" />
          <stop offset="50%" style="stop-color:#ffaa00" />
          <stop offset="100%" style="stop-color:#cc8800" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GalaIcon;
