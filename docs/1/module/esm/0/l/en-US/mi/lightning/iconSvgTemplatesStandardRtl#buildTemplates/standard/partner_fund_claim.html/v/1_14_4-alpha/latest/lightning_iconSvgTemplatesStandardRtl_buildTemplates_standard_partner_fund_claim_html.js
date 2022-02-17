import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fpartner_fund_claim.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_partner_fund_claim_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fpartner_fund_claim.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_partner_fund_claim_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M56.5 34h9.4c.7 0 1.3-.6 1.3-1.3 0-.3-.1-.6-.3-.9L55.1 20.3c-.3-.2-.6-.3-.9-.3-.7 0-1.3.6-1.3 1.3v9.2c.1 1.9 1.7 3.5 3.6 3.5z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M38.6 65c0-3.5 2-6.6 5.2-7.8 2.6-1 5.2-1.6 8-1.6 4 0 7.4 1.1 10.5 2 1.7.5 3.3 1 4.8 1.3l.2-18c0-.9-.8-1.7-1.7-1.7H53c-3 0-5.2-2.4-5.2-5.2V21.7c0-.9-.8-1.7-1.8-1.7H28.2c-2.9 0-5.2 2.4-5.2 5.2v42c0 2.9 2.4 5.2 5.2 5.2h10.4V65z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M72.4 64.9c-9.1 2.8-16.3-5.8-26.2-1.7-.8.3-1.2 1-1.2 1.8v10.4c0 1.4 1.2 2.2 2.4 1.8 9.9-3 17 5.6 26.3 1.7.7-.3 1.3-1 1.3-1.8V66.8c0-1.3-1.3-2.2-2.6-1.9zm-12.1 9.7c-2.1 0-3.9-1.7-3.9-3.9 0-2.1 1.7-3.9 3.9-3.9s3.9 1.7 3.9 3.9-1.7 3.9-3.9 3.9z"
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
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_partner_fund_claim"
}
