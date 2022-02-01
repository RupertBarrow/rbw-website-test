import _implicitStylesheets from "./screen.css";

import _implicitScopedStylesheets from "./screen.scoped.css?scoped=true";

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
      "d": "M50 6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v27.7c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6zm-6 24.2c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5V9.5C8 8.7 8.7 8 9.5 8h33c.8 0 1.5.7 1.5 1.5v20.7zM19 44c-2.2 0-4 1.8-4 4v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48c0-2.2-1.8-4-4-4H19z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M18 26.7h-4.1c-.6 0-1-.5-1-1V14c0-.6.4-1 1-1H18c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1zM38.1 26.7H24.8c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h13.3c.5 0 1 .4 1 1v11.7c0 .6-.5 1-1 1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_screen"
