'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

type Direction = 'left' | 'right';

type Variants = {
  bounce: {
    y: number[];
    x: number[];
    transition: {
      duration: number;
      ease: string;
    };
  };
};

type BallGroupProps = {
  position: string;
  ballVariants: Variants;
  direction: string;
};

export default function MainContainer() {
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

  const BallGroup: React.FC<BallGroupProps> = ({
    position,
    ballVariants,
    direction,
  }) =>
    direction === 'left' ? (
      <div className={`absolute flex items-center space-x-4 ${position}`}>
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg"
          variants={ballVariants}
          animate={controls}
          onAnimationComplete={handleScroll}
        />
        <div className="w-4 h-4 bg-white rounded-full shadow-md" />
        <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
      </div>
    ) : (
      <div className={`absolute flex items-center space-x-4 ${position}`}>
        <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
        <div className="w-4 h-4 bg-white rounded-full shadow-md" />
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-lg"
          variants={ballVariants}
          animate={controls}
          onAnimationComplete={handleScroll}
        />
      </div>
    );

  return (
    <div className="w-full bg-black flex justify-center items-center">
      <div className="relative h-screen w-[1000px]">
        {/* 왼쪽 상단 점들 */}
        <BallGroup
          position="top-20 left-5"
          ballVariants={createBallVariants('left')}
          direction="left"
        />

        {/* 중앙 텍스트 */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white cursor-default">
          <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            프론트엔드 개발자
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-300">
            김창헌 포트폴리오
          </p>
        </div>

        {/* 우측 하단 점들 */}
        <BallGroup
          position="bottom-20 right-5"
          ballVariants={createBallVariants('right')}
          direction="right"
        />
      </div>
    </div>
  );
}
