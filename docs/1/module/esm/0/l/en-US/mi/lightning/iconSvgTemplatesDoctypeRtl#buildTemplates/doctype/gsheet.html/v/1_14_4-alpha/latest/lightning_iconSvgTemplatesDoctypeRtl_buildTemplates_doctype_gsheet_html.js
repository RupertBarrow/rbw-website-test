import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctypeRtl%23buildTemplates%2Fdoctype%2Fgsheet.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctypeRtl_buildTemplates_doctype_gsheet_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctypeRtl%23buildTemplates%2Fdoctype%2Fgsheet.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctypeRtl_buildTemplates_doctype_gsheet_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#20A971",
    "d": "M5.1 0c-2.8 0-5 2.3-5 5.1v53.8c0 2.8 2.2 5.1 5 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#FFF",
    "d": "M10.1 37.5v16.4h21.5V37.5H10.1zm15 11.5h5v3.5h-5V49zm0-5h5v3.5h-5V44zm0-5.1h5v3.6h-5v-3.6zM11.5 49h12.2v3.5H11.5V49zm0-5h12.2v3.5H11.5V44zm0-5.1h12.2v3.6H11.5v-3.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#189355",
    "d": "M56 20.3v1H43.2s-6.3-1.2-6.1-6.7c0 0 .2 5.7 6 5.7H56z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "opacity": ".5",
    "fill": "#FFF",
    "d": "M37.1 0v14.5c0 1.7 1.1 5.8 6.1 5.8H56L37.1 0z"
  },
  key: 6,
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
      "viewBox": "0 0 56 64"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gsheet"
}
