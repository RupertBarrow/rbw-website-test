import _implicitStylesheets from "./page.css";

import _implicitScopedStylesheets from "./page.scoped.css?scoped=true";

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
      "d": "M44.4 19H33.2c-2.6 0-4.2-1.6-4.2-4.2V3.6c0-.9-.7-1.6-1.6-1.6H10.8C8.2 2 6 4.2 6 6.8v38.4c0 2.6 2.2 4.8 4.8 4.8h30.4c2.6 0 4.8-2.2 4.8-4.8V20.6c0-.9-.7-1.6-1.6-1.6z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M45.7 12.9L35.1 2.3c-.2-.2-.6-.3-.9-.3-.6 0-1.2.5-1.2 1.1v8.5c0 1.8 1.6 3.4 3.4 3.4h8.5c.6 0 1.1-.6 1.1-1.2 0-.3-.1-.7-.3-.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_page"
