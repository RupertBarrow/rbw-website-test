import _implicitStylesheets from "./prompt_edit.css";

import _implicitScopedStylesheets from "./prompt_edit.scoped.css?scoped=true";

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
      "d": "M47 4.5H5c-1.7 0-3 1.3-3 3v30.6c0 1.7 1.3 3 3 3h14.5l3.6 5.2c1 1.4 2.8 1.7 4.2.7l.6-.6 4.2-5.3H47c1.7 0 3-1.3 3-3V7.5c0-1.7-1.3-3-3-3zM21.3 32c-.2.2-.3.3-.5.3l-5 1.2c-.5.1-.9-.3-.8-.8l1.2-5c0-.1.1-.3.2-.4l.1-.1c.1-.1.4-.1.6 0l4.2 4.2c.1.2.1.5 0 .6zm12.1-12.3L23.1 30c-.2.2-.5.2-.6 0l-4.1-4.1c-.2-.1-.2-.4 0-.6L28.6 15c.2-.2.5-.2.6 0l4.1 4.1c.2.2.2.4.1.6zm3.1-3l-1.2 1.2c-.2.2-.5.2-.6 0l-4.1-4.1c-.2-.2-.2-.5 0-.6l1.1-1.2c.7-.7 1.9-.7 2.6 0l2.2 2.2c.7.7.7 1.8 0 2.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_prompt_edit"
