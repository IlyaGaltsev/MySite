import React, { useState, useRef, useEffect } from 'react';
import avatar from "../../assets/images/avatar.png";

const SmoothMoveBlock = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const blockRef = useRef(null);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = blockRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt(Math.pow(centerX - clientX, 2) + Math.pow(centerY - clientY, 2));
    const maxDistance = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
    const directionX = (clientX - centerX) > 0 ? 1 : -1;
    const directionY = (clientY - centerY) > 0 ? 1 : -1;
    const x = (clientX - centerX) * (distance / maxDistance) * directionX;
    const y = (clientY - centerY) * (distance / maxDistance) * directionY;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isHovering) {
      blockRef.current.addEventListener('mousemove', handleMouseMove);
    } else {
      blockRef.current.removeEventListener('mousemove', handleMouseMove);
    }
    return () => {
      blockRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering]);

  return (
    <div
      className="block section-about__avatar"
      ref={blockRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovering ? 'transform 0.3s ease-out' : 'transform 0.6s ease-out',
      }}
    >
       <img  src={avatar} alt="avatar" />

    </div>
  );
};

export default SmoothMoveBlock;