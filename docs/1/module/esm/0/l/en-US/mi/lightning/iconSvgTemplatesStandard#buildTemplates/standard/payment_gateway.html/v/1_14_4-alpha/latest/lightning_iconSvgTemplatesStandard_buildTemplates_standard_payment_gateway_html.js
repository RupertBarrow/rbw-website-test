import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpayment_gateway.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_payment_gateway_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fpayment_gateway.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_payment_gateway_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M41.94 25.34a22.45 22.45 0 000 44.88h1V52.43c0-1.33 1-3 2.35-3h19c0-.74.07-1.25.07-1.65a22.52 22.52 0 00-22.42-22.44zm17.91 20.52h-5.78A33.5 33.5 0 0050.9 32.4a18.16 18.16 0 018.95 13.46zM39.37 31.11v14.75h-5.13c.39-7.03 2.61-12.59 5.13-14.75zm0 18.59v14.74c-2.5-2.17-4.74-7.7-5.13-14.74zm5.13-3.84V31.11c2.5 2.16 4.76 7.72 5.13 14.75zM33 32.4a34.57 34.57 0 00-3.2 13.46H24a18.11 18.11 0 019-13.46zm-9 17.94h5.81A33.55 33.55 0 0033 63.76a18.11 18.11 0 01-9-13.42z",
    "fill-rule": "evenodd"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M76.89 53.2H49.66a3.13 3.13 0 00-3.13 3.13v15.2a3.13 3.13 0 003.13 3.13h27.23A3.13 3.13 0 0080 71.53v-15.2a3.13 3.13 0 00-3.11-3.13zM53.32 71.53a3.65 3.65 0 00-3.55-3.75h-.1V60a3.65 3.65 0 003.75-3.55v-.14H73.2A3.65 3.65 0 0076.79 60h.1v7.82a3.66 3.66 0 00-3.75 3.58v.11z",
    "fill-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "63.27",
    "cy": "63.66",
    "r": "5.25"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("circle", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_payment_gateway"
}
