import { SectionContainerProps } from './SectionContainer.type';

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="w-full bg-[#0D1117] flex justify-center items-center overflow-hidden">
      <div className="relative h-screen w-[1000px]">{children}</div>
    </div>
  );
}
