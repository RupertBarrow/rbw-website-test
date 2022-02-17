import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/datepicker#datepicker.css/v/1_14_3-alpha/latest/lightning_datepicker_datepicker_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/datepicker#datepicker.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_datepicker_datepicker_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning/helptext/v/1_14_3-alpha/latest/lightning_helptext.js";
import _lightningButtonIcon from "/1/module/esm/0/l/en-US/mi/lightning/buttonIcon/v/1_14_3-alpha/latest/lightning_buttonIcon.js";
import _lightningCalendar from "/1/module/esm/0/l/en-US/mi/lightning/calendar/v/1_14_3-alpha/latest/lightning_calendar.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10, _m11, _m12, _m13, _m14} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-dropdown-trigger": true,
      "slds-dropdown-trigger_click": true,
      "slds-size_1-of-1": true
    },
    attrs: {
      "role": "group"
    },
    key: 0
  }, [!$cmp.hasExternalLabel ? api_element("label", {
    className: $cmp.computedLabelClass,
    attrs: {
      "for": api_scoped_id("input")
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }, []) : null : null, $cmp.isRangeMessageVisible ? api_element("span", {
    classMap: {
      "slds-assistive-text": true
    },
    attrs: {
      "id": api_scoped_id("range-message"),
      "data-range-message": ""
    },
    key: 4
  }, [api_text(api_dynamic_text($cmp.rangeMessage))]) : null, api_element("div", {
    classMap: {
      "slds-form-element__control": true,
      "slds-input-has-icon": true,
      "slds-input-has-icon_right": true
    },
    key: 5
  }, [api_element("input", {
    classMap: {
      "slds-input": true
    },
    attrs: {
      "type": "text",
      "id": api_scoped_id("input"),
      "name": $cmp.name,
      "placeholder": $cmp.placeholder,
      "aria-label": $cmp.ariaLabel,
      "required": $cmp.required ? "" : null,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null,
      "autocomplete": $cmp.autocomplete
    },
    props: {
      "value": $cmp.displayValue
    },
    key: 6,
    on: {
      "input": _m0 || ($ctx._m0 = api_bind($cmp.handleInput)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleInputChange)),
      "focusin": _m2 || ($ctx._m2 = api_bind($cmp.onFocusIn)),
      "focusout": _m3 || ($ctx._m3 = api_bind($cmp.handleInputBlur)),
      "keydown": _m4 || ($ctx._m4 = api_bind($cmp.handleInputKeydown)),
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleInputClick))
    }
  }, []), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    classMap: {
      "slds-input__icon": true,
      "slds-input__icon_right": true
    },
    props: {
      "iconName": "utility:event",
      "variant": "bare",
      "disabled": $cmp.computedIconDisabledState,
      "title": $cmp.computedSelectDateLabel,
      "alternativeText": $cmp.computedSelectDateLabel
    },
    key: 7,
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.handleDatePickerIconClick)),
      "keydown": _m7 || ($ctx._m7 = api_bind($cmp.handleDatePickerIconKeyDown)),
      "focusin": _m8 || ($ctx._m8 = api_bind($cmp.onFocusIn)),
      "focusout": _m9 || ($ctx._m9 = api_bind($cmp.onFocusOut))
    }
  }, []), $cmp.isCalendarVisible ? api_custom_element("lightning-calendar", _lightningCalendar, {
    props: {
      "value": $cmp.value,
      "min": $cmp.min,
      "max": $cmp.max
    },
    key: 8,
    on: {
      "select": _m10 || ($ctx._m10 = api_bind($cmp.handleDateSelect)),
      "ready": _m11 || ($ctx._m11 = api_bind($cmp.startPositioning)),
      "keydown": _m12 || ($ctx._m12 = api_bind($cmp.handleCalendarKeyDown)),
      "focusin": _m13 || ($ctx._m13 = api_bind($cmp.onFocusIn)),
      "focusout": _m14 || ($ctx._m14 = api_bind($cmp.onFocusOut))
    }
  }, []) : null])]), $cmp.errorMessage ? api_element("div", {
    classMap: {
      "slds-form-element__help": true
    },
    attrs: {
      "id": api_scoped_id("error-message"),
      "data-error-message": "",
      "aria-live": "assertive"
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.errorMessage))]) : null];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-datepicker_datepicker"
