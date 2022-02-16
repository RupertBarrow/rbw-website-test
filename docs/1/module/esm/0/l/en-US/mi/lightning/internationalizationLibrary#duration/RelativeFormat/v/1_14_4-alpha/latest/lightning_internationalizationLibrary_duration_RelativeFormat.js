import { duration, displayDuration } from '/1/module/esm/0/l/en-US/mi/lightning%2FinternationalizationLibrary%23localizationService%2Fv%2F1_14_4-alpha/latest/lightning_internationalizationLibrary_localizationService.js';
import { assert } from '/1/module/esm/0/l/en-US/mi/lightning%2FutilsPrivate%2Fv%2F1_14_4-alpha/latest/lightning_utilsPrivate.js';
const MINUTE_MILLISECONDS = 1000 * 60;
export function relativeFormat() {
  return {
    format: value => {
      const now = Date.now();
      const timestamp = Number(value);
      assert(isFinite(timestamp), `RelativeFormat: The value attribute accepts either a Date object or a timestamp, but we are getting the ${typeof value} value "${value}" instead.`);
      const getDiffInMinutes = (timestamp - now) / MINUTE_MILLISECONDS;
      const durationData = duration(getDiffInMinutes, 'minutes');
      return displayDuration(durationData, true);
    }
  };
}