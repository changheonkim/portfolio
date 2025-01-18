'use client';

import { motion } from 'framer-motion';

import { BallGroupProps } from '../MainSection.model';

export const BallGroup: React.FC<BallGroupProps> = ({
  position,
  ballVariants,
  direction,
  controls,
  onAnimationComplete,
}) => {
  return (
    <div className={`absolute flex items-center space-x-4 ${position}`}>
      {direction === 'left' ? (
        <>
          <motion.div
            className="w-6 h-6 bg-white rounded-full shadow-lg"
            variants={ballVariants}
            animate={controls}
            onAnimationComplete={onAnimationComplete}
          />
          <div className="w-4 h-4 bg-white rounded-full shadow-md" />
          <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
        </>
      ) : (
        <>
          <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
          <div className="w-4 h-4 bg-white rounded-full shadow-md" />
          <motion.div
            className="w-6 h-6 bg-white rounded-full shadow-lg"
            variants={ballVariants}
            animate={controls}
            onAnimationComplete={onAnimationComplete}
          />
        </>
      )}
    </div>
  );
};
