import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/trailhead.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_trailhead_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtility%23buildTemplates/utility/trailhead.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtility_buildTemplates_utility_trailhead_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M12.3 37l-2.6 3h5.1zM14.7 43.1h5.1l-2.6-2.9zM35.2 41l2.5-2.9 2.6 2.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M26.8 2.2c-.4-.2-.9-.2-1.4 0C11.1 8.2 1.9 22.4 2.2 38v3.4c0 .5.2 1 .7 1.4 6.9 4.6 15 7.1 23.3 7.2h.9c7.9-.3 15.7-2.7 22.3-7.2.4-.3.7-.8.7-1.4V38c.3-15.6-8.9-29.8-23.3-35.8zM13.9 14.8c5.8-6.9 12.3-9.2 12.3-9.2 1.4.6 16.9 6.7 20.2 26.4h-4.1l-7.8-11.3c-.5-.7-1.6-.9-2.4-.4-.2.1-.3.3-.4.4l-2 2.8-5.5-7.9c-.5-.7-1.6-.9-2.4-.4-.2.1-.3.3-.4.4L10.2 31.9l-4.1.1c1.2-7.5 4.3-13 7.8-17.2zM38.1 32H28l2.6-3.8 2.4-3.6 5.1 7.4zM23.7 20.9l4 5.7-3.8 5.3h-9.6l4.1-6.1 4.3-6.4 1 1.5zM27.5 44L26 46.6c-2.9 0-5.6-.4-8.8-1.1-4.1-1-8-2.7-11.6-4.9v-2.5c0-.8 0-1.7.1-2.6h17.6c-1.4 2.1-.7 4.9 1.5 6.2.2.1.4.2.5.3l1.6.7c.6.2.8.8.6 1.3zm19.3-3.5c-2.6 1.6-5.3 2.9-8.1 3.9 0 0-.5.2-.7.2-1.6.5-3.2.9-4.9 1.3-.9.2-1.9.3-2.8.4l.3-.5c1.3-2.2.5-4.9-1.7-6.2-.1-.1-.3-.1-.4-.2l-1.6-.7c-.5-.2-.8-.8-.5-1.4 0-.1.1-.2.1-.2l1.5-1.7h18.7c0 .8.1 1.7.1 2.6v2.5z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_trailhead"
}
