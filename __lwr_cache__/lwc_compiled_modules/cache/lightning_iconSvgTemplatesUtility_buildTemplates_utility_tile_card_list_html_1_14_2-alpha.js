import _implicitStylesheets from "./tile_card_list.css";

import _implicitScopedStylesheets from "./tile_card_list.scoped.css?scoped=true";

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
      "d": "M14.5 4h-9C4.7 4 4 4.7 4 5.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM30.5 4h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM46.5 4h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM14.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM30.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5zM46.5 28h-9c-.8 0-1.5.7-1.5 1.5v17c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tile_card_list"
