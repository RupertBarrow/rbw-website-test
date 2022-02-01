import _implicitStylesheets from "./currency.css";

import _implicitScopedStylesheets from "./currency.scoped.css?scoped=true";

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
      "d": "M45.1 10.9H6.9c-2.4 0-4.4 2-4.4 4.4v21.3c0 2.4 2 4.4 4.4 4.4h38.2c2.4 0 4.4-2 4.4-4.4V15.4c0-2.5-2-4.5-4.4-4.5zM12 36.6c0-2.9-2.3-5.1-5.1-5.1v-11c2.9 0 5.1-2.3 5.1-5.1h28c0 2.9 2.3 5.1 5.1 5.1v11c-2.9 0-5.1 2.3-5.1 5.1H12z"
    },
    key: 3,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "26",
      "cy": "25.6",
      "r": "7.3"
    },
    key: 4,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_currency"