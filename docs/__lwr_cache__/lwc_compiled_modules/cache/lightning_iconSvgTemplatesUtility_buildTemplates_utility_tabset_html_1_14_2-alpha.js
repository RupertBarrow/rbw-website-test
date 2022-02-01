import _implicitStylesheets from "./tabset.css";

import _implicitScopedStylesheets from "./tabset.scoped.css?scoped=true";

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
      "d": "M31.6 2H20.4c-.7 0-1.2.6-1.2 1.3v2.5c0 .7.6 1.3 1.2 1.3h11.2c.7 0 1.2-.6 1.2-1.3V3.3c.1-.7-.5-1.3-1.2-1.3zM48.7 2H37.5c-.7 0-1.3.6-1.3 1.3v2.5c0 .7.6 1.3 1.3 1.3h11.2c.7-.1 1.3-.6 1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M48.7 10.4H17c-.7 0-1.3-.6-1.3-1.3V3.3c0-.7-.6-1.3-1.3-1.3H3.3C2.6 2 2 2.6 2 3.3v45.5c0 .6.6 1.2 1.3 1.2H48.7c.7 0 1.3-.6 1.3-1.3v-37c0-.7-.6-1.3-1.3-1.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tabset"
