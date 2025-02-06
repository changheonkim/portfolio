'use client';

import Monitor from './Monitor';

export default function SkillSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80vw] flex flex-col justify-center items-center gap-8 text-[#efefef]">
        <div className="w-full h-[30vh] flex flex-col justify-center items-center gap-8">
          <Monitor
            width="full"
            height="30vh"
            kind="FrontEnd Skills"
            barPercent="1/3"
          >
            <div>
              VueJs ReactJs TypeScript JavaScript ThreeJs HTML CSS TailwindCSS
            </div>
          </Monitor>

          <Monitor
            width="full"
            height="30vh"
            kind="BackEnd Skills"
            barPercent="1/3"
          >
            <div>Java SpringBoot Spring JPA MySQL MongoDB</div>
          </Monitor>

          <Monitor width="full" height="30vh" kind="Utilities" barPercent="1/3">
            <div>
              Github Gitlab AWS Docker D2hub Jira Figma Zeplin Vscode Intellij
              Eclipse
            </div>
          </Monitor>
        </div>
        <div className="w-full h-[45vh] flex justify-between gap-[20px]">
          <Monitor width="50vw" height="40vh" kind="vueJs" barPercent="1/4">
            vue
          </Monitor>
          <Monitor width="50vw" height="40vh" kind="ReactJs" barPercent="1/4">
            vue
          </Monitor>
        </div>
      </div>
    </div>
  );
}
