import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fchannel_program_history.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_channel_program_history_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard#buildTemplates%2Fstandard%2Fchannel_program_history.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_channel_program_history_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M30.7 48.1c1-10.9 10.2-19.4 21.2-19.4 12.6 0 22.6 10.9 21.2 23.7-1 9.2-9.7 17.9-19 18.8-6.9.7-13.4-1.8-17.9-6.8-.6-.7-1.4-1.1-2.1-.1l-2.3 2.8c-.5.6-.1 1 .4 1.5 5.2 5.5 12.4 8.6 20.2 8.5 14-.2 25.7-11.2 26.6-25.2 1.2-15.8-11.4-29-27-29-14.3 0-26.1 11.1-27 25.2 0 .3-.1.7-.1 1h-4.4c-1.3 0-1.9 1.5-1.2 2.3l7.3 8.8c.6.7 1.6.7 2.2 0l7.3-8.8c.8-1 .1-2.3-1.2-2.3h-4.3l.1-1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M52.1 38.1c-6.5 0-11.9 5.4-11.9 11.9s5.4 11.9 11.9 11.9S64 56.5 64 50s-5.3-11.9-11.9-11.9zm9.5 10.7h-3.1c-.1-2.8-.8-5.3-1.7-7.1 2.6 1.4 4.4 4.1 4.8 7.1zM51 41v7.8h-2.7c.1-3.7 1.3-6.6 2.7-7.8zm0 10.2V59c-1.3-1.1-2.5-4.1-2.7-7.8H51zm2.3 7.8v-7.8H56c-.1 3.7-1.3 6.6-2.7 7.8zm0-10.2V41c1.3 1.1 2.5 4.1 2.7 7.8h-2.7zm-5.7-7.1c-1 1.9-1.5 4.3-1.7 7.1h-3.1c.3-3 2.1-5.7 4.8-7.1zm-4.9 9.5h3.1c.1 2.8.8 5.3 1.7 7.1-2.6-1.4-4.4-4.1-4.8-7.1zm14 7.1c1-1.9 1.5-4.3 1.7-7.1h3.1c-.3 3-2.1 5.7-4.8 7.1z"
  },
  key: 3,
  svg: true
};
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_channel_program_history"
}
