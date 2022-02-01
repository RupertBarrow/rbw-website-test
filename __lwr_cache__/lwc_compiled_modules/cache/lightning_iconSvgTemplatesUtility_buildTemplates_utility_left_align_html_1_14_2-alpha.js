import _implicitStylesheets from "./left_align.css";

import _implicitScopedStylesheets from "./left_align.scoped.css?scoped=true";

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
  }, [api_element("rect", {
    attrs: {
      "x": "2",
      "y": "2",
      "width": "6.4",
      "height": "48",
      "rx": "1.6"
    },
    key: 2,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "data-name": "Rectangle",
      "x": "11.6",
      "y": "18.8",
      "width": "38.4",
      "height": "14.16",
      "rx": "3.2"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_left_align"
