import _implicitStylesheets from "./planning_poker.css";

import _implicitScopedStylesheets from "./planning_poker.scoped.css?scoped=true";

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
      "d": "M48.34 10l-6.27-2v29.12L49.88 13a2.41 2.41 0 00-1.53-3zM20.52 5.59L16.81 6.8 3.66 11.08a2.42 2.42 0 00-1.55 3l10.18 31.35a2.41 2.41 0 003 1.57l14-4.56 2.85-.94a2.39 2.39 0 001.56-3L23.59 7.14a2.4 2.4 0 00-3-1.57zM37.34 34.06V7.3a2.41 2.41 0 00-2.41-2.41H27.8a6.07 6.07 0 01.32.8l9.05 27.75a5.24 5.24 0 01.17.62z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_planning_poker"
