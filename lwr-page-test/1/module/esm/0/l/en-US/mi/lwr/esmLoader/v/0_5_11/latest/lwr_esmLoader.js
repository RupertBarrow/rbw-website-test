/**
* Copyright (c) 2021, salesforce.com, inc.
* All rights reserved.
* SPDX-License-Identifier: MIT
* For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
*/

/* LWR ESM Module Loader v0.5.11 */

/**
 * Simplified version of the AMD Import Metadata Resolver.
 * Just reads the ImportMetadata at construction time.
 */
class ImportResolver {
  constructor(importMetada) {
    this.importURICache = new Map(); // Normalize the URI cache to optimize retrieval

    if (importMetada && importMetada.imports) {
      for (const [uri, value] of Object.entries(importMetada.imports)) {
        if (uri && value) {
          const specifiers = Array.isArray(value) ? value : [];
          specifiers.forEach(specifier => {
            this.importURICache.set(specifier, uri);
          });
        }
      }
    }
  }

  resolve(specifier) {
    return this.importURICache.get(specifier);
  }

}
/**
 * Simplified version of the AMD Import Metadata Resolver.
 * Just read the legacy ImportMap at construction time.
 */


class ImportResolverLegacy {
  constructor(importMap) {
    this.importURICache = importMap && importMap.imports ? importMap : {
      imports: {}
    };
  }
  /**
   * Resolves the URL for a specifier if it is in the global imports
   * This is using the pre-fingerprints importMappings syntax
   * @param specifier - Id of module we are looking for an id for
   */


  legacyResolve(specifier) {
    return this.importURICache.imports[specifier];
  }

}

const endpoints = globalThis.LWR && globalThis.LWR.endpoints;
const imports = globalThis.LWR && globalThis.LWR.imports || {};
const index = globalThis.LWR && globalThis.LWR.index || {};
const resolver = new ImportResolver({
  imports,
  index
});
const resolverLegacy = new ImportResolverLegacy(globalThis.LWR && globalThis.LWR.importMappings);

function load(specifier, importer) {
  const uri = resolveUrl(specifier, importer);
  return import(uri);
}

function resolveUrl(specifier, importer) {
  let uri; // Check if the URI is in the import metadata

  uri = resolver.resolve(specifier);

  if (uri) {
    return uri;
  } // Check if the URI is in the legacy import metadata


  uri = resolverLegacy.legacyResolve(specifier);

  if (uri) {
    return uri;
  } // Else fall back to the module endpoint


  uri = specifier; // do not alter the specifier if it is already a URL

  if (uri.indexOf('://') < 0 && !uri.startsWith('/')) {
    // add the specifier and importer to the default URI
    if (endpoints && endpoints.uris && endpoints.uris.module) {
      uri = endpoints.uris.module + encodeURIComponent(specifier);

      if (importer) {
        uri += `?importer=${encodeURIComponent(importer)}`;
      }
    }
  }

  return uri;
}

export { load };