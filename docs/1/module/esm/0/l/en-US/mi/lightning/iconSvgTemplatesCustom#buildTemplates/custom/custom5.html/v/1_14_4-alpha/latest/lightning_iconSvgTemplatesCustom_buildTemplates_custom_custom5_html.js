import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom5.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom5_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%23buildTemplates%2Fcustom%2Fcustom5.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesCustom_buildTemplates_custom_custom5_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.8 25.5c-10.2-3.9-22.1-4.8-32.5-1.4-9.3 3.1-18.8 10-20.2 20.4-.3 2.2-.2 4.5.3 6.6.2 1.101.6 2.2 1 3.301.2.6.4 1.1.7 1.6l-1.2 1.8C24 62.3 22 67.4 20.8 72.6c-.5 2.2-1.7 5.4.6 7 .9.601 2.2.601 3.1.101 1.2-.7 1.4-1.9 1.6-3.2.9-5.3 2.7-10.6 5.6-15.1 1.4-2.2 2.9-4.4 4.6-6.4 1.5-1.6 3.7-4.7 6.2-3.8 2.5.899 2.4 3.8.7 5.3s-3.1 3.1-3.1 5.5c0 1.8.8 3.6 2.3 4.8 2 1.601 6 2 8.4 1.8 5.3-.3 9.601-1.899 13.9-5C70.3 59.7 72.5 52.9 73.6 46.4c.7-4 1.2-8 2.601-11.8.6-1.6 1.399-3.2 2.3-4.6.4-.7 1.2-1.5 1.4-2.3.299-1-.301-1.9-1.101-2.2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom5"
}
