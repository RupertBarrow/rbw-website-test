import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom93.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom93_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom93.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom93_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
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
    "d": "M20.1 26H44c.7 0 1.4-.5 1.5-1.2l4.4-14.9c.3-1-.5-2-1.5-2H11.5l-.6-2.2C10.5 4.7 9.5 4 8.5 4H4.6C3.3 4 2.1 4.9 2 6.2c-.1 1.3 1.1 2.5 2.4 2.5h2.3l7.6 25c.3 1 1.2 1.7 2.3 1.7h28.2c1.3 0 2.5-.9 2.6-2.2.1-1.3-1.1-2.5-2.4-2.5H20.2c-1.1 0-2-.7-2.3-1.6V29c-.5-1.5.7-3 2.2-3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "20.6",
    "cy": "44.1",
    "rx": "4",
    "ry": "3.9"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "40.1",
    "cy": "44.1",
    "rx": "4",
    "ry": "3.9"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("ellipse", stc3), api_element("ellipse", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom93"
}
