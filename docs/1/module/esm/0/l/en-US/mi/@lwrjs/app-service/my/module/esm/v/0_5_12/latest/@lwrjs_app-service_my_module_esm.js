import { load } from "/1/module/esm/0/l/en-US/mi/lwr%2FesmLoader%2Fv%2F0_5_12/latest/lwr_esmLoader.js";
/* This module is generated */
import '/1/module/esm/0/l/en-US/mi/%40lwc%2Fsynthetic-shadow%2Fv%2F2_9_0/latest/@lwc_synthetic-shadow.js';
;
import { initHMR } from '/1/module/esm/0/l/en-US/mi/lwr%2Fhmr%2Fv%2F0_5_12/latest/lwr_hmr.js';
import { init, toKebabCase } from '/1/module/esm/0/l/en-US/mi/lwr%2Finit%2Fv%2F0_5_12/latest/lwr_init.js';

// initialize additional non-configured root components
const { rootComponents } = globalThis.LWR;
Promise.all(rootComponents.map(async (rootSpecifier) => {
    const element = toKebabCase(rootSpecifier);
    if (globalThis.performance) {
        globalThis.performance.measure('lwr-bootstrap-on-app-load');
    }
    return load(rootSpecifier, '@lwrjs/app-service/my/module/esm/v/0_5_12').then(({default: Ctor}) => {
        init([[element, Ctor]]);
    });
    return;
}));

// HMR related initialization
const viewMetadata = globalThis._lwrRuntimeDebug.viewMetadata;
const hmrEndpoint = globalThis.LWR.endpoints.uris.hmr;
initHMR(hmrEndpoint, viewMetadata);