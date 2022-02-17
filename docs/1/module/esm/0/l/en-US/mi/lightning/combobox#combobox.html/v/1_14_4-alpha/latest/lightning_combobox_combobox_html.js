import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/combobox#combobox.css/v/1_14_4-alpha/latest/lightning_combobox_combobox_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/combobox#combobox.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_combobox_combobox_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning/helptext/v/1_14_4-alpha/latest/lightning_helptext.js";
import _lightningBaseCombobox from "/1/module/esm/0/l/en-US/mi/lightning/baseCombobox/v/1_14_4-alpha/latest/lightning_baseCombobox.js";
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
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("label", {
    className: $cmp.computedLabelClass,
    key: 0
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 1
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp._fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp._fieldLevelHelp
    },
    key: 2
  }) : null, api_element("div", stc1, [api_custom_element("lightning-base-combobox", _lightningBaseCombobox, {
    props: {
      "name": $cmp.name,
      "autocomplete": $cmp.autocomplete,
      "required": $cmp.required,
      "disabled": $cmp.disabled,
      "placeholder": $cmp.placeholder,
      "items": $cmp._items,
      "inputText": $cmp._selectedLabel,
      "inputLabel": $cmp.label,
      "inputIconSize": "xx-small",
      "inputIconName": "utility:down",
      "showDropdownActivityIndicator": $cmp.spinnerActive,
      "dropdownAlignment": $cmp.dropdownAlignment
    },
    key: 4,
    on: {
      "dropdownopen": _m0 || ($ctx._m0 = api_bind($cmp.handleDropdownOpen)),
      "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
      "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
      "ready": _m3 || ($ctx._m3 = api_bind($cmp.handleComboboxReady)),
      "select": _m4 || ($ctx._m4 = api_bind($cmp.handleSelect))
    }
  })]), $cmp._helpMessage ? api_element("div", {
    classMap: stc2,
    attrs: {
      "id": api_scoped_id("help-text"),
      "data-help-text": "",
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
  tmpl.stylesheetToken = "lightning-combobox_combobox"
}
