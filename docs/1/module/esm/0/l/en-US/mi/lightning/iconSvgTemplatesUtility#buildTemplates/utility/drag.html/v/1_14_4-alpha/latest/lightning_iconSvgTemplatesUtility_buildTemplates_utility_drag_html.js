import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/drag.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_drag_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/drag.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_drag_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M30.9 34.3c0 1.8-2.2 2.5-3.2 1l-2-4.3c-1.1-1.9-3.5-2.3-5.3-1.1l-1.3 1 6.7 15.9c.3.7 1 1.1 1.8 1.1h17.6c.9 0 1.6-.6 1.8-1.4l3.1-11.1c.8-3.1-1-6.1-3.8-7.2l-8-2.7c-11.3-4.1-7.6 8.4-7.4 8.8zM1.8 28.5h5.8v5.8H1.8zM14.4 4h5.8v5.8h-5.8zM14.4 42h5.8v5.8h-5.8zM1.8 15.8h5.8v5.8H1.8zM1.8 4.1h5.8v5.8H1.8zM27.1 4h5.8v5.8h-5.8zM39.8 4h5.8v5.8h-5.8zM1.8 42.1h5.8v5.8H1.8zM39.8 16.8h5.8v5.8h-5.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_drag"
}
