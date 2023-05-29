import { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Particles = () => {
  const [showLaptop, setShowLaptop] = useState(false);
  const [showMonitor, setShowMonitor] = useState(false);
  const { scrollY } = useViewportScroll();
  const laptopRotateY = useTransform(scrollY, [0, 500], [0, 180]);
  const monitorScaleX = useTransform(scrollY, [0, 500], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      if (isElementInViewport('#laptop')) {
        setShowLaptop(true);
      }
      if (isElementInViewport('#monitor')) {
        setShowMonitor(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = document.querySelector(el).getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div>
      <motion.img
        id="laptop"
        src="/images/monitor.png"
        alt="Laptop"
        style={{ rotateY: laptopRotateY, opacity: showLaptop ? 1 : 0 }}
      />
      <motion.img
        id="monitor"
        src="/images/chat.png"
        alt="Monitor"
        style={{ scaleX: monitorScaleX, opacity: showMonitor ? 1 : 0 }}
      />
    </div>
  );
};

export default Particles;