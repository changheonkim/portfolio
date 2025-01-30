'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ContactText from './ContactText';
import IntroduceText from './IntroduceText';

export default function AboutMeSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="w-full h-screen flex justify-center items-center"
      initial={{ x: '50vw', opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: '50vw', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 15 }}
    >
      <div className="w-[80vw] h-[80vh] p-10 bg-[#e8e0d9] text-black rounded flex flex-col items-center">
        <div className="w-[74vw] h-[70vh] font-[2em] flex justify-between relative">
          {/* 좌측 섹션 */}
          <div className="w-[34vw] flex flex-col justify-between">
            <ContactText />
          </div>

          {/* 가운데 세로 선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] h-full bg-gray-600"></div>

          {/* 우측 섹션 */}
          <div className="w-[34vw] h-[60vh] relative flex flex-col items-center">
            {/* 이미지 섹션 */}
            <div className="w-[10vw] h-[13vw] mr-4 mt-4 absolute top-0 right-0 border border-gray-500">
              <img
                src="https://m.wmelonshop.com/web/product/big/20200330/0c283ec52c8dca480a81a7f73df2fc33.jpg"
                alt="Circular Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 텍스트 섹션 */}
            <div className="flex flex-col items-center justify-center text-left mt-[32vh]">
              <IntroduceText />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
