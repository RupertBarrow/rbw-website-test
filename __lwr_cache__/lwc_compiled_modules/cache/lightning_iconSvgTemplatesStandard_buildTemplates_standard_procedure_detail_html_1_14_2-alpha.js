import _implicitStylesheets from "./procedure_detail.css";

import _implicitScopedStylesheets from "./procedure_detail.scoped.css?scoped=true";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M69.7 79.52a10.2 10.2 0 1110.2-10.19 10.17 10.17 0 01-10.2 10.19zm.9-12.69a1.06 1.06 0 00-.7.2c-.56.38-1.12.76-1.66 1.17a2.82 2.82 0 00-.53.56.27.27 0 000 .35.29.29 0 00.35.08 3.12 3.12 0 00.39-.15l.38-.16c.18-.06.28 0 .27.22a1.07 1.07 0 010 .25q-.58 2.4-1.18 4.82a.89.89 0 00.45 1.06 1.13 1.13 0 001.15-.1c.54-.35 1.08-.72 1.59-1.11a5.45 5.45 0 00.71-.73.22.22 0 00.06-.28.27.27 0 00-.3-.11 3 3 0 00-.39.14c-.14.06-.28.14-.43.19s-.27 0-.25-.19a1.59 1.59 0 01.06-.38c.36-1.51.73-3 1.1-4.51a1 1 0 00-1.07-1.32zm1.08-2.1a1.55 1.55 0 00-1.78-1.47 1.38 1.38 0 00-1.08 2 1.55 1.55 0 001.71.89 1.47 1.47 0 001.15-1.42zM34.78 30.47h18.91a1.72 1.72 0 001.71-1.72v-3.44a5.17 5.17 0 00-5.15-5.16h-12a5.17 5.17 0 00-5.15 5.16v3.44a1.73 1.73 0 001.68 1.72z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M56.1 69.32a13.47 13.47 0 01.5-3.62H26.53a1.15 1.15 0 01-1.14-1.15v-2.28a1.15 1.15 0 011.14-1.14h32.33a13.55 13.55 0 019.44-5.35V29.61a5.17 5.17 0 00-5.16-5.16h-1.72a.82.82 0 00-.86.86v3.44a6.9 6.9 0 01-6.87 6.88H34.78a6.9 6.9 0 01-6.88-6.88v-3.44a.82.82 0 00-.86-.86h-1.72a5.17 5.17 0 00-5.16 5.16v37a5.17 5.17 0 005.16 5.16h31a13.76 13.76 0 01-.22-2.45zm-12.66-27a1.15 1.15 0 011.15-1.14h17.12a1.14 1.14 0 011.14 1.14v2.28a1.15 1.15 0 01-1.14 1.15H44.59a1.16 1.16 0 01-1.15-1.15zm-.16 10a1.15 1.15 0 011.14-1.14h17.29a1.15 1.15 0 011.14 1.14v2.29a1.14 1.14 0 01-1.14 1.14H44.42a1.14 1.14 0 01-1.14-1.14zm-18-3v-1.84a1.8 1.8 0 011.79-1.79h2.67V43a1.79 1.79 0 011.79-1.79h1.78a1.79 1.79 0 011.8 1.79v2.67h2.68a1.79 1.79 0 011.78 1.79v1.78A1.78 1.78 0 0137.79 51h-2.68v2.68a1.78 1.78 0 01-1.78 1.78h-1.78a1.79 1.79 0 01-1.79-1.78V51h-2.67a1.79 1.79 0 01-1.79-1.74z"
    },
    key: 4,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_procedure_detail"
