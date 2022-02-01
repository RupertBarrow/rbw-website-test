import _implicitStylesheets from "./service_resource.css";

import _implicitScopedStylesheets from "./service_resource.scoped.css?scoped=true";

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
      "d": "M71.83 20H28.3a8.11 8.11 0 00-8.3 7.81v44.38A8.08 8.08 0 0028.16 80h11c1.1-4.54 6.46-7.17 12.14-9.49 4.24-1.8 4.89-3.34 4.89-5.14s-1.29-3.47-2.7-4.76a11.3 11.3 0 01-3.86-9c0-6.69 4.37-12.6 12-12.6s12 5.79 12 12.6a12.13 12.13 0 01-3.86 9c-1.41 1.41-2.7 3-2.7 4.76s.51 3.34 4.89 5.14a41.53 41.53 0 017.78 3.91 7.28 7.28 0 00.26-2.23V27.81c.14-4.25-3.58-7.81-8.17-7.81zM47.61 33.35a2.85 2.85 0 01-2.76 2.75H30.78A2.85 2.85 0 0128 33.35V30.6a2.85 2.85 0 012.76-2.75h14.09a2.85 2.85 0 012.76 2.75z",
      "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_service_resource"
