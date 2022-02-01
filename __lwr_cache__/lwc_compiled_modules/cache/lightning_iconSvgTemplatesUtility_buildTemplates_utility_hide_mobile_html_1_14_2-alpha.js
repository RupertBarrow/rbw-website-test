import _implicitStylesheets from "./hide_mobile.css";

import _implicitScopedStylesheets from "./hide_mobile.scoped.css?scoped=true";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M36.1 25.3v14.1c0 .7-.6 1.4-1.4 1.4H20.6L12 49.4c.6.4 1.3.6 2 .6h24c2 0 3.7-1.7 3.7-3.7V19.7l-5.6 5.6zM26 48.1c-1.6 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.2 2.8-2.8 2.8zM10.3 45.6l5.7-5.7v-.1l20.2-20.2v.1l5.5-5.5v-.1l7-7c.7-.6.8-1.7.3-2.2L47 3c-.6-.6-1.6-.5-2.2.3l-3.1 3.1v-.7C41.7 3.7 40 2 38 2H14c-2 0-3.7 1.7-3.7 3.7v32.1l-7.1 7.1c-.6.6-.7 1.6-.2 2.1l1.9 2c.6.6 1.6.5 2.2-.3l3.2-3.1zm5.5-34.8c0-.7.6-1.4 1.4-1.4h17.5c.7 0 1.4.6 1.4 1.4V12L15.8 32.2V10.8z"
    },
    key: 3,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_hide_mobile"
