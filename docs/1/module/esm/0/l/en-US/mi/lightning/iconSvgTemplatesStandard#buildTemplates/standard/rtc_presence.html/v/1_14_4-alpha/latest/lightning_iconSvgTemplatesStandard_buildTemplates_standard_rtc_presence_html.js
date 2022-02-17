import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/rtc_presence.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_rtc_presence_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/rtc_presence.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_rtc_presence_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.55 19.75c-11.12 0-20.22 8.64-20.22 19.3a18.75 18.75 0 002.57 9.47 1.58 1.58 0 01.18 1.1l-1.93 6.16a1.37 1.37 0 001.75 1.75l5.88-2.11a1.5 1.5 0 011.1.09 20.77 20.77 0 0010.66 2.85c11.12 0 20.22-8.64 20.22-19.3s-9.09-19.31-20.21-19.31zM45.8 76.21v1.29a2.77 2.77 0 01-2.8 2.75H21a2.77 2.77 0 01-2.76-2.76v-1.28c0-3.35 3.91-5.38 7.58-7a1.38 1.38 0 00.37-.18.85.85 0 01.87 0 9 9 0 005 1.52 9.36 9.36 0 005-1.47.85.85 0 01.87 0 1.38 1.38 0 01.37.18c3.59 1.57 7.5 3.59 7.5 6.95z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "32.01",
    "cy": "60.26",
    "rx": "6.85",
    "ry": "7.58"
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
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("ellipse", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_rtc_presence"
}
