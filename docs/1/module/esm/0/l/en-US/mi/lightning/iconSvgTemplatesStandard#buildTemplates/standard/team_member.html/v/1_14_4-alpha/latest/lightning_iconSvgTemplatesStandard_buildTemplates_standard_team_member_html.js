import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/team_member.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_team_member_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesStandard#buildTemplates/standard/team_member.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_team_member_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M57 44H45c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M36.6 66.7c-.2-.2-.5-.4-.7-.6-1.9-2-3-4.5-3-7.1v-9c0-3.2 1.3-6.2 3.4-8.3.6-.6.1-1.7-.7-1.7H26c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c.9 0 1.7-.2 2.4-.5.4-.2.6-.5.6-.9v-5.1c0-.3-.1-.6-.4-.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M76 40h-6-3.6c-.9 0-1.3 1-.7 1.7 2.1 2.2 3.4 5.1 3.4 8.3v9c0 2.6-1 5.1-3 7.1-.2.2-.4.4-.7.6-.2.2-.4.5-.4.8v5.1c0 .4.2.8.6.9.7.3 1.5.5 2.4.5h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "51",
    "cy": "33",
    "r": "7"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "32",
    "cy": "29",
    "r": "7"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "cx": "70",
    "cy": "29",
    "r": "7"
  },
  key: 7,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("circle", stc4), api_element("circle", stc5), api_element("circle", stc6)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_team_member"
}
