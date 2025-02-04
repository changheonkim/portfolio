'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SectionContainer from '@/widgets/sectionContainer';
import ContactText from './ContactText';
import IntroduceText from './IntroduceText';

export default function AboutMeSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <SectionContainer>
      <motion.div
        ref={ref}
        className="w-full h-screen flex justify-center items-center relative"
        initial={{ x: '50vw', opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: '50vw', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15 }}
      >
        <div className="w-[70vw] h-[82vh] p-10 bg-[#dbdbdb] text-black rounded relative">
          {/* 중앙 텍스트 섹션 */}
          <div className="absolute inset-0 flex flex-col gap-[2em] justify-center items-center">
            <ContactText />
            <IntroduceText />
          </div>

          {/* 우측 하단 이미지 */}
          <div className="absolute bottom-10 right-10">
            <div className="w-[8vw] h-[8vw] rounded-full border border-gray-500">
              <img
                src="https://m.wmelonshop.com/web/product/big/20200330/0c283ec52c8dca480a81a7f73df2fc33.jpg"
                alt="Circular Image"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-10 left-10 flex flex-col gap-1">
            <span>성균관대학교 미술 & 소프트웨어 전공 학점 3.6/4.5</span>
            <span>1996.08.22</span>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
