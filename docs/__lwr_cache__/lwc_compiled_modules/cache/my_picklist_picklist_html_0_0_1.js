import _implicitStylesheets from "./picklist.css";

import _implicitScopedStylesheets from "./picklist.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, b: api_bind, k: api_key, i: api_iterator, f: api_flatten} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: {
      "slds-form-element": true
    },
    key: 0
  }, [api_element("label", {
    classMap: {
      "slds-form-element__label": true
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    attrs: {
      "title": "required"
    },
    key: 2
  }, [api_text("*")]) : null, api_element("span", {
    classMap: {},
    key: 3
  }, [api_text(api_dynamic_text($cmp.label))])]), api_element("div", {
    classMap: {
      "slds-form-element__control": true
    },
    key: 4
  }, [api_element("div", {
    classMap: {
      "slds-select_container": true
    },
    key: 5
  }, [api_element("select", {
    classMap: {
      "slds-select": true
    },
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "required": $cmp.required ? "" : null
    },
    key: 6,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.selectionChangeHandler))
    }
  }, api_flatten([api_element("option", {
    attrs: {
      "value": "Select"
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.placeholder))]), $cmp.options ? api_iterator($cmp.options, function (option) {
    return api_element("option", {
      classMap: {
        "uiInputSelectOption": true
      },
      attrs: {
        "value": option.value
      },
      key: api_key(8, option.label)
    }, [api_text(api_dynamic_text(option.label))]);
  }) : []]))])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "my-picklist_picklist"
