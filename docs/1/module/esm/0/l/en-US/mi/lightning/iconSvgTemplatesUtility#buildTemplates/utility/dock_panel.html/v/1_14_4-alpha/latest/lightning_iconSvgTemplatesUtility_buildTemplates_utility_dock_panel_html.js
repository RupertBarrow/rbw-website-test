import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/dock_panel.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_dock_panel_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/dock_panel.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_dock_panel_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M1.908 35V9c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v3h-6V9c0-.601-.4-1-1-1h-26c-.6 0-1 .399-1 1v26c0 .6.4 1 1 1h3v6h-3c-3.9 0-7-3.1-7-7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M45.908 16h-26c-2.2 0-4 1.799-4 4v26c0 2.199 1.8 4 4 4h26c2.199 0 4-1.801 4-4V20c0-2.201-1.801-4-4-4zm-4.015 25.184c0 .49-.307.795-.857.795H29.41c-.488 0-1.039-.428-1.039-.918v-1.773c0-.49.551-.979 1.039-.979h4.834c.551 0 .795-.613.428-.979l-10.4-10.403a.888.888 0 010-1.285l1.285-1.284a.887.887 0 011.285 0l10.4 10.4c.367.43.979.123.979-.426v-4.835c0-.552.551-.979 1.041-.979h1.836c.488 0 .795.488.795.979v11.687z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_dock_panel"
}
