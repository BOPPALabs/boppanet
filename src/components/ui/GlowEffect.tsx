import React from 'react';

interface GlowEffectProps {
  color?: string;
  opacity?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: string;
  blur?: string;
  zIndex?: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
  color = 'rgb(109, 40, 217)', // Default to purple (boppa-primary)
  opacity = '0.15',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto',
  size = '250px',
  blur = '100px',
  zIndex = '-1',
}) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        right,
        bottom,
        left,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity,
        filter: `blur(${blur})`,
        zIndex,
      }}
    />
  );
};

export default GlowEffect;