import { Variants } from "framer-motion";

/**
 * slideInFromLeft
 * @param delayValue
 * @returns Variants
 */
export const slideInFromLeft = (delayValue: number): Variants => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayValue,
        duration: 0.5,
      },
    },
  };
};

/**
 *
 * @param delayValue
 * @returns Variants
 */
export const slideInFromRight = (delayValue: number): Variants => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delayValue,
        duration: 0.5,
      },
    },
  };
};

/**
 *
 */
export const slideInFromTop = ():Variants => {
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
