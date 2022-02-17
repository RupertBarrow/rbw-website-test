import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/pause_alt.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_pause_alt_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/pause_alt.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_pause_alt_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M9.009 8.977c9.395-9.303 24.587-9.303 33.982 0 9.295 9.402 9.395 24.706 0 34.009s-24.687 9.402-33.982 0c-9.295-9.403-9.395-24.707 0-34.01zm16.991-1c-9.895 0-17.99 8.102-17.99 18.004 0 9.903 8.095 18.005 17.99 18.005 9.995 0 17.99-8.002 17.99-18.005S35.896 7.977 26 7.977zM21.75 15c.966 0 1.75.895 1.75 2v18c0 1.105-.784 2-1.75 2h-3.5c-.966 0-1.75-.895-1.75-2V17c0-1.105.784-2 1.75-2zm12 0c.966 0 1.75.895 1.75 2v18c0 1.105-.784 2-1.75 2h-3.5c-.966 0-1.75-.895-1.75-2V17c0-1.105.784-2 1.75-2z",
    "fill-rule": "evenodd"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_pause_alt"
}
