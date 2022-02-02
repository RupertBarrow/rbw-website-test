import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fmiddle_align.css%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_middle_align_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%23buildTemplates%2Futility%2Fmiddle_align.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_middle_align_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("rect", {
    attrs: {
      "x": "22",
      "y": "2",
      "width": "6.4",
      "height": "48",
      "rx": "1.6"
    },
    key: 2,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "data-name": "Rectangle",
      "x": "2",
      "y": "19",
      "width": "48",
      "height": "14.4",
      "rx": "3.2"
    },
    key: 3,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_middle_align"
