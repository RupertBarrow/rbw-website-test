import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom11.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom11_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesActionRtl#buildTemplates/action/new_custom11.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesActionRtl_buildTemplates_action_new_custom11_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.8 3.1l6.4 13.5 14.2 2.2c1.6.2 2.2 2.3 1 3.4L39.1 32.8l2.4 14.8c.2 1.7-1.4 3-2.8 2.2l-12.7-7-12.7 7c-1.4.8-3.1-.5-2.8-2.2l2.4-14.8L2.6 22.2c-1.1-1.2-.5-3.2 1-3.4l14.2-2.2 6.4-13.5c.8-1.5 2.9-1.5 3.6 0z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom11"
}
