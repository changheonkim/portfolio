import SectionContainer from '@/widgets/sectionContainer';
import Title from '@/shared/ui/title';

export default function AboutMeSection() {
  return (
    <SectionContainer>
      <Title>ABOUT ME</Title>
      <div className="text-white">
        <div>이름: 김창헌</div>
        <div>생년월일: 1996.08.22</div>
        <div>위치: 서울특별시 용산구</div>
        <div>이메일: heon5652@gmail.com</div>
        <div>학력: 성균관대학교 (미술 & 소프트웨어)</div>
      </div>
    </SectionContainer>
  );
}
