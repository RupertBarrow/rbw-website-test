import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesDoctype#buildTemplates/doctype/gpres.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_gpres_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesDoctype#buildTemplates/doctype/gpres.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_gpres_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.111.009A5.073 5.073 0 00.039 5.083v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.318L37.057.009H5.111z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#F8BE46"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M10.123 37.465v11.9H22.54v-11.9H10.123zm11.289 9.642h-10.16v-7.386h10.16v7.386zm.674-5.128v2.259h8.386v7.385h-10.16v-2.846h-1.129v5.104h12.419V41.979h-9.516z",
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
    "fill": "#F6AD34"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gpres"
}
