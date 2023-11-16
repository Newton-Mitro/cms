import { bounce } from './bounce';
import { fadeIn } from './fadeIn';
import { fadeOut } from './fadeOut';
import { pulse } from './pulse';
import { rotateInFromBottom } from './rotate_in/rotateInFromBottom';
import { rotateInFromLeft } from './rotate_in/rotateInFromLeft';
import { rotateInFromRight } from './rotate_in/rotateInFromRight';
import { rotateInFromTop } from './rotate_in/rotateInFromTop';
import { rotateOutFromBottom } from './rotate_out/rotateOutFromBottom';
import { rotateOutFromLeft } from './rotate_out/rotateOutFromLeft';
import { rotateOutFromRight } from './rotate_out/rotateOutFromRight';
import { rotateOutFromTop } from './rotate_out/rotateOutFromTop';
import { slideInFromBottom } from './slide_in/slideInFromBottom';
import { slideInFromLeft } from './slide_in/slideInFromLeft';
import { slideInFromRight } from './slide_in/slideInFromRight';
import { slideInFromTop } from './slide_in/slideInFromTop';
import { slideOutFromBottom } from './slide_out/slideOutFromBottom';
import { slideOutFromLeft } from './slide_out/slideOutFromLeft';
import { slideOutFromRight } from './slide_out/slideOutFromRight';
import { slideOutFromTop } from './slide_out/slideOutFromTop';

export class MyVariants {
  static RotateInFromBottom = {
    offScreen: rotateInFromBottom,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateInFromTop = {
    offScreen: rotateInFromTop,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateInFromLeft = {
    offScreen: rotateInFromLeft,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateInFromRight = {
    offScreen: rotateInFromRight,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateOutFromBottom = {
    offScreen: rotateOutFromBottom,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateOutFromTop = {
    offScreen: rotateOutFromTop,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateOutFromLeft = {
    offScreen: rotateOutFromLeft,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static RotateOutFromRight = {
    offScreen: rotateOutFromRight,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };

  static SlideInFromBottom = {
    offScreen: slideInFromBottom,
    onScreen: {
      x: 0,
      y: 0,
      skewX: '0deg',
      opacity: 1,
    },
  };
  static SlideInFromTop = {
    offScreen: slideInFromTop,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideInFromLeft = {
    offScreen: slideInFromLeft,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideInFromRight = {
    offScreen: slideInFromRight,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideOutFromBottom = {
    offScreen: slideOutFromBottom,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideOutFromTop = {
    offScreen: slideOutFromTop,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideOutFromLeft = {
    offScreen: slideOutFromLeft,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static SlideOutFromRight = {
    offScreen: slideOutFromRight,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };

  static FadeIn = {
    offScreen: fadeIn,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static FadeOut = {
    offScreen: fadeOut,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static Bounce = {
    offScreen: bounce,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
  static Pulse = {
    offScreen: pulse,
    onScreen: { x: 0, y: 0, skewX: '0deg', opacity: 1 },
  };
}
