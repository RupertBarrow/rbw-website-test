import _implicitStylesheets from "./skip.css";

import _implicitScopedStylesheets from "./skip.scoped.css?scoped=true";

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
      "d": "M39.5 32.3v.7c0 1 .7 1 1.3.4l4.9-4.9c.5-.6 1.5-.6 2.1 0l2.1 2.1c.6.5.6 1.5 0 2.1L37 45.6c-.5.5-1.3.5-1.8 0l-13-13c-.5-.6-.5-1.3.1-1.9l2.2-2.2c.6-.6 1.5-.7 2.1-.1l4.9 4.9c.7.7 1.3.9 1.7.1.1-.3.1-1.1.1-1.1V25c0-7.1-5.7-12.8-12.8-12.8S7.7 17.8 7.7 24.9v13.3c0 .8-.7 1.4-1.5 1.4H3c-.8 0-1.4-.5-1.4-1.3V24.9C1.6 14.5 10 6 20.5 6s18.9 8.5 18.9 18.9l.1 7.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_skip"
