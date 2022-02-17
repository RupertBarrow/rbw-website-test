import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ffeed.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_feed_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Ffeed.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_feed_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M49 72c-.4 0-.9-.1-1.4-.4-.8-.4-1.4-1.3-1.6-2.2l-7.8-31.2-6.5 14.9c-.4 1.2-1.5 1.9-2.7 1.9h-9c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h7l9.2-21.2c.5-1.2 1.7-1.9 3-1.8 1.3.1 2.4 1 2.7 2.3l7.9 31.6 10.4-23.1c.5-1.2 1.7-1.9 3-1.8 1.1.1 2.1.9 2.6 2L71 49h9c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H69c-1.2 0-2.3-.7-2.8-1.8l-3.3-7.7-11.2 24.7c-.5 1.1-1.5 1.8-2.7 1.8z"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_feed"
