import _implicitStylesheets from "./toggle_panel_left.css";

import _implicitScopedStylesheets from "./toggle_panel_left.scoped.css?scoped=true";

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
      "d": "M46 8H6c-1.1 0-2 .9-2 2v32c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-2 32H8V12h36v28z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M21 38h-9.9c-.6 0-1-.4-1-1V15c0-.6.4-1 1-1H21c.6 0 1 .4 1 1v22c0 .6-.4 1-1 1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_toggle_panel_left"
