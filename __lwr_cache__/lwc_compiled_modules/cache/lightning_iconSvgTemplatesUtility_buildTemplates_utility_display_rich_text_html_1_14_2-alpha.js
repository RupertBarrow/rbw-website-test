import _implicitStylesheets from "./display_rich_text.css";

import _implicitScopedStylesheets from "./display_rich_text.scoped.css?scoped=true";

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
      "d": "M4.1 43.1H48c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM4.1 29H48c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H4.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM32 14.9h16c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H32c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6zM24.1 21.6L16.7 3.3c-.2-.3-.5-.6-.9-.6h-5.7c-.3 0-.7.2-.8.6L2.5 21.6c-.1.3.1.8.5.8h3.6c.3 0 .7-.3.8-.6l1.4-3.9h8.7l1.5 3.9c.1.3.5.6.8.6h3.6c.5 0 .8-.4.7-.8zm-13.6-8.5l2.3-5.8h.5l2.5 5.8h-5.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_display_rich_text"
