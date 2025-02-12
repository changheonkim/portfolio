'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SectionContainer from '@/widgets/sectionContainer';
import Monitor from './Monitor';

export default function ProjectSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: '50vh', opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: '50vh', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 15 }}
    >
      <SectionContainer>
        <div className="w-full bg-gray-200 p-[40px] pt-[80px] pb-[80px] flex flex-col items-center gap-[5vh]">
          <Monitor />
          <Monitor />
          <Monitor />
        </div>
      </SectionContainer>
    </motion.div>
  );
}
