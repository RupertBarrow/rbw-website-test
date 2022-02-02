import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveIframe%23primitiveIframe.css%2Fv%2F1_14_2-alpha/latest/lightning_primitiveIframe_primitiveIframe_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FprimitiveIframe%23primitiveIframe.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_2-alpha/latest/lightning_primitiveIframe_primitiveIframe_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_7_3/latest/lwc.js";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("iframe", {
    style: $cmp.frameStyle,
    attrs: {
      "src": $cmp.src,
      "title": $cmp.title,
      "width": $cmp.width,
      "height": $cmp.height,
      "lang": $cmp.language
    },
    key: 0,
    on: {
      "load": _m0 || ($ctx._m0 = api_bind($cmp.handleContentLoad))
    }
  }, [])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-primitiveIframe_primitiveIframe"
