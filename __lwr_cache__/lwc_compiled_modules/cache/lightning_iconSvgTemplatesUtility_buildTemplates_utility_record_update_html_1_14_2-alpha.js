import _implicitStylesheets from "./record_update.css";

import _implicitScopedStylesheets from "./record_update.scoped.css?scoped=true";

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
      "d": "M40.8 7.7"
    },
    key: 2,
    svg: true
  }, []), api_element("g", {
    key: 3,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M17.2 11.6h17.6c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6 0-4.8 2.2-4.8 4.8V10c0 .9.7 1.6 1.6 1.6z"
    },
    key: 4,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M43.6 6H42c-.5 0-.8.3-.8.8V10c0 3.5-2.9 6.4-6.4 6.4H17.2c-3.5 0-6.4-2.9-6.4-6.4V6.8c0-.5-.3-.8-.8-.8H8.4c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8V10.8c0-2.6-2.2-4.8-4.8-4.8zM34 30.4L21.2 43.2l-5.6 1.6c-.5.1-1-.4-.9-.9l1.6-5.5 12.8-12.8c.2-.2.5-.2.7 0l4.1 4.2c.3.1.3.4.1.6zm3.7-3.7l-1.6 1.6c-.2.2-.5.2-.7 0l-4.2-4.2c-.2-.2-.2-.5 0-.7l1.6-1.6c.7-.8 2-.8 2.7 0l2.1 2.1c.9.8.9 2 .1 2.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_record_update"
