import _implicitStylesheets from "./matrix.css";

import _implicitScopedStylesheets from "./matrix.scoped.css?scoped=true";

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
      "d": "M48 3.5c0-.8-.7-1.5-1.5-1.5h-31c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h31c.8 0 1.5-.7 1.5-1.5v-5zM10 15.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-13zM10 35.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-13zM29 15.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM48 15.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM29 25.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM48 25.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM29 35.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM48 35.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM29 45.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3zM48 45.5c0-.8-.7-1.5-1.5-1.5h-12c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5v-3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_matrix"
