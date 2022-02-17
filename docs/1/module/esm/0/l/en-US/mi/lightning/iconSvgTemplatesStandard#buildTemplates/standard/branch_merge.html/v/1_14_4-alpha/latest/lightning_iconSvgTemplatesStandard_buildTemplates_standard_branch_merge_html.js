import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fbranch_merge.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_branch_merge_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fbranch_merge.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_branch_merge_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.5 70.5c3.4-7 9.4-12 16.3-14.5 2.6-1 5.3-1.6 7.9-1.9h4.4v13.6c0 1.1 1.2 1.7 2.2 1L78.5 51c.8-.6.8-2 0-2.5L57.3 31.2c-.8-.6-2.2 0-2.2 1v13.7h-4.4c-2.7-.3-5.5-1-7.9-1.9-6.8-2.6-12.9-7.5-16.3-14.5-.4-1-1.6-1.4-2.6-1l-3.8 1.6c-1.1.5-1.4 1.6-.8 2.7 3.6 7.6 9.4 13.5 16.2 17.2-6.9 3.7-12.6 9.6-16.2 17.3-.5 1.1-.4 2.2.8 2.7l3.8 1.6c1 .4 2.2-.1 2.6-1.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_branch_merge"
}
