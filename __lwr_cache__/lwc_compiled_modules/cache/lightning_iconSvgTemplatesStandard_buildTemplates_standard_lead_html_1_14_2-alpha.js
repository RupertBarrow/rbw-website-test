import _implicitStylesheets from "./lead.css";

import _implicitScopedStylesheets from "./lead.scoped.css?scoped=true";

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
  }, [api_element("circle", {
    attrs: {
      "cx": "50",
      "cy": "29",
      "r": "9"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M78 44H22c-2 0-2.8 2.5-1.1 3.6L35.5 57c.7.5 1.1 1.4.8 2.2l-5.5 18.3c-.6 2 2 3.4 3.5 1.9l14.2-15c.8-.9 2.2-.9 3 0l14.2 15c1.4 1.5 4 .1 3.5-1.9l-5.5-18.3c-.2-.8.1-1.7.8-2.2l14.6-9.4c1.7-1.1.9-3.6-1.1-3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_lead"
