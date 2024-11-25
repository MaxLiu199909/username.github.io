import React, { memo } from 'react';

interface AppleStyleIconProps {
  className?: string;
}

const AppleStyleIcon: React.FC<AppleStyleIconProps> = memo(({ className = "" }) => {
  return (
    <div className={`relative ${className}`} aria-label="Apple Style Icon" role="img">
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 主圆形背景 - 磨砂玻璃效果通过外部CSS实现 */}
        <circle 
          cx="20" 
          cy="20" 
          r="20"
          className="fill-white/10"
        />
        
        {/* 内部装饰圆环 */}
        <circle 
          cx="20" 
          cy="20" 
          r="16" 
          className="stroke-white/30"
          strokeWidth="0.5"
        />
        
        {/* M字母 - 简约现代风格 */}
        <path
          d="M14 26V14L20 21L26 14V26"
          className="stroke-white"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* 装饰点 */}
        <circle
          cx="20"
          cy="20"
          r="0.5"
          className="fill-white/50"
        />
        
        {/* 装饰线 */}
        <path
          d="M20 12L20 14"
          className="stroke-white/30"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M20 26L20 28"
          className="stroke-white/30"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M12 20L14 20"
          className="stroke-white/30"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
        <path
          d="M26 20L28 20"
          className="stroke-white/30"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
});

export default AppleStyleIcon;
