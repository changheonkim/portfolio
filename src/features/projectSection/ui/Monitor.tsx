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
      <div className="w-[70vw] h-[60vh] bg-black border border-black flex items-center justify-center rounded-xl">
        <div className="w-[66vw] h-[52vh] flex bg-white rounded-xl">
          <div className="w-[30vw] h-full bg-gray-200"></div>
          <div className="w-[70vw] h-full bg-gray-400"></div>
        </div>
      </div>
    </motion.div>
  );
}
