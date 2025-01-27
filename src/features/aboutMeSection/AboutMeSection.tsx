export default function AboutMeSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80vw] h-[70vh] p-20 bg-white text-black rounded flex flex-col justify-center items-center">
        <div className="w-[70vw] h-[60vh] font-[2em] flex justify-between items-center">
          <div className="w-[250px] h-[250px] overflow-hidden rounded-full">
            <img
              src="https://m.wmelonshop.com/web/product/big/20200330/0c283ec52c8dca480a81a7f73df2fc33.jpg"
              alt="Circular Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="w-[500px] h-[50px] bg-gray-200 pl-8 rounded-xl flex items-center">
              heon5652@gmail.com
            </div>
            <div className="w-[500px] h-[50px] bg-gray-200 pl-8 rounded-xl flex items-center">
              GITHUB
            </div>
            <div className="w-[500px] h-[50px] bg-gray-200 pl-8 rounded-xl flex items-center">
              BLOG
            </div>
            <div className="w-[500px] h-[50px] bg-gray-200 pl-8 rounded-xl flex items-center">
              RESUME
            </div>
          </div>
        </div>
        <div className="w-[70vw] font-[2em] mt-4 leading-8">
          안녕하세요. 2년 차 풀스택 개발자 김창헌입니다.
          <br />
          Vue.js와 React.js를 활용해 안정적이고 빠른 서비스를 제공하는 데 자신이
          있습니다.
          <br />
          프로젝트 유지보수 및 고도화 과정에서 레거시의 버그를 해결하고, <br />
          페이지 로딩 시간을 5초에서 2초로 단축시키는 성과를 거뒀습니다.
          <br />
          특히, 운영 중인 챗봇 제작 플랫폼의 UI 개선을 주도하며 고객사가 1년간
          약 137% 증가하는 데 기여했습니다.
          <br />
          앞으로도 팀원들과의 소통과 협업을 통해 더 나은 서비스를 만들어가는
          개발자가 되겠습니다.
          <br />
          감사합니다.
        </div>
      </div>
    </div>
  );
}
