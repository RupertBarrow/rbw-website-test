import _implicitStylesheets from "./agent_session.css";

import _implicitScopedStylesheets from "./agent_session.scoped.css?scoped=true";

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
  }, [api_element("path", {
    attrs: {
      "d": "M49.2 21.7c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.2-15.5-13.6-28-30.1-28zM41 62.1c0 .6-.5 1.1-1.1 1.1h-5.3c-.6 0-1.1-.5-1.1-1.1v-6.8c0-.6.5-1.1 1.1-1.1h5.3c.6 0 1.1.5 1.1 1.1v6.8zm12 0c0 .6-.5 1.1-1.1 1.1h-5.3c-.6 0-1.1-.5-1.1-1.1V46.3c0-.6.5-1.1 1.1-1.1h5.3c.6 0 1.1.5 1.1 1.1v15.8zm12 0c0 .6-.5 1.1-1.1 1.1h-5.3c-.6 0-1.1-.5-1.1-1.1V37.3c0-.6.5-1.1 1.1-1.1h5.3c.6 0 1.1.5 1.1 1.1v24.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_agent_session"
