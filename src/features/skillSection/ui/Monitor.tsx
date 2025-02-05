import { MonitorProps } from '../model/Monitor.type';

export default function Monitor({
  kind,
  children,
  width,
  height,
  barPercent,
  windowPercent,
}: MonitorProps) {
  return (
    <div
      className={`w-full h-[${height}] border-2 rounded-lg border-[#D1D3D6] flex flex-col box-border overflow-hidden`}
    >
      {/* 상단 영역 */}
      <div
        className={`w-[${width}] h-${barPercent} bg-[#D1D3D6] text-black flex items-center pl-4 justify-between px-4`}
      >
        <span>{kind}</span>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* 하단 영역 */}
      <div
        className={`w-full h-${windowPercent} bg-inherit text-white flex items-center pl-4`}
      >
        {children}
      </div>
    </div>
  );
}
