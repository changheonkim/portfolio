import Monitor from './Monitor';

export default function SkillSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[1300px] flex flex-col justify-center items-center gap-8 text-[#efefef]">
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

        <div className="w-full flex justify-between gap-[20px]">
          <div className="w-[620px] h-[400px] border-2 rounded-xl border-[#A8A9AD] flex p-4">
            vue
          </div>
          <div className="w-[620px] h-[400px] border-2 rounded-xl border-[#A8A9AD] flex p-4">
            react
          </div>
        </div>
      </div>
    </div>
  );
}
