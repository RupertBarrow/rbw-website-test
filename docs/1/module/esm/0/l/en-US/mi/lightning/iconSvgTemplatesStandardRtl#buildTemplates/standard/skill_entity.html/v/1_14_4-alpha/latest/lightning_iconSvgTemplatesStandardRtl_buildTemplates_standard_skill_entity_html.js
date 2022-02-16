import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fskill_entity.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_skill_entity_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fskill_entity.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_skill_entity_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.3 55.7L70 44.9V44c0-13.2-10.8-24-24-24-1.9 0-3.8.2-5.7.7C29.7 23.1 22 32.9 22 44c0 4.9 1.2 9.3 3.6 12.7 4.2 6 7 10.8 5.3 17.3-.4 1.5-.1 3 .9 4.2.9 1.2 2.2 1.8 3.7 1.8h19.7c2.3 0 4.3-1.6 4.7-3.8.1-.4.2-.8.2-1.2.2-1.2 1.2-2 2.4-2h1.4c2.2 0 4.1-1.3 4.7-3.4.6-2.3 1.4-5.6 1.5-9.6h5.2c.9 0 1.8-.8 2.2-1.6.4-.8.3-2.1-.2-2.7zM61.4 42c-.8 1.3-2.4 2-4.7 2-12.3 0-13.2 9-13.2 13.3 0 2-1.6 3.7-3.6 3.7h-.3c-1.7 0-3.1-1.2-3.5-2.9-.4-1.8-1.6-2.8-2.8-3.7-.8-.6-1.6-1.2-2-2.1-1.1-2.3-2.2-5-2.2-8.4 0-7.8 5.4-14.6 12.7-16.3 1.4-.3 2.7-.5 4.1-.5 6.8 0 12.9 4.1 15.5 10.3.1.3 1.2 2.7 0 4.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_skill_entity"
}
