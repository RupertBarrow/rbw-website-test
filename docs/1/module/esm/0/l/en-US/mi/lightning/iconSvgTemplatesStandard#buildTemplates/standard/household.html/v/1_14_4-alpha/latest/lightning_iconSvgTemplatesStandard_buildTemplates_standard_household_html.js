import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/household.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_household_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/household.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_household_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.5 20.6c-.9-.8-2.2-.8-3 0L20.7 46.2c-1.5 1.4-.5 3.8 1.5 3.8H26v24c0 3.3 2.7 6 6 6h36c3.3 0 6-2.7 6-6V50h3.8c2 0 3-2.4 1.5-3.8L51.5 20.6zM36.9 63.9c-.2.3-.6.1-1 .1h-2.4c-1.5 0-2.5-.8-2.5-2.4.1-2.4 2.5-3.6 5.1-4.7 1.8-.8 2.1-1.5 2.1-2.3 0-.8-.5-1.5-1.1-2.1-1.1-1-1.6-2.4-1.6-4 0-3 1.8-5.6 5-5.6 1.9 0 3.3.9 4.2 2.3-2.3 1.8-3.7 4.5-3.7 7.9 0 1.9.5 3.7 1.5 5.2.4.6.2 1.1-.5 1.4-1.7.9-3.9 2.1-5.1 4.2zM57.6 71H42.4c-1.7 0-3-1.6-3-3.4.1-2.7 2.9-4.1 5.8-5.4 2-.9 2.3-1.6 2.3-2.5 0-.9-.6-1.7-1.2-2.3-1.2-1.1-1.8-2.6-1.8-4.4 0-3.3 2-6.2 5.6-6.2s5.6 2.9 5.6 6.2c0 1.8-.6 3.3-1.8 4.4-.7.6-1.2 1.4-1.2 2.3 0 .8.3 1.6 2.3 2.5 2.9 1.3 5.7 2.7 5.8 5.4-.2 1.8-1.5 3.4-3.2 3.4zm8.9-7h-2.4c-.4 0-.8.2-1-.1-1.2-2.1-3.4-3-5.2-3.9-.6-.3-.8-1-.4-1.6 1-1.5 1.5-3.3 1.5-5.2 0-3.3-1.4-6.1-3.6-7.8.8-1.4 2.2-2.3 4.2-2.3 3.3 0 5 2.6 5 5.6 0 1.6-.5 3-1.6 4-.6.6-1.1 1.3-1.1 2.1s.3 1.5 2.1 2.3c2.6 1.2 5.1 2.3 5.1 4.7C69 63.2 68 64 66.5 64z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_household"
}
