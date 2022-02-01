import _implicitStylesheets from "./shopping_bag.css";

import _implicitScopedStylesheets from "./shopping_bag.scoped.css?scoped=true";

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
  }, [api_element("path", {
    attrs: {
      "d": "M44 19.6a4 4 0 00-4-4h-.7a13.24 13.24 0 00-26.4 0H12a4 4 0 00-4 4l-2 25a4 4 0 004 4h32a4 4 0 004-4zM26.1 9.4a7.24 7.24 0 017.2 6.2H18.9a7.39 7.39 0 017.2-6.2zm5.7 18.2H20.2a3 3 0 01-3-3 3.08 3.08 0 013-3h11.7a3 3 0 013 3 3.1 3.1 0 01-3.1 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_shopping_bag"
