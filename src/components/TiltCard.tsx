import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
  id?: string;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  perspective = 950,
  glare = true,
  id,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`,
    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
  });
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%'
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotY = (px - 0.5) * (maxTilt * 2);
    const rotX = (0.5 - py) * (maxTilt * 2);

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(6px)`,
      transition: 'transform 0.08s ease-out'
    });

    if (glare) {
      setGlareStyle({
        opacity: 0.22,
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)'
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`,
      transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)'
    });
    if (glare) {
      setGlareStyle((prev) => ({
        ...prev,
        opacity: 0
      }));
    }
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative preserve-3d cursor-pointer ${className}`}
    >
      {children}
      {glare && (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden z-20">
          <div
            className="pointer-events-none absolute w-64 h-64 rounded-full bg-radial from-cyan-300/30 via-white/20 to-transparent blur-xl transition-opacity duration-300"
            style={glareStyle}
          />
        </div>
      )}
    </div>
  );
};
