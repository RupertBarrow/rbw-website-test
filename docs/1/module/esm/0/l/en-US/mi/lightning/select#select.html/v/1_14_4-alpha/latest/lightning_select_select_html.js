import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/select#select.css/v/1_14_4-alpha/latest/lightning_select_select_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/select#select.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_select_select_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning/helptext/v/1_14_4-alpha/latest/lightning_helptext.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  "slds-required": true
};
const stc1 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-select_container": true
  },
  key: 4
};
const stc3 = {
  "slds-select": true
};
const stc4 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, k: api_key, i: api_iterator} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [api_element("label", {
    className: $cmp.computedLabelClass,
    attrs: {
      "for": api_scoped_id("select")
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
  }) : null, api_element("div", stc1, [api_element("div", stc2, [api_element("select", {
    classMap: stc3,
    attrs: {
      "autocomplete": $cmp.autocomplete,
      "disabled": $cmp.disabled ? "" : null,
      "id": api_scoped_id("select"),
      "multiple": $cmp.multiple ? "" : null,
      "name": $cmp.name,
      "required": $cmp.required ? "" : null,
      "accesskey": $cmp.accessKey,
      "size": $cmp.size
    },
    key: 5,
    on: {
      "blur": _m0 || ($ctx._m0 = api_bind($cmp.handleBlur)),
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange)),
      "focus": _m2 || ($ctx._m2 = api_bind($cmp.handleFocus))
    }
  }, api_iterator($cmp.options, function (option) {
    return [option.disabled ? api_element("option", {
      attrs: {
        "disabled": "",
        "value": option.value
      },
      key: api_key(6, option.value)
    }, [api_text(api_dynamic_text(option.label))]) : null, !option.disabled ? api_element("option", {
      attrs: {
        "value": option.value
      },
      key: api_key(7, option.value)
    }, [api_text(api_dynamic_text(option.label))]) : null];
  }))])]), $cmp._helpMessage ? api_element("div", {
    classMap: stc4,
    attrs: {
      "aria-live": "assertive",
      "data-help-message": "",
      "id": api_scoped_id("help-message")
    },
    key: 8
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
  tmpl.stylesheetToken = "lightning-select_select"
}
