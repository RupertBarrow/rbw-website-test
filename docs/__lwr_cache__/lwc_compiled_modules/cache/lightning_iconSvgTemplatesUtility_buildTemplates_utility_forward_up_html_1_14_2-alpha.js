import _implicitStylesheets from "./forward_up.css";

import _implicitScopedStylesheets from "./forward_up.scoped.css?scoped=true";

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
      "d": "M8.2 49.6l31.5-31.5c.9-.9 2.3-.2 2.3.9v18.2c0 1.1.9 2 2 2h4.2c1.1 0 2-.9 2-2L50 4.1c0-1.1-.9-2-2-2H14.8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2H33c1.2.1 1.9 1.5 1 2.4L2.6 43.9c-.8.8-.9 2-.1 2.7l2.8 2.8c.8.8 2.1 1 2.9.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_forward_up"
