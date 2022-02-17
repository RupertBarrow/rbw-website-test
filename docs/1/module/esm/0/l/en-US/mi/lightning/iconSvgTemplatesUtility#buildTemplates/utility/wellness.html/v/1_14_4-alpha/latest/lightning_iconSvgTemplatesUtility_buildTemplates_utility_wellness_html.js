import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/wellness.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_wellness_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/wellness.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_wellness_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.42 10.57a1.66 1.66 0 00-1.25-.57 1.66 1.66 0 00-1.25.56c-11.76 13.39-5 24 0 29.07a1.66 1.66 0 001.19.49 1.77 1.77 0 001.24-.54c4.95-5.1 11.48-15.65.07-29.01zM15.66 28.3c-2.66-1.51-6.29-2.38-11.1-2.06a1.27 1.27 0 00-1 .53 1.34 1.34 0 00-.24 1.08c3 14 13 14.75 18.77 13.94a1.35 1.35 0 00.64-.3 23.14 23.14 0 01-7.07-13.19zM36.34 28.3c2.69-1.51 6.29-2.38 11.1-2.06a1.27 1.27 0 011 .53 1.34 1.34 0 01.24 1.08c-3 14-13 14.75-18.77 13.94a1.35 1.35 0 01-.64-.3 23.14 23.14 0 007.07-13.19zM15.38 25c.32-4.56 1.2-6.62 1.61-7.35a22.71 22.71 0 00-6.43-3.46 1.28 1.28 0 00-1.08.09 1.34 1.34 0 00-.64.88 21.65 21.65 0 00-.25 8.41A22.93 22.93 0 0115.38 25zM43.31 15.13a1.29 1.29 0 00-.64-.88 1.28 1.28 0 00-1.08-.09 22.79 22.79 0 00-6.42 3.46c.4.73 1.29 2.79 1.6 7.35a22.93 22.93 0 016.8-1.43 21.27 21.27 0 00-.26-8.41z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_wellness"
}
