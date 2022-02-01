import _implicitStylesheets from "./priority.css";

import _implicitScopedStylesheets from "./priority.scoped.css?scoped=true";

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
      "d": "M9 3.5C9 2.7 8.3 2 7.5 2h-3C3.7 2 3 2.7 3 3.5v45c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-45zM47.5 7.7c-16 8.4-14.2-8.8-33.5-2.1-.6.2-1 .8-1 1.4v23.3c0 .7.7 1.2 1.3.9 19.2-6.4 17.2 11.2 33.9 1.8.5-.3.8-.8.8-1.3V8.5c0-.7-.8-1.2-1.5-.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_priority"
