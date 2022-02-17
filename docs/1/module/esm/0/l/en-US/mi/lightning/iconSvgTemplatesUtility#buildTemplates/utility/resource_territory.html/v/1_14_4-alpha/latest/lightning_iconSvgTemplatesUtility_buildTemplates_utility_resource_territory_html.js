import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/resource_territory.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_resource_territory_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/resource_territory.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_resource_territory_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.7 29c2-2.9 4.1-4.3 5.5-6.5 2.5-3.7 3-9 1.4-13C32 5.4 28.2 3 23.8 3.1s-8 2.8-9.4 6.9c-1.6 4.5-.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-.8 3.8 1.8 7.7 5.9 7.7h18c.8 0 1.5-.9 1-1.5-2.5-2.9-5.1-6.7-5.1-10.5-.2-2.7.6-5.7 1.9-8.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M37.7 39.4c-2.1 0-3.9-1.7-3.9-3.8s1.7-3.8 3.9-3.8c2.1 0 3.9 1.7 3.9 3.8 0 2.1-1.8 3.8-3.9 3.8zm0-13c-5.1 0-9.2 4.1-9.2 9.2 0 6.3 6.6 12.2 8.6 13.7.3.3.8.3 1.2 0 2-1.6 8.6-7.4 8.6-13.7 0-5.1-4.1-9.2-9.2-9.2z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_resource_territory"
}
