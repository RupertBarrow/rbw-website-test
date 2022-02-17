import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/outcome.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_outcome_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/outcome.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_outcome_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62.6 31.9c0-.1-.1-.1-.2-.2-.7-.7-1.9-.6-2.5.2l-2.7 2.6-.1.1c-.7.7-.7 1.9.1 2.5l7 7c.2.2.4.5.4.9 0 .7-.5 1.3-1.3 1.3H36.8c-1 0-1.8.8-1.9 1.8v3.8c.1 1 .9 1.8 1.9 2h26.6c.3 0 .5.1.7.3.6.4.7 1.3.2 1.8l-7 7-.1.1c-.7.7-.7 1.9.1 2.5l2.6 2.7.1.1c.7.7 1.9.7 2.5-.1l16.9-16.9.1-.1c.7-.7.7-1.9-.1-2.5L62.6 31.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M43.7 38.9h3.7c1 0 1.9-.9 1.9-1.9V25c0-2.8-2.2-5-5-5H25c-2.8 0-5 2.2-5 5v50c0 2.8 2.2 5 5 5H44.3c2.8 0 5-2.2 5-5V63.2c0-1-.9-1.9-1.9-1.9h-3.7c-1 0-1.9.9-1.9 1.9v7.4c0 1-.9 1.9-1.9 1.9H29.4c-1 0-1.9-.9-1.9-1.9V29.4c0-1 .9-1.9 1.9-1.9h10.5c1 0 1.9.9 1.9 1.9V37c0 1 .8 1.9 1.9 1.9z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_outcome"
}
