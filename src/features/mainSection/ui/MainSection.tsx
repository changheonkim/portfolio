'use client';

import SectionContainer from '@/widgets/sectionContainer';
import { CentralText } from './CentralText';

export default function MainSection() {
  return (
    <SectionContainer>
      {/* 중앙 텍스트 애니메이션 */}
      <CentralText />
    </SectionContainer>
  );
}
