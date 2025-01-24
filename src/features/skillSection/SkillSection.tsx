import SectionContainer from '@/widgets/sectionContainer';
import Title from '@/shared/ui/title';

export default function SkillSection() {
  return (
    <SectionContainer>
      <Title>SKILL</Title>
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[40px] border rounded-xl border-green-500 text-white flex items-center pl-4">
          FrontEnd vueJs ReactJs TypeScript JavaScript threeJs HTML CSS
          TailwindCSS
        </div>
        <div className="w-full h-[40px] border rounded-xl border-green-500 text-white flex items-center pl-4">
          BackEnd java SpringBoot Spring JPA MySQL MongoDB
        </div>
        <div className="w-full h-[40px] border rounded-xl border-green-500 text-white flex items-center pl-4">
          Etc github gitlab aws docker d2hub jira figma zeplin vscode intellij
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-[620px] h-[400px] border rounded-xl border-green-500 text-white flex p-4">
            vue
          </div>
          <div className="w-[620px] h-[400px] border rounded-xl border-green-500 text-white flex p-4">
            react
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
