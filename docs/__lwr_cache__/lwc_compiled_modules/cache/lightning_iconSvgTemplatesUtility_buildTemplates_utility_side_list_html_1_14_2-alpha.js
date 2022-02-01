import _implicitStylesheets from "./side_list.css";

import _implicitScopedStylesheets from "./side_list.scoped.css?scoped=true";

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
      "d": "M48.5 4h-27c-.8 0-1.5.7-1.5 1.5v41c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5zM14.5 4h-11C2.7 4 2 4.7 2 5.5v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5zM14.5 16h-11c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5zM14.5 28h-11c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5zM14.5 40h-11c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_side_list"
