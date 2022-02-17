import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Ftextarea%23textarea.css%2Fv%2F1_14_4-alpha/latest/lightning_textarea_textarea_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Ftextarea%23textarea.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_textarea_textarea_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning%2Fhelptext%2Fv%2F1_14_4-alpha/latest/lightning_helptext.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  "slds-required": true
};
const stc1 = {
  classMap: {
    "slds-form-element__control": true,
    "slds-grow": true,
    "textarea-container": true
  },
  key: 3
};
const stc2 = {
  "slds-textarea": true
};
const stc3 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("label", {
    className: $cmp.computedLabelClass,
    attrs: {
      "for": api_scoped_id("input")
    },
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 2
  }) : null, api_element("div", stc1, [api_element("textarea", {
    classMap: stc2,
    attrs: {
      "id": api_scoped_id("input"),
      "aria-describedby": api_scoped_id($cmp.computedUniqueHelpElementId),
      "autocomplete": $cmp.autocomplete,
      "readonly": $cmp.readOnly ? "" : null,
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "maxlength": $cmp.maxLength,
      "minlength": $cmp.minLength,
      "placeholder": $cmp.placeholder,
      "required": $cmp.required ? "" : null,
      "accesskey": $cmp.accessKey
    },
    key: 4,
    on: {
      "input": _m0 || ($ctx._m0 = api_bind($cmp.handleInput)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus)),
      "blur": _m3 || ($ctx._m3 = api_bind($cmp.handleBlur))
    }
  }, [api_text(api_dynamic_text($cmp._defaultValue))])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("help-message"),
      "data-help-message": "",
      "aria-live": "assertive"
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-textarea_textarea"
}
