import _implicitStylesheets from "./empty.css";

import _implicitScopedStylesheets from "./empty.scoped.css?scoped=true";

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
  }, [api_element("path", {
    attrs: {
      "opacity": ".5",
      "d": "M72 78H28c-3.3 0-6-2.7-6-6V28c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v44c0 3.3-2.7 6-6 6zM28 30v40c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30c-1.1 0-2 .9-2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_empty"
