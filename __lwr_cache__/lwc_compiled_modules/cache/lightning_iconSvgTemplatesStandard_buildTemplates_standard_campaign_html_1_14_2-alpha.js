import _implicitStylesheets from "./campaign.css";

import _implicitScopedStylesheets from "./campaign.scoped.css?scoped=true";

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
      "d": "M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M50 32c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 30c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M50 44c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
    },
    key: 4,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_campaign"
