import _implicitStylesheets from "./kanban.css";

import _implicitScopedStylesheets from "./kanban.scoped.css?scoped=true";

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
      "d": "M32 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-27zM14 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v31c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-31zM50 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-23zM50 3.5c0-.8-.7-1.5-1.5-1.5h-45C2.7 2 2 2.7 2 3.5v5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_kanban"
