var $cA92S$vue = require("vue");
var $cA92S$dexie = require("dexie");
var $cA92S$vueuserxjs = require("@vueuse/rxjs");
var $cA92S$lodash = require("lodash");
var $cA92S$jszip = require("jszip");
var $cA92S$dexieexportimport = require("dexie-export-import");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire995d"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire995d"] = parcelRequire;
}
parcelRequire.register("4y64q", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $34ff0bd6d834172c$export$2e2bcd8739ae039);


var $j1xol = parcelRequire("j1xol");


var $34ff0bd6d834172c$export$2e2bcd8739ae039 = {
    __name: "App",
    setup (__props, { expose: expose  }) {
        expose();
        const vm = (0, $cA92S$vue.getCurrentInstance)();
        const menu = (0, $cA92S$vue.ref)(null);
        const isVisible = (0, $cA92S$vue.ref)(false);
        const forceRenderer = (0, $cA92S$vue.ref)(false) // For forcing a re-render
        ;
        let snapshots = (0, $cA92S$vue.ref)((0, $cA92S$vueuserxjs.useObservable)((0, $cA92S$dexie.liveQuery)(()=>{
            return (0, $j1xol.default).snapshots.toArray();
        })));
        /**
 * Observe settings
 * Also sets lastSnapshotID
 */ let lastSnapshotID = (0, $cA92S$vue.ref)(null);
        let settings = (0, $cA92S$vue.ref)((0, $cA92S$vueuserxjs.useObservable)((0, $cA92S$dexie.liveQuery)(async ()=>{
            const data = await (0, $j1xol.default).settings.toArray();
            // Find first {key: 'lastSnapshotID'} and set lastSnapshotID
            if (data && data.length) lastSnapshotID = data.find((setting)=>{
                if (setting.key === "lastSnapshotID") {
                    vm.proxy.$forceUpdate();
                    return setting.value;
                }
            });
            return data;
        })));
        (0, $cA92S$vue.onMounted)(()=>{
            // Add matching classes for styling purposes
            const $menuItem = document.querySelector('[class*="menu-bar_menu-bar-item_"][class*="menu-bar_hoverable_"]:not([class*="menu-bar_language-menu_"])');
            $menuItem.classList.forEach((className)=>menu.value.classList.add(className));
            // Manually match list item styles
            let styles = getComputedStyle(document.querySelector('[class*="gui_page-wrapper_"] > [class*="menu-bar_menu-bar"]'));
            const $menuItems = document.querySelectorAll(".menu-bar_menu-bar-item_scratchmoar li");
            $menuItems.forEach(($menuItem)=>{
                $menuItem.style.backgroundColor = styles.backgroundColor;
            });
            // Listeners
            document.addEventListener("scratchmoarLoadedProject", ()=>isVisible.value = false);
        });
        /**
 * Trigger a clear data event
 */ function clearSnapshots() {
            document.dispatchEvent(new CustomEvent("scratchmoarResetDB"));
        }
        /**
 * Trigger a save snapshot event
 */ function saveSnapshots() {
            document.dispatchEvent(new CustomEvent("scratchmoarSaveSnapshot"));
            isVisible.value = false;
        }
        /**
 * Trigger a load snapshot event
 */ function loadSnapshot(id) {
            document.dispatchEvent(new CustomEvent("scratchmoarLoadSnapshot", {
                detail: id
            }));
        }
        /**
 * Trigger a delete snapshot event
 */ function deleteSnapshot(id) {
            document.dispatchEvent(new CustomEvent("scratchmoarDeleteSnapshot", {
                detail: id
            }));
        }
        /**
 * Trigger an update snapshot event
 */ function updateSnapshot(id) {
            document.dispatchEvent(new CustomEvent("scratchmoarUpdateSnapshot", {
                detail: id
            }));
            isVisible.value = false;
        }
        /**
 * Trigger a download snapshots event
 */ function downloadSnapshots() {
            document.dispatchEvent(new CustomEvent("scratchmoarDownloadSnapshots"));
            isVisible.value = false;
        }
        /**
 * Trigger a load snapshots event
 */ function loadSnapshots() {
            document.dispatchEvent(new CustomEvent("scratchmoarLoadSnapshots"));
        // isVisible.value = false
        }
        const __returned__ = {
            vm: vm,
            menu: menu,
            isVisible: isVisible,
            forceRenderer: forceRenderer,
            get snapshots () {
                return snapshots;
            },
            set snapshots (v){
                snapshots = v;
            },
            get lastSnapshotID () {
                return lastSnapshotID;
            },
            set lastSnapshotID (v){
                lastSnapshotID = v;
            },
            get settings () {
                return settings;
            },
            set settings (v){
                settings = v;
            },
            clearSnapshots: clearSnapshots,
            saveSnapshots: saveSnapshots,
            loadSnapshot: loadSnapshot,
            deleteSnapshot: deleteSnapshot,
            updateSnapshot: updateSnapshot,
            downloadSnapshots: downloadSnapshots,
            loadSnapshots: loadSnapshots,
            ref: $cA92S$vue.ref,
            onMounted: $cA92S$vue.onMounted,
            getCurrentInstance: $cA92S$vue.getCurrentInstance,
            get Snapshots () {
                return 0, $j1xol.default;
            },
            get liveQuery () {
                return 0, $cA92S$dexie.liveQuery;
            },
            get useObservable () {
                return 0, $cA92S$vueuserxjs.useObservable;
            }
        };
        Object.defineProperty(__returned__, "__isScriptSetup", {
            enumerable: false,
            value: true
        });
        return __returned__;
    }
};

});
parcelRequire.register("j1xol", function(module, exports) {

$parcel$export(module.exports, "default", () => $dd98033414d17a44$export$2e2bcd8739ae039);

const $dd98033414d17a44$var$db = new (0, ($parcel$interopDefault($cA92S$dexie)))("scratchmoar");
var $dd98033414d17a44$export$2e2bcd8739ae039 = $dd98033414d17a44$var$db;
$dd98033414d17a44$var$db.version(1).stores({
    settings: "&key, value",
    snapshots: "++id, parentId, date, title, description, *tags"
});

});


parcelRequire.register("asRSA", function(module, exports) {

$parcel$export(module.exports, "render", () => $01f753dff44a36fb$export$b3890eb0ae9dca99);

const $01f753dff44a36fb$var$_hoisted_1 = {
    ref: "menu",
    class: "menu-bar_menu-bar-item_scratchmoar"
};
const $01f753dff44a36fb$var$_hoisted_2 = {
    class: "scratchmoarPopupContent"
};
const $01f753dff44a36fb$var$_hoisted_3 = /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("div", {
    class: "scratchmoarPopupContentHeader"
}, [
    /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("h2", null, "Scratchmoar Settings")
], -1);
const $01f753dff44a36fb$var$_hoisted_4 = {
    class: "scratchmoarPopupContentBody"
};
const $01f753dff44a36fb$var$_hoisted_5 = /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("thead", null, [
    /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("tr", null, [
        /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("th", {
            width: "40px"
        }, "ID"),
        /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("th", {
            width: "100px"
        }, "Title"),
        /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("th", {
            width: "100px"
        }, "Created"),
        /*#__PURE__*/ (0, $cA92S$vue.createElementVNode)("th", null, "Actions")
    ])
], -1);
const $01f753dff44a36fb$var$_hoisted_6 = [
    "onClick"
];
const $01f753dff44a36fb$var$_hoisted_7 = [
    "onClick"
];
const $01f753dff44a36fb$var$_hoisted_8 = [
    "onClick"
];
const $01f753dff44a36fb$var$_hoisted_9 = {
    class: "scratchmoarPopupContentFooter"
};
function $01f753dff44a36fb$export$b3890eb0ae9dca99(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, $cA92S$vue.openBlock)(), (0, $cA92S$vue.createElementBlock)("div", $01f753dff44a36fb$var$_hoisted_1, [
        (0, $cA92S$vue.createElementVNode)("span", {
            onClick: _cache[0] || (_cache[0] = ($event)=>$setup.isVisible = !$setup.isVisible)
        }, "Scratchmoar"),
        (0, $cA92S$vue.createElementVNode)("div", {
            class: (0, $cA92S$vue.normalizeClass)({
                scratchmoarHidden: !$setup.isVisible,
                scratchmoarPopup: true
            })
        }, [
            (0, $cA92S$vue.createElementVNode)("div", {
                class: "scratchmoarOverlay",
                onClick: _cache[1] || (_cache[1] = ($event)=>$setup.isVisible = false)
            }),
            (0, $cA92S$vue.createElementVNode)("div", $01f753dff44a36fb$var$_hoisted_2, [
                $01f753dff44a36fb$var$_hoisted_3,
                (0, $cA92S$vue.createElementVNode)("div", $01f753dff44a36fb$var$_hoisted_4, [
                    (0, $cA92S$vue.createElementVNode)("table", null, [
                        $01f753dff44a36fb$var$_hoisted_5,
                        (0, $cA92S$vue.createElementVNode)("tbody", null, [
                            ((0, $cA92S$vue.openBlock)(true), (0, $cA92S$vue.createElementBlock)((0, $cA92S$vue.Fragment), null, (0, $cA92S$vue.renderList)($setup.snapshots, (snapshot)=>{
                                return (0, $cA92S$vue.openBlock)(), (0, $cA92S$vue.createElementBlock)("tr", {
                                    key: snapshot.id,
                                    class: (0, $cA92S$vue.normalizeClass)({
                                        scratchmoarPositive: $setup.lastSnapshotID?.value === snapshot.id
                                    })
                                }, [
                                    (0, $cA92S$vue.createElementVNode)("td", null, (0, $cA92S$vue.toDisplayString)(snapshot.id), 1),
                                    (0, $cA92S$vue.createElementVNode)("td", null, (0, $cA92S$vue.toDisplayString)(snapshot.title), 1),
                                    (0, $cA92S$vue.createElementVNode)("td", null, (0, $cA92S$vue.toDisplayString)(new Date(snapshot.date).toLocaleString().slice(0, -2).replace(/:\d{2}\s/, " ")), 1),
                                    (0, $cA92S$vue.createElementVNode)("td", null, [
                                        (0, $cA92S$vue.createElementVNode)("button", {
                                            title: "Delete this snapshot",
                                            class: "scratchmoarNegative",
                                            onClick: ($event)=>$setup.deleteSnapshot(snapshot.id),
                                            style: {
                                                "margin-right": "2rem"
                                            }
                                        }, "Delete", 8, $01f753dff44a36fb$var$_hoisted_6),
                                        (0, $cA92S$vue.createElementVNode)("button", {
                                            title: "Overwrite this snapshot with active project",
                                            class: "scratchmoarWarning",
                                            onClick: ($event)=>$setup.updateSnapshot(snapshot.id)
                                        }, "Update", 8, $01f753dff44a36fb$var$_hoisted_7),
                                        (0, $cA92S$vue.createElementVNode)("button", {
                                            title: "Replace active project with this snapshot",
                                            class: "scratchmoarInfo",
                                            onClick: ($event)=>$setup.loadSnapshot(snapshot.id),
                                            style: {
                                                "float": "right"
                                            }
                                        }, "Load", 8, $01f753dff44a36fb$var$_hoisted_8)
                                    ])
                                ], 2);
                            }), 128))
                        ])
                    ])
                ]),
                (0, $cA92S$vue.createElementVNode)("div", $01f753dff44a36fb$var$_hoisted_9, [
                    (0, $cA92S$vue.createElementVNode)("button", {
                        title: "Frees up all snapshots from the browser",
                        class: "scratchmoarNegative",
                        onClick: _cache[2] || (_cache[2] = ($event)=>$setup.clearSnapshots())
                    }, "Delete all snapshots"),
                    (0, $cA92S$vue.createElementVNode)("button", {
                        title: "Stores a new snapshot to the browser",
                        class: "scratchmoarInfo",
                        onClick: _cache[3] || (_cache[3] = ($event)=>$setup.saveSnapshots()),
                        style: {
                            "float": "right"
                        }
                    }, "Save new snapshot"),
                    (0, $cA92S$vue.createElementVNode)("button", {
                        title: "Downloads all snapshots as one file",
                        class: "scratchmoarPositive",
                        onClick: _cache[4] || (_cache[4] = ($event)=>$setup.downloadSnapshots()),
                        style: {
                            "float": "right",
                            "margin-right": ".5rem"
                        }
                    }, "Download snapshots file"),
                    (0, $cA92S$vue.createElementVNode)("button", {
                        title: "Loads a snapshot file into the browser",
                        class: "scratchmoarWarning",
                        onClick: _cache[5] || (_cache[5] = ($event)=>$setup.loadSnapshots()),
                        style: {
                            "float": "right",
                            "margin-right": ".5rem"
                        }
                    }, "Load snapshots file...")
                ])
            ])
        ], 2)
    ], 512);
}

});

parcelRequire.register("dF7ib", function(module, exports) {

$parcel$export(module.exports, "default", () => $9f24c2c671b17396$export$2e2bcd8739ae039);
let $9f24c2c671b17396$var$NOOP = ()=>{};
var $9f24c2c671b17396$export$2e2bcd8739ae039 = (script)=>{};

});


$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $8ef4e97df7e6c05e$export$2e2bcd8739ae039);
let $622b3ba819d084fb$var$script;



let $622b3ba819d084fb$var$initialize = ()=>{
    $622b3ba819d084fb$var$script = (parcelRequire("4y64q"));
    if ($622b3ba819d084fb$var$script.__esModule) $622b3ba819d084fb$var$script = $622b3ba819d084fb$var$script.default;
    $622b3ba819d084fb$var$script.render = (parcelRequire("asRSA")).render;
    (parcelRequire("dF7ib")).default($622b3ba819d084fb$var$script);
    $622b3ba819d084fb$var$script.__scopeId = "data-v-86f348";
    $622b3ba819d084fb$var$script.__file = "App.vue";
};
$622b3ba819d084fb$var$initialize();
var $622b3ba819d084fb$export$2e2bcd8739ae039 = $622b3ba819d084fb$var$script;



var $j1xol = parcelRequire("j1xol");
/**
 * @fixme Running into issues getting CSS working with parcel so for now
 * doing it this way
 */ var $102429ae3214cb14$export$2e2bcd8739ae039 = `
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
  width: 960px;
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

.scratchmoarPopupContentBody select {
  width: 100%;
  display: block;
}

.scratchmoarPopupContentBody table {
  width: 100%;
  text-align: left;
}

.scratchmoarPopupContentBody table td,
.scratchmoarPopupContentBody table th {
  padding: 1em;
  border: 1px solid #aaa;
}
.scratchmoarPopupContentBody table th {
  background: #999a;
}
.scratchmoarPopupContentBody table tr:hover {
  background: #eeea
}

.scratchmoarInfo {
  background: #00a9;
}
.scratchmoarPositive {
  background: #0a09;
}
.scratchmoarWarning {
  background: #f809;
}
.scratchmoarNegative {
  background: #f009;
}
`;




var $0c314c60606435c0$export$2e2bcd8739ae039 = {
    /**
   * Setup the extension
   */ setup () {
        // resetDB if ?reset is present in URL and redirect to same URL without reset
        if (window.location.search.includes("reset")) {
            this.resetDB();
            window.location = window.location.href.replace("?reset", "");
        }
        // Reference virtual machine
        this.vm = globalThis.Scratch.vm;
        this.runtime = this.vm.runtime;
        this.db = (0, $j1xol.default);
        globalThis.scratchmoar = this;
        // Mount Vue
        this.app = (0, $cA92S$vue.createApp)((0, $622b3ba819d084fb$export$2e2bcd8739ae039));
        this.app.mount(this.$selectors.menubarPortal);
        // Manually add styles
        const $styles = document.createElement("style");
        $styles.innerHTML = (0, $102429ae3214cb14$export$2e2bcd8739ae039);
        document.querySelector("body").appendChild($styles);
        // Determine the current project ID
        let path = window.location.pathname;
        let parts = path.split("/");
        // Determine platform
        switch(window.location.host){
            case "scratch.mit.edu":
                this.platform = "scratch";
                break;
            case "turbowarp.org":
            default:
                this.platform = "turbowarp";
        }
        // @todo This should be added to db so that we can have multiple projects too!
        // Scratch: /projects/ID
        if (parts[1] === "projects") this.projectID = parts[2];
        else if (Number.isInteger(+parts[1])) this.projectID = parts[2];
        else this.projectID = "autosave";
        // Custom event listeners
        this.loadAutosave();
        document.addEventListener("scratchmoarResetDB", this.resetDB.bind(this));
        document.addEventListener("scratchmoarSaveSnapshot", this.saveSnapshot.bind(this));
        document.addEventListener("scratchmoarLoadSnapshot", this.loadSnapshot.bind(this));
        document.addEventListener("scratchmoarDeleteSnapshot", this.deleteSnapshot.bind(this));
        document.addEventListener("scratchmoarUpdateSnapshot", this.updateSnapshot.bind(this));
        document.addEventListener("scratchmoarDownloadSnapshots", this.downloadSnapshots.bind(this));
        document.addEventListener("scratchmoarLoadSnapshots", this.loadSnapshots.bind(this));
        document.addEventListener("scratchmoarLoadedProject", ()=>this.isLoading = false);
        this.vm.on("PROJECT_CHANGED", ()=>this.autosave());
        console.log("\uD83E\uDDE9 Scratchmoar extension loaded!");
    },
    /**
   * Entry point for extension
   */ getInfo () {
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
};




var $30c850bb698be007$export$2e2bcd8739ae039 = {
    /**
   * Autosaves every few moments
   */ autosave () {
        if (this.isLoading || this.isSaving) return;
        const files = this.vm.saveProjectSb3DontZip();
        this.isSaving = true;
        this.db.settings.put({
            key: "autosave",
            value: {
                title: this.getTitle(),
                date: new Date(),
                files: files
            }
        }).finally(()=>{
            this.isSaving = false;
        });
    },
    /**
   * Save a snapshot
   * - Take last autosave and recursively add each file/asset to zip
   *  (we'll do this manually so we can use same loading mechanism)
   * - Save zip to indexedDB
   */ saveSnapshot () {
        const zip = new (0, ($parcel$interopDefault($cA92S$jszip)))();
        const files = this.vm.saveProjectSb3DontZip();
        this.isSaving = true;
        Object.keys(files).forEach((key)=>zip.file(key, files[key]));
        zip.generateAsync({
            type: "arraybuffer"
        }).then((data)=>{
            this.db.snapshots.add({
                title: this.getTitle(),
                date: new Date(),
                data: data
            }).then((id)=>{
                this.db.settings.put({
                    key: "lastSnapshotID",
                    value: id
                }).catch(this.log);
            }).catch(this.log).finally(()=>this.isSaving = false);
        });
    },
    /**
   * Update a snapshot
   */ updateSnapshot (ev) {
        const zip = new (0, ($parcel$interopDefault($cA92S$jszip)))();
        const files = this.vm.saveProjectSb3DontZip();
        Object.keys(files).forEach((key)=>zip.file(key, files[key]));
        this.db.settings.put({
            key: "lastSnapshotID",
            value: ev.detail
        }).catch(this.log);
        zip.generateAsync({
            type: "arraybuffer"
        }).then((data)=>{
            this.isSaving = true;
            this.db.snapshots.update(ev.detail, {
                title: this.getTitle(),
                updated: new Date(),
                data: data
            }).then(()=>this.autosave()).catch(this.log).finally(()=>this.isSaving = false);
        }).catch(this.log);
    },
    /**
   * Download snapshots
   */ async downloadSnapshots () {
        const blob = await (0, $cA92S$dexieexportimport.exportDB)(this.db);
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        const title = this.getTitle();
        const date = new Date().toISOString().split("T");
        a.href = url;
        a.download = `${date[0]}-${title}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};



var $7f43f8bb6b52f3a9$export$2e2bcd8739ae039 = {
    /**
   * Load autosave
   */ loadAutosave () {
        if (this.isLoading || this.isSaving) return;
        this.isLoading = true;
        this.db.settings.get({
            key: "autosave"
        }).then((autosave)=>{
            if (autosave.value) {
                const zip = new (0, ($parcel$interopDefault($cA92S$jszip)))();
                Object.keys(autosave.value.files).forEach((key)=>zip.file(key, autosave.value.files[key]));
                zip.generateAsync({
                    type: "arraybuffer"
                }).then((data)=>{
                    this.vm.loadProject(data).then(()=>{
                        document.dispatchEvent(new CustomEvent("scratchmoarLoadedProject"));
                        this.setTitle(autosave.value.title);
                    });
                });
            }
        });
    },
    /**
   * Load a snapshot
   */ loadSnapshot (ev) {
        this.db.snapshots.get(ev.detail).then((snapshot)=>{
            this.isLoading = true;
            this.db.settings.put({
                key: "lastSnapshotID",
                value: snapshot.id
            }).catch(this.log);
            this.vm.loadProject(snapshot.data).then(()=>{
                document.dispatchEvent(new CustomEvent("scratchmoarLoadedProject"));
                this.setTitle(snapshot.title);
            });
        }).catch(this.log);
    },
    /**
   * Load snapshots
   * @todo Needs better error catching
   */ loadSnapshots () {
        const $btn = document.createElement("input");
        $btn.type = "file";
        $btn.accept = ".json";
        $btn.style.display = "none";
        $btn.addEventListener("change", async ()=>{
            const file = $btn.files[0];
            this.db.import(file).then(()=>{
                // Load last snapshot
                this.db.settings.get({
                    key: "lastSnapshotID"
                }).then((snapshot)=>{
                    this.loadSnapshot({
                        detail: snapshot.value
                    });
                });
            }).catch((err)=>console.log("⚠️ Error importing:", err));
            document.body.removeChild($btn);
        });
        document.body.appendChild($btn);
        $btn.click();
    }
};


var $63bc1f11c76de13f$export$2e2bcd8739ae039 = {
    /**
   * Reset the database
   */ resetDB () {
        this.db.settings.clear();
        this.db.snapshots.clear();
    },
    /**
   * Delete a snapshot
   */ deleteSnapshot (ev) {
        this.db.snapshots.delete(ev.detail);
    }
};



const $8ef4e97df7e6c05e$var$DEBOUNCE_TIME = 250;
/**
 * Scrtachmoar extension
 * @todo Replace console.warning() and catch messages with Vue notifications
 */ class $8ef4e97df7e6c05e$var$Scratchmoar {
    constructor(){
        // Constants
        this.DEBOUNCE_TIME = $8ef4e97df7e6c05e$var$DEBOUNCE_TIME;
        // Prop
        this.app = null // Vue app
        ;
        this.vm = null // scratch-gui Virtual Machine
        ;
        this.runtime = null // The Scratch Blocks extention runtime
        ;
        this.db = null // IndexedDB Database
        ;
        this.platform = null // Platform type ("scratch" for scratch.mit.edu, "turbowarp" assumes ?extension= support)
        ;
        this.projectID = null // Project ID from URL
        ;
        this.isLoading = false // Flag used to prevent autosave loops
        ;
        this.isSaving = false // Flag used to prevent autosave loops
        ;
        // Selectors
        this.$selectors = {
            projectTitle: 'input[class*="project-title-input_title-field_"]',
            menubarPortal: '[class*="menu-bar_account-info-group_"]'
        };
    }
    // @fixme - This seemed like a good idea at first,
    // but it can introduce bugs if method signatures change
    // Setup
    setup() {
        (0, $0c314c60606435c0$export$2e2bcd8739ae039).setup.call(this);
    }
    scratchmoarNull() {
        return null;
    }
    getInfo() {
        return (0, $0c314c60606435c0$export$2e2bcd8739ae039).getInfo.call(this);
    }
    // Saving
    autosave = (0, $cA92S$lodash.debounce)(function() {
        (0, $30c850bb698be007$export$2e2bcd8739ae039).autosave.call(this);
    }, this.DEBOUNCE_TIME, {
        leading: false,
        trailing: true
    });
    saveSnapshot() {
        (0, $30c850bb698be007$export$2e2bcd8739ae039).saveSnapshot.call(this);
    }
    updateSnapshot(ev) {
        (0, $30c850bb698be007$export$2e2bcd8739ae039).updateSnapshot.call(this, ev);
    }
    async downloadSnapshots() {
        await (0, $30c850bb698be007$export$2e2bcd8739ae039).downloadSnapshots.call(this);
    }
    // Loading
    loadSnapshot(ev) {
        (0, $7f43f8bb6b52f3a9$export$2e2bcd8739ae039).loadSnapshot.call(this, ev);
    }
    loadSnapshots() {
        (0, $7f43f8bb6b52f3a9$export$2e2bcd8739ae039).loadSnapshots.call(this);
    }
    loadAutosave() {
        (0, $7f43f8bb6b52f3a9$export$2e2bcd8739ae039).loadAutosave.call(this);
    }
    // Deleting
    resetDB() {
        (0, $63bc1f11c76de13f$export$2e2bcd8739ae039).resetDB.call(this);
    }
    deleteSnapshot(ev) {
        (0, $63bc1f11c76de13f$export$2e2bcd8739ae039).deleteSnapshot.call(this, ev);
    }
    // Misc
    setTitle(title = "Untitled") {
        document.querySelector(this.$selectors.projectTitle).value = title;
    }
    getTitle(def = "Untitled") {
        return document.querySelector(this.$selectors.projectTitle).value || def;
    }
    log() {
        console.log(...arguments);
    }
}
// Automatically add the extension if it's getting imported,
// otherwise you'll have to manually run this yourself
globalThis.Scratch && Scratch.extensions.register(new $8ef4e97df7e6c05e$var$Scratchmoar());
var $8ef4e97df7e6c05e$export$2e2bcd8739ae039 = $8ef4e97df7e6c05e$var$Scratchmoar;


//# sourceMappingURL=scratchmoar.js.map
