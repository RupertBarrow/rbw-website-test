import _implicitStylesheets from "./sentiment_negative.css";

import _implicitScopedStylesheets from "./sentiment_negative.scoped.css?scoped=true";

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
      "d": "M26 2C12.8 2 2 12.8 2 26.1s10.8 24.1 24 24.1 24-10.8 24-24.1S39.2 2 26 2zm-9 13c1.7 0 3 1.8 3 4s-1.3 4-3 4-3-1.8-3-4 1.3-4 3-4zm-3 23.7c.5-6.1 5-11.2 12.1-11.2 7 0 11.4 5.1 11.9 11.2H14zM35 23c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_sentiment_negative"
