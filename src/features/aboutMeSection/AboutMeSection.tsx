export default function AboutMeSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80vw] h-[80vh] p-10 bg-[#e8e0d9] text-black rounded flex flex-col items-center">
        <div className="w-[74vw] h-[70vh] font-[2em] flex justify-between relative">
          {/* 좌측 섹션 */}
          <div className="w-[34vw] flex flex-col justify-between">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-[20vw] h-[5vh] bg-gray-200 pl-8 rounded-xl flex items-center">
                GITHUB
              </div>
              <div className="w-[20vw] h-[5vh] bg-gray-200 pl-8 rounded-xl flex items-center">
                BLOG
              </div>
              <div className="w-[20vw] h-[5vh] bg-gray-200 pl-8 rounded-xl flex items-center">
                RESUME
              </div>
            </div>
            <div>heon5652@gmail.com</div>
          </div>

          {/* 가운데 세로 선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] h-full bg-gray-600"></div>

          {/* 우측 섹션 */}
          <div className="w-[34vw] h-[60vh] relative flex flex-col items-center">
            {/* 이미지 섹션 */}
            <div className="w-[10vw] h-[13vw] mr-4 mt-4 absolute top-0 right-0 border border-gray-500">
              <img
                src="https://m.wmelonshop.com/web/product/big/20200330/0c283ec52c8dca480a81a7f73df2fc33.jpg"
                alt="Circular Image"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 텍스트 섹션 */}
            <div className="flex flex-col items-center justify-center text-left mt-[32vh]">
              <div className="font-[2em] leading-8">
                <div className="w-full relative inline-block p-1">
                  <span>안녕하세요. 2년 차 풀스택 개발자 김창헌입니다.</span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>
                    Vue.js와 React.js를 활용해 안정적이고 빠른 서비스를 제공하는
                    데 자신이 있습니다.
                  </span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>
                    프로젝트 유지보수 및 고도화 과정에서 레거시의 버그를
                    해결하고,
                  </span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>
                    페이지 로딩 시간을 5초에서 2초로 단축시키는 성과를
                    거뒀습니다.
                  </span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>
                    특히, 운영 중인 챗봇 제작 플랫폼의 UI 개선을 주도하며
                  </span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>고객사가 1년간 약 137% 증가하는 데 기여했습니다.</span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>
                    앞으로도 팀원들과의 소통과 협업을 통해 더 나은 서비스를
                    만들어가는 개발자가 되겠습니다.
                  </span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
                <br />
                <div className="w-full relative inline-block p-1">
                  <span>감사합니다.</span>
                  <div className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gray-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
