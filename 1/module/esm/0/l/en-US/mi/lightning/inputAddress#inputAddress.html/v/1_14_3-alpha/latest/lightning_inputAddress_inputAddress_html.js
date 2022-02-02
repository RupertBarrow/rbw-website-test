import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FinputAddress%23inputAddress.css%2Fv%2F1_14_3-alpha/latest/lightning_inputAddress_inputAddress_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FinputAddress%23inputAddress.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_3-alpha/latest/lightning_inputAddress_inputAddress_scoped_css?scoped=true.js";

import _lightningHelptext from "/1/module/esm/0/l/en-US/mi/lightning%2Fhelptext%2Fv%2F1_14_3-alpha/latest/lightning_helptext.js";
import _lightningLookupAddress from "/1/module/esm/0/l/en-US/mi/lightning%2FlookupAddress%2Fv%2F1_14_3-alpha/latest/lightning_lookupAddress.js";
import _lightningInput from "/1/module/esm/0/l/en-US/mi/lightning%2Finput%2Fv%2F1_14_3-alpha/latest/lightning_input.js";
import _lightningTextarea from "/1/module/esm/0/l/en-US/mi/lightning%2Ftextarea%2Fv%2F1_14_3-alpha/latest/lightning_textarea.js";
import _lightningPicklist from "/1/module/esm/0/l/en-US/mi/lightning%2Fpicklist%2Fv%2F1_14_3-alpha/latest/lightning_picklist.js";
import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, k: api_key, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("fieldset", {
    classMap: {
      "slds-form-element": true
    },
    key: 0
  }, [api_element("legend", {
    className: $cmp.computedLegendClass,
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: {
      "slds-required": true
    },
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.addressLabel))]), $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }, []) : null, api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-form-element__group": true
    },
    key: 5
  }, api_flatten([$cmp.showAddressLookup ? api_element("div", {
    classMap: {
      "slds-form-element__row": true,
      "slds-grow": true
    },
    key: 6
  }, [api_custom_element("lightning-lookup-address", _lightningLookupAddress, {
    classMap: {
      "slds-form-element": true,
      "slds-show": true,
      "slds-size_6-of-6": true
    },
    props: {
      "placeholder": $cmp.addressLookupPlaceholder,
      "disabled": $cmp.disabled
    },
    key: 7,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleAddress))
    }
  }, [])]) : null, api_iterator($cmp.domFieldsMeta, function (row, index) {
    return api_element("div", {
      classMap: {
        "slds-form-element__row": true
      },
      key: api_key(8, row.name)
    }, api_iterator(row, function (field) {
      return [field.isInput ? api_custom_element("lightning-input", _lightningInput, {
        className: field.classnames,
        attrs: {
          "data-field": field.name
        },
        props: {
          "label": field.label,
          "name": field.name,
          "autocomplete": field.autocomplete,
          "value": field.value,
          "maxLength": field.maxlength,
          "placeholder": field.placeholder,
          "required": field.required,
          "disabled": field.disabled,
          "readOnly": $cmp.readOnly
        },
        key: api_key(9, field.name),
        on: {
          "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
          "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur)),
          "change": _m3 || ($ctx._m3 = api_bind($cmp.handleChange))
        }
      }, []) : null, field.isTextArea ? api_custom_element("lightning-textarea", _lightningTextarea, {
        className: field.classnames,
        attrs: {
          "data-field": field.name
        },
        props: {
          "name": field.name,
          "label": field.label,
          "value": field.value,
          "autocomplete": field.autocomplete,
          "maxLength": field.maxlength,
          "placeholder": field.placeholder,
          "required": field.required,
          "disabled": field.disabled,
          "readOnly": $cmp.readOnly
        },
        key: api_key(10, field.name),
        on: {
          "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFocus)),
          "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur)),
          "change": _m6 || ($ctx._m6 = api_bind($cmp.handleChange))
        }
      }, []) : null, field.isPicklist ? api_custom_element("lightning-picklist", _lightningPicklist, {
        className: field.classnames,
        attrs: {
          "data-field": field.name
        },
        props: {
          "name": field.name,
          "label": field.label,
          "autocomplete": field.autocomplete,
          "options": field.options,
          "value": field.value,
          "placeholder": field.placeholder,
          "required": field.required,
          "disabled": field.disabled
        },
        key: api_key(11, field.name),
        on: {
          "focus": _m7 || ($ctx._m7 = api_bind($cmp.handleFocus)),
          "blur": _m8 || ($ctx._m8 = api_bind($cmp.handleBlur)),
          "change": _m9 || ($ctx._m9 = api_bind($cmp.handleChange))
        }
      }, []) : null];
    }));
  })]))])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-inputAddress_inputAddress"
