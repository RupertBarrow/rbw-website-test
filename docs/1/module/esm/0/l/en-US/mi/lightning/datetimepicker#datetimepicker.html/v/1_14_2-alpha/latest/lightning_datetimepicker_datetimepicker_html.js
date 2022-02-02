import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fdatetimepicker%23datetimepicker.css%2Fv%2F1_14_2-alpha/latest/lightning_datetimepicker_datetimepicker_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fdatetimepicker%23datetimepicker.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_datetimepicker_datetimepicker_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning%2Fhelptext%2Fv%2F1_14_2-alpha/latest/lightning_helptext.js";
import _lightningDatepicker from "/1/module/esm/0/l/en-US/mi/lightning%2Fdatepicker%2Fv%2F1_14_2-alpha/latest/lightning_datepicker.js";
import _lightningTimepicker from "/1/module/esm/0/l/en-US/mi/lightning%2Ftimepicker%2Fv%2F1_14_2-alpha/latest/lightning_timepicker.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-form": true
    },
    attrs: {
      "tabindex": "-1"
    },
    key: 0
  }, [api_element("fieldset", {
    classMap: {
      "slds-form-element": true,
      "slds-form-element_compound": true
    },
    key: 1
  }, [!$cmp.hasExternalLabel ? api_element("legend", {
    className: $cmp.computedLabelClass,
    key: 2
  }, [api_text(api_dynamic_text($cmp.label))]) : null, !$cmp.hasExternalLabel ? $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }, []) : null : null, api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-form-element__group": true
    },
    key: 5
  }, [api_element("div", {
    classMap: {
      "slds-form-element__row": true
    },
    key: 6
  }, [api_custom_element("lightning-datepicker", _lightningDatepicker, {
    classMap: {
      "slds-form-element": true
    },
    props: {
      "autocomplete": $cmp.autocomplete,
      "min": $cmp.dateMin,
      "max": $cmp.dateMax,
      "label": $cmp.i18n.date,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "placeholder": $cmp.placeholder,
      "readOnly": $cmp.readOnly,
      "disabled": $cmp.disabled,
      "dateStyle": $cmp.dateStyle,
      "required": $cmp.required
    },
    key: 7,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleDatepickerFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleDatepickerBlur)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleDateChange))
    }
  }, []), api_custom_element("lightning-timepicker", _lightningTimepicker, {
    classMap: {
      "slds-form-element": true
    },
    props: {
      "autocomplete": $cmp.autocomplete,
      "label": $cmp.i18n.time,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "timeStyle": $cmp.timeStyle,
      "placeholder": $cmp.placeholder,
      "readOnly": $cmp.readOnly,
      "required": $cmp.required,
      "disabled": $cmp.disabled
    },
    key: 8,
    on: {
      "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleTimepickerFocus)),
      "blur": _m4 || ($ctx._m4 = api_bind($cmp.handleTimepickerBlur)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.handleTimeChange))
    }
  }, [])])])]), $cmp.customErrorMessage ? api_element("div", {
    classMap: {
      "slds-form-element__help": true
    },
    attrs: {
      "data-error-message": "",
      "id": api_scoped_id("errormessage"),
      "aria-live": "assertive"
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.customErrorMessage))]) : null])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-datetimepicker_datetimepicker"
