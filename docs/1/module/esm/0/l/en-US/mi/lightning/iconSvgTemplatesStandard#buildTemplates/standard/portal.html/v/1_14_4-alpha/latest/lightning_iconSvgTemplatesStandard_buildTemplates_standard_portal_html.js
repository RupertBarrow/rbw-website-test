import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/portal.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_portal_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/portal.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_portal_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M72 22H28c-3.3 0-6 2.7-6 6v44c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V28c0-3.3-2.7-6-6-6zM59 62.6c.3 1.2-.7 2.4-1.9 2.4H43c-1.3 0-2.2-1.2-1.9-2.4l3.2-11c-3.1-2.2-4.9-6.1-4.1-10.4.8-4 3.9-7.2 7.9-7.9C54.4 32 60 36.9 60 43.2c0 3.5-1.7 6.5-4.3 8.3L59 62.6z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_portal"
}
