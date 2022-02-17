import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fchart.css%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_chart_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fchart.scoped.css?scoped=true%2Fv%2F1_14_3-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_chart_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_4/latest/lwc.js";
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
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M36.2 56.4c1.4 3.1 3.9 5.5 7 7 .9.4 1.3 1.3 1.3 2.2v11.5c0 1.6-1.5 2.8-3.1 2.4C31 76.7 22.8 68.5 20 58.1c-.4-1.5.8-3.1 2.4-3.1H34c.9 0 1.8.5 2.2 1.4zM41.5 19.7c1.5-.4 3.1.8 3.1 2.4v11.5c0 .9-.5 1.8-1.3 2.2-3.1 1.4-5.5 3.9-7 7-.4.9-1.3 1.3-2.2 1.3H22.4c-1.6 0-2.8-1.5-2.4-3.1 2.9-10.3 11.1-18.5 21.5-21.3zM80 49.6c0 14.3-9.1 26.4-21.6 29.9-1.5.4-3-.8-3-2.4V65.4c0-1 .5-1.9 1.3-2.4 4.7-2.4 8-7.5 8-13.4s-3.3-11.1-8-13.4c-.8-.4-1.3-1.4-1.3-2.4V22.1c0-1.6 1.5-2.8 3-2.4C70.9 23.2 80 35.3 80 49.6z"
    },
    key: 2,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_chart"
