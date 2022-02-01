import _implicitStylesheets from "./product_required.css";

import _implicitScopedStylesheets from "./product_required.scoped.css?scoped=true";

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
      "x": "43.93",
      "y": "68.27",
      "width": "36.07",
      "height": "7.99",
      "rx": "2",
      "ry": "2"
    },
    key: 2,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "43.93",
      "y": "50.42",
      "width": "36.07",
      "height": "7.99",
      "rx": "2",
      "ry": "2"
    },
    key: 3,
    svg: true
  }, []), api_element("rect", {
    attrs: {
      "x": "49.92",
      "y": "32.57",
      "width": "30.08",
      "height": "7.99",
      "rx": "2",
      "ry": "2"
    },
    key: 4,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M33.82 76.26h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a1.9 1.9 0 01-2 2zM33.82 58.41h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2v4a1.9 1.9 0 01-2 2z",
      "fill-rule": "evenodd"
    },
    key: 5,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M47.55 26.33l-2.12-2.12a1.44 1.44 0 00-2.12 0L30.08 37.32l-5.37-5.24a1.44 1.44 0 00-2.12 0l-2.12 2.12a1.44 1.44 0 000 2.12l7.36 7.36a3 3 0 004.24 0l15.48-15.22a1.69 1.69 0 000-2.13z",
      "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_required"
