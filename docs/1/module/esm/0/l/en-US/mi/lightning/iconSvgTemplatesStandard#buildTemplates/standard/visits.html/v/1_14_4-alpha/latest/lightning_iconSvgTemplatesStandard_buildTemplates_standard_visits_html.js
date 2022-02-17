import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/visits.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_visits_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/visits.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_visits_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.6 52.9c2.6-3.7 5.3-5.6 7.1-8.4 3.2-4.8 3.9-11.6 1.8-16.8-2.1-5.3-7-8.4-12.7-8.3S36.5 23 34.7 28.3c-2.1 5.8-1.2 12.8 3.5 17.2 1.9 1.8 3.7 4.7 2.7 7.4-.9 2.6-4 3.7-6.2 4.8-5 2.2-11.1 5.3-12.1 11.2-1 4.9 2.3 10 7.6 10h23.3c1 0 1.9-1.2 1.3-1.9-3.2-3.7-6.6-8.7-6.6-13.6-.3-3.5.7-7.4 2.4-10.5zm14.2 13.5c-2.7 0-5-2.2-5-4.9s2.2-4.9 5-4.9c2.7 0 5 2.2 5 4.9.1 2.7-2.3 4.9-5 4.9zm0-16.8c-6.6 0-11.9 5.3-11.9 11.9 0 8.1 8.5 15.8 11.1 17.7.4.4 1 .4 1.6 0 2.6-2.1 11.1-9.6 11.1-17.7 0-6.6-5.3-11.9-11.9-11.9z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_visits"
}
