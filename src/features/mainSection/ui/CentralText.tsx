import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

export const CentralText = () => {
  const baseText = 'hello, world :)' as string;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      duration: 1.5,
      ease: 'easeIn',
      repeat: 1,
      repeatType: 'reverse',
      repeatDelay: 0.5,
    });
    return controls.stop;
  }, []);

  return (
    <div className="relative flex flex-col items-start justify-center h-screen px-10 text-white overflow-hidden">
      {/* 기존 텍스트 내용 */}
      <motion.h1
        className="text-7xl font-extrabold text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3.5 }}
      >
        김창헌
      </motion.h1>
      <motion.p
        className="mt-4 text-4xl  text-[#ADD8E6]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3.6 }}
      >
        Frontend Developer
      </motion.p>
      <motion.p
        className="mt-8 max-w-xl text-left text-[#97B6F1] text-xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3.7 }}
      >
        코드와 사용자 경험의 경계를 허무는 프론트엔드 개발자입니다. <br />
        세상에 가치를 더하는 UI를 만듭니다.
      </motion.p>

      {/* 타이핑 애니메이션과 커서 추가 */}
      <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
        <motion.span>{displayText}</motion.span>
      </div>
    </div>
  );
};
