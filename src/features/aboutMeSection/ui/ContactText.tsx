import PostLine from './PostLine';

export default function ContactText() {
  return (
    <>
      <div className="w-full flex flex-col gap-[10px]">
        <PostLine>
          <div className="w-[20vw] h-[5vh] flex items-center">GITHUB</div>
        </PostLine>
        <PostLine>
          <div className="w-[20vw] h-[5vh] flex items-center">BLOG</div>
        </PostLine>
        <PostLine>
          <div className="w-[20vw] h-[5vh] flex items-center">RESUME</div>
        </PostLine>
      </div>
      <div>heon5652@gmail.com</div>{' '}
    </>
  );
}
