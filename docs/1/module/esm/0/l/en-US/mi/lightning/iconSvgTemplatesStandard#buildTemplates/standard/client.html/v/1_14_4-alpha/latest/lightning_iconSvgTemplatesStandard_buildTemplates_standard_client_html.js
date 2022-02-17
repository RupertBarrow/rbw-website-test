import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/client.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_client_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/client.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_client_scoped_css?scoped=true.js";

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
    "d": "M44.8 58.3c3.7-2.1 7.2-3.1 11.1-3.1 1.1 0 2.2.1 3.2.2.5.1.6-.1.1-.4-1.9-1.1-4-2.1-6.2-3-4.3-1.8-4.9-3.4-4.9-5.2 0-1.8 1.2-3.4 2.6-4.7 2.5-2.3 3.9-5.4 3.9-9.1 0-6.9-4.3-12.8-11.9-12.8-7.6 0-11.9 5.9-11.9 12.8 0 3.7 1.4 6.9 3.9 9.1 1.4 1.3 2.6 3 2.6 4.7 0 1.7-.7 3.4-4.9 5.2-6.2 2.6-12.1 5.6-12.2 11.2 0 3.7 2.8 7 6.3 7h14.2c1.1 0 2-.9 2-2v-6.5c.1-1.4.8-2.7 2.1-3.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M77.3 64.2c-9.4 2.9-16.8-6-27.1-1.8-.8.3-1.2 1-1.2 1.9V75c0 1.4 1.2 2.3 2.5 1.9 10.2-3.1 17.6 5.8 27.2 1.8.7-.3 1.3-1 1.3-1.9V66.1c0-1.3-1.4-2.3-2.7-1.9zm-12.5 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_client"
}
