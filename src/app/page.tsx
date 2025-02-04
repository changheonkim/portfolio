import MainSection from '@/features/mainSection';
import AboutMeSection from '@/features/aboutMeSection';
import SkillSection from '@/features/skillSection/ui/SkillSection';
import ProjectSection from '@/features/projectSection';
import CareerSection from '@/features/careerSection';

export default function Home() {
  // 랜덤 별 생성
  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 1; // 별 크기 (1px ~ 4px)
      const x = Math.random() * 100; // X축 위치 (%)
      const y = Math.random() * 100; // Y축 위치 (%)
      const duration = Math.random() * 3 + 2; // 반짝이는 애니메이션 시간 (2s ~ 5s)
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${y}%`,
            left: `${x}%`,
            animationDuration: `${duration}s`,
          }}
        ></div>,
      );
    }
    return stars;
  };

  return (
    <div className="bg-[#0F111A] flex flex-col gap-[12px]">
      <div className="stars-container">
        {generateStars(100)}
        <MainSection />
        <AboutMeSection />
        <SkillSection />
        <ProjectSection />
        <CareerSection />
      </div>
    </div>
  );
}
