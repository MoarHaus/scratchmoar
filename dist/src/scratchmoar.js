// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lTkX9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6d532f93aa77321e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"9Smt2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _appVue = require("./App.vue");
var _appVueDefault = parcelHelpers.interopDefault(_appVue);
var _stylesCssJs = require("./styles.css.js");
var _stylesCssJsDefault = parcelHelpers.interopDefault(_stylesCssJs);
var _snapshotsJs = require("./store/snapshots.js");
var _snapshotsJsDefault = parcelHelpers.interopDefault(_snapshotsJs);
class Scratchmoar {
    /**
   * Entry point for extension
   */ getInfo() {
        if (!this.vm) this.setup();
        return {
            id: "scratchmoar",
            name: "Moooar",
            blocks: [
                {
                    opcode: "scratchmoarNull",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "null"
                }
            ]
        };
    }
    /**
   * Test block
   */ scratchmoarNull() {
        return null;
    }
    /**
   * Setup the extension
   */ setup() {
        // resetDB if ?reset is present in URL and redirect to same URL without reset
        if (window.location.search.includes("reset")) {
            this.resetDB();
            window.location = window.location.href.replace("?reset", "");
        }
        // Reference virtual machine
        this.vm = globalThis.Scratch.vm;
        this.runtime = this.vm.runtime;
        this.db = (0, _snapshotsJsDefault.default);
        globalThis.scratchmoar = this;
        // Mount Vue
        this.app = (0, _vue.createApp)((0, _appVueDefault.default));
        this.app.mount('[class*="menu-bar_account-info-group_"]');
        // Manually add styles
        const $styles = document.createElement("style");
        $styles.innerHTML = (0, _stylesCssJsDefault.default);
        document.querySelector("body").appendChild($styles);
        // Custom event listeners
        document.addEventListener("scratchmoarResetDB", this.resetDB.bind(this));
        console.log("\uD83E\uDDE9 Scratchmoar extension loaded!");
    }
    /**
   * Reset the database
   */ resetDB() {
        this.db.delete();
    }
}
// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new Scratchmoar());
exports.default = Scratchmoar;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","vue":"gzxs9","./App.vue":"fYNyc","./styles.css.js":"2BAGs","./store/snapshots.js":"aBwoW"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gzxs9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compile", ()=>compile);
var _runtimeDom = require("@vue/runtime-dom");
parcelHelpers.exportAll(_runtimeDom, exports);
function initDev() {
    (0, _runtimeDom.initCustomFormatter)();
}
initDev();
const compile = ()=>{
    (0, _runtimeDom.warn)(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
};

},{"@vue/runtime-dom":"9wNvI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9wNvI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Transition", ()=>Transition);
parcelHelpers.export(exports, "TransitionGroup", ()=>TransitionGroup);
parcelHelpers.export(exports, "VueElement", ()=>VueElement);
parcelHelpers.export(exports, "createApp", ()=>createApp);
parcelHelpers.export(exports, "createSSRApp", ()=>createSSRApp);
parcelHelpers.export(exports, "defineCustomElement", ()=>defineCustomElement);
parcelHelpers.export(exports, "defineSSRCustomElement", ()=>defineSSRCustomElement);
parcelHelpers.export(exports, "hydrate", ()=>hydrate);
parcelHelpers.export(exports, "initDirectivesForSSR", ()=>initDirectivesForSSR);
parcelHelpers.export(exports, "render", ()=>render);
parcelHelpers.export(exports, "useCssModule", ()=>useCssModule);
parcelHelpers.export(exports, "useCssVars", ()=>useCssVars);
parcelHelpers.export(exports, "vModelCheckbox", ()=>vModelCheckbox);
parcelHelpers.export(exports, "vModelDynamic", ()=>vModelDynamic);
parcelHelpers.export(exports, "vModelRadio", ()=>vModelRadio);
parcelHelpers.export(exports, "vModelSelect", ()=>vModelSelect);
parcelHelpers.export(exports, "vModelText", ()=>vModelText);
parcelHelpers.export(exports, "vShow", ()=>vShow);
parcelHelpers.export(exports, "withKeys", ()=>withKeys);
parcelHelpers.export(exports, "withModifiers", ()=>withModifiers);
var _runtimeCore = require("@vue/runtime-core");
parcelHelpers.exportAll(_runtimeCore, exports);
var _shared = require("@vue/shared");
const svgNS = "http://www.w3.org/2000/svg";
const doc = typeof document !== "undefined" ? document : null;
const templateContainer = doc && /*#__PURE__*/ doc.createElement("template");
const nodeOps = {
    insert: (child, parent, anchor)=>{
        parent.insertBefore(child, anchor || null);
    },
    remove: (child)=>{
        const parent = child.parentNode;
        if (parent) parent.removeChild(child);
    },
    createElement: (tag, isSVG, is, props)=>{
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
            is
        } : undefined);
        if (tag === "select" && props && props.multiple != null) el.setAttribute("multiple", props.multiple);
        return el;
    },
    createText: (text)=>doc.createTextNode(text),
    createComment: (text)=>doc.createComment(text),
    setText: (node, text)=>{
        node.nodeValue = text;
    },
    setElementText: (el, text)=>{
        el.textContent = text;
    },
    parentNode: (node)=>node.parentNode,
    nextSibling: (node)=>node.nextSibling,
    querySelector: (selector)=>doc.querySelector(selector),
    setScopeId (el, id) {
        el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent (content, parent, anchor, isSVG, start, end) {
        // <parent> before | first ... last | anchor </parent>
        const before = anchor ? anchor.previousSibling : parent.lastChild;
        // #5308 can only take cached path if:
        // - has a single root node
        // - nextSibling info is still available
        if (start && (start === end || start.nextSibling)) // cached
        while(true){
            parent.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling)) break;
        }
        else {
            // fresh insert
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
                // remove outer svg wrapper
                const wrapper = template.firstChild;
                while(wrapper.firstChild)template.appendChild(wrapper.firstChild);
                template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
        }
        return [
            // first
            before ? before.nextSibling : parent.firstChild,
            // last
            anchor ? anchor.previousSibling : parent.lastChild
        ];
    }
};
// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el, value, isSVG) {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    const transitionClasses = el._vtc;
    if (transitionClasses) value = (value ? [
        value,
        ...transitionClasses
    ] : [
        ...transitionClasses
    ]).join(" ");
    if (value == null) el.removeAttribute("class");
    else if (isSVG) el.setAttribute("class", value);
    else el.className = value;
}
function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = (0, _shared.isString)(next);
    if (next && !isCssString) {
        if (prev && !(0, _shared.isString)(prev)) {
            for(const key in prev)if (next[key] == null) setStyle(style, key, "");
        }
        for(const key in next)setStyle(style, key, next[key]);
    } else {
        const currentDisplay = style.display;
        if (isCssString) {
            if (prev !== next) style.cssText = next;
        } else if (prev) el.removeAttribute("style");
        // indicates that the `display` of the element is controlled by `v-show`,
        // so we always keep the current `display` value regardless of the `style`
        // value, thus handing over control to `v-show`.
        if ("_vod" in el) style.display = currentDisplay;
    }
}
const semicolonRE = /[^\\];\s*$/;
const importantRE = /\s*!important$/;
function setStyle(style, name, val) {
    if ((0, _shared.isArray)(val)) val.forEach((v)=>setStyle(style, name, v));
    else {
        if (val == null) val = "";
        if (semicolonRE.test(val)) (0, _runtimeCore.warn)(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
        if (name.startsWith("--")) // custom property definition
        style.setProperty(name, val);
        else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) // !important
            style.setProperty((0, _shared.hyphenate)(prefixed), val.replace(importantRE, ""), "important");
            else style[prefixed] = val;
        }
    }
}
const prefixes = [
    "Webkit",
    "Moz",
    "ms"
];
const prefixCache = {};
function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) return cached;
    let name = (0, _runtimeCore.camelize)(rawName);
    if (name !== "filter" && name in style) return prefixCache[rawName] = name;
    name = (0, _shared.capitalize)(name);
    for(let i = 0; i < prefixes.length; i++){
        const prefixed = prefixes[i] + name;
        if (prefixed in style) return prefixCache[rawName] = prefixed;
    }
    return rawName;
}
const xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
        if (value == null) el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
        else el.setAttributeNS(xlinkNS, key, value);
    } else {
        // note we are only checking boolean attributes that don't have a
        // corresponding dom prop of the same name here.
        const isBoolean = (0, _shared.isSpecialBooleanAttr)(key);
        if (value == null || isBoolean && !(0, _shared.includeBooleanAttr)(value)) el.removeAttribute(key);
        else el.setAttribute(key, isBoolean ? "" : value);
    }
}
// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
        if (prevChildren) unmountChildren(prevChildren, parentComponent, parentSuspense);
        el[key] = value == null ? "" : value;
        return;
    }
    if (key === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
    !el.tagName.includes("-")) {
        // store value as _value as well since
        // non-string values will be stringified.
        el._value = value;
        const newValue = value == null ? "" : value;
        if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
        // textContent if no value attribute is present. And setting .value for
        // OPTION has no side effect
        el.tagName === "OPTION") el.value = newValue;
        if (value == null) el.removeAttribute(key);
        return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
        const type = typeof el[key];
        if (type === "boolean") // e.g. <select multiple> compiles to { multiple: '' }
        value = (0, _shared.includeBooleanAttr)(value);
        else if (value == null && type === "string") {
            // e.g. <div :id="null">
            value = "";
            needRemove = true;
        } else if (type === "number") {
            // e.g. <img :width="null">
            value = 0;
            needRemove = true;
        }
    }
    // some properties perform value validation and throw,
    // some properties has getter, no setter, will error in 'use strict'
    // eg. <select :type="null"></select> <select :willValidate="null"></select>
    try {
        el[key] = value;
    } catch (e) {
        // do not warn if value is auto-coerced from nullish values
        if (!needRemove) (0, _runtimeCore.warn)(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: ` + `value ${value} is invalid.`, e);
    }
    needRemove && el.removeAttribute(key);
}
function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
}
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    // vei = vue event invokers
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) // patch
    existingInvoker.value = nextValue;
    else {
        const [name, options] = parseName(rawName);
        if (nextValue) {
            // add
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
        } else if (existingInvoker) {
            // remove
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = undefined;
        }
    }
}
const optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
        options = {};
        let m;
        while(m = name.match(optionsModifierRE)){
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
        }
    }
    const event = name[2] === ":" ? name.slice(3) : (0, _shared.hyphenate)(name.slice(2));
    return [
        event,
        options
    ];
}
// To avoid the overhead of repeatedly calling Date.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow = 0;
const p = /*#__PURE__*/ Promise.resolve();
const getNow = ()=>cachedNow || (p.then(()=>cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
    const invoker = (e)=>{
        // async edge case vuejs/vue#6566
        // inner click event triggers patch, event handler
        // attached to outer element during patch, and triggered again. This
        // happens because browsers fire microtask ticks between event propagation.
        // this no longer happens for templates in Vue 3, but could still be
        // theoretically possible for hand-written render functions.
        // the solution: we save the timestamp when a handler is attached,
        // and also attach the timestamp to any event that was handled by vue
        // for the first time (to avoid inconsistent event timestamp implementations
        // or events fired from iframes, e.g. #2513)
        // The handler would only fire if the event passed to it was fired
        // AFTER it was attached.
        if (!e._vts) e._vts = Date.now();
        else if (e._vts <= invoker.attached) return;
        (0, _runtimeCore.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5 /* ErrorCodes.NATIVE_EVENT_HANDLER */ , [
            e
        ]);
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
}
function patchStopImmediatePropagation(e, value) {
    if ((0, _shared.isArray)(value)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = ()=>{
            originalStop.call(e);
            e._stopped = true;
        };
        return value.map((fn)=>(e)=>!e._stopped && fn && fn(e));
    } else return value;
}
const nativeOnRE = /^on[a-z]/;
const patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren)=>{
    if (key === "class") patchClass(el, nextValue, isSVG);
    else if (key === "style") patchStyle(el, prevValue, nextValue);
    else if ((0, _shared.isOn)(key)) // ignore v-model listeners
    {
        if (!(0, _shared.isModelListener)(key)) patchEvent(el, key, prevValue, nextValue, parentComponent);
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === "true-value") el._trueValue = nextValue;
        else if (key === "false-value") el._falseValue = nextValue;
        patchAttr(el, key, nextValue, isSVG);
    }
};
function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
        // most keys must be set as attribute on svg elements to work
        // ...except innerHTML & textContent
        if (key === "innerHTML" || key === "textContent") return true;
        // or native onclick with function values
        if (key in el && nativeOnRE.test(key) && (0, _shared.isFunction)(value)) return true;
        return false;
    }
    // these are enumerated attrs, however their corresponding DOM properties
    // are actually booleans - this leads to setting it with a string "false"
    // value leading it to be coerced to `true`, so we need to always treat
    // them as attributes.
    // Note that `contentEditable` doesn't have this problem: its DOM
    // property is also enumerated string values.
    if (key === "spellcheck" || key === "draggable" || key === "translate") return false;
    // #1787, #2840 form property on form elements is readonly and must be set as
    // attribute.
    if (key === "form") return false;
    // #1526 <input list> must be set as attribute
    if (key === "list" && el.tagName === "INPUT") return false;
    // #2766 <textarea type> must be set as attribute
    if (key === "type" && el.tagName === "TEXTAREA") return false;
    // native onclick with string value, must be set as attribute
    if (nativeOnRE.test(key) && (0, _shared.isString)(value)) return false;
    return key in el;
}
function defineCustomElement(options, hydrate) {
    const Comp = (0, _runtimeCore.defineComponent)(options);
    class VueCustomElement extends VueElement {
        constructor(initialProps){
            super(Comp, initialProps, hydrate);
        }
    }
    VueCustomElement.def = Comp;
    return VueCustomElement;
}
const defineSSRCustomElement = (options)=>{
    // @ts-ignore
    return defineCustomElement(options, hydrate);
};
const BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
};
class VueElement extends BaseClass {
    constructor(_def, _props = {}, hydrate){
        super();
        this._def = _def;
        this._props = _props;
        /**
         * @internal
         */ this._instance = null;
        this._connected = false;
        this._resolved = false;
        this._numberProps = null;
        if (this.shadowRoot && hydrate) hydrate(this._createVNode(), this.shadowRoot);
        else {
            if (0, this.shadowRoot) (0, _runtimeCore.warn)(`Custom element has pre-rendered declarative shadow root but is not ` + `defined as hydratable. Use \`defineSSRCustomElement\`.`);
            this.attachShadow({
                mode: "open"
            });
            if (!this._def.__asyncLoader) // for sync component defs we can immediately resolve props
            this._resolveProps(this._def);
        }
    }
    connectedCallback() {
        this._connected = true;
        if (!this._instance) {
            if (this._resolved) this._update();
            else this._resolveDef();
        }
    }
    disconnectedCallback() {
        this._connected = false;
        (0, _runtimeCore.nextTick)(()=>{
            if (!this._connected) {
                render(null, this.shadowRoot);
                this._instance = null;
            }
        });
    }
    /**
     * resolve inner component definition (handle possible async component)
     */ _resolveDef() {
        this._resolved = true;
        // set initial attrs
        for(let i = 0; i < this.attributes.length; i++)this._setAttr(this.attributes[i].name);
        // watch future attr changes
        new MutationObserver((mutations)=>{
            for (const m of mutations)this._setAttr(m.attributeName);
        }).observe(this, {
            attributes: true
        });
        const resolve = (def, isAsync = false)=>{
            const { props , styles  } = def;
            // cast Number-type props set before resolve
            let numberProps;
            if (props && !(0, _shared.isArray)(props)) for(const key in props){
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                    if (key in this._props) this._props[key] = (0, _shared.toNumber)(this._props[key]);
                    (numberProps || (numberProps = Object.create(null)))[(0, _shared.camelize)(key)] = true;
                }
            }
            this._numberProps = numberProps;
            if (isAsync) // defining getter/setters on prototype
            // for sync defs, this already happened in the constructor
            this._resolveProps(def);
            // apply CSS
            this._applyStyles(styles);
            // initial render
            this._update();
        };
        const asyncDef = this._def.__asyncLoader;
        if (asyncDef) asyncDef().then((def)=>resolve(def, true));
        else resolve(this._def);
    }
    _resolveProps(def) {
        const { props  } = def;
        const declaredPropKeys = (0, _shared.isArray)(props) ? props : Object.keys(props || {});
        // check if there are props set pre-upgrade or connect
        for (const key of Object.keys(this))if (key[0] !== "_" && declaredPropKeys.includes(key)) this._setProp(key, this[key], true, false);
        // defining getter/setters on prototype
        for (const key of declaredPropKeys.map((0, _shared.camelize)))Object.defineProperty(this, key, {
            get () {
                return this._getProp(key);
            },
            set (val) {
                this._setProp(key, val);
            }
        });
    }
    _setAttr(key) {
        let value = this.getAttribute(key);
        const camelKey = (0, _shared.camelize)(key);
        if (this._numberProps && this._numberProps[camelKey]) value = (0, _shared.toNumber)(value);
        this._setProp(camelKey, value, false);
    }
    /**
     * @internal
     */ _getProp(key) {
        return this._props[key];
    }
    /**
     * @internal
     */ _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
        if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) this._update();
            // reflect
            if (shouldReflect) {
                if (val === true) this.setAttribute((0, _shared.hyphenate)(key), "");
                else if (typeof val === "string" || typeof val === "number") this.setAttribute((0, _shared.hyphenate)(key), val + "");
                else if (!val) this.removeAttribute((0, _shared.hyphenate)(key));
            }
        }
    }
    _update() {
        render(this._createVNode(), this.shadowRoot);
    }
    _createVNode() {
        const vnode = (0, _runtimeCore.createVNode)(this._def, (0, _shared.extend)({}, this._props));
        if (!this._instance) vnode.ce = (instance)=>{
            this._instance = instance;
            instance.isCE = true;
            instance.ceReload = (newStyles)=>{
                // always reset styles
                if (this._styles) {
                    this._styles.forEach((s)=>this.shadowRoot.removeChild(s));
                    this._styles.length = 0;
                }
                this._applyStyles(newStyles);
                this._instance = null;
                this._update();
            };
            const dispatch = (event, args)=>{
                this.dispatchEvent(new CustomEvent(event, {
                    detail: args
                }));
            };
            // intercept emit
            instance.emit = (event, ...args)=>{
                // dispatch both the raw and hyphenated versions of an event
                // to match Vue behavior
                dispatch(event, args);
                if ((0, _shared.hyphenate)(event) !== event) dispatch((0, _shared.hyphenate)(event), args);
            };
            // locate nearest Vue custom element parent for provide/inject
            let parent = this;
            while(parent = parent && (parent.parentNode || parent.host))if (parent instanceof VueElement) {
                instance.parent = parent._instance;
                instance.provides = parent._instance.provides;
                break;
            }
        };
        return vnode;
    }
    _applyStyles(styles) {
        if (styles) styles.forEach((css)=>{
            const s = document.createElement("style");
            s.textContent = css;
            this.shadowRoot.appendChild(s);
            (this._styles || (this._styles = [])).push(s);
        });
    }
}
function useCssModule(name = "$style") {
    /* istanbul ignore else */ {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        if (!instance) {
            (0, _runtimeCore.warn)(`useCssModule must be called inside setup()`);
            return 0, _shared.EMPTY_OBJ;
        }
        const modules = instance.type.__cssModules;
        if (!modules) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS modules injected.`);
            return 0, _shared.EMPTY_OBJ;
        }
        const mod = modules[name];
        if (!mod) {
            (0, _runtimeCore.warn)(`Current instance does not have CSS module named "${name}".`);
            return 0, _shared.EMPTY_OBJ;
        }
        return mod;
    }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */ function useCssVars(getter) {
    const instance = (0, _runtimeCore.getCurrentInstance)();
    /* istanbul ignore next */ if (!instance) {
        (0, _runtimeCore.warn)(`useCssVars is called without current active component instance.`);
        return;
    }
    const updateTeleports = instance.ut = (vars = getter(instance.proxy))=>{
        Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node)=>setVarsOnNode(node, vars));
    };
    const setVars = ()=>{
        const vars = getter(instance.proxy);
        setVarsOnVNode(instance.subTree, vars);
        updateTeleports(vars);
    };
    (0, _runtimeCore.watchPostEffect)(setVars);
    (0, _runtimeCore.onMounted)(()=>{
        const ob = new MutationObserver(setVars);
        ob.observe(instance.subTree.el.parentNode, {
            childList: true
        });
        (0, _runtimeCore.onUnmounted)(()=>ob.disconnect());
    });
}
function setVarsOnVNode(vnode, vars) {
    if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) {
        const suspense = vnode.suspense;
        vnode = suspense.activeBranch;
        if (suspense.pendingBranch && !suspense.isHydrating) suspense.effects.push(()=>{
            setVarsOnVNode(suspense.activeBranch, vars);
        });
    }
    // drill down HOCs until it's a non-component vnode
    while(vnode.component)vnode = vnode.component.subTree;
    if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */  && vnode.el) setVarsOnNode(vnode.el, vars);
    else if (vnode.type === (0, _runtimeCore.Fragment)) vnode.children.forEach((c)=>setVarsOnVNode(c, vars));
    else if (vnode.type === (0, _runtimeCore.Static)) {
        let { el , anchor  } = vnode;
        while(el){
            setVarsOnNode(el, vars);
            if (el === anchor) break;
            el = el.nextSibling;
        }
    }
}
function setVarsOnNode(el, vars) {
    if (el.nodeType === 1) {
        const style = el.style;
        for(const key in vars)style.setProperty(`--${key}`, vars[key]);
    }
}
const TRANSITION = "transition";
const ANIMATION = "animation";
// DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.
const Transition = (props, { slots  })=>(0, _runtimeCore.h)((0, _runtimeCore.BaseTransition), resolveTransitionProps(props), slots);
Transition.displayName = "Transition";
const DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: true
    },
    duration: [
        String,
        Number,
        Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
const TransitionPropsValidators = Transition.props = /*#__PURE__*/ (0, _shared.extend)({}, (0, _runtimeCore.BaseTransition).props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */ const callHook = (hook, args = [])=>{
    if ((0, _shared.isArray)(hook)) hook.forEach((h)=>h(...args));
    else if (hook) hook(...args);
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */ const hasExplicitCallback = (hook)=>{
    return hook ? (0, _shared.isArray)(hook) ? hook.some((h)=>h.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for(const key in rawProps)if (!(key in DOMTransitionPropsValidators)) baseProps[key] = rawProps[key];
    if (rawProps.css === false) return baseProps;
    const { name ="v" , type , duration , enterFromClass =`${name}-enter-from` , enterActiveClass =`${name}-enter-active` , enterToClass =`${name}-enter-to` , appearFromClass =enterFromClass , appearActiveClass =enterActiveClass , appearToClass =enterToClass , leaveFromClass =`${name}-leave-from` , leaveActiveClass =`${name}-leave-active` , leaveToClass =`${name}-leave-to`  } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter , onEnter , onEnterCancelled , onLeave , onLeaveCancelled , onBeforeAppear =onBeforeEnter , onAppear =onEnter , onAppearCancelled =onEnterCancelled  } = baseProps;
    const finishEnter = (el, isAppear, done)=>{
        removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
        removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
        done && done();
    };
    const finishLeave = (el, done)=>{
        el._isLeaving = false;
        removeTransitionClass(el, leaveFromClass);
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
        done && done();
    };
    const makeEnterHook = (isAppear)=>{
        return (el, done)=>{
            const hook = isAppear ? onAppear : onEnter;
            const resolve = ()=>finishEnter(el, isAppear, done);
            callHook(hook, [
                el,
                resolve
            ]);
            nextFrame(()=>{
                removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
                addTransitionClass(el, isAppear ? appearToClass : enterToClass);
                if (!hasExplicitCallback(hook)) whenTransitionEnds(el, type, enterDuration, resolve);
            });
        };
    };
    return (0, _shared.extend)(baseProps, {
        onBeforeEnter (el) {
            callHook(onBeforeEnter, [
                el
            ]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
        },
        onBeforeAppear (el) {
            callHook(onBeforeAppear, [
                el
            ]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
        },
        onEnter: makeEnterHook(false),
        onAppear: makeEnterHook(true),
        onLeave (el, done) {
            el._isLeaving = true;
            const resolve = ()=>finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            // force reflow so *-leave-from classes immediately take effect (#2593)
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(()=>{
                if (!el._isLeaving) // cancelled
                return;
                removeTransitionClass(el, leaveFromClass);
                addTransitionClass(el, leaveToClass);
                if (!hasExplicitCallback(onLeave)) whenTransitionEnds(el, type, leaveDuration, resolve);
            });
            callHook(onLeave, [
                el,
                resolve
            ]);
        },
        onEnterCancelled (el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [
                el
            ]);
        },
        onAppearCancelled (el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [
                el
            ]);
        },
        onLeaveCancelled (el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [
                el
            ]);
        }
    });
}
function normalizeDuration(duration) {
    if (duration == null) return null;
    else if ((0, _shared.isObject)(duration)) return [
        NumberOf(duration.enter),
        NumberOf(duration.leave)
    ];
    else {
        const n = NumberOf(duration);
        return [
            n,
            n
        ];
    }
}
function NumberOf(val) {
    const res = (0, _shared.toNumber)(val);
    (0, _runtimeCore.assertNumber)(res, "<transition> explicit duration");
    return res;
}
function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.add(c));
    (el._vtc || (el._vtc = new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c)=>c && el.classList.remove(c));
    const { _vtc  } = el;
    if (_vtc) {
        _vtc.delete(cls);
        if (!_vtc.size) el._vtc = undefined;
    }
}
function nextFrame(cb) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(cb);
    });
}
let endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = ()=>{
        if (id === el._endId) resolve();
    };
    if (explicitTimeout) return setTimeout(resolveIfNotStale, explicitTimeout);
    const { type , timeout , propCount  } = getTransitionInfo(el, expectedType);
    if (!type) return resolve();
    const endEvent = type + "end";
    let ended = 0;
    const end = ()=>{
        el.removeEventListener(endEvent, onEnd);
        resolveIfNotStale();
    };
    const onEnd = (e)=>{
        if (e.target === el && ++ended >= propCount) end();
    };
    setTimeout(()=>{
        if (ended < propCount) end();
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    const getStyleProperties = (key)=>(styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    /* istanbul ignore if */ if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            propCount = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            propCount = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
        propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
    return {
        type,
        timeout,
        propCount,
        hasTransform
    };
}
function getTimeout(delays, durations) {
    while(delays.length < durations.length)delays = delays.concat(delays);
    return Math.max(...durations.map((d, i)=>toMs(d) + toMs(delays[i])));
}
// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1000;
}
// synchronously force layout to put elements into a certain state
function forceReflow() {
    return document.body.offsetHeight;
}
const positionMap = new WeakMap();
const newPositionMap = new WeakMap();
const TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /*#__PURE__*/ (0, _shared.extend)({}, TransitionPropsValidators, {
        tag: String,
        moveClass: String
    }),
    setup (props, { slots  }) {
        const instance = (0, _runtimeCore.getCurrentInstance)();
        const state = (0, _runtimeCore.useTransitionState)();
        let prevChildren;
        let children;
        (0, _runtimeCore.onUpdated)(()=>{
            // children is guaranteed to exist after initial render
            if (!prevChildren.length) return;
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) return;
            // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            // force reflow to put everything in position
            forceReflow();
            movedChildren.forEach((c)=>{
                const el = c.el;
                const style = el.style;
                addTransitionClass(el, moveClass);
                style.transform = style.webkitTransform = style.transitionDuration = "";
                const cb = el._moveCb = (e)=>{
                    if (e && e.target !== el) return;
                    if (!e || /transform$/.test(e.propertyName)) {
                        el.removeEventListener("transitionend", cb);
                        el._moveCb = null;
                        removeTransitionClass(el, moveClass);
                    }
                };
                el.addEventListener("transitionend", cb);
            });
        });
        return ()=>{
            const rawProps = (0, _runtimeCore.toRaw)(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || (0, _runtimeCore.Fragment);
            prevChildren = children;
            children = slots.default ? (0, _runtimeCore.getTransitionRawChildren)(slots.default()) : [];
            for(let i = 0; i < children.length; i++){
                const child = children[i];
                if (child.key != null) (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                else (0, _runtimeCore.warn)(`<TransitionGroup> children must be keyed.`);
            }
            if (prevChildren) for(let i = 0; i < prevChildren.length; i++){
                const child = prevChildren[i];
                (0, _runtimeCore.setTransitionHooks)(child, (0, _runtimeCore.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
                positionMap.set(child, child.el.getBoundingClientRect());
            }
            return (0, _runtimeCore.createVNode)(tag, null, children);
        };
    }
};
/**
 * TransitionGroup does not support "mode" so we need to remove it from the
 * props declarations, but direct delete operation is considered a side effect
 * and will make the entire transition feature non-tree-shakeable, so we do it
 * in a function and mark the function's invocation as pure.
 */ const removeMode = (props)=>delete props.mode;
/*#__PURE__*/ removeMode(TransitionGroupImpl.props);
const TransitionGroup = TransitionGroupImpl;
function callPendingCbs(c) {
    const el = c.el;
    if (el._moveCb) el._moveCb();
    if (el._enterCb) el._enterCb();
}
function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
}
function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
        const s = c.el.style;
        s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
        s.transitionDuration = "0s";
        return c;
    }
}
function hasCSSTransform(el, root, moveClass) {
    // Detect whether an element with the move class applied has
    // CSS transitions. Since the element may be inside an entering
    // transition at this very moment, we make a clone of it and remove
    // all other transition classes applied to ensure only the move class
    // is applied.
    const clone = el.cloneNode();
    if (el._vtc) el._vtc.forEach((cls)=>{
        cls.split(/\s+/).forEach((c)=>c && clone.classList.remove(c));
    });
    moveClass.split(/\s+/).forEach((c)=>c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform  } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
}
const getModelAssigner = (vnode)=>{
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return (0, _shared.isArray)(fn) ? (value)=>(0, _shared.invokeArrayFns)(fn, value) : fn;
};
function onCompositionStart(e) {
    e.target.composing = true;
}
function onCompositionEnd(e) {
    const target = e.target;
    if (target.composing) {
        target.composing = false;
        target.dispatchEvent(new Event("input"));
    }
}
// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText = {
    created (el, { modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        const castToNumber = number || vnode.props && vnode.props.type === "number";
        addEventListener(el, lazy ? "change" : "input", (e)=>{
            if (e.target.composing) return;
            let domValue = el.value;
            if (trim) domValue = domValue.trim();
            if (castToNumber) domValue = (0, _shared.looseToNumber)(domValue);
            el._assign(domValue);
        });
        if (trim) addEventListener(el, "change", ()=>{
            el.value = el.value.trim();
        });
        if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            // Safari < 10.2 & UIWebView doesn't fire compositionend when
            // switching focus before confirming composition choice
            // this also fixes the issue where some browsers e.g. iOS Chrome
            // fires "change" instead of "input" on autocomplete.
            addEventListener(el, "change", onCompositionEnd);
        }
    },
    // set value on mounted so it's after min/max for type="range"
    mounted (el, { value  }) {
        el.value = value == null ? "" : value;
    },
    beforeUpdate (el, { value , modifiers: { lazy , trim , number  }  }, vnode) {
        el._assign = getModelAssigner(vnode);
        // avoid clearing unresolved text. #2302
        if (el.composing) return;
        if (document.activeElement === el && el.type !== "range") {
            if (lazy) return;
            if (trim && el.value.trim() === value) return;
            if ((number || el.type === "number") && (0, _shared.looseToNumber)(el.value) === value) return;
        }
        const newValue = value == null ? "" : value;
        if (el.value !== newValue) el.value = newValue;
    }
};
const vModelCheckbox = {
    // #4096 array checkboxes need to be deep traversed
    deep: true,
    created (el, _, vnode) {
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign = el._assign;
            if ((0, _shared.isArray)(modelValue)) {
                const index = (0, _shared.looseIndexOf)(modelValue, elementValue);
                const found = index !== -1;
                if (checked && !found) assign(modelValue.concat(elementValue));
                else if (!checked && found) {
                    const filtered = [
                        ...modelValue
                    ];
                    filtered.splice(index, 1);
                    assign(filtered);
                }
            } else if ((0, _shared.isSet)(modelValue)) {
                const cloned = new Set(modelValue);
                if (checked) cloned.add(elementValue);
                else cloned.delete(elementValue);
                assign(cloned);
            } else assign(getCheckboxValue(el, checked));
        });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: setChecked,
    beforeUpdate (el, binding, vnode) {
        el._assign = getModelAssigner(vnode);
        setChecked(el, binding, vnode);
    }
};
function setChecked(el, { value , oldValue  }, vnode) {
    el._modelValue = value;
    if ((0, _shared.isArray)(value)) el.checked = (0, _shared.looseIndexOf)(value, vnode.props.value) > -1;
    else if ((0, _shared.isSet)(value)) el.checked = value.has(vnode.props.value);
    else if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, getCheckboxValue(el, true));
}
const vModelRadio = {
    created (el, { value  }, vnode) {
        el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
        el._assign = getModelAssigner(vnode);
        addEventListener(el, "change", ()=>{
            el._assign(getValue(el));
        });
    },
    beforeUpdate (el, { value , oldValue  }, vnode) {
        el._assign = getModelAssigner(vnode);
        if (value !== oldValue) el.checked = (0, _shared.looseEqual)(value, vnode.props.value);
    }
};
const vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created (el, { value , modifiers: { number  }  }, vnode) {
        const isSetModel = (0, _shared.isSet)(value);
        addEventListener(el, "change", ()=>{
            const selectedVal = Array.prototype.filter.call(el.options, (o)=>o.selected).map((o)=>number ? (0, _shared.looseToNumber)(getValue(o)) : getValue(o));
            el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
        });
        el._assign = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted (el, { value  }) {
        setSelected(el, value);
    },
    beforeUpdate (el, _binding, vnode) {
        el._assign = getModelAssigner(vnode);
    },
    updated (el, { value  }) {
        setSelected(el, value);
    }
};
function setSelected(el, value) {
    const isMultiple = el.multiple;
    if (isMultiple && !(0, _shared.isArray)(value) && !(0, _shared.isSet)(value)) {
        (0, _runtimeCore.warn)(`<select multiple v-model> expects an Array or Set value for its binding, ` + `but got ${Object.prototype.toString.call(value).slice(8, -1)}.`);
        return;
    }
    for(let i = 0, l = el.options.length; i < l; i++){
        const option = el.options[i];
        const optionValue = getValue(option);
        if (isMultiple) {
            if ((0, _shared.isArray)(value)) option.selected = (0, _shared.looseIndexOf)(value, optionValue) > -1;
            else option.selected = value.has(optionValue);
        } else if ((0, _shared.looseEqual)(getValue(option), value)) {
            if (el.selectedIndex !== i) el.selectedIndex = i;
            return;
        }
    }
    if (!isMultiple && el.selectedIndex !== -1) el.selectedIndex = -1;
}
// retrieve raw value set via :value bindings
function getValue(el) {
    return "_value" in el ? el._value : el.value;
}
// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el, checked) {
    const key = checked ? "_trueValue" : "_falseValue";
    return key in el ? el[key] : checked;
}
const vModelDynamic = {
    created (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "created");
    },
    mounted (el, binding, vnode) {
        callModelHook(el, binding, vnode, null, "mounted");
    },
    beforeUpdate (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
    },
    updated (el, binding, vnode, prevVNode) {
        callModelHook(el, binding, vnode, prevVNode, "updated");
    }
};
function resolveDynamicModel(tagName, type) {
    switch(tagName){
        case "SELECT":
            return vModelSelect;
        case "TEXTAREA":
            return vModelText;
        default:
            switch(type){
                case "checkbox":
                    return vModelCheckbox;
                case "radio":
                    return vModelRadio;
                default:
                    return vModelText;
            }
    }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
    const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
    const fn = modelToUse[hook];
    fn && fn(el, binding, vnode, prevVNode);
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVModelForSSR() {
    vModelText.getSSRProps = ({ value  })=>({
            value
        });
    vModelRadio.getSSRProps = ({ value  }, vnode)=>{
        if (vnode.props && (0, _shared.looseEqual)(vnode.props.value, value)) return {
            checked: true
        };
    };
    vModelCheckbox.getSSRProps = ({ value  }, vnode)=>{
        if ((0, _shared.isArray)(value)) {
            if (vnode.props && (0, _shared.looseIndexOf)(value, vnode.props.value) > -1) return {
                checked: true
            };
        } else if ((0, _shared.isSet)(value)) {
            if (vnode.props && value.has(vnode.props.value)) return {
                checked: true
            };
        } else if (value) return {
            checked: true
        };
    };
    vModelDynamic.getSSRProps = (binding, vnode)=>{
        if (typeof vnode.type !== "string") return;
        const modelToUse = resolveDynamicModel(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
        vnode.type.toUpperCase(), vnode.props && vnode.props.type);
        if (modelToUse.getSSRProps) return modelToUse.getSSRProps(binding, vnode);
    };
}
const systemModifiers = [
    "ctrl",
    "shift",
    "alt",
    "meta"
];
const modifierGuards = {
    stop: (e)=>e.stopPropagation(),
    prevent: (e)=>e.preventDefault(),
    self: (e)=>e.target !== e.currentTarget,
    ctrl: (e)=>!e.ctrlKey,
    shift: (e)=>!e.shiftKey,
    alt: (e)=>!e.altKey,
    meta: (e)=>!e.metaKey,
    left: (e)=>"button" in e && e.button !== 0,
    middle: (e)=>"button" in e && e.button !== 1,
    right: (e)=>"button" in e && e.button !== 2,
    exact: (e, modifiers)=>systemModifiers.some((m)=>e[`${m}Key`] && !modifiers.includes(m))
};
/**
 * @private
 */ const withModifiers = (fn, modifiers)=>{
    return (event, ...args)=>{
        for(let i = 0; i < modifiers.length; i++){
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers)) return;
        }
        return fn(event, ...args);
    };
};
// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
};
/**
 * @private
 */ const withKeys = (fn, modifiers)=>{
    return (event)=>{
        if (!("key" in event)) return;
        const eventKey = (0, _shared.hyphenate)(event.key);
        if (modifiers.some((k)=>k === eventKey || keyNames[k] === eventKey)) return fn(event);
    };
};
const vShow = {
    beforeMount (el, { value  }, { transition  }) {
        el._vod = el.style.display === "none" ? "" : el.style.display;
        if (transition && value) transition.beforeEnter(el);
        else setDisplay(el, value);
    },
    mounted (el, { value  }, { transition  }) {
        if (transition && value) transition.enter(el);
    },
    updated (el, { value , oldValue  }, { transition  }) {
        if (!value === !oldValue) return;
        if (transition) {
            if (value) {
                transition.beforeEnter(el);
                setDisplay(el, true);
                transition.enter(el);
            } else transition.leave(el, ()=>{
                setDisplay(el, false);
            });
        } else setDisplay(el, value);
    },
    beforeUnmount (el, { value  }) {
        setDisplay(el, value);
    }
};
function setDisplay(el, value) {
    el.style.display = value ? el._vod : "none";
}
// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
function initVShowForSSR() {
    vShow.getSSRProps = ({ value  })=>{
        if (!value) return {
            style: {
                display: "none"
            }
        };
    };
}
const rendererOptions = /*#__PURE__*/ (0, _shared.extend)({
    patchProp
}, nodeOps);
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;
let enabledHydration = false;
function ensureRenderer() {
    return renderer || (renderer = (0, _runtimeCore.createRenderer)(rendererOptions));
}
function ensureHydrationRenderer() {
    renderer = enabledHydration ? renderer : (0, _runtimeCore.createHydrationRenderer)(rendererOptions);
    enabledHydration = true;
    return renderer;
}
// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render = (...args)=>{
    ensureRenderer().render(...args);
};
const hydrate = (...args)=>{
    ensureHydrationRenderer().hydrate(...args);
};
const createApp = (...args)=>{
    const app = ensureRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (!container) return;
        const component = app._component;
        if (!(0, _shared.isFunction)(component) && !component.render && !component.template) // __UNSAFE__
        // Reason: potential execution of JS expressions in in-DOM template.
        // The user must make sure the in-DOM template is trusted. If it's
        // rendered by the server, the template should not contain any user data.
        component.template = container.innerHTML;
        // clear content before mounting
        container.innerHTML = "";
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
        }
        return proxy;
    };
    return app;
};
const createSSRApp = (...args)=>{
    const app = ensureHydrationRenderer().createApp(...args);
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
    const { mount  } = app;
    app.mount = (containerOrSelector)=>{
        const container = normalizeContainer(containerOrSelector);
        if (container) return mount(container, true, container instanceof SVGElement);
    };
    return app;
};
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, "isNativeTag", {
        value: (tag)=>(0, _shared.isHTMLTag)(tag) || (0, _shared.isSVGTag)(tag),
        writable: false
    });
}
// dev only
function injectCompilerOptionsCheck(app) {
    if ((0, _runtimeCore.isRuntimeOnly)()) {
        const isCustomElement = app.config.isCustomElement;
        Object.defineProperty(app.config, "isCustomElement", {
            get () {
                return isCustomElement;
            },
            set () {
                (0, _runtimeCore.warn)(`The \`isCustomElement\` config option is deprecated. Use ` + `\`compilerOptions.isCustomElement\` instead.`);
            }
        });
        const compilerOptions = app.config.compilerOptions;
        const msg = `The \`compilerOptions\` config option is only respected when using ` + `a build of Vue.js that includes the runtime compiler (aka "full build"). ` + `Since you are using the runtime-only build, \`compilerOptions\` ` + `must be passed to \`@vue/compiler-dom\` in the build setup instead.\n` + `- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.\n` + `- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n` + `- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
        Object.defineProperty(app.config, "compilerOptions", {
            get () {
                (0, _runtimeCore.warn)(msg);
                return compilerOptions;
            },
            set () {
                (0, _runtimeCore.warn)(msg);
            }
        });
    }
}
function normalizeContainer(container) {
    if ((0, _shared.isString)(container)) {
        const res = document.querySelector(container);
        if (!res) (0, _runtimeCore.warn)(`Failed to mount app: mount target selector "${container}" returned null.`);
        return res;
    }
    if ((0, window.ShadowRoot) && container instanceof window.ShadowRoot && container.mode === "closed") (0, _runtimeCore.warn)(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    return container;
}
let ssrDirectiveInitialized = false;
/**
 * @internal
 */ const initDirectivesForSSR = ()=>{
    if (!ssrDirectiveInitialized) {
        ssrDirectiveInitialized = true;
        initVModelForSSR();
        initVShowForSSR();
    }
};

},{"@vue/runtime-core":"lmqBl","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmqBl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>(0, _reactivity.EffectScope));
parcelHelpers.export(exports, "ReactiveEffect", ()=>(0, _reactivity.ReactiveEffect));
parcelHelpers.export(exports, "customRef", ()=>(0, _reactivity.customRef));
parcelHelpers.export(exports, "effect", ()=>(0, _reactivity.effect));
parcelHelpers.export(exports, "effectScope", ()=>(0, _reactivity.effectScope));
parcelHelpers.export(exports, "getCurrentScope", ()=>(0, _reactivity.getCurrentScope));
parcelHelpers.export(exports, "isProxy", ()=>(0, _reactivity.isProxy));
parcelHelpers.export(exports, "isReactive", ()=>(0, _reactivity.isReactive));
parcelHelpers.export(exports, "isReadonly", ()=>(0, _reactivity.isReadonly));
parcelHelpers.export(exports, "isRef", ()=>(0, _reactivity.isRef));
parcelHelpers.export(exports, "isShallow", ()=>(0, _reactivity.isShallow));
parcelHelpers.export(exports, "markRaw", ()=>(0, _reactivity.markRaw));
parcelHelpers.export(exports, "onScopeDispose", ()=>(0, _reactivity.onScopeDispose));
parcelHelpers.export(exports, "proxyRefs", ()=>(0, _reactivity.proxyRefs));
parcelHelpers.export(exports, "reactive", ()=>(0, _reactivity.reactive));
parcelHelpers.export(exports, "readonly", ()=>(0, _reactivity.readonly));
parcelHelpers.export(exports, "ref", ()=>(0, _reactivity.ref));
parcelHelpers.export(exports, "shallowReactive", ()=>(0, _reactivity.shallowReactive));
parcelHelpers.export(exports, "shallowReadonly", ()=>(0, _reactivity.shallowReadonly));
parcelHelpers.export(exports, "shallowRef", ()=>(0, _reactivity.shallowRef));
parcelHelpers.export(exports, "stop", ()=>(0, _reactivity.stop));
parcelHelpers.export(exports, "toRaw", ()=>(0, _reactivity.toRaw));
parcelHelpers.export(exports, "toRef", ()=>(0, _reactivity.toRef));
parcelHelpers.export(exports, "toRefs", ()=>(0, _reactivity.toRefs));
parcelHelpers.export(exports, "triggerRef", ()=>(0, _reactivity.triggerRef));
parcelHelpers.export(exports, "unref", ()=>(0, _reactivity.unref));
parcelHelpers.export(exports, "camelize", ()=>(0, _shared.camelize));
parcelHelpers.export(exports, "capitalize", ()=>(0, _shared.capitalize));
parcelHelpers.export(exports, "normalizeClass", ()=>(0, _shared.normalizeClass));
parcelHelpers.export(exports, "normalizeProps", ()=>(0, _shared.normalizeProps));
parcelHelpers.export(exports, "normalizeStyle", ()=>(0, _shared.normalizeStyle));
parcelHelpers.export(exports, "toDisplayString", ()=>(0, _shared.toDisplayString));
parcelHelpers.export(exports, "toHandlerKey", ()=>(0, _shared.toHandlerKey));
parcelHelpers.export(exports, "BaseTransition", ()=>BaseTransition);
parcelHelpers.export(exports, "Comment", ()=>Comment);
parcelHelpers.export(exports, "Fragment", ()=>Fragment);
parcelHelpers.export(exports, "KeepAlive", ()=>KeepAlive);
parcelHelpers.export(exports, "Static", ()=>Static);
parcelHelpers.export(exports, "Suspense", ()=>Suspense);
parcelHelpers.export(exports, "Teleport", ()=>Teleport);
parcelHelpers.export(exports, "Text", ()=>Text);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "callWithAsyncErrorHandling", ()=>callWithAsyncErrorHandling);
parcelHelpers.export(exports, "callWithErrorHandling", ()=>callWithErrorHandling);
parcelHelpers.export(exports, "cloneVNode", ()=>cloneVNode);
parcelHelpers.export(exports, "compatUtils", ()=>compatUtils);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "createBlock", ()=>createBlock);
parcelHelpers.export(exports, "createCommentVNode", ()=>createCommentVNode);
parcelHelpers.export(exports, "createElementBlock", ()=>createElementBlock);
parcelHelpers.export(exports, "createElementVNode", ()=>createBaseVNode);
parcelHelpers.export(exports, "createHydrationRenderer", ()=>createHydrationRenderer);
parcelHelpers.export(exports, "createPropsRestProxy", ()=>createPropsRestProxy);
parcelHelpers.export(exports, "createRenderer", ()=>createRenderer);
parcelHelpers.export(exports, "createSlots", ()=>createSlots);
parcelHelpers.export(exports, "createStaticVNode", ()=>createStaticVNode);
parcelHelpers.export(exports, "createTextVNode", ()=>createTextVNode);
parcelHelpers.export(exports, "createVNode", ()=>createVNode);
parcelHelpers.export(exports, "defineAsyncComponent", ()=>defineAsyncComponent);
parcelHelpers.export(exports, "defineComponent", ()=>defineComponent);
parcelHelpers.export(exports, "defineEmits", ()=>defineEmits);
parcelHelpers.export(exports, "defineExpose", ()=>defineExpose);
parcelHelpers.export(exports, "defineProps", ()=>defineProps);
parcelHelpers.export(exports, "devtools", ()=>devtools);
parcelHelpers.export(exports, "getCurrentInstance", ()=>getCurrentInstance);
parcelHelpers.export(exports, "getTransitionRawChildren", ()=>getTransitionRawChildren);
parcelHelpers.export(exports, "guardReactiveProps", ()=>guardReactiveProps);
parcelHelpers.export(exports, "h", ()=>h);
parcelHelpers.export(exports, "handleError", ()=>handleError);
parcelHelpers.export(exports, "initCustomFormatter", ()=>initCustomFormatter);
parcelHelpers.export(exports, "inject", ()=>inject);
parcelHelpers.export(exports, "isMemoSame", ()=>isMemoSame);
parcelHelpers.export(exports, "isRuntimeOnly", ()=>isRuntimeOnly);
parcelHelpers.export(exports, "isVNode", ()=>isVNode);
parcelHelpers.export(exports, "mergeDefaults", ()=>mergeDefaults);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "onActivated", ()=>onActivated);
parcelHelpers.export(exports, "onBeforeMount", ()=>onBeforeMount);
parcelHelpers.export(exports, "onBeforeUnmount", ()=>onBeforeUnmount);
parcelHelpers.export(exports, "onBeforeUpdate", ()=>onBeforeUpdate);
parcelHelpers.export(exports, "onDeactivated", ()=>onDeactivated);
parcelHelpers.export(exports, "onErrorCaptured", ()=>onErrorCaptured);
parcelHelpers.export(exports, "onMounted", ()=>onMounted);
parcelHelpers.export(exports, "onRenderTracked", ()=>onRenderTracked);
parcelHelpers.export(exports, "onRenderTriggered", ()=>onRenderTriggered);
parcelHelpers.export(exports, "onServerPrefetch", ()=>onServerPrefetch);
parcelHelpers.export(exports, "onUnmounted", ()=>onUnmounted);
parcelHelpers.export(exports, "onUpdated", ()=>onUpdated);
parcelHelpers.export(exports, "openBlock", ()=>openBlock);
parcelHelpers.export(exports, "popScopeId", ()=>popScopeId);
parcelHelpers.export(exports, "provide", ()=>provide);
parcelHelpers.export(exports, "pushScopeId", ()=>pushScopeId);
parcelHelpers.export(exports, "queuePostFlushCb", ()=>queuePostFlushCb);
parcelHelpers.export(exports, "registerRuntimeCompiler", ()=>registerRuntimeCompiler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "renderSlot", ()=>renderSlot);
parcelHelpers.export(exports, "resolveComponent", ()=>resolveComponent);
parcelHelpers.export(exports, "resolveDirective", ()=>resolveDirective);
parcelHelpers.export(exports, "resolveDynamicComponent", ()=>resolveDynamicComponent);
parcelHelpers.export(exports, "resolveFilter", ()=>resolveFilter);
parcelHelpers.export(exports, "resolveTransitionHooks", ()=>resolveTransitionHooks);
parcelHelpers.export(exports, "setBlockTracking", ()=>setBlockTracking);
parcelHelpers.export(exports, "setDevtoolsHook", ()=>setDevtoolsHook);
parcelHelpers.export(exports, "setTransitionHooks", ()=>setTransitionHooks);
parcelHelpers.export(exports, "ssrContextKey", ()=>ssrContextKey);
parcelHelpers.export(exports, "ssrUtils", ()=>ssrUtils);
parcelHelpers.export(exports, "toHandlers", ()=>toHandlers);
parcelHelpers.export(exports, "transformVNodeArgs", ()=>transformVNodeArgs);
parcelHelpers.export(exports, "useAttrs", ()=>useAttrs);
parcelHelpers.export(exports, "useSSRContext", ()=>useSSRContext);
parcelHelpers.export(exports, "useSlots", ()=>useSlots);
parcelHelpers.export(exports, "useTransitionState", ()=>useTransitionState);
parcelHelpers.export(exports, "version", ()=>version);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "watch", ()=>watch);
parcelHelpers.export(exports, "watchEffect", ()=>watchEffect);
parcelHelpers.export(exports, "watchPostEffect", ()=>watchPostEffect);
parcelHelpers.export(exports, "watchSyncEffect", ()=>watchSyncEffect);
parcelHelpers.export(exports, "withAsyncContext", ()=>withAsyncContext);
parcelHelpers.export(exports, "withCtx", ()=>withCtx);
parcelHelpers.export(exports, "withDefaults", ()=>withDefaults);
parcelHelpers.export(exports, "withDirectives", ()=>withDirectives);
parcelHelpers.export(exports, "withMemo", ()=>withMemo);
parcelHelpers.export(exports, "withScopeId", ()=>withScopeId);
var _reactivity = require("@vue/reactivity");
var _shared = require("@vue/shared");
const stack = [];
function pushWarningContext(vnode) {
    stack.push(vnode);
}
function popWarningContext() {
    stack.pop();
}
function warn(msg, ...args) {
    // avoid props formatting or warn handler tracking deps that might be mutated
    // during patch, leading to infinite recursion.
    (0, _reactivity.pauseTracking)();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) callWithErrorHandling(appWarnHandler, instance, 11 /* ErrorCodes.APP_WARN_HANDLER */ , [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode  })=>`at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
    ]);
    else {
        const warnArgs = [
            `[Vue warn]: ${msg}`,
            ...args
        ];
        /* istanbul ignore if */ if (trace.length && // avoid spamming console during tests
        true) warnArgs.push(`\n`, ...formatTrace(trace));
        console.warn(...warnArgs);
    }
    (0, _reactivity.resetTracking)();
}
function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) return [];
    // we can't just use the stack because it will be incomplete during updates
    // that did not start from the root. Re-construct the parent chain using
    // instance parent pointers.
    const normalizedStack = [];
    while(currentVNode){
        const last = normalizedStack[0];
        if (last && last.vnode === currentVNode) last.recurseCount++;
        else normalizedStack.push({
            vnode: currentVNode,
            recurseCount: 0
        });
        const parentInstance = currentVNode.component && currentVNode.component.parent;
        currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
}
/* istanbul ignore next */ function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i)=>{
        logs.push(...i === 0 ? [] : [
            `\n`
        ], ...formatTraceEntry(entry));
    });
    return logs;
}
function formatTraceEntry({ vnode , recurseCount  }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [
        open,
        ...formatProps(vnode.props),
        close
    ] : [
        open + close
    ];
}
/* istanbul ignore next */ function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key)=>{
        res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) res.push(` ...`);
    return res;
}
/* istanbul ignore next */ function formatProp(key, value, raw) {
    if ((0, _shared.isString)(value)) {
        value = JSON.stringify(value);
        return raw ? value : [
            `${key}=${value}`
        ];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) return raw ? value : [
        `${key}=${value}`
    ];
    else if ((0, _reactivity.isRef)(value)) {
        value = formatProp(key, (0, _reactivity.toRaw)(value.value), true);
        return raw ? value : [
            `${key}=Ref<`,
            value,
            `>`
        ];
    } else if ((0, _shared.isFunction)(value)) return [
        `${key}=fn${value.name ? `<${value.name}>` : ``}`
    ];
    else {
        value = (0, _reactivity.toRaw)(value);
        return raw ? value : [
            `${key}=`,
            value
        ];
    }
}
/**
 * @internal
 */ function assertNumber(val, type) {
    if (val === undefined) return;
    else if (typeof val !== "number") warn(`${type} is not a valid number - ` + `got ${JSON.stringify(val)}.`);
    else if (isNaN(val)) warn(`${type} is NaN - ` + "the duration expression might be incorrect.");
}
const ErrorTypeStrings = {
    ["sp" /* LifecycleHooks.SERVER_PREFETCH */ ]: "serverPrefetch hook",
    ["bc" /* LifecycleHooks.BEFORE_CREATE */ ]: "beforeCreate hook",
    ["c" /* LifecycleHooks.CREATED */ ]: "created hook",
    ["bm" /* LifecycleHooks.BEFORE_MOUNT */ ]: "beforeMount hook",
    ["m" /* LifecycleHooks.MOUNTED */ ]: "mounted hook",
    ["bu" /* LifecycleHooks.BEFORE_UPDATE */ ]: "beforeUpdate hook",
    ["u" /* LifecycleHooks.UPDATED */ ]: "updated",
    ["bum" /* LifecycleHooks.BEFORE_UNMOUNT */ ]: "beforeUnmount hook",
    ["um" /* LifecycleHooks.UNMOUNTED */ ]: "unmounted hook",
    ["a" /* LifecycleHooks.ACTIVATED */ ]: "activated hook",
    ["da" /* LifecycleHooks.DEACTIVATED */ ]: "deactivated hook",
    ["ec" /* LifecycleHooks.ERROR_CAPTURED */ ]: "errorCaptured hook",
    ["rtc" /* LifecycleHooks.RENDER_TRACKED */ ]: "renderTracked hook",
    ["rtg" /* LifecycleHooks.RENDER_TRIGGERED */ ]: "renderTriggered hook",
    [0 /* ErrorCodes.SETUP_FUNCTION */ ]: "setup function",
    [1 /* ErrorCodes.RENDER_FUNCTION */ ]: "render function",
    [2 /* ErrorCodes.WATCH_GETTER */ ]: "watcher getter",
    [3 /* ErrorCodes.WATCH_CALLBACK */ ]: "watcher callback",
    [4 /* ErrorCodes.WATCH_CLEANUP */ ]: "watcher cleanup function",
    [5 /* ErrorCodes.NATIVE_EVENT_HANDLER */ ]: "native event handler",
    [6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */ ]: "component event handler",
    [7 /* ErrorCodes.VNODE_HOOK */ ]: "vnode hook",
    [8 /* ErrorCodes.DIRECTIVE_HOOK */ ]: "directive hook",
    [9 /* ErrorCodes.TRANSITION_HOOK */ ]: "transition hook",
    [10 /* ErrorCodes.APP_ERROR_HANDLER */ ]: "app errorHandler",
    [11 /* ErrorCodes.APP_WARN_HANDLER */ ]: "app warnHandler",
    [12 /* ErrorCodes.FUNCTION_REF */ ]: "ref function",
    [13 /* ErrorCodes.ASYNC_COMPONENT_LOADER */ ]: "async component loader",
    [14 /* ErrorCodes.SCHEDULER */ ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
        res = args ? fn(...args) : fn();
    } catch (err) {
        handleError(err, instance, type);
    }
    return res;
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
    if ((0, _shared.isFunction)(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && (0, _shared.isPromise)(res)) res.catch((err)=>{
            handleError(err, instance, type);
        });
        return res;
    }
    const values = [];
    for(let i = 0; i < fn.length; i++)values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    return values;
}
function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
        let cur = instance.parent;
        // the exposed instance is the render proxy to keep it consistent with 2.x
        const exposedInstance = instance.proxy;
        // in production the hook receives only the error code
        const errorInfo = (0, ErrorTypeStrings[type]);
        while(cur){
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) for(let i = 0; i < errorCapturedHooks.length; i++){
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) return;
            }
            cur = cur.parent;
        }
        // app-level handling
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
            callWithErrorHandling(appErrorHandler, null, 10 /* ErrorCodes.APP_ERROR_HANDLER */ , [
                err,
                exposedInstance,
                errorInfo
            ]);
            return;
        }
    }
    logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
    {
        const info = ErrorTypeStrings[type];
        if (contextVNode) pushWarningContext(contextVNode);
        warn(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
        if (contextVNode) popWarningContext();
        // crash in dev by default so it's more noticeable
        if (throwInDev) throw err;
        else console.error(err);
    }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /*#__PURE__*/ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick(fn) {
    const p = currentFlushPromise || resolvedPromise;
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id) {
    // the start index should be `flushIndex + 1`
    let start = flushIndex + 1;
    let end = queue.length;
    while(start < end){
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
}
function queueJob(job) {
    // the dedupe search uses the startIndex argument of Array.includes()
    // by default the search index includes the current job that is being run
    // so it cannot recursively trigger itself again.
    // if the job is a watch() callback, the search will start with a +1 index to
    // allow it recursively trigger itself - it is the user's responsibility to
    // ensure it doesn't end up in an infinite loop.
    if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) queue.push(job);
        else queue.splice(findInsertionIndex(job.id), 0, job);
        queueFlush();
    }
}
function queueFlush() {
    if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
    }
}
function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) queue.splice(i, 1);
}
function queuePostFlushCb(cb) {
    if (!(0, _shared.isArray)(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) pendingPostFlushCbs.push(cb);
    } else // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingPostFlushCbs.push(...cb);
    queueFlush();
}
function flushPreFlushCbs(seen, // if currently flushing, skip the current job itself
i = isFlushing ? flushIndex + 1 : 0) {
    seen = seen || new Map();
    for(; i < queue.length; i++){
        const cb = queue[i];
        if (cb && cb.pre) {
            if (checkRecursiveUpdates(seen, cb)) continue;
            queue.splice(i, 1);
            i--;
            cb();
        }
    }
}
function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
        const deduped = [
            ...new Set(pendingPostFlushCbs)
        ];
        pendingPostFlushCbs.length = 0;
        // #1947 already has active queue, nested flushPostFlushCbs call
        if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
        }
        activePostFlushCbs = deduped;
        seen = seen || new Map();
        activePostFlushCbs.sort((a, b)=>getId(a) - getId(b));
        for(postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++){
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) continue;
            activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
    }
}
const getId = (job)=>job.id == null ? Infinity : job.id;
const comparator = (a, b)=>{
    const diff = getId(a) - getId(b);
    if (diff === 0) {
        if (a.pre && !b.pre) return -1;
        if (b.pre && !a.pre) return 1;
    }
    return diff;
};
function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    seen = seen || new Map();
    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child so its render effect will have smaller
    //    priority number)
    // 2. If a component is unmounted during a parent component's update,
    //    its update can be skipped.
    queue.sort(comparator);
    // conditional usage of checkRecursiveUpdate must be determined out of
    // try ... catch block since Rollup by default de-optimizes treeshaking
    // inside try-catch. This can leave all warning code unshaked. Although
    // they would get eventually shaken by a minifier like terser, some minifiers
    // would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
    const check = (job)=>checkRecursiveUpdates(seen, job);
    try {
        for(flushIndex = 0; flushIndex < queue.length; flushIndex++){
            const job = queue[flushIndex];
            if (job && job.active !== false) {
                if (check(job)) continue;
                // console.log(`running:`, job.id)
                callWithErrorHandling(job, null, 14 /* ErrorCodes.SCHEDULER */ );
            }
        }
    } finally{
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs(seen);
        isFlushing = false;
        currentFlushPromise = null;
        // some postFlushCb queued jobs!
        // keep flushing until it drains.
        if (queue.length || pendingPostFlushCbs.length) flushJobs(seen);
    }
}
function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) seen.set(fn, 1);
    else {
        const count = seen.get(fn);
        if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. ` + `This means you have a reactive effect that is mutating its own ` + `dependencies and thus recursively triggering itself. Possible sources ` + `include component template, render function, updated hook or ` + `watcher source function.`);
            return true;
        } else seen.set(fn, count + 1);
    }
}
/* eslint-disable no-restricted-globals */ let isHmrUpdating = false;
const hmrDirtyComponents = new Set();
(0, _shared.getGlobalThis)().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
};
const map = new Map();
function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
        createRecord(id, instance.type);
        record = map.get(id);
    }
    record.instances.add(instance);
}
function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
    if (map.has(id)) return false;
    map.set(id, {
        initialDef: normalizeClassComponent(initialDef),
        instances: new Set()
    });
    return true;
}
function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) return;
    // update initial record (for not-yet-rendered component)
    record.initialDef.render = newRender;
    [
        ...record.instances
    ].forEach((instance)=>{
        if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
        }
        instance.renderCache = [];
        // this flag forces child components with slot content to update
        isHmrUpdating = true;
        instance.update();
        isHmrUpdating = false;
    });
}
function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    // update initial def (for not-yet-rendered components)
    updateComponentDef(record.initialDef, newComp);
    // create a snapshot which avoids the set being mutated during updates
    const instances = [
        ...record.instances
    ];
    for (const instance of instances){
        const oldComp = normalizeClassComponent(instance.type);
        if (!hmrDirtyComponents.has(oldComp)) {
            // 1. Update existing comp definition to match new one
            if (oldComp !== record.initialDef) updateComponentDef(oldComp, newComp);
            // 2. mark definition dirty. This forces the renderer to replace the
            // component on patch.
            hmrDirtyComponents.add(oldComp);
        }
        // 3. invalidate options resolution cache
        instance.appContext.optionsCache.delete(instance.type);
        // 4. actually update
        if (instance.ceReload) {
            // custom element
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
        } else if (instance.parent) // 4. Force the parent instance to re-render. This will cause all updated
        // components to be unmounted and re-mounted. Queue the update so that we
        // don't end up forcing the same parent to re-render multiple times.
        queueJob(instance.parent.update);
        else if (instance.appContext.reload) // root instance mounted via createApp() has a reload method
        instance.appContext.reload();
        else if (typeof window !== "undefined") // root instance inside tree created via raw render(). Force reload.
        window.location.reload();
        else console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    // 5. make sure to cleanup dirty hmr components after update
    queuePostFlushCb(()=>{
        for (const instance of instances)hmrDirtyComponents.delete(normalizeClassComponent(instance.type));
    });
}
function updateComponentDef(oldComp, newComp) {
    (0, _shared.extend)(oldComp, newComp);
    for(const key in oldComp)if (key !== "__file" && !(key in newComp)) delete oldComp[key];
}
function tryWrap(fn) {
    return (id, arg)=>{
        try {
            return fn(id, arg);
        } catch (e) {
            console.error(e);
            console.warn(`[HMR] Something went wrong during Vue component hot-reload. ` + `Full reload required.`);
        }
    };
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
    if (devtools) devtools.emit(event, ...args);
    else if (!devtoolsNotInstalled) buffer.push({
        event,
        args
    });
}
function setDevtoolsHook(hook, target) {
    var _a, _b;
    devtools = hook;
    if (devtools) {
        devtools.enabled = true;
        buffer.forEach(({ event , args  })=>devtools.emit(event, ...args));
        buffer = [];
    } else if (// handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.includes("jsdom"))) {
        const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        replay.push((newHook)=>{
            setDevtoolsHook(newHook, target);
        });
        // clear buffer after 3s - the user probably doesn't have devtools installed
        // at all, and keeping the buffer will cause memory leaks (#4738)
        setTimeout(()=>{
            if (!devtools) {
                target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
                devtoolsNotInstalled = true;
                buffer = [];
            }
        }, 3000);
    } else {
        // non-browser env, assume not installed
        devtoolsNotInstalled = true;
        buffer = [];
    }
}
function devtoolsInitApp(app, version) {
    emit$1("app:init" /* DevtoolsHooks.APP_INIT */ , app, version, {
        Fragment,
        Text,
        Comment,
        Static
    });
}
function devtoolsUnmountApp(app) {
    emit$1("app:unmount" /* DevtoolsHooks.APP_UNMOUNT */ , app);
}
const devtoolsComponentAdded = /*#__PURE__*/ createDevtoolsComponentHook("component:added" /* DevtoolsHooks.COMPONENT_ADDED */ );
const devtoolsComponentUpdated = /*#__PURE__*/ createDevtoolsComponentHook("component:updated" /* DevtoolsHooks.COMPONENT_UPDATED */ );
const _devtoolsComponentRemoved = /*#__PURE__*/ createDevtoolsComponentHook("component:removed" /* DevtoolsHooks.COMPONENT_REMOVED */ );
const devtoolsComponentRemoved = (component)=>{
    if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools.cleanupBuffer(component)) _devtoolsComponentRemoved(component);
};
function createDevtoolsComponentHook(hook) {
    return (component)=>{
        emit$1(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
    };
}
const devtoolsPerfStart = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:start" /* DevtoolsHooks.PERFORMANCE_START */ );
const devtoolsPerfEnd = /*#__PURE__*/ createDevtoolsPerformanceHook("perf:end" /* DevtoolsHooks.PERFORMANCE_END */ );
function createDevtoolsPerformanceHook(hook) {
    return (component, type, time)=>{
        emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
}
function devtoolsComponentEmit(component, event, params) {
    emit$1("component:emit" /* DevtoolsHooks.COMPONENT_EMIT */ , component.appContext.app, component, event, params);
}
function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || (0, _shared.EMPTY_OBJ);
    {
        const { emitsOptions , propsOptions: [propsOptions]  } = instance;
        if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
                if (!propsOptions || !((0, _shared.toHandlerKey)(event) in propsOptions)) warn(`Component emitted event "${event}" but it is neither declared in ` + `the emits option nor as an "${(0, _shared.toHandlerKey)(event)}" prop.`);
            } else {
                const validator = emitsOptions[event];
                if ((0, _shared.isFunction)(validator)) {
                    const isValid = validator(...rawArgs);
                    if (!isValid) warn(`Invalid event arguments: event validation failed for event "${event}".`);
                }
            }
        }
    }
    let args = rawArgs;
    const isModelListener = event.startsWith("update:");
    // for v-model update:xxx events, apply modifiers on args
    const modelArg = isModelListener && event.slice(7);
    if (modelArg && modelArg in props) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number , trim  } = props[modifiersKey] || (0, _shared.EMPTY_OBJ);
        if (trim) args = rawArgs.map((a)=>(0, _shared.isString)(a) ? a.trim() : a);
        if (number) args = rawArgs.map((0, _shared.looseToNumber));
    }
    devtoolsComponentEmit(instance, event, args);
    {
        const lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && props[(0, _shared.toHandlerKey)(lowerCaseEvent)]) warn(`Event "${lowerCaseEvent}" is emitted in component ` + `${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". ` + `Note that HTML attributes are case-insensitive and you cannot use ` + `v-on to listen to camelCase events when using in-DOM templates. ` + `You should probably use "${(0, _shared.hyphenate)(event)}" instead of "${event}".`);
    }
    let handlerName;
    let handler = props[handlerName = (0, _shared.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
    props[handlerName = (0, _shared.toHandlerKey)((0, _shared.camelize)(event))];
    // for v-model update:xxx events, also trigger kebab-case equivalent
    // for props passed via kebab-case
    if (!handler && isModelListener) handler = props[handlerName = (0, _shared.toHandlerKey)((0, _shared.hyphenate)(event))];
    if (handler) callWithAsyncErrorHandling(handler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */ , args);
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
        if (!instance.emitted) instance.emitted = {};
        else if (instance.emitted[handlerName]) return;
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6 /* ErrorCodes.COMPONENT_EVENT_HANDLER */ , args);
    }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== undefined) return cached;
    const raw = comp.emits;
    let normalized = {};
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendEmits = (raw)=>{
            const normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);
            if (normalizedFromExtend) {
                hasExtends = true;
                (0, _shared.extend)(normalized, normalizedFromExtend);
            }
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendEmits);
        if (comp.extends) extendEmits(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendEmits);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, null);
        return null;
    }
    if ((0, _shared.isArray)(raw)) raw.forEach((key)=>normalized[key] = null);
    else (0, _shared.extend)(normalized, raw);
    if ((0, _shared.isObject)(comp)) cache.set(comp, normalized);
    return normalized;
}
// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options, key) {
    if (!options || !(0, _shared.isOn)(key)) return false;
    key = key.slice(2).replace(/Once$/, "");
    return (0, _shared.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0, _shared.hasOwn)(options, (0, _shared.hyphenate)(key)) || (0, _shared.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */ let currentRenderingInstance = null;
let currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */ function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */ function pushScopeId(id) {
    currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */ function popScopeId() {
    currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */ const withScopeId = (_id)=>withCtx;
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */ function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot // false only
) {
    if (!ctx) return fn;
    // already normalized
    if (fn._n) return fn;
    const renderFnWithContext = (...args)=>{
        // If a user calls a compiled slot inside a template expression (#1745), it
        // can mess up block tracking, so by default we disable block tracking and
        // force bail out when invoking a compiled slot (indicated by the ._d flag).
        // This isn't necessary if rendering a compiled `<slot>`, so we flip the
        // ._d flag off when invoking the wrapped fn inside `renderSlot`.
        if (renderFnWithContext._d) setBlockTracking(-1);
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
            res = fn(...args);
        } finally{
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) setBlockTracking(1);
        }
        devtoolsComponentUpdated(ctx);
        return res;
    };
    // mark normalized to avoid duplicated wrapping
    renderFnWithContext._n = true;
    // mark this as compiled by default
    // this is used in vnode.ts -> normalizeChildren() to set the slot
    // rendering flag.
    renderFnWithContext._c = true;
    // disable block tracking by default
    renderFnWithContext._d = true;
    return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */ let accessedAttrs = false;
function markAttrsAccessed() {
    accessedAttrs = true;
}
function renderComponentRoot(instance) {
    const { type: Component , vnode , proxy , withProxy , props , propsOptions: [propsOptions] , slots , attrs , emit , render , renderCache , data , setupState , ctx , inheritAttrs  } = instance;
    let result;
    let fallthroughAttrs;
    const prev = setCurrentRenderingInstance(instance);
    accessedAttrs = false;
    try {
        if (vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */ ) {
            // withProxy is a proxy with a different `has` trap only for
            // runtime-compiled render functions using `with` block.
            const proxyToUse = withProxy || proxy;
            result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
            fallthroughAttrs = attrs;
        } else {
            // functional
            const render = Component;
            // in dev, mark attrs accessed if optional props (attrs === props)
            if (attrs === props) markAttrsAccessed();
            result = normalizeVNode(render.length > 1 ? render(props, {
                get attrs () {
                    markAttrsAccessed();
                    return attrs;
                },
                slots,
                emit
            }) : render(props, null));
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
    } catch (err) {
        blockStack.length = 0;
        handleError(err, instance, 1 /* ErrorCodes.RENDER_FUNCTION */ );
        result = createVNode(Comment);
    }
    // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment
    let root = result;
    let setRoot = undefined;
    if (result.patchFlag > 0 && result.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */ ) [root, setRoot] = getChildRoot(result);
    if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag  } = root;
        if (keys.length) {
            if (shapeFlag & 7 /* ShapeFlags.COMPONENT */ ) {
                if (propsOptions && keys.some((0, _shared.isModelListener))) // If a v-model listener (onUpdate:xxx) has a corresponding declared
                // prop, it indicates this component expects to handle v-model and
                // it should not fallthrough.
                // related: #1543, #1643, #1989
                fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
                root = cloneVNode(root, fallthroughAttrs);
            } else if (!accessedAttrs && root.type !== Comment) {
                const allAttrs = Object.keys(attrs);
                const eventAttrs = [];
                const extraAttrs = [];
                for(let i = 0, l = allAttrs.length; i < l; i++){
                    const key = allAttrs[i];
                    if ((0, _shared.isOn)(key)) // ignore v-model handlers when they fail to fallthrough
                    {
                        if (!(0, _shared.isModelListener)(key)) // remove `on`, lowercase first letter to reflect event casing
                        // accurately
                        eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                    } else extraAttrs.push(key);
                }
                if (extraAttrs.length) warn(`Extraneous non-props attributes (` + `${extraAttrs.join(", ")}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes.`);
                if (eventAttrs.length) warn(`Extraneous non-emits event listeners (` + `${eventAttrs.join(", ")}) ` + `were passed to component but could not be automatically inherited ` + `because component renders fragment or text root nodes. ` + `If the listener is intended to be a component custom event listener only, ` + `declare it using the "emits" option.`);
            }
        }
    }
    // inherit directives
    if (vnode.dirs) {
        if (!isElementRoot(root)) warn(`Runtime directive used on component with non-element root node. ` + `The directives will not function as intended.`);
        // clone before mutating since the root may be a hoisted vnode
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    // inherit transition data
    if (vnode.transition) {
        if (!isElementRoot(root)) warn(`Component inside <Transition> renders non-element root node ` + `that cannot be animated.`);
        root.transition = vnode.transition;
    }
    if (setRoot) setRoot(root);
    else result = root;
    setCurrentRenderingInstance(prev);
    return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */ const getChildRoot = (vnode)=>{
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) return [
        vnode,
        undefined
    ];
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot)=>{
        rawChildren[index] = updatedRoot;
        if (dynamicChildren) {
            if (dynamicIndex > -1) dynamicChildren[dynamicIndex] = updatedRoot;
            else if (updatedRoot.patchFlag > 0) vnode.dynamicChildren = [
                ...dynamicChildren,
                updatedRoot
            ];
        }
    };
    return [
        normalizeVNode(childRoot),
        setRoot
    ];
};
function filterSingleRoot(children) {
    let singleRoot;
    for(let i = 0; i < children.length; i++){
        const child = children[i];
        if (isVNode(child)) // ignore user comment
        {
            if (child.type !== Comment || child.children === "v-if") {
                if (singleRoot) // has more than 1 non-comment child, return now
                return;
                else singleRoot = child;
            }
        } else return;
    }
    return singleRoot;
}
const getFunctionalFallthrough = (attrs)=>{
    let res;
    for(const key in attrs)if (key === "class" || key === "style" || (0, _shared.isOn)(key)) (res || (res = {}))[key] = attrs[key];
    return res;
};
const filterModelListeners = (attrs, props)=>{
    const res = {};
    for(const key in attrs)if (!(0, _shared.isModelListener)(key) || !(key.slice(9) in props)) res[key] = attrs[key];
    return res;
};
const isElementRoot = (vnode)=>{
    return vnode.shapeFlag & 7 /* ShapeFlags.ELEMENT */  || vnode.type === Comment // potential v-if branch switch
    ;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps , children: prevChildren , component  } = prevVNode;
    const { props: nextProps , children: nextChildren , patchFlag  } = nextVNode;
    const emits = component.emitsOptions;
    // Parent component's render function was hot-updated. Since this may have
    // caused the child component's slots content to have changed, we need to
    // force the child to update as well.
    if ((prevChildren || nextChildren) && isHmrUpdating) return true;
    // force child update for runtime directive or transition on component vnode.
    if (nextVNode.dirs || nextVNode.transition) return true;
    if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024 /* PatchFlags.DYNAMIC_SLOTS */ ) // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
        if (patchFlag & 16 /* PatchFlags.FULL_PROPS */ ) {
            if (!prevProps) return !!nextProps;
            // presence of this flag indicates props are always non-null
            return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8 /* PatchFlags.PROPS */ ) {
            const dynamicProps = nextVNode.dynamicProps;
            for(let i = 0; i < dynamicProps.length; i++){
                const key = dynamicProps[i];
                if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) return true;
            }
        }
    } else {
        // this path is only taken by manually written render functions
        // so presence of any children leads to a forced update
        if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) return true;
        }
        if (prevProps === nextProps) return false;
        if (!prevProps) return !!nextProps;
        if (!nextProps) return true;
        return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) return true;
    for(let i = 0; i < nextKeys.length; i++){
        const key = nextKeys[i];
        if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) return true;
    }
    return false;
}
function updateHOCHostEl({ vnode , parent  }, el // HostNode
) {
    while(parent && parent.subTree === vnode){
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
    }
}
const isSuspense = (type)=>type.__isSuspense;
// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
const SuspenseImpl = {
    name: "Suspense",
    // In order to make Suspense tree-shakable, we need to avoid importing it
    // directly in the renderer. The renderer checks for the __isSuspense flag
    // on a vnode's type and calls the `process` method, passing in renderer
    // internals.
    __isSuspense: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
    rendererInternals) {
        if (n1 == null) mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
        else patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    },
    hydrate: hydrateSuspense,
    create: createSuspenseBoundary,
    normalize: normalizeSuspenseChildren
};
// Force-casted public typing for h and TSX props inference
const Suspense = SuspenseImpl;
function triggerEvent(vnode, name) {
    const eventListener = vnode.props && vnode.props[name];
    if ((0, _shared.isFunction)(eventListener)) eventListener();
}
function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
    const { p: patch , o: { createElement  }  } = rendererInternals;
    const hiddenContainer = createElement("div");
    const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals);
    // start mounting the content subtree in an off-dom container
    patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds);
    // now check if we have encountered any async deps
    if (suspense.deps > 0) {
        // has async
        // invoke @fallback event
        triggerEvent(vnode, "onPending");
        triggerEvent(vnode, "onFallback");
        // mount the fallback tree
        patch(null, vnode.ssFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds);
        setActiveBranch(suspense, vnode.ssFallback);
    } else // Suspense has no async deps. Just resolve.
    suspense.resolve();
}
function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch , um: unmount , o: { createElement  }  }) {
    const suspense = n2.suspense = n1.suspense;
    suspense.vnode = n2;
    n2.el = n1.el;
    const newBranch = n2.ssContent;
    const newFallback = n2.ssFallback;
    const { activeBranch , pendingBranch , isInFallback , isHydrating  } = suspense;
    if (pendingBranch) {
        suspense.pendingBranch = newBranch;
        if (isSameVNodeType(newBranch, pendingBranch)) {
            // same root type but content may have changed.
            patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
            if (suspense.deps <= 0) suspense.resolve();
            else if (isInFallback) {
                patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, newFallback);
            }
        } else {
            // toggled before pending tree is resolved
            suspense.pendingId++;
            if (isHydrating) {
                // if toggled before hydration is finished, the current DOM tree is
                // no longer valid. set it as the active branch so it will be unmounted
                // when resolved
                suspense.isHydrating = false;
                suspense.activeBranch = pendingBranch;
            } else unmount(pendingBranch, parentComponent, suspense);
            // increment pending ID. this is used to invalidate async callbacks
            // reset suspense state
            suspense.deps = 0;
            // discard effects from pending branch
            suspense.effects.length = 0;
            // discard previous container
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
                // already in fallback state
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
                else {
                    patch(activeBranch, newFallback, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                    setActiveBranch(suspense, newFallback);
                }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
                // toggled "back" to current active branch
                patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                // force resolve
                suspense.resolve(true);
            } else {
                // switched to a 3rd branch
                patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
                if (suspense.deps <= 0) suspense.resolve();
            }
        }
    } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // root did not change, just normal patch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newBranch);
    } else {
        // root node toggled
        // invoke @pending event
        triggerEvent(n2, "onPending");
        // mount pending branch in off-dom container
        suspense.pendingBranch = newBranch;
        suspense.pendingId++;
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);
        if (suspense.deps <= 0) // incoming branch has no async deps, resolve now.
        suspense.resolve();
        else {
            const { timeout , pendingId  } = suspense;
            if (timeout > 0) setTimeout(()=>{
                if (suspense.pendingId === pendingId) suspense.fallback(newFallback);
            }, timeout);
            else if (timeout === 0) suspense.fallback(newFallback);
        }
    }
}
let hasWarned = false;
function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
    /* istanbul ignore if */ if (!hasWarned) {
        hasWarned = true;
        // @ts-ignore `console.info` cannot be null error
        console[console.info ? "info" : "log"](`<Suspense> is an experimental feature and its API will likely change.`);
    }
    const { p: patch , m: move , um: unmount , n: next , o: { parentNode , remove  }  } = rendererInternals;
    const timeout = vnode.props ? (0, _shared.toNumber)(vnode.props.timeout) : undefined;
    assertNumber(timeout, `Suspense timeout`);
    const suspense = {
        vnode,
        parent,
        parentComponent,
        isSVG,
        container,
        hiddenContainer,
        anchor,
        deps: 0,
        pendingId: 0,
        timeout: typeof timeout === "number" ? timeout : -1,
        activeBranch: null,
        pendingBranch: null,
        isInFallback: true,
        isHydrating,
        isUnmounted: false,
        effects: [],
        resolve (resume = false) {
            if (!resume && !suspense.pendingBranch) throw new Error(`suspense.resolve() is called without a pending branch.`);
            if (suspense.isUnmounted) throw new Error(`suspense.resolve() is called on an already unmounted suspense boundary.`);
            const { vnode , activeBranch , pendingBranch , pendingId , effects , parentComponent , container  } = suspense;
            if (suspense.isHydrating) suspense.isHydrating = false;
            else if (!resume) {
                const delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
                if (delayEnter) activeBranch.transition.afterLeave = ()=>{
                    if (pendingId === suspense.pendingId) move(pendingBranch, container, anchor, 0 /* MoveType.ENTER */ );
                };
                // this is initial anchor on mount
                let { anchor  } = suspense;
                // unmount current active tree
                if (activeBranch) {
                    // if the fallback tree was mounted, it may have been moved
                    // as part of a parent suspense. get the latest anchor for insertion
                    anchor = next(activeBranch);
                    unmount(activeBranch, parentComponent, suspense, true);
                }
                if (!delayEnter) // move content from off-dom container to actual container
                move(pendingBranch, container, anchor, 0 /* MoveType.ENTER */ );
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            // flush buffered effects
            // check if there is a pending parent suspense
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while(parent){
                if (parent.pendingBranch) {
                    // found a pending parent suspense, merge buffered post jobs
                    // into that parent
                    parent.effects.push(...effects);
                    hasUnresolvedAncestor = true;
                    break;
                }
                parent = parent.parent;
            }
            // no pending parent suspense, flush all jobs
            if (!hasUnresolvedAncestor) queuePostFlushCb(effects);
            suspense.effects = [];
            // invoke @resolve event
            triggerEvent(vnode, "onResolve");
        },
        fallback (fallbackVNode) {
            if (!suspense.pendingBranch) return;
            const { vnode , activeBranch , parentComponent , container , isSVG  } = suspense;
            // invoke @fallback event
            triggerEvent(vnode, "onFallback");
            const anchor = next(activeBranch);
            const mountFallback = ()=>{
                if (!suspense.isInFallback) return;
                // mount the fallback tree
                patch(null, fallbackVNode, container, anchor, parentComponent, null, isSVG, slotScopeIds, optimized);
                setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) activeBranch.transition.afterLeave = mountFallback;
            suspense.isInFallback = true;
            // unmount current active branch
            unmount(activeBranch, parentComponent, null, true // shouldRemove
            );
            if (!delayEnter) mountFallback();
        },
        move (container, anchor, type) {
            suspense.activeBranch && move(suspense.activeBranch, container, anchor, type);
            suspense.container = container;
        },
        next () {
            return suspense.activeBranch && next(suspense.activeBranch);
        },
        registerDep (instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) suspense.deps++;
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err)=>{
                handleError(err, instance, 0 /* ErrorCodes.SETUP_FUNCTION */ );
            }).then((asyncSetupResult)=>{
                // retry when the setup() promise resolves.
                // component may have been unmounted before resolve.
                if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) return;
                // retry from this component
                instance.asyncResolved = true;
                const { vnode  } = instance;
                pushWarningContext(vnode);
                handleSetupResult(instance, asyncSetupResult, false);
                if (hydratedEl) // vnode may have been replaced if an update happened before the
                // async dep is resolved.
                vnode.el = hydratedEl;
                const placeholder = !hydratedEl && instance.subTree.el;
                setupRenderEffect(instance, vnode, // component may have been moved before resolve.
                // if this is not a hydration, instance.subTree will be the comment
                // placeholder.
                parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
                // consider the comment placeholder case.
                hydratedEl ? null : next(instance.subTree), suspense, isSVG, optimized);
                if (placeholder) remove(placeholder);
                updateHOCHostEl(instance, vnode.el);
                popWarningContext();
                // only decrease deps count if suspense is not already resolved
                if (isInPendingSuspense && --suspense.deps === 0) suspense.resolve();
            });
        },
        unmount (parentSuspense, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) unmount(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
            if (suspense.pendingBranch) unmount(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
        }
    };
    return suspense;
}
function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
    /* eslint-disable no-restricted-globals */ const suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement("div"), null, isSVG, slotScopeIds, optimized, rendererInternals, true);
    // there are two possible scenarios for server-rendered suspense:
    // - success: ssr content should be fully resolved
    // - failure: ssr content should be the fallback branch.
    // however, on the client we don't really know if it has failed or not
    // attempt to hydrate the DOM assuming it has succeeded, but we still
    // need to construct a suspense boundary first
    const result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);
    if (suspense.deps === 0) suspense.resolve();
    return result;
/* eslint-enable no-restricted-globals */ }
function normalizeSuspenseChildren(vnode) {
    const { shapeFlag , children  } = vnode;
    const isSlotChildren = shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */ ;
    vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
    vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}
function normalizeSuspenseSlot(s) {
    let block;
    if ((0, _shared.isFunction)(s)) {
        const trackBlock = isBlockTreeEnabled && s._c;
        if (trackBlock) {
            // disableTracking: false
            // allow block tracking for compiled slots
            // (see ./componentRenderContext.ts)
            s._d = false;
            openBlock();
        }
        s = s();
        if (trackBlock) {
            s._d = true;
            block = currentBlock;
            closeBlock();
        }
    }
    if ((0, _shared.isArray)(s)) {
        const singleChild = filterSingleRoot(s);
        if (!singleChild) warn(`<Suspense> slots expect a single root node.`);
        s = singleChild;
    }
    s = normalizeVNode(s);
    if (block && !s.dynamicChildren) s.dynamicChildren = block.filter((c)=>c !== s);
    return s;
}
function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
        if ((0, _shared.isArray)(fn)) suspense.effects.push(...fn);
        else suspense.effects.push(fn);
    } else queuePostFlushCb(fn);
}
function setActiveBranch(suspense, branch) {
    suspense.activeBranch = branch;
    const { vnode , parentComponent  } = suspense;
    const el = vnode.el = branch.el;
    // in case suspense is the root node of a component,
    // recursively update the HOC el
    if (parentComponent && parentComponent.subTree === vnode) {
        parentComponent.vnode.el = el;
        updateHOCHostEl(parentComponent, el);
    }
}
function provide(key, value) {
    if (!currentInstance) warn(`provide() can only be used inside setup().`);
    else {
        let provides = currentInstance.provides;
        // by default an instance inherits its parent's provides object
        // but when it needs to provide values of its own, it creates its
        // own provides object using parent provides object as prototype.
        // this way in `inject` we can simply look up injections from direct
        // parent and let the prototype chain do the work.
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) provides = currentInstance.provides = Object.create(parentProvides);
        // TS doesn't allow symbol as index type
        provides[key] = value;
    }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
    // fallback to `currentRenderingInstance` so that this can be called in
    // a functional component
    const instance = currentInstance || currentRenderingInstance;
    if (instance) {
        // #2400
        // to support `app.use` plugins,
        // fallback to appContext's `provides` if the instance is at root
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key in provides) // TS doesn't allow symbol as index type
        return provides[key];
        else if (arguments.length > 1) return treatDefaultAsFactory && (0, _shared.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        else warn(`injection "${String(key)}" not found.`);
    } else warn(`inject() can only be used inside setup() or functional components.`);
}
// Simple effect.
function watchEffect(effect, options) {
    return doWatch(effect, null, options);
}
function watchPostEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "post"
    }));
}
function watchSyncEffect(effect, options) {
    return doWatch(effect, null, Object.assign(Object.assign({}, options), {
        flush: "sync"
    }));
}
// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE = {};
// implementation
function watch(source, cb, options) {
    if (!(0, _shared.isFunction)(cb)) warn(`\`watch(fn, options?)\` signature has been moved to a separate API. ` + `Use \`watchEffect(fn, options?)\` instead. \`watch\` now only ` + `supports \`watch(source, cb, options?) signature.`);
    return doWatch(source, cb, options);
}
function doWatch(source, cb, { immediate , deep , flush , onTrack , onTrigger  } = (0, _shared.EMPTY_OBJ)) {
    if (!cb) {
        if (immediate !== undefined) warn(`watch() "immediate" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
        if (deep !== undefined) warn(`watch() "deep" option is only respected when using the ` + `watch(source, callback, options?) signature.`);
    }
    const warnInvalidSource = (s)=>{
        warn(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, ` + `a reactive object, or an array of these types.`);
    };
    const instance = (0, _reactivity.getCurrentScope)() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
    // const instance = currentInstance
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if ((0, _reactivity.isRef)(source)) {
        getter = ()=>source.value;
        forceTrigger = (0, _reactivity.isShallow)(source);
    } else if ((0, _reactivity.isReactive)(source)) {
        getter = ()=>source;
        deep = true;
    } else if ((0, _shared.isArray)(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>(0, _reactivity.isReactive)(s) || (0, _reactivity.isShallow)(s));
        getter = ()=>source.map((s)=>{
                if ((0, _reactivity.isRef)(s)) return s.value;
                else if ((0, _reactivity.isReactive)(s)) return traverse(s);
                else if ((0, _shared.isFunction)(s)) return callWithErrorHandling(s, instance, 2 /* ErrorCodes.WATCH_GETTER */ );
                else warnInvalidSource(s);
            });
    } else if ((0, _shared.isFunction)(source)) {
        if (cb) // getter with cb
        getter = ()=>callWithErrorHandling(source, instance, 2 /* ErrorCodes.WATCH_GETTER */ );
        else // no cb -> simple effect
        getter = ()=>{
            if (instance && instance.isUnmounted) return;
            if (cleanup) cleanup();
            return callWithAsyncErrorHandling(source, instance, 3 /* ErrorCodes.WATCH_CALLBACK */ , [
                onCleanup
            ]);
        };
    } else {
        getter = (0, _shared.NOOP);
        warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        getter = ()=>traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn)=>{
        cleanup = effect.onStop = ()=>{
            callWithErrorHandling(fn, instance, 4 /* ErrorCodes.WATCH_CLEANUP */ );
        };
    };
    // in SSR there is no need to setup an actual effect, and it should be noop
    // unless it's eager or sync flush
    let ssrCleanup;
    if (isInSSRComponentSetup) {
        // we will also not call the invalidate callback (+ runner is not set up)
        onCleanup = (0, _shared.NOOP);
        if (!cb) getter();
        else if (immediate) callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */ , [
            getter(),
            isMultiSource ? [] : undefined,
            onCleanup
        ]);
        if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else return 0, _shared.NOOP;
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = ()=>{
        if (!effect.active) return;
        if (cb) {
            // watch(source, cb)
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v1, i)=>(0, _shared.hasChanged)(v1, oldValue[i])) : (0, _shared.hasChanged)(newValue, oldValue)) || false) {
                // cleanup before running cb again
                if (cleanup) cleanup();
                callWithAsyncErrorHandling(cb, instance, 3 /* ErrorCodes.WATCH_CALLBACK */ , [
                    newValue,
                    // pass undefined as the old value when it's changed for the first time
                    oldValue === INITIAL_WATCHER_VALUE ? undefined : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                    onCleanup
                ]);
                oldValue = newValue;
            }
        } else // watchEffect
        effect.run();
    };
    // important: mark the job as a watcher callback so that scheduler knows
    // it is allowed to self-trigger (#1727)
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") scheduler = job; // the scheduler function gets called directly
    else if (flush === "post") scheduler = ()=>queuePostRenderEffect(job, instance && instance.suspense);
    else {
        // default: 'pre'
        job.pre = true;
        if (instance) job.id = instance.uid;
        scheduler = ()=>queueJob(job);
    }
    const effect = new (0, _reactivity.ReactiveEffect)(getter, scheduler);
    effect.onTrack = onTrack;
    effect.onTrigger = onTrigger;
    // initial run
    if (cb) {
        if (immediate) job();
        else oldValue = effect.run();
    } else if (flush === "post") queuePostRenderEffect(effect.run.bind(effect), instance && instance.suspense);
    else effect.run();
    const unwatch = ()=>{
        effect.stop();
        if (instance && instance.scope) (0, _shared.remove)(instance.scope.effects, effect);
    };
    if (ssrCleanup) ssrCleanup.push(unwatch);
    return unwatch;
}
// this.$watch
function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = (0, _shared.isString)(source) ? source.includes(".") ? createPathGetter(publicThis, source) : ()=>publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if ((0, _shared.isFunction)(value)) cb = value;
    else {
        cb = value.handler;
        options = value;
    }
    const cur = currentInstance;
    setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    if (cur) setCurrentInstance(cur);
    else unsetCurrentInstance();
    return res;
}
function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return ()=>{
        let cur = ctx;
        for(let i = 0; i < segments.length && cur; i++)cur = cur[segments[i]];
        return cur;
    };
}
function traverse(value, seen) {
    if (!(0, _shared.isObject)(value) || value["__v_skip" /* ReactiveFlags.SKIP */ ]) return value;
    seen = seen || new Set();
    if (seen.has(value)) return value;
    seen.add(value);
    if ((0, _reactivity.isRef)(value)) traverse(value.value, seen);
    else if ((0, _shared.isArray)(value)) for(let i = 0; i < value.length; i++)traverse(value[i], seen);
    else if ((0, _shared.isSet)(value) || (0, _shared.isMap)(value)) value.forEach((v1)=>{
        traverse(v1, seen);
    });
    else if ((0, _shared.isPlainObject)(value)) for(const key in value)traverse(value[key], seen);
    return value;
}
function useTransitionState() {
    const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: new Map()
    };
    onMounted(()=>{
        state.isMounted = true;
    });
    onBeforeUnmount(()=>{
        state.isUnmounting = true;
    });
    return state;
}
const TransitionHookValidator = [
    Function,
    Array
];
const BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return ()=>{
            const children = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children || !children.length) return;
            let child = children[0];
            if (children.length > 1) {
                let hasFound = false;
                // locate first non-comment child
                for (const c of children)if (c.type !== Comment) {
                    if (hasFound) {
                        // warn more than one non-comment child
                        warn("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                        break;
                    }
                    child = c;
                    hasFound = true;
                }
            }
            // there's no need to track reactivity for these props so use the raw
            // props for a bit better perf
            const rawProps = (0, _reactivity.toRaw)(props);
            const { mode  } = rawProps;
            // check mode
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") warn(`invalid <transition> mode: ${mode}`);
            if (state.isLeaving) return emptyPlaceholder(child);
            // in the case of <transition><keep-alive/></transition>, we need to
            // compare the type of the kept-alive children.
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) return emptyPlaceholder(child);
            const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey  } = innerChild.type;
            if (getTransitionKey) {
                const key = getTransitionKey();
                if (prevTransitionKey === undefined) prevTransitionKey = key;
                else if (key !== prevTransitionKey) {
                    prevTransitionKey = key;
                    transitionKeyChanged = true;
                }
            }
            // handle mode
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
                const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
                // update old tree's hooks in case of dynamic transition
                setTransitionHooks(oldInnerChild, leavingHooks);
                // switching between different views
                if (mode === "out-in") {
                    state.isLeaving = true;
                    // return placeholder node and queue update when leave finishes
                    leavingHooks.afterLeave = ()=>{
                        state.isLeaving = false;
                        // #6835
                        // it also needs to be updated when active is undefined
                        if (instance.update.active !== false) instance.update();
                    };
                    return emptyPlaceholder(child);
                } else if (mode === "in-out" && innerChild.type !== Comment) leavingHooks.delayLeave = (el, earlyRemove, delayedLeave)=>{
                    const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                    leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                    // early removal callback
                    el._leaveCb = ()=>{
                        earlyRemove();
                        el._leaveCb = undefined;
                        delete enterHooks.delayedLeave;
                    };
                    enterHooks.delayedLeave = delayedLeave;
                };
            }
            return child;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes  } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
        leavingVNodesCache = Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
}
// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear , mode , persisted =false , onBeforeEnter , onEnter , onAfterEnter , onEnterCancelled , onBeforeLeave , onLeave , onAfterLeave , onLeaveCancelled , onBeforeAppear , onAppear , onAfterAppear , onAppearCancelled  } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook = (hook, args)=>{
        hook && callWithAsyncErrorHandling(hook, instance, 9 /* ErrorCodes.TRANSITION_HOOK */ , args);
    };
    const callAsyncHook = (hook, args)=>{
        const done = args[1];
        callHook(hook, args);
        if ((0, _shared.isArray)(hook)) {
            if (hook.every((hook)=>hook.length <= 1)) done();
        } else if (hook.length <= 1) done();
    };
    const hooks = {
        mode,
        persisted,
        beforeEnter (el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
                if (appear) hook = onBeforeAppear || onBeforeEnter;
                else return;
            }
            // for same element (v-show)
            if (el._leaveCb) el._leaveCb(true);
            // for toggled element with same key (v-if)
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) // force early removal (not cancelled)
            leavingVNode.el._leaveCb();
            callHook(hook, [
                el
            ]);
        },
        enter (el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
                if (appear) {
                    hook = onAppear || onEnter;
                    afterHook = onAfterAppear || onAfterEnter;
                    cancelHook = onAppearCancelled || onEnterCancelled;
                } else return;
            }
            let called = false;
            const done = el._enterCb = (cancelled)=>{
                if (called) return;
                called = true;
                if (cancelled) callHook(cancelHook, [
                    el
                ]);
                else callHook(afterHook, [
                    el
                ]);
                if (hooks.delayedLeave) hooks.delayedLeave();
                el._enterCb = undefined;
            };
            if (hook) callAsyncHook(hook, [
                el,
                done
            ]);
            else done();
        },
        leave (el, remove) {
            const key = String(vnode.key);
            if (el._enterCb) el._enterCb(true);
            if (state.isUnmounting) return remove();
            callHook(onBeforeLeave, [
                el
            ]);
            let called = false;
            const done = el._leaveCb = (cancelled)=>{
                if (called) return;
                called = true;
                remove();
                if (cancelled) callHook(onLeaveCancelled, [
                    el
                ]);
                else callHook(onAfterLeave, [
                    el
                ]);
                el._leaveCb = undefined;
                if (leavingVNodesCache[key] === vnode) delete leavingVNodesCache[key];
            };
            leavingVNodesCache[key] = vnode;
            if (onLeave) callAsyncHook(onLeave, [
                el,
                done
            ]);
            else done();
        },
        clone (vnode) {
            return resolveTransitionHooks(vnode, props, state, instance);
        }
    };
    return hooks;
}
// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
    }
}
function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}
function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */  && vnode.component) setTransitionHooks(vnode.component.subTree, hooks);
    else if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else vnode.transition = hooks;
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for(let i = 0; i < children.length; i++){
        let child = children[i];
        // #5360 inherit parent key in case of <template v-for>
        const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        // handle fragment children case, e.g. v-for
        if (child.type === Fragment) {
            if (child.patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */ ) keyedFragmentCount++;
            ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
        } else if (keepComment || child.type !== Comment) ret.push(key != null ? cloneVNode(child, {
            key
        }) : child);
    }
    // #1126 if a transition children list contains multiple sub fragments, these
    // fragments will be merged into a flat children array. Since each v-for
    // fragment may contain different static bindings inside, we need to de-op
    // these children to force full diffs to ensure correct behavior.
    if (keyedFragmentCount > 1) for(let i = 0; i < ret.length; i++)ret[i].patchFlag = -2 /* PatchFlags.BAIL */ ;
    return ret;
}
// implementation, close to no-op
function defineComponent(options) {
    return (0, _shared.isFunction)(options) ? {
        setup: options,
        name: options.name
    } : options;
}
const isAsyncWrapper = (i)=>!!i.type.__asyncLoader;
function defineAsyncComponent(source) {
    if ((0, _shared.isFunction)(source)) source = {
        loader: source
    };
    const { loader , loadingComponent , errorComponent , delay =200 , timeout , suspensible =true , onError: userOnError  } = source;
    let pendingRequest = null;
    let resolvedComp;
    let retries = 0;
    const retry = ()=>{
        retries++;
        pendingRequest = null;
        return load();
    };
    const load = ()=>{
        let thisRequest;
        return pendingRequest || (thisRequest = pendingRequest = loader().catch((err)=>{
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) return new Promise((resolve, reject)=>{
                const userRetry = ()=>resolve(retry());
                const userFail = ()=>reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
            });
            else throw err;
        }).then((comp)=>{
            if (thisRequest !== pendingRequest && pendingRequest) return pendingRequest;
            if (!comp) warn(`Async component loader resolved to undefined. ` + `If you are using retry(), make sure to return its return value.`);
            // interop module default
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) comp = comp.default;
            if (comp && !(0, _shared.isObject)(comp) && !(0, _shared.isFunction)(comp)) throw new Error(`Invalid async component load result: ${comp}`);
            resolvedComp = comp;
            return comp;
        }));
    };
    return defineComponent({
        name: "AsyncComponentWrapper",
        __asyncLoader: load,
        get __asyncResolved () {
            return resolvedComp;
        },
        setup () {
            const instance = currentInstance;
            // already resolved
            if (resolvedComp) return ()=>createInnerComp(resolvedComp, instance);
            const onError = (err)=>{
                pendingRequest = null;
                handleError(err, instance, 13 /* ErrorCodes.ASYNC_COMPONENT_LOADER */ , !errorComponent /* do not throw in dev if user provided error component */ );
            };
            // suspense-controlled or SSR.
            if (suspensible && instance.suspense || isInSSRComponentSetup) return load().then((comp)=>{
                return ()=>createInnerComp(comp, instance);
            }).catch((err)=>{
                onError(err);
                return ()=>errorComponent ? createVNode(errorComponent, {
                        error: err
                    }) : null;
            });
            const loaded = (0, _reactivity.ref)(false);
            const error = (0, _reactivity.ref)();
            const delayed = (0, _reactivity.ref)(!!delay);
            if (delay) setTimeout(()=>{
                delayed.value = false;
            }, delay);
            if (timeout != null) setTimeout(()=>{
                if (!loaded.value && !error.value) {
                    const err = new Error(`Async component timed out after ${timeout}ms.`);
                    onError(err);
                    error.value = err;
                }
            }, timeout);
            load().then(()=>{
                loaded.value = true;
                if (instance.parent && isKeepAlive(instance.parent.vnode)) // parent is keep-alive, force update so the loaded component's
                // name is taken into account
                queueJob(instance.parent.update);
            }).catch((err)=>{
                onError(err);
                error.value = err;
            });
            return ()=>{
                if (loaded.value && resolvedComp) return createInnerComp(resolvedComp, instance);
                else if (error.value && errorComponent) return createVNode(errorComponent, {
                    error: error.value
                });
                else if (loadingComponent && !delayed.value) return createVNode(loadingComponent);
            };
        }
    });
}
function createInnerComp(comp, parent) {
    const { ref , props , children , ce  } = parent.vnode;
    const vnode = createVNode(comp, props, children);
    // ensure inner component inherits the async wrapper's ref owner
    vnode.ref = ref;
    // pass the custom element callback on to the inner comp
    // and remove it from the async wrapper
    vnode.ce = ce;
    delete parent.vnode.ce;
    return vnode;
}
const isKeepAlive = (vnode)=>vnode.type.__isKeepAlive;
const KeepAliveImpl = {
    name: `KeepAlive`,
    // Marker for special handling inside the renderer. We are not using a ===
    // check directly on KeepAlive in the renderer, because importing it directly
    // would prevent it from being tree-shaken.
    __isKeepAlive: true,
    props: {
        include: [
            String,
            RegExp,
            Array
        ],
        exclude: [
            String,
            RegExp,
            Array
        ],
        max: [
            String,
            Number
        ]
    },
    setup (props, { slots  }) {
        const instance = getCurrentInstance();
        // KeepAlive communicates with the instantiated renderer via the
        // ctx where the renderer passes in its internals,
        // and the KeepAlive instance exposes activate/deactivate implementations.
        // The whole point of this is to avoid importing KeepAlive directly in the
        // renderer to facilitate tree-shaking.
        const sharedContext = instance.ctx;
        // if the internal renderer is not registered, it indicates that this is server-side rendering,
        // for KeepAlive, we just need to render its children
        if (!sharedContext.renderer) return ()=>{
            const children = slots.default && slots.default();
            return children && children.length === 1 ? children[0] : children;
        };
        const cache = new Map();
        const keys = new Set();
        let current = null;
        instance.__v_cache = cache;
        const parentSuspense = instance.suspense;
        const { renderer: { p: patch , m: move , um: _unmount , o: { createElement  }  }  } = sharedContext;
        const storageContainer = createElement("div");
        sharedContext.activate = (vnode, container, anchor, isSVG, optimized)=>{
            const instance = vnode.component;
            move(vnode, container, anchor, 0 /* MoveType.ENTER */ , parentSuspense);
            // in case props have changed
            patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
            queuePostRenderEffect(()=>{
                instance.isDeactivated = false;
                if (instance.a) (0, _shared.invokeArrayFns)(instance.a);
                const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        sharedContext.deactivate = (vnode)=>{
            const instance = vnode.component;
            move(vnode, storageContainer, null, 1 /* MoveType.LEAVE */ , parentSuspense);
            queuePostRenderEffect(()=>{
                if (instance.da) (0, _shared.invokeArrayFns)(instance.da);
                const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
                if (vnodeHook) invokeVNodeHook(vnodeHook, instance.parent, vnode);
                instance.isDeactivated = true;
            }, parentSuspense);
            // Update components tree
            devtoolsComponentAdded(instance);
        };
        function unmount(vnode) {
            // reset the shapeFlag so it can be properly unmounted
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
        }
        function pruneCache(filter) {
            cache.forEach((vnode, key)=>{
                const name = getComponentName(vnode.type);
                if (name && (!filter || !filter(name))) pruneCacheEntry(key);
            });
        }
        function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) unmount(cached);
            else if (current) // current active instance should no longer be kept-alive.
            // we can't unmount it now but it might be later, so reset its flag now.
            resetShapeFlag(current);
            cache.delete(key);
            keys.delete(key);
        }
        // prune cache on include/exclude prop change
        watch(()=>[
                props.include,
                props.exclude
            ], ([include, exclude])=>{
            include && pruneCache((name)=>matches(include, name));
            exclude && pruneCache((name)=>!matches(exclude, name));
        }, // prune post-render after `current` has been updated
        {
            flush: "post",
            deep: true
        });
        // cache sub tree after render
        let pendingCacheKey = null;
        const cacheSubtree = ()=>{
            // fix #1621, the pendingCacheKey could be 0
            if (pendingCacheKey != null) cache.set(pendingCacheKey, getInnerChild(instance.subTree));
        };
        onMounted(cacheSubtree);
        onUpdated(cacheSubtree);
        onBeforeUnmount(()=>{
            cache.forEach((cached)=>{
                const { subTree , suspense  } = instance;
                const vnode = getInnerChild(subTree);
                if (cached.type === vnode.type && cached.key === vnode.key) {
                    // current instance will be unmounted as part of keep-alive's unmount
                    resetShapeFlag(vnode);
                    // but invoke its deactivated hook here
                    const da = vnode.component.da;
                    da && queuePostRenderEffect(da, suspense);
                    return;
                }
                unmount(cached);
            });
        });
        return ()=>{
            pendingCacheKey = null;
            if (!slots.default) return null;
            const children = slots.default();
            const rawVNode = children[0];
            if (children.length > 1) {
                warn(`KeepAlive should contain exactly one component child.`);
                current = null;
                return children;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */ ) && !(rawVNode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ )) {
                current = null;
                return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            // for async components, name check should be based in its loaded
            // inner component if available
            const name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
            const { include , exclude , max  } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
                current = vnode;
                return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            // clone vnode if it's reused because we are going to mutate it
            if (vnode.el) {
                vnode = cloneVNode(vnode);
                if (rawVNode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) rawVNode.ssContent = vnode;
            }
            // #1513 it's possible for the returned vnode to be cloned due to attr
            // fallthrough or scopeId, so the vnode here may not be the final vnode
            // that is mounted. Instead of caching it directly, we store the pending
            // key and cache `instance.subTree` (the normalized vnode) in
            // beforeMount/beforeUpdate hooks.
            pendingCacheKey = key;
            if (cachedVNode) {
                // copy over mounted state
                vnode.el = cachedVNode.el;
                vnode.component = cachedVNode.component;
                if (vnode.transition) // recursively update transition hooks on subTree
                setTransitionHooks(vnode, vnode.transition);
                // avoid vnode being mounted as fresh
                vnode.shapeFlag |= 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */ ;
                // make this key the freshest
                keys.delete(key);
                keys.add(key);
            } else {
                keys.add(key);
                // prune oldest entry
                if (max && keys.size > parseInt(max, 10)) pruneCacheEntry(keys.values().next().value);
            }
            // avoid vnode being unmounted
            vnode.shapeFlag |= 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
        };
    }
};
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const KeepAlive = KeepAliveImpl;
function matches(pattern, name) {
    if ((0, _shared.isArray)(pattern)) return pattern.some((p)=>matches(p, name));
    else if ((0, _shared.isString)(pattern)) return pattern.split(",").includes(name);
    else if ((0, _shared.isRegExp)(pattern)) return pattern.test(name);
    /* istanbul ignore next */ return false;
}
function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a" /* LifecycleHooks.ACTIVATED */ , target);
}
function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da" /* LifecycleHooks.DEACTIVATED */ , target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
    // cache the deactivate branch check wrapper for injected hooks so the same
    // hook can be properly deduped by the scheduler. "__wdc" stands for "with
    // deactivation check".
    const wrappedHook = hook.__wdc || (hook.__wdc = ()=>{
        // only fire the hook if the target instance is NOT in a deactivated branch.
        let current = target;
        while(current){
            if (current.isDeactivated) return;
            current = current.parent;
        }
        return hook();
    });
    injectHook(type, wrappedHook, target);
    // In addition to registering it on the target instance, we walk up the parent
    // chain and register it on all ancestor instances that are keep-alive roots.
    // This avoids the need to walk the entire component tree when invoking these
    // hooks, and more importantly, avoids the need to track child components in
    // arrays.
    if (target) {
        let current = target.parent;
        while(current && current.parent){
            if (isKeepAlive(current.parent.vnode)) injectToKeepAliveRoot(wrappedHook, type, target, current);
            current = current.parent;
        }
    }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    // injectHook wraps the original for error handling, so make sure to remove
    // the wrapped version.
    const injected = injectHook(type, hook, keepAliveRoot, true);
    onUnmounted(()=>{
        (0, _shared.remove)(keepAliveRoot[type], injected);
    }, target);
}
function resetShapeFlag(vnode) {
    // bitwise operations to remove keep alive flags
    vnode.shapeFlag &= -257 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ;
    vnode.shapeFlag &= -513 /* ShapeFlags.COMPONENT_KEPT_ALIVE */ ;
}
function getInnerChild(vnode) {
    return vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */  ? vnode.ssContent : vnode;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
        const hooks = target[type] || (target[type] = []);
        // cache the error handling wrapper for injected hooks so the same hook
        // can be properly deduped by the scheduler. "__weh" stands for "with error
        // handling".
        const wrappedHook = hook.__weh || (hook.__weh = (...args)=>{
            if (target.isUnmounted) return;
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            (0, _reactivity.pauseTracking)();
            // Set currentInstance during hook invocation.
            // This assumes the hook does not synchronously trigger other hooks, which
            // can only be false when the user does something really funky.
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            (0, _reactivity.resetTracking)();
            return res;
        });
        if (prepend) hooks.unshift(wrappedHook);
        else hooks.push(wrappedHook);
        return wrappedHook;
    } else {
        const apiName = (0, _shared.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ""));
        warn(`${apiName} is called when there is no active component instance to be ` + `associated with. ` + `Lifecycle injection APIs can only be used during execution of setup().` + (` If you are using async setup(), make sure to register lifecycle ` + `hooks before the first await statement.`));
    }
}
const createHook = (lifecycle)=>(hook, target = currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
        (!isInSSRComponentSetup || lifecycle === "sp" /* LifecycleHooks.SERVER_PREFETCH */ ) && injectHook(lifecycle, (...args)=>hook(...args), target);
const onBeforeMount = createHook("bm" /* LifecycleHooks.BEFORE_MOUNT */ );
const onMounted = createHook("m" /* LifecycleHooks.MOUNTED */ );
const onBeforeUpdate = createHook("bu" /* LifecycleHooks.BEFORE_UPDATE */ );
const onUpdated = createHook("u" /* LifecycleHooks.UPDATED */ );
const onBeforeUnmount = createHook("bum" /* LifecycleHooks.BEFORE_UNMOUNT */ );
const onUnmounted = createHook("um" /* LifecycleHooks.UNMOUNTED */ );
const onServerPrefetch = createHook("sp" /* LifecycleHooks.SERVER_PREFETCH */ );
const onRenderTriggered = createHook("rtg" /* LifecycleHooks.RENDER_TRIGGERED */ );
const onRenderTracked = createHook("rtc" /* LifecycleHooks.RENDER_TRACKED */ );
function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec" /* LifecycleHooks.ERROR_CAPTURED */ , hook, target);
}
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/ function validateDirectiveName(name) {
    if ((0, _shared.isBuiltInDirective)(name)) warn("Do not use built-in directive ids as custom directive id: " + name);
}
/**
 * Adds directives to a VNode.
 */ function withDirectives(vnode, directives) {
    const internalInstance = currentRenderingInstance;
    if (internalInstance === null) {
        warn(`withDirectives can only be used inside render functions.`);
        return vnode;
    }
    const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for(let i = 0; i < directives.length; i++){
        let [dir, value, arg, modifiers = (0, _shared.EMPTY_OBJ)] = directives[i];
        if (dir) {
            if ((0, _shared.isFunction)(dir)) dir = {
                mounted: dir,
                updated: dir
            };
            if (dir.deep) traverse(value);
            bindings.push({
                dir,
                instance,
                value,
                oldValue: void 0,
                arg,
                modifiers
            });
        }
    }
    return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for(let i = 0; i < bindings.length; i++){
        const binding = bindings[i];
        if (oldBindings) binding.oldValue = oldBindings[i].value;
        let hook = binding.dir[name];
        if (hook) {
            // disable tracking inside all lifecycle hooks
            // since they can potentially be called inside effects.
            (0, _reactivity.pauseTracking)();
            callWithAsyncErrorHandling(hook, instance, 8 /* ErrorCodes.DIRECTIVE_HOOK */ , [
                vnode.el,
                binding,
                vnode,
                prevVNode
            ]);
            (0, _reactivity.resetTracking)();
        }
    }
}
const COMPONENTS = "components";
const DIRECTIVES = "directives";
/**
 * @private
 */ function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
const NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */ function resolveDynamicComponent(component) {
    if ((0, _shared.isString)(component)) return resolveAsset(COMPONENTS, component, false) || component;
    else // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
}
/**
 * @private
 */ function resolveDirective(name) {
    return resolveAsset(DIRECTIVES, name);
}
// implementation
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
        const Component = instance.type;
        // explicit self name has highest priority
        if (type === COMPONENTS) {
            const selfName = getComponentName(Component, false);
            if (selfName && (selfName === name || selfName === (0, _shared.camelize)(name) || selfName === (0, _shared.capitalize)((0, _shared.camelize)(name)))) return Component;
        }
        const res = // local registration
        // check instance[type] first which is resolved for options API
        resolve(instance[type] || Component[type], name) || // global registration
        resolve(instance.appContext[type], name);
        if (!res && maybeSelfReference) // fallback to implicit self-reference
        return Component;
        if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `\nIf this is a native custom element, make sure to exclude it from ` + `component resolution via compilerOptions.isCustomElement.` : ``;
            warn(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
        }
        return res;
    } else warn(`resolve${(0, _shared.capitalize)(type.slice(0, -1))} ` + `can only be used in render() or setup().`);
}
function resolve(registry, name) {
    return registry && (registry[name] || registry[(0, _shared.camelize)(name)] || registry[(0, _shared.capitalize)((0, _shared.camelize)(name))]);
}
/**
 * Actual implementation
 */ function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if ((0, _shared.isArray)(source) || (0, _shared.isString)(source)) {
        ret = new Array(source.length);
        for(let i = 0, l = source.length; i < l; i++)ret[i] = renderItem(source[i], i, undefined, cached && cached[i]);
    } else if (typeof source === "number") {
        if (!Number.isInteger(source)) warn(`The v-for range expect an integer value but got ${source}.`);
        ret = new Array(source);
        for(let i = 0; i < source; i++)ret[i] = renderItem(i + 1, i, undefined, cached && cached[i]);
    } else if ((0, _shared.isObject)(source)) {
        if (source[Symbol.iterator]) ret = Array.from(source, (item, i)=>renderItem(item, i, undefined, cached && cached[i]));
        else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for(let i = 0, l = keys.length; i < l; i++){
                const key = keys[i];
                ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
        }
    } else ret = [];
    if (cache) cache[index] = ret;
    return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */ function createSlots(slots, dynamicSlots) {
    for(let i = 0; i < dynamicSlots.length; i++){
        const slot = dynamicSlots[i];
        // array of dynamic slot generated by <template v-for="..." #[...]>
        if ((0, _shared.isArray)(slot)) for(let j = 0; j < slot.length; j++)slots[slot[j].name] = slot[j].fn;
        else if (slot) // conditional single slot generated by <template v-if="..." #foo>
        slots[slot.name] = slot.key ? (...args)=>{
            const res = slot.fn(...args);
            // attach branch key so each conditional branch is considered a
            // different fragment
            if (res) res.key = slot.key;
            return res;
        } : slot.fn;
    }
    return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */ function renderSlot(slots, name, props = {}, // this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback, noSlotted) {
    if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
        if (name !== "default") props.name = name;
        return createVNode("slot", props, fallback && fallback());
    }
    let slot = slots[name];
    if (slot && slot.length > 1) {
        warn(`SSR-optimized slot function detected in a non-SSR-optimized render ` + `function. You need to mark this component with $dynamic-slots in the ` + `parent template.`);
        slot = ()=>[];
    }
    // a compiled slot disables block tracking by default to avoid manual
    // invocation interfering with template-based block tracking, but in
    // `renderSlot` we can be sure that it's template-based so we can force
    // enable it.
    if (slot && slot._c) slot._d = false;
    openBlock();
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const rendered = createBlock(Fragment, {
        key: props.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        validSlotContent && validSlotContent.key || `_${name}`
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 /* SlotFlags.STABLE */  ? 64 /* PatchFlags.STABLE_FRAGMENT */  : -2 /* PatchFlags.BAIL */ );
    if (!noSlotted && rendered.scopeId) rendered.slotScopeIds = [
        rendered.scopeId + "-s"
    ];
    if (slot && slot._c) slot._d = true;
    return rendered;
}
function ensureValidVNode(vnodes) {
    return vnodes.some((child)=>{
        if (!isVNode(child)) return true;
        if (child.type === Comment) return false;
        if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
        return true;
    }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */ function toHandlers(obj, preserveCaseIfNecessary) {
    const ret = {};
    if (!(0, _shared.isObject)(obj)) {
        warn(`v-on with no argument expects an object value.`);
        return ret;
    }
    for(const key in obj)ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : (0, _shared.toHandlerKey)(key)] = obj[key];
    return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */ const getPublicInstance = (i)=>{
    if (!i) return null;
    if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
};
const publicPropertiesMap = // Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
/*#__PURE__*/ (0, _shared.extend)(Object.create(null), {
    $: (i)=>i,
    $el: (i)=>i.vnode.el,
    $data: (i)=>i.data,
    $props: (i)=>(0, _reactivity.shallowReadonly)(i.props),
    $attrs: (i)=>(0, _reactivity.shallowReadonly)(i.attrs),
    $slots: (i)=>(0, _reactivity.shallowReadonly)(i.slots),
    $refs: (i)=>(0, _reactivity.shallowReadonly)(i.refs),
    $parent: (i)=>getPublicInstance(i.parent),
    $root: (i)=>getPublicInstance(i.root),
    $emit: (i)=>i.emit,
    $options: (i)=>__VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i)=>i.f || (i.f = ()=>queueJob(i.update)),
    $nextTick: (i)=>i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i)=>__VUE_OPTIONS_API__ ? instanceWatch.bind(i) : (0, _shared.NOOP)
});
const isReservedPrefix = (key)=>key === "_" || key === "$";
const hasSetupBinding = (state, key)=>state !== (0, _shared.EMPTY_OBJ) && !state.__isScriptSetup && (0, _shared.hasOwn)(state, key);
const PublicInstanceProxyHandlers = {
    get ({ _: instance  }, key) {
        const { ctx , setupState , data , props , accessCache , type , appContext  } = instance;
        // for internal formatters to know that this is a Vue instance
        if (key === "__isVue") return true;
        // data / props / ctx
        // This getter gets called for every property access on the render context
        // during render and is a major hotspot. The most expensive part of this
        // is the multiple hasOwn() calls. It's much faster to do a simple property
        // access on a plain object, so we use an accessCache object (with null
        // prototype) to memoize what access type a key corresponds to.
        let normalizedProps;
        if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== undefined) switch(n){
                case 1 /* AccessTypes.SETUP */ :
                    return setupState[key];
                case 2 /* AccessTypes.DATA */ :
                    return data[key];
                case 4 /* AccessTypes.CONTEXT */ :
                    return ctx[key];
                case 3 /* AccessTypes.PROPS */ :
                    return props[key];
            }
            else if (hasSetupBinding(setupState, key)) {
                accessCache[key] = 1 /* AccessTypes.SETUP */ ;
                return setupState[key];
            } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
                accessCache[key] = 2 /* AccessTypes.DATA */ ;
                return data[key];
            } else if (// only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key)) {
                accessCache[key] = 3 /* AccessTypes.PROPS */ ;
                return props[key];
            } else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
                accessCache[key] = 4 /* AccessTypes.CONTEXT */ ;
                return ctx[key];
            } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) accessCache[key] = 0 /* AccessTypes.OTHER */ ;
        }
        const publicGetter = publicPropertiesMap[key];
        let cssModule, globalProperties;
        // public $xxx properties
        if (publicGetter) {
            if (key === "$attrs") {
                (0, _reactivity.track)(instance, "get" /* TrackOpTypes.GET */ , key);
                markAttrsAccessed();
            }
            return publicGetter(instance);
        } else if (// css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])) return cssModule;
        else if (ctx !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(ctx, key)) {
            // user may set custom properties to `this` that start with `$`
            accessCache[key] = 4 /* AccessTypes.CONTEXT */ ;
            return ctx[key];
        } else if (// global properties
        globalProperties = appContext.config.globalProperties, (0, _shared.hasOwn)(globalProperties, key)) return globalProperties[key];
        else if (currentRenderingInstance && (!(0, _shared.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
        // to infinite warning loop
        key.indexOf("__v") !== 0)) {
            if (data !== (0, _shared.EMPTY_OBJ) && isReservedPrefix(key[0]) && (0, _shared.hasOwn)(data, key)) warn(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved ` + `character ("$" or "_") and is not proxied on the render context.`);
            else if (instance === currentRenderingInstance) warn(`Property ${JSON.stringify(key)} was accessed during render ` + `but is not defined on instance.`);
        }
    },
    set ({ _: instance  }, key, value) {
        const { data , setupState , ctx  } = instance;
        if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
        } else if ((0, setupState.__isScriptSetup) && (0, _shared.hasOwn)(setupState, key)) {
            warn(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
        } else if (data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key)) {
            data[key] = value;
            return true;
        } else if ((0, _shared.hasOwn)(instance.props, key)) {
            warn(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
        }
        if (key[0] === "$" && key.slice(1) in instance) {
            warn(`Attempting to mutate public property "${key}". ` + `Properties starting with $ are reserved and readonly.`);
            return false;
        } else if (key in instance.appContext.config.globalProperties) Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
        });
        else ctx[key] = value;
        return true;
    },
    has ({ _: { data , setupState , accessCache , ctx , appContext , propsOptions  }  }, key) {
        let normalizedProps;
        return !!accessCache[key] || data !== (0, _shared.EMPTY_OBJ) && (0, _shared.hasOwn)(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && (0, _shared.hasOwn)(normalizedProps, key) || (0, _shared.hasOwn)(ctx, key) || (0, _shared.hasOwn)(publicPropertiesMap, key) || (0, _shared.hasOwn)(appContext.config.globalProperties, key);
    },
    defineProperty (target, key, descriptor) {
        if (descriptor.get != null) // invalidate key cache of a getter based property #5417
        target._.accessCache[key] = 0;
        else if ((0, _shared.hasOwn)(descriptor, "value")) this.set(target, key, descriptor.value, null);
        return Reflect.defineProperty(target, key, descriptor);
    }
};
PublicInstanceProxyHandlers.ownKeys = (target)=>{
    warn(`Avoid app logic that relies on enumerating keys on a component instance. ` + `The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
};
const RuntimeCompiledPublicInstanceProxyHandlers = /*#__PURE__*/ (0, _shared.extend)({}, PublicInstanceProxyHandlers, {
    get (target, key) {
        // fast path for unscopables when using `with` block
        if (key === Symbol.unscopables) return;
        return PublicInstanceProxyHandlers.get(target, key, target);
    },
    has (_, key) {
        const has = key[0] !== "_" && !(0, _shared.isGloballyWhitelisted)(key);
        if (!has && PublicInstanceProxyHandlers.has(_, key)) warn(`Property ${JSON.stringify(key)} should not start with _ which is a reserved prefix for Vue internals.`);
        return has;
    }
});
// dev only
// In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.
function createDevRenderContext(instance) {
    const target = {};
    // expose internal instance for proxy handlers
    Object.defineProperty(target, `_`, {
        configurable: true,
        enumerable: false,
        get: ()=>instance
    });
    // expose public properties
    Object.keys(publicPropertiesMap).forEach((key)=>{
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: ()=>publicPropertiesMap[key](instance),
            // intercepted by the proxy so no need for implementation,
            // but needed to prevent set errors
            set: (0, _shared.NOOP)
        });
    });
    return target;
}
// dev only
function exposePropsOnRenderContext(instance) {
    const { ctx , propsOptions: [propsOptions]  } = instance;
    if (propsOptions) Object.keys(propsOptions).forEach((key)=>{
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>instance.props[key],
            set: (0, _shared.NOOP)
        });
    });
}
// dev only
function exposeSetupStateOnRenderContext(instance) {
    const { ctx , setupState  } = instance;
    Object.keys((0, _reactivity.toRaw)(setupState)).forEach((key)=>{
        if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
                warn(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" ` + `which are reserved prefixes for Vue internals.`);
                return;
            }
            Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>setupState[key],
                set: (0, _shared.NOOP)
            });
        }
    });
}
function createDuplicateChecker() {
    const cache = Object.create(null);
    return (type, key)=>{
        if (cache[key]) warn(`${type} property "${key}" is already defined in ${cache[key]}.`);
        else cache[key] = type;
    };
}
let shouldCacheAccess = true;
function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    // do not cache property access on public proxy during state initialization
    shouldCacheAccess = false;
    // call beforeCreate first before accessing other options since
    // the hook may mutate resolved options (#2791)
    if (options.beforeCreate) callHook(options.beforeCreate, instance, "bc" /* LifecycleHooks.BEFORE_CREATE */ );
    const { // state
    data: dataOptions , computed: computedOptions , methods , watch: watchOptions , provide: provideOptions , inject: injectOptions , // lifecycle
    created , beforeMount , mounted , beforeUpdate , updated , activated , deactivated , beforeDestroy , beforeUnmount , destroyed , unmounted , render , renderTracked , renderTriggered , errorCaptured , serverPrefetch , // public API
    expose , inheritAttrs , // assets
    components , directives , filters  } = options;
    const checkDuplicateProperties = createDuplicateChecker();
    {
        const [propsOptions] = instance.propsOptions;
        if (propsOptions) for(const key in propsOptions)checkDuplicateProperties("Props" /* OptionTypes.PROPS */ , key);
    }
    // options initialization order (to be consistent with Vue 2):
    // - props (already done outside of this function)
    // - inject
    // - methods
    // - data (deferred since it relies on `this` access)
    // - computed
    // - watch (deferred since it relies on `this` access)
    if (injectOptions) resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
    if (methods) for(const key in methods){
        const methodHandler = methods[key];
        if ((0, _shared.isFunction)(methodHandler)) {
            Object.defineProperty(ctx, key, {
                value: methodHandler.bind(publicThis),
                configurable: true,
                enumerable: true,
                writable: true
            });
            checkDuplicateProperties("Methods" /* OptionTypes.METHODS */ , key);
        } else warn(`Method "${key}" has type "${typeof methodHandler}" in the component definition. ` + `Did you reference the function correctly?`);
    }
    if (dataOptions) {
        if (!(0, _shared.isFunction)(dataOptions)) warn(`The data option must be a function. ` + `Plain object usage is no longer supported.`);
        const data = dataOptions.call(publicThis, publicThis);
        if ((0, _shared.isPromise)(data)) warn(`data() returned a Promise - note data() cannot be async; If you ` + `intend to perform data fetching before component renders, use ` + `async setup() + <Suspense>.`);
        if (!(0, _shared.isObject)(data)) warn(`data() should return an object.`);
        else {
            instance.data = (0, _reactivity.reactive)(data);
            for(const key in data){
                checkDuplicateProperties("Data" /* OptionTypes.DATA */ , key);
                // expose data on ctx during dev
                if (!isReservedPrefix(key[0])) Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: ()=>data[key],
                    set: (0, _shared.NOOP)
                });
            }
        }
    }
    // state initialization complete at this point - start caching access
    shouldCacheAccess = true;
    if (computedOptions) for(const key in computedOptions){
        const opt = computedOptions[key];
        const get = (0, _shared.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0, _shared.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : (0, _shared.NOOP);
        if (get === (0, _shared.NOOP)) warn(`Computed property "${key}" has no getter.`);
        const set = !(0, _shared.isFunction)(opt) && (0, _shared.isFunction)(opt.set) ? opt.set.bind(publicThis) : ()=>{
            warn(`Write operation failed: computed property "${key}" is readonly.`);
        };
        const c = computed({
            get,
            set
        });
        Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            get: ()=>c.value,
            set: (v1)=>c.value = v1
        });
        checkDuplicateProperties("Computed" /* OptionTypes.COMPUTED */ , key);
    }
    if (watchOptions) for(const key in watchOptions)createWatcher(watchOptions[key], ctx, publicThis, key);
    if (provideOptions) {
        const provides = (0, _shared.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key)=>{
            provide(key, provides[key]);
        });
    }
    if (created) callHook(created, instance, "c" /* LifecycleHooks.CREATED */ );
    function registerLifecycleHook(register, hook) {
        if ((0, _shared.isArray)(hook)) hook.forEach((_hook)=>register(_hook.bind(publicThis)));
        else if (hook) register(hook.bind(publicThis));
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if ((0, _shared.isArray)(expose)) {
        if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key)=>{
                Object.defineProperty(exposed, key, {
                    get: ()=>publicThis[key],
                    set: (val)=>publicThis[key] = val
                });
            });
        } else if (!instance.exposed) instance.exposed = {};
    }
    // options that are handled when creating the instance but also need to be
    // applied from mixins
    if (render && instance.render === (0, _shared.NOOP)) instance.render = render;
    if (inheritAttrs != null) instance.inheritAttrs = inheritAttrs;
    // asset options.
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = (0, _shared.NOOP), unwrapRef = false) {
    if ((0, _shared.isArray)(injectOptions)) injectOptions = normalizeInject(injectOptions);
    for(const key in injectOptions){
        const opt = injectOptions[key];
        let injected;
        if ((0, _shared.isObject)(opt)) {
            if ("default" in opt) injected = inject(opt.from || key, opt.default, true);
            else injected = inject(opt.from || key);
        } else injected = inject(opt);
        if ((0, _reactivity.isRef)(injected)) {
            // TODO remove the check in 3.3
            if (unwrapRef) Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                get: ()=>injected.value,
                set: (v1)=>injected.value = v1
            });
            else {
                warn(`injected property "${key}" is a ref and will be auto-unwrapped ` + `and no longer needs \`.value\` in the next minor release. ` + `To opt-in to the new behavior now, ` + `set \`app.config.unwrapInjectedRef = true\` (this config is ` + `temporary and will not be needed in the future.)`);
                ctx[key] = injected;
            }
        } else ctx[key] = injected;
        checkDuplicateProperties("Inject" /* OptionTypes.INJECT */ , key);
    }
}
function callHook(hook, instance, type) {
    callWithAsyncErrorHandling((0, _shared.isArray)(hook) ? hook.map((h)=>h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : ()=>publicThis[key];
    if ((0, _shared.isString)(raw)) {
        const handler = ctx[raw];
        if ((0, _shared.isFunction)(handler)) watch(getter, handler);
        else warn(`Invalid watch handler specified by key "${raw}"`, handler);
    } else if ((0, _shared.isFunction)(raw)) watch(getter, raw.bind(publicThis));
    else if ((0, _shared.isObject)(raw)) {
        if ((0, _shared.isArray)(raw)) raw.forEach((r)=>createWatcher(r, ctx, publicThis, key));
        else {
            const handler = (0, _shared.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if ((0, _shared.isFunction)(handler)) watch(getter, handler, raw);
            else warn(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
    } else warn(`Invalid watch option: "${key}"`, raw);
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */ function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins , extends: extendsOptions  } = base;
    const { mixins: globalMixins , optionsCache: cache , config: { optionMergeStrategies  }  } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) resolved = cached;
    else if (!globalMixins.length && !mixins && !extendsOptions) resolved = base;
    else {
        resolved = {};
        if (globalMixins.length) globalMixins.forEach((m)=>mergeOptions(resolved, m, optionMergeStrategies, true));
        mergeOptions(resolved, base, optionMergeStrategies);
    }
    if ((0, _shared.isObject)(base)) cache.set(base, resolved);
    return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins , extends: extendsOptions  } = from;
    if (extendsOptions) mergeOptions(to, extendsOptions, strats, true);
    if (mixins) mixins.forEach((m)=>mergeOptions(to, m, strats, true));
    for(const key in from)if (asMixin && key === "expose") warn(`"expose" option is ignored when declared in mixins or extends. ` + `It should only be declared in the base component itself.`);
    else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
    return to;
}
const internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeObjectOptions,
    emits: mergeObjectOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
};
function mergeDataFn(to, from) {
    if (!from) return to;
    if (!to) return from;
    return function mergedDataFn() {
        return (0, _shared.extend)((0, _shared.isFunction)(to) ? to.call(this, this) : to, (0, _shared.isFunction)(from) ? from.call(this, this) : from);
    };
}
function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
    if ((0, _shared.isArray)(raw)) {
        const res = {};
        for(let i = 0; i < raw.length; i++)res[raw[i]] = raw[i];
        return res;
    }
    return raw;
}
function mergeAsArray(to, from) {
    return to ? [
        ...new Set([].concat(to, from))
    ] : from;
}
function mergeObjectOptions(to, from) {
    return to ? (0, _shared.extend)((0, _shared.extend)(Object.create(null), to), from) : from;
}
function mergeWatchOptions(to, from) {
    if (!to) return from;
    if (!from) return to;
    const merged = (0, _shared.extend)(Object.create(null), to);
    for(const key in from)merged[key] = mergeAsArray(to[key], from[key]);
    return merged;
}
function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    (0, _shared.def)(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    // ensure all declared prop keys are present
    for(const key in instance.propsOptions[0])if (!(key in props)) props[key] = undefined;
    validateProps(rawProps || {}, props, instance);
    if (isStateful) // stateful
    instance.props = isSSR ? props : (0, _reactivity.shallowReactive)(props);
    else if (!instance.type.props) // functional w/ optional props, props === attrs
    instance.props = attrs;
    else // functional w/ declared props
    instance.props = props;
    instance.attrs = attrs;
}
function isInHmrContext(instance) {
    while(instance){
        if (instance.type.__hmrId) return true;
        instance = instance.parent;
    }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props , attrs , vnode: { patchFlag  }  } = instance;
    const rawCurrentProps = (0, _reactivity.toRaw)(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (// always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16 /* PatchFlags.FULL_PROPS */ )) {
        if (patchFlag & 8 /* PatchFlags.PROPS */ ) {
            // Compiler-generated props & no keys change, just set the updated
            // the props.
            const propsToUpdate = instance.vnode.dynamicProps;
            for(let i = 0; i < propsToUpdate.length; i++){
                let key = propsToUpdate[i];
                // skip if the prop key is a declared emit event listener
                if (isEmitListener(instance.emitsOptions, key)) continue;
                // PROPS flag guarantees rawProps to be non-null
                const value = rawProps[key];
                if (options) {
                    // attr / props separation was done on init and will be consistent
                    // in this code path, so just check if attrs have it.
                    if ((0, _shared.hasOwn)(attrs, key)) {
                        if (value !== attrs[key]) {
                            attrs[key] = value;
                            hasAttrsChanged = true;
                        }
                    } else {
                        const camelizedKey = (0, _shared.camelize)(key);
                        props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
                    }
                } else if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                }
            }
        }
    } else {
        // full props update.
        if (setFullProps(instance, rawProps, props, attrs)) hasAttrsChanged = true;
        // in case of dynamic props, check if we need to delete keys from
        // the props object
        let kebabKey;
        for(const key in rawCurrentProps)if (!rawProps || // for camelCase
        !(0, _shared.hasOwn)(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = (0, _shared.hyphenate)(key)) === key || !(0, _shared.hasOwn)(rawProps, kebabKey))) {
            if (options) {
                if (rawPrevProps && // for camelCase
                (rawPrevProps[key] !== undefined || // for kebab-case
                rawPrevProps[kebabKey] !== undefined)) props[key] = resolvePropValue(options, rawCurrentProps, key, undefined, instance, true);
            } else delete props[key];
        }
        // in the case of functional component w/o props declaration, props and
        // attrs point to the same object so it should already have been updated.
        if (attrs !== rawCurrentProps) {
            for(const key in attrs)if (!rawProps || !(0, _shared.hasOwn)(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
            }
        }
    }
    // trigger updates for $attrs in case it's used in component slots
    if (hasAttrsChanged) (0, _reactivity.trigger)(instance, "set" /* TriggerOpTypes.SET */ , "$attrs");
    validateProps(rawProps || {}, props, instance);
}
function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) for(let key in rawProps){
        // key, ref are reserved and never passed down
        if ((0, _shared.isReservedProp)(key)) continue;
        const value = rawProps[key];
        // prop option names are camelized during normalization, so to support
        // kebab -> camel conversion here we need to camelize the key.
        let camelKey;
        if (options && (0, _shared.hasOwn)(options, camelKey = (0, _shared.camelize)(key))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) props[camelKey] = value;
            else (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        } else if (!isEmitListener(instance.emitsOptions, key)) {
            if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
            }
        }
    }
    if (needCastKeys) {
        const rawCurrentProps = (0, _reactivity.toRaw)(props);
        const castValues = rawCastValues || (0, _shared.EMPTY_OBJ);
        for(let i = 0; i < needCastKeys.length; i++){
            const key = needCastKeys[i];
            props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !(0, _shared.hasOwn)(castValues, key));
        }
    }
    return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
        const hasDefault = (0, _shared.hasOwn)(opt, "default");
        // default values
        if (hasDefault && value === undefined) {
            const defaultValue = opt.default;
            if (opt.type !== Function && (0, _shared.isFunction)(defaultValue)) {
                const { propsDefaults  } = instance;
                if (key in propsDefaults) value = propsDefaults[key];
                else {
                    setCurrentInstance(instance);
                    value = propsDefaults[key] = defaultValue.call(null, props);
                    unsetCurrentInstance();
                }
            } else value = defaultValue;
        }
        // boolean casting
        if (opt[0 /* BooleanFlags.shouldCast */ ]) {
            if (isAbsent && !hasDefault) value = false;
            else if (opt[1 /* BooleanFlags.shouldCastTrue */ ] && (value === "" || value === (0, _shared.hyphenate)(key))) value = true;
        }
    }
    return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) return cached;
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    // apply mixin/extends props
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !(0, _shared.isFunction)(comp)) {
        const extendProps = (raw)=>{
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw, appContext, true);
            (0, _shared.extend)(normalized, props);
            if (keys) needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) appContext.mixins.forEach(extendProps);
        if (comp.extends) extendProps(comp.extends);
        if (comp.mixins) comp.mixins.forEach(extendProps);
    }
    if (!raw && !hasExtends) {
        if ((0, _shared.isObject)(comp)) cache.set(comp, (0, _shared.EMPTY_ARR));
        return 0, _shared.EMPTY_ARR;
    }
    if ((0, _shared.isArray)(raw)) for(let i = 0; i < raw.length; i++){
        if (!(0, _shared.isString)(raw[i])) warn(`props must be strings when using array syntax.`, raw[i]);
        const normalizedKey = (0, _shared.camelize)(raw[i]);
        if (validatePropName(normalizedKey)) normalized[normalizedKey] = (0, _shared.EMPTY_OBJ);
    }
    else if (raw) {
        if (!(0, _shared.isObject)(raw)) warn(`invalid props options`, raw);
        for(const key in raw){
            const normalizedKey = (0, _shared.camelize)(key);
            if (validatePropName(normalizedKey)) {
                const opt = raw[key];
                const prop = normalized[normalizedKey] = (0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt) ? {
                    type: opt
                } : Object.assign({}, opt);
                if (prop) {
                    const booleanIndex = getTypeIndex(Boolean, prop.type);
                    const stringIndex = getTypeIndex(String, prop.type);
                    prop[0 /* BooleanFlags.shouldCast */ ] = booleanIndex > -1;
                    prop[1 /* BooleanFlags.shouldCastTrue */ ] = stringIndex < 0 || booleanIndex < stringIndex;
                    // if the prop needs boolean casting or default value
                    if (booleanIndex > -1 || (0, _shared.hasOwn)(prop, "default")) needCastKeys.push(normalizedKey);
                }
            }
        }
    }
    const res = [
        normalized,
        needCastKeys
    ];
    if ((0, _shared.isObject)(comp)) cache.set(comp, res);
    return res;
}
function validatePropName(key) {
    if (key[0] !== "$") return true;
    else warn(`Invalid prop name: "${key}" is a reserved property.`);
    return false;
}
// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
    return match ? match[2] : ctor === null ? "null" : "";
}
function isSameType(a, b) {
    return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
    if ((0, _shared.isArray)(expectedTypes)) return expectedTypes.findIndex((t)=>isSameType(t, type));
    else if ((0, _shared.isFunction)(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
    return -1;
}
/**
 * dev only
 */ function validateProps(rawProps, props, instance) {
    const resolvedValues = (0, _reactivity.toRaw)(props);
    const options = instance.propsOptions[0];
    for(const key in options){
        let opt = options[key];
        if (opt == null) continue;
        validateProp(key, resolvedValues[key], opt, !(0, _shared.hasOwn)(rawProps, key) && !(0, _shared.hasOwn)(rawProps, (0, _shared.hyphenate)(key)));
    }
}
/**
 * dev only
 */ function validateProp(name, value, prop, isAbsent) {
    const { type , required , validator  } = prop;
    // required!
    if (required && isAbsent) {
        warn('Missing required prop: "' + name + '"');
        return;
    }
    // missing but optional
    if (value == null && !prop.required) return;
    // type check
    if (type != null && type !== true) {
        let isValid = false;
        const types = (0, _shared.isArray)(type) ? type : [
            type
        ];
        const expectedTypes = [];
        // value is valid as long as one of the specified types match
        for(let i = 0; i < types.length && !isValid; i++){
            const { valid , expectedType  } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
        }
        if (!isValid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes));
            return;
        }
    }
    // custom validator
    if (validator && !validator(value)) warn('Invalid prop: custom validator check failed for prop "' + name + '".');
}
const isSimpleType = /*#__PURE__*/ (0, _shared.makeMap)("String,Number,Boolean,Function,Symbol,BigInt");
/**
 * dev only
 */ function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
        const t = typeof value;
        valid = t === expectedType.toLowerCase();
        // for primitive wrapper objects
        if (!valid && t === "object") valid = value instanceof type;
    } else if (expectedType === "Object") valid = (0, _shared.isObject)(value);
    else if (expectedType === "Array") valid = (0, _shared.isArray)(value);
    else if (expectedType === "null") valid = value === null;
    else valid = value instanceof type;
    return {
        valid,
        expectedType
    };
}
/**
 * dev only
 */ function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}".` + ` Expected ${expectedTypes.map((0, _shared.capitalize)).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = (0, _shared.toRawType)(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) message += ` with value ${expectedValue}`;
    message += `, got ${receivedType} `;
    // check if we need to specify received value
    if (isExplicable(receivedType)) message += `with value ${receivedValue}.`;
    return message;
}
/**
 * dev only
 */ function styleValue(value, type) {
    if (type === "String") return `"${value}"`;
    else if (type === "Number") return `${Number(value)}`;
    else return `${value}`;
}
/**
 * dev only
 */ function isExplicable(type) {
    const explicitTypes = [
        "string",
        "number",
        "boolean"
    ];
    return explicitTypes.some((elem)=>type.toLowerCase() === elem);
}
/**
 * dev only
 */ function isBoolean(...args) {
    return args.some((elem)=>elem.toLowerCase() === "boolean");
}
const isInternalKey = (key)=>key[0] === "_" || key === "$stable";
const normalizeSlotValue = (value)=>(0, _shared.isArray)(value) ? value.map(normalizeVNode) : [
        normalizeVNode(value)
    ];
const normalizeSlot = (key, rawSlot, ctx)=>{
    if (rawSlot._n) // already normalized - #5353
    return rawSlot;
    const normalized = withCtx((...args)=>{
        if (currentInstance) warn(`Slot "${key}" invoked outside of the render function: ` + `this will not track dependencies used in the slot. ` + `Invoke the slot function inside the render function instead.`);
        return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
};
const normalizeObjectSlots = (rawSlots, slots, instance)=>{
    const ctx = rawSlots._ctx;
    for(const key in rawSlots){
        if (isInternalKey(key)) continue;
        const value = rawSlots[key];
        if ((0, _shared.isFunction)(value)) slots[key] = normalizeSlot(key, value, ctx);
        else if (value != null) {
            warn(`Non-function value encountered for slot "${key}". ` + `Prefer function slots for better performance.`);
            const normalized = normalizeSlotValue(value);
            slots[key] = ()=>normalized;
        }
    }
};
const normalizeVNodeSlots = (instance, children)=>{
    if (!isKeepAlive(instance.vnode) && true) warn(`Non-function value encountered for default slot. ` + `Prefer function slots for better performance.`);
    const normalized = normalizeSlotValue(children);
    instance.slots.default = ()=>normalized;
};
const initSlots = (instance, children)=>{
    if (instance.vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // users can get the shallow readonly version of the slots object through `this.$slots`,
            // we should avoid the proxy object polluting the slots of the internal instance
            instance.slots = (0, _reactivity.toRaw)(children);
            // make compiler marker non-enumerable
            (0, _shared.def)(children, "_", type);
        } else normalizeObjectSlots(children, instance.slots = {});
    } else {
        instance.slots = {};
        if (children) normalizeVNodeSlots(instance, children);
    }
    (0, _shared.def)(instance.slots, InternalObjectKey, 1);
};
const updateSlots = (instance, children, optimized)=>{
    const { vnode , slots  } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = (0, _shared.EMPTY_OBJ);
    if (vnode.shapeFlag & 32 /* ShapeFlags.SLOTS_CHILDREN */ ) {
        const type = children._;
        if (type) {
            // compiled slots.
            if (isHmrUpdating) // Parent was HMR updated so slot content may have changed.
            // force update slots and mark instance for hmr as well
            (0, _shared.extend)(slots, children);
            else if (optimized && type === 1 /* SlotFlags.STABLE */ ) // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
            else {
                // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
                // normalization.
                (0, _shared.extend)(slots, children);
                // #2893
                // when rendering the optimized slots by manually written render function,
                // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
                // i.e. let the `renderSlot` create the bailed Fragment
                if (!optimized && type === 1 /* SlotFlags.STABLE */ ) delete slots._;
            }
        } else {
            needDeletionCheck = !children.$stable;
            normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
    } else if (children) {
        // non slot object children (direct value) passed to a component
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = {
            default: 1
        };
    }
    // delete stale slots
    if (needDeletionCheck) {
        for(const key in slots)if (!isInternalKey(key) && !(key in deletionComparisonTarget)) delete slots[key];
    }
};
function createAppContext() {
    return {
        app: null,
        config: {
            isNativeTag: (0, _shared.NO),
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: undefined,
            warnHandler: undefined,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap()
    };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
    return function createApp(rootComponent, rootProps = null) {
        if (!(0, _shared.isFunction)(rootComponent)) rootComponent = Object.assign({}, rootComponent);
        if (rootProps != null && !(0, _shared.isObject)(rootProps)) {
            warn(`root props passed to app.mount() must be an object.`);
            rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = new Set();
        let isMounted = false;
        const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version,
            get config () {
                return context.config;
            },
            set config (v){
                warn(`app.config cannot be replaced. Modify individual options instead.`);
            },
            use (plugin, ...options) {
                if (installedPlugins.has(plugin)) warn(`Plugin has already been applied to target app.`);
                else if (plugin && (0, _shared.isFunction)(plugin.install)) {
                    installedPlugins.add(plugin);
                    plugin.install(app, ...options);
                } else if ((0, _shared.isFunction)(plugin)) {
                    installedPlugins.add(plugin);
                    plugin(app, ...options);
                } else warn(`A plugin must either be a function or an object with an "install" ` + `function.`);
                return app;
            },
            mixin (mixin) {
                if (__VUE_OPTIONS_API__) {
                    if (!context.mixins.includes(mixin)) context.mixins.push(mixin);
                    else warn("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
                } else warn("Mixins are only available in builds supporting Options API");
                return app;
            },
            component (name, component) {
                validateComponentName(name, context.config);
                if (!component) return context.components[name];
                if (0, context.components[name]) warn(`Component "${name}" has already been registered in target app.`);
                context.components[name] = component;
                return app;
            },
            directive (name, directive) {
                validateDirectiveName(name);
                if (!directive) return context.directives[name];
                if (0, context.directives[name]) warn(`Directive "${name}" has already been registered in target app.`);
                context.directives[name] = directive;
                return app;
            },
            mount (rootContainer, isHydrate, isSVG) {
                if (!isMounted) {
                    // #5571
                    if (0, rootContainer.__vue_app__) warn(`There is already an app instance mounted on the host container.\n` + ` If you want to mount another app on the same host container,` + ` you need to unmount the previous app by calling \`app.unmount()\` first.`);
                    const vnode = createVNode(rootComponent, rootProps);
                    // store app context on the root VNode.
                    // this will be set on the root instance on initial mount.
                    vnode.appContext = context;
                    context.reload = ()=>{
                        render(cloneVNode(vnode), rootContainer, isSVG);
                    };
                    if (isHydrate && hydrate) hydrate(vnode, rootContainer);
                    else render(vnode, rootContainer, isSVG);
                    isMounted = true;
                    app._container = rootContainer;
                    rootContainer.__vue_app__ = app;
                    app._instance = vnode.component;
                    devtoolsInitApp(app, version);
                    return getExposeProxy(vnode.component) || vnode.component.proxy;
                } else warn(`App has already been mounted.\n` + `If you want to remount the same app, move your app creation logic ` + `into a factory function and create fresh app instances for each ` + `mount - e.g. \`const createMyApp = () => createApp(App)\``);
            },
            unmount () {
                if (isMounted) {
                    render(null, app._container);
                    app._instance = null;
                    devtoolsUnmountApp(app);
                    delete app._container.__vue_app__;
                } else warn(`Cannot unmount an app that is not mounted.`);
            },
            provide (key, value) {
                if (key in context.provides) warn(`App already provides property with key "${String(key)}". ` + `It will be overwritten with the new value.`);
                context.provides[key] = value;
                return app;
            }
        };
        return app;
    };
}
/**
 * Function for handling a template ref
 */ function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if ((0, _shared.isArray)(rawRef)) {
        rawRef.forEach((r, i)=>setRef(r, oldRawRef && ((0, _shared.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
    const refValue = vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner , r: ref  } = rawRef;
    if (!owner) {
        warn(`Missing ref owner context. ref cannot be used on hoisted vnodes. ` + `A vnode with ref must be created inside the render function.`);
        return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === (0, _shared.EMPTY_OBJ) ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    // dynamic ref changed. unset old ref
    if (oldRef != null && oldRef !== ref) {
        if ((0, _shared.isString)(oldRef)) {
            refs[oldRef] = null;
            if ((0, _shared.hasOwn)(setupState, oldRef)) setupState[oldRef] = null;
        } else if ((0, _reactivity.isRef)(oldRef)) oldRef.value = null;
    }
    if ((0, _shared.isFunction)(ref)) callWithErrorHandling(ref, owner, 12 /* ErrorCodes.FUNCTION_REF */ , [
        value,
        refs
    ]);
    else {
        const _isString = (0, _shared.isString)(ref);
        const _isRef = (0, _reactivity.isRef)(ref);
        if (_isString || _isRef) {
            const doSet = ()=>{
                if (rawRef.f) {
                    const existing = _isString ? (0, _shared.hasOwn)(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
                    if (isUnmount) (0, _shared.isArray)(existing) && (0, _shared.remove)(existing, refValue);
                    else {
                        if (!(0, _shared.isArray)(existing)) {
                            if (_isString) {
                                refs[ref] = [
                                    refValue
                                ];
                                if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = refs[ref];
                            } else {
                                ref.value = [
                                    refValue
                                ];
                                if (rawRef.k) refs[rawRef.k] = ref.value;
                            }
                        } else if (!existing.includes(refValue)) existing.push(refValue);
                    }
                } else if (_isString) {
                    refs[ref] = value;
                    if ((0, _shared.hasOwn)(setupState, ref)) setupState[ref] = value;
                } else if (_isRef) {
                    ref.value = value;
                    if (rawRef.k) refs[rawRef.k] = value;
                } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
            };
            if (value) {
                doSet.id = -1;
                queuePostRenderEffect(doSet, parentSuspense);
            } else doSet();
        } else warn("Invalid template ref type:", ref, `(${typeof ref})`);
    }
}
let hasMismatch = false;
const isSVGContainer = (container)=>/svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
const isComment = (node)=>node.nodeType === 8 /* DOMNodeTypes.COMMENT */ ;
// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.
function createHydrationFunctions(rendererInternals) {
    const { mt: mountComponent , p: patch , o: { patchProp , createText , nextSibling , parentNode , remove , insert , createComment  }  } = rendererInternals;
    const hydrate = (vnode, container)=>{
        if (!container.hasChildNodes()) {
            warn(`Attempting to hydrate existing markup but container is empty. ` + `Performing full mount instead.`);
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
        }
        hasMismatch = false;
        hydrateNode(container.firstChild, vnode, null, null, null);
        flushPostFlushCbs();
        container._vnode = vnode;
        if (hasMismatch && true) // this error should show up in production
        console.error(`Hydration completed but contains mismatches.`);
    };
    const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false)=>{
        const isFragmentStart = isComment(node) && node.data === "[";
        const onMismatch = ()=>handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
        const { type , ref , shapeFlag , patchFlag  } = vnode;
        let domType = node.nodeType;
        vnode.el = node;
        if (patchFlag === -2 /* PatchFlags.BAIL */ ) {
            optimized = false;
            vnode.dynamicChildren = null;
        }
        let nextNode = null;
        switch(type){
            case Text:
                if (domType !== 3 /* DOMNodeTypes.TEXT */ ) {
                    // #5728 empty text node inside a slot can cause hydration failure
                    // because the server rendered HTML won't contain a text node
                    if (vnode.children === "") {
                        insert(vnode.el = createText(""), parentNode(node), node);
                        nextNode = node;
                    } else nextNode = onMismatch();
                } else {
                    if (node.data !== vnode.children) {
                        hasMismatch = true;
                        warn(`Hydration text mismatch:` + `\n- Client: ${JSON.stringify(node.data)}` + `\n- Server: ${JSON.stringify(vnode.children)}`);
                        node.data = vnode.children;
                    }
                    nextNode = nextSibling(node);
                }
                break;
            case Comment:
                if (domType !== 8 /* DOMNodeTypes.COMMENT */  || isFragmentStart) nextNode = onMismatch();
                else nextNode = nextSibling(node);
                break;
            case Static:
                if (isFragmentStart) {
                    // entire template is static but SSRed as a fragment
                    node = nextSibling(node);
                    domType = node.nodeType;
                }
                if (domType === 1 /* DOMNodeTypes.ELEMENT */  || domType === 3 /* DOMNodeTypes.TEXT */ ) {
                    // determine anchor, adopt content
                    nextNode = node;
                    // if the static vnode has its content stripped during build,
                    // adopt it from the server-rendered HTML.
                    const needToAdoptContent = !vnode.children.length;
                    for(let i = 0; i < vnode.staticCount; i++){
                        if (needToAdoptContent) vnode.children += nextNode.nodeType === 1 /* DOMNodeTypes.ELEMENT */  ? nextNode.outerHTML : nextNode.data;
                        if (i === vnode.staticCount - 1) vnode.anchor = nextNode;
                        nextNode = nextSibling(nextNode);
                    }
                    return isFragmentStart ? nextSibling(nextNode) : nextNode;
                } else onMismatch();
                break;
            case Fragment:
                if (!isFragmentStart) nextNode = onMismatch();
                else nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ShapeFlags.ELEMENT */ ) {
                    if (domType !== 1 /* DOMNodeTypes.ELEMENT */  || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) nextNode = onMismatch();
                    else nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
                } else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) {
                    // when setting up the render effect, if the initial vnode already
                    // has .el set, the component will perform hydration instead of mount
                    // on its sub-tree.
                    vnode.slotScopeIds = slotScopeIds;
                    const container = parentNode(node);
                    mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized);
                    // component may be async, so in the case of fragments we cannot rely
                    // on component's rendered output to determine the end of the fragment
                    // instead, we do a lookahead to find the end anchor node.
                    nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node);
                    // #4293 teleport as component root
                    if (nextNode && isComment(nextNode) && nextNode.data === "teleport end") nextNode = nextSibling(nextNode);
                    // #3787
                    // if component is async, it may get moved / unmounted before its
                    // inner component is loaded, so we need to give it a placeholder
                    // vnode that matches its adopted DOM.
                    if (isAsyncWrapper(vnode)) {
                        let subTree;
                        if (isFragmentStart) {
                            subTree = createVNode(Fragment);
                            subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                        } else subTree = node.nodeType === 3 ? createTextVNode("") : createVNode("div");
                        subTree.el = node;
                        vnode.component.subTree = subTree;
                    }
                } else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */ ) {
                    if (domType !== 8 /* DOMNodeTypes.COMMENT */ ) nextNode = onMismatch();
                    else nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
                } else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
                else warn("Invalid HostVNode type:", type, `(${typeof type})`);
        }
        if (ref != null) setRef(ref, null, parentSuspense, vnode);
        return nextNode;
    };
    const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!vnode.dynamicChildren;
        const { type , props , patchFlag , shapeFlag , dirs  } = vnode;
        // #4006 for form elements with non-string v-model value bindings
        // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
        const forcePatchValue = type === "input" && dirs || type === "option";
        {
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
            // props
            if (props) {
                if (forcePatchValue || !optimized || patchFlag & 48 /* PatchFlags.HYDRATE_EVENTS */ ) {
                    for(const key in props)if (forcePatchValue && key.endsWith("value") || (0, _shared.isOn)(key) && !(0, _shared.isReservedProp)(key)) patchProp(el, key, null, props[key], false, undefined, parentComponent);
                } else if (props.onClick) // Fast path for click listeners (which is most often) to avoid
                // iterating through props.
                patchProp(el, "onClick", null, props.onClick, false, undefined, parentComponent);
            }
            // vnode / directive hooks
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs) queueEffectWithSuspense(()=>{
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
            // children
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */  && // skip if element has innerHTML / textContent
            !(props && (props.innerHTML || props.textContent))) {
                let next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
                let hasWarned = false;
                while(next){
                    hasMismatch = true;
                    if (!hasWarned) {
                        warn(`Hydration children mismatch in <${vnode.type}>: ` + `server rendered element contains more child nodes than client vdom.`);
                        hasWarned = true;
                    }
                    // The SSRed DOM contains more nodes than it should. Remove them.
                    const cur = next;
                    next = next.nextSibling;
                    remove(cur);
                }
            } else if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */ ) {
                if (el.textContent !== vnode.children) {
                    hasMismatch = true;
                    warn(`Hydration text content mismatch in <${vnode.type}>:\n` + `- Client: ${el.textContent}\n` + `- Server: ${vnode.children}`);
                    el.textContent = vnode.children;
                }
            }
        }
        return el.nextSibling;
    };
    const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        optimized = optimized || !!parentVNode.dynamicChildren;
        const children = parentVNode.children;
        const l = children.length;
        let hasWarned = false;
        for(let i = 0; i < l; i++){
            const vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);
            if (node) node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            else if (vnode.type === Text && !vnode.children) continue;
            else {
                hasMismatch = true;
                if (!hasWarned) {
                    warn(`Hydration children mismatch in <${container.tagName.toLowerCase()}>: ` + `server rendered element contains fewer child nodes than client vdom.`);
                    hasWarned = true;
                }
                // the SSRed DOM didn't contain enough nodes. Mount the missing ones.
                patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
            }
        }
        return node;
    };
    const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized)=>{
        const { slotScopeIds: fragmentSlotScopeIds  } = vnode;
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        const container = parentNode(node);
        const next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);
        if (next && isComment(next) && next.data === "]") return nextSibling(vnode.anchor = next);
        else {
            // fragment didn't hydrate successfully, since we didn't get a end anchor
            // back. This should have led to node/children mismatch warnings.
            hasMismatch = true;
            // since the anchor is missing, we need to create one and insert it
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
        }
    };
    const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment)=>{
        hasMismatch = true;
        warn(`Hydration node mismatch:\n- Client vnode:`, vnode.type, `\n- Server rendered DOM:`, node, node.nodeType === 3 /* DOMNodeTypes.TEXT */  ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``);
        vnode.el = null;
        if (isFragment) {
            // remove excessive fragment nodes
            const end = locateClosingAsyncAnchor(node);
            while(true){
                const next = nextSibling(node);
                if (next && next !== end) remove(next);
                else break;
            }
        }
        const next = nextSibling(node);
        const container = parentNode(node);
        remove(node);
        patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
        return next;
    };
    const locateClosingAsyncAnchor = (node)=>{
        let match = 0;
        while(node){
            node = nextSibling(node);
            if (node && isComment(node)) {
                if (node.data === "[") match++;
                if (node.data === "]") {
                    if (match === 0) return nextSibling(node);
                    else match--;
                }
            }
        }
        return node;
    };
    return [
        hydrate,
        hydrateNode
    ];
}
/* eslint-disable no-restricted-globals */ let supported;
let perf;
function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) perf.mark(`vue-${type}-${instance.uid}`);
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
}
function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
        const startTag = `vue-${type}-${instance.uid}`;
        const endTag = startTag + `:end`;
        perf.mark(endTag);
        perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
    }
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
}
function isSupported() {
    if (supported !== undefined) return supported;
    if (typeof window !== "undefined" && window.performance) {
        supported = true;
        perf = window.performance;
    } else supported = false;
    return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */ function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
        needWarn.push(`__VUE_OPTIONS_API__`);
        (0, _shared.getGlobalThis)().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
        needWarn.push(`__VUE_PROD_DEVTOOLS__`);
        (0, _shared.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (0, needWarn.length) {
        const multi = needWarn.length > 1;
        console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, ` + `which expects these compile-time feature flags to be globally injected ` + `via the bundler config in order to get better tree-shaking in the ` + `production bundle.\n\n` + `For more details, see https://link.vuejs.org/feature-flags.`);
    }
}
const queuePostRenderEffect = queueEffectWithSuspense;
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */ function createRenderer(options) {
    return baseCreateRenderer(options);
}
// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function createHydrationRenderer(options) {
    return baseCreateRenderer(options, createHydrationFunctions);
}
// implementation
function baseCreateRenderer(options, createHydrationFns) {
    initFeatureFlags();
    const target = (0, _shared.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    const { insert: hostInsert , remove: hostRemove , patchProp: hostPatchProp , createElement: hostCreateElement , createText: hostCreateText , createComment: hostCreateComment , setText: hostSetText , setElementText: hostSetElementText , parentNode: hostParentNode , nextSibling: hostNextSibling , setScopeId: hostSetScopeId = (0, _shared.NOOP) , insertStaticContent: hostInsertStaticContent  } = options;
    // Note: functions inside this closure should use `const xxx = () => {}`
    // style in order to prevent being inlined by minifiers.
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren)=>{
        if (n1 === n2) return;
        // patching & not same type, unmount old tree
        if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
        }
        if (n2.patchFlag === -2 /* PatchFlags.BAIL */ ) {
            optimized = false;
            n2.dynamicChildren = null;
        }
        const { type , ref , shapeFlag  } = n2;
        switch(type){
            case Text:
                processText(n1, n2, container, anchor);
                break;
            case Comment:
                processCommentNode(n1, n2, container, anchor);
                break;
            case Static:
                if (n1 == null) mountStaticNode(n2, container, anchor, isSVG);
                else patchStaticNode(n1, n2, container, isSVG);
                break;
            case Fragment:
                processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                break;
            default:
                if (shapeFlag & 1 /* ShapeFlags.ELEMENT */ ) processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (shapeFlag & 64 /* ShapeFlags.TELEPORT */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
                else warn("Invalid VNode type:", type, `(${typeof type})`);
        }
        // set ref
        if (ref != null && parentComponent) setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    };
    const processText = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) hostSetText(el, n2.children);
        }
    };
    const processCommentNode = (n1, n2, container, anchor)=>{
        if (n1 == null) hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        else // there's no support for dynamic comments
        n2.el = n1.el;
    };
    const mountStaticNode = (n2, container, anchor, isSVG)=>{
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
    };
    /**
     * Dev / HMR only
     */ const patchStaticNode = (n1, n2, container, isSVG)=>{
        // static nodes are only patched during dev for HMR
        if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            // remove existing
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
        } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
        }
    };
    const moveStaticNode = ({ el , anchor  }, container, nextSibling)=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
        }
        hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el , anchor  })=>{
        let next;
        while(el && el !== anchor){
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
        }
        hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        isSVG = isSVG || n2.type === "svg";
        if (n1 == null) mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        else patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let el;
        let vnodeHook;
        const { type , props , shapeFlag , transition , dirs  } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        // mount children first, since some props may rely on child content
        // being already rendered, e.g. `<select value>`
        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */ ) hostSetElementText(el, vnode.children);
        else if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "created");
        // scopeId
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        // props
        if (props) {
            for(const key in props)if (key !== "value" && !(0, _shared.isReservedProp)(key)) hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            /**
             * Special case for setting value on DOM elements:
             * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
             * - it needs to be forced (#1471)
             * #2353 proposes adding another renderer option to configure this, but
             * the properties affects are so finite it is worth special casing it
             * here to reduce the complexity. (Special casing it also should not
             * affect non-DOM renderers)
             */ if ("value" in props) hostPatchProp(el, "value", null, props.value);
            if (vnodeHook = props.onVnodeBeforeMount) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        Object.defineProperty(el, "__vnode", {
            value: vnode,
            enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
            value: parentComponent,
            enumerable: false
        });
        if (dirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
        // #1689 For inside suspense + suspense resolved case, just call it
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent)=>{
        if (scopeId) hostSetScopeId(el, scopeId);
        if (slotScopeIds) for(let i = 0; i < slotScopeIds.length; i++)hostSetScopeId(el, slotScopeIds[i]);
        if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */ ) subTree = filterSingleRoot(subTree.children) || subTree;
            if (vnode === subTree) {
                const parentVNode = parentComponent.vnode;
                setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
            }
        }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0)=>{
        for(let i = start; i < children.length; i++){
            const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
            patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const el = n2.el = n1.el;
        let { patchFlag , dynamicChildren , dirs  } = n2;
        // #1426 take the old vnode's patch flag into account since user may clone a
        // compiler-generated vnode, which de-opts to FULL_PROPS
        patchFlag |= n1.patchFlag & 16 /* PatchFlags.FULL_PROPS */ ;
        const oldProps = n1.props || (0, _shared.EMPTY_OBJ);
        const newProps = n2.props || (0, _shared.EMPTY_OBJ);
        let vnodeHook;
        // disable recurse in beforeUpdate hooks
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        if (dirs) invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        parentComponent && toggleRecurse(parentComponent, true);
        if (isHmrUpdating) {
            // HMR updated, force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        const areChildrenSVG = isSVG && n2.type !== "foreignObject";
        if (dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
        } else if (!optimized) // full diff
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        if (patchFlag > 0) {
            // the presence of a patchFlag means this element's render code was
            // generated by the compiler and can take the fast path.
            // in this path old node and new node are guaranteed to have the same shape
            // (i.e. at the exact same position in the source template)
            if (patchFlag & 16 /* PatchFlags.FULL_PROPS */ ) // element props contain dynamic keys, full diff needed
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
            else {
                // class
                // this flag is matched when the element has dynamic class bindings.
                if (patchFlag & 2 /* PatchFlags.CLASS */ ) {
                    if (oldProps.class !== newProps.class) hostPatchProp(el, "class", null, newProps.class, isSVG);
                }
                // style
                // this flag is matched when the element has dynamic style bindings
                if (patchFlag & 4 /* PatchFlags.STYLE */ ) hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
                // props
                // This flag is matched when the element has dynamic prop/attr bindings
                // other than class and style. The keys of dynamic prop/attrs are saved for
                // faster iteration.
                // Note dynamic keys like :[foo]="bar" will cause this optimization to
                // bail out and go through a full diff because we need to unset the old key
                if (patchFlag & 8 /* PatchFlags.PROPS */ ) {
                    // if the flag is present then dynamicProps must be non-null
                    const propsToUpdate = n2.dynamicProps;
                    for(let i = 0; i < propsToUpdate.length; i++){
                        const key = propsToUpdate[i];
                        const prev = oldProps[key];
                        const next = newProps[key];
                        // #1471 force patch value
                        if (next !== prev || key === "value") hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                    }
                }
            }
            // text
            // This flag is matched when the element has only dynamic text children.
            if (patchFlag & 1 /* PatchFlags.TEXT */ ) {
                if (n1.children !== n2.children) hostSetElementText(el, n2.children);
            }
        } else if (!optimized && dynamicChildren == null) // unoptimized, full diff
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
    };
    // The fast path for blocks.
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds)=>{
        for(let i = 0; i < newChildren.length; i++){
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            // Determine the container (parent element) for the patch.
            const container = // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & 70 /* ShapeFlags.TELEPORT */ ) ? hostParentNode(oldVNode.el) : // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer;
            patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG)=>{
        if (oldProps !== newProps) {
            if (oldProps !== (0, _shared.EMPTY_OBJ)) {
                for(const key in oldProps)if (!(0, _shared.isReservedProp)(key) && !(key in newProps)) hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            for(const key in newProps){
                // empty string is not valid prop
                if ((0, _shared.isReservedProp)(key)) continue;
                const next = newProps[key];
                const prev = oldProps[key];
                // defer patching value
                if (next !== prev && key !== "value") hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
            if ("value" in newProps) hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag , dynamicChildren , slotScopeIds: fragmentSlotScopeIds  } = n2;
        if (// #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */ ) {
            // HMR updated / Dev root fragment (w/ comments), force full diff
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
        }
        // check if this is a slot fragment with :slotted scope ids
        if (fragmentSlotScopeIds) slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            // a fragment can only have array children
            // since they are either generated by the compiler, or implicitly created
            // from arrays.
            mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */  && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
            // a stable fragment (template root or <template v-for>) doesn't need to
            // patch children order, but it may contain dynamicChildren.
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (parentComponent && parentComponent.type.__hmrId) traverseStaticChildren(n1, n2);
            else if (// #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree) traverseStaticChildren(n1, n2, true);
        } else // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
            if (n2.shapeFlag & 512 /* ShapeFlags.COMPONENT_KEPT_ALIVE */ ) parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
            else mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        } else updateComponent(n1, n2, optimized);
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized)=>{
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (0, instance.type.__hmrId) registerHMR(instance);
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
        // inject renderer internals for keepAlive
        if (isKeepAlive(initialVNode)) instance.ctx.renderer = internals;
        startMeasure(instance, `init`);
        setupComponent(instance);
        endMeasure(instance, `init`);
        // setup() is async. This component relies on async logic to be resolved
        // before proceeding
        if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            // Give it a placeholder if this is not hydration
            // TODO handle self-defined fallback
            if (!initialVNode.el) {
                const placeholder = instance.subTree = createVNode(Comment);
                processCommentNode(null, placeholder, container, anchor);
            }
            return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
        popWarningContext();
        endMeasure(instance, `mount`);
    };
    const updateComponent = (n1, n2, optimized)=>{
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
                pushWarningContext(n2);
                updateComponentPreRender(instance, n2, optimized);
                popWarningContext();
                return;
            } else {
                // normal update
                instance.next = n2;
                // in case the child component is also queued, remove it to avoid
                // double updating the same child component in the same flush.
                invalidateJob(instance.update);
                // instance.update is the reactive effect.
                instance.update();
            }
        } else {
            // no update needed. just copy over properties
            n2.el = n1.el;
            instance.vnode = n2;
        }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized)=>{
        const componentUpdateFn = ()=>{
            if (!instance.isMounted) {
                let vnodeHook;
                const { el , props  } = initialVNode;
                const { bm , m , parent  } = instance;
                const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
                toggleRecurse(instance, false);
                // beforeMount hook
                if (bm) (0, _shared.invokeArrayFns)(bm);
                // onVnodeBeforeMount
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) invokeVNodeHook(vnodeHook, parent, initialVNode);
                toggleRecurse(instance, true);
                if (el && hydrateNode) {
                    // vnode has adopted host node - perform hydration instead of mount.
                    const hydrateSubTree = ()=>{
                        startMeasure(instance, `render`);
                        instance.subTree = renderComponentRoot(instance);
                        endMeasure(instance, `render`);
                        startMeasure(instance, `hydrate`);
                        hydrateNode(el, instance.subTree, instance, parentSuspense, null);
                        endMeasure(instance, `hydrate`);
                    };
                    if (isAsyncWrapperVNode) initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
                    // which means it won't track dependencies - but it's ok because
                    // a server-rendered async wrapper is already in resolved state
                    // and it will never need to change.
                    ()=>!instance.isUnmounted && hydrateSubTree());
                    else hydrateSubTree();
                } else {
                    startMeasure(instance, `render`);
                    const subTree = instance.subTree = renderComponentRoot(instance);
                    endMeasure(instance, `render`);
                    startMeasure(instance, `patch`);
                    patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
                    endMeasure(instance, `patch`);
                    initialVNode.el = subTree.el;
                }
                // mounted hook
                if (m) queuePostRenderEffect(m, parentSuspense);
                // onVnodeMounted
                if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                    const scopedInitialVNode = initialVNode;
                    queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
                }
                // activated hook for keep-alive roots.
                // #1742 activated hook must be accessed after first render
                // since the hook may be injected by a child keep-alive
                if (initialVNode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */  || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ) instance.a && queuePostRenderEffect(instance.a, parentSuspense);
                instance.isMounted = true;
                devtoolsComponentAdded(instance);
                // #2458: deference mount-only object parameters to prevent memleaks
                initialVNode = container = anchor = null;
            } else {
                // updateComponent
                // This is triggered by mutation of component's own state (next: null)
                // OR parent calling processComponent (next: VNode)
                let { next , bu , u , parent , vnode  } = instance;
                let originNext = next;
                let vnodeHook;
                pushWarningContext(next || instance.vnode);
                // Disallow component effect recursion during pre-lifecycle hooks.
                toggleRecurse(instance, false);
                if (next) {
                    next.el = vnode.el;
                    updateComponentPreRender(instance, next, optimized);
                } else next = vnode;
                // beforeUpdate hook
                if (bu) (0, _shared.invokeArrayFns)(bu);
                // onVnodeBeforeUpdate
                if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) invokeVNodeHook(vnodeHook, parent, next, vnode);
                toggleRecurse(instance, true);
                startMeasure(instance, `render`);
                const nextTree = renderComponentRoot(instance);
                endMeasure(instance, `render`);
                const prevTree = instance.subTree;
                instance.subTree = nextTree;
                startMeasure(instance, `patch`);
                patch(prevTree, nextTree, // parent may have changed if it's in a teleport
                hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
                getNextHostNode(prevTree), instance, parentSuspense, isSVG);
                endMeasure(instance, `patch`);
                next.el = nextTree.el;
                if (originNext === null) // self-triggered update. In case of HOC, update parent component
                // vnode el. HOC is indicated by parent instance's subTree pointing
                // to child component's vnode
                updateHOCHostEl(instance, nextTree.el);
                // updated hook
                if (u) queuePostRenderEffect(u, parentSuspense);
                // onVnodeUpdated
                if (vnodeHook = next.props && next.props.onVnodeUpdated) queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
                devtoolsComponentUpdated(instance);
                popWarningContext();
            }
        };
        // create reactive effect for rendering
        const effect = instance.effect = new (0, _reactivity.ReactiveEffect)(componentUpdateFn, ()=>queueJob(update), instance.scope // track it in component's effect scope
        );
        const update = instance.update = ()=>effect.run();
        update.id = instance.uid;
        // allowRecurse
        // #1801, #2043 component render effects should allow recursive updates
        toggleRecurse(instance, true);
        effect.onTrack = instance.rtc ? (e)=>(0, _shared.invokeArrayFns)(instance.rtc, e) : void 0;
        effect.onTrigger = instance.rtg ? (e)=>(0, _shared.invokeArrayFns)(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
        update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized)=>{
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        (0, _reactivity.pauseTracking)();
        // props update may have triggered pre-flush watchers.
        // flush them before the render update.
        flushPreFlushCbs();
        (0, _reactivity.resetTracking)();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false)=>{
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag , shapeFlag  } = n2;
        // fast path
        if (patchFlag > 0) {
            if (patchFlag & 128 /* PatchFlags.KEYED_FRAGMENT */ ) {
                // this could be either fully-keyed or mixed (some keyed some not)
                // presence of patchFlag means children are guaranteed to be arrays
                patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            } else if (patchFlag & 256 /* PatchFlags.UNKEYED_FRAGMENT */ ) {
                // unkeyed
                patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                return;
            }
        }
        // children has 3 possibilities: text, array or no children.
        if (shapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */ ) {
            // text children fast path
            if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) unmountChildren(c1, parentComponent, parentSuspense);
            if (c2 !== c1) hostSetElementText(container, c2);
        } else if (prevShapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) {
            // prev children was array
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) // two arrays, cannot assume anything, do full diff
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
        } else {
            // prev children was text OR null
            // new children is array OR null
            if (prevShapeFlag & 8 /* ShapeFlags.TEXT_CHILDREN */ ) hostSetElementText(container, "");
            // mount new if array
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        c1 = c1 || (0, _shared.EMPTY_ARR);
        c2 = c2 || (0, _shared.EMPTY_ARR);
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for(i = 0; i < commonLength; i++){
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) // remove old
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        else // mount new
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    };
    // can be all-keyed or mixed
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)=>{
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1; // prev ending index
        let e2 = l2 - 1; // next ending index
        // 1. sync from start
        // (a b) c
        // (a b) d e
        while(i <= e1 && i <= e2){
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            i++;
        }
        // 2. sync from end
        // a (b c)
        // d e (b c)
        while(i <= e1 && i <= e2){
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            else break;
            e1--;
            e2--;
        }
        // 3. common sequence + mount
        // (a b)
        // (a b) c
        // i = 2, e1 = 1, e2 = 2
        // (a b)
        // c (a b)
        // i = 0, e1 = -1, e2 = 0
        if (i > e1) {
            if (i <= e2) {
                const nextPos = e2 + 1;
                const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
                while(i <= e2){
                    patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    i++;
                }
            }
        } else if (i > e2) while(i <= e1){
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
        }
        else {
            const s1 = i; // prev starting index
            const s2 = i; // next starting index
            // 5.1 build key:index map for newChildren
            const keyToNewIndexMap = new Map();
            for(i = s2; i <= e2; i++){
                const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
                if (nextChild.key != null) {
                    if (keyToNewIndexMap.has(nextChild.key)) warn(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
                    keyToNewIndexMap.set(nextChild.key, i);
                }
            }
            // 5.2 loop through old children left to be patched and try to patch
            // matching nodes & remove nodes that are no longer present
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            // used to track whether any node has moved
            let maxNewIndexSoFar = 0;
            // works as Map<newIndex, oldIndex>
            // Note that oldIndex is offset by +1
            // and oldIndex = 0 is a special value indicating the new node has
            // no corresponding old node.
            // used for determining longest stable subsequence
            const newIndexToOldIndexMap = new Array(toBePatched);
            for(i = 0; i < toBePatched; i++)newIndexToOldIndexMap[i] = 0;
            for(i = s1; i <= e1; i++){
                const prevChild = c1[i];
                if (patched >= toBePatched) {
                    // all new children have been patched so this can only be a removal
                    unmount(prevChild, parentComponent, parentSuspense, true);
                    continue;
                }
                let newIndex;
                if (prevChild.key != null) newIndex = keyToNewIndexMap.get(prevChild.key);
                else {
                    // key-less node, try to locate a key-less node of the same type
                    for(j = s2; j <= e2; j++)if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                        newIndex = j;
                        break;
                    }
                }
                if (newIndex === undefined) unmount(prevChild, parentComponent, parentSuspense, true);
                else {
                    newIndexToOldIndexMap[newIndex - s2] = i + 1;
                    if (newIndex >= maxNewIndexSoFar) maxNewIndexSoFar = newIndex;
                    else moved = true;
                    patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                    patched++;
                }
            }
            // 5.3 move and mount
            // generate longest stable subsequence only when nodes have moved
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : (0, _shared.EMPTY_ARR);
            j = increasingNewIndexSequence.length - 1;
            // looping backwards so that we can use last patched node as anchor
            for(i = toBePatched - 1; i >= 0; i--){
                const nextIndex = s2 + i;
                const nextChild = c2[nextIndex];
                const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
                if (newIndexToOldIndexMap[i] === 0) // mount new
                patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
                else if (moved) {
                    // move if:
                    // There is no stable subsequence (e.g. a reverse)
                    // OR current node is not among the stable sequence
                    if (j < 0 || i !== increasingNewIndexSequence[j]) move(nextChild, container, anchor, 2 /* MoveType.REORDER */ );
                    else j--;
                }
            }
        }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null)=>{
        const { el , type , transition , children , shapeFlag  } = vnode;
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
        }
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) {
            vnode.suspense.move(container, anchor, moveType);
            return;
        }
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */ ) {
            type.move(vnode, container, anchor, internals);
            return;
        }
        if (type === Fragment) {
            hostInsert(el, container, anchor);
            for(let i = 0; i < children.length; i++)move(children[i], container, anchor, moveType);
            hostInsert(vnode.anchor, container, anchor);
            return;
        }
        if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
        }
        // single nodes
        const needTransition = moveType !== 2 /* MoveType.REORDER */  && shapeFlag & 1 /* ShapeFlags.ELEMENT */  && transition;
        if (needTransition) {
            if (moveType === 0 /* MoveType.ENTER */ ) {
                transition.beforeEnter(el);
                hostInsert(el, container, anchor);
                queuePostRenderEffect(()=>transition.enter(el), parentSuspense);
            } else {
                const { leave , delayLeave , afterLeave  } = transition;
                const remove = ()=>hostInsert(el, container, anchor);
                const performLeave = ()=>{
                    leave(el, ()=>{
                        remove();
                        afterLeave && afterLeave();
                    });
                };
                if (delayLeave) delayLeave(el, remove, performLeave);
                else performLeave();
            }
        } else hostInsert(el, container, anchor);
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false)=>{
        const { type , props , ref , children , dynamicChildren , shapeFlag , patchFlag , dirs  } = vnode;
        // unset ref
        if (ref != null) setRef(ref, null, parentSuspense, vnode, true);
        if (shapeFlag & 256 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ) {
            parentComponent.ctx.deactivate(vnode);
            return;
        }
        const shouldInvokeDirs = shapeFlag & 1 /* ShapeFlags.ELEMENT */  && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) invokeVNodeHook(vnodeHook, parentComponent, vnode);
        if (shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) unmountComponent(vnode.component, parentSuspense, doRemove);
        else {
            if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) {
                vnode.suspense.unmount(parentSuspense, doRemove);
                return;
            }
            if (shouldInvokeDirs) invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            if (shapeFlag & 64 /* ShapeFlags.TELEPORT */ ) vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
            else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
            (type !== Fragment || patchFlag > 0 && patchFlag & 64 /* PatchFlags.STABLE_FRAGMENT */ )) // fast path for block nodes: only need to unmount dynamic children.
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
            else if (type === Fragment && patchFlag & 384 /* PatchFlags.UNKEYED_FRAGMENT */  || !optimized && shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) unmountChildren(children, parentComponent, parentSuspense);
            if (doRemove) remove(vnode);
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) queuePostRenderEffect(()=>{
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
    };
    const remove = (vnode)=>{
        const { type , el , anchor , transition  } = vnode;
        if (type === Fragment) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 /* PatchFlags.DEV_ROOT_FRAGMENT */  && transition && !transition.persisted) vnode.children.forEach((child)=>{
                if (child.type === Comment) hostRemove(child.el);
                else remove(child);
            });
            else removeFragment(el, anchor);
            return;
        }
        if (type === Static) {
            removeStaticNode(vnode);
            return;
        }
        const performRemove = ()=>{
            hostRemove(el);
            if (transition && !transition.persisted && transition.afterLeave) transition.afterLeave();
        };
        if (vnode.shapeFlag & 1 /* ShapeFlags.ELEMENT */  && transition && !transition.persisted) {
            const { leave , delayLeave  } = transition;
            const performLeave = ()=>leave(el, performRemove);
            if (delayLeave) delayLeave(vnode.el, performRemove, performLeave);
            else performLeave();
        } else performRemove();
    };
    const removeFragment = (cur, end)=>{
        // For fragments, directly remove all contained DOM nodes.
        // (fragment child nodes cannot have transition)
        let next;
        while(cur !== end){
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
        }
        hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove)=>{
        if (0, instance.type.__hmrId) unregisterHMR(instance);
        const { bum , scope , update , subTree , um  } = instance;
        // beforeUnmount hook
        if (bum) (0, _shared.invokeArrayFns)(bum);
        // stop effects in component scope
        scope.stop();
        // update may be null if a component is unmounted before its async
        // setup has resolved.
        if (update) {
            // so that scheduler will no longer invoke it
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
        }
        // unmounted hook
        if (um) queuePostRenderEffect(um, parentSuspense);
        queuePostRenderEffect(()=>{
            instance.isUnmounted = true;
        }, parentSuspense);
        // A component with async dep inside a pending suspense is unmounted before
        // its async dep resolves. This should remove the dep from the suspense, and
        // cause the suspense to resolve immediately if that was the last dep.
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) parentSuspense.resolve();
        }
        devtoolsComponentRemoved(instance);
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0)=>{
        for(let i = start; i < children.length; i++)unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    };
    const getNextHostNode = (vnode)=>{
        if (vnode.shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) return getNextHostNode(vnode.component.subTree);
        if (vnode.shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) return vnode.suspense.next();
        return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render = (vnode, container, isSVG)=>{
        if (vnode == null) {
            if (container._vnode) unmount(container._vnode, null, null, true);
        } else patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        flushPreFlushCbs();
        flushPostFlushCbs();
        container._vnode = vnode;
    };
    const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) [hydrate, hydrateNode] = createHydrationFns(internals);
    return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
    };
}
function toggleRecurse({ effect , update  }, allowed) {
    effect.allowRecurse = update.allowRecurse = allowed;
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always be moved. Therefore, in order to ensure correct move
 * position, el should be inherited from previous nodes.
 */ function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if ((0, _shared.isArray)(ch1) && (0, _shared.isArray)(ch2)) for(let i = 0; i < ch1.length; i++){
        // this is only called in the optimized path so array children are
        // guaranteed to be vnodes
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 /* ShapeFlags.ELEMENT */  && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32 /* PatchFlags.HYDRATE_EVENTS */ ) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
            }
            if (!shallow) traverseStaticChildren(c1, c2);
        }
        // #6852 also inherit for text nodes
        if (c2.type === Text) c2.el = c1.el;
        // also inherit for comment nodes, but not placeholders (e.g. v-if which
        // would have received .el during block patch)
        if (c2.type === Comment && !c2.el) c2.el = c1.el;
    }
}
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr) {
    const p = arr.slice();
    const result = [
        0
    ];
    let i, j, u, v1, c;
    const len = arr.length;
    for(i = 0; i < len; i++){
        const arrI = arr[i];
        if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v1 = result.length - 1;
            while(u < v1){
                c = u + v1 >> 1;
                if (arr[result[c]] < arrI) u = c + 1;
                else v1 = c;
            }
            if (arrI < arr[result[u]]) {
                if (u > 0) p[i] = result[u - 1];
                result[u] = i;
            }
        }
    }
    u = result.length;
    v1 = result[u - 1];
    while(u-- > 0){
        result[u] = v1;
        v1 = p[v1];
    }
    return result;
}
const isTeleport = (type)=>type.__isTeleport;
const isTeleportDisabled = (props)=>props && (props.disabled || props.disabled === "");
const isTargetSVG = (target)=>typeof SVGElement !== "undefined" && target instanceof SVGElement;
const resolveTarget = (props, select)=>{
    const targetSelector = props && props.to;
    if ((0, _shared.isString)(targetSelector)) {
        if (!select) {
            warn(`Current renderer does not support string target for Teleports. ` + `(missing querySelector renderer option)`);
            return null;
        } else {
            const target = select(targetSelector);
            if (!target) warn(`Failed to locate Teleport target with selector "${targetSelector}". ` + `Note the target element must exist before the component is mounted - ` + `i.e. the target cannot be rendered by the component itself, and ` + `ideally should be outside of the entire Vue component tree.`);
            return target;
        }
    } else {
        if (!targetSelector && !isTeleportDisabled(props)) warn(`Invalid Teleport target: ${targetSelector}`);
        return targetSelector;
    }
};
const TeleportImpl = {
    __isTeleport: true,
    process (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
        const { mc: mountChildren , pc: patchChildren , pbc: patchBlockChildren , o: { insert , querySelector , createText , createComment  }  } = internals;
        const disabled = isTeleportDisabled(n2.props);
        let { shapeFlag , children , dynamicChildren  } = n2;
        // #3302
        // HMR updated, force full diff
        if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
        }
        if (n1 == null) {
            // insert anchors in the main view
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
                insert(targetAnchor, target);
                // #2652 we could be teleporting from a non-SVG tree into an SVG tree
                isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) warn("Invalid Teleport target on mount:", target, `(${typeof target})`);
            const mount = (container, anchor)=>{
                // Teleport *always* has Array children. This is enforced in both the
                // compiler and vnode children normalization.
                if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            };
            if (disabled) mount(container, mainAnchor);
            else if (target) mount(target, targetAnchor);
        } else {
            // update content
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
                // fast path when the teleport happens to be a block root
                patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds);
                // even in block tree mode we need to make sure all root-level nodes
                // in the teleport inherit previous DOM references so that they can
                // be moved in future patches.
                traverseStaticChildren(n1, n2, true);
            } else if (!optimized) patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
            if (disabled) {
                if (!wasDisabled) // enabled -> disabled
                // move into main container
                moveTeleport(n2, container, mainAnchor, internals, 1 /* TeleportMoveTypes.TOGGLE */ );
            } else {
                // target changed
                if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                    const nextTarget = n2.target = resolveTarget(n2.props, querySelector);
                    if (nextTarget) moveTeleport(n2, nextTarget, null, internals, 0 /* TeleportMoveTypes.TARGET_CHANGE */ );
                    else warn("Invalid Teleport target on update:", target, `(${typeof target})`);
                } else if (wasDisabled) // disabled -> enabled
                // move into teleport target
                moveTeleport(n2, target, targetAnchor, internals, 1 /* TeleportMoveTypes.TOGGLE */ );
            }
        }
        updateCssVars(n2);
    },
    remove (vnode, parentComponent, parentSuspense, optimized, { um: unmount , o: { remove: hostRemove  }  }, doRemove) {
        const { shapeFlag , children , anchor , targetAnchor , target , props  } = vnode;
        if (target) hostRemove(targetAnchor);
        // an unmounted teleport should always remove its children if not disabled
        if (doRemove || !isTeleportDisabled(props)) {
            hostRemove(anchor);
            if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++){
                const child = children[i];
                unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
            }
        }
    },
    move: moveTeleport,
    hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, { o: { insert  } , m: move  }, moveType = 2 /* TeleportMoveTypes.REORDER */ ) {
    // move target anchor if this is a target change.
    if (moveType === 0 /* TeleportMoveTypes.TARGET_CHANGE */ ) insert(vnode.targetAnchor, container, parentAnchor);
    const { el , anchor , shapeFlag , children , props  } = vnode;
    const isReorder = moveType === 2 /* TeleportMoveTypes.REORDER */ ;
    // move main view anchor if this is a re-order.
    if (isReorder) insert(el, container, parentAnchor);
    // if this is a re-order and teleport is enabled (content is in target)
    // do not move children. So the opposite is: only move children if this
    // is not a reorder, or the teleport is disabled
    if (!isReorder || isTeleportDisabled(props)) {
        // Teleport has either Array children or no children.
        if (shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) for(let i = 0; i < children.length; i++)move(children[i], container, parentAnchor, 2 /* MoveType.REORDER */ );
    }
    // move main view anchor if this is a re-order.
    if (isReorder) insert(anchor, container, parentAnchor);
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, { o: { nextSibling , parentNode , querySelector  }  }, hydrateChildren) {
    const target = vnode.target = resolveTarget(vnode.props, querySelector);
    if (target) {
        // if multiple teleports rendered to the same target element, we need to
        // pick up from where the last teleport finished instead of the first node
        const targetNode = target._lpa || target.firstChild;
        if (vnode.shapeFlag & 16 /* ShapeFlags.ARRAY_CHILDREN */ ) {
            if (isTeleportDisabled(vnode.props)) {
                vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
                vnode.targetAnchor = targetNode;
            } else {
                vnode.anchor = nextSibling(node);
                // lookahead until we find the target anchor
                // we cannot rely on return value of hydrateChildren() because there
                // could be nested teleports
                let targetAnchor = targetNode;
                while(targetAnchor){
                    targetAnchor = nextSibling(targetAnchor);
                    if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                        vnode.targetAnchor = targetAnchor;
                        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                        break;
                    }
                }
                hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
        }
        updateCssVars(vnode);
    }
    return vnode.anchor && nextSibling(vnode.anchor);
}
// Force-casted public typing for h and TSX props inference
const Teleport = TeleportImpl;
function updateCssVars(vnode) {
    // presence of .ut method indicates owner component uses css vars.
    // code path here can assume browser environment.
    const ctx = vnode.ctx;
    if (ctx && ctx.ut) {
        let node = vnode.children[0].el;
        while(node !== vnode.targetAnchor){
            if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
        }
        ctx.ut();
    }
}
const Fragment = Symbol("Fragment");
const Text = Symbol("Text");
const Comment = Symbol("Comment");
const Static = Symbol("Static");
// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack = [];
let currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */ function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
}
// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */ function setBlockTracking(value) {
    isBlockTreeEnabled += value;
}
function setupBlock(vnode) {
    // save current block children on the block vnode
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || (0, _shared.EMPTY_ARR) : null;
    // close block
    closeBlock();
    // a block is always going to be patched, so track it as a child of its
    // parent block
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(vnode);
    return vnode;
}
/**
 * @private
 */ function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */ function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 /* ShapeFlags.COMPONENT */  && hmrDirtyComponents.has(n2.type)) {
        // #7042, ensure the vnode being unmounted during HMR
        // bitwise operations to remove keep alive flags
        n1.shapeFlag &= -257 /* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */ ;
        n2.shapeFlag &= -513 /* ShapeFlags.COMPONENT_KEPT_ALIVE */ ;
        // HMR only: if the component has been hot-updated, force a reload.
        return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
}
let vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */ function transformVNodeArgs(transformer) {
    vnodeArgsTransformer = transformer;
}
const createVNodeWithArgsTransform = (...args)=>{
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
};
const InternalObjectKey = `__vInternal`;
const normalizeKey = ({ key  })=>key != null ? key : null;
const normalizeRef = ({ ref , ref_key , ref_for  })=>{
    return ref != null ? (0, _shared.isString)(ref) || (0, _reactivity.isRef)(ref) || (0, _shared.isFunction)(ref) ? {
        i: currentRenderingInstance,
        r: ref,
        k: ref_key,
        f: !!ref_for
    } : ref : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1 /* ShapeFlags.ELEMENT */ , isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props,
        key: props && normalizeKey(props),
        ref: props && normalizeRef(props),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        // normalize suspense children
        if (shapeFlag & 128 /* ShapeFlags.SUSPENSE */ ) type.normalize(vnode);
    } else if (children) // compiled element vnode - if children is passed, only possible types are
    // string or Array.
    vnode.shapeFlag |= (0, _shared.isString)(children) ? 8 /* ShapeFlags.TEXT_CHILDREN */  : 16 /* ShapeFlags.ARRAY_CHILDREN */ ;
    // validate key
    if (vnode.key !== vnode.key) warn(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    // track vnode for block tree
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32 /* PatchFlags.HYDRATE_EVENTS */ ) currentBlock.push(vnode);
    return vnode;
}
const createVNode = createVNodeWithArgsTransform;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
        if (!type) warn(`Invalid vnode type when creating vnode: ${type}.`);
        type = Comment;
    }
    if (isVNode(type)) {
        // createVNode receiving an existing vnode. This happens in cases like
        // <component :is="vnode"/>
        // #2078 make sure to merge refs during the clone instead of overwriting it
        const cloned = cloneVNode(type, props, true);
        if (children) normalizeChildren(cloned, children);
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6 /* ShapeFlags.COMPONENT */ ) currentBlock[currentBlock.indexOf(type)] = cloned;
            else currentBlock.push(cloned);
        }
        cloned.patchFlag |= -2 /* PatchFlags.BAIL */ ;
        return cloned;
    }
    // class component normalization.
    if (isClassComponent(type)) type = type.__vccOpts;
    // class & style normalization.
    if (props) {
        // for reactive or proxy objects, we need to clone it to enable mutation.
        props = guardReactiveProps(props);
        let { class: klass , style  } = props;
        if (klass && !(0, _shared.isString)(klass)) props.class = (0, _shared.normalizeClass)(klass);
        if ((0, _shared.isObject)(style)) {
            // reactive state objects need to be cloned since they are likely to be
            // mutated
            if ((0, _reactivity.isProxy)(style) && !(0, _shared.isArray)(style)) style = (0, _shared.extend)({}, style);
            props.style = (0, _shared.normalizeStyle)(style);
        }
    }
    // encode the vnode type information into a bitmap
    const shapeFlag = (0, _shared.isString)(type) ? 1 /* ShapeFlags.ELEMENT */  : isSuspense(type) ? 128 /* ShapeFlags.SUSPENSE */  : isTeleport(type) ? 64 /* ShapeFlags.TELEPORT */  : (0, _shared.isObject)(type) ? 4 /* ShapeFlags.STATEFUL_COMPONENT */  : (0, _shared.isFunction)(type) ? 2 /* ShapeFlags.FUNCTIONAL_COMPONENT */  : 0;
    if (shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */  && (0, _reactivity.isProxy)(type)) {
        type = (0, _reactivity.toRaw)(type);
        warn(`Vue received a Component which was made a reactive object. This can ` + `lead to unnecessary performance overhead, and should be avoided by ` + `marking the component with \`markRaw\` or using \`shallowRef\` ` + `instead of \`ref\`.`, `\nComponent that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
    if (!props) return null;
    return (0, _reactivity.isProxy)(props) || InternalObjectKey in props ? (0, _shared.extend)({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false) {
    // This is intentionally NOT using spread or extend to avoid the runtime
    // key enumeration cost.
    const { props , ref , patchFlag , children  } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref ? (0, _shared.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [
            ref,
            normalizeRef(extraProps)
        ] : normalizeRef(extraProps) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children: patchFlag === -1 /* PatchFlags.HOISTED */  && (0, _shared.isArray)(children) ? children.map(deepCloneVNode) : children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
         ? 16 /* PatchFlags.FULL_PROPS */  : patchFlag | 16 /* PatchFlags.FULL_PROPS */  : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
    };
    return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */ function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if ((0, _shared.isArray)(vnode.children)) cloned.children = vnode.children.map(deepCloneVNode);
    return cloned;
}
/**
 * @private
 */ function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
}
/**
 * @private
 */ function createStaticVNode(content, numberOfNodes) {
    // A static vnode can contain multiple stringified elements, and the number
    // of elements is necessary for hydration.
    const vnode = createVNode(Static, null, content);
    vnode.staticCount = numberOfNodes;
    return vnode;
}
/**
 * @private
 */ function createCommentVNode(text = "", // when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") // empty placeholder
    return createVNode(Comment);
    else if ((0, _shared.isArray)(child)) // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
    else if (typeof child === "object") // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
    else // strings and numbers
    return createVNode(Text, null, String(child));
}
// optimized normalization for template-compiled render fns
function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 /* PatchFlags.HOISTED */  || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag  } = vnode;
    if (children == null) children = null;
    else if ((0, _shared.isArray)(children)) type = 16 /* ShapeFlags.ARRAY_CHILDREN */ ;
    else if (typeof children === "object") {
        if (shapeFlag & 65 /* ShapeFlags.TELEPORT */ ) {
            // Normalize slot to plain children for plain element and Teleport
            const slot = children.default;
            if (slot) {
                // _c marker is added by withCtx() indicating this is a compiled slot
                slot._c && (slot._d = false);
                normalizeChildren(vnode, slot());
                slot._c && (slot._d = true);
            }
            return;
        } else {
            type = 32 /* ShapeFlags.SLOTS_CHILDREN */ ;
            const slotFlag = children._;
            if (!slotFlag && !(InternalObjectKey in children)) children._ctx = currentRenderingInstance;
            else if (slotFlag === 3 /* SlotFlags.FORWARDED */  && currentRenderingInstance) {
                // a child component receives forwarded slots from the parent.
                // its slot type is determined by its parent's slot type.
                if (currentRenderingInstance.slots._ === 1 /* SlotFlags.STABLE */ ) children._ = 1 /* SlotFlags.STABLE */ ;
                else {
                    children._ = 2 /* SlotFlags.DYNAMIC */ ;
                    vnode.patchFlag |= 1024 /* PatchFlags.DYNAMIC_SLOTS */ ;
                }
            }
        }
    } else if ((0, _shared.isFunction)(children)) {
        children = {
            default: children,
            _ctx: currentRenderingInstance
        };
        type = 32 /* ShapeFlags.SLOTS_CHILDREN */ ;
    } else {
        children = String(children);
        // force teleport children to array so it can be moved around
        if (shapeFlag & 64 /* ShapeFlags.TELEPORT */ ) {
            type = 16 /* ShapeFlags.ARRAY_CHILDREN */ ;
            children = [
                createTextVNode(children)
            ];
        } else type = 8 /* ShapeFlags.TEXT_CHILDREN */ ;
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
}
function mergeProps(...args) {
    const ret = {};
    for(let i = 0; i < args.length; i++){
        const toMerge = args[i];
        for(const key in toMerge){
            if (key === "class") {
                if (ret.class !== toMerge.class) ret.class = (0, _shared.normalizeClass)([
                    ret.class,
                    toMerge.class
                ]);
            } else if (key === "style") ret.style = (0, _shared.normalizeStyle)([
                ret.style,
                toMerge.style
            ]);
            else if ((0, _shared.isOn)(key)) {
                const existing = ret[key];
                const incoming = toMerge[key];
                if (incoming && existing !== incoming && !((0, _shared.isArray)(existing) && existing.includes(incoming))) ret[key] = existing ? [].concat(existing, incoming) : incoming;
            } else if (key !== "") ret[key] = toMerge[key];
        }
    }
    return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7 /* ErrorCodes.VNODE_HOOK */ , [
        vnode,
        prevVNode
    ]);
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    // inherit parent app context - or - if root, adopt from root vnode
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
        uid: uid++,
        vnode,
        type,
        parent,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new (0, _reactivity.EffectScope)(true),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent ? parent.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: (0, _shared.EMPTY_OBJ),
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: (0, _shared.EMPTY_OBJ),
        data: (0, _shared.EMPTY_OBJ),
        props: (0, _shared.EMPTY_OBJ),
        attrs: (0, _shared.EMPTY_OBJ),
        slots: (0, _shared.EMPTY_OBJ),
        refs: (0, _shared.EMPTY_OBJ),
        setupState: (0, _shared.EMPTY_OBJ),
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    instance.ctx = createDevRenderContext(instance);
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    // apply custom element special handling
    if (vnode.ce) vnode.ce(instance);
    return instance;
}
let currentInstance = null;
const getCurrentInstance = ()=>currentInstance || currentRenderingInstance;
const setCurrentInstance = (instance)=>{
    currentInstance = instance;
    instance.scope.on();
};
const unsetCurrentInstance = ()=>{
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
};
const isBuiltInTag = /*#__PURE__*/ (0, _shared.makeMap)("slot,component");
function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || (0, _shared.NO);
    if (isBuiltInTag(name) || appIsNativeTag(name)) warn("Do not use built-in or reserved HTML elements as component id: " + name);
}
function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4 /* ShapeFlags.STATEFUL_COMPONENT */ ;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props , children  } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
    isInSSRComponentSetup = false;
    return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (Component.name) validateComponentName(Component.name, instance.appContext.config);
    if (Component.components) {
        const names = Object.keys(Component.components);
        for(let i = 0; i < names.length; i++)validateComponentName(names[i], instance.appContext.config);
    }
    if (Component.directives) {
        const names = Object.keys(Component.directives);
        for(let i = 0; i < names.length; i++)validateDirectiveName(names[i]);
    }
    if (Component.compilerOptions && isRuntimeOnly()) warn(`"compilerOptions" is only supported when using a build of Vue that ` + `includes the runtime compiler. Since you are using a runtime-only ` + `build, the options should be passed via your build tool config instead.`);
    // 0. create render proxy property access cache
    instance.accessCache = Object.create(null);
    // 1. create public instance / render proxy
    // also mark it raw so it's never observed
    instance.proxy = (0, _reactivity.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    exposePropsOnRenderContext(instance);
    // 2. call setup()
    const { setup  } = Component;
    if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        const setupResult = callWithErrorHandling(setup, instance, 0 /* ErrorCodes.SETUP_FUNCTION */ , [
            (0, _reactivity.shallowReadonly)(instance.props),
            setupContext
        ]);
        (0, _reactivity.resetTracking)();
        unsetCurrentInstance();
        if ((0, _shared.isPromise)(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) // return the promise so server-renderer can wait on it
            return setupResult.then((resolvedResult)=>{
                handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e)=>{
                handleError(e, instance, 0 /* ErrorCodes.SETUP_FUNCTION */ );
            });
            else {
                // async setup returned Promise.
                // bail here and wait for re-entry.
                instance.asyncDep = setupResult;
                if (!instance.suspense) {
                    const name = (_a = Component.name) !== null && _a !== void 0 ? _a : "Anonymous";
                    warn(`Component <${name}>: setup function returned a promise, but no ` + `<Suspense> boundary was found in the parent component tree. ` + `A component with async setup() must be nested in a <Suspense> ` + `in order to be rendered.`);
                }
            }
        } else handleSetupResult(instance, setupResult, isSSR);
    } else finishComponentSetup(instance, isSSR);
}
function handleSetupResult(instance, setupResult, isSSR) {
    if ((0, _shared.isFunction)(setupResult)) {
        // setup returned an inline render function
        if (instance.type.__ssrInlineRender) // when the function's name is `ssrRender` (compiled by SFC inline mode),
        // set it as ssrRender instead.
        instance.ssrRender = setupResult;
        else instance.render = setupResult;
    } else if ((0, _shared.isObject)(setupResult)) {
        if (isVNode(setupResult)) warn(`setup() should not return VNodes directly - ` + `return a render function instead.`);
        instance.devtoolsRawSetupState = setupResult;
        instance.setupState = (0, _reactivity.proxyRefs)(setupResult);
        exposeSetupStateOnRenderContext(instance);
    } else if (setupResult !== undefined) warn(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    finishComponentSetup(instance, isSSR);
}
let compile;
let installWithProxy;
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */ function registerRuntimeCompiler(_compile) {
    compile = _compile;
    installWithProxy = (i)=>{
        if (i.render._rc) i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    };
}
// dev only
const isRuntimeOnly = ()=>!compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    // template / render function normalization
    // could be already set when returned from setup()
    if (!instance.render) {
        // only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
        // is done by server-renderer
        if (!isSSR && compile && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
                startMeasure(instance, `compile`);
                const { isCustomElement , compilerOptions  } = instance.appContext.config;
                const { delimiters , compilerOptions: componentCompilerOptions  } = Component;
                const finalCompilerOptions = (0, _shared.extend)((0, _shared.extend)({
                    isCustomElement,
                    delimiters
                }, compilerOptions), componentCompilerOptions);
                Component.render = compile(template, finalCompilerOptions);
                endMeasure(instance, `compile`);
            }
        }
        instance.render = Component.render || (0, _shared.NOOP);
        // for runtime-compiled render functions using `with` blocks, the render
        // proxy used needs a different `has` handler which is more performant and
        // also only allows a whitelist of globals to fallthrough.
        if (installWithProxy) installWithProxy(instance);
    }
    // support for 2.x options
    if (__VUE_OPTIONS_API__ && true) {
        setCurrentInstance(instance);
        (0, _reactivity.pauseTracking)();
        applyOptions(instance);
        (0, _reactivity.resetTracking)();
        unsetCurrentInstance();
    }
    // warn missing template/render
    // the runtime compilation of template in SSR is done by server-render
    if (!Component.render && instance.render === (0, _shared.NOOP) && !isSSR) {
        /* istanbul ignore if */ if (!compile && Component.template) warn(`Component provided template option but ` + `runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
        else warn(`Component is missing template or render function.`);
    }
}
function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, {
        get (target, key) {
            markAttrsAccessed();
            (0, _reactivity.track)(instance, "get" /* TrackOpTypes.GET */ , "$attrs");
            return target[key];
        },
        set () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        },
        deleteProperty () {
            warn(`setupContext.attrs is readonly.`);
            return false;
        }
    });
}
function createSetupContext(instance) {
    const expose = (exposed)=>{
        if (instance.exposed) warn(`expose() should be called only once per setup().`);
        if (exposed != null) {
            let exposedType = typeof exposed;
            if (exposedType === "object") {
                if ((0, _shared.isArray)(exposed)) exposedType = "array";
                else if ((0, _reactivity.isRef)(exposed)) exposedType = "ref";
            }
            if (exposedType !== "object") warn(`expose() should be passed a plain object, received ${exposedType}.`);
        }
        instance.exposed = exposed || {};
    };
    let attrs;
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
        get attrs () {
            return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots () {
            return (0, _reactivity.shallowReadonly)(instance.slots);
        },
        get emit () {
            return (event, ...args)=>instance.emit(event, ...args);
        },
        expose
    });
}
function getExposeProxy(instance) {
    if (instance.exposed) return instance.exposeProxy || (instance.exposeProxy = new Proxy((0, _reactivity.proxyRefs)((0, _reactivity.markRaw)(instance.exposed)), {
        get (target, key) {
            if (key in target) return target[key];
            else if (key in publicPropertiesMap) return publicPropertiesMap[key](instance);
        },
        has (target, key) {
            return key in target || key in publicPropertiesMap;
        }
    }));
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str)=>str.replace(classifyRE, (c)=>c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
    return (0, _shared.isFunction)(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
/* istanbul ignore next */ function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
        const match = Component.__file.match(/([^/\\]+)\.\w+$/);
        if (match) name = match[1];
    }
    if (!name && instance && instance.parent) {
        // try to infer the name based on reverse resolution
        const inferFromRegistry = (registry)=>{
            for(const key in registry){
                if (registry[key] === Component) return key;
            }
        };
        name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
    return (0, _shared.isFunction)(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions)=>{
    // @ts-ignore
    return (0, _reactivity.computed)(getterOrOptions, debugOptions, isInSSRComponentSetup);
};
// dev only
const warnRuntimeUsage = (method)=>warn(`${method}() is a compiler-hint helper that is only usable inside ` + `<script setup> of a single file component. Its arguments should be ` + `compiled away and passing it at runtime has no effect.`);
// implementation
function defineProps() {
    warnRuntimeUsage(`defineProps`);
    return null;
}
// implementation
function defineEmits() {
    warnRuntimeUsage(`defineEmits`);
    return null;
}
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. variables inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */ function defineExpose(exposed) {
    warnRuntimeUsage(`defineExpose`);
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` declaration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */ function withDefaults(props, defaults) {
    warnRuntimeUsage(`withDefaults`);
    return null;
}
function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    const i = getCurrentInstance();
    if (!i) warn(`useContext() called without active instance.`);
    return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */ function mergeDefaults(raw, defaults) {
    const props = (0, _shared.isArray)(raw) ? raw.reduce((normalized, p)=>(normalized[p] = {}, normalized), {}) : raw;
    for(const key in defaults){
        const opt = props[key];
        if (opt) {
            if ((0, _shared.isArray)(opt) || (0, _shared.isFunction)(opt)) props[key] = {
                type: opt,
                default: defaults[key]
            };
            else opt.default = defaults[key];
        } else if (opt === null) props[key] = {
            default: defaults[key]
        };
        else warn(`props default key "${key}" has no corresponding declaration.`);
    }
    return props;
}
/**
 * Used to create a proxy for the rest element when destructuring props with
 * defineProps().
 * @internal
 */ function createPropsRestProxy(props, excludedKeys) {
    const ret = {};
    for(const key in props)if (!excludedKeys.includes(key)) Object.defineProperty(ret, key, {
        enumerable: true,
        get: ()=>props[key]
    });
    return ret;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */ function withAsyncContext(getAwaitable) {
    const ctx = getCurrentInstance();
    if (!ctx) warn(`withAsyncContext called without active current instance. ` + `This is likely a bug.`);
    let awaitable = getAwaitable();
    unsetCurrentInstance();
    if ((0, _shared.isPromise)(awaitable)) awaitable = awaitable.catch((e)=>{
        setCurrentInstance(ctx);
        throw e;
    });
    return [
        awaitable,
        ()=>setCurrentInstance(ctx)
    ];
}
// Actual implementation
function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
        if ((0, _shared.isObject)(propsOrChildren) && !(0, _shared.isArray)(propsOrChildren)) {
            // single vnode without props
            if (isVNode(propsOrChildren)) return createVNode(type, null, [
                propsOrChildren
            ]);
            // props without children
            return createVNode(type, propsOrChildren);
        } else // omit props
        return createVNode(type, null, propsOrChildren);
    } else {
        if (l > 3) children = Array.prototype.slice.call(arguments, 2);
        else if (l === 3 && isVNode(children)) children = [
            children
        ];
        return createVNode(type, propsOrChildren, children);
    }
}
const ssrContextKey = Symbol(`ssrContext`);
const useSSRContext = ()=>{
    {
        const ctx = inject(ssrContextKey);
        if (!ctx) warn(`Server rendering context not provided. Make sure to only call ` + `useSSRContext() conditionally in the server build.`);
        return ctx;
    }
};
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ ]);
}
function initCustomFormatter() {
    /* eslint-disable no-restricted-globals */ if (typeof window === "undefined") return;
    const vueStyle = {
        style: "color:#3ba776"
    };
    const numberStyle = {
        style: "color:#0b1bc9"
    };
    const stringStyle = {
        style: "color:#b62e24"
    };
    const keywordStyle = {
        style: "color:#9d288c"
    };
    // custom formatter for Chrome
    // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html
    const formatter = {
        header (obj) {
            // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
            if (!(0, _shared.isObject)(obj)) return null;
            if (obj.__isVue) return [
                "div",
                vueStyle,
                `VueInstance`
            ];
            else if ((0, _reactivity.isRef)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    genRefFlag(obj)
                ],
                "<",
                formatValue(obj.value),
                `>`
            ];
            else if ((0, _reactivity.isReactive)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReactive" : "Reactive"
                ],
                "<",
                formatValue(obj),
                `>${(0, _reactivity.isReadonly)(obj) ? ` (readonly)` : ``}`
            ];
            else if ((0, _reactivity.isReadonly)(obj)) return [
                "div",
                {},
                [
                    "span",
                    vueStyle,
                    isShallow(obj) ? "ShallowReadonly" : "Readonly"
                ],
                "<",
                formatValue(obj),
                ">"
            ];
            return null;
        },
        hasBody (obj) {
            return obj && obj.__isVue;
        },
        body (obj) {
            if (obj && obj.__isVue) return [
                "div",
                {},
                ...formatInstance(obj.$)
            ];
        }
    };
    function formatInstance(instance) {
        const blocks = [];
        if (instance.type.props && instance.props) blocks.push(createInstanceBlock("props", (0, _reactivity.toRaw)(instance.props)));
        if (instance.setupState !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("setup", instance.setupState));
        if (instance.data !== (0, _shared.EMPTY_OBJ)) blocks.push(createInstanceBlock("data", (0, _reactivity.toRaw)(instance.data)));
        const computed = extractKeys(instance, "computed");
        if (computed) blocks.push(createInstanceBlock("computed", computed));
        const injected = extractKeys(instance, "inject");
        if (injected) blocks.push(createInstanceBlock("injected", injected));
        blocks.push([
            "div",
            {},
            [
                "span",
                {
                    style: keywordStyle.style + ";opacity:0.66"
                },
                "$ (internal): "
            ],
            [
                "object",
                {
                    object: instance
                }
            ]
        ]);
        return blocks;
    }
    function createInstanceBlock(type, target) {
        target = (0, _shared.extend)({}, target);
        if (!Object.keys(target).length) return [
            "span",
            {}
        ];
        return [
            "div",
            {
                style: "line-height:1.25em;margin-bottom:0.6em"
            },
            [
                "div",
                {
                    style: "color:#476582"
                },
                type
            ],
            [
                "div",
                {
                    style: "padding-left:1.25em"
                },
                ...Object.keys(target).map((key)=>{
                    return [
                        "div",
                        {},
                        [
                            "span",
                            keywordStyle,
                            key + ": "
                        ],
                        formatValue(target[key], false)
                    ];
                })
            ]
        ];
    }
    function formatValue(v1, asRaw = true) {
        if (typeof v1 === "number") return [
            "span",
            numberStyle,
            v1
        ];
        else if (typeof v1 === "string") return [
            "span",
            stringStyle,
            JSON.stringify(v1)
        ];
        else if (typeof v1 === "boolean") return [
            "span",
            keywordStyle,
            v1
        ];
        else if ((0, _shared.isObject)(v1)) return [
            "object",
            {
                object: asRaw ? (0, _reactivity.toRaw)(v1) : v1
            }
        ];
        else return [
            "span",
            stringStyle,
            String(v1)
        ];
    }
    function extractKeys(instance, type) {
        const Comp = instance.type;
        if ((0, _shared.isFunction)(Comp)) return;
        const extracted = {};
        for(const key in instance.ctx)if (isKeyOfType(Comp, key, type)) extracted[key] = instance.ctx[key];
        return extracted;
    }
    function isKeyOfType(Comp, key, type) {
        const opts = Comp[type];
        if ((0, _shared.isArray)(opts) && opts.includes(key) || (0, _shared.isObject)(opts) && key in opts) return true;
        if (Comp.extends && isKeyOfType(Comp.extends, key, type)) return true;
        if (Comp.mixins && Comp.mixins.some((m)=>isKeyOfType(m, key, type))) return true;
    }
    function genRefFlag(v1) {
        if (isShallow(v1)) return `ShallowRef`;
        if (v1.effect) return `ComputedRef`;
        return `Ref`;
    }
    if (window.devtoolsFormatters) window.devtoolsFormatters.push(formatter);
    else window.devtoolsFormatters = [
        formatter
    ];
}
function withMemo(memo, render, cache, index) {
    const cached = cache[index];
    if (cached && isMemoSame(cached, memo)) return cached;
    const ret = render();
    // shallow clone
    ret.memo = memo.slice();
    return cache[index] = ret;
}
function isMemoSame(cached, memo) {
    const prev = cached.memo;
    if (prev.length != memo.length) return false;
    for(let i = 0; i < prev.length; i++){
        if ((0, _shared.hasChanged)(prev[i], memo[i])) return false;
    }
    // make sure to let parent block track it when returning cached
    if (isBlockTreeEnabled > 0 && currentBlock) currentBlock.push(cached);
    return true;
}
// Core API ------------------------------------------------------------------
const version = "3.2.47";
const _ssrUtils = {
    createComponentInstance,
    setupComponent,
    renderComponentRoot,
    setCurrentRenderingInstance,
    isVNode,
    normalizeVNode
};
/**
 * SSR utils for \@vue/server-renderer. Only exposed in ssr-possible builds.
 * @internal
 */ const ssrUtils = _ssrUtils;
/**
 * @internal only exposed in compat builds
 */ const resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */ const compatUtils = null;

},{"@vue/reactivity":"d7UXQ","@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7UXQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EffectScope", ()=>EffectScope);
parcelHelpers.export(exports, "ITERATE_KEY", ()=>ITERATE_KEY);
parcelHelpers.export(exports, "ReactiveEffect", ()=>ReactiveEffect);
parcelHelpers.export(exports, "computed", ()=>computed);
parcelHelpers.export(exports, "customRef", ()=>customRef);
parcelHelpers.export(exports, "deferredComputed", ()=>deferredComputed);
parcelHelpers.export(exports, "effect", ()=>effect);
parcelHelpers.export(exports, "effectScope", ()=>effectScope);
parcelHelpers.export(exports, "enableTracking", ()=>enableTracking);
parcelHelpers.export(exports, "getCurrentScope", ()=>getCurrentScope);
parcelHelpers.export(exports, "isProxy", ()=>isProxy);
parcelHelpers.export(exports, "isReactive", ()=>isReactive);
parcelHelpers.export(exports, "isReadonly", ()=>isReadonly);
parcelHelpers.export(exports, "isRef", ()=>isRef);
parcelHelpers.export(exports, "isShallow", ()=>isShallow);
parcelHelpers.export(exports, "markRaw", ()=>markRaw);
parcelHelpers.export(exports, "onScopeDispose", ()=>onScopeDispose);
parcelHelpers.export(exports, "pauseTracking", ()=>pauseTracking);
parcelHelpers.export(exports, "proxyRefs", ()=>proxyRefs);
parcelHelpers.export(exports, "reactive", ()=>reactive);
parcelHelpers.export(exports, "readonly", ()=>readonly);
parcelHelpers.export(exports, "ref", ()=>ref);
parcelHelpers.export(exports, "resetTracking", ()=>resetTracking);
parcelHelpers.export(exports, "shallowReactive", ()=>shallowReactive);
parcelHelpers.export(exports, "shallowReadonly", ()=>shallowReadonly);
parcelHelpers.export(exports, "shallowRef", ()=>shallowRef);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "toRaw", ()=>toRaw);
parcelHelpers.export(exports, "toRef", ()=>toRef);
parcelHelpers.export(exports, "toRefs", ()=>toRefs);
parcelHelpers.export(exports, "track", ()=>track);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "triggerRef", ()=>triggerRef);
parcelHelpers.export(exports, "unref", ()=>unref);
var _shared = require("@vue/shared");
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    constructor(detached = false){
        this.detached = detached;
        /**
         * @internal
         */ this._active = true;
        /**
         * @internal
         */ this.effects = [];
        /**
         * @internal
         */ this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
    get active() {
        return this._active;
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else warn(`cannot run an inactive effect scope.`);
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ on() {
        activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */ off() {
        activeEffectScope = this.parent;
    }
    stop(fromParent) {
        if (this._active) {
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++)this.effects[i].stop();
            for(i = 0, l = this.cleanups.length; i < l; i++)this.cleanups[i]();
            if (this.scopes) for(i = 0, l = this.scopes.length; i < l; i++)this.scopes[i].stop(true);
            // nested scope, dereference from parent to avoid memory leaks
            if (!this.detached && this.parent && !fromParent) {
                // optimized O(1) removal
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = undefined;
            this._active = false;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function recordEffectScope(effect, scope = activeEffectScope) {
    if (scope && scope.active) scope.effects.push(effect);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) activeEffectScope.cleanups.push(fn);
    else warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
}
const createDep = (effects)=>{
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
};
const wasTracked = (dep)=>(dep.w & trackOpBit) > 0;
const newTracked = (dep)=>(dep.n & trackOpBit) > 0;
const initDepMarkers = ({ deps  })=>{
    if (deps.length) for(let i = 0; i < deps.length; i++)deps[i].w |= trackOpBit; // set was tracked
};
const finalizeDepMarkers = (effect)=>{
    const { deps  } = effect;
    if (deps.length) {
        let ptr = 0;
        for(let i = 0; i < deps.length; i++){
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) dep.delete(effect);
            else deps[ptr++] = dep;
            // clear bits
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
    }
};
const targetMap = new WeakMap();
// The number of effects currently being tracked recursively.
let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels of recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */ const maxMarkerBits = 30;
let activeEffect;
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
class ReactiveEffect {
    constructor(fn, scheduler = null, scope){
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = undefined;
        recordEffectScope(this, scope);
    }
    run() {
        if (!this.active) return this.fn();
        let parent = activeEffect;
        let lastShouldTrack = shouldTrack;
        while(parent){
            if (parent === this) return;
            parent = parent.parent;
        }
        try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) initDepMarkers(this);
            else cleanupEffect(this);
            return this.fn();
        } finally{
            if (effectTrackDepth <= maxMarkerBits) finalizeDepMarkers(this);
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = undefined;
            if (this.deferStop) this.stop();
        }
    }
    stop() {
        // stopped while running itself - defer the cleanup
        if (activeEffect === this) this.deferStop = true;
        else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) this.onStop();
            this.active = false;
        }
    }
}
function cleanupEffect(effect) {
    const { deps  } = effect;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect);
        deps.length = 0;
    }
}
function effect(fn, options) {
    if (fn.effect) fn = fn.effect.fn;
    const _effect = new ReactiveEffect(fn);
    if (options) {
        (0, _shared.extend)(_effect, options);
        if (options.scope) recordEffectScope(_effect, options.scope);
    }
    if (!options || !options.lazy) _effect.run();
    const runner = _effect.run.bind(_effect);
    runner.effect = _effect;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === undefined ? true : last;
}
function track(target, type, key) {
    if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) targetMap.set(target, depsMap = new Map());
        let dep = depsMap.get(key);
        if (!dep) depsMap.set(key, dep = createDep());
        const eventInfo = {
            effect: activeEffect,
            target,
            type,
            key
        };
        trackEffects(dep, eventInfo);
    }
}
function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack = false;
    if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
            dep.n |= trackOpBit; // set newly tracked
            shouldTrack = !wasTracked(dep);
        }
    } else // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
    if (shouldTrack) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (0, activeEffect.onTrack) activeEffect.onTrack(Object.assign({
            effect: activeEffect
        }, debuggerEventExtraInfo));
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) // never been tracked
    return;
    let deps = [];
    if (type === "clear" /* TriggerOpTypes.CLEAR */ ) // collection being cleared
    // trigger all effects for target
    deps = [
        ...depsMap.values()
    ];
    else if (key === "length" && (0, _shared.isArray)(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key)=>{
            if (key === "length" || key >= newLength) deps.push(dep);
        });
    } else {
        // schedule runs for SET | ADD | DELETE
        if (key !== void 0) deps.push(depsMap.get(key));
        // also run for iteration key on ADD | DELETE | Map.SET
        switch(type){
            case "add" /* TriggerOpTypes.ADD */ :
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if ((0, _shared.isIntegerKey)(key)) // new index added to array -> length changes
                deps.push(depsMap.get("length"));
                break;
            case "delete" /* TriggerOpTypes.DELETE */ :
                if (!(0, _shared.isArray)(target)) {
                    deps.push(depsMap.get(ITERATE_KEY));
                    if ((0, _shared.isMap)(target)) deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set" /* TriggerOpTypes.SET */ :
                if ((0, _shared.isMap)(target)) deps.push(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const eventInfo = {
        target,
        type,
        key,
        newValue,
        oldValue,
        oldTarget
    };
    if (deps.length === 1) {
        if (deps[0]) triggerEffects(deps[0], eventInfo);
    } else {
        const effects = [];
        for (const dep of deps)if (dep) effects.push(...dep);
        triggerEffects(createDep(effects), eventInfo);
    }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
    // spread into array for stabilization
    const effects = (0, _shared.isArray)(dep) ? dep : [
        ...dep
    ];
    for (const effect of effects)if (effect.computed) triggerEffect(effect, debuggerEventExtraInfo);
    for (const effect of effects)if (!effect.computed) triggerEffect(effect, debuggerEventExtraInfo);
}
function triggerEffect(effect, debuggerEventExtraInfo) {
    if (effect !== activeEffect || effect.allowRecurse) {
        if (0, effect.onTrigger) effect.onTrigger((0, _shared.extend)({
            effect
        }, debuggerEventExtraInfo));
        if (effect.scheduler) effect.scheduler();
        else effect.run();
    }
}
function getDepFromReactive(object, key) {
    var _a;
    return (_a = targetMap.get(object)) === null || _a === void 0 ? void 0 : _a.get(key);
}
const isNonTrackableKeys = /*#__PURE__*/ (0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/*#__PURE__*/ Object.getOwnPropertyNames(Symbol)// ios10.x Object.getOwnPropertyNames(Symbol) can enumerate 'arguments' and 'caller'
// but accessing them on Symbol leads to TypeError because Symbol is a strict mode
// function
.filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter((0, _shared.isSymbol)));
const get$1 = /*#__PURE__*/ createGetter();
const shallowGet = /*#__PURE__*/ createGetter(false, true);
const readonlyGet = /*#__PURE__*/ createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/ createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get" /* TrackOpTypes.GET */ , i + "");
            // we run the method using the original args first (which may be reactive)
            const res = arr[key](...args);
            if (res === -1 || res === false) // if that didn't work, run it again using raw values.
            return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function hasOwnProperty(key) {
    const obj = toRaw(this);
    track(obj, "has" /* TrackOpTypes.HAS */ , key);
    return obj.hasOwnProperty(key);
}
function createGetter(isReadonly = false, shallow = false) {
    return function get(target, key, receiver) {
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ) return isReadonly;
        else if (key === "__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ ) return shallow;
        else if (key === "__v_raw" /* ReactiveFlags.RAW */  && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = (0, _shared.isArray)(target);
        if (!isReadonly) {
            if (targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
            if (key === "hasOwnProperty") return hasOwnProperty;
        }
        const res = Reflect.get(target, key, receiver);
        if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get" /* TrackOpTypes.GET */ , key);
        if (shallow) return res;
        if (isRef(res)) // ref unwrapping - skip unwrap for Array + integer key.
        return targetIsArray && (0, _shared.isIntegerKey)(key) ? res : res.value;
        if ((0, _shared.isObject)(res)) // Convert returned value into a proxy as well. we do the isObject check
        // here to avoid invalid value warning. Also need to lazy access readonly
        // and reactive here to avoid circular dependency.
        return isReadonly ? readonly(res) : reactive(res);
        return res;
    };
}
const set$1 = /*#__PURE__*/ createSetter();
const shallowSet = /*#__PURE__*/ createSetter(true);
function createSetter(shallow = false) {
    return function set(target, key, value, receiver) {
        let oldValue = target[key];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) return false;
        if (!shallow) {
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
        const result = Reflect.set(target, key, value, receiver);
        // don't trigger if target is something up in the prototype chain of original
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add" /* TriggerOpTypes.ADD */ , key, value);
            else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* TriggerOpTypes.SET */ , key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = (0, _shared.hasOwn)(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete" /* TriggerOpTypes.DELETE */ , key, undefined, oldValue);
    return result;
}
function has$1(target, key) {
    const result = Reflect.has(target, key);
    if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) track(target, "has" /* TrackOpTypes.HAS */ , key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate" /* TrackOpTypes.ITERATE */ , (0, _shared.isArray)(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
const mutableHandlers = {
    get: get$1,
    set: set$1,
    deleteProperty,
    has: has$1,
    ownKeys
};
const readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
const shallowReactiveHandlers = /*#__PURE__*/ (0, _shared.extend)({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
});
// Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.
const shallowReadonlyHandlers = /*#__PURE__*/ (0, _shared.extend)({}, readonlyHandlers, {
    get: shallowReadonlyGet
});
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function get(target, key, isReadonly = false, isShallow = false) {
    // #1772: readonly(reactive(Map)) should return readonly + reactive version
    // of the value
    target = target["__v_raw" /* ReactiveFlags.RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) track(rawTarget, "get" /* TrackOpTypes.GET */ , key);
        track(rawTarget, "get" /* TrackOpTypes.GET */ , rawKey);
    }
    const { has  } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has.call(rawTarget, key)) return wrap(target.get(key));
    else if (has.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
}
function has(key, isReadonly = false) {
    const target = this["__v_raw" /* ReactiveFlags.RAW */ ];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly) {
        if (key !== rawKey) track(rawTarget, "has" /* TrackOpTypes.HAS */ , key);
        track(rawTarget, "has" /* TrackOpTypes.HAS */ , rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw" /* ReactiveFlags.RAW */ ];
    !isReadonly && track(toRaw(target), "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add" /* TriggerOpTypes.ADD */ , value, value);
    }
    return this;
}
function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add" /* TriggerOpTypes.ADD */ , key, value);
    else if ((0, _shared.hasChanged)(value, oldValue)) trigger(target, "set" /* TriggerOpTypes.SET */ , key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has , get  } = getProto(target);
    let hadKey = has.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has.call(target, key);
    } else checkIdentityKeys(target, has, key);
    const oldValue = get ? get.call(target, key) : undefined;
    // forward the operation before queueing reactions
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete" /* TriggerOpTypes.DELETE */ , key, undefined, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = (0, _shared.isMap)(target) ? new Map(target) : new Set(target);
    // forward the operation before queueing reactions
    const result = target.clear();
    if (hadItems) trigger(target, "clear" /* TriggerOpTypes.CLEAR */ , undefined, undefined, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw" /* ReactiveFlags.RAW */ ];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */ , ITERATE_KEY);
        return target.forEach((value, key)=>{
            // important: make sure the callback is
            // 1. invoked with the reactive map as `this` and 3rd arg
            // 2. the value received should be a corresponding reactive/readonly.
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw" /* ReactiveFlags.RAW */ ];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, _shared.isMap)(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate" /* TrackOpTypes.ITERATE */ , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        // return a wrapped iterator which returns observed versions of the
        // values emitted from the real iterator
        return {
            // iterator protocol
            next () {
                const { value , done  } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" /* TriggerOpTypes.DELETE */  ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations = {
        get (key) {
            return get(this, key);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations = {
        get (key) {
            return get(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations = {
        get (key) {
            return get(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */ ),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */ ),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */ ),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */ ),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations = {
        get (key) {
            return get(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has.call(this, key, true);
        },
        add: createReadonlyMethod("add" /* TriggerOpTypes.ADD */ ),
        set: createReadonlyMethod("set" /* TriggerOpTypes.SET */ ),
        delete: createReadonlyMethod("delete" /* TriggerOpTypes.DELETE */ ),
        clear: createReadonlyMethod("clear" /* TriggerOpTypes.CLEAR */ ),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
    ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */ ) return !isReadonly;
        else if (key === "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ) return isReadonly;
        else if (key === "__v_raw" /* ReactiveFlags.RAW */ ) return target;
        return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /*#__PURE__*/ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, _shared.toRawType)(target);
        console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* TargetType.COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* TargetType.COLLECTION */ ;
        default:
            return 0 /* TargetType.INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip" /* ReactiveFlags.SKIP */ ] || !Object.isExtensible(value) ? 0 /* TargetType.INVALID */  : targetTypeMap((0, _shared.toRawType)(value));
}
function reactive(target) {
    // if trying to observe a readonly proxy, return the readonly version.
    if (isReadonly(target)) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */ function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */ function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */ function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, _shared.isObject)(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (target["__v_raw" /* ReactiveFlags.RAW */ ] && !(isReadonly && target["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */ ])) return target;
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    // only specific value types can be observed.
    const targetType = getTargetType(target);
    if (targetType === 0 /* TargetType.INVALID */ ) return target;
    const proxy = new Proxy(target, targetType === 2 /* TargetType.COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function isReactive(value) {
    if (isReadonly(value)) return isReactive(value["__v_raw" /* ReactiveFlags.RAW */ ]);
    return !!(value && value["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */ ]);
}
function isReadonly(value) {
    return !!(value && value["__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ]);
}
function isShallow(value) {
    return !!(value && value["__v_isShallow" /* ReactiveFlags.IS_SHALLOW */ ]);
}
function isProxy(value) {
    return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
    const raw = observed && observed["__v_raw" /* ReactiveFlags.RAW */ ];
    return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
    (0, _shared.def)(value, "__v_skip" /* ReactiveFlags.SKIP */ , true);
    return value;
}
const toReactive = (value)=>(0, _shared.isObject)(value) ? reactive(value) : value;
const toReadonly = (value)=>(0, _shared.isObject)(value) ? readonly(value) : value;
function trackRefValue(ref) {
    if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        trackEffects(ref.dep || (ref.dep = createDep()), {
            target: ref,
            type: "get" /* TrackOpTypes.GET */ ,
            key: "value"
        });
    }
}
function triggerRefValue(ref, newVal) {
    ref = toRaw(ref);
    const dep = ref.dep;
    if (dep) triggerEffects(dep, {
        target: ref,
        type: "set" /* TriggerOpTypes.SET */ ,
        key: "value",
        newValue: newVal
    });
}
function isRef(r) {
    return !!(r && r.__v_isRef === true);
}
function ref(value) {
    return createRef(value, false);
}
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (isRef(rawValue)) return rawValue;
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, __v_isShallow){
        this.__v_isShallow = __v_isShallow;
        this.dep = undefined;
        this.__v_isRef = true;
        this._rawValue = __v_isShallow ? value : toRaw(value);
        this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
        trackRefValue(this);
        return this._value;
    }
    set value(newVal) {
        const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
        newVal = useDirectValue ? newVal : toRaw(newVal);
        if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
        }
    }
}
function triggerRef(ref) {
    triggerRefValue(ref, (0, ref.value));
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
        } else return Reflect.set(target, key, value, receiver);
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this.dep = undefined;
        this.__v_isRef = true;
        const { get , set  } = factory(()=>trackRefValue(this), ()=>triggerRefValue(this));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
function toRefs(object) {
    if (!isProxy(object)) console.warn(`toRefs() expects a reactive object but received a plain one.`);
    const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};
    for(const key in object)ret[key] = toRef(object, key);
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this.__v_isRef = true;
    }
    get value() {
        const val = this._object[this._key];
        return val === undefined ? this._defaultValue : val;
    }
    set value(newVal) {
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(toRaw(this._object), this._key);
    }
}
function toRef(object, key, defaultValue) {
    const val = object[key];
    return isRef(val) ? val : new ObjectRefImpl(object, key, defaultValue);
}
var _a$1;
class ComputedRefImpl {
    constructor(getter, _setter, isReadonly, isSSR){
        this._setter = _setter;
        this.dep = undefined;
        this.__v_isRef = true;
        this[_a$1] = false;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, ()=>{
            if (!this._dirty) {
                this._dirty = true;
                triggerRefValue(this);
            }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this["__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ] = isReadonly;
    }
    get value() {
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        const self = toRaw(this);
        trackRefValue(self);
        if (self._dirty || !self._cacheable) {
            self._dirty = false;
            self._value = self.effect.run();
        }
        return self._value;
    }
    set value(newValue) {
        this._setter(newValue);
    }
}
_a$1 = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ;
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = (0, _shared.isFunction)(getterOrOptions);
    if (onlyGetter) {
        getter = getterOrOptions;
        setter = ()=>{
            console.warn("Write operation failed: computed value is readonly");
        };
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
        cRef.effect.onTrack = debugOptions.onTrack;
        cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
var _a;
const tick = /*#__PURE__*/ Promise.resolve();
const queue = [];
let queued = false;
const scheduler = (fn)=>{
    queue.push(fn);
    if (!queued) {
        queued = true;
        tick.then(flush);
    }
};
const flush = ()=>{
    for(let i = 0; i < queue.length; i++)queue[i]();
    queue.length = 0;
    queued = false;
};
class DeferredComputedRefImpl {
    constructor(getter){
        this.dep = undefined;
        this._dirty = true;
        this.__v_isRef = true;
        this[_a] = true;
        let compareTarget;
        let hasCompareTarget = false;
        let scheduled = false;
        this.effect = new ReactiveEffect(getter, (computedTrigger)=>{
            if (this.dep) {
                if (computedTrigger) {
                    compareTarget = this._value;
                    hasCompareTarget = true;
                } else if (!scheduled) {
                    const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                    scheduled = true;
                    hasCompareTarget = false;
                    scheduler(()=>{
                        if (this.effect.active && this._get() !== valueToCompare) triggerRefValue(this);
                        scheduled = false;
                    });
                }
                // chained upstream computeds are notified synchronously to ensure
                // value invalidation in case of sync access; normal effects are
                // deferred to be triggered in scheduler.
                for (const e of this.dep)if (e.computed instanceof DeferredComputedRefImpl) e.scheduler(true);
            }
            this._dirty = true;
        });
        this.effect.computed = this;
    }
    _get() {
        if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
        }
        return this._value;
    }
    get value() {
        trackRefValue(this);
        // the computed ref may get wrapped by other proxies e.g. readonly() #3376
        return toRaw(this)._get();
    }
}
_a = "__v_isReadonly" /* ReactiveFlags.IS_READONLY */ ;
function deferredComputed(getter) {
    return new DeferredComputedRefImpl(getter);
}

},{"@vue/shared":"3SM3y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SM3y":[function(require,module,exports) {
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY_ARR", ()=>EMPTY_ARR);
parcelHelpers.export(exports, "EMPTY_OBJ", ()=>EMPTY_OBJ);
parcelHelpers.export(exports, "NO", ()=>NO);
parcelHelpers.export(exports, "NOOP", ()=>NOOP);
parcelHelpers.export(exports, "PatchFlagNames", ()=>PatchFlagNames);
parcelHelpers.export(exports, "camelize", ()=>camelize);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
parcelHelpers.export(exports, "def", ()=>def);
parcelHelpers.export(exports, "escapeHtml", ()=>escapeHtml);
parcelHelpers.export(exports, "escapeHtmlComment", ()=>escapeHtmlComment);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "genPropsAccessExp", ()=>genPropsAccessExp);
parcelHelpers.export(exports, "generateCodeFrame", ()=>generateCodeFrame);
parcelHelpers.export(exports, "getGlobalThis", ()=>getGlobalThis);
parcelHelpers.export(exports, "hasChanged", ()=>hasChanged);
parcelHelpers.export(exports, "hasOwn", ()=>hasOwn);
parcelHelpers.export(exports, "hyphenate", ()=>hyphenate);
parcelHelpers.export(exports, "includeBooleanAttr", ()=>includeBooleanAttr);
parcelHelpers.export(exports, "invokeArrayFns", ()=>invokeArrayFns);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBooleanAttr", ()=>isBooleanAttr);
parcelHelpers.export(exports, "isBuiltInDirective", ()=>isBuiltInDirective);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isGloballyWhitelisted", ()=>isGloballyWhitelisted);
parcelHelpers.export(exports, "isHTMLTag", ()=>isHTMLTag);
parcelHelpers.export(exports, "isIntegerKey", ()=>isIntegerKey);
parcelHelpers.export(exports, "isKnownHtmlAttr", ()=>isKnownHtmlAttr);
parcelHelpers.export(exports, "isKnownSvgAttr", ()=>isKnownSvgAttr);
parcelHelpers.export(exports, "isMap", ()=>isMap);
parcelHelpers.export(exports, "isModelListener", ()=>isModelListener);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isOn", ()=>isOn);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isPromise", ()=>isPromise);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isReservedProp", ()=>isReservedProp);
parcelHelpers.export(exports, "isSSRSafeAttrName", ()=>isSSRSafeAttrName);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
parcelHelpers.export(exports, "isSet", ()=>isSet);
parcelHelpers.export(exports, "isSpecialBooleanAttr", ()=>isSpecialBooleanAttr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isSymbol", ()=>isSymbol);
parcelHelpers.export(exports, "isVoidTag", ()=>isVoidTag);
parcelHelpers.export(exports, "looseEqual", ()=>looseEqual);
parcelHelpers.export(exports, "looseIndexOf", ()=>looseIndexOf);
parcelHelpers.export(exports, "looseToNumber", ()=>looseToNumber);
parcelHelpers.export(exports, "makeMap", ()=>makeMap);
parcelHelpers.export(exports, "normalizeClass", ()=>normalizeClass);
parcelHelpers.export(exports, "normalizeProps", ()=>normalizeProps);
parcelHelpers.export(exports, "normalizeStyle", ()=>normalizeStyle);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "parseStringStyle", ()=>parseStringStyle);
parcelHelpers.export(exports, "propsToAttrMap", ()=>propsToAttrMap);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "slotFlagsText", ()=>slotFlagsText);
parcelHelpers.export(exports, "stringifyStyle", ()=>stringifyStyle);
parcelHelpers.export(exports, "toDisplayString", ()=>toDisplayString);
parcelHelpers.export(exports, "toHandlerKey", ()=>toHandlerKey);
parcelHelpers.export(exports, "toNumber", ()=>toNumber);
parcelHelpers.export(exports, "toRawType", ()=>toRawType);
parcelHelpers.export(exports, "toTypeString", ()=>toTypeString);
var global = arguments[3];
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
/**
 * dev only flag -> name mapping
 */ const PatchFlagNames = {
    [1 /* PatchFlags.TEXT */ ]: `TEXT`,
    [2 /* PatchFlags.CLASS */ ]: `CLASS`,
    [4 /* PatchFlags.STYLE */ ]: `STYLE`,
    [8 /* PatchFlags.PROPS */ ]: `PROPS`,
    [16 /* PatchFlags.FULL_PROPS */ ]: `FULL_PROPS`,
    [32 /* PatchFlags.HYDRATE_EVENTS */ ]: `HYDRATE_EVENTS`,
    [64 /* PatchFlags.STABLE_FRAGMENT */ ]: `STABLE_FRAGMENT`,
    [128 /* PatchFlags.KEYED_FRAGMENT */ ]: `KEYED_FRAGMENT`,
    [256 /* PatchFlags.UNKEYED_FRAGMENT */ ]: `UNKEYED_FRAGMENT`,
    [512 /* PatchFlags.NEED_PATCH */ ]: `NEED_PATCH`,
    [1024 /* PatchFlags.DYNAMIC_SLOTS */ ]: `DYNAMIC_SLOTS`,
    [2048 /* PatchFlags.DEV_ROOT_FRAGMENT */ ]: `DEV_ROOT_FRAGMENT`,
    [-1 /* PatchFlags.HOISTED */ ]: `HOISTED`,
    [-2 /* PatchFlags.BAIL */ ]: `BAIL`
};
/**
 * Dev only
 */ const slotFlagsText = {
    [1 /* SlotFlags.STABLE */ ]: "STABLE",
    [2 /* SlotFlags.DYNAMIC */ ]: "DYNAMIC",
    [3 /* SlotFlags.FORWARDED */ ]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /*#__PURE__*/ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) for(const key in normalized)res[key] = normalized[key];
        }
        return res;
    } else if (isString(value)) return value;
    else if (isObject(value)) return value;
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*.*?\*\//gs;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = "";
    if (!styles || isString(styles)) return ret;
    for(const key in styles){
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) || typeof value === "number") // only render valid values
        ret += `${normalizedKey}:${value};`;
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) res = value;
    else if (isArray(value)) for(let i = 0; i < value.length; i++){
        const normalized = normalizeClass(value[i]);
        if (normalized) res += normalized + " ";
    }
    else if (isObject(value)) {
        for(const name in value)if (value[name]) res += name + " ";
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass , style  } = props;
    if (klass && !isString(klass)) props.class = normalizeClass(klass);
    if (style) props.style = normalizeStyle(style);
    return props;
}
// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isHTMLTag = /*#__PURE__*/ makeMap(HTML_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isSVGTag = /*#__PURE__*/ makeMap(SVG_TAGS);
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */ const isVoidTag = /*#__PURE__*/ makeMap(VOID_TAGS);
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */ const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */ const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */ function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) return attrValidationCache[name];
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) console.error(`unsafe attribute name: ${name}`);
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */ const isKnownHtmlAttr = /*#__PURE__*/ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */ const isKnownSvgAttr = /*#__PURE__*/ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) return str;
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) html += str.slice(lastIndex, index);
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++)equal = looseEqual(a[i], b[i]);
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) return a === b;
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */ if (!aValidType || !bValidType) return false;
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) return false;
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) return false;
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */ const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) return replacer(_key, val.value);
    else if (isMap(val)) return {
        [`Map(${val.size})`]: [
            ...val.entries()
        ].reduce((entries, [key, val])=>{
            entries[`${key} =>`] = val;
            return entries;
        }, {})
    };
    else if (isSet(val)) return {
        [`Set(${val.size})`]: [
            ...val.values()
        ]
    };
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) return String(val);
    return val;
};
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = ()=>{};
/**
 * Always return false.
 */ const NO = ()=>false;
const onRE = /^on[^a-z]/;
const isOn = (key)=>onRE.test(key);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) arr.splice(i, 1);
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /*#__PURE__*/ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */ const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */ const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
/**
 * @private
 */ const capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */ const toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, arg)=>{
    for(let i = 0; i < fns.length; i++)fns[i](arg);
};
const def = (obj, key, value)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
/**
 * "123-foo" will be parsed to 123
 * This is used for the .number modifier in v-model
 */ const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
/**
 * Only conerces number-like strings
 * "123-foo" will be returned as-is
 */ const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYNyc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let script;
let initialize = ()=>{
    script = require("f3015e0676d66ec9");
    if (script.__esModule) script = script.default;
    script.render = require("20bd2bdab8dbf7f8").render;
    require("cbee21509ac3fafe").default(script);
    script.__scopeId = "data-v-13f3c2";
    script.__file = "C:\\Users\\heyoz\\projects\\scratchmoar\\src\\App.vue";
};
initialize();
if (module.hot) {
    script.__hmrId = "13f3c2-hmr";
    module.hot.accept(()=>{
        setTimeout(()=>{
            initialize();
            if (!__VUE_HMR_RUNTIME__.createRecord("13f3c2-hmr", script)) __VUE_HMR_RUNTIME__.reload("13f3c2-hmr", script);
        }, 0);
    });
}
exports.default = script;

},{"20bd2bdab8dbf7f8":"evi43","cbee21509ac3fafe":"h0MjM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","f3015e0676d66ec9":"iiJmB"}],"evi43":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>render);
var _vue = require("vue");
const _hoisted_1 = {
    ref: "menu",
    class: "menu-bar_menu-bar-item_scratchmoar"
};
const _hoisted_2 = {
    class: "scratchmoarPopupContent"
};
const _hoisted_3 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "scratchmoarPopupContentHeader"
}, [
    /*#__PURE__*/ (0, _vue.createElementVNode)("h2", null, "Scratchmoar Settings")
], -1 /* HOISTED */ );
const _hoisted_4 = /*#__PURE__*/ (0, _vue.createElementVNode)("div", {
    class: "scratchmoarPopupContentBody"
}, null, -1 /* HOISTED */ );
const _hoisted_5 = {
    class: "scratchmoarPopupContentFooter"
};
const _hoisted_6 = /*#__PURE__*/ (0, _vue.createElementVNode)("button", {
    style: {
        "float": "right"
    }
}, "Save snapshot", -1 /* HOISTED */ );
function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, _vue.openBlock)(), (0, _vue.createElementBlock)("div", _hoisted_1, [
        (0, _vue.createElementVNode)("span", {
            onClick: _cache[0] || (_cache[0] = ($event)=>$setup.isVisible = !$setup.isVisible)
        }, "Scratchmoar"),
        (0, _vue.createElementVNode)("div", {
            class: (0, _vue.normalizeClass)({
                scratchmoarHidden: !$setup.isVisible,
                scratchmoarPopup: true
            })
        }, [
            (0, _vue.createElementVNode)("div", {
                class: "scratchmoarOverlay",
                onClick: _cache[1] || (_cache[1] = ($event)=>$setup.isVisible = false)
            }),
            (0, _vue.createElementVNode)("div", _hoisted_2, [
                _hoisted_3,
                _hoisted_4,
                (0, _vue.createElementVNode)("div", _hoisted_5, [
                    (0, _vue.createElementVNode)("button", {
                        onClick: _cache[2] || (_cache[2] = ($event)=>$setup.isVisible = false)
                    }, "Close"),
                    (0, _vue.createElementVNode)("button", {
                        onClick: _cache[3] || (_cache[3] = ($event)=>$setup.clearData())
                    }, "Clear data"),
                    _hoisted_6
                ])
            ])
        ], 2 /* CLASS */ )
    ], 512 /* NEED_PATCH */ );
}
if (module.hot) module.hot.accept(()=>{
    __VUE_HMR_RUNTIME__.rerender("13f3c2-hmr", render);
});

},{"vue":"gzxs9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h0MjM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let NOOP = ()=>{};
exports.default = (script)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiJmB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vue = require("vue");
var _snapshotsJs = require("./store/snapshots.js");
var _snapshotsJsDefault = parcelHelpers.interopDefault(_snapshotsJs);
exports.default = {
    __name: "App",
    setup (__props, { expose  }) {
        expose();
        const menu = (0, _vue.ref)(null);
        const isVisible = (0, _vue.ref)(true);
        (0, _vue.onMounted)(()=>{
            // Add matching classes for styling purposes
            const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])');
            $menuItem.classList.forEach((className)=>menu.value.classList.add(className));
            // Manually match list item styles
            let styles = getComputedStyle(document.querySelector('[class*="gui_page-wrapper_"] > [class*="menu-bar_menu-bar"]'));
            const $menuItems = document.querySelectorAll(".menu-bar_menu-bar-item_scratchmoar li");
            $menuItems.forEach(($menuItem)=>{
                $menuItem.style.backgroundColor = styles.backgroundColor;
            });
        });
        /**
 * Trigger a clear data event
 */ function clearData() {
            document.dispatchEvent(new CustomEvent("scratchmoarResetDB"));
        }
        const __returned__ = {
            menu,
            isVisible,
            clearData,
            ref: (0, _vue.ref),
            onMounted: (0, _vue.onMounted),
            get Snapshots () {
                return 0, _snapshotsJsDefault.default;
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","vue":"gzxs9","./store/snapshots.js":"aBwoW"}],"aBwoW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dexie = require("dexie");
var _dexieDefault = parcelHelpers.interopDefault(_dexie);
const db = new (0, _dexieDefault.default)("scratchmoar");
exports.default = db;
db.version(1).stores({
    autosave: "&key, value",
    snapshots: "++id, parentId, created, title, description, *tags"
});

},{"dexie":"2sctG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2sctG":[function(require,module,exports) {
/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.2.3, Mon Jan 23 2023
 *
 * https://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */ /*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dexie", ()=>Dexie$1);
parcelHelpers.export(exports, "RangeSet", ()=>RangeSet);
parcelHelpers.export(exports, "default", ()=>Dexie$1);
parcelHelpers.export(exports, "liveQuery", ()=>liveQuery);
parcelHelpers.export(exports, "mergeRanges", ()=>mergeRanges);
parcelHelpers.export(exports, "rangesOverlap", ()=>rangesOverlap);
var global = arguments[3];
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) _global.Promise = Promise;
function extend(obj, extension) {
    if (typeof extension !== "object") return obj;
    keys(extension).forEach(function(key) {
        obj[key] = extension[key];
    });
    return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
    return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
    if (typeof extension === "function") extension = extension(getProto(proto));
    (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(function(key) {
        setProp(proto, key, extension[key]);
    });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
    defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
        get: functionOrGetSet.get,
        set: functionOrGetSet.set,
        configurable: true
    } : {
        value: functionOrGetSet,
        configurable: true,
        writable: true
    }, options));
}
function derive(Child) {
    return {
        from: function(Parent) {
            Child.prototype = Object.create(Parent.prototype);
            setProp(Child.prototype, "constructor", Child);
            return {
                extend: props.bind(null, Child.prototype)
            };
        }
    };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
    var pd = getOwnPropertyDescriptor(obj, prop);
    var proto;
    return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
    return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
    return overridedFactory(origFunc);
}
function assert(b) {
    if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
    if (_global.setImmediate) setImmediate(fn);
    else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
    return array.reduce(function(result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
        return result;
    }, {});
}
function tryCatch(fn, onerror, args) {
    try {
        fn.apply(null, args);
    } catch (ex) {
        onerror && onerror(ex);
    }
}
function getByKeyPath(obj, keyPath) {
    if (hasOwn(obj, keyPath)) return obj[keyPath];
    if (!keyPath) return obj;
    if (typeof keyPath !== "string") {
        var rv = [];
        for(var i = 0, l = keyPath.length; i < l; ++i){
            var val = getByKeyPath(obj, keyPath[i]);
            rv.push(val);
        }
        return rv;
    }
    var period = keyPath.indexOf(".");
    if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
    }
    return undefined;
}
function setByKeyPath(obj, keyPath, value) {
    if (!obj || keyPath === undefined) return;
    if ("isFrozen" in Object && Object.isFrozen(obj)) return;
    if (typeof keyPath !== "string" && "length" in keyPath) {
        assert(typeof value !== "string" && "length" in value);
        for(var i = 0, l = keyPath.length; i < l; ++i)setByKeyPath(obj, keyPath[i], value[i]);
    } else {
        var period = keyPath.indexOf(".");
        if (period !== -1) {
            var currentKeyPath = keyPath.substr(0, period);
            var remainingKeyPath = keyPath.substr(period + 1);
            if (remainingKeyPath === "") {
                if (value === undefined) {
                    if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);
                    else delete obj[currentKeyPath];
                } else obj[currentKeyPath] = value;
            } else {
                var innerObj = obj[currentKeyPath];
                if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
                setByKeyPath(innerObj, remainingKeyPath, value);
            }
        } else if (value === undefined) {
            if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);
            else delete obj[keyPath];
        } else obj[keyPath] = value;
    }
}
function delByKeyPath(obj, keyPath) {
    if (typeof keyPath === "string") setByKeyPath(obj, keyPath, undefined);
    else if ("length" in keyPath) [].map.call(keyPath, function(kp) {
        setByKeyPath(obj, kp, undefined);
    });
}
function shallowClone(obj) {
    var rv = {};
    for(var m in obj)if (hasOwn(obj, m)) rv[m] = obj[m];
    return rv;
}
var concat = [].concat;
function flatten(a) {
    return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([
    8,
    16,
    32,
    64
].map(function(num) {
    return [
        "Int",
        "Uint",
        "Float"
    ].map(function(t) {
        return t + num + "Array";
    });
}))).filter(function(t) {
    return _global[t];
});
var intrinsicTypes = intrinsicTypeNames.map(function(t) {
    return _global[t];
});
arrayToObject(intrinsicTypeNames, function(x) {
    return [
        x,
        true
    ];
});
var circularRefs = null;
function deepClone(any) {
    circularRefs = typeof WeakMap !== "undefined" && new WeakMap();
    var rv = innerDeepClone(any);
    circularRefs = null;
    return rv;
}
function innerDeepClone(any) {
    if (!any || typeof any !== "object") return any;
    var rv = circularRefs && circularRefs.get(any);
    if (rv) return rv;
    if (isArray(any)) {
        rv = [];
        circularRefs && circularRefs.set(any, rv);
        for(var i = 0, l = any.length; i < l; ++i)rv.push(innerDeepClone(any[i]));
    } else if (intrinsicTypes.indexOf(any.constructor) >= 0) rv = any;
    else {
        var proto = getProto(any);
        rv = proto === Object.prototype ? {} : Object.create(proto);
        circularRefs && circularRefs.set(any, rv);
        for(var prop in any)if (hasOwn(any, prop)) rv[prop] = innerDeepClone(any[prop]);
    }
    return rv;
}
var toString = {}.toString;
function toStringTag(o) {
    return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function(x) {
    var i;
    return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function() {
    return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
    var i, a, x, it;
    if (arguments.length === 1) {
        if (isArray(arrayLike)) return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [
            arrayLike
        ];
        if (it = getIteratorOf(arrayLike)) {
            a = [];
            while(x = it.next(), !x.done)a.push(x.value);
            return a;
        }
        if (arrayLike == null) return [
            arrayLike
        ];
        i = arrayLike.length;
        if (typeof i === "number") {
            a = new Array(i);
            while(i--)a[i] = arrayLike[i];
            return a;
        }
        return [
            arrayLike
        ];
    }
    i = arguments.length;
    a = new Array(i);
    while(i--)a[i] = arguments[i];
    return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? function(fn) {
    return fn[Symbol.toStringTag] === "AsyncFunction";
} : function() {
    return false;
};
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
    debug = value;
    libraryFilter = filter;
}
var libraryFilter = function() {
    return true;
};
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
    if (NEEDS_THROW_FOR_STACK) try {
        getErrorWithStack.arguments;
        throw new Error();
    } catch (e) {
        return e;
    }
    return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
    var stack = exception.stack;
    if (!stack) return "";
    numIgnoredFrames = numIgnoredFrames || 0;
    if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
    return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(function(frame) {
        return "\n" + frame;
    }).join("");
}
var dexieErrorNames = [
    "Modify",
    "Bulk",
    "OpenFailed",
    "VersionChange",
    "Schema",
    "Upgrade",
    "InvalidTable",
    "MissingAPI",
    "NoSuchDatabase",
    "InvalidArgument",
    "SubTransaction",
    "Unsupported",
    "Internal",
    "DatabaseClosed",
    "PrematureCommit",
    "ForeignAwait"
];
var idbDomErrorNames = [
    "Unknown",
    "Constraint",
    "Data",
    "TransactionInactive",
    "ReadOnly",
    "Version",
    "NotFound",
    "InvalidState",
    "InvalidAccess",
    "Abort",
    "Timeout",
    "QuotaExceeded",
    "Syntax",
    "DataClone"
];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
    VersionChanged: "Database version changed by other database connection",
    DatabaseClosed: "Database has been closed",
    Abort: "Transaction aborted",
    TransactionInactive: "Transaction has already completed or failed",
    MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
    this._e = getErrorWithStack();
    this.name = name;
    this.message = msg;
}
derive(DexieError).from(Error).extend({
    stack: {
        get: function() {
            return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
    },
    toString: function() {
        return this.name + ": " + this.message;
    }
});
function getMultiErrorMessage(msg, failures) {
    return msg + ". Errors: " + Object.keys(failures).map(function(key) {
        return failures[key].toString();
    }).filter(function(v, i, s) {
        return s.indexOf(v) === i;
    }).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
    this._e = getErrorWithStack();
    this.failures = failures;
    this.failedKeys = failedKeys;
    this.successCount = successCount;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
    this._e = getErrorWithStack();
    this.name = "BulkError";
    this.failures = Object.keys(failures).map(function(pos) {
        return failures[pos];
    });
    this.failuresByPos = failures;
    this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function(obj, name) {
    return obj[name] = name + "Error", obj;
}, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function(obj, name) {
    var fullName = name + "Error";
    function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;
        if (!msgOrInner) {
            this.message = defaultTexts[name] || fullName;
            this.inner = null;
        } else if (typeof msgOrInner === "string") {
            this.message = "" + msgOrInner + (!inner ? "" : "\n " + inner);
            this.inner = inner || null;
        } else if (typeof msgOrInner === "object") {
            this.message = msgOrInner.name + " " + msgOrInner.message;
            this.inner = msgOrInner;
        }
    }
    derive(DexieError).from(BaseException);
    obj[name] = DexieError;
    return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function(obj, name) {
    obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
function mapError(domError, message) {
    if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
    var rv = new exceptionMap[domError.name](message || domError.message, domError);
    if ("stack" in domError) setProp(rv, "stack", {
        get: function() {
            return this.inner.stack;
        }
    });
    return rv;
}
var fullNameExceptions = errorList.reduce(function(obj, name) {
    if ([
        "Syntax",
        "Type",
        "Range"
    ].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
    return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
    return val;
}
function pureFunctionChain(f1, f2) {
    if (f1 == null || f1 === mirror) return f2;
    return function(val) {
        return f2(f1(val));
    };
}
function callBoth(on1, on2) {
    return function() {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
    };
}
function hookCreatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function() {
        var res = f1.apply(this, arguments);
        if (res !== undefined) arguments[0] = res;
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
    };
}
function hookDeletingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function() {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    };
}
function hookUpdatingChain(f1, f2) {
    if (f1 === nop) return f2;
    return function(modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess, onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
    };
}
function reverseStoppableEventChain(f1, f2) {
    if (f1 === nop) return f2;
    return function() {
        if (f2.apply(this, arguments) === false) return false;
        return f1.apply(this, arguments);
    };
}
function promisableChain(f1, f2) {
    if (f1 === nop) return f2;
    return function() {
        var res = f1.apply(this, arguments);
        if (res && typeof res.then === "function") {
            var thiz = this, i = arguments.length, args = new Array(i);
            while(i--)args[i] = arguments[i];
            return res.then(function() {
                return f2.apply(thiz, args);
            });
        }
        return f2.apply(this, arguments);
    };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100, MAX_LONG_STACKS = 20, ZONE_ECHO_LIMIT = 100, _a$1 = typeof Promise === "undefined" ? [] : function() {
    var globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [
        globalP,
        getProto(globalP),
        globalP
    ];
    var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([
        0
    ]));
    return [
        nativeP,
        getProto(nativeP),
        globalP
    ];
}(), resolvedNativePromise = _a$1[0], nativePromiseProto = _a$1[1], resolvedGlobalPromise = _a$1[2], nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? function() {
    resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function() {
    var hiddenDiv = document.createElement("div");
    new MutationObserver(function() {
        physicalTick();
        hiddenDiv = null;
    }).observe(hiddenDiv, {
        attributes: true
    });
    hiddenDiv.setAttribute("i", "1");
} : function() {
    setTimeout(physicalTick, 0);
};
var asap = function(callback, args) {
    microtickQueue.push([
        callback,
        args
    ]);
    if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
    }
};
var isOutsideMicroTick = true, needsNewPhysicalTick = true, unhandledErrors = [], rejectingErrors = [], currentFulfiller = null, rejectionMapper = mirror;
var globalPSD = {
    id: "global",
    global: true,
    ref: 0,
    unhandleds: [],
    onunhandled: globalError,
    pgp: false,
    env: {},
    finalize: function() {
        this.unhandleds.forEach(function(uh) {
            try {
                globalError(uh[0], uh[1]);
            } catch (e) {}
        });
    }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
    if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
    this._listeners = [];
    this.onuncatched = nop;
    this._lib = false;
    var psd = this._PSD = PSD;
    if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0;
    }
    if (typeof fn !== "function") {
        if (fn !== INTERNAL) throw new TypeError("Not a function");
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false) handleRejection(this, this._value);
        return;
    }
    this._state = null;
    this._value = null;
    ++psd.ref;
    executePromiseTask(this, fn);
}
var thenProp = {
    get: function() {
        var psd = PSD, microTaskId = totalEchoes;
        function then(onFulfilled, onRejected) {
            var _this = this;
            var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
            var cleanup = possibleAwait && !decrementExpectedAwaits();
            var rv = new DexiePromise(function(resolve, reject) {
                propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
            });
            debug && linkToPreviousPromise(rv, this);
            return rv;
        }
        then.prototype = INTERNAL;
        return then;
    },
    set: function(value) {
        setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
            get: function() {
                return value;
            },
            set: thenProp.set
        });
    }
};
props(DexiePromise.prototype, {
    then: thenProp,
    _then: function(onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
    },
    catch: function(onRejected) {
        if (arguments.length === 1) return this.then(null, onRejected);
        var type = arguments[0], handler = arguments[1];
        return typeof type === "function" ? this.then(null, function(err) {
            return err instanceof type ? handler(err) : PromiseReject(err);
        }) : this.then(null, function(err) {
            return err && err.name === type ? handler(err) : PromiseReject(err);
        });
    },
    finally: function(onFinally) {
        return this.then(function(value) {
            onFinally();
            return value;
        }, function(err) {
            onFinally();
            return PromiseReject(err);
        });
    },
    stack: {
        get: function() {
            if (this._stack) return this._stack;
            try {
                stack_being_generated = true;
                var stacks = getStack(this, [], MAX_LONG_STACKS);
                var stack = stacks.join("\nFrom previous: ");
                if (this._state !== null) this._stack = stack;
                return stack;
            } finally{
                stack_being_generated = false;
            }
        }
    },
    timeout: function(ms, msg) {
        var _this = this;
        return ms < Infinity ? new DexiePromise(function(resolve, reject) {
            var handle = setTimeout(function() {
                return reject(new exceptions.Timeout(msg));
            }, ms);
            _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
        }) : this;
    }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
    this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
    this.onRejected = typeof onRejected === "function" ? onRejected : null;
    this.resolve = resolve;
    this.reject = reject;
    this.psd = zone;
}
props(DexiePromise, {
    all: function() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
            if (values.length === 0) resolve([]);
            var remaining = values.length;
            values.forEach(function(a, i) {
                return DexiePromise.resolve(a).then(function(x) {
                    values[i] = x;
                    if (!--remaining) resolve(values);
                }, reject);
            });
        });
    },
    resolve: function(value) {
        if (value instanceof DexiePromise) return value;
        if (value && typeof value.then === "function") return new DexiePromise(function(resolve, reject) {
            value.then(resolve, reject);
        });
        var rv = new DexiePromise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
    },
    reject: PromiseReject,
    race: function() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
            values.map(function(value) {
                return DexiePromise.resolve(value).then(resolve, reject);
            });
        });
    },
    PSD: {
        get: function() {
            return PSD;
        },
        set: function(value) {
            return PSD = value;
        }
    },
    totalEchoes: {
        get: function() {
            return totalEchoes;
        }
    },
    newPSD: newScope,
    usePSD: usePSD,
    scheduler: {
        get: function() {
            return asap;
        },
        set: function(value) {
            asap = value;
        }
    },
    rejectionMapper: {
        get: function() {
            return rejectionMapper;
        },
        set: function(value) {
            rejectionMapper = value;
        }
    },
    follow: function(fn, zoneProps) {
        return new DexiePromise(function(resolve, reject) {
            return newScope(function(resolve, reject) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject;
                psd.finalize = callBoth(function() {
                    var _this = this;
                    run_at_end_of_this_or_next_physical_tick(function() {
                        _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
                    });
                }, psd.finalize);
                fn();
            }, zoneProps, resolve, reject);
        });
    }
});
if (NativePromise) {
    if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function() {
        var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve) {
            if (possiblePromises.length === 0) resolve([]);
            var remaining = possiblePromises.length;
            var results = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                    return results[i] = {
                        status: "fulfilled",
                        value: value
                    };
                }, function(reason) {
                    return results[i] = {
                        status: "rejected",
                        reason: reason
                    };
                }).then(function() {
                    return --remaining || resolve(results);
                });
            });
        });
    });
    if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function() {
        var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function(resolve, reject) {
            if (possiblePromises.length === 0) reject(new AggregateError([]));
            var remaining = possiblePromises.length;
            var failures = new Array(remaining);
            possiblePromises.forEach(function(p, i) {
                return DexiePromise.resolve(p).then(function(value) {
                    return resolve(value);
                }, function(failure) {
                    failures[i] = failure;
                    if (!--remaining) reject(new AggregateError(failures));
                });
            });
        });
    });
}
function executePromiseTask(promise, fn) {
    try {
        fn(function(value) {
            if (promise._state !== null) return;
            if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
            var shouldExecuteTick = promise._lib && beginMicroTickScope();
            if (value && typeof value.then === "function") executePromiseTask(promise, function(resolve, reject) {
                value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
            });
            else {
                promise._state = true;
                promise._value = value;
                propagateAllListeners(promise);
            }
            if (shouldExecuteTick) endMicroTickScope();
        }, handleRejection.bind(null, promise));
    } catch (ex) {
        handleRejection(promise, ex);
    }
}
function handleRejection(promise, reason) {
    rejectingErrors.push(reason);
    if (promise._state !== null) return;
    var shouldExecuteTick = promise._lib && beginMicroTickScope();
    reason = rejectionMapper(reason);
    promise._state = false;
    promise._value = reason;
    debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(function() {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
            get: function() {
                return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
            }
        });
    });
    addPossiblyUnhandledError(promise);
    propagateAllListeners(promise);
    if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
    var listeners = promise._listeners;
    promise._listeners = [];
    for(var i = 0, len = listeners.length; i < len; ++i)propagateToListener(promise, listeners[i]);
    var psd = promise._PSD;
    --psd.ref || psd.finalize();
    if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap(function() {
            if (--numScheduledCalls === 0) finalizePhysicalTick();
        }, []);
    }
}
function propagateToListener(promise, listener) {
    if (promise._state === null) {
        promise._listeners.push(listener);
        return;
    }
    var cb = promise._state ? listener.onFulfilled : listener.onRejected;
    if (cb === null) return (promise._state ? listener.resolve : listener.reject)(promise._value);
    ++listener.psd.ref;
    ++numScheduledCalls;
    asap(callListener, [
        cb,
        promise,
        listener
    ]);
}
function callListener(cb, promise, listener) {
    try {
        currentFulfiller = promise;
        var ret, value = promise._value;
        if (promise._state) ret = cb(value);
        else {
            if (rejectingErrors.length) rejectingErrors = [];
            ret = cb(value);
            if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
        }
        listener.resolve(ret);
    } catch (e) {
        listener.reject(e);
    } finally{
        currentFulfiller = null;
        if (--numScheduledCalls === 0) finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
    }
}
function getStack(promise, stacks, limit) {
    if (stacks.length === limit) return stacks;
    var stack = "";
    if (promise._state === false) {
        var failure = promise._value, errorName, message;
        if (failure != null) {
            errorName = failure.name || "Error";
            message = failure.message || failure;
            stack = prettyStack(failure, 0);
        } else {
            errorName = failure;
            message = "";
        }
        stacks.push(errorName + (message ? ": " + message : "") + stack);
    }
    if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
        if (promise._prev) getStack(promise._prev, stacks, limit);
    }
    return stacks;
}
function linkToPreviousPromise(promise, prev) {
    var numPrev = prev ? prev._numPrev + 1 : 0;
    if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
    }
}
function physicalTick() {
    beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
    var wasRootExec = isOutsideMicroTick;
    isOutsideMicroTick = false;
    needsNewPhysicalTick = false;
    return wasRootExec;
}
function endMicroTickScope() {
    var callbacks, i, l;
    do while(microtickQueue.length > 0){
        callbacks = microtickQueue;
        microtickQueue = [];
        l = callbacks.length;
        for(i = 0; i < l; ++i){
            var item = callbacks[i];
            item[0].apply(null, item[1]);
        }
    }
    while (microtickQueue.length > 0);
    isOutsideMicroTick = true;
    needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
    var unhandledErrs = unhandledErrors;
    unhandledErrors = [];
    unhandledErrs.forEach(function(p) {
        p._PSD.onunhandled.call(null, p._value, p);
    });
    var finalizers = tickFinalizers.slice(0);
    var i = finalizers.length;
    while(i)finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
    function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
    }
    tickFinalizers.push(finalizer);
    ++numScheduledCalls;
    asap(function() {
        if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
}
function addPossiblyUnhandledError(promise) {
    if (!unhandledErrors.some(function(p) {
        return p._value === promise._value;
    })) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
    var i = unhandledErrors.length;
    while(i)if (unhandledErrors[--i]._value === promise._value) {
        unhandledErrors.splice(i, 1);
        return;
    }
}
function PromiseReject(reason) {
    return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
    var psd = PSD;
    return function() {
        var wasRootExec = beginMicroTickScope(), outerScope = PSD;
        try {
            switchToZone(psd, true);
            return fn.apply(this, arguments);
        } catch (e) {
            errorCatcher && errorCatcher(e);
        } finally{
            switchToZone(outerScope, false);
            if (wasRootExec) endMicroTickScope();
        }
    };
}
var task = {
    awaits: 0,
    echoes: 0,
    id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props, a1, a2) {
    var parent = PSD, psd = Object.create(parent);
    psd.parent = parent;
    psd.ref = 0;
    psd.global = false;
    psd.id = ++zone_id_counter;
    var globalEnv = globalPSD.env;
    psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: {
            value: DexiePromise,
            configurable: true,
            writable: true
        },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
    } : {};
    if (props) extend(psd, props);
    ++parent.ref;
    psd.finalize = function() {
        --this.parent.ref || this.parent.finalize();
    };
    var rv = usePSD(psd, fn, a1, a2);
    if (psd.ref === 0) psd.finalize();
    return rv;
}
function incrementExpectedAwaits() {
    if (!task.id) task.id = ++taskCounter;
    ++task.awaits;
    task.echoes += ZONE_ECHO_LIMIT;
    return task.id;
}
function decrementExpectedAwaits() {
    if (!task.awaits) return false;
    if (--task.awaits === 0) task.id = 0;
    task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) incrementExpectedAwaits = decrementExpectedAwaits = nop;
function onPossibleParallellAsync(possiblePromise) {
    if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function(x) {
            decrementExpectedAwaits();
            return x;
        }, function(e) {
            decrementExpectedAwaits();
            return rejection(e);
        });
    }
    return possiblePromise;
}
function zoneEnterEcho(targetZone) {
    ++totalEchoes;
    if (!task.echoes || --task.echoes === 0) task.echoes = task.id = 0;
    zoneStack.push(PSD);
    switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
    var zone = zoneStack[zoneStack.length - 1];
    zoneStack.pop();
    switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
    var currentZone = PSD;
    if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (!--zoneEchoes || targetZone !== PSD)) enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
    if (targetZone === PSD) return;
    PSD = targetZone;
    if (currentZone === globalPSD) globalPSD.env = snapShot();
    if (patchGlobalPromise) {
        var GlobalPromise_1 = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise_1.prototype.then = targetEnv.gthen;
        if (currentZone.global || targetZone.global) {
            Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
            GlobalPromise_1.all = targetEnv.all;
            GlobalPromise_1.race = targetEnv.race;
            GlobalPromise_1.resolve = targetEnv.resolve;
            GlobalPromise_1.reject = targetEnv.reject;
            if (targetEnv.allSettled) GlobalPromise_1.allSettled = targetEnv.allSettled;
            if (targetEnv.any) GlobalPromise_1.any = targetEnv.any;
        }
    }
}
function snapShot() {
    var GlobalPromise = _global.Promise;
    return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
    } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
    var outerScope = PSD;
    try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
    } finally{
        switchToZone(outerScope, false);
    }
}
function enqueueNativeMicroTask(job) {
    nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
    return typeof fn !== "function" ? fn : function() {
        var outerZone = PSD;
        if (possibleAwait) incrementExpectedAwaits();
        switchToZone(zone, true);
        try {
            return fn.apply(this, arguments);
        } finally{
            switchToZone(outerZone, false);
            if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
        }
    };
}
function getPatchedPromiseThen(origThen, zone) {
    return function(onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
    };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
    var rv;
    try {
        rv = promise.onuncatched(err);
    } catch (e) {}
    if (rv !== false) try {
        var event, eventData = {
            promise: promise,
            reason: err
        };
        if (_global.document && document.createEvent) {
            event = document.createEvent("Event");
            event.initEvent(UNHANDLEDREJECTION, true, true);
            extend(event, eventData);
        } else if (_global.CustomEvent) {
            event = new CustomEvent(UNHANDLEDREJECTION, {
                detail: eventData
            });
            extend(event, eventData);
        }
        if (event && _global.dispatchEvent) {
            dispatchEvent(event);
            if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
                _global.onunhandledrejection(event);
            } catch (_) {}
        }
        if (debug && event && !event.defaultPrevented) console.warn("Unhandled rejection: " + (err.stack || err));
    } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
    if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
        if (db._state.openComplete) return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
        if (!db._state.isBeingOpened) {
            if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
            db.open().catch(nop);
        }
        return db._state.dbReadyPromise.then(function() {
            return tempTransaction(db, mode, storeNames, fn);
        });
    } else {
        var trans = db._createTransaction(mode, storeNames, db._dbSchema);
        try {
            trans.create();
            db._state.PR1398_maxLoop = 3;
        } catch (ex) {
            if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db._close();
                return db.open().then(function() {
                    return tempTransaction(db, mode, storeNames, fn);
                });
            }
            return rejection(ex);
        }
        return trans._promise(mode, function(resolve, reject) {
            return newScope(function() {
                PSD.trans = trans;
                return fn(resolve, reject, trans);
            });
        }).then(function(result) {
            return trans._completion.then(function() {
                return result;
            });
        });
    }
}
var DEXIE_VERSION = "3.2.3";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = function(frame) {
    return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
    return filter1 ? filter2 ? function() {
        return filter1.apply(this, arguments) && filter2.apply(this, arguments);
    } : filter1 : filter2;
}
var AnyRange = {
    type: 3,
    lower: -Infinity,
    lowerOpen: false,
    upper: [
        []
    ],
    upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
    return typeof keyPath === "string" && !/\./.test(keyPath) ? function(obj) {
        if (obj[keyPath] === undefined && keyPath in obj) {
            obj = deepClone(obj);
            delete obj[keyPath];
        }
        return obj;
    } : function(obj) {
        return obj;
    };
}
var Table = function() {
    function Table() {}
    Table.prototype._trans = function(mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;
        function checkTableInTransaction(resolve, reject, trans) {
            if (!trans.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
            return fn(trans.idbtrans, trans);
        }
        var wasRootExec = beginMicroTickScope();
        try {
            return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function() {
                return trans._promise(mode, checkTableInTransaction, writeLocked);
            }, {
                trans: trans,
                transless: PSD.transless || PSD
            }) : tempTransaction(this.db, mode, [
                this.name
            ], checkTableInTransaction);
        } finally{
            if (wasRootExec) endMicroTickScope();
        }
    };
    Table.prototype.get = function(keyOrCrit, cb) {
        var _this = this;
        if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
        return this._trans("readonly", function(trans) {
            return _this.core.get({
                trans: trans,
                key: keyOrCrit
            }).then(function(res) {
                return _this.hook.reading.fire(res);
            });
        }).then(cb);
    };
    Table.prototype.where = function(indexOrCrit) {
        if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit)) return new this.db.WhereClause(this, "[" + indexOrCrit.join("+") + "]");
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function(ix) {
            return ix.compound && keyPaths.every(function(keyPath) {
                return ix.keyPath.indexOf(keyPath) >= 0;
            }) && ix.keyPath.every(function(keyPath) {
                return keyPaths.indexOf(keyPath) >= 0;
            });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function(kp) {
            return indexOrCrit[kp];
        }));
        if (!compoundIndex && debug) console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join("+") + "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;
        function equals(a, b) {
            try {
                return idb.cmp(a, b) === 0;
            } catch (e) {
                return false;
            }
        }
        var _a = keyPaths.reduce(function(_a, keyPath) {
            var prevIndex = _a[0], prevFilterFn = _a[1];
            var index = idxByName[keyPath];
            var value = indexOrCrit[keyPath];
            return [
                prevIndex || index,
                prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function(x) {
                    var prop = getByKeyPath(x, keyPath);
                    return isArray(prop) && prop.some(function(item) {
                        return equals(value, item);
                    });
                } : function(x) {
                    return equals(value, getByKeyPath(x, keyPath));
                }) : prevFilterFn
            ];
        }, [
            null,
            null
        ]), idx = _a[0], filterFunction = _a[1];
        return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
    };
    Table.prototype.filter = function(filterFunction) {
        return this.toCollection().and(filterFunction);
    };
    Table.prototype.count = function(thenShortcut) {
        return this.toCollection().count(thenShortcut);
    };
    Table.prototype.offset = function(offset) {
        return this.toCollection().offset(offset);
    };
    Table.prototype.limit = function(numRows) {
        return this.toCollection().limit(numRows);
    };
    Table.prototype.each = function(callback) {
        return this.toCollection().each(callback);
    };
    Table.prototype.toArray = function(thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
    };
    Table.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
    };
    Table.prototype.orderBy = function(index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join("+") + "]" : index));
    };
    Table.prototype.reverse = function() {
        return this.toCollection().reverse();
    };
    Table.prototype.mapToClass = function(constructor) {
        this.schema.mappedClass = constructor;
        var readHook = function(obj) {
            if (!obj) return obj;
            var res = Object.create(constructor.prototype);
            for(var m in obj)if (hasOwn(obj, m)) try {
                res[m] = obj[m];
            } catch (_) {}
            return res;
        };
        if (this.schema.readHook) this.hook.reading.unsubscribe(this.schema.readHook);
        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
    };
    Table.prototype.defineClass = function() {
        function Class(content) {
            extend(this, content);
        }
        return this.mapToClass(Class);
    };
    Table.prototype.add = function(obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "add",
                keys: key != null ? [
                    key
                ] : null,
                values: [
                    objToAdd
                ]
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
            if (keyPath) try {
                setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {}
            return lastResult;
        });
    };
    Table.prototype.update = function(keyOrObject, modifications) {
        if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
            var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
            if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
            try {
                if (typeof modifications !== "function") keys(modifications).forEach(function(keyPath) {
                    setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
                });
                else modifications(keyOrObject, {
                    value: keyOrObject,
                    primKey: key
                });
            } catch (_a) {}
            return this.where(":id").equals(key).modify(modifications);
        } else return this.where(":id").equals(keyOrObject).modify(modifications);
    };
    Table.prototype.put = function(obj, key) {
        var _this = this;
        var _a = this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
        var objToAdd = obj;
        if (keyPath && auto) objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "put",
                values: [
                    objToAdd
                ],
                keys: key != null ? [
                    key
                ] : null
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function(lastResult) {
            if (keyPath) try {
                setByKeyPath(obj, keyPath, lastResult);
            } catch (_) {}
            return lastResult;
        });
    };
    Table.prototype.delete = function(key) {
        var _this = this;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "delete",
                keys: [
                    key
                ]
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
        });
    };
    Table.prototype.clear = function() {
        var _this = this;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "deleteRange",
                range: AnyRange
            });
        }).then(function(res) {
            return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
        });
    };
    Table.prototype.bulkGet = function(keys) {
        var _this = this;
        return this._trans("readonly", function(trans) {
            return _this.core.getMany({
                keys: keys,
                trans: trans
            }).then(function(result) {
                return result.map(function(res) {
                    return _this.hook.reading.fire(res);
                });
            });
        });
    };
    Table.prototype.bulkAdd = function(objects, keysOrOptions, options) {
        var _this = this;
        var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans("readwrite", function(trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (keys && keys.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({
                trans: trans,
                type: "add",
                keys: keys,
                values: objectsToAdd,
                wantResults: wantResults
            }).then(function(_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0) return result;
                throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", failures);
            });
        });
    };
    Table.prototype.bulkPut = function(objects, keysOrOptions, options) {
        var _this = this;
        var keys = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans("readwrite", function(trans) {
            var _a = _this.schema.primKey, auto = _a.auto, keyPath = _a.keyPath;
            if (keyPath && keys) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (keys && keys.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
            var numObjects = objects.length;
            var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
            return _this.core.mutate({
                trans: trans,
                type: "put",
                keys: keys,
                values: objectsToPut,
                wantResults: wantResults
            }).then(function(_a) {
                var numFailures = _a.numFailures, results = _a.results, lastResult = _a.lastResult, failures = _a.failures;
                var result = wantResults ? results : lastResult;
                if (numFailures === 0) return result;
                throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", failures);
            });
        });
    };
    Table.prototype.bulkDelete = function(keys) {
        var _this = this;
        var numKeys = keys.length;
        return this._trans("readwrite", function(trans) {
            return _this.core.mutate({
                trans: trans,
                type: "delete",
                keys: keys
            });
        }).then(function(_a) {
            var numFailures = _a.numFailures, lastResult = _a.lastResult, failures = _a.failures;
            if (numFailures === 0) return lastResult;
            throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
    };
    return Table;
}();
function Events(ctx) {
    var evs = {};
    var rv = function(eventName, subscriber) {
        if (subscriber) {
            var i = arguments.length, args = new Array(i - 1);
            while(--i)args[i - 1] = arguments[i];
            evs[eventName].subscribe.apply(null, args);
            return ctx;
        } else if (typeof eventName === "string") return evs[eventName];
    };
    rv.addEventType = add;
    for(var i = 1, l = arguments.length; i < l; ++i)add(arguments[i]);
    return rv;
    function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === "object") return addConfiguredEvents(eventName);
        if (!chainFunction) chainFunction = reverseStoppableEventChain;
        if (!defaultFunction) defaultFunction = nop;
        var context = {
            subscribers: [],
            fire: defaultFunction,
            subscribe: function(cb) {
                if (context.subscribers.indexOf(cb) === -1) {
                    context.subscribers.push(cb);
                    context.fire = chainFunction(context.fire, cb);
                }
            },
            unsubscribe: function(cb) {
                context.subscribers = context.subscribers.filter(function(fn) {
                    return fn !== cb;
                });
                context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
            }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
    }
    function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function(eventName) {
            var args = cfg[eventName];
            if (isArray(args)) add(eventName, cfg[eventName][0], cfg[eventName][1]);
            else if (args === "asap") var context = add(eventName, mirror, function fire() {
                var i = arguments.length, args = new Array(i);
                while(i--)args[i] = arguments[i];
                context.subscribers.forEach(function(fn) {
                    asap$1(function fireEvent() {
                        fn.apply(null, args);
                    });
                });
            });
            else throw new exceptions.InvalidArgument("Invalid event config");
        });
    }
}
function makeClassConstructor(prototype, constructor) {
    derive(constructor).from({
        prototype: prototype
    });
    return constructor;
}
function createTableConstructor(db) {
    return makeClassConstructor(Table.prototype, function Table(name, tableSchema, trans) {
        this.db = db;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
            "creating": [
                hookCreatingChain,
                nop
            ],
            "reading": [
                pureFunctionChain,
                mirror
            ],
            "updating": [
                hookUpdatingChain,
                nop
            ],
            "deleting": [
                hookDeletingChain,
                nop
            ]
        });
    });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
    return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
    ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
    var curr = ctx.replayFilter;
    ctx.replayFilter = curr ? function() {
        return combine(curr(), factory());
    } : factory;
    ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
    ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
    if (ctx.isPrimKey) return coreSchema.primaryKey;
    var index = coreSchema.getIndexByKeyPath(ctx.index);
    if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
    return index;
}
function openCursor(ctx, coreTable, trans) {
    var index = getIndexOrStore(ctx, coreTable.schema);
    return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === "prev",
        unique: !!ctx.unique,
        query: {
            index: index,
            range: ctx.range
        }
    });
}
function iter(ctx, fn, coreTrans, coreTable) {
    var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
    if (!ctx.or) return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
    else {
        var set_1 = {};
        var union = function(item, cursor, advance) {
            if (!filter || filter(cursor, advance, function(result) {
                return cursor.stop(result);
            }, function(err) {
                return cursor.fail(err);
            })) {
                var primaryKey = cursor.primaryKey;
                var key = "" + primaryKey;
                if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
                if (!hasOwn(set_1, key)) {
                    set_1[key] = true;
                    fn(item, cursor, advance);
                }
            }
        };
        return Promise.all([
            ctx.or._iterate(union, coreTrans),
            iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)
        ]);
    }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
    var mappedFn = valueMapper ? function(x, c, a) {
        return fn(valueMapper(x), c, a);
    } : fn;
    var wrappedFn = wrap(mappedFn);
    return cursorPromise.then(function(cursor) {
        if (cursor) return cursor.start(function() {
            var c = function() {
                return cursor.continue();
            };
            if (!filter || filter(cursor, function(advancer) {
                return c = advancer;
            }, function(val) {
                cursor.stop(val);
                c = nop;
            }, function(e) {
                cursor.fail(e);
                c = nop;
            })) wrappedFn(cursor.value, cursor, function(advancer) {
                return c = advancer;
            });
            c();
        });
    });
}
function cmp(a, b) {
    try {
        var ta = type(a);
        var tb = type(b);
        if (ta !== tb) {
            if (ta === "Array") return 1;
            if (tb === "Array") return -1;
            if (ta === "binary") return 1;
            if (tb === "binary") return -1;
            if (ta === "string") return 1;
            if (tb === "string") return -1;
            if (ta === "Date") return 1;
            if (tb !== "Date") return NaN;
            return -1;
        }
        switch(ta){
            case "number":
            case "Date":
            case "string":
                return a > b ? 1 : a < b ? -1 : 0;
            case "binary":
                return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
            case "Array":
                return compareArrays(a, b);
        }
    } catch (_a) {}
    return NaN;
}
function compareArrays(a, b) {
    var al = a.length;
    var bl = b.length;
    var l = al < bl ? al : bl;
    for(var i = 0; i < l; ++i){
        var res = cmp(a[i], b[i]);
        if (res !== 0) return res;
    }
    return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
    var al = a.length;
    var bl = b.length;
    var l = al < bl ? al : bl;
    for(var i = 0; i < l; ++i){
        if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
    }
    return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
    var t = typeof x;
    if (t !== "object") return t;
    if (ArrayBuffer.isView(x)) return "binary";
    var tsTag = toStringTag(x);
    return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
    if (a instanceof Uint8Array) return a;
    if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
    return new Uint8Array(a);
}
var Collection = function() {
    function Collection() {}
    Collection.prototype._read = function(fn, cb) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
    };
    Collection.prototype._write = function(fn) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
    };
    Collection.prototype._addAlgorithm = function(fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
    };
    Collection.prototype._iterate = function(fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
    };
    Collection.prototype.clone = function(props) {
        var rv = Object.create(this.constructor.prototype), ctx = Object.create(this._ctx);
        if (props) extend(ctx, props);
        rv._ctx = ctx;
        return rv;
    };
    Collection.prototype.raw = function() {
        this._ctx.valueMapper = null;
        return this;
    };
    Collection.prototype.each = function(fn) {
        var ctx = this._ctx;
        return this._read(function(trans) {
            return iter(ctx, fn, trans, ctx.table.core);
        });
    };
    Collection.prototype.count = function(cb) {
        var _this = this;
        return this._read(function(trans) {
            var ctx = _this._ctx;
            var coreTable = ctx.table.core;
            if (isPlainKeyRange(ctx, true)) return coreTable.count({
                trans: trans,
                query: {
                    index: getIndexOrStore(ctx, coreTable.schema),
                    range: ctx.range
                }
            }).then(function(count) {
                return Math.min(count, ctx.limit);
            });
            else {
                var count = 0;
                return iter(ctx, function() {
                    ++count;
                    return false;
                }, trans, coreTable).then(function() {
                    return count;
                });
            }
        }).then(cb);
    };
    Collection.prototype.sortBy = function(keyPath, cb) {
        var parts = keyPath.split(".").reverse(), lastPart = parts[0], lastIndex = parts.length - 1;
        function getval(obj, i) {
            if (i) return getval(obj[parts[i]], i - 1);
            return obj[lastPart];
        }
        var order = this._ctx.dir === "next" ? 1 : -1;
        function sorter(a, b) {
            var aVal = getval(a, lastIndex), bVal = getval(b, lastIndex);
            return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }
        return this.toArray(function(a) {
            return a.sort(sorter);
        }).then(cb);
    };
    Collection.prototype.toArray = function(cb) {
        var _this = this;
        return this._read(function(trans) {
            var ctx = _this._ctx;
            if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
                var valueMapper_1 = ctx.valueMapper;
                var index = getIndexOrStore(ctx, ctx.table.core.schema);
                return ctx.table.core.query({
                    trans: trans,
                    limit: ctx.limit,
                    values: true,
                    query: {
                        index: index,
                        range: ctx.range
                    }
                }).then(function(_a) {
                    var result = _a.result;
                    return valueMapper_1 ? result.map(valueMapper_1) : result;
                });
            } else {
                var a_1 = [];
                return iter(ctx, function(item) {
                    return a_1.push(item);
                }, trans, ctx.table.core).then(function() {
                    return a_1;
                });
            }
        }, cb);
    };
    Collection.prototype.offset = function(offset) {
        var ctx = this._ctx;
        if (offset <= 0) return this;
        ctx.offset += offset;
        if (isPlainKeyRange(ctx)) addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function(cursor, advance) {
                if (offsetLeft === 0) return true;
                if (offsetLeft === 1) {
                    --offsetLeft;
                    return false;
                }
                advance(function() {
                    cursor.advance(offsetLeft);
                    offsetLeft = 0;
                });
                return false;
            };
        });
        else addReplayFilter(ctx, function() {
            var offsetLeft = offset;
            return function() {
                return --offsetLeft < 0;
            };
        });
        return this;
    };
    Collection.prototype.limit = function(numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function() {
            var rowsLeft = numRows;
            return function(cursor, advance, resolve) {
                if (--rowsLeft <= 0) advance(resolve);
                return rowsLeft >= 0;
            };
        }, true);
        return this;
    };
    Collection.prototype.until = function(filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function(cursor, advance, resolve) {
            if (filterFunction(cursor.value)) {
                advance(resolve);
                return bIncludeStopEntry;
            } else return true;
        });
        return this;
    };
    Collection.prototype.first = function(cb) {
        return this.limit(1).toArray(function(a) {
            return a[0];
        }).then(cb);
    };
    Collection.prototype.last = function(cb) {
        return this.reverse().first(cb);
    };
    Collection.prototype.filter = function(filterFunction) {
        addFilter(this._ctx, function(cursor) {
            return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
    };
    Collection.prototype.and = function(filter) {
        return this.filter(filter);
    };
    Collection.prototype.or = function(indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
    };
    Collection.prototype.reverse = function() {
        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
        if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
        return this;
    };
    Collection.prototype.desc = function() {
        return this.reverse();
    };
    Collection.prototype.eachKey = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function(val, cursor) {
            cb(cursor.key, cursor);
        });
    };
    Collection.prototype.eachUniqueKey = function(cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
    };
    Collection.prototype.eachPrimaryKey = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function(val, cursor) {
            cb(cursor.primaryKey, cursor);
        });
    };
    Collection.prototype.keys = function(cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
            a.push(cursor.key);
        }).then(function() {
            return a;
        }).then(cb);
    };
    Collection.prototype.primaryKeys = function(cb) {
        var ctx = this._ctx;
        if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) return this._read(function(trans) {
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
                trans: trans,
                values: false,
                limit: ctx.limit,
                query: {
                    index: index,
                    range: ctx.range
                }
            });
        }).then(function(_a) {
            var result = _a.result;
            return result;
        }).then(cb);
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function(item, cursor) {
            a.push(cursor.primaryKey);
        }).then(function() {
            return a;
        }).then(cb);
    };
    Collection.prototype.uniqueKeys = function(cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
    };
    Collection.prototype.firstKey = function(cb) {
        return this.limit(1).keys(function(a) {
            return a[0];
        }).then(cb);
    };
    Collection.prototype.lastKey = function(cb) {
        return this.reverse().firstKey(cb);
    };
    Collection.prototype.distinct = function() {
        var ctx = this._ctx, idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi) return this;
        var set = {};
        addFilter(this._ctx, function(cursor) {
            var strKey = cursor.primaryKey.toString();
            var found = hasOwn(set, strKey);
            set[strKey] = true;
            return !found;
        });
        return this;
    };
    Collection.prototype.modify = function(changes) {
        var _this = this;
        var ctx = this._ctx;
        return this._write(function(trans) {
            var modifyer;
            if (typeof changes === "function") modifyer = changes;
            else {
                var keyPaths = keys(changes);
                var numKeys = keyPaths.length;
                modifyer = function(item) {
                    var anythingModified = false;
                    for(var i = 0; i < numKeys; ++i){
                        var keyPath = keyPaths[i], val = changes[keyPath];
                        if (getByKeyPath(item, keyPath) !== val) {
                            setByKeyPath(item, keyPath, val);
                            anythingModified = true;
                        }
                    }
                    return anythingModified;
                };
            }
            var coreTable = ctx.table.core;
            var _a = coreTable.schema.primaryKey, outbound = _a.outbound, extractKey = _a.extractKey;
            var limit = _this.db._options.modifyChunkSize || 200;
            var totalFailures = [];
            var successCount = 0;
            var failedKeys = [];
            var applyMutateResult = function(expectedCount, res) {
                var failures = res.failures, numFailures = res.numFailures;
                successCount += expectedCount - numFailures;
                for(var _i = 0, _a = keys(failures); _i < _a.length; _i++){
                    var pos = _a[_i];
                    totalFailures.push(failures[pos]);
                }
            };
            return _this.clone().primaryKeys().then(function(keys) {
                var nextChunk = function(offset) {
                    var count = Math.min(limit, keys.length - offset);
                    return coreTable.getMany({
                        trans: trans,
                        keys: keys.slice(offset, offset + count),
                        cache: "immutable"
                    }).then(function(values) {
                        var addValues = [];
                        var putValues = [];
                        var putKeys = outbound ? [] : null;
                        var deleteKeys = [];
                        for(var i = 0; i < count; ++i){
                            var origValue = values[i];
                            var ctx_1 = {
                                value: deepClone(origValue),
                                primKey: keys[offset + i]
                            };
                            if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                                if (ctx_1.value == null) deleteKeys.push(keys[offset + i]);
                                else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                                    deleteKeys.push(keys[offset + i]);
                                    addValues.push(ctx_1.value);
                                } else {
                                    putValues.push(ctx_1.value);
                                    if (outbound) putKeys.push(keys[offset + i]);
                                }
                            }
                        }
                        var criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
                            index: ctx.index,
                            range: ctx.range
                        };
                        return Promise.resolve(addValues.length > 0 && coreTable.mutate({
                            trans: trans,
                            type: "add",
                            values: addValues
                        }).then(function(res) {
                            for(var pos in res.failures)deleteKeys.splice(parseInt(pos), 1);
                            applyMutateResult(addValues.length, res);
                        })).then(function() {
                            return (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
                                trans: trans,
                                type: "put",
                                keys: putKeys,
                                values: putValues,
                                criteria: criteria,
                                changeSpec: typeof changes !== "function" && changes
                            }).then(function(res) {
                                return applyMutateResult(putValues.length, res);
                            });
                        }).then(function() {
                            return (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
                                trans: trans,
                                type: "delete",
                                keys: deleteKeys,
                                criteria: criteria
                            }).then(function(res) {
                                return applyMutateResult(deleteKeys.length, res);
                            });
                        }).then(function() {
                            return keys.length > offset + count && nextChunk(offset + limit);
                        });
                    });
                };
                return nextChunk(0).then(function() {
                    if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
                    return keys.length;
                });
            });
        });
    };
    Collection.prototype.delete = function() {
        var ctx = this._ctx, range = ctx.range;
        if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) return this._write(function(trans) {
            var primaryKey = ctx.table.core.schema.primaryKey;
            var coreRange = range;
            return ctx.table.core.count({
                trans: trans,
                query: {
                    index: primaryKey,
                    range: coreRange
                }
            }).then(function(count) {
                return ctx.table.core.mutate({
                    trans: trans,
                    type: "deleteRange",
                    range: coreRange
                }).then(function(_a) {
                    var failures = _a.failures;
                    _a.lastResult;
                    _a.results;
                    var numFailures = _a.numFailures;
                    if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(function(pos) {
                        return failures[pos];
                    }), count - numFailures);
                    return count - numFailures;
                });
            });
        });
        return this.modify(deleteCallback);
    };
    return Collection;
}();
var deleteCallback = function(value, ctx) {
    return ctx.value = null;
};
function createCollectionConstructor(db) {
    return makeClassConstructor(Collection.prototype, function Collection(whereClause, keyRangeGenerator) {
        this.db = db;
        var keyRange = AnyRange, error = null;
        if (keyRangeGenerator) try {
            keyRange = keyRangeGenerator();
        } catch (ex) {
            error = ex;
        }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
            table: table,
            index: whereCtx.index,
            isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
            range: keyRange,
            keysOnly: false,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: true,
            isMatch: null,
            offset: 0,
            limit: Infinity,
            error: error,
            or: whereCtx.or,
            valueMapper: readingHook !== mirror ? readingHook : null
        };
    });
}
function simpleCompare(a, b) {
    return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
    var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
    collection._ctx.error = T ? new T(err) : new TypeError(err);
    return collection;
}
function emptyCollection(whereClause) {
    return new whereClause.Collection(whereClause, function() {
        return rangeEqual("");
    }).limit(0);
}
function upperFactory(dir) {
    return dir === "next" ? function(s) {
        return s.toUpperCase();
    } : function(s) {
        return s.toLowerCase();
    };
}
function lowerFactory(dir) {
    return dir === "next" ? function(s) {
        return s.toLowerCase();
    } : function(s) {
        return s.toUpperCase();
    };
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
    var length = Math.min(key.length, lowerNeedle.length);
    var llp = -1;
    for(var i = 0; i < length; ++i){
        var lwrKeyChar = lowerKey[i];
        if (lwrKeyChar !== lowerNeedle[i]) {
            if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
            if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
            if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
            return null;
        }
        if (cmp(key[i], lwrKeyChar) < 0) llp = i;
    }
    if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
    if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
    return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
    var upper, lower, compare, upperNeedles, lowerNeedles, direction, nextKeySuffix, needlesLen = needles.length;
    if (!needles.every(function(s) {
        return typeof s === "string";
    })) return fail(whereClause, STRING_EXPECTED);
    function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = dir === "next" ? simpleCompare : simpleCompareReverse;
        var needleBounds = needles.map(function(needle) {
            return {
                lower: lower(needle),
                upper: upper(needle)
            };
        }).sort(function(a, b) {
            return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function(nb) {
            return nb.upper;
        });
        lowerNeedles = needleBounds.map(function(nb) {
            return nb.lower;
        });
        direction = dir;
        nextKeySuffix = dir === "next" ? "" : suffix;
    }
    initDirection("next");
    var c = new whereClause.Collection(whereClause, function() {
        return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
    });
    c._ondirectionchange = function(direction) {
        initDirection(direction);
    };
    var firstPossibleNeedle = 0;
    c._addAlgorithm(function(cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== "string") return false;
        var lowerKey = lower(key);
        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) return true;
        else {
            var lowestPossibleCasing = null;
            for(var i = firstPossibleNeedle; i < needlesLen; ++i){
                var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
                if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;
                else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) lowestPossibleCasing = casing;
            }
            if (lowestPossibleCasing !== null) advance(function() {
                cursor.continue(lowestPossibleCasing + nextKeySuffix);
            });
            else advance(resolve);
            return false;
        }
    });
    return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
    return {
        type: 2,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
    };
}
function rangeEqual(value) {
    return {
        type: 1,
        lower: value,
        upper: value
    };
}
var WhereClause = function() {
    function WhereClause() {}
    Object.defineProperty(WhereClause.prototype, "Collection", {
        get: function() {
            return this._ctx.table.db.Collection;
        },
        enumerable: false,
        configurable: true
    });
    WhereClause.prototype.between = function(lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;
        try {
            if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
            return new this.Collection(this, function() {
                return createRange(lower, upper, !includeLower, !includeUpper);
            });
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
    };
    WhereClause.prototype.equals = function(value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
            return rangeEqual(value);
        });
    };
    WhereClause.prototype.above = function(value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
            return createRange(value, undefined, true);
        });
    };
    WhereClause.prototype.aboveOrEqual = function(value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
            return createRange(value, undefined, false);
        });
    };
    WhereClause.prototype.below = function(value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
            return createRange(undefined, value, false, true);
        });
    };
    WhereClause.prototype.belowOrEqual = function(value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function() {
            return createRange(undefined, value);
        });
    };
    WhereClause.prototype.startsWith = function(str) {
        if (typeof str !== "string") return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
    };
    WhereClause.prototype.startsWithIgnoreCase = function(str) {
        if (str === "") return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x.indexOf(a[0]) === 0;
        }, [
            str
        ], maxString);
    };
    WhereClause.prototype.equalsIgnoreCase = function(str) {
        return addIgnoreCaseAlgorithm(this, function(x, a) {
            return x === a[0];
        }, [
            str
        ], "");
    };
    WhereClause.prototype.anyOfIgnoreCase = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.indexOf(x) !== -1;
        }, set, "");
    };
    WhereClause.prototype.startsWithAnyOfIgnoreCase = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function(x, a) {
            return a.some(function(n) {
                return x.indexOf(n) === 0;
            });
        }, set, maxString);
    };
    WhereClause.prototype.anyOf = function() {
        var _this = this;
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;
        try {
            set.sort(compare);
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        if (set.length === 0) return emptyCollection(this);
        var c = new this.Collection(this, function() {
            return createRange(set[0], set[set.length - 1]);
        });
        c._ondirectionchange = function(direction) {
            compare = direction === "next" ? _this._ascending : _this._descending;
            set.sort(compare);
        };
        var i = 0;
        c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while(compare(key, set[i]) > 0){
                ++i;
                if (i === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (compare(key, set[i]) === 0) return true;
            else {
                advance(function() {
                    cursor.continue(set[i]);
                });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.notEqual = function(value) {
        return this.inAnyRange([
            [
                minKey,
                value
            ],
            [
                value,
                this.db._maxKey
            ]
        ], {
            includeLowers: false,
            includeUppers: false
        });
    };
    WhereClause.prototype.noneOf = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return new this.Collection(this);
        try {
            set.sort(this._ascending);
        } catch (e) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var ranges = set.reduce(function(res, val) {
            return res ? res.concat([
                [
                    res[res.length - 1][1],
                    val
                ]
            ]) : [
                [
                    minKey,
                    val
                ]
            ];
        }, null);
        ranges.push([
            set[set.length - 1],
            this.db._maxKey
        ]);
        return this.inAnyRange(ranges, {
            includeLowers: false,
            includeUppers: false
        });
    };
    WhereClause.prototype.inAnyRange = function(ranges, options) {
        var _this = this;
        var cmp = this._cmp, ascending = this._ascending, descending = this._descending, min = this._min, max = this._max;
        if (ranges.length === 0) return emptyCollection(this);
        if (!ranges.every(function(range) {
            return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
        })) return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;
        function addRange(ranges, newRange) {
            var i = 0, l = ranges.length;
            for(; i < l; ++i){
                var range = ranges[i];
                if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
                    range[0] = min(range[0], newRange[0]);
                    range[1] = max(range[1], newRange[1]);
                    break;
                }
            }
            if (i === l) ranges.push(newRange);
            return ranges;
        }
        var sortDirection = ascending;
        function rangeSorter(a, b) {
            return sortDirection(a[0], b[0]);
        }
        var set;
        try {
            set = ranges.reduce(addRange, []);
            set.sort(rangeSorter);
        } catch (ex) {
            return fail(this, INVALID_KEY_ARGUMENT);
        }
        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ? function(key) {
            return ascending(key, set[rangePos][1]) > 0;
        } : function(key) {
            return ascending(key, set[rangePos][1]) >= 0;
        };
        var keyIsBeforeCurrentEntry = includeLowers ? function(key) {
            return descending(key, set[rangePos][0]) > 0;
        } : function(key) {
            return descending(key, set[rangePos][0]) >= 0;
        };
        function keyWithinCurrentRange(key) {
            return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }
        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function() {
            return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
        });
        c._ondirectionchange = function(direction) {
            if (direction === "next") {
                checkKey = keyIsBeyondCurrentEntry;
                sortDirection = ascending;
            } else {
                checkKey = keyIsBeforeCurrentEntry;
                sortDirection = descending;
            }
            set.sort(rangeSorter);
        };
        c._addAlgorithm(function(cursor, advance, resolve) {
            var key = cursor.key;
            while(checkKey(key)){
                ++rangePos;
                if (rangePos === set.length) {
                    advance(resolve);
                    return false;
                }
            }
            if (keyWithinCurrentRange(key)) return true;
            else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) return false;
            else {
                advance(function() {
                    if (sortDirection === ascending) cursor.continue(set[rangePos][0]);
                    else cursor.continue(set[rangePos][1]);
                });
                return false;
            }
        });
        return c;
    };
    WhereClause.prototype.startsWithAnyOf = function() {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (!set.every(function(s) {
            return typeof s === "string";
        })) return fail(this, "startsWithAnyOf() only works with strings");
        if (set.length === 0) return emptyCollection(this);
        return this.inAnyRange(set.map(function(str) {
            return [
                str,
                str + maxString
            ];
        }));
    };
    return WhereClause;
}();
function createWhereClauseConstructor(db) {
    return makeClassConstructor(WhereClause.prototype, function WhereClause(table, index, orCollection) {
        this.db = db;
        this._ctx = {
            table: table,
            index: index === ":id" ? null : index,
            or: orCollection
        };
        var indexedDB1 = db._deps.indexedDB;
        if (!indexedDB1) throw new exceptions.MissingAPI();
        this._cmp = this._ascending = indexedDB1.cmp.bind(indexedDB1);
        this._descending = function(a, b) {
            return indexedDB1.cmp(b, a);
        };
        this._max = function(a, b) {
            return indexedDB1.cmp(a, b) > 0 ? a : b;
        };
        this._min = function(a, b) {
            return indexedDB1.cmp(a, b) < 0 ? a : b;
        };
        this._IDBKeyRange = db._deps.IDBKeyRange;
    });
}
function eventRejectHandler(reject) {
    return wrap(function(event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
    });
}
function preventDefault(event) {
    if (event.stopPropagation) event.stopPropagation();
    if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = function() {
    function Transaction() {}
    Transaction.prototype._lock = function() {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
        return this;
    };
    Transaction.prototype._unlock = function() {
        assert(!PSD.global);
        if (--this._reculock === 0) {
            if (!PSD.global) PSD.lockOwnerFor = null;
            while(this._blockedFuncs.length > 0 && !this._locked()){
                var fnAndPSD = this._blockedFuncs.shift();
                try {
                    usePSD(fnAndPSD[1], fnAndPSD[0]);
                } catch (e) {}
            }
        }
        return this;
    };
    Transaction.prototype._locked = function() {
        return this._reculock && PSD.lockOwnerFor !== this;
    };
    Transaction.prototype.create = function(idbtrans) {
        var _this = this;
        if (!this.mode) return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);
        if (!idbtrans && !idbdb) switch(dbOpenError && dbOpenError.name){
            case "DatabaseClosedError":
                throw new exceptions.DatabaseClosed(dbOpenError);
            case "MissingAPIError":
                throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
            default:
                throw new exceptions.OpenFailed(dbOpenError);
        }
        if (!this.active) throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }) : idbdb.transaction(this.storeNames, this.mode, {
            durability: this.chromeTransactionDurability
        }));
        idbtrans.onerror = wrap(function(ev) {
            preventDefault(ev);
            _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function(ev) {
            preventDefault(ev);
            _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
            _this.active = false;
            _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function() {
            _this.active = false;
            _this._resolve();
            if ("mutatedParts" in idbtrans) globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
        });
        return this;
    };
    Transaction.prototype._promise = function(mode, fn, bWriteLock) {
        var _this = this;
        if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active) return rejection(new exceptions.TransactionInactive());
        if (this._locked()) return new DexiePromise(function(resolve, reject) {
            _this._blockedFuncs.push([
                function() {
                    _this._promise(mode, fn, bWriteLock).then(resolve, reject);
                },
                PSD
            ]);
        });
        else if (bWriteLock) return newScope(function() {
            var p = new DexiePromise(function(resolve, reject) {
                _this._lock();
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then) rv.then(resolve, reject);
            });
            p.finally(function() {
                return _this._unlock();
            });
            p._lib = true;
            return p;
        });
        else {
            var p = new DexiePromise(function(resolve, reject) {
                var rv = fn(resolve, reject, _this);
                if (rv && rv.then) rv.then(resolve, reject);
            });
            p._lib = true;
            return p;
        }
    };
    Transaction.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
    };
    Transaction.prototype.waitFor = function(promiseLike) {
        var root = this._root();
        var promise = DexiePromise.resolve(promiseLike);
        if (root._waitingFor) root._waitingFor = root._waitingFor.then(function() {
            return promise;
        });
        else {
            root._waitingFor = promise;
            root._waitingQueue = [];
            var store = root.idbtrans.objectStore(root.storeNames[0]);
            (function spin() {
                ++root._spinCount;
                while(root._waitingQueue.length)root._waitingQueue.shift()();
                if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
            })();
        }
        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function(resolve, reject) {
            promise.then(function(res) {
                return root._waitingQueue.push(wrap(resolve.bind(null, res)));
            }, function(err) {
                return root._waitingQueue.push(wrap(reject.bind(null, err)));
            }).finally(function() {
                if (root._waitingFor === currentWaitPromise) root._waitingFor = null;
            });
        });
    };
    Transaction.prototype.abort = function() {
        if (this.active) {
            this.active = false;
            if (this.idbtrans) this.idbtrans.abort();
            this._reject(new exceptions.Abort());
        }
    };
    Transaction.prototype.table = function(tableName) {
        var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
        if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];
        if (!tableSchema) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
    };
    return Transaction;
}();
function createTransactionConstructor(db) {
    return makeClassConstructor(Transaction.prototype, function Transaction(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
        var _this = this;
        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.chromeTransactionDurability = chromeTransactionDurability;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function(resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this._completion.then(function() {
            _this.active = false;
            _this.on.complete.fire();
        }, function(e) {
            var wasActive = _this.active;
            _this.active = false;
            _this.on.error.fire(e);
            _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
            return rejection(e);
        });
    });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
    return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
    };
}
function nameFromKeyPath(keyPath) {
    return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
    return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function(index) {
            return [
                index.name,
                index
            ];
        })
    };
}
function safariMultiStoreFix(storeNames) {
    return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = function(IdbKeyRange) {
    try {
        IdbKeyRange.only([
            []
        ]);
        getMaxKey = function() {
            return [
                []
            ];
        };
        return [
            []
        ];
    } catch (e) {
        getMaxKey = function() {
            return maxString;
        };
        return maxString;
    }
};
function getKeyExtractor(keyPath) {
    if (keyPath == null) return function() {
        return undefined;
    };
    else if (typeof keyPath === "string") return getSinglePathKeyExtractor(keyPath);
    else return function(obj) {
        return getByKeyPath(obj, keyPath);
    };
}
function getSinglePathKeyExtractor(keyPath) {
    var split = keyPath.split(".");
    if (split.length === 1) return function(obj) {
        return obj[keyPath];
    };
    else return function(obj) {
        return getByKeyPath(obj, keyPath);
    };
}
function arrayify(arrayLike) {
    return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
    return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : "[" + keyPath.join("+") + "]";
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
    function extractSchema(db, trans) {
        var tables = arrayify(db.objectStoreNames);
        return {
            schema: {
                name: db.name,
                tables: tables.map(function(table) {
                    return trans.objectStore(table);
                }).map(function(store) {
                    var keyPath = store.keyPath, autoIncrement = store.autoIncrement;
                    var compound = isArray(keyPath);
                    var outbound = keyPath == null;
                    var indexByKeyPath = {};
                    var result = {
                        name: store.name,
                        primaryKey: {
                            name: null,
                            isPrimaryKey: true,
                            outbound: outbound,
                            compound: compound,
                            keyPath: keyPath,
                            autoIncrement: autoIncrement,
                            unique: true,
                            extractKey: getKeyExtractor(keyPath)
                        },
                        indexes: arrayify(store.indexNames).map(function(indexName) {
                            return store.index(indexName);
                        }).map(function(index) {
                            var name = index.name, unique = index.unique, multiEntry = index.multiEntry, keyPath = index.keyPath;
                            var compound = isArray(keyPath);
                            var result = {
                                name: name,
                                compound: compound,
                                keyPath: keyPath,
                                unique: unique,
                                multiEntry: multiEntry,
                                extractKey: getKeyExtractor(keyPath)
                            };
                            indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                            return result;
                        }),
                        getIndexByKeyPath: function(keyPath) {
                            return indexByKeyPath[getKeyPathAlias(keyPath)];
                        }
                    };
                    indexByKeyPath[":id"] = result.primaryKey;
                    if (keyPath != null) indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
                    return result;
                })
            },
            hasGetAll: tables.length > 0 && "getAll" in trans.objectStore(tables[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
    }
    function makeIDBKeyRange(range) {
        if (range.type === 3) return null;
        if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower, upper = range.upper, lowerOpen = range.lowerOpen, upperOpen = range.upperOpen;
        var idbRange = lower === undefined ? upper === undefined ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === undefined ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
    }
    function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;
        function mutate(_a) {
            var trans = _a.trans, type = _a.type, keys = _a.keys, values = _a.values, range = _a.range;
            return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var store = trans.objectStore(tableName);
                var outbound = store.keyPath == null;
                var isAddOrPut = type === "put" || type === "add";
                if (!isAddOrPut && type !== "delete" && type !== "deleteRange") throw new Error("Invalid operation type: " + type);
                var length = (keys || values || {
                    length: 1
                }).length;
                if (keys && values && keys.length !== values.length) throw new Error("Given keys array must have same length as given values array.");
                if (length === 0) return resolve({
                    numFailures: 0,
                    failures: {},
                    results: [],
                    lastResult: undefined
                });
                var req;
                var reqs = [];
                var failures = [];
                var numFailures = 0;
                var errorHandler = function(event) {
                    ++numFailures;
                    preventDefault(event);
                };
                if (type === "deleteRange") {
                    if (range.type === 4) return resolve({
                        numFailures: numFailures,
                        failures: failures,
                        results: [],
                        lastResult: undefined
                    });
                    if (range.type === 3) reqs.push(req = store.clear());
                    else reqs.push(req = store.delete(makeIDBKeyRange(range)));
                } else {
                    var _a = isAddOrPut ? outbound ? [
                        values,
                        keys
                    ] : [
                        values,
                        null
                    ] : [
                        keys,
                        null
                    ], args1 = _a[0], args2 = _a[1];
                    if (isAddOrPut) for(var i = 0; i < length; ++i){
                        reqs.push(req = args2 && args2[i] !== undefined ? store[type](args1[i], args2[i]) : store[type](args1[i]));
                        req.onerror = errorHandler;
                    }
                    else for(var i = 0; i < length; ++i){
                        reqs.push(req = store[type](args1[i]));
                        req.onerror = errorHandler;
                    }
                }
                var done = function(event) {
                    var lastResult = event.target.result;
                    reqs.forEach(function(req, i) {
                        return req.error != null && (failures[i] = req.error);
                    });
                    resolve({
                        numFailures: numFailures,
                        failures: failures,
                        results: type === "delete" ? keys : reqs.map(function(req) {
                            return req.result;
                        }),
                        lastResult: lastResult
                    });
                };
                req.onerror = function(event) {
                    errorHandler(event);
                    done(event);
                };
                req.onsuccess = done;
            });
        }
        function openCursor(_a) {
            var trans = _a.trans, values = _a.values, query = _a.query, reverse = _a.reverse, unique = _a.unique;
            return new Promise(function(resolve, reject) {
                resolve = wrap(resolve);
                var index = query.index, range = query.range;
                var store = trans.objectStore(tableName);
                var source = index.isPrimaryKey ? store : store.index(index.name);
                var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
                var req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
                req.onerror = eventRejectHandler(reject);
                req.onsuccess = wrap(function(ev) {
                    var cursor = req.result;
                    if (!cursor) {
                        resolve(null);
                        return;
                    }
                    cursor.___id = ++_id_counter;
                    cursor.done = false;
                    var _cursorContinue = cursor.continue.bind(cursor);
                    var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                    if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                    var _cursorAdvance = cursor.advance.bind(cursor);
                    var doThrowCursorIsNotStarted = function() {
                        throw new Error("Cursor not started");
                    };
                    var doThrowCursorIsStopped = function() {
                        throw new Error("Cursor not stopped");
                    };
                    cursor.trans = trans;
                    cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
                    cursor.fail = wrap(reject);
                    cursor.next = function() {
                        var _this = this;
                        var gotOne = 1;
                        return this.start(function() {
                            return gotOne-- ? _this.continue() : _this.stop();
                        }).then(function() {
                            return _this;
                        });
                    };
                    cursor.start = function(callback) {
                        var iterationPromise = new Promise(function(resolveIteration, rejectIteration) {
                            resolveIteration = wrap(resolveIteration);
                            req.onerror = eventRejectHandler(rejectIteration);
                            cursor.fail = rejectIteration;
                            cursor.stop = function(value) {
                                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                                resolveIteration(value);
                            };
                        });
                        var guardedCallback = function() {
                            if (req.result) try {
                                callback();
                            } catch (err) {
                                cursor.fail(err);
                            }
                            else {
                                cursor.done = true;
                                cursor.start = function() {
                                    throw new Error("Cursor behind last entry");
                                };
                                cursor.stop();
                            }
                        };
                        req.onsuccess = wrap(function(ev) {
                            req.onsuccess = guardedCallback;
                            guardedCallback();
                        });
                        cursor.continue = _cursorContinue;
                        cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                        cursor.advance = _cursorAdvance;
                        guardedCallback();
                        return iterationPromise;
                    };
                    resolve(cursor);
                }, reject);
            });
        }
        function query(hasGetAll) {
            return function(request) {
                return new Promise(function(resolve, reject) {
                    resolve = wrap(resolve);
                    var trans = request.trans, values = request.values, limit = request.limit, query = request.query;
                    var nonInfinitLimit = limit === Infinity ? undefined : limit;
                    var index = query.index, range = query.range;
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    if (limit === 0) return resolve({
                        result: []
                    });
                    if (hasGetAll) {
                        var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
                        req.onsuccess = function(event) {
                            return resolve({
                                result: event.target.result
                            });
                        };
                        req.onerror = eventRejectHandler(reject);
                    } else {
                        var count_1 = 0;
                        var req_1 = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                        var result_1 = [];
                        req_1.onsuccess = function(event) {
                            var cursor = req_1.result;
                            if (!cursor) return resolve({
                                result: result_1
                            });
                            result_1.push(values ? cursor.value : cursor.primaryKey);
                            if (++count_1 === limit) return resolve({
                                result: result_1
                            });
                            cursor.continue();
                        };
                        req_1.onerror = eventRejectHandler(reject);
                    }
                });
            };
        }
        return {
            name: tableName,
            schema: tableSchema,
            mutate: mutate,
            getMany: function(_a) {
                var trans = _a.trans, keys = _a.keys;
                return new Promise(function(resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var length = keys.length;
                    var result = new Array(length);
                    var keyCount = 0;
                    var callbackCount = 0;
                    var req;
                    var successHandler = function(event) {
                        var req = event.target;
                        result[req._pos] = req.result;
                        if (++callbackCount === keyCount) resolve(result);
                    };
                    var errorHandler = eventRejectHandler(reject);
                    for(var i = 0; i < length; ++i){
                        var key = keys[i];
                        if (key != null) {
                            req = store.get(keys[i]);
                            req._pos = i;
                            req.onsuccess = successHandler;
                            req.onerror = errorHandler;
                            ++keyCount;
                        }
                    }
                    if (keyCount === 0) resolve(result);
                });
            },
            get: function(_a) {
                var trans = _a.trans, key = _a.key;
                return new Promise(function(resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var req = store.get(key);
                    req.onsuccess = function(event) {
                        return resolve(event.target.result);
                    };
                    req.onerror = eventRejectHandler(reject);
                });
            },
            query: query(hasGetAll),
            openCursor: openCursor,
            count: function(_a) {
                var query = _a.query, trans = _a.trans;
                var index = query.index, range = query.range;
                return new Promise(function(resolve, reject) {
                    var store = trans.objectStore(tableName);
                    var source = index.isPrimaryKey ? store : store.index(index.name);
                    var idbKeyRange = makeIDBKeyRange(range);
                    var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
                    req.onsuccess = wrap(function(ev) {
                        return resolve(ev.target.result);
                    });
                    req.onerror = eventRejectHandler(reject);
                });
            }
        };
    }
    var _a = extractSchema(db, tmpTrans), schema = _a.schema, hasGetAll = _a.hasGetAll;
    var tables = schema.tables.map(function(tableSchema) {
        return createDbCoreTable(tableSchema);
    });
    var tableMap = {};
    tables.forEach(function(table) {
        return tableMap[table.name] = table;
    });
    return {
        stack: "dbcore",
        transaction: db.transaction.bind(db),
        table: function(name) {
            var result = tableMap[name];
            if (!result) throw new Error("Table '" + name + "' not found");
            return tableMap[name];
        },
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
    };
}
function createMiddlewareStack(stackImpl, middlewares) {
    return middlewares.reduce(function(down, _a) {
        var create = _a.create;
        return __assign(__assign({}, down), create(down));
    }, stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
    var IDBKeyRange = _a.IDBKeyRange;
    _a.indexedDB;
    var dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
    return {
        dbcore: dbcore
    };
}
function generateMiddlewareStacks(_a, tmpTrans) {
    var db = _a._novip;
    var idbdb = tmpTrans.db;
    var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
    db.core = stacks.dbcore;
    db.tables.forEach(function(table) {
        var tableName = table.name;
        if (db.core.schema.tables.some(function(tbl) {
            return tbl.name === tableName;
        })) {
            table.core = db.core.table(tableName);
            if (db[tableName] instanceof db.Table) db[tableName].core = table.core;
        }
    });
}
function setApiOnPlace(_a, objs, tableNames, dbschema) {
    var db = _a._novip;
    tableNames.forEach(function(tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function(obj) {
            var propDesc = getPropertyDescriptor(obj, tableName);
            if (!propDesc || "value" in propDesc && propDesc.value === undefined) {
                if (obj === db.Transaction.prototype || obj instanceof db.Transaction) setProp(obj, tableName, {
                    get: function() {
                        return this.table(tableName);
                    },
                    set: function(value) {
                        defineProperty(this, tableName, {
                            value: value,
                            writable: true,
                            configurable: true,
                            enumerable: true
                        });
                    }
                });
                else obj[tableName] = new db.Table(tableName, schema);
            }
        });
    });
}
function removeTablesApi(_a, objs) {
    var db = _a._novip;
    objs.forEach(function(obj) {
        for(var key in obj)if (obj[key] instanceof db.Table) delete obj[key];
    });
}
function lowerVersionFirst(a, b) {
    return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
    var globalSchema = db._dbSchema;
    var trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
    trans.create(idbUpgradeTrans);
    trans._completion.catch(reject);
    var rejectTransaction = trans._reject.bind(trans);
    var transless = PSD.transless || PSD;
    newScope(function() {
        PSD.trans = trans;
        PSD.transless = transless;
        if (oldVersion === 0) {
            keys(globalSchema).forEach(function(tableName) {
                createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
            });
            generateMiddlewareStacks(db, idbUpgradeTrans);
            DexiePromise.follow(function() {
                return db.on.populate.fire(trans);
            }).catch(rejectTransaction);
        } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
    });
}
function updateTablesAndIndexes(_a, oldVersion, trans, idbUpgradeTrans) {
    var db = _a._novip;
    var queue = [];
    var versions = db._versions;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
    var anyContentUpgraderHasRun = false;
    var versToRun = versions.filter(function(v) {
        return v._cfg.version >= oldVersion;
    });
    versToRun.forEach(function(version) {
        queue.push(function() {
            var oldSchema = globalSchema;
            var newSchema = version._cfg.dbschema;
            adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
            adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
            globalSchema = db._dbSchema = newSchema;
            var diff = getSchemaDiff(oldSchema, newSchema);
            diff.add.forEach(function(tuple) {
                createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
            });
            diff.change.forEach(function(change) {
                if (change.recreate) throw new exceptions.Upgrade("Not yet support for changing primary key");
                else {
                    var store_1 = idbUpgradeTrans.objectStore(change.name);
                    change.add.forEach(function(idx) {
                        return addIndex(store_1, idx);
                    });
                    change.change.forEach(function(idx) {
                        store_1.deleteIndex(idx.name);
                        addIndex(store_1, idx);
                    });
                    change.del.forEach(function(idxName) {
                        return store_1.deleteIndex(idxName);
                    });
                }
            });
            var contentUpgrade = version._cfg.contentUpgrade;
            if (contentUpgrade && version._cfg.version > oldVersion) {
                generateMiddlewareStacks(db, idbUpgradeTrans);
                trans._memoizedTables = {};
                anyContentUpgraderHasRun = true;
                var upgradeSchema_1 = shallowClone(newSchema);
                diff.del.forEach(function(table) {
                    upgradeSchema_1[table] = oldSchema[table];
                });
                removeTablesApi(db, [
                    db.Transaction.prototype
                ]);
                setApiOnPlace(db, [
                    db.Transaction.prototype
                ], keys(upgradeSchema_1), upgradeSchema_1);
                trans.schema = upgradeSchema_1;
                var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                if (contentUpgradeIsAsync_1) incrementExpectedAwaits();
                var returnValue_1;
                var promiseFollowed = DexiePromise.follow(function() {
                    returnValue_1 = contentUpgrade(trans);
                    if (returnValue_1) {
                        if (contentUpgradeIsAsync_1) {
                            var decrementor = decrementExpectedAwaits.bind(null, null);
                            returnValue_1.then(decrementor, decrementor);
                        }
                    }
                });
                return returnValue_1 && typeof returnValue_1.then === "function" ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function() {
                    return returnValue_1;
                });
            }
        });
        queue.push(function(idbtrans) {
            if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
                var newSchema = version._cfg.dbschema;
                deleteRemovedTables(newSchema, idbtrans);
            }
            removeTablesApi(db, [
                db.Transaction.prototype
            ]);
            setApiOnPlace(db, [
                db.Transaction.prototype
            ], db._storeNames, db._dbSchema);
            trans.schema = db._dbSchema;
        });
    });
    function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
    }
    return runQueue().then(function() {
        createMissingTables(globalSchema, idbUpgradeTrans);
    });
}
function getSchemaDiff(oldSchema, newSchema) {
    var diff = {
        del: [],
        add: [],
        change: []
    };
    var table;
    for(table in oldSchema)if (!newSchema[table]) diff.del.push(table);
    for(table in newSchema){
        var oldDef = oldSchema[table], newDef = newSchema[table];
        if (!oldDef) diff.add.push([
            table,
            newDef
        ]);
        else {
            var change = {
                name: table,
                def: newDef,
                recreate: false,
                del: [],
                add: [],
                change: []
            };
            if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
                change.recreate = true;
                diff.change.push(change);
            } else {
                var oldIndexes = oldDef.idxByName;
                var newIndexes = newDef.idxByName;
                var idxName = void 0;
                for(idxName in oldIndexes)if (!newIndexes[idxName]) change.del.push(idxName);
                for(idxName in newIndexes){
                    var oldIdx = oldIndexes[idxName], newIdx = newIndexes[idxName];
                    if (!oldIdx) change.add.push(newIdx);
                    else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
                }
                if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) diff.change.push(change);
            }
        }
    }
    return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
    var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
        keyPath: primKey.keyPath,
        autoIncrement: primKey.auto
    } : {
        autoIncrement: primKey.auto
    });
    indexes.forEach(function(idx) {
        return addIndex(store, idx);
    });
    return store;
}
function createMissingTables(newSchema, idbtrans) {
    keys(newSchema).forEach(function(tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    });
}
function deleteRemovedTables(newSchema, idbtrans) {
    [].slice.call(idbtrans.db.objectStoreNames).forEach(function(storeName) {
        return newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName);
    });
}
function addIndex(store, idx) {
    store.createIndex(idx.name, idx.keyPath, {
        unique: idx.unique,
        multiEntry: idx.multi
    });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
    var globalSchema = {};
    var dbStoreNames = slice(idbdb.objectStoreNames, 0);
    dbStoreNames.forEach(function(storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes = [];
        for(var j = 0; j < store.indexNames.length; ++j){
            var idbindex = store.index(store.indexNames[j]);
            keyPath = idbindex.keyPath;
            var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
            indexes.push(index);
        }
        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
    });
    return globalSchema;
}
function readGlobalSchema(_a, idbdb, tmpTrans) {
    var db = _a._novip;
    db.verno = idbdb.version / 10;
    var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
    db._storeNames = slice(idbdb.objectStoreNames, 0);
    setApiOnPlace(db, [
        db._allTables
    ], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
    var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
    var diff = getSchemaDiff(installedSchema, db._dbSchema);
    return !(diff.add.length || diff.change.some(function(ch) {
        return ch.add.length || ch.change.length;
    }));
}
function adjustToExistingIndexNames(_a, schema, idbtrans) {
    var db = _a._novip;
    var storeNames = idbtrans.db.objectStoreNames;
    for(var i = 0; i < storeNames.length; ++i){
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db._hasGetAll = "getAll" in store;
        for(var j = 0; j < store.indexNames.length; ++j){
            var indexName = store.indexNames[j];
            var keyPath = store.index(indexName).keyPath;
            var dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
            if (schema[storeName]) {
                var indexSpec = schema[storeName].idxByName[dexieName];
                if (indexSpec) {
                    indexSpec.name = indexName;
                    delete schema[storeName].idxByName[dexieName];
                    schema[storeName].idxByName[indexName] = indexSpec;
                }
            }
        }
    }
    if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) db._hasGetAll = false;
}
function parseIndexSyntax(primKeyAndIndexes) {
    return primKeyAndIndexes.split(",").map(function(index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
    });
}
var Version = function() {
    function Version() {}
    Version.prototype._parseStoresSpec = function(stores, outSchema) {
        keys(stores).forEach(function(tableName) {
            if (stores[tableName] !== null) {
                var indexes = parseIndexSyntax(stores[tableName]);
                var primKey = indexes.shift();
                if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
                indexes.forEach(function(idx) {
                    if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
                    if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
                });
                outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
            }
        });
    };
    Version.prototype.stores = function(stores) {
        var db = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
        var versions = db._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function(version) {
            extend(storesSpec, version._cfg.storesSource);
            dbschema = version._cfg.dbschema = {};
            version._parseStoresSpec(storesSpec, dbschema);
        });
        db._dbSchema = dbschema;
        removeTablesApi(db, [
            db._allTables,
            db,
            db.Transaction.prototype
        ]);
        setApiOnPlace(db, [
            db._allTables,
            db,
            db.Transaction.prototype,
            this._cfg.tables
        ], keys(dbschema), dbschema);
        db._storeNames = keys(dbschema);
        return this;
    };
    Version.prototype.upgrade = function(upgradeFunction) {
        this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
        return this;
    };
    return Version;
}();
function createVersionConstructor(db) {
    return makeClassConstructor(Version.prototype, function Version(versionNumber) {
        this.db = db;
        this._cfg = {
            version: versionNumber,
            storesSource: null,
            dbschema: {},
            tables: {},
            contentUpgrade: null
        };
    });
}
function getDbNamesTable(indexedDB1, IDBKeyRange) {
    var dbNamesDB = indexedDB1["_dbNamesDB"];
    if (!dbNamesDB) {
        dbNamesDB = indexedDB1["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
            addons: [],
            indexedDB: indexedDB1,
            IDBKeyRange: IDBKeyRange
        });
        dbNamesDB.version(1).stores({
            dbnames: "name"
        });
    }
    return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB1) {
    return indexedDB1 && typeof indexedDB1.databases === "function";
}
function getDatabaseNames(_a) {
    var indexedDB1 = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
    return hasDatabasesNative(indexedDB1) ? Promise.resolve(indexedDB1.databases()).then(function(infos) {
        return infos.map(function(info) {
            return info.name;
        }).filter(function(name) {
            return name !== DBNAMES_DB;
        });
    }) : getDbNamesTable(indexedDB1, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated(_a, name) {
    var indexedDB1 = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
    !hasDatabasesNative(indexedDB1) && name !== DBNAMES_DB && getDbNamesTable(indexedDB1, IDBKeyRange).put({
        name: name
    }).catch(nop);
}
function _onDatabaseDeleted(_a, name) {
    var indexedDB1 = _a.indexedDB, IDBKeyRange = _a.IDBKeyRange;
    !hasDatabasesNative(indexedDB1) && name !== DBNAMES_DB && getDbNamesTable(indexedDB1, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
    return newScope(function() {
        PSD.letThrough = true;
        return fn();
    });
}
function idbReady() {
    var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
    if (!isSafari || !indexedDB.databases) return Promise.resolve();
    var intervalId;
    return new Promise(function(resolve) {
        var tryIdb = function() {
            return indexedDB.databases().finally(resolve);
        };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(function() {
        return clearInterval(intervalId);
    });
}
function dexieOpen(db) {
    var state = db._state;
    var indexedDB1 = db._deps.indexedDB;
    if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(function() {
        return state.dbOpenError ? rejection(state.dbOpenError) : db;
    });
    debug && (state.openCanceller._stackHolder = getErrorWithStack());
    state.isBeingOpened = true;
    state.dbOpenError = null;
    state.openComplete = false;
    var openCanceller = state.openCanceller;
    function throwIfCancelled() {
        if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
    }
    var resolveDbReady = state.dbReadyResolve, upgradeTransaction = null, wasCreated = false;
    return DexiePromise.race([
        openCanceller,
        (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(function() {
            return new DexiePromise(function(resolve, reject) {
                throwIfCancelled();
                if (!indexedDB1) throw new exceptions.MissingAPI();
                var dbName = db.name;
                var req = state.autoSchema ? indexedDB1.open(dbName) : indexedDB1.open(dbName, Math.round(db.verno * 10));
                if (!req) throw new exceptions.MissingAPI();
                req.onerror = eventRejectHandler(reject);
                req.onblocked = wrap(db._fireOnBlocked);
                req.onupgradeneeded = wrap(function(e) {
                    upgradeTransaction = req.transaction;
                    if (state.autoSchema && !db._options.allowEmptyDB) {
                        req.onerror = preventDefault;
                        upgradeTransaction.abort();
                        req.result.close();
                        var delreq = indexedDB1.deleteDatabase(dbName);
                        delreq.onsuccess = delreq.onerror = wrap(function() {
                            reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
                        });
                    } else {
                        upgradeTransaction.onerror = eventRejectHandler(reject);
                        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
                        wasCreated = oldVer < 1;
                        db._novip.idbdb = req.result;
                        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
                    }
                }, reject);
                req.onsuccess = wrap(function() {
                    upgradeTransaction = null;
                    var idbdb = db._novip.idbdb = req.result;
                    var objectStoreNames = slice(idbdb.objectStoreNames);
                    if (objectStoreNames.length > 0) try {
                        var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
                        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);
                        else {
                            adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
                            if (!verifyInstalledSchema(db, tmpTrans)) console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
                        }
                        generateMiddlewareStacks(db, tmpTrans);
                    } catch (e) {}
                    connections.push(db);
                    idbdb.onversionchange = wrap(function(ev) {
                        state.vcFired = true;
                        db.on("versionchange").fire(ev);
                    });
                    idbdb.onclose = wrap(function(ev) {
                        db.on("close").fire(ev);
                    });
                    if (wasCreated) _onDatabaseCreated(db._deps, dbName);
                    resolve();
                }, reject);
            });
        })
    ]).then(function() {
        throwIfCancelled();
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(function() {
            return db.on.ready.fire(db.vip);
        })).then(function fireRemainders() {
            if (state.onReadyBeingFired.length > 0) {
                var remainders_1 = state.onReadyBeingFired.reduce(promisableChain, nop);
                state.onReadyBeingFired = [];
                return DexiePromise.resolve(vip(function() {
                    return remainders_1(db.vip);
                })).then(fireRemainders);
            }
        });
    }).finally(function() {
        state.onReadyBeingFired = null;
        state.isBeingOpened = false;
    }).then(function() {
        return db;
    }).catch(function(err) {
        state.dbOpenError = err;
        try {
            upgradeTransaction && upgradeTransaction.abort();
        } catch (_a) {}
        if (openCanceller === state.openCanceller) db._close();
        return rejection(err);
    }).finally(function() {
        state.openComplete = true;
        resolveDbReady();
    });
}
function awaitIterator(iterator) {
    var callNext = function(result) {
        return iterator.next(result);
    }, doThrow = function(error) {
        return iterator.throw(error);
    }, onSuccess = step(callNext), onError = step(doThrow);
    function step(getNext) {
        return function(val) {
            var next = getNext(val), value = next.value;
            return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
        };
    }
    return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
    var i = arguments.length;
    if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
    var args = new Array(i - 1);
    while(--i)args[i - 1] = arguments[i];
    scopeFunc = args.pop();
    var tables = flatten(args);
    return [
        mode,
        tables,
        scopeFunc
    ];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
    return DexiePromise.resolve().then(function() {
        var transless = PSD.transless || PSD;
        var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
        var zoneProps = {
            trans: trans,
            transless: transless
        };
        if (parentTransaction) trans.idbtrans = parentTransaction.idbtrans;
        else try {
            trans.create();
            db._state.PR1398_maxLoop = 3;
        } catch (ex) {
            if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
                console.warn("Dexie: Need to reopen db");
                db._close();
                return db.open().then(function() {
                    return enterTransactionScope(db, mode, storeNames, null, scopeFunc);
                });
            }
            return rejection(ex);
        }
        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
        if (scopeFuncIsAsync) incrementExpectedAwaits();
        var returnValue;
        var promiseFollowed = DexiePromise.follow(function() {
            returnValue = scopeFunc.call(trans, trans);
            if (returnValue) {
                if (scopeFuncIsAsync) {
                    var decrementor = decrementExpectedAwaits.bind(null, null);
                    returnValue.then(decrementor, decrementor);
                } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") returnValue = awaitIterator(returnValue);
            }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(function(x) {
            return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) : promiseFollowed.then(function() {
            return returnValue;
        })).then(function(x) {
            if (parentTransaction) trans._resolve();
            return trans._completion.then(function() {
                return x;
            });
        }).catch(function(e) {
            trans._reject(e);
            return rejection(e);
        });
    });
}
function pad(a, value, count) {
    var result = isArray(a) ? a.slice() : [
        a
    ];
    for(var i = 0; i < count; ++i)result.push(value);
    return result;
}
function createVirtualIndexMiddleware(down) {
    return __assign(__assign({}, down), {
        table: function(tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
                var keyPathAlias = getKeyPathAlias(keyPath);
                var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
                var keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
                var isVirtual = keyTail > 0;
                var virtualIndex = __assign(__assign({}, lowLevelIndex), {
                    isVirtual: isVirtual,
                    keyTail: keyTail,
                    keyLength: keyLength,
                    extractKey: getKeyExtractor(keyPath),
                    unique: !isVirtual && lowLevelIndex.unique
                });
                indexList.push(virtualIndex);
                if (!virtualIndex.isPrimaryKey) allVirtualIndexes.push(virtualIndex);
                if (keyLength > 1) {
                    var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
                    addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
                }
                indexList.sort(function(a, b) {
                    return a.keyTail - b.keyTail;
                });
                return virtualIndex;
            }
            var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
            indexLookup[":id"] = [
                primaryKey
            ];
            for(var _i = 0, _a = schema.indexes; _i < _a.length; _i++){
                var index = _a[_i];
                addVirtualIndexes(index.keyPath, 0, index);
            }
            function findBestIndex(keyPath) {
                var result = indexLookup[getKeyPathAlias(keyPath)];
                return result && result[0];
            }
            function translateRange(range, keyTail) {
                return {
                    type: range.type === 1 ? 2 : range.type,
                    lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
                    lowerOpen: true,
                    upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
                    upperOpen: true
                };
            }
            function translateRequest(req) {
                var index = req.query.index;
                return index.isVirtual ? __assign(__assign({}, req), {
                    query: {
                        index: index,
                        range: translateRange(req.query.range, index.keyTail)
                    }
                }) : req;
            }
            var result = __assign(__assign({}, table), {
                schema: __assign(__assign({}, schema), {
                    primaryKey: primaryKey,
                    indexes: allVirtualIndexes,
                    getIndexByKeyPath: findBestIndex
                }),
                count: function(req) {
                    return table.count(translateRequest(req));
                },
                query: function(req) {
                    return table.query(translateRequest(req));
                },
                openCursor: function(req) {
                    var _a = req.query.index, keyTail = _a.keyTail, isVirtual = _a.isVirtual, keyLength = _a.keyLength;
                    if (!isVirtual) return table.openCursor(req);
                    function createVirtualCursor(cursor) {
                        function _continue(key) {
                            key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
                        }
                        var virtualCursor = Object.create(cursor, {
                            continue: {
                                value: _continue
                            },
                            continuePrimaryKey: {
                                value: function(key, primaryKey) {
                                    cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                                }
                            },
                            primaryKey: {
                                get: function() {
                                    return cursor.primaryKey;
                                }
                            },
                            key: {
                                get: function() {
                                    var key = cursor.key;
                                    return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                                }
                            },
                            value: {
                                get: function() {
                                    return cursor.value;
                                }
                            }
                        });
                        return virtualCursor;
                    }
                    return table.openCursor(translateRequest(req)).then(function(cursor) {
                        return cursor && createVirtualCursor(cursor);
                    });
                }
            });
            return result;
        }
    });
}
var virtualIndexMiddleware = {
    stack: "dbcore",
    name: "VirtualIndexMiddleware",
    level: 1,
    create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
    rv = rv || {};
    prfx = prfx || "";
    keys(a).forEach(function(prop) {
        if (!hasOwn(b, prop)) rv[prfx + prop] = undefined;
        else {
            var ap = a[prop], bp = b[prop];
            if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
                var apTypeName = toStringTag(ap);
                var bpTypeName = toStringTag(bp);
                if (apTypeName !== bpTypeName) rv[prfx + prop] = b[prop];
                else if (apTypeName === "Object") getObjectDiff(ap, bp, rv, prfx + prop + ".");
                else if (ap !== bp) rv[prfx + prop] = b[prop];
            } else if (ap !== bp) rv[prfx + prop] = b[prop];
        }
    });
    keys(b).forEach(function(prop) {
        if (!hasOwn(a, prop)) rv[prfx + prop] = b[prop];
    });
    return rv;
}
function getEffectiveKeys(primaryKey, req) {
    if (req.type === "delete") return req.keys;
    return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
    stack: "dbcore",
    name: "HooksMiddleware",
    level: 2,
    create: function(downCore) {
        return __assign(__assign({}, downCore), {
            table: function(tableName) {
                var downTable = downCore.table(tableName);
                var primaryKey = downTable.schema.primaryKey;
                var tableMiddleware = __assign(__assign({}, downTable), {
                    mutate: function(req) {
                        var dxTrans = PSD.trans;
                        var _a = dxTrans.table(tableName).hook, deleting = _a.deleting, creating = _a.creating, updating = _a.updating;
                        switch(req.type){
                            case "add":
                                if (creating.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, true);
                            case "put":
                                if (creating.fire === nop && updating.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, true);
                            case "delete":
                                if (deleting.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return addPutOrDelete(req);
                                }, true);
                            case "deleteRange":
                                if (deleting.fire === nop) break;
                                return dxTrans._promise("readwrite", function() {
                                    return deleteRange(req);
                                }, true);
                        }
                        return downTable.mutate(req);
                        function addPutOrDelete(req) {
                            var dxTrans = PSD.trans;
                            var keys = req.keys || getEffectiveKeys(primaryKey, req);
                            if (!keys) throw new Error("Keys missing");
                            req = req.type === "add" || req.type === "put" ? __assign(__assign({}, req), {
                                keys: keys
                            }) : __assign({}, req);
                            if (req.type !== "delete") req.values = __spreadArray([], req.values, true);
                            if (req.keys) req.keys = __spreadArray([], req.keys, true);
                            return getExistingValues(downTable, req, keys).then(function(existingValues) {
                                var contexts = keys.map(function(key, i) {
                                    var existingValue = existingValues[i];
                                    var ctx = {
                                        onerror: null,
                                        onsuccess: null
                                    };
                                    if (req.type === "delete") deleting.fire.call(ctx, key, existingValue, dxTrans);
                                    else if (req.type === "add" || existingValue === undefined) {
                                        var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);
                                        if (key == null && generatedPrimaryKey != null) {
                                            key = generatedPrimaryKey;
                                            req.keys[i] = key;
                                            if (!primaryKey.outbound) setByKeyPath(req.values[i], primaryKey.keyPath, key);
                                        }
                                    } else {
                                        var objectDiff = getObjectDiff(existingValue, req.values[i]);
                                        var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);
                                        if (additionalChanges_1) {
                                            var requestedValue_1 = req.values[i];
                                            Object.keys(additionalChanges_1).forEach(function(keyPath) {
                                                if (hasOwn(requestedValue_1, keyPath)) requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                                                else setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                                            });
                                        }
                                    }
                                    return ctx;
                                });
                                return downTable.mutate(req).then(function(_a) {
                                    var failures = _a.failures, results = _a.results, numFailures = _a.numFailures, lastResult = _a.lastResult;
                                    for(var i = 0; i < keys.length; ++i){
                                        var primKey = results ? results[i] : keys[i];
                                        var ctx = contexts[i];
                                        if (primKey == null) ctx.onerror && ctx.onerror(failures[i]);
                                        else ctx.onsuccess && ctx.onsuccess(req.type === "put" && existingValues[i] ? req.values[i] : primKey);
                                    }
                                    return {
                                        failures: failures,
                                        results: results,
                                        numFailures: numFailures,
                                        lastResult: lastResult
                                    };
                                }).catch(function(error) {
                                    contexts.forEach(function(ctx) {
                                        return ctx.onerror && ctx.onerror(error);
                                    });
                                    return Promise.reject(error);
                                });
                            });
                        }
                        function deleteRange(req) {
                            return deleteNextChunk(req.trans, req.range, 10000);
                        }
                        function deleteNextChunk(trans, range, limit) {
                            return downTable.query({
                                trans: trans,
                                values: false,
                                query: {
                                    index: primaryKey,
                                    range: range
                                },
                                limit: limit
                            }).then(function(_a) {
                                var result = _a.result;
                                return addPutOrDelete({
                                    type: "delete",
                                    keys: result,
                                    trans: trans
                                }).then(function(res) {
                                    if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                                    if (result.length < limit) return {
                                        failures: [],
                                        numFailures: 0,
                                        lastResult: undefined
                                    };
                                    else return deleteNextChunk(trans, __assign(__assign({}, range), {
                                        lower: result[result.length - 1],
                                        lowerOpen: true
                                    }), limit);
                                });
                            });
                        }
                    }
                });
                return tableMiddleware;
            }
        });
    }
};
function getExistingValues(table, req, effectiveKeys) {
    return req.type === "add" ? Promise.resolve([]) : table.getMany({
        trans: req.trans,
        keys: effectiveKeys,
        cache: "immutable"
    });
}
function getFromTransactionCache(keys, cache, clone) {
    try {
        if (!cache) return null;
        if (cache.keys.length < keys.length) return null;
        var result = [];
        for(var i = 0, j = 0; i < cache.keys.length && j < keys.length; ++i){
            if (cmp(cache.keys[i], keys[j]) !== 0) continue;
            result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
            ++j;
        }
        return result.length === keys.length ? result : null;
    } catch (_a) {
        return null;
    }
}
var cacheExistingValuesMiddleware = {
    stack: "dbcore",
    level: -1,
    create: function(core) {
        return {
            table: function(tableName) {
                var table = core.table(tableName);
                return __assign(__assign({}, table), {
                    getMany: function(req) {
                        if (!req.cache) return table.getMany(req);
                        var cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
                        if (cachedResult) return DexiePromise.resolve(cachedResult);
                        return table.getMany(req).then(function(res) {
                            req.trans["_cache"] = {
                                keys: req.keys,
                                values: req.cache === "clone" ? deepClone(res) : res
                            };
                            return res;
                        });
                    },
                    mutate: function(req) {
                        if (req.type !== "add") req.trans["_cache"] = null;
                        return table.mutate(req);
                    }
                });
            }
        };
    }
};
var _a;
function isEmptyRange(node) {
    return !("from" in node);
}
var RangeSet = function(fromOrTree, to) {
    if (this) extend(this, arguments.length ? {
        d: 1,
        from: fromOrTree,
        to: arguments.length > 1 ? to : fromOrTree
    } : {
        d: 0
    });
    else {
        var rv = new RangeSet();
        if (fromOrTree && "d" in fromOrTree) extend(rv, fromOrTree);
        return rv;
    }
};
props(RangeSet.prototype, (_a = {
    add: function(rangeSet) {
        mergeRanges(this, rangeSet);
        return this;
    },
    addKey: function(key) {
        addRange(this, key, key);
        return this;
    },
    addKeys: function(keys) {
        var _this = this;
        keys.forEach(function(key) {
            return addRange(_this, key, key);
        });
        return this;
    }
}, _a[iteratorSymbol] = function() {
    return getRangeSetIterator(this);
}, _a));
function addRange(target, from, to) {
    var diff = cmp(from, to);
    if (isNaN(diff)) return;
    if (diff > 0) throw RangeError();
    if (isEmptyRange(target)) return extend(target, {
        from: from,
        to: to,
        d: 1
    });
    var left = target.l;
    var right = target.r;
    if (cmp(to, target.from) < 0) {
        left ? addRange(left, from, to) : target.l = {
            from: from,
            to: to,
            d: 1,
            l: null,
            r: null
        };
        return rebalance(target);
    }
    if (cmp(from, target.to) > 0) {
        right ? addRange(right, from, to) : target.r = {
            from: from,
            to: to,
            d: 1,
            l: null,
            r: null
        };
        return rebalance(target);
    }
    if (cmp(from, target.from) < 0) {
        target.from = from;
        target.l = null;
        target.d = right ? right.d + 1 : 1;
    }
    if (cmp(to, target.to) > 0) {
        target.to = to;
        target.r = null;
        target.d = target.l ? target.l.d + 1 : 1;
    }
    var rightWasCutOff = !target.r;
    if (left && !target.l) mergeRanges(target, left);
    if (right && rightWasCutOff) mergeRanges(target, right);
}
function mergeRanges(target, newSet) {
    function _addRangeSet(target, _a) {
        var from = _a.from, to = _a.to, l = _a.l, r = _a.r;
        addRange(target, from, to);
        if (l) _addRangeSet(target, l);
        if (r) _addRangeSet(target, r);
    }
    if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
    var i1 = getRangeSetIterator(rangeSet2);
    var nextResult1 = i1.next();
    if (nextResult1.done) return false;
    var a = nextResult1.value;
    var i2 = getRangeSetIterator(rangeSet1);
    var nextResult2 = i2.next(a.from);
    var b = nextResult2.value;
    while(!nextResult1.done && !nextResult2.done){
        if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
        cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
    }
    return false;
}
function getRangeSetIterator(node) {
    var state = isEmptyRange(node) ? null : {
        s: 0,
        n: node
    };
    return {
        next: function(key) {
            var keyProvided = arguments.length > 0;
            while(state)switch(state.s){
                case 0:
                    state.s = 1;
                    if (keyProvided) while(state.n.l && cmp(key, state.n.from) < 0)state = {
                        up: state,
                        n: state.n.l,
                        s: 1
                    };
                    else while(state.n.l)state = {
                        up: state,
                        n: state.n.l,
                        s: 1
                    };
                case 1:
                    state.s = 2;
                    if (!keyProvided || cmp(key, state.n.to) <= 0) return {
                        value: state.n,
                        done: false
                    };
                case 2:
                    if (state.n.r) {
                        state.s = 3;
                        state = {
                            up: state,
                            n: state.n.r,
                            s: 0
                        };
                        continue;
                    }
                case 3:
                    state = state.up;
            }
            return {
                done: true
            };
        }
    };
}
function rebalance(target) {
    var _a, _b;
    var diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
    var r = diff > 1 ? "r" : diff < -1 ? "l" : "";
    if (r) {
        var l = r === "r" ? "l" : "r";
        var rootClone = __assign({}, target);
        var oldRootRight = target[r];
        target.from = oldRootRight.from;
        target.to = oldRootRight.to;
        target[r] = oldRootRight[r];
        rootClone[r] = oldRootRight[l];
        target[l] = rootClone;
        rootClone.d = computeDepth(rootClone);
    }
    target.d = computeDepth(target);
}
function computeDepth(_a) {
    var r = _a.r, l = _a.l;
    return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
    stack: "dbcore",
    level: 0,
    create: function(core) {
        var dbName = core.schema.name;
        var FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
        return __assign(__assign({}, core), {
            table: function(tableName) {
                var table = core.table(tableName);
                var schema = table.schema;
                var primaryKey = schema.primaryKey;
                var extractKey = primaryKey.extractKey, outbound = primaryKey.outbound;
                var tableClone = __assign(__assign({}, table), {
                    mutate: function(req) {
                        var trans = req.trans;
                        var mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
                        var getRangeSet = function(indexName) {
                            var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                            return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
                        };
                        var pkRangeSet = getRangeSet("");
                        var delsRangeSet = getRangeSet(":dels");
                        var type = req.type;
                        var _a = req.type === "deleteRange" ? [
                            req.range
                        ] : req.type === "delete" ? [
                            req.keys
                        ] : req.values.length < 50 ? [
                            [],
                            req.values
                        ] : [], keys = _a[0], newObjs = _a[1];
                        var oldCache = req.trans["_cache"];
                        return table.mutate(req).then(function(res) {
                            if (isArray(keys)) {
                                if (type !== "delete") keys = res.results;
                                pkRangeSet.addKeys(keys);
                                var oldObjs = getFromTransactionCache(keys, oldCache);
                                if (!oldObjs && type !== "add") delsRangeSet.addKeys(keys);
                                if (oldObjs || newObjs) trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                            } else if (keys) {
                                var range = {
                                    from: keys.lower,
                                    to: keys.upper
                                };
                                delsRangeSet.add(range);
                                pkRangeSet.add(range);
                            } else {
                                pkRangeSet.add(FULL_RANGE);
                                delsRangeSet.add(FULL_RANGE);
                                schema.indexes.forEach(function(idx) {
                                    return getRangeSet(idx.name).add(FULL_RANGE);
                                });
                            }
                            return res;
                        });
                    }
                });
                var getRange = function(_a) {
                    var _b, _c;
                    var _d = _a.query, index = _d.index, range = _d.range;
                    return [
                        index,
                        new RangeSet((_b = range.lower) !== null && _b !== void 0 ? _b : core.MIN_KEY, (_c = range.upper) !== null && _c !== void 0 ? _c : core.MAX_KEY)
                    ];
                };
                var readSubscribers = {
                    get: function(req) {
                        return [
                            primaryKey,
                            new RangeSet(req.key)
                        ];
                    },
                    getMany: function(req) {
                        return [
                            primaryKey,
                            new RangeSet().addKeys(req.keys)
                        ];
                    },
                    count: getRange,
                    query: getRange,
                    openCursor: getRange
                };
                keys(readSubscribers).forEach(function(method) {
                    tableClone[method] = function(req) {
                        var subscr = PSD.subscr;
                        if (subscr) {
                            var getRangeSet = function(indexName) {
                                var part = "idb://" + dbName + "/" + tableName + "/" + indexName;
                                return subscr[part] || (subscr[part] = new RangeSet());
                            };
                            var pkRangeSet_1 = getRangeSet("");
                            var delsRangeSet_1 = getRangeSet(":dels");
                            var _a = readSubscribers[method](req), queriedIndex = _a[0], queriedRanges = _a[1];
                            getRangeSet(queriedIndex.name || "").add(queriedRanges);
                            if (!queriedIndex.isPrimaryKey) {
                                if (method === "count") delsRangeSet_1.add(FULL_RANGE);
                                else {
                                    var keysPromise_1 = method === "query" && outbound && req.values && table.query(__assign(__assign({}, req), {
                                        values: false
                                    }));
                                    return table[method].apply(this, arguments).then(function(res) {
                                        if (method === "query") {
                                            if (outbound && req.values) return keysPromise_1.then(function(_a) {
                                                var resultingKeys = _a.result;
                                                pkRangeSet_1.addKeys(resultingKeys);
                                                return res;
                                            });
                                            var pKeys = req.values ? res.result.map(extractKey) : res.result;
                                            if (req.values) pkRangeSet_1.addKeys(pKeys);
                                            else delsRangeSet_1.addKeys(pKeys);
                                        } else if (method === "openCursor") {
                                            var cursor_1 = res;
                                            var wantValues_1 = req.values;
                                            return cursor_1 && Object.create(cursor_1, {
                                                key: {
                                                    get: function() {
                                                        delsRangeSet_1.addKey(cursor_1.primaryKey);
                                                        return cursor_1.key;
                                                    }
                                                },
                                                primaryKey: {
                                                    get: function() {
                                                        var pkey = cursor_1.primaryKey;
                                                        delsRangeSet_1.addKey(pkey);
                                                        return pkey;
                                                    }
                                                },
                                                value: {
                                                    get: function() {
                                                        wantValues_1 && pkRangeSet_1.addKey(cursor_1.primaryKey);
                                                        return cursor_1.value;
                                                    }
                                                }
                                            });
                                        }
                                        return res;
                                    });
                                }
                            }
                        }
                        return table[method].apply(this, arguments);
                    };
                });
                return tableClone;
            }
        });
    }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
    function addAffectedIndex(ix) {
        var rangeSet = getRangeSet(ix.name || "");
        function extractKey(obj) {
            return obj != null ? ix.extractKey(obj) : null;
        }
        var addKeyOrKeys = function(key) {
            return ix.multiEntry && isArray(key) ? key.forEach(function(key) {
                return rangeSet.addKey(key);
            }) : rangeSet.addKey(key);
        };
        (oldObjs || newObjs).forEach(function(_, i) {
            var oldKey = oldObjs && extractKey(oldObjs[i]);
            var newKey = newObjs && extractKey(newObjs[i]);
            if (cmp(oldKey, newKey) !== 0) {
                if (oldKey != null) addKeyOrKeys(oldKey);
                if (newKey != null) addKeyOrKeys(newKey);
            }
        });
    }
    schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = function() {
    function Dexie(name, options) {
        var _this = this;
        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie.dependencies;
        this._options = options = __assign({
            addons: Dexie.addons,
            autoOpen: true,
            indexedDB: deps.indexedDB,
            IDBKeyRange: deps.IDBKeyRange
        }, options);
        this._deps = {
            indexedDB: options.indexedDB,
            IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        this._novip = this;
        var state = {
            dbOpenError: null,
            isBeingOpened: false,
            onReadyBeingFired: null,
            openComplete: false,
            dbReadyResolve: nop,
            dbReadyPromise: null,
            cancelOpen: nop,
            openCanceller: null,
            autoSchema: true,
            PR1398_maxLoop: 3
        };
        state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", "close", {
            ready: [
                promisableChain,
                nop
            ]
        });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function(subscribe) {
            return function(subscriber, bSticky) {
                Dexie.vip(function() {
                    var state = _this._state;
                    if (state.openComplete) {
                        if (!state.dbOpenError) DexiePromise.resolve().then(subscriber);
                        if (bSticky) subscribe(subscriber);
                    } else if (state.onReadyBeingFired) {
                        state.onReadyBeingFired.push(subscriber);
                        if (bSticky) subscribe(subscriber);
                    } else {
                        subscribe(subscriber);
                        var db_1 = _this;
                        if (!bSticky) subscribe(function unsubscribe() {
                            db_1.on.ready.unsubscribe(subscriber);
                            db_1.on.ready.unsubscribe(unsubscribe);
                        });
                    }
                });
            };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function(ev) {
            if (ev.newVersion > 0) console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");
            else console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");
            _this.close();
        });
        this.on("blocked", function(ev) {
            if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn("Dexie.delete('" + _this.name + "') was blocked");
            else console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);
        this._createTransaction = function(mode, storeNames, dbschema, parentTransaction) {
            return new _this.Transaction(mode, storeNames, dbschema, _this._options.chromeTransactionDurability, parentTransaction);
        };
        this._fireOnBlocked = function(ev) {
            _this.on("blocked").fire(ev);
            connections.filter(function(c) {
                return c.name === _this.name && c !== _this && !c._state.vcFired;
            }).map(function(c) {
                return c.on("versionchange").fire(ev);
            });
        };
        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        this.use(observabilityMiddleware);
        this.use(cacheExistingValuesMiddleware);
        this.vip = Object.create(this, {
            _vip: {
                value: true
            }
        });
        addons.forEach(function(addon) {
            return addon(_this);
        });
    }
    Dexie.prototype.version = function(versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function(v) {
            return v._cfg.version === versionNumber;
        })[0];
        if (versionInstance) return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
    };
    Dexie.prototype._whenReady = function(fn) {
        var _this = this;
        return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise(function(resolve, reject) {
            if (_this._state.openComplete) return reject(new exceptions.DatabaseClosed(_this._state.dbOpenError));
            if (!_this._state.isBeingOpened) {
                if (!_this._options.autoOpen) {
                    reject(new exceptions.DatabaseClosed());
                    return;
                }
                _this.open().catch(nop);
            }
            _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
    };
    Dexie.prototype.use = function(_a) {
        var stack = _a.stack, create = _a.create, level = _a.level, name = _a.name;
        if (name) this.unuse({
            stack: stack,
            name: name
        });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({
            stack: stack,
            create: create,
            level: level == null ? 10 : level,
            name: name
        });
        middlewares.sort(function(a, b) {
            return a.level - b.level;
        });
        return this;
    };
    Dexie.prototype.unuse = function(_a) {
        var stack = _a.stack, name = _a.name, create = _a.create;
        if (stack && this._middlewares[stack]) this._middlewares[stack] = this._middlewares[stack].filter(function(mw) {
            return create ? mw.create !== create : name ? mw.name !== name : false;
        });
        return this;
    };
    Dexie.prototype.open = function() {
        return dexieOpen(this);
    };
    Dexie.prototype._close = function() {
        var state = this._state;
        var idx = connections.indexOf(this);
        if (idx >= 0) connections.splice(idx, 1);
        if (this.idbdb) {
            try {
                this.idbdb.close();
            } catch (e) {}
            this._novip.idbdb = null;
        }
        state.dbReadyPromise = new DexiePromise(function(resolve) {
            state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function(_, reject) {
            state.cancelOpen = reject;
        });
    };
    Dexie.prototype.close = function() {
        this._close();
        var state = this._state;
        this._options.autoOpen = false;
        state.dbOpenError = new exceptions.DatabaseClosed();
        if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
    };
    Dexie.prototype.delete = function() {
        var _this = this;
        var hasArguments = arguments.length > 0;
        var state = this._state;
        return new DexiePromise(function(resolve, reject) {
            var doDelete = function() {
                _this.close();
                var req = _this._deps.indexedDB.deleteDatabase(_this.name);
                req.onsuccess = wrap(function() {
                    _onDatabaseDeleted(_this._deps, _this.name);
                    resolve();
                });
                req.onerror = eventRejectHandler(reject);
                req.onblocked = _this._fireOnBlocked;
            };
            if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
            if (state.isBeingOpened) state.dbReadyPromise.then(doDelete);
            else doDelete();
        });
    };
    Dexie.prototype.backendDB = function() {
        return this.idbdb;
    };
    Dexie.prototype.isOpen = function() {
        return this.idbdb !== null;
    };
    Dexie.prototype.hasBeenClosed = function() {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && dbOpenError.name === "DatabaseClosed";
    };
    Dexie.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
    };
    Dexie.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
    };
    Object.defineProperty(Dexie.prototype, "tables", {
        get: function() {
            var _this = this;
            return keys(this._allTables).map(function(name) {
                return _this._allTables[name];
            });
        },
        enumerable: false,
        configurable: true
    });
    Dexie.prototype.transaction = function() {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
    };
    Dexie.prototype._transaction = function(mode, tables, scopeFunc) {
        var _this = this;
        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
        var onlyIfCompatible = mode.indexOf("?") !== -1;
        mode = mode.replace("!", "").replace("?", "");
        var idbMode, storeNames;
        try {
            storeNames = tables.map(function(table) {
                var storeName = table instanceof _this.Table ? table.name : table;
                if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return storeName;
            });
            if (mode == "r" || mode === READONLY) idbMode = READONLY;
            else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;
            else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
            if (parentTransaction) {
                if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
                    if (onlyIfCompatible) parentTransaction = null;
                    else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                }
                if (parentTransaction) storeNames.forEach(function(storeName) {
                    if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                        if (onlyIfCompatible) parentTransaction = null;
                        else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                    }
                });
                if (onlyIfCompatible && parentTransaction && !parentTransaction.active) parentTransaction = null;
            }
        } catch (e) {
            return parentTransaction ? parentTransaction._promise(null, function(_, reject) {
                reject(e);
            }) : rejection(e);
        }
        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function() {
            return _this._whenReady(enterTransaction);
        }) : this._whenReady(enterTransaction);
    };
    Dexie.prototype.table = function(tableName) {
        if (!hasOwn(this._allTables, tableName)) throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        return this._allTables[tableName];
    };
    return Dexie;
}();
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = function() {
    function Observable(subscribe) {
        this._subscribe = subscribe;
    }
    Observable.prototype.subscribe = function(x, error, complete) {
        return this._subscribe(!x || typeof x === "function" ? {
            next: x,
            error: error,
            complete: complete
        } : x);
    };
    Observable.prototype[symbolObservable] = function() {
        return this;
    };
    return Observable;
}();
function extendObservabilitySet(target, newSet) {
    keys(newSet).forEach(function(part) {
        var rangeSet = target[part] || (target[part] = new RangeSet());
        mergeRanges(rangeSet, newSet[part]);
    });
    return target;
}
function liveQuery(querier) {
    return new Observable(function(observer) {
        var scopeFuncIsAsync = isAsyncFunction(querier);
        function execute(subscr) {
            if (scopeFuncIsAsync) incrementExpectedAwaits();
            var exec = function() {
                return newScope(querier, {
                    subscr: subscr,
                    trans: null
                });
            };
            var rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
            if (scopeFuncIsAsync) rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
            return rv;
        }
        var closed = false;
        var accumMuts = {};
        var currentObs = {};
        var subscription = {
            get closed () {
                return closed;
            },
            unsubscribe: function() {
                closed = true;
                globalEvents.storagemutated.unsubscribe(mutationListener);
            }
        };
        observer.start && observer.start(subscription);
        var querying = false, startedListening = false;
        function shouldNotify() {
            return keys(currentObs).some(function(key) {
                return accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]);
            });
        }
        var mutationListener = function(parts) {
            extendObservabilitySet(accumMuts, parts);
            if (shouldNotify()) doQuery();
        };
        var doQuery = function() {
            if (querying || closed) return;
            accumMuts = {};
            var subscr = {};
            var ret = execute(subscr);
            if (!startedListening) {
                globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                startedListening = true;
            }
            querying = true;
            Promise.resolve(ret).then(function(result) {
                querying = false;
                if (closed) return;
                if (shouldNotify()) doQuery();
                else {
                    accumMuts = {};
                    currentObs = subscr;
                    observer.next && observer.next(result);
                }
            }, function(err) {
                querying = false;
                observer.error && observer.error(err);
                subscription.unsubscribe();
            });
        };
        doQuery();
        return subscription;
    });
}
var domDeps;
try {
    domDeps = {
        indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
    };
} catch (e) {
    domDeps = {
        indexedDB: null,
        IDBKeyRange: null
    };
}
var Dexie = Dexie$1;
props(Dexie, __assign(__assign({}, fullNameExceptions), {
    delete: function(databaseName) {
        var db = new Dexie(databaseName, {
            addons: []
        });
        return db.delete();
    },
    exists: function(name) {
        return new Dexie(name, {
            addons: []
        }).open().then(function(db) {
            db.close();
            return true;
        }).catch("NoSuchDatabaseError", function() {
            return false;
        });
    },
    getDatabaseNames: function(cb) {
        try {
            return getDatabaseNames(Dexie.dependencies).then(cb);
        } catch (_a) {
            return rejection(new exceptions.MissingAPI());
        }
    },
    defineClass: function() {
        function Class(content) {
            extend(this, content);
        }
        return Class;
    },
    ignoreTransaction: function(scopeFunc) {
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
    },
    vip: vip,
    async: function(generatorFn) {
        return function() {
            try {
                var rv = awaitIterator(generatorFn.apply(this, arguments));
                if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
                return rv;
            } catch (e) {
                return rejection(e);
            }
        };
    },
    spawn: function(generatorFn, args, thiz) {
        try {
            var rv = awaitIterator(generatorFn.apply(thiz, args || []));
            if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
            return rv;
        } catch (e) {
            return rejection(e);
        }
    },
    currentTransaction: {
        get: function() {
            return PSD.trans || null;
        }
    },
    waitFor: function(promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 60000);
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
    },
    Promise: DexiePromise,
    debug: {
        get: function() {
            return debug;
        },
        set: function(value) {
            setDebug(value, value === "dexie" ? function() {
                return true;
            } : dexieStackFrameFilter);
        }
    },
    derive: derive,
    extend: extend,
    props: props,
    override: override,
    Events: Events,
    on: globalEvents,
    liveQuery: liveQuery,
    extendObservabilitySet: extendObservabilitySet,
    getByKeyPath: getByKeyPath,
    setByKeyPath: setByKeyPath,
    delByKeyPath: delByKeyPath,
    shallowClone: shallowClone,
    deepClone: deepClone,
    getObjectDiff: getObjectDiff,
    cmp: cmp,
    asap: asap$1,
    minKey: minKey,
    addons: [],
    connections: connections,
    errnames: errnames,
    dependencies: domDeps,
    semVer: DEXIE_VERSION,
    version: DEXIE_VERSION.split(".").map(function(n) {
        return parseInt(n);
    }).reduce(function(p, c, i) {
        return p + c / Math.pow(10, i * 2);
    })
}));
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(updatedParts) {
        if (!propagatingLocally) {
            var event_1;
            if (isIEOrEdge) {
                event_1 = document.createEvent("CustomEvent");
                event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
            } else event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
                detail: updatedParts
            });
            propagatingLocally = true;
            dispatchEvent(event_1);
            propagatingLocally = false;
        }
    });
    addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, function(_a) {
        var detail = _a.detail;
        if (!propagatingLocally) propagateLocally(detail);
    });
}
function propagateLocally(updateParts) {
    var wasMe = propagatingLocally;
    try {
        propagatingLocally = true;
        globalEvents.storagemutated.fire(updateParts);
    } finally{
        propagatingLocally = wasMe;
    }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
    var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
    if (typeof bc_1.unref === "function") bc_1.unref();
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
        if (!propagatingLocally) bc_1.postMessage(changedParts);
    });
    bc_1.onmessage = function(ev) {
        if (ev.data) propagateLocally(ev.data);
    };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
    globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, function(changedParts) {
        try {
            if (!propagatingLocally) {
                if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
                    trig: Math.random(),
                    changedParts: changedParts
                }));
                if (typeof self["clients"] === "object") __spreadArray([], self["clients"].matchAll({
                    includeUncontrolled: true
                }), true).forEach(function(client) {
                    return client.postMessage({
                        type: STORAGE_MUTATED_DOM_EVENT_NAME,
                        changedParts: changedParts
                    });
                });
            }
        } catch (_a) {}
    });
    if (typeof addEventListener !== "undefined") addEventListener("storage", function(ev) {
        if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
            var data = JSON.parse(ev.newValue);
            if (data) propagateLocally(data.changedParts);
        }
    });
    var swContainer = self.document && navigator.serviceWorker;
    if (swContainer) swContainer.addEventListener("message", propagateMessageLocally);
}
function propagateMessageLocally(_a) {
    var data = _a.data;
    if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) propagateLocally(data.changedParts);
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2BAGs":[function(require,module,exports) {
/**
 * @fixme Running into issues getting CSS working with parcel so for now
 * doing it this way
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = `
.menu-bar_menu-bar-item_scratchmoar {
  padding: 0 !important;
}

.menu-bar_menu-bar-item_scratchmoar > span {
  padding: 0 0.75rem;
  display: inline-block;
  line-height: 2.5rem;
}

.scratchmoarHidden {
  display: none;
}

.scratchmoarPopup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.scratchmoarPopup > .scratchmoarOverlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
}

.scratchmoarPopup > .scratchmoarPopupContent {
  position: absolute;
  cursor: initial;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--ui-tertiary, #fff);
  max-height: 80%;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 600px;
  max-width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
}
.scratchmoarPopupContent {
  color: #000;
}
[theme="dark"] .scratchmoarPopupContent {
  color: #fff;
}

.scratchmoarPopupContentBody {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.scratchmoarPopup button {
  padding: 1rem;
}
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lTkX9","9Smt2"], "9Smt2", "parcelRequire995d")

//# sourceMappingURL=scratchmoar.js.map
