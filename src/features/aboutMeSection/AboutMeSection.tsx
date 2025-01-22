import SectionContainer from '@/widgets/sectionContainer';
import Title from '@/shared/ui/title';

export default function AboutMeSection() {
  return (
    <SectionContainer>
      <Title>ABOUT ME</Title>
      <div className="bg-white w-full h-[700px] text-black rounded flex flex-col justify-center items-center">
        <div className="w-[50px] font-[14px] m-20 leading-8">
          블로그 깃허브 이메일 이력서
        </div>
        <div className="font-[14px] m-20 leading-8">
          안녕하세요, 창의적이고 열정적인 주니어 프론트엔드 개발자 김창헌입니다.
          <br />
          최신 웹 기술을 바탕으로 UI/UX 디자인과 코드 최적화에 지속적으로
          도전하고 있으며, 빠르게 변화하는 개발 환경에서 꾸준히 성장하고
          있습니다. <br />
          Vue.js, React, Tailwind CSS 등 다양한 도구와 프레임워크를 활용하여
          직관적이고 반응형인 웹을 구현하는 데 자신감을 가지고 있습니다. <br />
          프론트엔드 개발을 통해 세상을 더 나은 사용자 경험으로 채워 나가는 것이
          제 목표입니다. <br />
          지금까지의 경험과 앞으로의 여정을 함께 공유할 수 있기를 기대합니다.
        </div>
      </div>
    </SectionContainer>
  );
}
