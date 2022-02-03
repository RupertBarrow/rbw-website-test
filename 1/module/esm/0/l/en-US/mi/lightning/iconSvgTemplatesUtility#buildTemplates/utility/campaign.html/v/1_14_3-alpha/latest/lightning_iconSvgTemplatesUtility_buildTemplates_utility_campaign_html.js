import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/campaign.css/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_campaign_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility#buildTemplates/utility/campaign.scoped.css?scoped=true/v/1_14_3-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_campaign_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_7_4/latest/lwc.js";
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
      "d": "M26 .8C12.1.8.8 12.1.8 26S12.1 51.2 26 51.2 51.2 39.9 51.2 26 39.9.8 26 .8zm0 45.4C14.9 46.2 5.8 37.1 5.8 26S14.9 5.8 26 5.8 46.2 14.9 46.2 26 37.1 46.2 26 46.2zm0-35.3c-8.3 0-15.1 6.8-15.1 15.1S17.7 41.1 26 41.1 41.1 34.3 41.1 26 34.3 10.9 26 10.9zm0 25.2c-5.5 0-10.1-4.5-10.1-10.1S20.5 15.9 26 15.9 36.1 20.5 36.1 26 31.5 36.1 26 36.1zM26 21c-2.8 0-5 2.3-5 5s2.3 5 5 5 5-2.3 5-5-2.2-5-5-5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_campaign"
