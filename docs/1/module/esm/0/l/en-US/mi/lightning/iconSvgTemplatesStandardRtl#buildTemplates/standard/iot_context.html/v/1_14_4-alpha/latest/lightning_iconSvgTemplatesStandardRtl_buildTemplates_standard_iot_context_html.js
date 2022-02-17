import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/iot_context.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_iot_context_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/iot_context.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_iot_context_scoped_css?scoped=true.js";

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
    "d": "M73 43.5c-3.2 0-6 2.2-6.7 5.2h-4.9c-.8-5.6-5.6-10-11.5-10s-10.7 4.3-11.5 10h-4.9c-.8-3-3.5-5.2-6.7-5.2-3.8 0-7 3.1-7 7 0 3.8 3.1 7 7 7 3.2 0 6-2.2 6.7-5.2h4.9c.8 5 4.7 8.8 9.7 9.6v4.9c-3 .8-5.2 3.5-5.2 6.7 0 3.8 3.1 7 7 7s7-3.1 7-7c0-3.2-2.2-6-5.2-6.7v-4.9c5-.7 8.9-4.6 9.7-9.6h4.9c.8 3 3.5 5.2 6.7 5.2 3.8 0 7-3.1 7-7s-3.1-7-7-7zM53.5 73.4c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M33.3 36c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0 7.4-7.4 19.4-7.4 26.8 0 .4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8-8.9-9-23.5-9-32.4 0z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M28.2 32.4C40 20.7 59 20.7 70.8 32.4c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8-13.3-13.3-34.9-13.3-48.2 0-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0z"
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
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_iot_context"
}
