import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fleave_group.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_leave_group_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%23buildTemplates%2Faction%2Fleave_group.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesAction_buildTemplates_action_leave_group_scoped_css?scoped=true.js";

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
    "d": "M30.3 22.1c-2-.9-2.4-1.7-2.4-2.6 0-.9.6-1.7 1.2-2.4 1.2-1.1 1.8-2.7 1.8-4.6C31 9 29 6 25.3 6c-2.2 0-3.7 1.1-4.7 2.7 2.5 1.9 4 5.2 4 9 0 2.2-.6 4.3-1.7 6.1-.4.6-.2 1.5.5 1.9 2.1 1.1 4.5 2.5 5.9 4.9.2.4.6.5 1.1.5h2.7c1.7 0 2.9-1.2 2.9-3.1-.1-2.9-2.8-4.6-5.7-5.9z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M19.7 28.1c-2.3-1-2.6-1.9-2.6-2.9s.6-2 1.4-2.7c1.3-1.3 2-3.1 2-5.2 0-3.9-2.3-7.3-6.3-7.3h-.4c-4 0-6.3 3.4-6.3 7.3 0 2.1.7 3.9 2 5.2.8.7 1.4 1.7 1.4 2.7 0 1-.3 1.9-2.6 2.9-3.3 1.5-6.4 3-6.5 6.1C2 36.4 3.5 38 5.4 38h17.4c1.9 0 3.4-1.6 3.4-3.7-.1-3.2-3.3-4.7-6.5-6.2z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M32 42.5v-3c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5z"
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
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)]), api_element("path", stc4)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_leave_group"
}
