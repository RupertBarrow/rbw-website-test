import localizationService from '/1/module/esm/0/l/en-US/mi/lightning/configProvider#defaultLocalizationConfig/v/1_14_4-alpha/latest/lightning_configProvider_defaultLocalizationConfig.js';

function getConfigFromAura($A) {
  return {
    getLocalizationService() {
      return $A.localizationService;
    },

    getPathPrefix() {
      return $A.getContext().getPathPrefix();
    },

    getToken(name) {
      return $A.getToken(name);
    }

  };
}

function createStandAloneConfig() {
  return {
    getLocalizationService() {
      return localizationService;
    },

    getPathPrefix() {
      return ''; // @sfdc.playground path-prefix DO-NOT-REMOVE-COMMENT
    },

    getToken() {
      return undefined; // @sfdc.playground token DO-NOT-REMOVE-COMMENT
    },

    getOneConfig() {
      return {
        densitySetting: ''
      };
    }

  };
}

export function getDefaultConfig() {
  return window.$A !== undefined && window.$A.localizationService ? getConfigFromAura(window.$A) : createStandAloneConfig();
}