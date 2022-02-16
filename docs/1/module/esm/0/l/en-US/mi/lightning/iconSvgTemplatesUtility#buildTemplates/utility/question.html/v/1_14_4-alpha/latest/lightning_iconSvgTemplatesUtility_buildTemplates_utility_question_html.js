import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fquestion.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_question_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fquestion.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_question_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M28.4 38h-5c-.8 0-1.4-.6-1.4-1.4v-1.5c0-4.2 2.7-8 6.7-9.4 1.2-.4 2.3-1.1 3.2-2.1 5-6 .4-13.2-5.6-13.4-2.2-.1-4.3.7-5.9 2.2-1.3 1.2-2.1 2.7-2.3 4.4-.1.6-.7 1.1-1.5 1.1h-5c-.9 0-1.6-.7-1.5-1.6.4-3.8 2.1-7.2 4.8-9.9 3.2-3 7.3-4.6 11.7-4.5C34.9 2.2 41.7 9 42 17.3c.3 7-4 13.3-10.5 15.7-.9.4-1.5 1.1-1.5 2v1.5c0 .9-.8 1.5-1.6 1.5zM30 48.5c0 .8-.7 1.5-1.5 1.5h-5c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h5c.8 0 1.5.7 1.5 1.5v5z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_question"
}
