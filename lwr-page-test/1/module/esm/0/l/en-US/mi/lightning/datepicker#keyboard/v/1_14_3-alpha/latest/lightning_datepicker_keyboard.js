import { normalizeKeyValue } from '/1/module/esm/0/l/en-US/mi/lightning/utilsPrivate/v/1_14_3-alpha/latest/lightning_utilsPrivate.js';
export function handleKeyDownOnDatePickerIcon(event, datepickerInterface) {
  switch (normalizeKeyValue(event.key)) {
    case 'Enter':
    case ' ':
      preventDefaultAndStopPropagation(event);
      datepickerInterface.showCalendar();
      break;

    case 'Escape':
      preventDefaultAndStopPropagation(event);
      datepickerInterface.hideCalendar();
      break;

    default:
  }
}
export function handleBasicKeyDownBehaviour(event, datepickerInterface) {
  if (!datepickerInterface.isCalendarVisible()) {
    return;
  }

  if (normalizeKeyValue(event.key) === 'Escape') {
    preventDefaultAndStopPropagation(event);
    datepickerInterface.hideCalendar();
  }
}

function preventDefaultAndStopPropagation(event) {
  event.preventDefault();
  event.stopPropagation();
}