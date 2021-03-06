import { isIE11 } from '/1/module/esm/0/l/en-US/mi/lightning/utilsPrivate#browser/v/1_14_3-alpha/latest/lightning_utilsPrivate_browser.js';
/**
 * Does the browser display animation.
 * Always returns false for IE11 due to performance.
 */

export function hasAnimation() {
  if (isIE11) {
    return false;
  } // JEST Workaround


  if (!window.matchMedia) {
    return true;
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return !(!mediaQuery || mediaQuery.matches);
}