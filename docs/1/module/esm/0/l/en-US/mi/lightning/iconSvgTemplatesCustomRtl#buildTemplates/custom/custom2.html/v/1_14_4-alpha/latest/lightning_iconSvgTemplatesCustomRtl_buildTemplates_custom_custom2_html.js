import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesCustomRtl#buildTemplates/custom/custom2.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesCustomRtl_buildTemplates_custom_custom2_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesCustomRtl#buildTemplates/custom/custom2.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesCustomRtl_buildTemplates_custom_custom2_scoped_css?scoped=true.js";

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
    "d": "M59 22c-3-2-13.8-3.9-18 3-2 3.3.4 9.1 2.2 12.8.5.9 1.5 1.4 2.5 1 1.3-.5 2.8-.8 4.3-.8 1 0 2 .1 3 .4.9.2 1.8-.2 2.2-1 .7-1.3 1.899-2.8 3.8-4.4 5-4 3-9 0-11zM53.8 61.4c-1.2.4-2.5.6-3.8.6-1.2 0-2.4-.2-3.5-.5-.9-.3-1.9.2-2.3 1-.7 1.3-1.9 2.9-3.9 4.5-5 4-3 9.1 0 11.1s13.9 3.9 18-3c1.9-3.199-.3-9-2.1-12.699-.5-.901-1.5-1.301-2.4-1.001zM75 41c-3.3-2-9.1.4-12.8 2.2-.9.5-1.4 1.5-1 2.5.5 1.3.8 2.8.8 4.3 0 1-.1 2-.4 3-.199.9.2 1.8 1 2.2 1.3.7 2.8 1.9 4.4 3.8 4 5 9 3 11 0s3.9-13.9-3-18zM38.6 53.8c-.4-1.2-.6-2.5-.6-3.8 0-1.2.2-2.4.5-3.5.3-.9-.2-1.9-1-2.3-1.3-.7-2.9-1.9-4.5-3.9-4-5-9.1-3-11.1 0s-3.9 13.8 3 18c3.2 1.9 9-.3 12.7-2.1.9-.5 1.3-1.5 1-2.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "50",
    "cy": "50",
    "r": "6"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom2"
}
