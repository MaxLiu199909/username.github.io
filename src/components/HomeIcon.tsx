import React, { memo } from 'react';

interface HomeIconProps {
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = memo(({ className = "" }) => {
  return (
    <div className={`relative ${className}`} aria-label="Home Icon" role="img">
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 外圈圆形 */}
        <circle 
          cx="20" 
          cy="20" 
          r="19" 
          className="stroke-white/20"
          strokeWidth="2"
        />
        
        {/* 房子轮廓 */}
        <path
          d="M20 8L32 18V32H8V18L20 8Z"
          className="fill-white/10 stroke-white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* 门 */}
        <path
          d="M16 32V22H24V32"
          className="stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* 装饰点 */}
        <circle
          cx="20"
          cy="16"
          r="2"
          className="fill-white/50"
        />
      </svg>
    </div>
  );
});

export default HomeIcon;
