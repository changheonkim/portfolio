import SectionContainer from '@/widgets/sectionContainer';

export default function ProjectSection() {
  return (
    <SectionContainer>
      <div className="w-full bg-white p-[40px] flex flex-col gap-[40px]">
        <div className="w-[40vw] h-[400px] border border-black rounded-xl"></div>
        <div className="w-[40vw] h-[400px] border border-black rounded-xl"></div>
      </div>
    </SectionContainer>
  );
}
