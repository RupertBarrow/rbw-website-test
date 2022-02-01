import _implicitStylesheets from "./cart.css";

import _implicitScopedStylesheets from "./cart.scoped.css?scoped=true";

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
      "d": "M20.1 26H44c.7 0 1.4-.5 1.5-1.2l4.4-15.4c.3-1.1-.5-2-1.5-2H11.5l-.6-2.3C10.6 4 9.6 3.3 8.6 3.3h-4c-1.3 0-2.5 1-2.6 2.3C1.9 7 3.1 8.2 4.4 8.2h2.3l7.6 25.7c.3 1.1 1.2 1.8 2.3 1.8h28.2c1.3 0 2.5-1 2.6-2.3.1-1.4-1.1-2.6-2.4-2.6H20.2c-1.1 0-2-.7-2.3-1.7V29c-.5-1.5.7-3 2.2-3z"
    },
    key: 3,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "20.6",
      "cy": "44.6",
      "r": "4"
    },
    key: 4,
    svg: true
  }, []), api_element("circle", {
    attrs: {
      "cx": "40.1",
      "cy": "44.6",
      "r": "4"
    },
    key: 5,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_cart"
