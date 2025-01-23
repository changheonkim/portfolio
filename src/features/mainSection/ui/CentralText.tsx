import { motion } from 'framer-motion';

export const CentralText = () => {
  return (
    <div className="relative flex flex-col items-start h-screen px-10">
      {/* 기존 텍스트 내용 */}
      <motion.p
        className="absolute top-[120px] left-0 text-9xl text-white mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Frontend Developer
      </motion.p>
      <motion.p
        className="absolute top-[260px] left-0 text-8xl text-white text-opacity-80 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        KIM CHANGHEON
      </motion.p>
      <motion.div
        className="absolute bottom-[80px] right-0 flex gap-4 text-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <span>#Sungkyunkwan University</span>
        <span>#Fine Arts</span>
        <span>#Software</span>
      </motion.div>
    </div>
  );
};
