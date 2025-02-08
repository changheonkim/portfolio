import SectionContainer from '@/widgets/sectionContainer';

export default function ProjectSection() {
  return (
    <SectionContainer>
      <div className="w-full bg-gray-200 p-[40px] pt-[80px] pb-[80px] flex flex-col items-center gap-[5vh]">
        <div className="w-[60vw] h-[60vh] bg-black border border-black flex items-center justify-center rounded-xl">
          <div className="w-[56vw] h-[52vh] bg-white rounded-xl"></div>
        </div>

        <div className="w-[60vw] h-[60vh] bg-black border border-black flex items-center justify-center rounded-xl">
          <div className="w-[56vw] h-[52vh] bg-white rounded-xl"></div>
        </div>
      </div>
    </SectionContainer>
  );
}
