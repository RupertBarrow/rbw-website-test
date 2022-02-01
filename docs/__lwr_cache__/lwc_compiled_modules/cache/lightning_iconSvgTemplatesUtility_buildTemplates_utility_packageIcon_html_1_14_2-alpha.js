import _implicitStylesheets from "./packageIcon.css";

import _implicitScopedStylesheets from "./packageIcon.scoped.css?scoped=true";

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
      "d": "M44.4 24h-7.9l-3.3 4H44v6H8v-6h10.7l-3.3-4H7.6c-2 0-3.6 1.6-3.6 3.6V47c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3V27.6c0-2-1.6-3.6-3.6-3.6z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M23 3.5V16h-6.9c-1 0-1.5.9-.9 1.4l10 12.3c.4.3 1 .3 1.4 0l10-12.3c.6-.6.1-1.4-.9-1.4H29V3.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_packageIcon"
