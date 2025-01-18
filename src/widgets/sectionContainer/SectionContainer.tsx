import { SectionContainerProps } from './SectionContainer.type';

export default function SectionContainer({
  children,
  backgroundColor,
}: SectionContainerProps) {
  return (
    <div
      className={`w-full ${backgroundColor} flex justify-center items-center`}
    >
      <div className="relative h-screen w-[1000px]">{children}</div>
    </div>
  );
}
