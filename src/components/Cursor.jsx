import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null); // Ref to the cursor div

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.8,
        ease: "back.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="cursor h-3 w-3 rounded-full bg-black fixed top-0 left-0 z-20 box-shadow"
    ></div>
  );
};

export default Cursor;
