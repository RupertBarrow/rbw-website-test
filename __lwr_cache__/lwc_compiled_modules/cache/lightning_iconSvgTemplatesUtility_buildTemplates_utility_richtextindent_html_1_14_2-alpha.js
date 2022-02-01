import _implicitStylesheets from "./richtextindent.css";

import _implicitScopedStylesheets from "./richtextindent.scoped.css?scoped=true";

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
      "d": "M52 11.5c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3zM48 35.5c0-.8-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-3zM52 23.5c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3zM28 5.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v41c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-41zM9.4 15.3c-.6-.6-1.4-.1-1.4.9V22H1.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H8v5.9c0 1 .9 1.5 1.4.9l8.3-9c.3-.4.3-1 0-1.4l-8.3-9.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_richtextindent"
