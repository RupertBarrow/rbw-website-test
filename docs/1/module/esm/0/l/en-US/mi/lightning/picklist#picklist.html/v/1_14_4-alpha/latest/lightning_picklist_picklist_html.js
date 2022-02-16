import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fpicklist%23picklist.css%2Fv%2F1_14_4-alpha/latest/lightning_picklist_picklist_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2Fpicklist%23picklist.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_picklist_picklist_scoped_css?scoped=true.js";

import _lightningDualListbox from "/1/module/esm/0/l/en-US/mi/lightning%2FdualListbox%2Fv%2F1_14_4-alpha/latest/lightning_dualListbox.js";
import _lightningCombobox from "/1/module/esm/0/l/en-US/mi/lightning%2Fcombobox%2Fv%2F1_14_4-alpha/latest/lightning_combobox.js";
import _lightningSelect from "/1/module/esm/0/l/en-US/mi/lightning%2Fselect%2Fv%2F1_14_4-alpha/latest/lightning_select.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [$cmp.isDesktop ? $cmp.multiple ? api_custom_element("lightning-dual-listbox", _lightningDualListbox, {
    props: {
      "label": $cmp.label,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "value": $cmp.internalValue,
      "options": $cmp.options,
      "size": $cmp.size,
      "disabled": $cmp.disabled,
      "required": $cmp.required,
      "showActivityIndicator": $cmp.showActivityIndicator,
      "disableReordering": $cmp.disableReordering,
      "sourceLabel": $cmp.i18n.available,
      "selectedLabel": $cmp.i18n.chosen
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur)),
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleChange))
    }
  }) : null : null, $cmp.isDesktop ? !$cmp.multiple ? api_custom_element("lightning-combobox", _lightningCombobox, {
    props: {
      "autocomplete": $cmp.autocomplete,
      "label": $cmp.label,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "name": $cmp.name,
      "placeholder": $cmp.placeholder,
      "variant": $cmp.variant,
      "value": $cmp.internalValue,
      "options": $cmp.options,
      "disabled": $cmp.disabled,
      "required": $cmp.required,
      "spinnerActive": $cmp.showActivityIndicator,
      "dropdownAlignment": "auto"
    },
    key: 1,
    on: {
      "focus": _m3 || ($ctx._m3 = api_bind($cmp.handleFocus)),
      "blur": _m4 || ($ctx._m4 = api_bind($cmp.handleBlur)),
      "change": _m5 || ($ctx._m5 = api_bind($cmp.handleChange)),
      "open": _m6 || ($ctx._m6 = api_bind($cmp.handleOpen))
    }
  }) : null : null, !$cmp.isDesktop ? api_custom_element("lightning-select", _lightningSelect, {
    props: {
      "autocomplete": $cmp.autocomplete,
      "label": $cmp.label,
      "multiple": $cmp.multiple,
      "fieldLevelHelp": $cmp.fieldLevelHelp,
      "name": $cmp.name,
      "variant": $cmp.variant,
      "value": $cmp.internalValue,
      "options": $cmp.options,
      "size": $cmp.size,
      "disabled": $cmp.disabled,
      "required": $cmp.required
    },
    key: 2,
    on: {
      "focus": _m7 || ($ctx._m7 = api_bind($cmp.handleFocus)),
      "blur": _m8 || ($ctx._m8 = api_bind($cmp.handleBlur)),
      "change": _m9 || ($ctx._m9 = api_bind($cmp.handleChange))
    }
  }) : null];
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
  tmpl.stylesheetToken = "lightning-picklist_picklist"
}
