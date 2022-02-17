import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesDoctype#buildTemplates/doctype/ppt.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_ppt_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesDoctype#buildTemplates/doctype/ppt.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesDoctype_buildTemplates_doctype_ppt_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.112-.004A5.074 5.074 0 00.039 5.07v53.841a5.073 5.073 0 005.073 5.074h45.774a5.074 5.074 0 005.074-5.074V20.306L37.058-.004H5.112z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#E34221"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M14.964 49.011h-3.331v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.854c0-.594.486-1.081 1.08-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619 0 1.963-1.387 3.619-3.763 3.619zm-.181-5.906h-3.15v4.573h3.15c1.423 0 2.395-.936 2.395-2.287 0-1.349-.972-2.286-2.395-2.286zm11.197 5.906h-3.332v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.854c0-.594.486-1.081 1.08-1.081h3.746c2.412 0 3.763 1.657 3.763 3.619 0 1.963-1.387 3.619-3.763 3.619zm-.18-5.906h-3.151v4.573H25.8c1.423 0 2.395-.936 2.395-2.287-.001-1.349-.972-2.286-2.395-2.286zm14.112 0h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.105h-3.259c-.36 0-.647-.288-.647-.684 0-.361.287-.648.647-.648h8.03c.36 0 .648.288.648.685a.644.644 0 01-.648.647z",
    "fill": "#fff"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#DC3119"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "opacity": ".5",
    "fill": "#fff"
  },
  key: 6,
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
      "viewBox": "0 0 56 64"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_ppt"
}
