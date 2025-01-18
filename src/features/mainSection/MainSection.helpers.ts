import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import { Direction, Variants } from './MainSection.model';

export const MainSectionHelpers = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('bounce');
  }, [controls]);

  const createBallVariants = (direction: Direction): Variants => {
    const height =
      direction === 'left'
        ? window.innerHeight - 184
        : -window.innerHeight + 184;
    const width = window.innerWidth - 345;
    const offset = direction === 'left' ? 1 : -1;

    return {
      bounce: {
        y: [
          0,
          height,
          height - 76 * offset,
          height,
          height - 66 * offset,
          height,
          height - 36 * offset,
          height,
          height - 21 * offset,
          height,
          height,
        ],
        x: [0, 0, 0, 0, 0, 0, 0, 0, 0, width * offset],
        transition: {
          duration: 5,
          ease: 'easeInOut',
        },
      },
    };
  };

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return { controls, createBallVariants, handleScroll };
};
