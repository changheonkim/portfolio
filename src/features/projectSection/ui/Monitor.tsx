import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Monitor() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 15 }}
    >
      <div className="w-[70vw] h-[65vh] bg-black border border-black flex items-center justify-center rounded-xl">
        <motion.div
          className="w-[66vw] h-[57vh] flex bg-white rounded-xl overflow-hidden"
          initial={{ clipPath: 'inset(50% 0 50% 0)' }} // 초기에 위/아래로 닫힌 상태
          animate={
            inView
              ? { clipPath: 'inset(0% 0 0% 0)' }
              : { clipPath: 'inset(50% 0 50% 0)' }
          }
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="w-[30vw] h-full flex justify-center items-center">
            <img
              src="https://m.wmelonshop.com/web/product/big/20200330/0c283ec52c8dca480a81a7f73df2fc33.jpg"
              alt="Circular Image"
            />
          </div>
          <div className="w-[70vw] h-full flex flex-col p-5">
            <div className="w-full h-[8vh] flex items-center p-5 text-[1.6em] font-bold">
              프로젝트명
            </div>
            <div className="w-full h-[4vh] flex items-center p-5 text-[1.2em]">
              2022.10.22
            </div>
            <div className="w-full h-[4vh] flex items-center p-5 text-[1.2em]">
              javascript
            </div>
            <div className="w-full h-[70vh] flex p-5 text-[1em]">
              프로젝트명
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
