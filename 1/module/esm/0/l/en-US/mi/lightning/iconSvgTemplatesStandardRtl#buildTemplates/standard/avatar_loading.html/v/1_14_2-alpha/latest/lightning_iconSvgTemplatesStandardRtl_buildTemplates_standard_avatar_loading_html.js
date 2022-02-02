import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/avatar_loading.css/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_avatar_loading_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandardRtl#buildTemplates/standard/avatar_loading.scoped.cssscoped=true/v/1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl_buildTemplates_standard_avatar_loading_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_3/latest/lwc.js";
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
    attrs: {
      "opacity": ".5"
    },
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M80 71.2V74c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6v-2.8c0-7.3 8.5-11.7 16.5-15.2.3-.1.5-.2.8-.4.6-.3 1.3-.3 1.9.1C42.4 57.8 46.1 59 50 59s7.6-1.2 10.8-3.2c.6-.4 1.3-.4 1.9-.1.3.1.5.2.8.4 8 3.4 16.5 7.8 16.5 15.1z"
    },
    key: 3,
    svg: true
  }, []), api_element("ellipse", {
    attrs: {
      "cx": "50",
      "cy": "36.5",
      "rx": "14.9",
      "ry": "16.5"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_avatar_loading"
