import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/opportunity.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_opportunity_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/opportunity.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_opportunity_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.1 69H28.9c-1 0-1.9.9-1.9 1.9v.1c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6v-.1c0-1-.9-1.9-1.9-1.9zM76 28c-3.3 0-6 2.7-6 6 0 1.8.8 3.5 2.1 4.6-1.7 3.9-5.6 6.6-10.2 6.4-5.3-.3-9.6-4.6-9.9-9.9 0-.9 0-1.7.2-2.5 2.2-.9 3.8-3 3.8-5.6 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 2.5 1.6 4.7 3.8 5.6.2.8.2 1.6.2 2.5-.3 5.3-4.6 9.6-9.9 9.9-4.6.3-8.6-2.5-10.2-6.4 1.3-1.1 2.1-2.8 2.1-4.6 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6l2.8 21.4c.1.9.9 1.6 1.9 1.6h42.6c.9 0 1.7-.7 1.9-1.6L76 40c3.3 0 6-2.7 6-6s-2.7-6-6-6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_opportunity"
}
