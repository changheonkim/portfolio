'use client';

import SectionContainer from '@/widgets/sectionContainer';
import Monitor from './Monitor';

export default function SkillSection() {
  return (
    <SectionContainer>
      <div className="w-[80vw] h-screen flex flex-col justify-center items-center gap-8 text-[#efefef]">
        <Monitor kind="Languages" barPercent="1/3">
          <div>HTML CSS JavaScript TypeScript Java</div>
        </Monitor>
        <Monitor kind="FrontEnd Skills" barPercent="1/3">
          <div>
            VueJs ReactJs TypeScript JavaScript ThreeJs HTML CSS TailwindCSS
          </div>
        </Monitor>
        <Monitor kind="BackEnd Skills" barPercent="1/3">
          <div>Java SpringBoot Spring JPA MySQL MongoDB</div>
        </Monitor>
        <Monitor kind="Utilities" barPercent="1/3">
          <div>
            Github Gitlab AWS Docker D2hub Jira Figma Zeplin Vscode Intellij
            Eclipse
          </div>
        </Monitor>
      </div>
    </SectionContainer>
  );
}
