import _implicitStylesheets from "./primitiveIframe.css";

import _implicitScopedStylesheets from "./primitiveIframe.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
