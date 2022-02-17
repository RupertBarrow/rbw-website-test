import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fcase_transcript.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_case_transcript_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl#buildTemplates%2Fstandard%2Fcase_transcript.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_case_transcript_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38 30h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zM74 36H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zM61 67c0 1.7-1.3 3-3 3H44c-1.7 0-3-1.3-3-3V48c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v6c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1v12zm0-15.7c0 .4-.3.7-.7.7H56c-1.1 0-2-.9-2-2v-4.3c0-.4.3-.7.7-.7.2 0 .4.1.5.2l5.6 5.6c.1.1.2.3.2.5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_case_transcript"
}
