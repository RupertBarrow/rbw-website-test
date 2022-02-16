import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fwifi.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_wifi_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fwifi.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_wifi_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.7 15.8c-5.5-6.1-13.3-9.5-21.6-9.5S10 9.7 4.5 15.8c-.4.4-.3 1.1.1 1.4l3 2.6c.4.4 1 .3 1.4-.1 4.4-4.7 10.6-7.4 17.1-7.4s12.7 2.7 17.1 7.4c.4.4 1 .4 1.4.1l3-2.6c.4-.4.5-1 .1-1.4zM26.1 20.3c-4.2 0-8.2 1.8-11 5-.4.4-.3 1.1.1 1.5l3.2 2.4c.4.3 1 .3 1.3-.1 1.7-1.8 4-2.8 6.4-2.8s4.7 1 6.3 2.7c.3.4.9.4 1.3.1l3.2-2.4c.5-.4.5-1 .1-1.5-2.7-3.1-6.7-4.9-10.9-4.9zM26.2 34.2c2.7 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_wifi"
}
