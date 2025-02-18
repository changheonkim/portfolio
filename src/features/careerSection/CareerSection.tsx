'use client';

import SectionContainer from '@/widgets/sectionContainer';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function CareerSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });

  return (
    <SectionContainer>
      <div className="w-full bg-gray-200 relative flex flex-col justify-center items-center">
        <motion.div
          ref={ref}
          initial={{ y: '50vh', opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: '50vh', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 15 }}
          className="w-[80vw] mt-[20vh] mb-[20vh] ml-[5vw] mr-[5vw] rounded-xl bg-black"
        >
          <div className="w-full p-10 text-white">
            <div className="flex">
              <div className="w-[20vw] bg-gray-200 p-10 flex justify-center">
                <div className="w-[10vw] h-[10vw] bg-red-100"></div>
              </div>
              <div className="w-[80vw] bg-gray-400 p-10 flex flex-col">
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
                <div>sodudsafdnaslfbslbdlshbhl</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
