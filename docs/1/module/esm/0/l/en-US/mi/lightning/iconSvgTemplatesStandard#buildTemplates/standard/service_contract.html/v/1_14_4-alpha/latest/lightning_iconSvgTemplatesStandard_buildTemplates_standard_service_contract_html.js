import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fservice_contract.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_contract_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fservice_contract.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_contract_scoped_css?scoped=true.js";

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
    "d": "M69.1 28.9L55.9 15.7c-.3-.3-.6-.4-1-.4-.8 0-1.4.6-1.4 1.4v10.6c0 2.2 1.8 4 4 4h10.6c.8 0 1.4-.6 1.4-1.4 0-.4-.1-.7-.4-1zm.4 10.4c0-1.1-.9-2-2-2h-14c-3.3 0-6-2.7-6-6v-14c0-1.1-.9-2-2-2h-20c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h20.3c1.6 0 2-1.1 1.9-2.8s-.7-9 4.3-14.8 13.2-6.2 14.4-6.2c1.2 0 3.2-.1 3.1-1.8s0-10.4 0-10.4zm-43-11.4l4.9-.7c.1 0 .3-.1.3-.2l2.2-4.5c.2-.3.6-.3.8 0l2.2 4.5c.1.1.2.2.3.2l4.9.7c.3.1.5.5.2.7l-3.6 3.5c-.1.1-.1.2-.1.4l.8 4.9c.1.3-.3.6-.6.4l-4.4-2.3c-.1-.1-.3-.1-.4 0l-4.4 2.3c-.3.2-.7-.1-.6-.4l.8-4.9c0-.1 0-.3-.1-.4l-3.6-3.5c-.1-.2.1-.6.4-.7zm18 33.4c0 1.1-.9 2-2 2h-13c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v2zm11-12c0 1.1-.9 2-2 2h-24c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M66.3 56.2c-7.9 0-14.3 6.4-14.3 14.3s6.4 14.3 14.3 14.3 14.3-6.4 14.3-14.3-6.5-14.3-14.3-14.3zm2.5 15.6c-.4 0-.8-.1-1.2-.2L62.1 77c-.4.4-.8.5-1.2.5-.5 0-.8-.1-1.2-.5-.6-.6-.6-1.7 0-2.4l5.5-5.5c-.1-.3-.2-.7-.2-1.1-.2-2.5 1.8-4.8 4.3-4.8.4 0 .8.1 1.2.2.2 0 .2.2.1.4l-2.4 2.5c-.2.1-.2.5 0 .6l1.7 1.7c.2.2.5.2.7 0l2.4-2.4c.1-.1.4-.1.4.1.1.4.2.8.2 1.2-.1 2.5-2.2 4.5-4.8 4.3z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_service_contract"
}
