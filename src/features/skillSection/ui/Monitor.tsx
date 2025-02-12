import Image from 'next/image';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { MonitorProps } from '../model/Monitor.type';

export default function Monitor({ kind, children, barPercent }: MonitorProps) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 40,
      }}
      className="w-full h-[12vh] border-2 rounded-lg border-[#D1D3D6] bg-black flex flex-col box-border overflow-hidden"
    >
      {/* 상단 영역 */}
      <div
        className={`w-full h-${barPercent} bg-[#D1D3D6] text-black flex items-center pl-4 justify-between px-4`}
      >
        <span>{kind}</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center group transition-transform duration-200 hover:scale-150 relative">
            <Image
              src="/images/open.svg"
              alt="open"
              width={11}
              height={11}
              className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
      </div>

      {/* 하단 영역 */}
      <div className="w-full h-full bg-inherit text-white flex items-center pl-4">
        {children}
      </div>
    </motion.div>
  );
}
