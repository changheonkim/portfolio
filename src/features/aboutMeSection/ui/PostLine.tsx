import { PostLinePropsType } from '../model/PostLine.type';

export default function PostLine({ children }: PostLinePropsType) {
  return (
    <div className="w-full relative inline-block p-1">
      {children}
      <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
    </div>
  );
}
