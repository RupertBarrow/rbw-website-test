import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fservice_request.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_request_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fservice_request.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_service_request_scoped_css?scoped=true.js";

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
    "d": "M38.63 57.24a9.33 9.33 0 01-.48 2.47l11.51 12.12a3.64 3.64 0 011 2.52 2.82 2.82 0 01-1.1 2.46 4.08 4.08 0 01-5.19-.13L32.84 64.56a9.49 9.49 0 01-2.5.35 9.68 9.68 0 01-10.13-9.6 8.53 8.53 0 01.48-2.47c0-.42.42-.41.83-.19l5.05 5.52a.77.77 0 001.24 0l3.62-3.43a1 1 0 000-1.45L26.41 48c-.2-.21-.18-.83.23-.82a11.94 11.94 0 012.5-.35 9.26 9.26 0 019.49 10.41z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M78.67 34.7a15.51 15.51 0 00-3-5.74 13.63 13.63 0 00-6.11-4.16 15.14 15.14 0 00-3.89-.75 13.12 13.12 0 00-5.88.9 15.58 15.58 0 00-5.52 3.79c-.62.65-1.18 1.35-1.79 2l-.14-.18a20.11 20.11 0 00-3.12-3.27 14.81 14.81 0 00-4.28-2.49 13.56 13.56 0 00-5.75-.78 14.49 14.49 0 00-5.52 1.49 14 14 0 00-6.53 6.89 18.63 18.63 0 00-1.63 7.08 17.09 17.09 0 00.27 3.72l.25-.05a16.11 16.11 0 013.07-.4h.19a13.28 13.28 0 0113.4 14.7 8.42 8.42 0 01-.09 1L52.6 69a7.67 7.67 0 012 3.92 106.59 106.59 0 0011.36-9.43 67.92 67.92 0 007.48-8.33 37.33 37.33 0 004.08-6.71A20.19 20.19 0 0079.37 42a19 19 0 00-.7-7.3z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_service_request"
}
