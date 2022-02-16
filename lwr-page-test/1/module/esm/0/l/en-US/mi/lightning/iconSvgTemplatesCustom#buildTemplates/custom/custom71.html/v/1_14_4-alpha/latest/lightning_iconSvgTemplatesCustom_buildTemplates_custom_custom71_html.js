import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom71.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom71_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom71.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom71_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.2 30.8c-5.9-5.9-13.8-9-22.1-8.8-16 .5-29.1 14.2-29.1 30.6V62c0 3.3 2.7 6 6 6h4v4.8c0 2.601 1.9 4.9 4.5 5.2 3 .3 5.5-2.1 5.5-5V55.2c0-2.601-1.9-4.9-4.5-5.2-3-.3-5.5 2.1-5.5 5v7h-2c-1.1 0-2-.9-2-2v-7.4C26 39.4 36.5 28.4 49.3 28c6.601-.2 12.7 2.2 17.4 6.8C71.4 39.4 74 45.5 74 52v8c0 1.1-.9 2-2 2h-2v-6.8c0-2.601-1.9-4.9-4.5-5.2-3-.3-5.5 2.1-5.5 5v17.8c0 2.601 1.9 4.9 4.5 5.2 3 .3 5.5-2.1 5.5-5v-5h4c3.3 0 6-2.7 6-6v-9.4c0-8.1-3-16-8.8-21.8z"
  },
  key: 2,
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
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom71"
}
