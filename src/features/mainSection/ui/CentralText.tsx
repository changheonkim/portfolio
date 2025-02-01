export const CentralText = () => {
  return (
    <div className="relative flex flex-col items-start h-screen font-bold">
      {/* 기존 텍스트 내용 */}
      <p className="absolute top-[20vh] right-0 text-9xl text-white mt-4">
        KIMCHANGHEON
      </p>
      <p className="absolute top-[34vh] right-0 text-9xl text-white mt-4">
        PORTPOLIO
      </p>
    </div>
  );
};
