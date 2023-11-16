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

export const MyAnimate = {
  RotateInFromBottom: rotateInFromBottom,
  RotateInFromTop: rotateInFromTop,
  RotateInFromLeft: rotateInFromLeft,
  RotateInFromRight: rotateInFromRight,
  RotateOutFromBottom: rotateOutFromBottom,
  RotateOutFromTop: rotateOutFromTop,
  RotateOutFromLeft: rotateOutFromLeft,
  RotateOutFromRight: rotateOutFromRight,

  SlideInFromBottom: slideInFromBottom,
  SlideInFromTop: slideInFromTop,
  SlideInFromLeft: slideInFromLeft,
  SlideInFromRight: slideInFromRight,
  SlideOutFromBottom: slideOutFromBottom,
  SlideOutFromTop: slideOutFromTop,
  SlideOutFromLeft: slideOutFromLeft,
  SlideOutFromRight: slideOutFromRight,

  FadeIn: fadeIn,
  FadeOut: fadeOut,
  Bounce: bounce,
  Pulse: pulse,
};
