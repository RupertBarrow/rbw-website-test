import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/overflow.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_overflow_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/overflow.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_overflow_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.3 9.9H15.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V13.6c.1-2-1.6-3.7-3.6-3.7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M45.3 2H23.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V5.7c.1-2-1.6-3.7-3.6-3.7z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M32.6 21.8c0-2-1.7-3.7-3.7-3.7H6.7c-2.1 0-3.7 1.7-3.7 3.7v24.5c0 2 1.7 3.7 3.7 3.7h22.2c2.1 0 3.7-1.7 3.7-3.7V21.8z"
  },
  key: 4,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_overflow"
}
