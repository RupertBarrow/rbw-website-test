import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Freward.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_reward_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Freward.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_reward_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.7 63.4L35 80l-3-8h-8l10.2-13.9c2 1.2 4.1 1.4 5.6 1.7.5.1 1.1.2 1.4.2.2.1.7.5 1 .8 1.2.8 2.7 2 4.5 2.6zm19.1-5.3c-2 1.2-4.1 1.4-5.6 1.7-.5.1-1.2.2-1.5.2-.2.1-.7.5-1 .8-1.1.8-2.5 2-4.4 2.6L65 80l3-8h8L65.8 58.1zM50 32c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm19 7c0 2.4-2.6 4.3-3.5 6.4-.9 2.2-.4 5.4-2.1 7-1.6 1.6-4.8 1.2-7 2.1-2.1.9-4 3.5-6.4 3.5s-4.3-2.6-6.4-3.5c-2.2-.9-5.4-.4-7-2.1-1.6-1.6-1.2-4.8-2.1-7-.9-2.1-3.5-4-3.5-6.4 0-2.4 2.6-4.3 3.5-6.4.9-2.2.4-5.4 2.1-7 1.6-1.6 4.8-1.2 7-2.1 2.1-.9 4-3.5 6.4-3.5s4.3 2.6 6.4 3.5c2.2.9 5.4.4 7 2.1 1.6 1.6 1.2 4.8 2.1 7 .9 2.1 3.5 4 3.5 6.4zm-6 0c0-7.2-5.8-13-13-13s-13 5.8-13 13 5.8 13 13 13 13-5.8 13-13z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_reward"
}
