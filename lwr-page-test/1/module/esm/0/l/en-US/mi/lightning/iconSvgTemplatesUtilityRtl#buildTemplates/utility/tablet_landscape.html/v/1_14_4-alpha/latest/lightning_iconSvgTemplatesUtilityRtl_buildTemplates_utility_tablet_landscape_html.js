import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftablet_landscape.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_tablet_landscape_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftablet_landscape.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_tablet_landscape_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 10c0-2.2-1.8-4-4-4H6c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V10zM6.9 29c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3zM44 38.5c0 .8-.7 1.5-1.5 1.5h-29c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h29c.8 0 1.5.7 1.5 1.5v25z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_tablet_landscape"
}
