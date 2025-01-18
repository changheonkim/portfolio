'use client';

import { MainSectionHelpers } from '../MainSection.helpers';

import SectionContainer from '@/widgets/sectionContainer';
import { BallGroup } from './BallGroup';
import { CentralText } from './CentralText';

export default function MainContainer() {
  const { controls, handleScroll, createBallVariants } = MainSectionHelpers();
  return (
    <SectionContainer backgroundColor="bg-black">
      {/* 왼쪽 상단 점들 */}
      <BallGroup
        position="top-20 left-5"
        ballVariants={createBallVariants('left')}
        direction="left"
        controls={controls}
        onAnimationComplete={handleScroll}
      />

      {/* 중앙 텍스트 */}
      <CentralText />

      {/* 우측 하단 점들 */}
      <BallGroup
        position="bottom-20 right-5"
        ballVariants={createBallVariants('right')}
        direction="right"
        controls={controls}
        onAnimationComplete={handleScroll}
      />
    </SectionContainer>
  );
}
