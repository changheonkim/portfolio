import { SectionContainerProps } from './SectionContainer.type';

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <div className="w-[1300px] h-screen">{children}</div>
    </div>
  );
}
