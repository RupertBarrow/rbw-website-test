import _implicitStylesheets from "./tablet_landscape.css";

import _implicitScopedStylesheets from "./tablet_landscape.scoped.css?scoped=true";

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
      "d": "M50 10c0-2.2-1.8-4-4-4H6c-2.2 0-4 1.8-4 4v32c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V10zM6.9 29c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3zM44 38.5c0 .8-.7 1.5-1.5 1.5h-29c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h29c.8 0 1.5.7 1.5 1.5v25z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tablet_landscape"
