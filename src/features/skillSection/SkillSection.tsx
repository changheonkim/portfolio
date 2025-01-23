import SectionContainer from '@/widgets/sectionContainer';
import Title from '@/shared/ui/title';

export default function SkillSection() {
  return (
    <SectionContainer>
      <Title>SKILL</Title>
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="w-full h-[40px] border rounded-xl border-green-500">
          vueJs ReactJs TypeScript JavaScript threeJs HTML CSS TailwindCSS
        </div>
        <div className="w-full h-[40px] border rounded-xl border-green-500">
          java SpringBoot Spring JPA MySQL MongoDB
        </div>
        <div className="w-full h-[40px] border rounded-xl border-green-500">
          github gitlab aws docker d2hub
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-[620px] h-[400px] border rounded-xl border-green-500">
            vue
          </div>
          <div className="w-[620px] h-[400px] border rounded-xl border-green-500">
            react
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
