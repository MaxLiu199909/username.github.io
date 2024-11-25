import React from 'react';

interface MXLogoProps {
  className?: string;
}

const MXLogo: React.FC<MXLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 40"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 背景 */}
        <rect width="100" height="40" rx="8" className="fill-white/10" />
        
        {/* M */}
        <path
          d="M20 30V10L30 20L40 10V30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        />
        
        {/* X */}
        <path
          d="M50 10L70 30M70 10L50 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        />
        
        {/* 装饰线条 */}
        <path
          d="M85 15L85 25"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className="text-white/50"
        />
      </svg>
    </div>
  );
};

export default MXLogo;
