import { Variants } from "framer-motion";

/**
 * slideInFromLeft
 * @param delayValue
 * @returns Variants
 */
export const slideInFromLeft = (delayValue: number,durationValue = 0.5): Variants => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayValue,
        duration: durationValue,
      },
    },
  };
};

/**
 *
 * @param delayValue
 * @returns Variants
 */
export const slideInFromRight = (delayValue: number, durationValue= 0.5): Variants => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayValue,
        duration: durationValue,
      },
    },
  };
};

/**
 * slideInFromTop
 * @returns Variants
 */
export const slideInFromTop = (): Variants => {
  return {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };
};
