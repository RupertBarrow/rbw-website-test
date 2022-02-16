import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctype%23buildTemplates%2Fdoctype%2Fgdoc.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_gdoc_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctype%23buildTemplates%2Fdoctype%2Fgdoc.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_gdoc_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.112.011A5.074 5.074 0 00.039 5.085v53.841A5.074 5.074 0 005.112 64h45.775a5.074 5.074 0 005.074-5.074V20.321L37.057.011H5.112z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#3C8CEA"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M10.133 37.439h21.564v2.059H10.133zm0 4.801h21.564v2.057H10.133zm0 4.801h21.564v2.057H10.133zm0 4.8h12.233v2.058H10.133z",
    "fill": "#fff"
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
    "d": "M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z",
    "fill": "#2D6FE4"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.058.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.058.025z",
    "opacity": ".5",
    "fill": "#fff"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gdoc"
}
