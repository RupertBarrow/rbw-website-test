import _implicitStylesheets from "./pinned.css";

import _implicitScopedStylesheets from "./pinned.scoped.css?scoped=true";

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
      "d": "M36.9 23.7h-.5L33 7.9h.9c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9H18.1c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h.9l-3.3 15.8h-.5c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h8.4v17.4c0 1.6 1.3 3 3 3s3-1.3 3-3V29.6H37c1.6 0 2.9-1.3 2.9-2.9s-1.4-3-3-3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_pinned"
