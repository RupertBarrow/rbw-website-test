import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctypeRtl%23buildTemplates%2Fdoctype%2Fai.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctypeRtl_buildTemplates_doctype_ai_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctypeRtl%23buildTemplates%2Fdoctype%2Fai.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctypeRtl_buildTemplates_doctype_ai_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.075.006A5.074 5.074 0 00.002 5.08v53.841a5.073 5.073 0 005.073 5.074h45.774a5.074 5.074 0 005.074-5.074V20.316L37.02.006H5.075z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FFC35E"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M55.923 20.357v.999h-12.8s-6.312-1.26-6.128-6.707c0 0 .253 5.708 6.003 5.708h12.925z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FFB446"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M37.02.006v14.56c0 1.656 1.104 5.792 6.104 5.792h12.8L37.02.006z",
    "opacity": ".5",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#fff"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M20.136 53.923a.776.776 0 01-.72-.486l-.9-2.287h-5.978l-.9 2.287a.776.776 0 01-.72.486.804.804 0 01-.811-.792c0-.09.018-.198.054-.288l4.141-10.335a1.304 1.304 0 011.225-.811c.522 0 .99.324 1.188.811l4.177 10.335c.036.09.054.198.054.288 0 .36-.324.792-.81.792zm-4.61-10.569l-2.557 6.463h5.095l-2.538-6.463zm8.513 10.569a.73.73 0 01-.738-.738V42.417c0-.396.324-.72.774-.72.396 0 .72.324.72.72v10.767a.734.734 0 01-.756.739z",
    "fill": "#fff"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_ai"
}
