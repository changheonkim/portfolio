import { useState, useEffect, useRef } from 'react';

export const NavbarHelper = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0); // useRef로 변경 (리렌더링 방지)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false); // 아래로 스크롤하면 숨김
      } else {
        setIsVisible(true); // 위로 스크롤하면 표시
      }
      lastScrollY.current = window.scrollY; // 현재 스크롤 위치 업데이트
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 빈 배열로 설정 → 한 번만 실행되도록

  return isVisible;
};
