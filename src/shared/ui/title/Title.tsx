import { TitleProps } from './Title.type';

export default function Title(props: TitleProps) {
  return (
    <div className="flex justify-center items-center h-[100px] mt-[50px]">
      <h1 className="text-[36px] underline text-gray-300">{props.children}</h1>
    </div>
  );
}
