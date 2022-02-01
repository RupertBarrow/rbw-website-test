import _implicitStylesheets from "./generic_loading.css";

import _implicitScopedStylesheets from "./generic_loading.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
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
      "opacity": ".15",
      "d": "M51.5 22h-3c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zM76.5 47h-13c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM51.5 62h-3c-.8 0-1.5.7-1.5 1.5v13c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-13c0-.8-.7-1.5-1.5-1.5zM38 51.5v-3c0-.8-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5zM59.5 42.6c.6.6 1.5.6 2.1 0l9.2-9.2c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0l-9.2 9.2c-.6.6-.6 1.5 0 2.1l2.1 2.1zM61.7 57.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l9.2 9.2c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-9.2-9.2zM40.5 57.4c-.6-.6-1.5-.6-2.1 0l-9.2 9.2c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l9.2-9.2c.6-.6.6-1.5 0-2.1l-2.1-2.1zM33.4 29.1c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l9.2 9.2c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-9.2-9.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_generic_loading"
