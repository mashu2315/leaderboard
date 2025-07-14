
import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-white via-[#f9fbff] to-[#eef2f8] animate-gradient">
      <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
        {/* Animated Grid Lines */}
        {[...Array(10)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={(i + 1) * 40}
            x2="1000"
            y2={(i + 1) * 40}
            stroke="#e6ecf2"
            strokeWidth="1"
            className="animate-pulse"
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={(i + 1) * 50}
            y1="0"
            x2={(i + 1) * 50}
            y2="400"
            stroke="#f0f4f8"
            strokeWidth="1"
            className="animate-pulse"
          />
        ))}

        {/* Pulsing Candlesticks */}
        {[...Array(18)].map((_, i) => {
          const isUp = i % 3 !== 0;
          const x = 60 + i * 45;
          const candleHeight = 40 + Math.random() * 80;
          const candleY = isUp ? 200 - candleHeight : 200;
          return (
            <g key={i} className="animate-fadeUp" style={{ animationDelay: `${i * 0.2}s` }}>
              {/* Wick */}
              <line
                x1={x + 7}
                y1={candleY - 20}
                x2={x + 7}
                y2={candleY + candleHeight + 20}
                stroke={isUp ? '#34d399' : '#f87171'}
                strokeWidth="2"
                opacity="0.4"
              />
              {/* Body */}
              <rect
                x={x}
                y={candleY}
                width="14"
                height={candleHeight}
                fill={isUp ? '#34d399' : '#f87171'}
                rx="2"
                opacity="0.5"
              />
            </g>
          );
        })}

        {/* Sliding Volume Bars */}
        {[...Array(18)].map((_, i) => {
          const x = 60 + i * 45;
          const volHeight = 30 + Math.random() * 40;
          return (
            <rect
              key={`vol-${i}`}
              x={x}
              y={370 - volHeight}
              width="14"
              height={volHeight}
              fill="#dbeafe"
              rx="2"
              opacity="0.5"
              className="animate-volumeSlide"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Background;


