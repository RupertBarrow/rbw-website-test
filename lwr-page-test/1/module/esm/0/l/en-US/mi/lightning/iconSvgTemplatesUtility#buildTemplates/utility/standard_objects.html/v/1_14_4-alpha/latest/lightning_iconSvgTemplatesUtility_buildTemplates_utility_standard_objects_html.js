import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fstandard_objects.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_standard_objects_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fstandard_objects.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_standard_objects_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.2 38.9L27.4 49.6c-1 .6-2.3.6-3.3 0L5.4 38.9c-.8-.4-.8-1.4 0-1.8l4.4-2.5c.3-.2.7-.2 1 0l11.4 6.5c1.1.6 2.3.9 3.6.9s2.5-.3 3.6-.9l11.4-6.5c.3-.2.7-.2 1 0l4.4 2.5c.8.4.8 1.4 0 1.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.2 26.9L27.4 37.6c-1 .6-2.3.6-3.3 0L5.4 26.9c-.8-.4-.8-1.4 0-1.8l4.4-2.5c.3-.2.7-.2 1 0l11.4 6.5c1.1.6 2.3.9 3.6.9s2.5-.3 3.6-.9l11.4-6.5c.3-.2.7-.2 1 0l4.4 2.5c.8.4.8 1.4 0 1.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M24.3 25.6L5.5 14.9c-.8-.4-.8-1.4 0-1.8L24.3 2.4c1-.6 2.3-.6 3.3 0l18.8 10.7c.8.4.8 1.4 0 1.8L27.6 25.6c-1 .5-2.3.5-3.3 0z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_standard_objects"
}
