import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fnew_opportunity.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_opportunity_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fnew_opportunity.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_new_opportunity_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.8 41H10.2c-.8 0-1.4.7-1.4 1.4v.1c0 2.5 2 4.5 4.5 4.5h25.5c2.5 0 4.5-2 4.5-4.5v-.1c-.1-.7-.7-1.4-1.5-1.4zM45.5 10.2c-2.5 0-4.5 2-4.5 4.5 0 1.4.6 2.6 1.6 3.4-1.3 2.9-4.2 4.9-7.6 4.8-4-.2-7.2-3.4-7.4-7.4 0-.7 0-1.3.1-1.9 1.7-.7 2.9-2.2 2.9-4.2C30.5 7 28.5 5 26 5s-4.5 2-4.5 4.5c0 1.9 1.2 3.5 2.8 4.2.2.6.2 1.2.2 1.9-.2 4-3.4 7.2-7.4 7.4-3.4.2-6.4-1.9-7.7-4.8 1-.8 1.6-2.1 1.6-3.4 0-2.5-2-4.5-4.5-4.5S2 12.3 2 14.8s2 4.5 4.5 4.5l2.1 16c.1.7.7 1.2 1.4 1.2h32c.7 0 1.3-.5 1.4-1.2l2.1-16c2.5 0 4.5-2 4.5-4.5s-2-4.6-4.5-4.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_opportunity"
}
