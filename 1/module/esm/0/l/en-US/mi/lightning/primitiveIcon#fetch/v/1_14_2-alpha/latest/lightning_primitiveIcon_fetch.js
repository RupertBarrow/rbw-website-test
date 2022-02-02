// Cache for promises that import icon templates
const importPromises = {};
const iconTemplateCache = {};
export function hasIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return !!iconTemplateCache[cacheKey];
}
export function getIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return iconTemplateCache[cacheKey] || null;
}
export function fetchIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category); // If icon template is being requested, return the cached promise

  if (importPromises[cacheKey]) {
    return importPromises[cacheKey];
  }

  const promise = fetchIconTemplate(dir, category);
  promise.then(tmpl => {
    iconTemplateCache[cacheKey] = tmpl;
    delete importPromises[cacheKey];
  }).catch(() => {
    delete importPromises[cacheKey];
  }); // Cache the promise to import

  importPromises[cacheKey] = promise;
  return promise;
}

function makeCacheKey(dir, category) {
  return `${category}${dir}`;
} // eslint-disable-next-line @lwc/lwc/no-async-await


async function fetchIconTemplate(dir, category) {
  if (dir === 'rtl') {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesUtilityRtl.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesActionRtl%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesActionRtl.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandardRtl%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesStandardRtl.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctypeRtl%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesDoctypeRtl.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustomRtl%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesCustomRtl.js');
          return Lib;
        }

      default:
        return null;
    }
  } else {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtility%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesUtility.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesAction%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesAction.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesStandard.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesDoctype%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesDoctype.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesCustom%2Fv%2F1_14_2-alpha/latest/lightning_iconSvgTemplatesCustom.js');
          return Lib;
        }

      default:
        return null;
    }
  }
}