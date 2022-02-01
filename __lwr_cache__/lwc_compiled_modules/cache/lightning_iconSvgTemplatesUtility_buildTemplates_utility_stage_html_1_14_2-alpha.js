import _implicitStylesheets from "./stage.css";

import _implicitScopedStylesheets from "./stage.scoped.css?scoped=true";

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
  }, [api_element("circle", {
    attrs: {
      "cx": "46.7",
      "cy": "26",
      "r": "3.4"
    },
    key: 2,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "25.9",
      "cy": "26",
      "r": "3.4"
    },
    key: 3,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "5.4",
      "cy": "26",
      "r": "3.4"
    },
    key: 4,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M11.6 26c0 7.9 6.5 14.4 14.4 14.4S40.3 33.9 40.3 26 33.9 11.6 26 11.6 11.6 18.1 11.6 26zm23.9 0c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6z"
    },
    key: 5,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_stage"
