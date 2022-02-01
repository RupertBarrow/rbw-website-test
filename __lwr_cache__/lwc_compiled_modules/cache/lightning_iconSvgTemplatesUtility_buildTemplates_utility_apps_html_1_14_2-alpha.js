import _implicitStylesheets from "./apps.css";

import _implicitScopedStylesheets from "./apps.scoped.css?scoped=true";

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
      "d": "M13 4H7C5.3 4 4 5.3 4 7v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM13 36H7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM13 20H7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM29 4h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM29 36h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM29 20h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM45 4h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM45 36h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3zM45 20h-6c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-6c0-1.7-1.3-3-3-3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_apps"
