/**
 * These are all values that can be set to "aria-level" attribute of h2 tag for the card's title.
 */
export const VALID_HEADING_LEVELS = ['1', '2', '3', '4', '5', '6'];
export const DEFAULT_HEADING_LEVEL = '2';
export function isNarrow(variant) {
  return typeof variant === 'string' && variant.toLowerCase() === 'narrow';
}
export function isBase(variant) {
  return typeof variant === 'string' && variant.toLowerCase() === 'base';
}
export function isHeadingLevelValid(level) {
  return (typeof level === 'string' || typeof level === 'number') && VALID_HEADING_LEVELS.includes(String(level));
}