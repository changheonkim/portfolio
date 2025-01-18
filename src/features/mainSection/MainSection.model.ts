export type Direction = 'left' | 'right';

export type Variants = {
  bounce: {
    y: number[];
    x: number[];
    transition: {
      duration: number;
      ease: string;
    };
  };
};

export type BallGroupProps = {
  position: string;
  ballVariants: Variants;
  direction: Direction;
  controls: any;
  onAnimationComplete: () => void;
};
