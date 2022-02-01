import _implicitStylesheets from "./ad_set.css";

import _implicitScopedStylesheets from "./ad_set.scoped.css?scoped=true";

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
      "d": "M22.5 5.1h-17c-.8 0-1.5.7-1.5 1.5v15.9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V6.6c0-.8-.7-1.5-1.5-1.5zm-2.6 8.2H8.1V9.2h11.8v4.1zM46.5 5.1h-17c-.8 0-1.5.7-1.5 1.5v15.9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V6.6c0-.8-.7-1.5-1.5-1.5zm-2.6 8.2H32.1V9.2h11.8v4.1z"
    },
    key: 3,
    svg: true
  }, [])]), api_element("g", {
    key: 4,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M22.5 28h-17c-.8 0-1.5.7-1.5 1.5v15.9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V29.5c0-.8-.7-1.5-1.5-1.5zm-2.6 8.2H8.1v-4.1h11.8v4.1zM46.5 28h-17c-.8 0-1.5.7-1.5 1.5v15.9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5V29.5c0-.8-.7-1.5-1.5-1.5zm-2.6 8.2H32.1v-4.1h11.8v4.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_ad_set"
