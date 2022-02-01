import _implicitStylesheets from "./product_item.css";

import _implicitScopedStylesheets from "./product_item.scoped.css?scoped=true";

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
  }, [api_element("rect", {
    attrs: {
      "x": "19",
      "y": "18.92",
      "width": "60",
      "height": "16",
      "rx": "4",
      "ry": "4"
    },
    key: 2,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "19",
      "y": "40.92",
      "width": "27",
      "height": "16",
      "rx": "4",
      "ry": "4"
    },
    key: 3,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "19",
      "y": "62.92",
      "width": "27",
      "height": "16",
      "rx": "4",
      "ry": "4"
    },
    key: 4,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "52",
      "y": "40.92",
      "width": "27",
      "height": "16",
      "rx": "4",
      "ry": "4"
    },
    key: 5,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "52",
      "y": "62.92",
      "width": "27",
      "height": "16",
      "rx": "4",
      "ry": "4"
    },
    key: 6,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_item"
