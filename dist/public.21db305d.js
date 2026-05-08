// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"bS2Sa":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d5ae99f821db305d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kBsIF":[function(require,module,exports,__globalThis) {
// --- JSON IMPORTS ---
const teachersData = require("3beaea1c8d503c3c");
const academicCalendarData = require("93cd4bb5a86f5d94");
const coursesData = require("dfd1c02353a69396");
const mergedScheduleData = require("560359187b883ffd");
const mergedExamsData = require("5924892aed7ee144");
const mergedLabsData = require("bf9500722eb74210");
// Optional files - catch errors if they don't exist yet
let semesterExamsData = null, makeUpExamsData = null, septemberExamsData = null;
try {
    semesterExamsData = require("78420a12b33442a");
} catch (e) {}
try {
    makeUpExamsData = require("f739bffeb23f9a06");
} catch (e) {}
try {
    septemberExamsData = require("1f6c5918c275465f");
} catch (e) {}
//GLOBAL VARIABLES
let calendar;
let academicData = null;
let eventTracker = {};
let currentMode = "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1"; //hardcode the default radio button
let professorLinks = {};
let titleLinks = {};
let normalizedTitleLinks = {};
let isSeptember = false;
let filterOn = false; // Filtering is disabled at the start
//DOM ELEMENTS
const popup = document.getElementById("eventPopup"); //pop up for when you click on an event
const titleEl = document.getElementById("popTitle");
const profEl = document.getElementById("popProfessor");
const hallEl = document.getElementById("popHall");
const timeEl = document.getElementById("popTime"); //until here it's pop up stuff
const colorBtn = document.getElementById("colorBtn"); //the picker
const hiddenPicker = document.getElementById("hiddenPicker");
const clearSelectionBtn = document.getElementById("clearSelection");
const toggleScreenBtn = document.getElementById("toggleScreen");
const searchbar = document.getElementById("searchbar"); // The searchbar where the user will search for specific classes
const filterBtn = document.getElementById("filter"); // The filter button next to the searchbar 
const filterMenu = document.getElementById("filterMenu"); //The menu containing the options for teachers and classrooms when the filter is clicked
const filterSubmit = document.getElementById("filterSubmit"); // The "ok" button in the filter menu
const teacherSelect = document.getElementById("teacherSelect"); // The menu for teachers in the filter menu
const roomSelect = document.getElementById("roomSelect"); // The menu for teachers in the filter menu
// Settings Dropdown Elements
const settingsBtn = document.getElementById("settings");
const settingsMenu = document.getElementById("settings-menu");
// Lab Popup Elements
const labSlotPopup = document.getElementById("labSlotPopup");
const labSlotOptions = document.getElementById("labSlotOptions");
const labSlotTitle = document.getElementById("labSlotTitle");
const labSlotConfirm = document.getElementById("labSlotConfirm");
const labSlotCancel = document.getElementById("labSlotCancel");
//UTILITIES
const getSavedSchedule = ()=>JSON.parse(localStorage.getItem("userSchedule")) || []; //returns everything saved on local storage or null if it's empty
const saveSchedule = (scheduleArray)=>localStorage.setItem("userSchedule", JSON.stringify(scheduleArray));
const getSavedExams = ()=>JSON.parse(localStorage.getItem("userExams")) || []; //local storage same as above but for exams
const saveExams = (examsArray)=>localStorage.setItem("userExams", JSON.stringify(examsArray));
const getSavedLabs = ()=>JSON.parse(localStorage.getItem("userLabs")) || [];
const saveLabs = (labsArray)=>localStorage.setItem("userLabs", JSON.stringify(labsArray));
const formatJSONDate = (dateStr)=>{
    //this takes a date from 5/9/2023 to 2023-09-05
    const [day, month, year] = dateStr.trim().split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
const getSemesterDates = (semesterNum)=>{
    //finds start and end of semester based on if semester is odd or even
    if (!academicData || !semesterNum) return null;
    const isOdd = parseInt(semesterNum) % 2 !== 0;
    const semData = academicData.semesters[isOdd ? 0 : 1];
    return {
        start: formatJSONDate(semData.classes_start),
        end: formatJSONDate(semData.classes_end)
    };
};
//function to only get the title without the code
function extractTitleName(str) {
    return str.replace(/^([^-]+-){2,}/, "").replace(/\([^)]*\)/g, "").replace(/(^|\s)επ\.?(\s|$)/gi, " ").replace(/[^Α-Ωα-ωA-Za-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
//fuction to match the title on the pop up with the title on the json
function normalizeTitleName(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9α-ω\s]/gi, "") // removes hidden symbols
    .replace(/\s+/g, " ").trim();
}
const daysMapGreek = {
    "1": "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1",
    "2": "\u03A4\u03C1\u03AF\u03C4\u03B7",
    "3": "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7",
    "4": "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7",
    "5": "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE",
    "6": "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF",
    "7": "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE"
};
//API FETCHERS (Now using locally required variables)
async function fetchAcademicData() {
    try {
        academicData = academicCalendarData;
    } catch (err) {
        console.error("Error loading local JSON:", err);
    }
}
async function fetchProfessorLinks() {
    try {
        professorLinks = teachersData;
    } catch (err) {
        console.error("Error loading professor links:", err);
    }
}
async function fetchTitleLinks() {
    try {
        titleLinks = coursesData;
        Object.entries(titleLinks).forEach(([title, url])=>{
            normalizedTitleLinks[normalizeTitleName(title)] = url;
        });
    } catch (err) {
        console.error("Error loading courses:", err);
    }
}
async function fetchCourseData(title) {
    try {
        const scheduleData = mergedScheduleData.find((course)=>course.title === title);
        if (!scheduleData) {
            console.warn("Class not found");
            return {
                schedules: []
            };
        }
        const mappedSchedules = scheduleData.daysOfWeek.map((day, index)=>{
            return {
                title: scheduleData.title,
                day: day,
                lectureHall: scheduleData.lectureHall[index],
                start: scheduleData.startTime[index],
                end: scheduleData.endTime[index],
                color: scheduleData.color,
                professor: scheduleData.professor,
                semester: scheduleData.semester
            };
        });
        return {
            schedules: mappedSchedules
        };
    } catch (err) {
        console.error("Error processing course data:", err);
        return {
            schedules: []
        };
    }
}
//get's exam data
async function fetchExamData(title) {
    try {
        const baseTitle = title.split("(")[0].trim();
        const examData = mergedExamsData.find((exam)=>exam.title === title) || mergedExamsData.find((exam)=>exam.title === baseTitle);
        return examData || null;
    } catch (e) {
        console.warn(`No exam found for: ${title}`, e);
        return null;
    }
}
//EVENT HANDLERS
function handleEventClick(info) {
    //handles clicking on an event and dialog appearing
    popup.showModal();
    const event = info.event;
    const props = event.extendedProps;
    const start = event.start.toLocaleTimeString("el-GR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });
    const end = event.end.toLocaleTimeString("el-GR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "UTC"
    });
    const originalTitle = event.title;
    const Title = extractTitleName(originalTitle);
    const normalized = normalizeTitleName(Title);
    const link = normalizedTitleLinks[normalized] || titleLinks[originalTitle];
    titleEl.innerHTML = link ? `<a href="${link}" target="_blank" style="color: inherit; text-decoration: none;">
         ${originalTitle}
        </a>` : originalTitle;
    let profs = props.professor;
    if (!profs || profs.length === 0 || profs[0] === "") profEl.innerHTML = "N/A";
    else {
        // if teachers are many 
        let profArray = Array.isArray(profs) ? profs : profs.split(",");
        profEl.innerHTML = profArray.map((prof)=>{
            let cleanName = prof.trim();
            let link = professorLinks[cleanName]; // looks for the name
            // if it finds a link it replaces it with the <a> tag
            return link ? `<a href="${link}" target="_blank" style="color: #3788d8; text-decoration: underline;">${cleanName}</a>` : cleanName;
        }).join(", ");
    }
    if (hallEl) hallEl.innerText = props.lectureHall || "N/A";
    timeEl.innerText = `${start} - ${end}`;
    const targetSubject = props.subjectTitle //something to do with exams and dialog (I don't think it does anything)
    ;
    hiddenPicker.oninput = ()=>updateCourseColor(targetSubject, hiddenPicker.value);
}
//this function haddles apearance of the exam page
async function examOptions() {
    //most of the standard html element we need for the function
    const semesters1 = document.getElementById("semesters");
    const examsBox1 = document.getElementById("examsBox");
    const normalExam = document.getElementById("normalExam");
    const embolimExam = document.getElementById("embolimExam");
    //This handless the simple options of disapearing and apearing the divs depending on the radio buttons clicked 
    if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") {
        semesters1.style.display = "none";
        examsBox1.style.display = "flex";
        if (!document.getElementById("exam-pdf-wrapper")) {
            const pdfWrapper = document.createElement("div");
            pdfWrapper.id = "exam-pdf-wrapper"; // Give it a unique ID to check later
            const pdfLink = document.createElement("a");
            // Assuming uploads folder is statically served
            pdfLink.href = "uploads/exams.pdf";
            pdfLink.download = "exams.pdf";
            pdfLink.textContent = "\u039B\u03AE\u03C8\u03B7 \u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE\u03C2 (PDF)";
            pdfLink.id = "pdf-download-link"; // Reuses your existing CSS
            pdfWrapper.appendChild(pdfLink);
            examsBox1.appendChild(pdfWrapper);
        }
    }
    if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1" || currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
        const semesterWrappers = Array.from(document.querySelectorAll(".semesterButtonDivWrapper"));
        semesters1.innerHTML = "";
        semesterWrappers.sort((a, b)=>parseInt(a.dataset.index) - parseInt(b.dataset.index)); //sorts the divs so they are added in the correct order
        semesterWrappers.forEach((semester)=>{
            semesters1.append(semester);
        });
        if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") {
            const pdfWrapper = document.createElement("div");
            pdfWrapper.id = "pdf-wrapper";
            const pdfLink = document.createElement("a");
            pdfLink.href = "uploads/schedule.pdf";
            pdfLink.download = "schedule.pdf";
            pdfLink.textContent = "\u039B\u03AE\u03C8\u03B7 \u03A0\u03C1\u03BF\u03B3\u03C1\u03AC\u03BC\u03BC\u03B1\u03C4\u03BF\u03C2 (PDF)";
            pdfLink.id = "pdf-download-link";
            pdfWrapper.appendChild(pdfLink);
            semesters1.appendChild(pdfWrapper);
        }
        semesters1.style.display = "flex";
        examsBox1.style.display = "none";
    }
    let isWinter = false;
    // Determine winter semester status from required JSONs
    if (semesterExamsData && Array.isArray(semesterExamsData) && semesterExamsData.length > 0 && semesterExamsData[0].semester) isWinter = semesterExamsData[0].semester % 2 !== 0;
    else if (makeUpExamsData && Array.isArray(makeUpExamsData) && makeUpExamsData.length > 0 && makeUpExamsData[0].semester) isWinter = makeUpExamsData[0].semester % 2 === 0;
    //Check if september exams exist
    isSeptember = septemberExamsData !== null;
    let isNormalClicked = false; //by default the normal exams are shown and the embolim are not, so we set the normal to true and the embolim to false
    let isEmbolimClicked = false; //tracked what tabs are open and which are closed 
    normalExam.onclick = async ()=>{
        isNormalClicked = !isNormalClicked;
        const normalExamDiv = document.getElementById("normalExamDiv");
        if (isNormalClicked) {
            normalExamDiv.style.display = "block";
            normalExam.classList.add("active"); // Gives the button its 'checked' appearance
            const winterSemesters = document.querySelectorAll(".winterSemesters");
            const springSemesters = document.querySelectorAll(".springSemesters");
            if (isSeptember) {
                // If september file exists, append ALL semesters to normalExamDiv
                winterSemesters.forEach((semester)=>normalExamDiv.append(semester));
                springSemesters.forEach((semester)=>normalExamDiv.append(semester));
            } else if (isWinter) winterSemesters.forEach((semester)=>normalExamDiv.append(semester));
            else springSemesters.forEach((semester)=>normalExamDiv.append(semester));
        } else {
            normalExamDiv.style.display = "none";
            normalExam.classList.remove("active"); //returns the button to its default state
        }
    };
    embolimExam.onclick = async ()=>{
        isEmbolimClicked = !isEmbolimClicked;
        const embolimExamDiv = document.getElementById("embolimExamDiv");
        if (isEmbolimClicked) {
            embolimExamDiv.style.display = "block";
            embolimExam.classList.add("active"); // Gives the button its 'checked' appearance
            const winterSemesters = document.querySelectorAll(".winterSemesters");
            const springSemesters = document.querySelectorAll(".springSemesters");
            if (!isSeptember) {
                // Only append to embolim if it's NOT September (since September puts them all in normal)
                if (!isWinter) winterSemesters.forEach((semester)=>embolimExamDiv.append(semester));
                else springSemesters.forEach((semester)=>embolimExamDiv.append(semester));
            }
        } else {
            embolimExamDiv.style.display = "none";
            embolimExam.classList.remove("active"); //returns the button to its default state
        }
    };
    if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") {
        normalExam.click();
        embolimExam.click();
    }
}
// Listen for clicks on the radio buttons
document.querySelectorAll('input[name="choice"]').forEach((radio)=>{
    radio.addEventListener("change", (e)=>{
        currentMode = e.target.value;
        if (currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
            const hideWarning = localStorage.getItem("hideLabWarning");
            if (!hideWarning) {
                const warningPopup = document.getElementById("labWarningPopup");
                warningPopup.showModal();
                document.getElementById("labWarningGotIt").onclick = ()=>warningPopup.close();
                document.getElementById("labWarningNeverAgain").onclick = ()=>{
                    localStorage.setItem("hideLabWarning", "true");
                    warningPopup.close();
                };
            }
        }
        const semesters1 = document.getElementById("semesters"); // Getting the semesters from the documment so we can show or hide them
        const matchingCourses1 = document.getElementById("matchingCourses") // Getting the new div we made so we can add the matching classes there
        ;
        const searchbar = document.getElementById("searchbar"); // Getting the searchbar 
        // Clean up the UI: Close all open semester tabs when switching modes
        document.querySelectorAll(".buttonDiv").forEach((btn)=>{
            let sem = btn.parentElement.dataset.semester || btn.textContent.trim().slice(-1);
            let targetDiv = document.getElementById(`Semester${sem}`);
            if (targetDiv) targetDiv.innerHTML = ""; // Empty the list
            let arrow = btn.querySelector(".pointer");
            if (arrow) arrow.src = "images/right_pointer.svg";
            btn.dataset.open = "false"; // Reset our tracking variable
        });
        // Resetting the searchbar if another mode is toggled
        semesters1.style.display = "block" // Semesters reappear
        ;
        matchingCourses1.style.display = "none" // Previous results dissapear
        ;
        searchbar.value = "" // Bar is cleared
        ;
        filterMenu.style.display = "none" // hiding the filtermenu
        ;
        filterOn = false;
        teacherSelect.innerHTML = "<option>\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD</option>" // Returning the selction boxes to their starting state
        ;
        roomSelect.innerHTML = "<option>\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1</option>";
        examOptions(); //this function haddles apearance of the exam page
    });
});
function updateCourseColor(subjectTitle, newColor) {
    //updates courses color after clicking with color picker
    let currentSchedule = getSavedSchedule();
    let courseIndex = currentSchedule.findIndex((c)=>c.title === subjectTitle);
    if (courseIndex !== -1) {
        currentSchedule[courseIndex].color = newColor;
        saveSchedule(currentSchedule);
    }
    calendar.getEvents().forEach((e)=>{
        const eventSubject = e.extendedProps.subjectTitle;
        //I think this is supposed to change the colors of courses as well as the exam course but
        if (eventSubject === subjectTitle) {
            //I don't think it works corectly because it uses forEach .getEvent that only takes events currently on screen
            e.setProp("backgroundColor", newColor);
            e.setProp("borderColor", newColor);
        }
    });
}
async function handleCourseToggle(checkbox, targetTitle) {
    //new function to clear up callback hell, just does the toggling for the checkboxes
    checkbox.disabled = true;
    try {
        if (checkbox.checked) await addCourseToCalendar(targetTitle);
        else removeCourseFromCalendar(targetTitle);
    } catch (error) {
        console.error("Error updating schedule:", error);
    } finally{
        setTimeout(()=>checkbox.disabled = false, 250);
    }
}
async function addCourseToCalendar(targetTitle) {
    //new function, again, does the whole adding stuff to the calendar just made cleaner with a function
    const courseData = await fetchCourseData(targetTitle);
    if (courseData.schedules.length === 0) return;
    let sem;
    sem = courseData.schedules[0].semester;
    console.log(courseData);
    const dates = getSemesterDates(sem);
    if (!eventTracker[targetTitle]) eventTracker[targetTitle] = [];
    let dbColor = courseData.schedules.length > 0 ? courseData.schedules[0].color : "#3788d8"; //color logic if user has picked a color, use that else use db color, if no db color use blue
    let saved = getSavedSchedule();
    const isAlreadySaved = saved.some((c)=>c.title === targetTitle);
    const eventColor = isAlreadySaved ? saved.find((c)=>c.title === targetTitle).color : dbColor;
    if (!isAlreadySaved) {
        //if not aleady saved, saves it to local storage with the necessary data
        hiddenPicker.value = eventColor;
        saved.push({
            title: targetTitle,
            color: eventColor,
            semester: sem
        });
        saveSchedule(saved);
    }
    courseData.schedules.forEach((item)=>{
        //add's all courses (per index) to the calendar
        let addedEvent = calendar.addEvent({
            title: item.title,
            daysOfWeek: item.daysOfWeek || [
                item.day
            ],
            startTime: item.startTime || item.start,
            endTime: item.endTime || item.end,
            startRecur: dates ? dates.start : null,
            endRecur: dates ? dates.end : null,
            backgroundColor: eventColor,
            borderColor: eventColor,
            extendedProps: {
                //extended props just saves some extra data to be used later, mostly at the download calendar button
                professor: item.professor,
                lectureHall: item.lectureHall,
                subjectTitle: targetTitle,
                semester: item.semester,
                rawStart: item.startTime || item.start,
                rawEnd: item.endTime || item.end
            }
        });
        eventTracker[targetTitle].push(addedEvent);
    }); //push event to eventTracker
}
function removeCourseFromCalendar(targetTitle) {
    //removes and event from the calendar
    if (eventTracker[targetTitle]) {
        eventTracker[targetTitle].forEach((eventObj)=>eventObj?.remove());
        delete eventTracker[targetTitle];
    }
    let saved = getSavedSchedule();
    saveSchedule(saved.filter((c)=>c.title !== targetTitle));
}
function handleLabToggle(checkbox, labData) {
    let sem;
    return new Promise((resolve)=>{
        if (checkbox.checked) {
            checkbox.checked = false;
            sem = labData.semester;
            labSlotTitle.textContent = labData.name;
            labSlotOptions.innerHTML = "";
            labData.data.forEach((slot, index)=>{
                const label = document.createElement("label");
                label.style.cursor = "pointer";
                const radio = document.createElement("input");
                radio.type = "radio";
                radio.name = "labSlotChoice";
                radio.value = index;
                if (index === 0) radio.checked = true;
                const dayName = daysMapGreek[slot.day] || slot.day;
                const text = document.createTextNode(` ${dayName}, ${slot.time} (${slot.labhall})`);
                label.append(radio, text);
                labSlotOptions.appendChild(label);
            });
            // Event Listener that listens for the popup to close, so we can resolve the promise and allow future interactions
            const onClose = ()=>{
                labSlotPopup.removeEventListener("close", onClose);
                resolve();
            };
            labSlotPopup.addEventListener("close", onClose);
            labSlotConfirm.onclick = ()=>{
                const selectedRadio = document.querySelector('input[name="labSlotChoice"]:checked');
                if (selectedRadio) {
                    const selectedIndex = parseInt(selectedRadio.value);
                    const selectedSlot = labData.data[selectedIndex];
                    checkbox.checked = true;
                    addSpecificLabToCalendar(labData.name, selectedSlot, sem, labData.color);
                }
                labSlotPopup.close(); // This will trigger the onClose event
            };
            labSlotCancel.onclick = ()=>{
                labSlotPopup.close(); // This will trigger the onClose event
            };
            labSlotPopup.showModal();
        } else {
            removeLabFromCalendar(labData.name);
            resolve(); // If it's just unchecked, proceed immediately
        }
    });
}
function addSpecificLabToCalendar(labName, slot, sem, color, isRestoring = false) {
    const eventColor = color; // Διαβάζει το χρώμα κατευθείαν!
    const dates = getSemesterDates(sem);
    if (!eventTracker[labName]) eventTracker[labName] = [];
    const [startTime, endTime] = slot.time.split("-");
    let addedEvent = calendar.addEvent({
        title: labName,
        daysOfWeek: [
            parseInt(slot.day)
        ],
        startTime: startTime.trim(),
        endTime: endTime.trim(),
        startRecur: dates ? dates.start : null,
        endRecur: dates ? dates.end : null,
        backgroundColor: eventColor,
        borderColor: eventColor,
        extendedProps: {
            lectureHall: slot.labhall,
            subjectTitle: labName,
            semester: sem,
            rawStart: startTime.trim(),
            rawEnd: endTime.trim()
        }
    });
    eventTracker[labName].push(addedEvent);
    if (!isRestoring) {
        let saved = getSavedLabs();
        if (!saved.some((l)=>l.name === labName)) {
            saved.push({
                name: labName,
                slot,
                sem,
                color
            });
            saveLabs(saved);
        }
    }
}
function removeLabFromCalendar(labName) {
    if (eventTracker[labName]) {
        eventTracker[labName].forEach((eventObj)=>eventObj?.remove());
        delete eventTracker[labName];
    }
    let saved = getSavedLabs();
    saveLabs(saved.filter((l)=>l.name !== labName));
}
function addStandaloneExam(examData) {
    console.log(examData);
    const examTitleStr = examData.title;
    // 1. Convert the DD/MM/YYYY date to YYYY-MM-DD using your existing helper
    const formattedDate = formatJSONDate(examData.date);
    // 2. Combine date and time into valid ISO8601 strings for FullCalendar
    const startISO = `${formattedDate}T${examData.startTime}`;
    const endISO = `${formattedDate}T${examData.endTime}`;
    // 3. Convert the lectureHall array into a single comma-separated string
    const hallString = Array.isArray(examData.lectureHall) ? examData.lectureHall.join(", ") : examData.lectureHall || "N/A";
    // Safety check, don't add if it already exists
    let existing = calendar.getEvents().find((e)=>e.title === examTitleStr);
    if (!existing) {
        // Read the color from the JSON, or default to red
        const eventColor = examData.color ? examData.color : "#e74c3c";
        let addedExam = calendar.addEvent({
            title: examTitleStr,
            start: startISO,
            end: endISO,
            color: eventColor,
            extendedProps: {
                lectureHall: hallString,
                description: examData.division ? `\u{39A}\u{3BB}\u{3B9}\u{3BC}\u{3AC}\u{3BA}\u{3B9}\u{3BF}: ${examData.division}` : "",
                isExam: true
            }
        });
        // Save it to the eventTracker
        if (!eventTracker[examTitleStr]) eventTracker[examTitleStr] = [];
        eventTracker[examTitleStr].push(addedExam);
        // Save to Local Storage
        let saved = getSavedExams();
        if (!saved.some((e)=>e.title === examData.title)) {
            saved.push(examData);
            saveExams(saved);
        }
    }
}
function removeStandaloneExam(title) {
    const examTitleStr = title;
    // Remove from visual calendar and tracker
    if (eventTracker[examTitleStr]) {
        eventTracker[examTitleStr].forEach((eventObj)=>eventObj?.remove());
        delete eventTracker[examTitleStr];
    }
    // --- NEW: Remove from Local Storage ---
    let saved = getSavedExams();
    saveExams(saved.filter((e)=>e.title !== title));
}
//INITIALIZATION of calendar
document.addEventListener("DOMContentLoaded", async function() {
    const calendarEl = document.getElementById("calendar");
    calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: "Europe/Athens",
        initialView: "timeGridWeek",
        locale: "el",
        firstDay: 1,
        slotMinTime: "08:00:00",
        slotMaxTime: "21:00:00",
        allDaySlot: false,
        nowIndicator: true,
        height: "auto",
        buttonText: {
            today: "\u03A3\u03AE\u03BC\u03B5\u03C1\u03B1"
        },
        customButtons: {
            downloadBtn: {
                text: "\u039B\u03AE\u03C8\u03B7 (ICS)",
                click: downloadCalendar
            },
            viewBtn: {
                text: "\u0395\u03BE\u03AC\u03BC\u03B7\u03BD\u03B1",
                click: hideList
            }
        },
        headerToolbar: {
            left: "",
            center: "title",
            right: "downloadBtn today prev,next viewBtn"
        },
        eventClick: handleEventClick,
        eventDidMount: function(info) {
            //this here handles holidays
            if (info.event.display === "background") return; //this draws the holidays in the calendar
            const occurrenceStart = info.event.start.getTime();
            const isOnHoliday = calendar.getEvents().some((h)=>{
                //in this function we check if events lands on a holiday if it does we do not make it apear
                if (h.groupId !== "holidays") return false;
                const hStart = h.start.getTime();
                const hEnd = h.end ? h.end.getTime() : hStart + 86400000;
                return occurrenceStart >= hStart && occurrenceStart < hEnd;
            });
            if (isOnHoliday) info.el.style.display = "none";
        }
    });
    calendar.render(); //Makes calendar visible
    await fetchAcademicData();
    await fetchProfessorLinks();
    await fetchTitleLinks();
    // Populate Holidays, this code gives names, dates and data to the holidays
    if (academicData?.holidays) academicData.holidays.forEach((holiday)=>{
        let start = holiday.date, end = null;
        if (holiday.date.includes(" - ")) [start, end] = holiday.date.split(" - ");
        calendar.addEvent({
            title: holiday.name,
            allDay: true,
            display: "background",
            color: "#a95b71",
            groupId: "holidays",
            start: formatJSONDate(start),
            end: end ? formatJSONDate(end) : undefined
        });
    });
    // Load saved classes
    const savedClasses = getSavedSchedule();
    for (const item of savedClasses){
        await addCourseToCalendar(item.title, item.semester);
        updateCourseColor(item.title, item.color); // Ensure custom colors persist
    }
    //Load saved standalone exams
    const savedExams = getSavedExams();
    for (const examData of savedExams)addStandaloneExam(examData);
    const savedLabs = getSavedLabs();
    for (const lab of savedLabs)addSpecificLabToCalendar(lab.name, lab.slot, lab.sem, lab.color, true);
    appearCalendar(); //refresh calendar to show events
    resize();
    examOptions();
});
//UI EVENT LISTENERS
popup.onclick = (e)=>{
    if (e.target === popup) popup.close();
};
colorBtn.onclick = ()=>hiddenPicker.click();
clearSelectionBtn.onclick = ()=>{
    //button that clears all selections
    Object.values(eventTracker).forEach((events)=>events.forEach((e)=>e?.remove()));
    eventTracker = {};
    document.querySelectorAll(".checkbox").forEach((cb)=>cb.checked = false);
    document.querySelectorAll(".colorBtn").forEach((cp)=>cp.style.display = "none");
    // Clear both local storages
    localStorage.removeItem("userSchedule");
    localStorage.removeItem("userExams");
    localStorage.removeItem("userLabs");
};
// --- SETTINGS MENU LOGIC ADDED HERE ---
if (settingsBtn && settingsMenu) {
    // Toggle the menu when clicking the settings icon
    settingsBtn.addEventListener("click", function(event) {
        settingsMenu.classList.toggle("show");
        event.stopPropagation(); // Stops the click from bubbling up to the window listener
    });
    // Close the dropdown if the user clicks anywhere outside of it
    window.addEventListener("click", function(event) {
        // If the menu is currently showing, close it
        if (settingsMenu.classList.contains('show')) // Only close if the click wasn't inside the menu itself and wasn't the settings button
        {
            if (!settingsMenu.contains(event.target) && event.target !== settingsBtn) settingsMenu.classList.remove('show');
        }
    });
}
// --------------------------------------
document.querySelectorAll(".buttonDiv").forEach((button)=>{
    button.dataset.open = "false";
    let cleanText = button.textContent.trim();
    let sem = button.parentElement.dataset.semester || cleanText[cleanText.length - 1];
    let arrow = button.querySelector(".pointer");
    const SemesterDiv = document.getElementById(`Semester${sem}`);
    button.onclick = async function() {
        let isOpen = button.dataset.open === "true";
        isOpen = !isOpen;
        button.dataset.open = isOpen.toString();
        arrow.src = isOpen ? new URL(require("24797d619a5dbbe3")) : new URL(require("ecec44d163df7ab7"));
        if (!isOpen) {
            SemesterDiv.innerHTML = ``;
            return;
        }
        let dataArray = [];
        let isLabMode = currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1";
        let isExamMode = currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE";
        //FETCH DATA BASED ON MODE DIRECTLY FROM LOCAL VARIABLES
        try {
            if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") {
                const data = mergedScheduleData;
                const titles = data.filter((course)=>String(course.semester) === String(sem)).map((course)=>({
                        title: course.title,
                        original: course
                    }));
                dataArray = titles;
            } else if (isLabMode) {
                const labs = mergedLabsData;
                const filteredLabs = labs.filter((lab)=>String(lab.semester) === String(sem));
                dataArray = filteredLabs.map((l)=>({
                        title: l.name,
                        original: l
                    }));
            } else if (isExamMode) {
                if (isSeptember && septemberExamsData) {
                    const allSeptExams = septemberExamsData;
                    dataArray = allSeptExams.filter((exam)=>String(exam.semester) === String(sem)).map((e)=>({
                            title: e.title,
                            original: e
                        }));
                } else {
                    const exams = mergedExamsData;
                    const semesterExams = exams.filter((exam)=>String(exam.semester) === String(sem));
                    dataArray = semesterExams.map((e)=>({
                            title: e.title,
                            original: e
                        }));
                }
            }
        } catch (err) {
            console.error("Error accessing local data for semester expander:", err);
        }
        if (dataArray.length === 0) return;
        // 2. CREATE SELECT ALL BUTTON
        const selectAllDiv = document.createElement("div");
        selectAllDiv.className = "course select-all-wrapper";
        const selectAllText = document.createElement("p");
        selectAllText.textContent = "\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE \u038C\u03BB\u03C9\u03BD";
        selectAllText.style.fontWeight = "bold";
        const selectAllCheckbox = document.createElement("input");
        selectAllCheckbox.type = "checkbox";
        selectAllCheckbox.className = "checkbox master-checkbox";
        selectAllDiv.append(selectAllText, selectAllCheckbox);
        SemesterDiv.appendChild(selectAllDiv);
        setTimeout(()=>selectAllDiv.classList.add("visible"), 0);
        const itemCheckboxes = [];
        const savedClasses = getSavedSchedule();
        const currentlySavedExams = getSavedExams();
        //GENERATE COURSES
        dataArray.forEach((item, i)=>{
            const div = document.createElement("div");
            div.className = "course";
            const p = document.createElement("p");
            p.textContent = item.title;
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "checkbox";
            // Determine initial checked state
            if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") checkbox.checked = savedClasses.some((s)=>s.title === item.title);
            else if (isLabMode) checkbox.checked = !!eventTracker[item.title];
            else if (isExamMode) {
                const examTitleStr = item.title;
                checkbox.checked = currentlySavedExams.some((s)=>s.title === item.title) || calendar.getEvents().some((e)=>e.title === examTitleStr);
            }
            itemCheckboxes.push(checkbox);
            div.append(p, checkbox);
            SemesterDiv.appendChild(div);
            setTimeout(()=>div.classList.add("visible"), i * 50);
            div.onclick = (e)=>{
                if (checkbox.disabled || e.target === checkbox) return;
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event("change"));
            };
            checkbox.onchange = ()=>{
                if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") handleCourseToggle(checkbox, item.title);
                else if (isLabMode) handleLabToggle(checkbox, item.original);
                else if (isExamMode) {
                    // Disable the checkbox to prevent spamming
                    checkbox.disabled = true;
                    if (checkbox.checked) addStandaloneExam(item.original);
                    else removeStandaloneExam(item.title);
                    // Re-enable after 0.25 seconds
                    setTimeout(()=>checkbox.disabled = false, 250);
                }
                selectAllCheckbox.checked = itemCheckboxes.every((cb)=>cb.checked);
            };
        });
        // Initial Select All sync
        selectAllCheckbox.checked = itemCheckboxes.length > 0 && itemCheckboxes.every((cb)=>cb.checked);
        // Select All Click Logic
        selectAllDiv.onclick = (e)=>{
            // Ignore the click if the button is currently on cooldown
            if (selectAllCheckbox.disabled || e.target === selectAllCheckbox) return;
            selectAllCheckbox.checked = !selectAllCheckbox.checked;
            selectAllCheckbox.dispatchEvent(new Event("change"));
        };
        selectAllCheckbox.onchange = async ()=>{
            // Disable the checkbox and div interactions immediately
            selectAllCheckbox.disabled = true;
            selectAllDiv.style.pointerEvents = "none";
            try {
                const isChecked = selectAllCheckbox.checked;
                for(let index = 0; index < itemCheckboxes.length; index++){
                    const cb = itemCheckboxes[index];
                    if (cb.checked !== isChecked) {
                        cb.checked = isChecked;
                        if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") await handleCourseToggle(cb, dataArray[index].title);
                        else if (isLabMode) await handleLabToggle(cb, dataArray[index].original);
                        else if (isExamMode) {
                            if (cb.checked) addStandaloneExam(dataArray[index].original);
                            else removeStandaloneExam(dataArray[index].title);
                        }
                    }
                }
            } finally{
                // Re-enable everything after 250ms (0.25s)
                setTimeout(()=>{
                    selectAllCheckbox.disabled = false;
                    selectAllDiv.style.pointerEvents = "auto";
                }, 250);
            }
        };
    };
});
//ICS EXPORT
//this is the dark side of our code, we dont know exacty how it works but it uses the library https://github.com/nwcell/ics.js/ to make a ics file
//for the rest of this function gemini added the comments because I dont understand it
function downloadCalendar() {
    // 1. Initialize the ICS generator and get all current calendar events
    const cal = ics();
    const events = calendar.getEvents();
    if (events.length === 0) return; // Stop if the calendar is empty
    // 2. Find all holidays and list every single day they cover so we can skip classes on those dates
    const excludedDates = [];
    events.filter((e)=>e.groupId === "holidays").forEach((h)=>{
        let current = new Date(h.start);
        let end = h.end ? new Date(h.end) : new Date(h.start);
        if (!h.end) end.setDate(end.getDate() + 1); // If holiday is 1 day, make sure the loop runs once
        while(current < end){
            const pad = (n)=>n < 10 ? "0" + n : n; // Adds a leading zero (e.g., 9 becomes "09")
            const dateStr = `${current.getFullYear()}${pad(current.getMonth() + 1)}${pad(current.getDate())}`;
            if (!excludedDates.includes(dateStr)) excludedDates.push(dateStr); // Save the formatted date
            current.setDate(current.getDate() + 1); // Move to the next day
        }
    });
    // 3. Loop through saved classes and add them as repeating weekly events
    const daysMap = [
        "SU",
        "MO",
        "TU",
        "WE",
        "TH",
        "FR",
        "SA"
    ];
    Object.values(eventTracker).forEach((subjectEvents)=>{
        subjectEvents.forEach((event)=>{
            if (event._def.recurringDef) {
                // Check if it's a repeating class
                const days = event._def.recurringDef.typeData.daysOfWeek;
                const sem = event.extendedProps.semester || "1";
                const dates = getSemesterDates(sem);
                if (!dates) return;
                // Setup the weekly repeat rule until the end of the semester
                const rrule = {
                    freq: "WEEKLY",
                    until: dates.end,
                    byday: days.map((d)=>daysMap[d])
                };
                // Helper to clean up database times into pure HH:MM formats
                const parseTime = (t)=>{
                    if (Array.isArray(t)) t = t[0];
                    if (!t) return {
                        h: "00",
                        m: "00"
                    };
                    const p = String(t).split(":");
                    return {
                        h: p[0].padStart(2, "0"),
                        m: (p[1] || "00").padStart(2, "0")
                    };
                };
                const startT = parseTime(event.extendedProps.rawStart || event.start);
                const endT = parseTime(event.extendedProps.rawEnd || event.end);
                const [year, month, day] = dates.start.split("-");
                // Add the class to the ICS file
                cal.addEvent(event.title, event.extendedProps.professor || "N/A", event.extendedProps.lectureHall || "", `${month}/${day}/${year} ${startT.h}:${startT.m}:00`, `${month}/${day}/${year} ${endT.h}:${endT.m}:00`, rrule);
            }
        });
    });
    // 4. Add exams to the calendar (using a Set to prevent drawing the same exam twice)
    const uniqueExams = new Set();
    events.forEach((event)=>{
        if (!uniqueExams.has(event.title)) {
            cal.addEvent(event.title, event.extendedProps.description || "Exam", event.extendedProps.lectureHall || "", event.start.toISOString(), (event.end || new Date(event.start.getTime() + 7200000)).toISOString());
            uniqueExams.add(event.title); // Mark this exam as processed
        }
    });
    // 5. Generate the raw text for the .ics file
    let icsString = cal.build();
    // Google requires DTSTAMP to end in 'Z' (UTC format)
    icsString = icsString.replace(/DTSTAMP;VALUE=DATE-TIME:(\d{8}T\d{6})/g, "DTSTAMP:$1Z");
    // Google prefers clean DTSTART/DTEND tags without the VALUE parameter
    icsString = icsString.replace(/DTSTART;VALUE=DATE-TIME:/g, "DTSTART:");
    icsString = icsString.replace(/DTEND;VALUE=DATE-TIME:/g, "DTEND:");
    // Force unique IDs so Google Calendar doesn't silently ignore deleted test events
    icsString = icsString.replace(/UID:\d+@default/g, ()=>`UID:${Math.random().toString(36).substring(2)}${Date.now()}@schedule.ics`);
    // --------------------------------------------
    // 6. Inject the holiday exclusion dates into the raw ICS text using Regex
    if (excludedDates.length > 0) icsString = icsString.replace(/BEGIN:VEVENT([\s\S]*?)END:VEVENT/g, (match)=>{
        // Only apply exclusions to repeating events (classes), not one-off events (exams)
        if (match.includes("RRULE") || match.includes("rrule")) {
            const startMatch = match.match(/DTSTART(.*?):(\d{8})T(\d{6})(Z?)/); // Find the exact start time of the class
            if (startMatch) {
                // Attach the class's start time to every holiday date, so the calendar knows exactly what time slot to cancel
                const exDatesFormatted = excludedDates.map((d)=>`${d}T${startMatch[3]}${startMatch[4]}`).join(",");
                return match.replace("END:VEVENT", `EXDATE${startMatch[1]}:${exDatesFormatted}\r\nEND:VEVENT`);
            }
        }
        return match;
    });
    // 7. Create a virtual file (Blob) in the browser and force a download
    const blob = new Blob([
        icsString
    ], {
        type: "text/calendar;charset=utf-8"
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "university_schedule.ics"; // Name of the downloaded file
    document.body.appendChild(link); // Temporarily attach the link to the screen
    link.click(); // Automatically click it
    document.body.removeChild(link); // Clean up the link afterward
}
//now back to human comments :)
//this is the visual (the gay part) of our js code
//this function hides the list of semesters on the right hand side
function hideList() {
    if (window.innerWidth <= 767) return toggleScreenBtn?.click();
    const list = document.getElementById("semesterWrapper");
    list.style.display = list.style.display === "none" ? "" : "none";
    calendar.updateSize();
}
//this function get's called when we click the button on the calendar has 2 diffrent functions depending on your screen
toggleScreenBtn.onclick = function() {
    const list = document.getElementById("semesterWrapper");
    const calEl = document.getElementById("calendar");
    if (calEl.style.display === "flex") {
        calEl.style.setProperty("display", "none", "important");
        list.style.display = "flex";
    } else {
        list.style.display = "none";
        calEl.style.setProperty("display", "flex", "important");
        calendar.updateSize();
    }
};
//this just resizes the calendar (refresh's it)
function resize() {
    const sidebar = document.getElementById("semesterWrapper");
    sidebar.style.height = "unset";
    sidebar.style.height = getComputedStyle(document.getElementById("calendar")).height;
}
//this makes the calendar apear if we click it from mobile
function appearCalendar() {
    const list = document.getElementById("semesterWrapper");
    const calEl = document.getElementById("calendar");
    if (window.innerWidth > 767) {
        calEl.style.setProperty("display", "flex", "important");
        calendar.updateSize();
    } else {
        calEl.style.setProperty("display", "none", "important");
        list.style.display = "flex";
    }
}
//resize wrapper/sidebar on window change
function resizeWrapper() {
    const sidebar = document.getElementById("semesterWrapper");
    if (sidebar) sidebar.style.width = "280px";
}
// --- Legal Disclaimer Logic με Session Cookie ---
// make cookie for legal things maybe 
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) == ' ')c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function checkDisclaimer() {
    if (!getCookie("legalAcceptedSession")) {
        const banner = document.getElementById("legal-disclaimer");
        if (banner) banner.style.display = "block";
    }
}
function acceptDisclaimer() {
    document.cookie = "legalAcceptedSession=true; path=/; SameSite=Lax";
    const banner = document.getElementById("legal-disclaimer");
    if (banner) banner.style.display = "none";
}
window.addEventListener("load", checkDisclaimer);
document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("semesterWrapper");
    const resizer = document.getElementById("dragHandle");
    if (!sidebar || !resizer) return; // Safety check
    let isResizing = false;
    // Start dragging
    resizer.addEventListener("mousedown", (e)=>{
        isResizing = true;
        resizer.classList.add("dragging");
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none"; // Stops text highlighting
    });
    // Doing the drag
    document.addEventListener("mousemove", (e)=>{
        if (!isResizing) return;
        // Calculate width: Window width minus mouse position (because sidebar is on the right)
        let newWidth = window.innerWidth - e.clientX;
        //Min 272px, Max 30% of screen
        if (newWidth > 272 && newWidth < window.innerWidth * 0.3) {
            sidebar.style.width = `${newWidth}px`;
            sidebar.style.flex = "none"; // Stop flexbox from ignoring our width
            if (typeof calendar !== "undefined" && calendar) calendar.updateSize(); // Fixes the calendar grid instantly
        }
    });
    // Stop dragging
    document.addEventListener("mouseup", ()=>{
        if (isResizing) {
            isResizing = false;
            resizer.classList.remove("dragging");
            document.body.style.cursor = "default";
            document.body.style.userSelect = "auto";
        }
    });
});
addEventListener("resize", ()=>{
    if (window.innerWidth > 767) {
        appearCalendar();
        resize();
        resizeWrapper();
    }
});
// Event listener for the searchbar
searchbar.addEventListener("keyup", async function(e) {
    let search = e.target.value; // Stores whatever the use wrote
    const semesters1 = document.getElementById("semesters"); // Getting the semesters from the documment so we can show or hide them
    const matchingCourses1 = document.getElementById("matchingCourses") // Getting the new div we made so we can add the matching classes there
    ;
    const examsBox1 = document.getElementById("examsBox"); // Also getting the examsbox so we can show or hide it
    var titlesArray = [] // Creating this here so it can be used in all modes
    ;
    const savedClasses = getSavedSchedule(); // Same for this
    // If it is not null we move on to show the user the matched courses
    if (search) {
        // If the filter menu is visible we hide it
        if (filterOn) {
            filterOn = !filterOn;
            filterMenu.style.display = "none";
        }
        matchingCourses1.innerHTML = ''; // Clearing the previous searches 
        matchingCourses1.style.display = "block" // Making sure its visible
        ;
        semesters1.style.display = "none" // We remove the semesters so the sidebar does not get cluttered and ugly
        ;
        examsBox1.style.display = "none" // Hiding the examsbox
        ;
        // Fetching matching classes from local JSON variables
        try {
            let data = currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1" ? mergedScheduleData : currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE" ? mergedExamsData : mergedLabsData;
            const titles = data.filter((item)=>String(item.title || item.name).toUpperCase().includes(String(search).toUpperCase())).map((item)=>({
                    title: item.title || item.name,
                    original: item
                }));
            titlesArray = titles.map((course)=>course.title);
            // In case the search mathes no title we inform the user by creating a div containing a message
            if (titlesArray.length === 0) {
                const div = document.createElement("div");
                div.style.textAlign = "center";
                const p = document.createElement("p");
                p.textContent = "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BC\u03AC\u03B8\u03B7\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 '" + String(search) + "' :(";
                p.style.color = "white";
                p.style.fontFamily = "sans-serif";
                div.append(p);
                matchingCourses1.appendChild(div);
                return; // We stop the function from doing anything else
            }
            //creates for each title in title array a div with a pargaraph and a checkbox in it so it generates everything dinamicly
            titles.forEach((itemObj, i)=>{
                let title = itemObj.title;
                const div = document.createElement("div");
                div.className = "course";
                const p = document.createElement("p");
                p.textContent = title;
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "checkbox";
                checkbox.checked = savedClasses.some((saved)=>saved.title === title);
                div.append(p, checkbox);
                matchingCourses1.appendChild(div);
                setTimeout(()=>div.classList.add("visible"), i * 50);
                div.onclick = (e)=>{
                    //ckeckbox logic on the div
                    if (checkbox.disabled || e.target === checkbox) return;
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event("change"));
                };
                checkbox.onchange = async ()=>{
                    if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") handleCourseToggle(checkbox, title);
                    else if (currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
                        if (checkbox.checked) handleLabToggle(checkbox, itemObj.original);
                        else removeLabFromCalendar(title);
                    } else if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") {
                        if (checkbox.checked) addStandaloneExam(itemObj.original);
                        else removeStandaloneExam(itemObj.original.title);
                    }
                };
            });
        } catch (err) {
            console.error("Error fetching local search data", err);
        }
    } else {
        matchingCourses1.innerHTML = ''; // Clearing the previous search results
        if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") examsBox1.style.display = "flex" // if we're in exam mode we also show the examsbox
        ;
        else semesters1.style.display = "block" // If the searchbar is null then the semesters reappear
        ;
    }
});
filterBtn.addEventListener("click", async function() {
    filterOn = !filterOn; // Enabling/Disabling
    let search = searchbar.value;
    const semesters1 = document.getElementById("semesters"); // Getting the semesters from the documment so we can show or hide them
    const matchingCourses1 = document.getElementById("matchingCourses") // Getting the new div we made so we can add the matching classes there
    ;
    const examsBox1 = document.getElementById("examsBox"); // Also getting the examsbox so we can show or hide it
    // Only showing the menu if the searchbar is empty to avoid conflicts and making a mess in the sidebar
    if (filterOn && !search) {
        filterMenu.style.display = "flex" // Making the menu visible
        ;
        // Fetching teachers and rooms from local JSON variables
        try {
            let data = currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1" ? mergedScheduleData : currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE" ? mergedExamsData : mergedLabsData;
            let teachersArray = [];
            let roomsArray = [];
            if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") {
                teachersArray = [
                    ...new Set(data.map((item)=>item.professor).flat())
                ].filter(Boolean);
                roomsArray = [
                    ...new Set(data.map((item)=>item.lectureHall).flat())
                ].filter(Boolean);
            } else if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") roomsArray = [
                ...new Set(data.map((item)=>item.lectureHall).flat())
            ].filter(Boolean);
            else if (currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
                const allLabHalls = data.flatMap((lab)=>lab.data.map((d)=>d.labhall));
                roomsArray = [
                    ...new Set(allLabHalls)
                ].filter(Boolean);
            }
            teachersArray.sort() // Sorting the arrays
            ;
            roomsArray.sort();
            teacherSelect.innerHTML = "<option>\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD</option>";
            roomSelect.innerHTML = "<option>\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1</option>";
            //append each teacher to the box
            teachersArray.forEach((teacher)=>{
                const option = document.createElement("option");
                option.value = teacher;
                option.textContent = teacher;
                teacherSelect.appendChild(option);
            });
            //append each room to the box
            roomsArray.forEach((room)=>{
                const option = document.createElement("option");
                option.value = room;
                option.textContent = room;
                roomSelect.appendChild(option);
            });
        } catch (err) {
            console.error("Error fetching filter data locally:", err);
        }
    } else if (!search) {
        filterMenu.style.display = "none" // Making the menu invisible
        ;
        teacherSelect.innerHTML = "<option>\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD</option>" // Returning the selction boxes to their starting state
        ;
        roomSelect.innerHTML = "<option>\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1</option>";
        matchingCourses1.innerHTML = ''; // Clearing the previous search results
        if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") examsBox1.style.display = "flex" // if we're in exam mode we also show the examsbox
        ;
        else semesters1.style.display = "block" // bring back the semesters
        ;
    }
});
filterSubmit.addEventListener("click", async function() {
    let teacher = teacherSelect.value;
    let room = roomSelect.value;
    if (teacher != "\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD" || room != "\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1") {
        const semesters1 = document.getElementById("semesters"); // Getting the semesters from the documment so we can show or hide them
        const matchingCourses1 = document.getElementById("matchingCourses") // Getting the new div we made so we can add the matching classes there
        ;
        const examsBox1 = document.getElementById("examsBox"); // Also getting the examsbox so we can show or hide it
        var titlesArray = [] // Creating this here so it can be used in all modes
        ;
        const savedClasses = getSavedSchedule(); // Same for this
        matchingCourses1.innerHTML = ''; // Clearing the previous searches 
        matchingCourses1.style.display = "block" // Making sure its visible
        ;
        semesters1.style.display = "none" // We remove the semesters so the sidebar does not get cluttered and ugly
        ;
        examsBox1.style.display = "none" // Hiding the examsbox
        ;
        // Fetching matching classes locally
        try {
            let data = currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1" ? mergedScheduleData : currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE" ? mergedExamsData : mergedLabsData;
            const filtered = data.filter((item)=>{
                let matchTeacher = true; // Since one of the filters can be blank, we start with "true"
                let matchRoom = true;
                if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") {
                    if (teacher != "\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD") matchTeacher = item.professor && item.professor.includes(teacher);
                    if (room != "\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1") matchRoom = item.lectureHall && item.lectureHall.includes(room);
                } else if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") {
                    if (room != "\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1") matchRoom = item.lectureHall && item.lectureHall.includes(room);
                } else if (currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
                    if (room != "\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1") matchRoom = item.data && item.data.some((d)=>d.labhall === room);
                }
                return matchTeacher && matchRoom;
            });
            titlesArray = filtered.map((item)=>({
                    title: item.title || item.name,
                    original: item
                }));
            // In case the search mathes no title we inform the user by creating a div containing a message
            if (titlesArray.length === 0) {
                const div = document.createElement("div");
                div.style.textAlign = "center";
                const p = document.createElement("p");
                p.textContent = "\u0394\u03B5\u03BD \u03B2\u03C1\u03AD\u03B8\u03B7\u03BA\u03B5 \u03BC\u03AC\u03B8\u03B7\u03BC\u03B1 \u03C0\u03BF\u03C5 \u03BD\u03B1 \u03B1\u03BD\u03C4\u03B9\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF \u03C3\u03B5 '" + String(teacher) + " \u03BA\u03B1\u03B9 " + String(room) + " :(";
                p.style.color = "white";
                p.style.fontFamily = "sans-serif";
                div.append(p);
                matchingCourses1.appendChild(div);
                return; // We stop the function from doing anything else
            }
            //creates for each title in title array a div with a pargaraph and a checkbox in it so it generates everything dinamicly
            titlesArray.forEach((itemObj, i)=>{
                let title = itemObj.title;
                const div = document.createElement("div");
                div.className = "course";
                const p = document.createElement("p");
                p.textContent = title;
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "checkbox";
                checkbox.checked = savedClasses.some((saved)=>saved.title === title);
                div.append(p, checkbox);
                matchingCourses1.appendChild(div);
                setTimeout(()=>div.classList.add("visible"), i * 50);
                div.onclick = (e)=>{
                    //ckeckbox logic on the div
                    if (checkbox.disabled || e.target === checkbox) return;
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event("change"));
                };
                checkbox.onchange = async ()=>{
                    if (currentMode === "\u039C\u03B1\u03B8\u03AE\u03BC\u03B1\u03C4\u03B1") handleCourseToggle(checkbox, title);
                    else if (currentMode === "\u0395\u03C1\u03B3\u03B1\u03C3\u03C4\u03AE\u03C1\u03B9\u03B1") {
                        if (checkbox.checked) handleLabToggle(checkbox, itemObj.original);
                        else removeLabFromCalendar(title);
                    } else if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") {
                        if (checkbox.checked) addStandaloneExam(itemObj.original);
                        else removeStandaloneExam(itemObj.original.title);
                    }
                };
            });
        } catch (err) {
            console.error("Error fetching local filtered data:", err);
        }
    } else if (teacher === "\u0394\u03B9\u03B4\u03AC\u03C3\u03BA\u03C9\u03BD" || room === "\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1") {
        filterMenu.style.display = "none" // Making the menu invisible
        ;
        teacherSelect.innerHTML = "<option >\u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE\u03C2</option>" // Returning the selction boxes to their starting state
        ;
        roomSelect.innerHTML = "<option >\u0391\u03AF\u03B8\u03BF\u03C5\u03C3\u03B1</option>";
        matchingCourses.innerHTML = ''; // Clearing the previous search results
        if (currentMode === "\u0395\u03BE\u03B5\u03C4\u03B1\u03C3\u03C4\u03B9\u03BA\u03AE") examsBox.style.display = "flex" // if we're in exam mode we also show the examsbox
        ;
        else semesters.style.display = "block" // bring back the semesters
        ;
    }
});
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    // Check what the user saved last time they visited
    const savedTheme = localStorage.getItem("userTheme");
    // If they saved "dark", apply the theme AND check the box
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        darkModeToggle.checked = true;
    }
    // Listen for clicks and save the new choice
    darkModeToggle.addEventListener("change", function(event) {
        if (event.target.checked) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("userTheme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("userTheme", "light");
        }
    });
}

},{"24797d619a5dbbe3":"eR1sH","ecec44d163df7ab7":"1wC1H","3beaea1c8d503c3c":"l9nLQ","93cd4bb5a86f5d94":"4JaUD","dfd1c02353a69396":"1ypbV","560359187b883ffd":"l2J6w","5924892aed7ee144":"7p0wB","bf9500722eb74210":"7V8Q4","78420a12b33442a":"3McE7","f739bffeb23f9a06":"../static/jsonData/make_up_exams.json","1f6c5918c275465f":"../static/jsonData/september_exams.json"}],"eR1sH":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("down_pointer.6614c7eb.svg") + "?" + Date.now();

},{}],"1wC1H":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("right_pointer.35e651a0.svg") + "?" + Date.now();

},{}],"l9nLQ":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"\u0391\u039B\u0395\u039E\u0399\u039F\u03A5 \u0391.":"https://www.ds.unipi.gr/faculty/alexiou/","\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394.":"https://www.ds.unipi.gr/faculty/dvouyiou/","\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393.":"https://www.ds.unipi.gr/faculty/georgev/","\u0393\u0391\u039B\u0391\u039D\u0397 \u0391.":"https://www.ds.unipi.gr/lab-teaching-staff/agalani/","\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.":"https://www.ds.unipi.gr/lab-teaching-staff/dgkotzos/","\u0393\u039A\u03A1\u0399\u03A4\u0396\u0391\u039B\u0397\u03A3 \u03A3.":"https://www.ds.unipi.gr/faculty/sgritz/","\u0394\u0395\u039C\u0395\u03A3\u03A4\u0399\u03A7\u0391\u03A3 \u03A0.":"https://www.ds.unipi.gr/faculty/pdemest/","\u0394\u039F\u03A5\u039B\u039A\u0395\u03A1\u0399\u0394\u0397\u03A3 \u03A7.":"https://www.ds.unipi.gr/faculty/cdoulk/","\u0395\u03A5\u0398\u03A5\u039C\u039F\u0393\u039B\u039F\u03A5 \u0393.":"https://www.ds.unipi.gr/faculty/gefthymo/","\u039A\u0391\u039D\u0391\u03A4\u0391\u03A3 \u0391.":"https://www.ds.unipi.gr/faculty/kanatas/","\u039A\u039F\u03A5\u03A6\u0397 \u0392.":"https://www.ds.unipi.gr/lab-teaching-staff/vassok/","\u039A\u03A5\u03A1\u0399\u0391\u0396\u0397\u03A3 \u0394.":"https://www.ds.unipi.gr/faculty/dimos/","\u039C\u0391\u0393\u039A\u039B\u039F\u0393\u0399\u0391\u039D\u039D\u0397\u03A3 \u0397.":"https://www.ds.unipi.gr/faculty/imaglo/","\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B.":"https://www.ds.unipi.gr/lab-teaching-staff/elmak/","\u039C\u0391\u039D\u039F\u03A5\u03A3\u039F\u03A0\u039F\u03A5\u039B\u039F\u03A3 \u03A7.":"https://www.ds.unipi.gr/lab-teaching-staff/cman/","\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.":"https://www.ds.unipi.gr/faculty/amenychtas/","\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391.":"https://www.ds.unipi.gr/faculty/meliones/","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A.":"https://www.ds.unipi.gr/lab-teaching-staff/kmouts/","\u039E\u0395\u039D\u0391\u039A\u0397\u03A3 \u03A7.":"https://www.ds.unipi.gr/faculty/xenakis/","\u03A0\u0391\u039D\u039F\u03A5 \u0391.":"https://www.ds.unipi.gr/lab-teaching-staff/apanou/","\u03A0\u0391\u03A1\u0391\u03A3\u039A\u0395\u03A5\u0391 \u03A6.":"https://www.ds.unipi.gr/faculty/fparaske/","\u03A0\u03A1\u0395\u039D\u03A4\u0396\u0391 \u0391.":"https://www.ds.unipi.gr/faculty/aprentza/","\u03A1\u0395\u03A4\u0391\u039B\u0397\u03A3 \u03A3.":"https://www.ds.unipi.gr/faculty/retal/","\u03A1\u039F\u03A5\u03A3\u039A\u0391\u03A3 \u0391.":"https://www.ds.unipi.gr/faculty/arouskas/","\u03A3\u0391\u039C\u03A8\u03A9\u039D \u0394.":"https://www.ds.unipi.gr/faculty/sampson/","\u03A3\u0393\u039F\u03A5\u03A1\u039F\u03A3 \u039D.-\u039C.":"https://www.ds.unipi.gr/faculty/sgouros/","\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395.":"https://www.ds.unipi.gr/lab-teaching-staff/estoug/","\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C.":"https://www.ds.unipi.gr/faculty/mfilip/","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395.":"https://www.ds.unipi.gr/lab-teaching-staff/ehalep/","\u03A7\u0391\u039B\u039A\u0399\u0394\u0397 \u039C.":"https://www.ds.unipi.gr/faculty/mhalk/","\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F.":"https://www.ds.unipi.gr/faculty/telelis/"}');

},{}],"4JaUD":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"academic_year":"2025-2026","semesters":[{"name":"\u03A7\u0395\u0399\u039C\u0395\u03A1\u0399\u039D\u039F \u0395\u039E\u0391\u039C\u0397\u039D\u039F","classes_start":"6/10/2025","classes_end":"17/1/2026"},{"name":"\u0395\u0391\u03A1\u0399\u039D\u039F \u0395\u039E\u0391\u039C\u0397\u039D\u039F","classes_start":"24/2/2026","classes_end":"6/6/2026"}],"holidays":[{"date":"28/10/2025","name":"\u0395\u03B8\u03BD\u03B9\u03BA\u03AE \u0395\u03C0\u03AD\u03C4\u03B5\u03B9\u03BF\u03C2 28\u03B7\u03C2 \u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5"},{"date":"17/11/2025","name":"\u0395\u03C0\u03AD\u03C4\u03B5\u03B9\u03BF\u03C2 \u03C4\u03BF\u03C5 \u03A0\u03BF\u03BB\u03C5\u03C4\u03B5\u03C7\u03BD\u03B5\u03AF\u03BF\u03C5"},{"date":"12/12/2025","name":"\u0391\u03B3. \u03A3\u03C0\u03C5\u03C1\u03AF\u03B4\u03C9\u03BD\u03B1, \u03A0\u03BF\u03BB\u03B9\u03BF\u03CD\u03C7\u03BF\u03C2 \u03A0\u03B5\u03B9\u03C1\u03B1\u03B9\u03AC"},{"date":"24/12/2025 - 7/1/2026","name":"\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AD\u03C2 \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03C5\u03B3\u03AD\u03BD\u03BD\u03C9\u03BD"},{"date":"30/1/2026","name":"\u03A4\u03C1\u03B9\u03CE\u03BD \u0399\u03B5\u03C1\u03B1\u03C1\u03C7\u03CE\u03BD"},{"date":"23/2/2026","name":"\u039A\u03B1\u03B8\u03B1\u03C1\u03AC \u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1"},{"date":"25/3/2026","name":"\u0395\u03B8\u03BD\u03B9\u03BA\u03AE \u0395\u03C0\u03AD\u03C4\u03B5\u03B9\u03BF\u03C2 25\u03B7\u03C2 \u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5"},{"date":"6/4/2026 - 18/4/2026","name":"\u0394\u03B9\u03B1\u03BA\u03BF\u03C0\u03AD\u03C2 \u03A0\u03AC\u03C3\u03C7\u03B1"},{"date":"1/5/2026","name":"\u03A0\u03C1\u03C9\u03C4\u03BF\u03BC\u03B1\u03B3\u03B9\u03AC"},{"date":"1/6/2026","name":"\u0391\u03B3\u03AF\u03BF\u03C5 \u03A0\u03BD\u03B5\u03CD\u03BC\u03B1\u03C4\u03BF\u03C2"}],"exam_periods":[{"exams_start":"19/1/2026","exams_end":"21/2/2026"},{"exams_start":"8/6/2026","exams_end":"11/7/2026"},{"exams_start":"1/9/2026","exams_end":"30/9/2026"}]}');

},{}],"1ypbV":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"\u03A8\u03A3-109-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u0397":"https://www.ds.unipi.gr/courses/digital_design/","\u03A8\u03A3-010-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u0399\u0398\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D":"https://www.ds.unipi.gr/courses/probability-theory-3/","\u03A8\u03A3-010-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u0399\u0398\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)":"https://www.ds.unipi.gr/courses/probability-theory-3/","\u03A8\u03A3-014-\u039B\u039F\u0393\u0399\u039A\u0397 \u039A\u0391\u0399 \u039B\u039F\u0393\u0399\u039A\u039F\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3":"https://www.ds.unipi.gr/courses/mathematical-logic/","\u03A8\u03A3-006-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 & \u03A3\u03A4\u039F\u0399\u03A7\u0395\u0399\u0391 \u0393\u03A1\u0391\u039C\u039C\u0399\u039A\u0397\u03A3 \u0391\u039B\u0393\u0395\u0392\u03A1\u0391\u03A3":"https://www.ds.unipi.gr/courses/mathematical-analysis-linear-algebra/","\u03A8\u03A3-006-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 & \u03A3\u03A4\u039F\u0399\u03A7\u0395\u0399\u0391 \u0393\u03A1\u0391\u039C\u039C\u0399\u039A\u0397\u03A3 \u0391\u039B\u0393\u0395\u0392\u03A1\u0391\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)":"https://www.ds.unipi.gr/courses/mathematical-analysis-linear-algebra/","\u03A8\u03A3-501-\u0393\u039B\u03A9\u03A3\u03A3\u0391 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A5 \\"C\\"":"https://www.ds.unipi.gr/courses/programming-c/","\u03A8\u03A3-502-\u0391\u039D\u03A4\u0399\u039A\u0395\u0399\u039C\u0395\u039D\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0397\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3":"https://www.ds.unipi.gr/courses/object-oriented-programming/","\u03A8\u03A3-201-\u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D":"https://www.ds.unipi.gr/courses/computer-architecture/","\u03A8\u03A3-004-\u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391":"https://www.ds.unipi.gr/courses/discrete-mathematics/","\u03A8\u03A3-004-\u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)":"https://www.ds.unipi.gr/courses/discrete-mathematics/","\u03A8\u03A3-012-\u03A3\u03A4\u039F\u03A7\u0391\u03A3\u03A4\u0399\u039A\u0395\u03A3 \u0391\u039D\u0395\u039B\u0399\u039E\u0395\u0399\u03A3":"https://www.ds.unipi.gr/courses/stochastic-processes/","\u03A8\u03A3-002-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399":"https://www.ds.unipi.gr/courses/mathematical-analysis-ii/","\u03A8\u03A3-002-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)":"https://www.ds.unipi.gr/courses/mathematical-analysis-ii/","\u03A8\u03A3-708-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A8\u03A5\u03A7\u039F\u039B\u039F\u0393\u0399\u0391":"https://www.ds.unipi.gr/courses/educational-psychology/","\u03A8\u03A3-307-\u03A3\u0397\u039C\u0391\u03A4\u0391 \u039A\u0391\u0399 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391":"https://www.ds.unipi.gr/courses/signals-and-systems/","\u03A8\u03A3-805-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u03A3":"https://www.ds.unipi.gr/courses/information-theory/","\u03A8\u03A3-805-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)":"https://www.ds.unipi.gr/courses/information-theory/","\u03A8\u03A3-301-\u0395\u0399\u03A3\u0391\u0393\u03A9\u0393\u0397 \u03A3\u03A4\u0399\u03A3 \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3":"https://www.ds.unipi.gr/courses/introduction-to-telecommunications/","\u03A8\u03A3-507-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u039B\u039F\u0393\u0399\u03A3\u039C\u0399\u039A\u039F\u03A5":"https://www.ds.unipi.gr/courses/software-engineering-and-systems-analysis/","\u03A8\u03A3-503-\u0394\u039F\u039C\u0395\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A4\u039C\u0397\u039C\u0391 \u0391:\u0391-\u039B)":"https://www.ds.unipi.gr/courses/data-structures/","\u03A8\u03A3-503-\u0394\u039F\u039C\u0395\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A4\u039C\u0397\u039C\u0391 \u0392:\u039C-\u03A9)":"https://www.ds.unipi.gr/courses/data-structures/","\u03A8\u03A3-504-\u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u0392\u0391\u03A3\u0395\u03A9\u039D \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D":"https://www.ds.unipi.gr/courses/database-design/","\u03A8\u03A3-320-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399":"https://www.ds.unipi.gr/courses/computer-networks-i/","\u03A8\u03A3-101-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391":"https://www.ds.unipi.gr/courses/algorithms-and-complexity/","\u03A8\u03A3-101-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391 (\u03C6\u03C1\u03BF\u03BD\u03C4.)":"https://www.ds.unipi.gr/courses/algorithms-and-complexity/","\u03A8\u03A3-210-\u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 - UNIX":"https://www.ds.unipi.gr/courses/operating-systems-ii-unix/","\u03A8\u03A3-011-\u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397":"https://www.ds.unipi.gr/courses/statistics/","\u03A8\u03A3-011-\u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)":"https://www.ds.unipi.gr/courses/statistics/","\u03A8\u03A3-529-\u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D":"https://www.ds.unipi.gr/courses/data-analysis/","\u03A8\u03A3-305-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3":"https://www.ds.unipi.gr/courses/digital-communications/","\u03A8\u03A3-305-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)":"https://www.ds.unipi.gr/courses/digital-communications/","\u03A8\u03A3-801-\u03A0\u039F\u039B\u0399\u03A4\u0399\u039A\u0395\u03A3 & \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391\u03A3":"https://www.ds.unipi.gr/courses/security-policies-and-security-management/","\u03A8\u03A3-518-\u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397":"https://www.ds.unipi.gr/courses/artificial-intelligence/","\u03A8\u03A3-518-\u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397 (\u03C6\u03C1\u03BF\u03BD\u03C4.)":"https://www.ds.unipi.gr/courses/artificial-intelligence/","\u03A8\u03A3-321-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399\u0399 (\u03A5\u03A0\u039A/\u03A4&\u0394)":"http://ds.unipi.gr/courses/computer-networks-ii/","\u03A8\u03A3-309-\u0395\u03A5\u03A1\u03A5\u0396\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 (\u03A5\u03A0\u039A/\u03A4&\u0394)":"https://www.ds.unipi.gr/courses/broadband-networks/","\u03A8\u03A3-537-\u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 \u0393\u0399\u0391 \u039C\u0395\u0393\u0391\u039B\u0391 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u0391 (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)":"https://www.ds.unipi.gr/courses/big-data-programming/","\u03A8\u03A3-731-\u03A0\u0394\u0399-\u0391\u039E\u0399\u039F\u039B\u039F\u0393\u0397\u03A3\u0397 \u03A8\u0397\u03A6\u0399\u0391\u039A\u03A9\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/%ce%b1%ce%be%ce%b9%ce%bf%ce%bb%cf%8c%ce%b3%ce%b7%cf%83%ce%b7-%cf%88%ce%b7%cf%86%ce%b9%ce%b1%ce%ba%cf%8e%ce%bd-%ce%b5%ce%ba%cf%80%ce%b1%ce%b9%ce%b4%ce%b5%cf%85%cf%84%ce%b9%ce%ba%cf%8e%ce%bd-%cf%83/","\u03A8\u03A3-206-\u039C\u0395\u03A4\u0391\u0393\u039B\u03A9\u03A4\u03A4\u0399\u03A3\u03A4\u0395\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/compilers/","\u03A8\u03A3-412-\u039A\u0392\u0391\u039D\u03A4\u0399\u039A\u0397 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/quantum-computing/","\u03A8\u03A3-505-\u0392\u0391\u03A3\u0395\u0399\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)":"https://www.ds.unipi.gr/courses/database-systems/","\u03A8\u03A3-526-1-\u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0391 \u039D\u0395\u03A6\u0397 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)":"https://www.ds.unipi.gr/courses/introduction-to-cloud-2/","\u03A8\u03A3-405-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u0395\u0399\u039A\u039F\u039D\u0391\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)":"https://www.ds.unipi.gr/courses/digital-image-processing/","\u03A8\u03A3-803-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/network-security/","\u03A8\u03A3-332-1-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391":"https://www.ds.unipi.gr/courses/online-and-portable-information-systems/","\u03A8\u03A3-326-\u03A0\u03A1\u03A9\u03A4\u039F\u039A\u039F\u039B\u039B\u0391 \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F\u03A5":"https://www.ds.unipi.gr/courses/internet-protocols/","\u03A8\u03A3-406-\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D":"https://www.ds.unipi.gr/courses/multimedia-communications/","\u03A8\u03A3-802-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D":"https://www.ds.unipi.gr/courses/information-systems-security/","\u03A8\u03A3-304-\u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u03A0\u039A/\u03A4&\u0394)":"https://www.ds.unipi.gr/courses/wireless-communications/","\u03A8\u03A3-732-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/educational-technology/","\u03A8\u03A3-411-\u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397\u03A3 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)":"https://www.ds.unipi.gr/courses/advanced-topics-in-artificial-intelligence/","\u03A8\u03A3-531-\u0394\u039F\u039C\u0397\u039C\u0395\u039D\u0397 \u0391\u039D\u0391\u03A0\u0391\u03A1\u0391\u03A3\u03A4\u0391\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)":"https://www.ds.unipi.gr/courses/structured-information-representation/","\u03A8\u03A3-402-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/multimedia-technology/","\u03A8\u03A3-807-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0394\u0399\u0391\u03A3\u03A6\u0391\u039B\u0399\u03A3\u0397\u03A3 \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/privacy-enhancing-technologies/","\u03A8\u03A3-306-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u03A3\u0397\u039C\u0391\u03A4\u039F\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/digital-signal-processing/","\u03A8\u03A3-709-\u03A0\u0394\u0399-\u03A3\u03A5\u039D\u0395\u03A1\u0393\u0391\u03A4\u0399\u039A\u0391 \u03A0\u0395\u03A1\u0399\u0392\u0391\u039B\u039B\u039F\u039D\u03A4\u0391 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/collaborative-learning-environments/","\u03A8\u03A3-329-\u03A4\u0395\u03A7\u039D\u0399\u039A\u0395\u03A3 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/optimization-techniques/","\u03A8\u03A3-530-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u03A3\u0399\u0391\u039A\u03A9\u039D \u0394\u0399\u0391\u0394\u0399\u039A\u0391\u03A3\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/business-process-management/","\u03A8\u03A3-303-\u0394\u039F\u03A1\u03A5\u03A6\u039F\u03A1\u0399\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u0394\u039A/\u03A4\u0397\u039B)":"https://www.ds.unipi.gr/courses/satellite-communications/","\u03A8\u03A3-331-\u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u039A\u0391\u0399 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)":"https://www.ds.unipi.gr/courses/satellite-communications-2/","\u03A8\u03A3-535-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u039F\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 (\u03A5\u0394\u039A/\u03A0\u03A3)":"https://www.ds.unipi.gr/courses/web-programming/","\u03A8\u03A3-706-\u03A0\u0394\u0399-\u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/instructional-methods/","\u03A8\u03A3-330-\u03A0\u03A1\u039F\u03A3\u039F\u039C\u039F\u0399\u03A9\u03A3\u0397 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/systems-simulation/","\u03A8\u03A3-701-\u03A0\u0394\u0399-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A3\u03A4\u0397\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A3\u0397 (\u03A5\u0394\u039A/\u03A8\u03A5)":"https://www.ds.unipi.gr/courses/educational-digital-systems/","\u03A8\u03A3-404-\u0391\u039D\u0391\u0393\u039D\u03A9\u03A1\u0399\u03A3\u0397 \u03A0\u03A1\u039F\u03A4\u03A5\u03A0\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)":"https://www.ds.unipi.gr/courses/pattern-recognition/","\u03A8\u03A3-910-\u03A3\u03A4\u03A1\u0391\u03A4\u0397\u0393\u0399\u039A\u039F \u039C\u0391\u039D\u0391\u03A4\u0396\u039C\u0395\u039D\u03A4 (\u039F\u0394\u0395) \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/strategic-management/","\u03A8\u03A3-903-\u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u0391\u039D\u0398\u03A1\u03A9\u03A0\u0399\u039D\u039F\u03A5 \u03A0\u0391\u03A1\u0391\u0393\u039F\u039D\u03A4\u0391 (\u039F\u0394\u0395) \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/human-factor-management/","\u03A8\u03A3-208-\u0394\u0399\u0391\u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/%ce%b9nteroperability-systems/","\u03A8\u03A3-313-\u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397 \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/development-of-telecommunication-systems/","\u03A8\u03A3-310-\u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039C\u0399\u039A\u03A1\u0397\u03A3 \u0395\u039C\u0392\u0395\u039B\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/short-range-wireless-networks/","\u03A8\u03A3-520-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u0395\u03A5\u03A6\u03A5\u03A9\u039D \u03A0\u03A1\u0391\u039A\u03A4\u039F\u03A1\u03A9\u039D (\u03A5\u0394\u039A/\u0391\u03A3)":"https://www.ds.unipi.gr/courses/intelligent-agents-and-multiagent-systems/","\u03A8\u03A3-806-\u039A\u03A1\u03A5\u03A0\u03A4\u039F\u0393\u03A1\u0391\u03A6\u0399\u0391 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/cryptography/","\u03A8\u03A3-703-\u03A0\u0394\u0399-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397\u03A3 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/e-learning-systems/","\u03A8\u03A3-513-1-\u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0395\u0399\u03A3 \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u039A\u0391\u0399 \u03A6\u039F\u03A1\u0397\u03A4\u0397 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/network-oriented-information-systems/","\u03A8\u03A3-923-\u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u0395\u03A1\u0393\u03A9\u039D \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/it-project-management/","\u03A8\u03A3-532-\u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/advanced-data-analysis-issues/","\u03A8\u03A3-534-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u03A9\u039D \u0391\u0393\u039F\u03A1\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/algorithms-for-electronic-markets/","\u03A8\u03A3-733-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u039F\u03A3 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 STEM \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/educational-design/","\u03A8\u03A3-302-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D (\u03A5\u0394\u039A/\u03A4\u0397\u039B)":"https://www.ds.unipi.gr/courses/mobile-communication-systems/","\u03A8\u03A3-322-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)":"https://www.ds.unipi.gr/courses/network-management/","\u03A8\u03A3-333-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03A4\u03A9\u039D \u03A0\u03A1\u0391\u0393\u039C\u0391\u03A4\u03A9\u039D (\u0395/\u03A4&\u0394)":"https://www.ds.unipi.gr/courses/internet-of-things/","\u03A8\u03A3-809-\u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A4\u039F \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/internet-privacy/","\u03A8\u03A3-506-\u0391\u03A0\u039F\u0398\u0397\u039A\u0395\u03A3 \u039A\u0391\u0399 \u0395\u039E\u039F\u03A1\u03A5\u039E\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)":"https://www.ds.unipi.gr/courses/data-warehouses-and-data-mining/","\u03A8\u03A3-722-\u03A4\u0397\u039B\u0395\u03AA\u0391\u03A4\u03A1\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/telemedicine/","\u03A8\u03A3-207-\u039A\u0391\u03A4\u0391\u039D\u0395\u039C\u0397\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03A5\u0394\u039A/\u0391\u03A3)":"https://www.ds.unipi.gr/courses/distributed-systems/","\u03A8\u03A3-734-\u03A0\u0394\u0399-\u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u03A4\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/didactics-of-digital-technologies/","\u03A8\u03A3-730-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u039A\u0391\u0399\u039D\u039F\u03A4\u039F\u039C\u0399\u0391\u03A3 \u039A\u0391\u0399 \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397\u03A3 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u039C\u0391\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/innovation-management/","\u03A8\u03A3-312-\u03A0\u03A1\u039F\u03A7\u03A9\u03A1\u0397\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/advanced-topics-in-wireless-communications/","\u03A8\u03A3-804-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D & \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/mobile-and-wireless-communications-security/","\u03A8\u03A3-521-\u0391\u039D\u0391\u039A\u03A4\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/information-retrieval/","\u03A8\u03A3-203-\u0395\u039D\u03A3\u03A9\u039C\u0391\u03A4\u03A9\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/embedded-systems/","\u03A8\u03A3-409-\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/social-networks/","\u03A8\u03A3-710-\u03A3\u03A5\u039C\u0392\u039F\u03A5\u039B\u0395\u03A5\u03A4\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/it-centric-professional-development/","\u03A8\u03A3-721-\u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A5\u0393\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/healthcare-information-systems/","\u03A8\u03A3-704-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0393\u039D\u03A9\u03A3\u0397\u03A3 \u039A\u0391\u0399 \u0399\u039A\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/knowledge-and-competence-management/","\u03A8\u03A3-323-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u039A\u0391\u0399 \u03A0\u03A1\u039F\u03A3\u03A9\u03A0\u0399\u039A\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/mobile-and-personal-communication-networks/","\u03A8\u03A3-514-1-\u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397 \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/e-business/","\u03A8\u03A3-512-1-\u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03A5\u0394\u039A/\u03A0\u03A3)":"https://www.ds.unipi.gr/courses/information-systems/","\u03A8\u03A3-720-\u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03A5\u0393\u0395\u0399\u0391\u03A3 (\u03A5\u0394\u039A/\u03A8\u03A5)":"https://www.ds.unipi.gr/courses/e-health-services/","\u03A8\u03A3-907-\u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391":"https://www.ds.unipi.gr/courses/final-year-project/","\u03A8\u03A3-906-\u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391":"https://www.ds.unipi.gr/courses/final-year-project/","\u03A8\u03A3-920-1-\u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/student-placement/","\u03A8\u03A3-920-\u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)":"https://www.ds.unipi.gr/courses/student-placement/"}');

},{}],"l2J6w":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"title":"\u03A8\u03A3-002-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4,5],"startTime":["10:15:00","10:15:00"],"endTime":["12:00:00","12:00:00"],"semester":2,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-002-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4],"startTime":["09:15:00"],"endTime":["10:00:00"],"semester":2,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-004-\u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[5,3],"startTime":["08:15:00","11:15:00"],"endTime":["10:00:00","13:00:00"],"semester":2,"professor":["\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393.","\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-004-\u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3],"startTime":["13:15:00"],"endTime":["14:00:00"],"semester":2,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-012-\u03A3\u03A4\u039F\u03A7\u0391\u03A3\u03A4\u0399\u039A\u0395\u03A3 \u0391\u039D\u0395\u039B\u0399\u039E\u0395\u0399\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[1,2],"startTime":["11:15:00","11:15:00"],"endTime":["13:00:00","13:00:00"],"semester":2,"professor":["\u0391\u039B\u0395\u039E\u0399\u039F\u03A5 \u0391."],"color":"#a22323"},{"title":"\u03A8\u03A3-201-\u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":2,"professor":["\u0391\u039D\u0391\u03A3\u03A4\u0391\u03A3\u039F\u03A0\u039F\u03A5\u039B\u039F\u03A3 \u0391.","\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391."],"color":"#a22323"},{"title":"\u03A8\u03A3-502-\u0391\u039D\u03A4\u0399\u039A\u0395\u0399\u039C\u0395\u039D\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0397\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[1],"startTime":["13:15:00"],"endTime":["16:00:00"],"semester":2,"professor":["\u0393\u0395\u03A9\u03A1\u0393\u0399\u039F\u03A5 \u0394.","\u039A\u039F\u03A5\u03A6\u0397 \u0392.","\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.","\u03A0\u03A1\u0395\u039D\u03A4\u0396\u0391 \u0391."],"color":"#a22323"},{"title":"\u03A8\u03A3-011-\u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3,5],"startTime":["08:15:00","12:15:00"],"endTime":["10:00:00","13:00:00"],"semester":4,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#10436e"},{"title":"\u03A8\u03A3-011-\u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397 (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3,5],"startTime":["10:15:00","13:15:00"],"endTime":["11:00:00","14:00:00"],"semester":4,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#10436e"},{"title":"\u03A8\u03A3-101-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":4,"professor":["\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F."],"color":"#10436e"},{"title":"\u03A8\u03A3-101-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391 (\u03C6\u03C1\u03BF\u03BD\u03C4.)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[5],"startTime":["15:15:00"],"endTime":["17:00:00"],"semester":4,"professor":["\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F."],"color":"#10436e"},{"title":"\u03A8\u03A3-210-\u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 - UNIX","lectureHall":["\u039A\u0395\u039A\u03A4-202"],"daysOfWeek":[4],"startTime":["18:15:00"],"endTime":["21:00:00"],"semester":4,"professor":["\u039A\u039F\u03A5\u039B\u039F\u03A5\u03A1\u0397\u03A3 \u0394."],"color":"#10436e"},{"title":"\u03A8\u03A3-320-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":4,"professor":["\u0393\u0391\u039B\u0391\u039D\u0397 \u0391.","\u0394\u0395\u039C\u0395\u03A3\u03A4\u0399\u03A7\u0391\u03A3 \u03A0."],"color":"#10436e"},{"title":"\u03A8\u03A3-504-\u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u0392\u0391\u03A3\u0395\u03A9\u039D \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":4,"professor":["\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395.","\u03A7\u0391\u039B\u039A\u0399\u0394\u0397 \u039C."],"color":"#10436e"},{"title":"\u03A8\u03A3-529-\u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[1],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":4,"professor":["\u0394\u039F\u03A5\u039B\u039A\u0395\u03A1\u0399\u0394\u0397\u03A3 \u03A7.","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A."],"color":"#10436e"},{"title":"\u03A8\u03A3-304-\u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u03A0\u039A/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-108"],"daysOfWeek":[4],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":6,"professor":["\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394.","\u039A\u0391\u039D\u0391\u03A4\u0391\u03A3 \u0391."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-326-\u03A0\u03A1\u03A9\u03A4\u039F\u039A\u039F\u039B\u039B\u0391 \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F\u03A5","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":6,"professor":["\u03A1\u039F\u03A5\u03A3\u039A\u0391\u03A3 \u0391.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-332-1-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[5],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":6,"professor":["\u039A\u03A5\u03A1\u0399\u0391\u0396\u0397\u03A3 \u0394.","\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.","\u03A0\u0391\u039D\u039F\u03A5 \u0391."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-406-\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[5],"startTime":["13:15:00"],"endTime":["16:00:00"],"semester":6,"professor":["\u039C\u0391\u0393\u039A\u039B\u039F\u0393\u0399\u0391\u039D\u039D\u0397\u03A3 \u0397.","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-411-\u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397\u03A3 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-202"],"daysOfWeek":[1,3],"startTime":["09:15:00","17:15:00"],"endTime":["11:00:00","19:00:00"],"semester":6,"professor":["\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393.","\u03A3\u03A0\u0391\u0398\u0391\u03A1\u0397\u03A3 \u03A7."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-531-\u0394\u039F\u039C\u0397\u039C\u0395\u039D\u0397 \u0391\u039D\u0391\u03A0\u0391\u03A1\u0391\u03A3\u03A4\u0391\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-001"],"daysOfWeek":[2],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":6,"professor":["\u03A0\u03A1\u0395\u039D\u03A4\u0396\u0391 \u0391.","\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-802-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":6,"professor":["\u0393\u039A\u03A1\u0399\u03A4\u0396\u0391\u039B\u0397\u03A3 \u03A3.","\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-306-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u03A3\u0397\u039C\u0391\u03A4\u039F\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039D\u0395\u039F\u039A\u039B-\u0392102"],"daysOfWeek":[2],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":6,"professor":["\u0395\u03A5\u0398\u03A5\u039C\u039F\u0393\u039B\u039F\u03A5 \u0393."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-329-\u03A4\u0395\u03A7\u039D\u0399\u039A\u0395\u03A3 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-104"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":6,"professor":["\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-402-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[4],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":6,"professor":["\u03A3\u0393\u039F\u03A5\u03A1\u039F\u03A3 \u039D.-\u039C."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-530-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u03A3\u0399\u0391\u039A\u03A9\u039D \u0394\u0399\u0391\u0394\u0399\u039A\u0391\u03A3\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[4],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":6,"professor":["\u039A\u039F\u03A5\u03A6\u0397 \u0392."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-709-\u03A0\u0394\u0399-\u03A3\u03A5\u039D\u0395\u03A1\u0393\u0391\u03A4\u0399\u039A\u0391 \u03A0\u0395\u03A1\u0399\u0392\u0391\u039B\u039B\u039F\u039D\u03A4\u0391 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039D\u0395\u039F\u039A\u039B-\u0392102"],"daysOfWeek":[2],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":6,"professor":["\u03A0\u0391\u03A1\u0391\u03A3\u039A\u0395\u03A5\u0391 \u03A6."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-732-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":6,"professor":["\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.","\u03A3\u0391\u039C\u03A8\u03A9\u039D \u0394."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-807-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0394\u0399\u0391\u03A3\u03A6\u0391\u039B\u0399\u03A3\u0397\u03A3 \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[3],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":6,"professor":["\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-207-\u039A\u0391\u03A4\u0391\u039D\u0395\u039C\u0397\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03A5\u0394\u039A/\u0391\u03A3)","lectureHall":["\u0393\u039B21-105"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":8,"professor":["\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-302-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D (\u03A5\u0394\u039A/\u03A4\u0397\u039B)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[5],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u039A\u0391\u039D\u0391\u03A4\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-322-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[3],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u0393\u0391\u039B\u0391\u039D\u0397 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-333-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03A4\u03A9\u039D \u03A0\u03A1\u0391\u0393\u039C\u0391\u03A4\u03A9\u039D (\u0395/\u03A4&\u0394)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[3],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394."],"color":"#5e226e"},{"title":"\u03A8\u03A3-506-\u0391\u03A0\u039F\u0398\u0397\u039A\u0395\u03A3 \u039A\u0391\u0399 \u0395\u039E\u039F\u03A1\u03A5\u039E\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)","lectureHall":["\u0393\u039B21-103"],"daysOfWeek":[5],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395.","\u03A7\u0391\u039B\u039A\u0399\u0394\u0397 \u039C."],"color":"#5e226e"},{"title":"\u03A8\u03A3-512-1-\u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03A5\u0394\u039A/\u03A0\u03A3)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[1],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":8,"professor":["\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#5e226e"},{"title":"\u03A8\u03A3-720-\u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03A5\u0393\u0395\u0399\u0391\u03A3 (\u03A5\u0394\u039A/\u03A8\u03A5)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[4],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u039B\u0399\u0391\u039B\u0399\u039F\u03A5 \u03A0."],"color":"#5e226e"},{"title":"\u03A8\u03A3-907-\u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"daysOfWeek":[3],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":8,"professor":["_\u039C\u0395\u039B\u039F\u03A3 \u0394\u0395\u03A0_"],"color":"#5e226e"},{"title":"\u03A8\u03A3-203-\u0395\u039D\u03A3\u03A9\u039C\u0391\u03A4\u03A9\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[3],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":8,"professor":["\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-312-\u03A0\u03A1\u039F\u03A7\u03A9\u03A1\u0397\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[1],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u0391\u039B\u0395\u039E\u0399\u039F\u03A5 \u0391.","\u0395\u03A5\u0398\u03A5\u039C\u039F\u0393\u039B\u039F\u03A5 \u0393."],"color":"#5e226e"},{"title":"\u03A8\u03A3-323-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u039A\u0391\u0399 \u03A0\u03A1\u039F\u03A3\u03A9\u03A0\u0399\u039A\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u03A1\u039F\u03A5\u03A3\u039A\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-409-\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-304"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u03A3\u0393\u039F\u03A5\u03A1\u039F\u03A3 \u039D.-\u039C.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#5e226e"},{"title":"\u03A8\u03A3-514-1-\u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397 \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039D\u0395\u039F\u039A\u039B-\u0392102"],"daysOfWeek":[1],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u03A4\u0391\u039D\u03A4\u0391\u03A1\u039F\u03A5\u0394\u0391\u03A3 \u039D."],"color":"#5e226e"},{"title":"\u03A8\u03A3-521-\u0391\u039D\u0391\u039A\u03A4\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u0394\u039F\u03A5\u039B\u039A\u0395\u03A1\u0399\u0394\u0397\u03A3 \u03A7."],"color":"#5e226e"},{"title":"\u03A8\u03A3-704-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0393\u039D\u03A9\u03A3\u0397\u03A3 \u039A\u0391\u0399 \u0399\u039A\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-204"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.","\u03A3\u0391\u039C\u03A8\u03A9\u039D \u0394."],"color":"#5e226e"},{"title":"\u03A8\u03A3-710-\u03A3\u03A5\u039C\u0392\u039F\u03A5\u039B\u0395\u03A5\u03A4\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039D\u0395\u039F\u039A\u039B-\u0392102"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u03A0\u0391\u03A1\u0391\u03A3\u039A\u0395\u03A5\u0391 \u03A6."],"color":"#5e226e"},{"title":"\u03A8\u03A3-721-\u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A5\u0393\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[2],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u039B\u0399\u0391\u039B\u0399\u039F\u03A5 \u03A0."],"color":"#5e226e"},{"title":"\u03A8\u03A3-722-\u03A4\u0397\u039B\u0395\u03AA\u0391\u03A4\u03A1\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[3],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":8,"professor":["\u039C\u0391\u0393\u039A\u039B\u039F\u0393\u0399\u0391\u039D\u039D\u0397\u03A3 \u0397.","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A."],"color":"#5e226e"},{"title":"\u03A8\u03A3-730-\u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u039A\u0391\u0399\u039D\u039F\u03A4\u039F\u039C\u0399\u0391\u03A3 \u039A\u0391\u0399 \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397\u03A3 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u039C\u0391\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u03A1\u0395\u03A4\u0391\u039B\u0397\u03A3 \u03A3."],"color":"#5e226e"},{"title":"\u03A8\u03A3-734-\u03A0\u0394\u0399-\u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u03A4\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0391\u039D\u0394150-107"],"daysOfWeek":[5],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":8,"professor":["\u0398\u0395\u039F\u0394\u03A9\u03A1\u039F\u03A5 \u03A0.","\u03A1\u0395\u03A4\u0391\u039B\u0397\u03A3 \u03A3."],"color":"#5e226e"},{"title":"\u03A8\u03A3-804-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D & \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-105"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":8,"professor":["\u039E\u0395\u039D\u0391\u039A\u0397\u03A3 \u03A7."],"color":"#5e226e"},{"title":"\u03A8\u03A3-809-\u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A4\u039F \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-102"],"daysOfWeek":[5],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":8,"professor":["\u0393\u039A\u03A1\u0399\u03A4\u0396\u0391\u039B\u0397\u03A3 \u03A3.","\u039E\u0395\u039D\u0391\u039A\u0397\u03A3 \u03A7.","\u03A0\u0391\u039D\u039F\u03A5 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-920-1-\u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":8,"professor":[],"color":"#5e226e"},{"title":"\u03A8\u03A3-006-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 & \u03A3\u03A4\u039F\u0399\u03A7\u0395\u0399\u0391 \u0393\u03A1\u0391\u039C\u039C\u0399\u039A\u0397\u03A3 \u0391\u039B\u0393\u0395\u0392\u03A1\u0391\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3,5,2,5],"startTime":["08:15:00","10:15:00","11:15:00","11:15:00"],"endTime":["10:00:00","11:00:00","12:00:00","12:00:00"],"semester":1,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-006-\u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 & \u03A3\u03A4\u039F\u0399\u03A7\u0395\u0399\u0391 \u0393\u03A1\u0391\u039C\u039C\u0399\u039A\u0397\u03A3 \u0391\u039B\u0393\u0395\u0392\u03A1\u0391\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2],"startTime":["12:15:00"],"endTime":["13:00:00"],"semester":1,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-010-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u0399\u0398\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[5,3],"startTime":["08:15:00","11:15:00"],"endTime":["10:00:00","13:00:00"],"semester":1,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-010-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u0399\u0398\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u03C6\u03C1\u03BF\u03BD\u03C4\u03B9\u03C3\u03C4\u03AE\u03C1\u03B9\u03BF)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3],"startTime":["10:15:00"],"endTime":["11:00:00"],"semester":1,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#a22323"},{"title":"\u03A8\u03A3-014-\u039B\u039F\u0393\u0399\u039A\u0397 \u039A\u0391\u0399 \u039B\u039F\u0393\u0399\u039A\u039F\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2,3],"startTime":["13:15:00","13:15:00"],"endTime":["15:00:00","15:00:00"],"semester":1,"professor":["\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391."],"color":"#a22323"},{"title":"\u03A8\u03A3-109-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u0397","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":1,"professor":["\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B."],"color":"#a22323"},{"title":"\u03A8\u03A3-501-\u0393\u039B\u03A9\u03A3\u03A3\u0391 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A5 \\"C\\"","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":1,"professor":["\u039A\u03A5\u03A1\u0399\u0391\u0396\u0397\u03A3 \u0394.","\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.","\u03A0\u0391\u039D\u039F\u03A5 \u0391."],"color":"#a22323"},{"title":"\u03A8\u03A3-301-\u0395\u0399\u03A3\u0391\u0393\u03A9\u0393\u0397 \u03A3\u03A4\u0399\u03A3 \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":3,"professor":["\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394.","\u039A\u0391\u039D\u0391\u03A4\u0391\u03A3 \u0391.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#10436e"},{"title":"\u03A8\u03A3-307-\u03A3\u0397\u039C\u0391\u03A4\u0391 \u039A\u0391\u0399 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[3],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":3,"professor":["\u0395\u03A5\u0398\u03A5\u039C\u039F\u0393\u039B\u039F\u03A5 \u0393.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#10436e"},{"title":"\u03A8\u03A3-503-\u0394\u039F\u039C\u0395\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A4\u039C\u0397\u039C\u0391 \u0391:\u0391-\u039B)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":3,"professor":["\u0393\u0391\u039B\u0391\u039D\u0397 \u0391.","\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F."],"color":"#10436e"},{"title":"\u03A8\u03A3-503-\u0394\u039F\u039C\u0395\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A4\u039C\u0397\u039C\u0391 \u0392:\u039C-\u03A9)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[1],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":3,"professor":["\u0393\u0391\u039B\u0391\u039D\u0397 \u0391.","\u0394\u039F\u03A5\u039B\u039A\u0395\u03A1\u0399\u0394\u0397\u03A3 \u03A7."],"color":"#10436e"},{"title":"\u03A8\u03A3-507-\u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u039B\u039F\u0393\u0399\u03A3\u039C\u0399\u039A\u039F\u03A5","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":3,"professor":["\u03A0\u03A1\u0395\u039D\u03A4\u0396\u0391 \u0391.","\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395."],"color":"#10436e"},{"title":"\u03A8\u03A3-708-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A8\u03A5\u03A7\u039F\u039B\u039F\u0393\u0399\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[4],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":3,"professor":["\u03A0\u0391\u03A1\u0391\u03A3\u039A\u0395\u03A5\u0391 \u03A6."],"color":"#10436e"},{"title":"\u03A8\u03A3-805-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-203"],"daysOfWeek":[2],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":3,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#10436e"},{"title":"\u03A8\u03A3-805-\u0398\u0395\u03A9\u03A1\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)","lectureHall":["\u039A\u0395\u039A\u03A4-203"],"daysOfWeek":[2],"startTime":["18:15:00"],"endTime":["20:00:00"],"semester":3,"professor":["\u03A6\u0399\u039B\u0399\u03A0\u03A0\u0391\u039A\u0397\u03A3 \u039C."],"color":"#10436e"},{"title":"\u03A8\u03A3-305-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[4],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":5,"professor":["\u0395\u03A5\u0398\u03A5\u039C\u039F\u0393\u039B\u039F\u03A5 \u0393."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-305-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03C6\u03C1\u03BF\u03BD\u03C4.)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[3],"startTime":["12:15:00"],"endTime":["14:00:00"],"semester":5,"professor":["\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-309-\u0395\u03A5\u03A1\u03A5\u0396\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 (\u03A5\u03A0\u039A/\u03A4&\u0394)","lectureHall":["\u0393\u039B21-104"],"daysOfWeek":[1],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":5,"professor":["\u0391\u039B\u0395\u039E\u0399\u039F\u03A5 \u0391."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-321-\u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399\u0399 (\u03A5\u03A0\u039A/\u03A4&\u0394)","lectureHall":["\u0393\u039B21-305"],"daysOfWeek":[5],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":5,"professor":["\u0393\u0391\u039B\u0391\u039D\u0397 \u0391.","\u0394\u0395\u039C\u0395\u03A3\u03A4\u0399\u03A7\u0391\u03A3 \u03A0."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-405-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u0395\u0399\u039A\u039F\u039D\u0391\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[1],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":5,"professor":["\u039C\u0391\u0393\u039A\u039B\u039F\u0393\u0399\u0391\u039D\u039D\u0397\u03A3 \u0397.","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-505-\u0392\u0391\u03A3\u0395\u0399\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[5],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":5,"professor":["\u039C\u0391\u039D\u039F\u03A5\u03A3\u039F\u03A0\u039F\u03A5\u039B\u039F\u03A3 \u03A7.","\u03A7\u0391\u039B\u039A\u0399\u0394\u0397 \u039C."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-518-\u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397","lectureHall":["\u039A\u0395\u039A\u03A4-203"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":5,"professor":["\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-518-\u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397 (\u03C6\u03C1\u03BF\u03BD\u03C4.)","lectureHall":["\u039A\u0395\u039A\u03A4-105"],"daysOfWeek":[4],"startTime":["18:15:00"],"endTime":["20:00:00"],"semester":5,"professor":["\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-526-1-\u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0391 \u039D\u0395\u03A6\u0397 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[5],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":5,"professor":["\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391.","\u03A7\u0391\u039B\u0395\u03A0\u039B\u0399\u0394\u0397\u03A3 \u0395."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-537-\u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 \u0393\u0399\u0391 \u039C\u0395\u0393\u0391\u039B\u0391 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u0391 (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[5],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":5,"professor":["\u0394\u039F\u03A5\u039B\u039A\u0395\u03A1\u0399\u0394\u0397\u03A3 \u03A7."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-801-\u03A0\u039F\u039B\u0399\u03A4\u0399\u039A\u0395\u03A3 & \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"daysOfWeek":[2],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":5,"professor":["\u0393\u039A\u03A1\u0399\u03A4\u0396\u0391\u039B\u0397\u03A3 \u03A3.","\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-206-\u039C\u0395\u03A4\u0391\u0393\u039B\u03A9\u03A4\u03A4\u0399\u03A3\u03A4\u0395\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":5,"professor":["\u03A3\u0393\u039F\u03A5\u03A1\u039F\u03A3 \u039D.-\u039C."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-412-\u039A\u0392\u0391\u039D\u03A4\u0399\u039A\u0397 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-103"],"daysOfWeek":[3],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":5,"professor":["\u03A3\u0393\u039F\u03A5\u03A1\u039F\u03A3 \u039D.-\u039C."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-731-\u03A0\u0394\u0399-\u0391\u039E\u0399\u039F\u039B\u039F\u0393\u0397\u03A3\u0397 \u03A8\u0397\u03A6\u0399\u0391\u039A\u03A9\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-203"],"daysOfWeek":[4],"startTime":["09:15:00"],"endTime":["12:00:00"],"semester":5,"professor":["\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.","\u03A1\u0395\u03A4\u0391\u039B\u0397\u03A3 \u03A3."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-803-\u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (\u0395\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[1],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":5,"professor":["\u0393\u039A\u03A1\u0399\u03A4\u0396\u0391\u039B\u0397\u03A3 \u03A3.","\u039E\u0395\u039D\u0391\u039A\u0397\u03A3 \u03A7."],"color":"#4e4e4d"},{"title":"\u03A8\u03A3-303-\u0394\u039F\u03A1\u03A5\u03A6\u039F\u03A1\u0399\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u0394\u039A/\u03A4\u0397\u039B)","lectureHall":["\u0393\u039B21-405"],"daysOfWeek":[3],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":["\u0392\u039F\u03A5\u0393\u0399\u039F\u03A5\u039A\u0391\u03A3 \u0394.","\u039A\u0391\u039D\u0391\u03A4\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-331-\u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u039A\u0391\u0399 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":["\u03A1\u039F\u03A5\u03A3\u039A\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-404-\u0391\u039D\u0391\u0393\u039D\u03A9\u03A1\u0399\u03A3\u0397 \u03A0\u03A1\u039F\u03A4\u03A5\u03A0\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"daysOfWeek":[3],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":7,"professor":["\u039C\u0391\u0393\u039A\u039B\u039F\u0393\u0399\u0391\u039D\u039D\u0397\u03A3 \u0397.","\u039C\u039F\u03A5\u03A4\u03A3\u0395\u039B\u039F\u03A3 \u039A."],"color":"#5e226e"},{"title":"\u03A8\u03A3-520-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u0395\u03A5\u03A6\u03A5\u03A9\u039D \u03A0\u03A1\u0391\u039A\u03A4\u039F\u03A1\u03A9\u039D (\u03A5\u0394\u039A/\u0391\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-002","\u0393\u039B21-404"],"daysOfWeek":[3,2],"startTime":["14:15:00","17:15:00"],"endTime":["16:00:00","19:00:00"],"semester":7,"professor":["\u0392\u039F\u03A5\u03A1\u039F\u03A3 \u0393."],"color":"#5e226e"},{"title":"\u03A8\u03A3-535-\u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u039F\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 (\u03A5\u0394\u039A/\u03A0\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[4],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":7,"professor":["\u039A\u039F\u03A5\u03A6\u0397 \u0392."],"color":"#5e226e"},{"title":"\u03A8\u03A3-701-\u03A0\u0394\u0399-\u03A8\u0397\u03A6\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A3\u03A4\u0397\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A3\u0397 (\u03A5\u0394\u039A/\u03A8\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-001"],"daysOfWeek":[1],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":7,"professor":["\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.","\u03A3\u0391\u039C\u03A8\u03A9\u039D \u0394."],"color":"#5e226e"},{"title":"\u03A8\u03A3-906-\u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":[],"color":"#5e226e"},{"title":"\u03A8\u03A3-208-\u0394\u0399\u0391\u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039D\u0395\u039F\u039A\u039B-\u0392102"],"daysOfWeek":[2],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":["\u03A0\u03A1\u0395\u039D\u03A4\u0396\u0391 \u0391.","\u03A3\u03A4\u039F\u03A5\u0393\u0399\u0391\u039D\u039D\u039F\u03A5 \u0395."],"color":"#5e226e"},{"title":"\u03A8\u03A3-310-\u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039C\u0399\u039A\u03A1\u0397\u03A3 \u0395\u039C\u0392\u0395\u039B\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"daysOfWeek":[2],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":7,"professor":["\u0391\u039B\u0395\u039E\u0399\u039F\u03A5 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-313-\u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397 \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-001"],"daysOfWeek":[5],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":7,"professor":["\u039C\u0397\u039B\u0399\u03A9\u039D\u0397\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-330-\u03A0\u03A1\u039F\u03A3\u039F\u039C\u039F\u0399\u03A9\u03A3\u0397 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-404"],"daysOfWeek":[1],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":7,"professor":["\u03A1\u039F\u03A5\u03A3\u039A\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-513-1-\u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0395\u0399\u03A3 \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u039A\u0391\u0399 \u03A6\u039F\u03A1\u0397\u03A4\u0397 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[3],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":7,"professor":["\u039A\u039F\u03A5\u03A6\u0397 \u0392.","\u039C\u0395\u039D\u03A5\u03A7\u03A4\u0391\u03A3 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-532-\u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[5],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":["\u03A7\u0391\u039B\u039A\u0399\u0394\u0397 \u039C."],"color":"#5e226e"},{"title":"\u03A8\u03A3-534-\u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u03A9\u039D \u0391\u0393\u039F\u03A1\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[2],"startTime":["08:15:00"],"endTime":["11:00:00"],"semester":7,"professor":["\u03A4\u0395\u039B\u0395\u039B\u0397\u03A3 \u039F."],"color":"#5e226e"},{"title":"\u03A8\u03A3-703-\u03A0\u0394\u0399-\u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397\u03A3 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-001"],"daysOfWeek":[4],"startTime":["12:15:00"],"endTime":["15:00:00"],"semester":7,"professor":["\u0393\u039A\u039F\u03A4\u0396\u039F\u03A3 \u0394.","\u03A3\u0391\u039C\u03A8\u03A9\u039D \u0394."],"color":"#5e226e"},{"title":"\u03A8\u03A3-706-\u03A0\u0394\u0399-\u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[2],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":7,"professor":["\u03A0\u0391\u03A1\u0391\u03A3\u039A\u0395\u03A5\u0391 \u03A6."],"color":"#5e226e"},{"title":"\u03A8\u03A3-733-\u03A0\u0394\u0399-\u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u039F\u03A3 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 STEM \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[5],"startTime":["15:15:00"],"endTime":["18:00:00"],"semester":7,"professor":["\u0398\u0395\u039F\u0394\u03A9\u03A1\u039F\u03A5 \u03A0.","\u03A1\u0395\u03A4\u0391\u039B\u0397\u03A3 \u03A3."],"color":"#5e226e"},{"title":"\u03A8\u03A3-806-\u039A\u03A1\u03A5\u03A0\u03A4\u039F\u0393\u03A1\u0391\u03A6\u0399\u0391 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":["\u039E\u0395\u039D\u0391\u039A\u0397\u03A3 \u03A7.","\u03A0\u0391\u039D\u039F\u03A5 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-903-\u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u0391\u039D\u0398\u03A1\u03A9\u03A0\u0399\u039D\u039F\u03A5 \u03A0\u0391\u03A1\u0391\u0393\u039F\u039D\u03A4\u0391 (\u039F\u0394\u0395) \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2"],"daysOfWeek":[1,1],"startTime":["10:15:00","13:15:00"],"endTime":["13:00:00","14:00:00"],"semester":7,"professor":["\u039C\u03A0\u039F\u03A5\u03A1\u0391\u039D\u03A4\u0391 \u0391."],"color":"#5e226e"},{"title":"\u03A8\u03A3-910-\u03A3\u03A4\u03A1\u0391\u03A4\u0397\u0393\u0399\u039A\u039F \u039C\u0391\u039D\u0391\u03A4\u0396\u039C\u0395\u039D\u03A4 (\u039F\u0394\u0395) \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"daysOfWeek":[2,5],"startTime":["11:15:00","12:15:00"],"endTime":["14:00:00","13:00:00"],"semester":7,"professor":["\u0393\u0395\u03A9\u03A1\u0393\u039F\u03A0\u039F\u03A5\u039B\u039F\u03A3 \u039D."],"color":"#5e226e"},{"title":"\u03A8\u03A3-920-\u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"daysOfWeek":[4],"startTime":["11:15:00"],"endTime":["14:00:00"],"semester":7,"professor":[],"color":"#5e226e"},{"title":"\u03A8\u03A3-923-\u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u0395\u03A1\u0393\u03A9\u039D \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394) (E\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE)","lectureHall":["\u0393\u039B21-303"],"daysOfWeek":[5],"startTime":["14:15:00"],"endTime":["17:00:00"],"semester":7,"professor":["\u039C\u0391\u039A\u03A1\u0397 \u0395.\u039B."],"color":"#5e226e"}]');

},{}],"7p0wB":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u03A7\u03A9\u03A1\u0397\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"semester":8,"date":"08/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u039A\u0391\u0399 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7)","lectureHall":["\u039A\u0395\u039A\u03A4-007-008 (\u0395\u03C1\u03B3.)"],"semester":2,"date":"08/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u03A9\u03A4\u039F\u039A\u039F\u039B\u039B\u0391 \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F\u03A5","lectureHall":["\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-201"],"semester":6,"date":"08/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A4\u039F\u03A7\u0391\u03A3\u03A4\u0399\u039A\u0395\u03A3 \u0391\u039D\u0395\u039B\u0399\u039E\u0395\u0399\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-201"],"semester":2,"date":"09/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397\u03A3 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103"],"semester":6,"date":"10/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u03A5\u03A6\u03A5\u0397 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7, \u03CC\u03C3\u03BF\u03B9 \u03C4\u03BF \u03BF\u03C6\u03B5\u03AF\u03BB\u03BF\u03C5\u03BD \u03C9\u03C2 \u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"10/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"10/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"11/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 \u03A0\u0391\u0393\u039A\u039F\u03A3\u039C\u0399\u039F\u03A5 \u0399\u03A3\u03A4\u039F\u03A5 (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"11/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039A\u03A4\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"12/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106"],"semester":6,"date":"12/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"15/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":6,"date":"15/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D & \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"15/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0397\u039B\u0395\u03AA\u0391\u03A4\u03A1\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-108"],"semester":8,"date":"16/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-201","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":2,"date":"16/06/2026","startTime":"18:00:00","endTime":"21:00:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A4\u039F \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"17/06/2026","startTime":"09:00:00","endTime":"17:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":6,"date":"18/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03A5\u0394\u039A/\u03A0\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"18/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D (\u03A5\u0394\u039A/\u03A4\u0397\u039B)","lectureHall":["\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"19/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0394\u0399\u0391\u03A3\u03A6\u0391\u039B\u0399\u03A3\u0397\u03A3 \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336"],"semester":6,"date":"19/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u0392\u0391\u03A3\u0395\u03A9\u039D \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108"],"semester":4,"date":"22/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u03A4\u0399\u039A\u0395\u0399\u039C\u0395\u039D\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0397\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"22/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03A4\u03A9\u039D \u03A0\u03A1\u0391\u0393\u039C\u0391\u03A4\u03A9\u039D (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203"],"semester":8,"date":"22/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03A5\u0393\u0395\u0399\u0391\u03A3 (\u03A5\u0394\u039A/\u03A8\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"23/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u0399\u039A\u0395\u03A3 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102"],"semester":6,"date":"23/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u039F\u039B\u0399\u039A\u0397\u03A3 \u03A0\u039F\u0399\u039F\u03A4\u0397\u03A4\u0391\u03A3 (\u039F\u0394\u0395) (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7 \u03CC\u03C3\u03BF\u03B9 \u03C4\u03BF \u03BF\u03C6\u03B5\u03AF\u03BB\u03BF\u03C5\u03BD \u03C9\u03C2 \u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC) (\u0397\u03A5/\u03A3\u0395\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"24/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u03A0\u039A/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":6,"date":"25/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039A\u0391\u03A4\u0391\u039D\u0395\u039C\u0397\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03A5\u0394\u039A/\u0391\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203"],"semester":8,"date":"25/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"26/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039E\u0399\u039F\u039B\u039F\u0393\u0397\u03A3\u0397 \u0395\u03A0\u0399\u0394\u039F\u03A3\u0395\u03A9\u039D \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u03A4&\u0394)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"26/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u03A3\u0397\u039C\u0391\u03A4\u039F\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":6,"date":"26/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0393\u039D\u03A9\u03A3\u0397\u03A3 \u039A\u0391\u0399 \u0399\u039A\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"29/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u039D\u0395\u03A1\u0393\u0391\u03A4\u0399\u039A\u0391 \u03A0\u0395\u03A1\u0399\u0392\u0391\u039B\u039B\u039F\u039D\u03A4\u0391 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2"],"semester":6,"date":"29/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u039C\u0392\u039F\u03A5\u039B\u0395\u03A5\u03A4\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2"],"semester":8,"date":"29/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397","lectureHall":["\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"29/06/2026","startTime":"18:00:00","endTime":"21:00:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A5\u0393\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"30/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-106"],"semester":6,"date":"30/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u039F\u039C\u0397\u039C\u0395\u039D\u0397 \u0391\u039D\u0391\u03A0\u0391\u03A1\u0391\u03A3\u03A4\u0391\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":6,"date":"01/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u039A\u0391\u0399 \u03A0\u03A1\u039F\u03A3\u03A9\u03A0\u0399\u039A\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"01/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u039A\u0391\u0399\u039D\u039F\u03A4\u039F\u039C\u0399\u0391\u03A3 \u039A\u0391\u0399 \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397\u03A3 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u039C\u0391\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"01/07/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6"],"semester":4,"date":"02/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A0\u039F\u0398\u0397\u039A\u0395\u03A3 \u039A\u0391\u0399 \u0395\u039E\u039F\u03A1\u03A5\u039E\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"02/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"03/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039D\u0395\u03A1\u0393\u0395\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0391\u0399 \u03A0\u039F\u039B\u0399\u03A4\u0399\u039A\u0395\u03A3 \u03B5\u03C0. (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u03A3\u0399\u0391\u039A\u03A9\u039D \u0394\u0399\u0391\u0394\u0399\u039A\u0391\u03A3\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"semester":6,"date":"06/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":6,"date":"06/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"semester":8,"date":"07/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"07/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u03A4\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"08/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: UNIX","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-201","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"08/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039D\u03A3\u03A9\u039C\u0391\u03A4\u03A9\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"09/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397 \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"10/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"}]');

},{}],"7V8Q4":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","semester":6,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":1,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","semester":6,"data":[{"day":1,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":1,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D","semester":6,"data":[{"day":1,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":4,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u039F\u039C\u0397\u039C\u0395\u039D\u0397 \u0391\u039D\u0391\u03A0\u0391\u03A1\u0391\u03A3\u03A4\u0391\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D","semester":6,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":1,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0394\u0399\u0391\u03A3\u03A6\u0391\u039B\u0399\u03A3\u0397\u03A3 \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3","semester":6,"data":[{"day":1,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391","semester":8,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391","semester":6,"data":[{"day":1,"time":"15:00-17:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"},{"day":2,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","semester":8,"data":[{"day":1,"time":"08:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"},{"day":3,"time":"11:00-13:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u039A\u0391\u0399 \u03A0\u03A1\u039F\u03A3\u03A9\u03A0\u0399\u039A\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D","semester":8,"data":[{"day":1,"time":"11:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u03A1\u039F\u03A7\u03A9\u03A1\u0397\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D","semester":8,"data":[{"day":1,"time":"14:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"},{"day":5,"time":"16:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u03A1\u03A9\u03A4\u039F\u039A\u039F\u039B\u039B\u0391 \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F\u03A5","semester":6,"data":[{"day":2,"time":"08:00-10:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":2,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u039D\u03A4\u0399\u039A\u0395\u0399\u039C\u0395\u039D\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0397\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","semester":2,"data":[{"day":2,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":2,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":5,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":5,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#741818"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D","semester":2,"data":[{"day":2,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":2,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":2,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#741818"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3","semester":6,"data":[{"day":2,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u03A5\u039D\u0395\u03A1\u0393\u0391\u03A4\u0399\u039A\u0391 \u03A0\u0395\u03A1\u0399\u0392\u0391\u039B\u039B\u039F\u039D\u03A4\u0391 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3","semester":6,"data":[{"day":2,"time":"09:00-12:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A5\u0393\u0395\u0399\u0391\u03A3","semester":8,"data":[{"day":2,"time":"14:00-17:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"},{"day":3,"time":"14:00-16:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A0\u039F\u0398\u0397\u039A\u0395\u03A3 \u039A\u0391\u0399 \u0395\u039E\u039F\u03A1\u03A5\u039E\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":8,"data":[{"day":2,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397 \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397","semester":8,"data":[{"day":2,"time":"14:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"},{"day":5,"time":"14:00-16:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u03A3\u0399\u0391\u039A\u03A9\u039D \u0394\u0399\u0391\u0394\u0399\u039A\u0391\u03A3\u0399\u03A9\u039D","semester":6,"data":[{"day":3,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u0392\u0391\u03A3\u0395\u03A9\u039D \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":4,"data":[{"day":3,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":3,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":4,"data":[{"day":3,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":3,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":4,"time":"16:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 - UNIX","semester":4,"data":[{"day":3,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":3,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D","semester":8,"data":[{"day":3,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":5,"time":"11:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03A5\u0393\u0395\u0399\u0391\u03A3","semester":8,"data":[{"day":3,"time":"16:00-18:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"},{"day":4,"time":"14:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u039D\u03A3\u03A9\u039C\u0391\u03A4\u03A9\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","semester":8,"data":[{"day":3,"time":"08:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D","semester":8,"data":[{"day":3,"time":"11:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"},{"day":5,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03A4\u03A9\u039D \u03A0\u03A1\u0391\u0393\u039C\u0391\u03A4\u03A9\u039D","semester":8,"data":[{"day":3,"time":"14:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"},{"day":5,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399","semester":4,"data":[{"day":4,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"16:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u03A5\u039C\u0392\u039F\u03A5\u039B\u0395\u03A5\u03A4\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3","semester":8,"data":[{"day":4,"time":"11:00-14:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A4\u0395\u03A7\u039D\u0399\u039A\u0395\u03A3 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397\u03A3","semester":6,"data":[{"day":4,"time":"14:00-16:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u039A\u0391\u0399\u039D\u039F\u03A4\u039F\u039C\u0399\u0391\u03A3 \u039A\u0391\u0399 \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397\u03A3 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u039C\u0391\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3","semester":8,"data":[{"day":4,"time":"11:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u039A\u0391\u03A4\u0391\u039D\u0395\u039C\u0397\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","semester":8,"data":[{"day":5,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A4\u0397\u039B\u0395\u0399\u0391\u03A4\u03A1\u0399\u039A\u0397","semester":8,"data":[{"day":5,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u03A4\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3","semester":8,"data":[{"day":5,"time":"15:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4\u0397\u03A1\u0399\u039F 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0393\u039B\u03A9\u03A3\u03A3\u0391 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A5 C","semester":1,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":1,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":1,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":1,"time":"15:00-17:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"16:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#741818"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u0397","semester":1,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":1,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#741818"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u039E\u0399\u039F\u039B\u039F\u0393\u0397\u03A3\u0397 \u03A8\u0397\u03A6\u0399\u0391\u039A\u03A9\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","semester":5,"data":[{"day":1,"time":"09:00-11:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A8\u0397\u03A6\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A3\u03A4\u0397\u039D \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A3\u0397","semester":7,"data":[{"day":1,"time":"13:00-15:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 \u0393\u0399\u0391 \u039C\u0395\u0393\u0391\u039B\u0391 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u0391","semester":5,"data":[{"day":1,"time":"13:00-15:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"},{"day":5,"time":"08:00-10:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u039B\u039F\u0393\u0399\u03A3\u039C\u0399\u039A\u039F\u03A5","semester":3,"data":[{"day":2,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":4,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":5,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":5,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0395\u0399\u03A3 \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u039A\u0391\u0399 \u03A6\u039F\u03A1\u0397\u03A4\u0397 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0397","semester":7,"data":[{"day":2,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u039F\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","semester":7,"data":[{"day":2,"time":"16:00-18:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u039F\u03A1\u03A5\u03A6\u039F\u03A1\u0399\u039A\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3","semester":7,"data":[{"day":2,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u03A1\u039F\u03A3\u039F\u039C\u039F\u0399\u03A9\u03A3\u0397 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","semester":7,"data":[{"day":2,"time":"16:00-18:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":7,"data":[{"day":2,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u0395\u0399\u039A\u039F\u039D\u0391\u03A3","semester":5,"data":[{"day":2,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"},{"day":4,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u039F\u039C\u0395\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":3,"data":[{"day":3,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":3,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u0399\u039A\u0391 \u039D\u0395\u03A6\u0397","semester":5,"data":[{"day":3,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u0397\u039C\u0391\u03A4\u0391 \u039A\u0391\u0399 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","semester":3,"data":[{"day":3,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399\u0399","semester":5,"data":[{"day":3,"time":"14:00-16:00","labhall":"13.00-14.00"},{"day":3,"time":"16:00-18:00","labhall":"13.00-14.00"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039C\u0399\u039A\u03A1\u0397\u03A3 \u0395\u039C\u0392\u0395\u039B\u0395\u0399\u0391\u03A3","semester":7,"data":[{"day":3,"time":"16:00-18:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u039A\u03A1\u03A5\u03A0\u03A4\u039F\u0393\u03A1\u0391\u03A6\u0399\u0391","semester":7,"data":[{"day":3,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"},{"day":3,"time":"11:00-13:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D","semester":5,"data":[{"day":4,"time":"12:00-14:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0392\u0391\u03A3\u0395\u0399\u03A3 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","semester":5,"data":[{"day":4,"time":"09:00-11:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"}],"color":"#353534"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u039D\u0391\u0393\u039D\u03A9\u03A1\u0399\u03A3\u0397 \u03A0\u03A1\u039F\u03A4\u03A5\u03A0\u03A9\u039D","semester":7,"data":[{"day":4,"time":"14:00-16:00","labhall":"13.00-14.00"},{"day":4,"time":"16:00-18:00","labhall":"13.00-14.00"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u03A9\u039D \u0391\u0393\u039F\u03A1\u03A9\u039D","semester":7,"data":[{"day":4,"time":"09:00-11:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u039F\u03A3 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 STEM","semester":7,"data":[{"day":4,"time":"14:00-16:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397\u03A3 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3","semester":7,"data":[{"day":4,"time":"16:00-18:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0394\u0399\u0391\u039B\u0395\u0399\u03A4\u039F\u03A5\u03A1\u0393\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","semester":7,"data":[{"day":4,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. 107"}],"color":"#461b54"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u0399\u03A3\u0391\u0393\u03A9\u0393\u0397 \u03A3\u03A4\u0399\u03A3 \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3","semester":3,"data":[{"day":5,"time":"14:00-16:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.\u0399\u03A3\u039F\u0393\u0395\u0399\u039F\u03A5"},{"day":5,"time":"10:00-12:00","labhall":"\u0395\u03A1\u0393\u0391\u03A3\u03A4. \u0397\u039C\u0399\u03A9\u03A1\u039F\u03A6\u039F\u03A5"},{"day":5,"time":"14:00-16:00","labhall":"13.00-14.00"}],"color":"#0c3455"},{"name":"\u0395\u03A1\u0393\u0391\u03A3\u03A4.: \u0395\u03A5\u03A1\u03A5\u0396\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391","semester":5,"data":[{"day":5,"time":"09:00-11:00","labhall":"\u039D\u0395\u039F\u039A\u039B\u0391\u03A3\u0399\u039A\u039F \u039A\u03A4\u0399\u03A1\u0399\u039F - \u0391\u0399\u0398\u039F\u03A5\u03A3\u0391 \u0392102"}],"color":"#353534"}]');

},{}],"3McE7":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u03A7\u03A9\u03A1\u0397\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"semester":8,"date":"08/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u039A\u0391\u0399 \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7)","lectureHall":["\u039A\u0395\u039A\u03A4-007-008 (\u0395\u03C1\u03B3.)"],"semester":2,"date":"08/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u03A9\u03A4\u039F\u039A\u039F\u039B\u039B\u0391 \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F\u03A5","lectureHall":["\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-201"],"semester":6,"date":"08/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A4\u039F\u03A7\u0391\u03A3\u03A4\u0399\u039A\u0395\u03A3 \u0391\u039D\u0395\u039B\u0399\u039E\u0395\u0399\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-201"],"semester":2,"date":"09/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u0397\u0393\u039C\u0395\u039D\u0391 \u0398\u0395\u039C\u0391\u03A4\u0391 \u03A4\u0395\u03A7\u039D\u0397\u03A4\u0397\u03A3 \u039D\u039F\u0397\u039C\u039F\u03A3\u03A5\u039D\u0397\u03A3 (\u03A5\u03A0\u039A/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103"],"semester":6,"date":"10/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u03A5\u03A6\u03A5\u0397 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7, \u03CC\u03C3\u03BF\u03B9 \u03C4\u03BF \u03BF\u03C6\u03B5\u03AF\u03BB\u03BF\u03C5\u03BD \u03C9\u03C2 \u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"10/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u039A\u0391 \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"10/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0394\u0399\u039A\u03A4\u03A5\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0399\u039A)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"11/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3 \u03A0\u0391\u0393\u039A\u039F\u03A3\u039C\u0399\u039F\u03A5 \u0399\u03A3\u03A4\u039F\u03A5 (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"11/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039A\u03A4\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"12/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u0391\u039A\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106"],"semester":6,"date":"12/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D \u0399","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":4,"date":"15/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":6,"date":"15/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D & \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"15/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0397\u039B\u0395\u03AA\u0391\u03A4\u03A1\u0399\u039A\u0397 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-108"],"semester":8,"date":"16/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0397 \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0399\u0399","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-201","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":2,"date":"16/06/2026","startTime":"18:00:00","endTime":"21:00:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391 \u03A3\u03A4\u039F \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"17/06/2026","startTime":"09:00:00","endTime":"17:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A6\u0391\u039B\u0395\u0399\u0391 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":6,"date":"18/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039C\u0395\u0398\u039F\u0394\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0391\u039D\u0391\u03A0\u03A4\u03A5\u039E\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03A5\u0394\u039A/\u03A0\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"18/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D (\u03A5\u0394\u039A/\u03A4\u0397\u039B)","lectureHall":["\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"19/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0395\u03A3 \u0394\u0399\u0391\u03A3\u03A6\u0391\u039B\u0399\u03A3\u0397\u03A3 \u0399\u0394\u0399\u03A9\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0391\u03A3\u03A6)","lectureHall":["\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336"],"semester":6,"date":"19/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A7\u0395\u0394\u0399\u0391\u03A3\u039C\u039F\u03A3 \u0392\u0391\u03A3\u0395\u03A9\u039D \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108"],"semester":4,"date":"22/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u03A4\u0399\u039A\u0395\u0399\u039C\u0395\u039D\u039F\u03A3\u03A4\u03A1\u0395\u03A6\u0397\u03A3 \u03A0\u03A1\u039F\u0393\u03A1\u0391\u039C\u039C\u0391\u03A4\u0399\u03A3\u039C\u039F\u03A3","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"22/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u0394\u0399\u039A\u03A4\u03A5\u039F \u03A4\u03A9\u039D \u03A0\u03A1\u0391\u0393\u039C\u0391\u03A4\u03A9\u039D (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203"],"semester":8,"date":"22/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03A5\u0393\u0395\u0399\u0391\u03A3 (\u03A5\u0394\u039A/\u03A8\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"23/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A4\u0395\u03A7\u039D\u0399\u039A\u0395\u03A3 \u0392\u0395\u039B\u03A4\u0399\u03A3\u03A4\u039F\u03A0\u039F\u0399\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-102"],"semester":6,"date":"23/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039F\u0399\u039A\u0397\u03A3\u0397 \u039F\u039B\u0399\u039A\u0397\u03A3 \u03A0\u039F\u0399\u039F\u03A4\u0397\u03A4\u0391\u03A3 (\u039F\u0394\u0395) (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7 \u03CC\u03C3\u03BF\u03B9 \u03C4\u03BF \u03BF\u03C6\u03B5\u03AF\u03BB\u03BF\u03C5\u03BD \u03C9\u03C2 \u03C5\u03C0\u03BF\u03C7\u03C1\u03B5\u03C9\u03C4\u03B9\u03BA\u03CC) (\u0397\u03A5/\u03A3\u0395\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-102","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"24/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A3\u03A5\u03A1\u039C\u0391\u03A4\u0395\u03A3 \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 (\u03A5\u03A0\u039A/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":6,"date":"25/06/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u039A\u0391\u03A4\u0391\u039D\u0395\u039C\u0397\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 (\u03A5\u0394\u039A/\u0391\u03A3)","lectureHall":["\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203"],"semester":8,"date":"25/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039B\u0393\u039F\u03A1\u0399\u0398\u039C\u039F\u0399 & \u03A0\u039F\u039B\u03A5\u03A0\u039B\u039F\u039A\u039F\u03A4\u0397\u03A4\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-101","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107","\u039A\u0395\u039A\u03A4-108","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"26/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039E\u0399\u039F\u039B\u039F\u0393\u0397\u03A3\u0397 \u0395\u03A0\u0399\u0394\u039F\u03A3\u0395\u03A9\u039D \u03A4\u0397\u039B\u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D \u03B5\u03C0. (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u03A4&\u0394)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"26/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397 \u0395\u03A0\u0395\u039E\u0395\u03A1\u0393\u0391\u03A3\u0399\u0391 \u03A3\u0397\u039C\u0391\u03A4\u039F\u03A3 \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":6,"date":"26/06/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0393\u039D\u03A9\u03A3\u0397\u03A3 \u039A\u0391\u0399 \u0399\u039A\u0391\u039D\u039F\u03A4\u0397\u03A4\u03A9\u039D (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"29/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u039D\u0395\u03A1\u0393\u0391\u03A4\u0399\u039A\u0391 \u03A0\u0395\u03A1\u0399\u0392\u0391\u039B\u039B\u039F\u039D\u03A4\u0391 \u039C\u0391\u0398\u0397\u03A3\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2"],"semester":6,"date":"29/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A5\u039C\u0392\u039F\u03A5\u039B\u0395\u03A5\u03A4\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u0397\u03A1\u0395\u03A3\u0399\u0395\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03AE\u03C4\u03C1\u03B9\u03B1\u03C2"],"semester":8,"date":"29/06/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A3\u03A4\u0391\u03A4\u0399\u03A3\u03A4\u0399\u039A\u0397","lectureHall":["\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"29/06/2026","startTime":"18:00:00","endTime":"21:00:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03A5\u0393\u0395\u0399\u0391\u03A3 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"30/06/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u0395\u03A3 \u03A0\u039F\u039B\u03A5\u039C\u0395\u03A3\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-106"],"semester":6,"date":"30/06/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u039F\u039C\u0397\u039C\u0395\u039D\u0397 \u0391\u039D\u0391\u03A0\u0391\u03A1\u0391\u03A3\u03A4\u0391\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u03A9\u039D (\u03A5\u03A0\u039A/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-107"],"semester":6,"date":"01/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u039A\u03A4\u03A5\u0391 \u039A\u0399\u039D\u0397\u03A4\u03A9\u039D \u039A\u0391\u0399 \u03A0\u03A1\u039F\u03A3\u03A9\u03A0\u0399\u039A\u03A9\u039D \u0395\u03A0\u0399\u039A\u039F\u0399\u039D\u03A9\u039D\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A4&\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-002"],"semester":8,"date":"01/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u039A\u0391\u0399\u039D\u039F\u03A4\u039F\u039C\u0399\u0391\u03A3 \u039A\u0391\u0399 \u03A8\u0397\u03A6\u0399\u0391\u039A\u0397\u03A3 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u039C\u0391\u03A4\u0399\u039A\u039F\u03A4\u0397\u03A4\u0391\u03A3 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"01/07/2026","startTime":"18:00:00","endTime":"20:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u039D\u0391\u039B\u03A5\u03A3\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6"],"semester":4,"date":"02/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A0\u039F\u0398\u0397\u039A\u0395\u03A3 \u039A\u0391\u0399 \u0395\u039E\u039F\u03A1\u03A5\u039E\u0397 \u0394\u0395\u0394\u039F\u039C\u0395\u039D\u03A9\u039D (\u03A5\u0394\u039A/\u0394\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-335","\u039A\u0395\u039A\u03A4-336","\u039A\u0395\u039A\u03A4-339"],"semester":8,"date":"02/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A1\u0391\u039A\u03A4\u0399\u039A\u0397 \u0391\u03A3\u039A\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u03A0\u03A4\u03A5\u03A7\u0399\u0391\u039A\u0397 \u0395\u03A1\u0393\u0391\u03A3\u0399\u0391","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u039A\u03A1\u0399\u03A4\u0391 \u039C\u0391\u0398\u0397\u039C\u0391\u03A4\u0399\u039A\u0391","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-104","\u039A\u0395\u039A\u03A4-105","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"03/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039D\u0395\u03A1\u0393\u0395\u0399\u0391\u039A\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u039A\u0391\u0399 \u03A0\u039F\u039B\u0399\u03A4\u0399\u039A\u0395\u03A3 \u03B5\u03C0. (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u0393\u0395\u039D\u0399\u039A\u039F)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"03/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u03A7\u0395\u0399\u03A1\u0399\u03A3\u0397 \u0395\u03A0\u0399\u03A7\u0395\u0399\u03A1\u0397\u03A3\u0399\u0391\u039A\u03A9\u039D \u0394\u0399\u0391\u0394\u0399\u039A\u0391\u03A3\u0399\u03A9\u039D \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-103"],"semester":6,"date":"06/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039A\u03A0\u0391\u0399\u0394\u0395\u03A5\u03A4\u0399\u039A\u0397 \u03A4\u0395\u03A7\u039D\u039F\u039B\u039F\u0393\u0399\u0391 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":6,"date":"06/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#4e4e4d"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u0391\u039A\u03A9\u039D \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u03A9\u039D (\u03BC\u03CC\u03BD\u03BF \u03B5\u03BE\u03AD\u03C4\u03B1\u03C3\u03B7) (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-336"],"semester":8,"date":"07/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0391\u03A1\u03A7\u0399\u03A4\u0395\u039A\u03A4\u039F\u039D\u0399\u039A\u0395\u03A3 \u03A5\u03A0\u039F\u039B\u039F\u0393\u0399\u03A3\u03A4\u03A9\u039D","lectureHall":["\u039A\u0395\u039A\u03A4-001","\u039A\u0395\u039A\u03A4-002","\u039A\u0395\u039A\u03A4-\u03A0. \u03B1\u03BC\u03C6","\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106"],"semester":2,"date":"07/07/2026","startTime":"15:45:00","endTime":"17:45:00","division":"\u0391 - \u03A9","color":"#a22323"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0394\u0399\u0394\u0391\u039A\u03A4\u0399\u039A\u0397 \u03A4\u0397\u03A3 \u03A0\u039B\u0397\u03A1\u039F\u03A6\u039F\u03A1\u0399\u039A\u0397\u03A3 \u03B5\u03C0. (\u0395/\u03A0\u0394\u0399)","lectureHall":["\u0393\u03C1. \u039A\u03B1\u03B8\u03B7\u03B3\u03B7\u03C4\u03AE"],"semester":8,"date":"08/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: UNIX","lectureHall":["\u039A\u0395\u039A\u03A4-103","\u039A\u0395\u039A\u03A4-106","\u039A\u0395\u039A\u03A4-201","\u039A\u0395\u039A\u03A4-202","\u039A\u0395\u039A\u03A4-203","\u039A\u0395\u039A\u03A4-204"],"semester":4,"date":"08/07/2026","startTime":"13:30:00","endTime":"15:30:00","division":"\u0391 - \u03A9","color":"#10436e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0395\u039D\u03A3\u03A9\u039C\u0391\u03A4\u03A9\u039C\u0395\u039D\u0391 \u03A3\u03A5\u03A3\u03A4\u0397\u039C\u0391\u03A4\u0391 \u03B5\u03C0. (\u0395/\u03A5\u03A5\u03A5)","lectureHall":["\u039A\u0395\u039A\u03A4-107"],"semester":8,"date":"09/07/2026","startTime":"11:15:00","endTime":"13:15:00","division":"\u0391 - \u03A9","color":"#5e226e"},{"title":"\u0395\u039E\u0395\u03A4\u0391\u03A3\u0397: \u0397\u039B\u0395\u039A\u03A4\u03A1\u039F\u039D\u0399\u039A\u0397 \u0394\u0399\u0391\u039A\u03A5\u0392\u0395\u03A1\u039D\u0397\u03A3\u0397 \u03B5\u03C0. (\u0395/\u03A3\u039B\u0394)","lectureHall":["\u039A\u0395\u039A\u03A4-106"],"semester":8,"date":"10/07/2026","startTime":"09:00:00","endTime":"11:00:00","division":"\u0391 - \u03A9","color":"#5e226e"}]');

},{}]},["bS2Sa","kBsIF"], "kBsIF", "parcelRequireb26d", {}, "./", "/")

//# sourceMappingURL=public.21db305d.js.map
