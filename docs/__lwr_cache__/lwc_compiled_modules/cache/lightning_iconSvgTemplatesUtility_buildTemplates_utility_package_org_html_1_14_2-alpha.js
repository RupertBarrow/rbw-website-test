import _implicitStylesheets from "./package_org.css";

import _implicitScopedStylesheets from "./package_org.scoped.css?scoped=true";

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
      "d": "M44.4 23H31.9l-4 4H44v6H8v-6h8.1l-4-4H7.6c-2 0-3.6 1.6-3.6 3.6V46c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3V26.6c0-2-1.6-3.6-3.6-3.6z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M20.6 25.8c.8.8 2 .8 2.8 0l19-19c.4-.4.4-1 0-1.4l-2.8-2.8c-.4-.4-1-.4-1.4 0L22 18.8l-6.7-6.7c-.4-.4-1-.4-1.4 0l-2.8 2.8c-.4.4-.4 1 0 1.4l9.5 9.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_package_org"
