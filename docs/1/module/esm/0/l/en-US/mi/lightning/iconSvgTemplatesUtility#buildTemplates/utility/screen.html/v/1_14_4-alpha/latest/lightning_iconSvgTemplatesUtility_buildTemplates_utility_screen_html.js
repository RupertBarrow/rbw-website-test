import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fscreen.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_screen_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fscreen.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_screen_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v27.7c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6zm-6 24.2c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5V9.5C8 8.7 8.7 8 9.5 8h33c.8 0 1.5.7 1.5 1.5v20.7zM19 44c-2.2 0-4 1.8-4 4v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48c0-2.2-1.8-4-4-4H19z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M18 26.7h-4.1c-.6 0-1-.5-1-1V14c0-.6.4-1 1-1H18c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1zM38.1 26.7H24.8c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h13.3c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_screen"
}
