import { Comfortaa } from 'next/font/google';

import SectionContainer from '@/widgets/sectionContainer';
import Monitor from './Monitor';

const comfortaa = Comfortaa({
  variable: '--comfortaa', // CSS 변수 이름 수정
  subsets: ['latin'], // 필요한 문자 집합 (한글 지원 필요 시 'latin-ext', 'korean' 추가)
  weight: ['700'], // 사용할 폰트 가중치
});

export default function SkillSection() {
  return (
    <SectionContainer>
      <div
        className={`w-full flex flex-col justify-center items-center gap-8 text-[#efefef] ${comfortaa.className}`}
      >
        <Monitor kind="FrontEnd Skills">
          <div>
            VueJs ReactJs TypeScript JavaScript ThreeJs HTML CSS TailwindCSS
          </div>
        </Monitor>

        <Monitor kind="BackEnd Skills">
          <div>Java SpringBoot Spring JPA MySQL MongoDB</div>
        </Monitor>

        <Monitor kind="Utilities">
          <div>
            Github Gitlab AWS Docker D2hub Jira Figma Zeplin Vscode Intellij
            Eclipse
          </div>
        </Monitor>

        <div className="flex justify-between gap-8">
          <div className="w-[620px] h-[400px] border-2 rounded-xl border-[#A8A9AD] flex p-4">
            vue
          </div>
          <div className="w-[620px] h-[400px] border-2 rounded-xl border-[#A8A9AD] flex p-4">
            react
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
