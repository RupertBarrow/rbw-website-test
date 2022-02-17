import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/announcement.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_announcement_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/announcement.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_announcement_scoped_css?scoped=true.js";

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
    "d": "M46 74.3L44.4 73c-1.8-1.2-1.8-3.7-1.8-5v-3.6c0-1-.9-1.9-1.9-1.9h-7.5c-1 0-1.9.9-1.9 1.9V74c0 3.4 2 6 5.1 6h6.2c3.6 0 3.9-2.5 3.9-2.5s.6-2.2-.5-3.2zM74 40.1v-17-.1c0-3-3.8-3.9-5.8-1.9L57 31.6c-1.8 1.5-4 2.1-6.3 2.1h-19c-6.6.1-11.7 5.7-11.7 12.2v.2c0 6.5 5.1 11.4 11.7 11.4h19.1c2.4 0 4.6 1 6.4 2.5l11 10.7c2 2 5.8 1.2 5.8-1.7V52c3.8 0 6-2.6 6-6 0-3.3-2.3-5.9-6-5.9z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_announcement"
}
