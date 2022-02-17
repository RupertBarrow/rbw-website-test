import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fall.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_all_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fall.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_all_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M31.6 21.6c-1.2 0-2.2-1-2.2-2.2V5.5c0-1.2 1-2.2 2.2-2.2h14.2c1.2 0 2.2 1 2.2 2.2v13.9c0 1.2-1 2.2-2.2 2.2H31.6zM37.7 29.8l-8.2 8.9c-.5.5-.5 1.3 0 1.9l8.2 8.9c.5.6 1.5.6 2 0l8.2-8.9c.5-.5.5-1.3 0-1.9l-8.2-8.9c-.5-.6-1.4-.6-2 0z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M4.8 6.5L12 2.4c.7-.4 1.5-.4 2.1 0l7.1 4.1c.7.4 1.1 1.1 1.1 1.9v8.2c0 .8-.4 1.5-1.1 1.9l-7.1 4.1c-.7.4-1.5.4-2.1 0l-7.2-4.1c-.7-.4-1.1-1.1-1.1-1.9V8.4c0-.8.4-1.5 1.1-1.9z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "13",
    "cy": "39.4",
    "r": "9.3"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_all"
}
