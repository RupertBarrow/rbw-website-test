import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fentitlement.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_entitlement_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fentitlement.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_entitlement_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.9 19.9H35.2c-3.7 0-6.9 3.4-6.9 6.9H26c-2.6 0-4.6 2.1-4.6 4.7s2 4.6 4.6 4.6h2.3v9.3H26c-2.6 0-4.6 2-4.6 4.6s2 4.6 4.6 4.6h2.3v9.3H26c-2.6 0-4.6 2.1-4.6 4.6 0 2.6 2 4.6 4.6 4.6h2.3c0 4.6 3.2 6.9 6.9 6.9h36.7c3.7 0 6.9-3.2 6.9-6.9V26.8c-.1-3.7-3.2-6.9-6.9-6.9zM68.1 70c0 1.1-.9 2-2 2H40c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26.1c1.1 0 2 .9 2 2v2zM40 50.3l2.1-2.1c.6-.6 1.5-.6 2.1 0l5.2 5.1 12.8-12.7c.6-.6 1.5-.6 2.1 0l2.1 2.1c.5.6.5 1.6 0 2.1l-15 14.8c-.6.6-1.3.8-2.1.8s-1.5-.2-2.1-.8L40 52.4c-.7-.6-.7-1.5 0-2.1zm28.1-17.9c0 1.1-.9 2-2 2H40c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26.1c1.1 0 2 .9 2 2v2z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_entitlement"
}
