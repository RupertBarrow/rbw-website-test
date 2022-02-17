import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fasset_relationship.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_asset_relationship_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%23buildTemplates%2Fstandard%2Fasset_relationship.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_asset_relationship_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M72.8 54.7v-.4c0-9-5.3-16.8-12.9-20.6v-.9c0-5.5-4.5-10-10-10s-10 4.5-10 10v.9C32.3 37.4 27 45.3 27 54.3v.4c-4.1 1.2-7.2 5-7.2 9.6 0 5.5 4.5 10 10 10 2.2 0 4.3-.7 6-2 3.9 3 8.8 4.9 14 4.9s10.1-1.8 14-4.9c1.7 1.2 3.7 2 6 2 5.5 0 10-4.5 10-10 .2-4.5-2.8-8.4-7-9.6zM38.9 68.8c.7-1.4 1.1-2.9 1.1-4.5 0-4.9-3.6-9-8.3-9.8v-.2c0-7 4-13.1 9.8-16.2 1.8 2.8 4.9 4.7 8.5 4.7s6.7-1.9 8.5-4.7c5.8 3.1 9.8 9.2 9.8 16.2v.2c-4.7.8-8.3 4.9-8.3 9.8 0 1.6.4 3.1 1.1 4.5-3.1 2.4-6.9 3.8-11.1 3.8s-8-1.5-11.1-3.8z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_asset_relationship"
}
