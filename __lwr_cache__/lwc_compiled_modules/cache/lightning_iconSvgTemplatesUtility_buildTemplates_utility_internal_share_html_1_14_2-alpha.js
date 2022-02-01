import _implicitStylesheets from "./internal_share.css";

import _implicitScopedStylesheets from "./internal_share.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
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
  }, [api_element("path", {
    attrs: {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M2.3 37.9v.2c0 .8.6 1.4 1.4 1.4.4 0 .7-.1 1-.4 0 0 10.1-10.9 22.5-7.6v11c0 .8.6 1.4 1.4 1.4.3 0 .5-.1.7-.2l20.1-17.1c.3-.3.5-.7.5-1.1 0-.4-.2-.8-.4-1L29.4 8.2c-.2-.1-.5-.2-.8-.2-.8 0-1.4.6-1.4 1.4v10.3c-.1 0-19.9-3-24.9 18.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_internal_share"
