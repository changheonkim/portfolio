import Title from '@/shared/ui/title';

export default function ProjectSection() {
  return (
    <div className="w-full bg-white p-[40px] flex flex-col gap-[40px]">
      <Title>PROJECTS</Title>
      <div className="w-[800px] h-[400px] border border-black rounded-xl"></div>
      <div className="w-[800px] h-[400px] ml-[800px] border border-black rounded-xl"></div>
      <div className="w-[800px] h-[400px] border border-black rounded-xl"></div>
      <div className="w-[800px] h-[400px] ml-[800px] border border-black rounded-xl"></div>
    </div>
  );
}
