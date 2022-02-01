import _implicitStylesheets from "./full_width_view.css";

import _implicitScopedStylesheets from "./full_width_view.scoped.css?scoped=true";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M48.5 4h-45C2.7 4 2 4.7 2 5.5v5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-5c-.1-.8-.7-1.5-1.5-1.5zM10.7 16h-7c-.8 0-1.5.7-1.5 1.5v29.8c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V17.5c0-.8-.7-1.5-1.5-1.5zM48.5 16h-7c-.8 0-1.5.7-1.5 1.5v29.8c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5V17.5c0-.8-.7-1.5-1.5-1.5zM34.5 16H17.7c-.8 0-1.5.7-1.5 1.5v29.8c0 .8.7 1.5 1.5 1.5h16.8c.8 0 1.5-.7 1.5-1.5V17.5c0-.8-.7-1.5-1.5-1.5z"
    },
    key: 3,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_full_width_view"
