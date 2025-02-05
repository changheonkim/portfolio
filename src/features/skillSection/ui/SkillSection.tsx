import Monitor from './Monitor';

export default function SkillSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80vw] flex flex-col justify-center items-center gap-8 text-[#efefef]">
        <Monitor
          width="full"
          height="10vh"
          kind="FrontEnd Skills"
          barPercent="1/3"
          windowPercent="2/3"
        >
          <div>
            VueJs ReactJs TypeScript JavaScript ThreeJs HTML CSS TailwindCSS
          </div>
        </Monitor>

        <Monitor
          width="full"
          height="10vh"
          kind="BackEnd Skills"
          barPercent="1/3"
          windowPercent="2/3"
        >
          <div>Java SpringBoot Spring JPA MySQL MongoDB</div>
        </Monitor>

        <Monitor
          width="full"
          height="10vh"
          kind="Utilities"
          barPercent="1/3"
          windowPercent="2/3"
        >
          <div>
            Github Gitlab AWS Docker D2hub Jira Figma Zeplin Vscode Intellij
            Eclipse
          </div>
        </Monitor>

        <div className="w-full flex justify-between gap-[20px]">
          <Monitor
            width="50vw"
            height="40vh"
            kind="Utilities"
            barPercent="1/4"
            windowPercent="3/4"
          >
            vue
          </Monitor>
          <Monitor
            width="50vw"
            height="40vh"
            kind="Utilities"
            barPercent="1/4"
            windowPercent="3/4"
          >
            vue
          </Monitor>
        </div>
      </div>
    </div>
  );
}
