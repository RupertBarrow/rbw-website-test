import _implicitStylesheets from "./qualifications.css";

import _implicitScopedStylesheets from "./qualifications.scoped.css?scoped=true";

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
      "d": "M44.41 62.4a.47.47 0 01-.38.24h-1.81a.46.46 0 01-.41-.24.39.39 0 010-.46l13-23.9a.52.52 0 01.38-.23h1.94a.48.48 0 01.23.64zM41.86 41.55a2.62 2.62 0 11-2.62 2.62 2.62 2.62 0 012.62-2.62m0-3.48a6.1 6.1 0 106.08 6.11 6.09 6.09 0 00-6.08-6.11zM80.39 50a1.64 1.64 0 00-1.22.54L62.23 69.2a.55.55 0 01-.41.18.54.54 0 01-.38-.15l-5.85-5.75a1.64 1.64 0 00-2.32 0L51 65.84a1.64 1.64 0 000 2.32l9.09 8.94a2.76 2.76 0 001.92.78 2.71 2.71 0 002-.9L84 55a1.64 1.64 0 00-.11-2.32l-2.43-2.2a1.61 1.61 0 00-1.07-.48z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M75.54 48l-2.06 2.28-1.27-1.48-.43-.52-2.45-2.93A9.26 9.26 0 0167.18 40l-.32-4.28a2.26 2.26 0 00-2-2.11l-3.73-.29a11.1 11.1 0 01-6.41-2.73l-2.85-2.5a2.24 2.24 0 00-2.92 0l-3.08 2.6a10.41 10.41 0 01-5.95 2.43l-4 .27a2.23 2.23 0 00-2.09 2.05l-.3 3.65a11.14 11.14 0 01-2.72 6.44l-2.46 2.83a2.24 2.24 0 000 2.92L31 54.49a10 10 0 012.27 5.71l.3 4.11a2.23 2.23 0 002 2.1l3.77.33a11.22 11.22 0 016.37 2.72l2.83 2.45a.83.83 0 00.15.11l3.38 3.31a5.62 5.62 0 01-2 .41 5.49 5.49 0 01-3.63-1.35l-2.86-2.47A7.8 7.8 0 0039 70l-3.75-.33a5.53 5.53 0 01-5-5.13L30 60.42a6.65 6.65 0 00-1.53-3.83l-2.66-3.22a5.49 5.49 0 01.06-7.17l2.45-2.85a8 8 0 001.94-4.55l.29-3.66a5.52 5.52 0 015.13-5l4-.28a7.17 7.17 0 004.07-1.65l3.09-2.61a5.54 5.54 0 017.2.06l2.84 2.5a7.84 7.84 0 004.51 1.93l3.74.29a5.51 5.51 0 015 5.14l.32 4.29a6 6 0 001.41 3.48l2.8 3.36a5.31 5.31 0 01.88 1.35z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M54.44 58.63a6 6 0 014.22 1.73l1.5 1.48a6.1 6.1 0 003.45-5.49 6.09 6.09 0 00-6.09-6.09 6.09 6.09 0 00-5.43 8.87 5.9 5.9 0 012.35-.5zm.46-2.29A2.62 2.62 0 1157.53 59a2.61 2.61 0 01-2.63-2.63z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_qualifications"
