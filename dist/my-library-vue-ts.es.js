(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var x = Object.defineProperty;
var v = (r, e, t) => e in r ? x(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => (v(r, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as I, ref as k, openBlock as _, createElementBlock as d, Fragment as D, createElementVNode as a, toDisplayString as l, pushScopeId as K, popScopeId as P, createTextVNode as c, reactive as b, normalizeClass as F, unref as h, renderSlot as V } from "vue";
const g = (r) => (K("data-v-8fe7e3eb"), r = r(), P(), r), B = { class: "card" }, w = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ c(" Edit "),
  /* @__PURE__ */ a("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ c(" to test HMR ")
], -1)), E = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ c(" Check out "),
  /* @__PURE__ */ a("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ c(", the official Vue + Vite starter ")
], -1)), T = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", null, [
  /* @__PURE__ */ c(" Install "),
  /* @__PURE__ */ a("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ c(" in your IDE for a better DX ")
], -1)), M = /* @__PURE__ */ g(() => /* @__PURE__ */ a("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), O = /* @__PURE__ */ I({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(r) {
    const e = k(0);
    return (t, s) => (_(), d(D, null, [
      a("h1", null, l(t.msg), 1),
      a("div", B, [
        a("button", {
          type: "button",
          onClick: s[0] || (s[0] = (o) => e.value++)
        }, "count is " + l(e.value), 1),
        w
      ]),
      E,
      T,
      M
    ], 64));
  }
});
const p = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [s, o] of e)
    t[s] = o;
  return t;
}, A = /* @__PURE__ */ p(O, [["__scopeId", "data-v-8fe7e3eb"]]), C = /* @__PURE__ */ I({
  __name: "MyButton",
  props: {
    primary: { type: Boolean, default: !1 },
    text: {}
  },
  setup(r) {
    const e = r, { primary: t, text: s } = b(e);
    return (o, N) => (_(), d("button", {
      class: F(["btn", { primary: h(t) }])
    }, [
      V(o.$slots, "default", {}, void 0, !0),
      c(" " + l(h(t)) + " " + l(h(s)), 1)
    ], 2));
  }
});
const J = /* @__PURE__ */ p(C, [["__scopeId", "data-v-7957e8be"]]), H = () => typeof Storage < "u", f = () => {
  if (!H())
    throw new Error("The browser does not support storage.");
}, u = (r, e) => r + e, $ = () => {
  const r = Math.floor(Date.now() / 1e3), e = Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return `-${r}-${e}`;
}, y = (r, e, t) => {
  f(), sessionStorage.setItem(u(r, e), t);
}, S = (r, e) => (f(), sessionStorage.getItem(u(r, e))), L = (r, e) => (f(), sessionStorage.removeItem(u(r, e))), R = (r, e, t) => r.getItemOrDefault(e, t), U = (r, e, t) => {
  f(), localStorage.setItem(u(r, e), t);
}, q = (r, e) => (f(), localStorage.getItem(u(r, e))), z = (r, e) => (f(), localStorage.removeItem(u(r, e)));
class m {
  constructor(e) {
    /**
     * the id to manage storage.
     * @protected
     */
    n(this, "_storageID");
    this._storageID = e;
  }
  get storageID() {
    return this._storageID;
  }
  set storageID(e) {
    this._storageID = e;
  }
  get generalPrefix() {
    return this.storageID.generalPrefix;
  }
  set generalPrefix(e) {
    this.storageID.generalPrefix = e;
  }
  get keySuffix() {
    return this.storageID.keySuffix;
  }
  set keySuffix(e) {
    this.storageID.keySuffix = e;
  }
  /**
   * Gets the complete key prefix by concatenating the this.generalPrefix and the key.
   * @param key
   */
  getKeyPrefix(e) {
    return this.generalPrefix + e;
  }
  //you may later use something like "valueOf" instead:
  //https://stackoverflow.com/questions/49285864/is-there-a-valueof-similar-to-keyof-in-typescript
  /**
   * Checks whether the item is valid (whether it can be integrated into the items property)
   * @param item (the value of the item)
   * @return boolean
   */
  static isItemValid(e) {
    return e !== void 0;
  }
}
class X extends m {
  /**
   * automatically retrieves values for the keys from session storage
   * @param keys
   * @param storageID
   */
  constructor(t, s) {
    super(s);
    n(this, "_keys");
    /**
     * items retrieved through storage
     * @protected
     */
    //@ts-ignore
    n(this, "_items");
    this._keys = t, this.setUpItems();
  }
  get keys() {
    return this._keys;
  }
  set keys(t) {
    this._keys = t;
  }
  get items() {
    return this._items;
  }
  set items(t) {
    this._items = t;
  }
  /**
   * retrieves values from session storage and returns the JSON-decoded versions.
   * @return StorageItems
   */
  retrieveItems() {
    const t = {};
    return this.keys.forEach((s) => {
      const o = S(this.getKeyPrefix(s), this.keySuffix);
      o !== null && (t[s] = JSON.parse(o));
    }), t;
  }
  /**
   * sets the items property using Retrieve.retrieveItems.
   */
  setUpItems() {
    this.items = this.retrieveItems();
  }
  /**
   * if the item is not undefined, returns the item. Otherwise, returns defaultValue.
   * @param key
   * @param defaultValue
   */
  getItemOrDefault(t, s) {
    const o = this.items[t];
    return o !== void 0 ? o : s;
  }
}
class G extends m {
  /**
   * automatically saves items to storage
   * @param items
   * @param storageID
   */
  constructor(t, s) {
    super(s);
    /**
     * the items to be saved to storage
     * @protected
     */
    n(this, "_items");
    this._items = t, this.saveItems(this.items);
  }
  get items() {
    return this._items;
  }
  set items(t) {
    this._items = t;
  }
  /**
   * saves the item to the items property
   * @param key (the key of the item)
   * @param value (the value of the item)
   */
  saveItemToItems(t, s) {
    m.isItemValid(s) && (this.items[t] = s);
  }
  /**
   * JSON-encodes the value and saves it to storage.
   * @param key (the key of the item)
   * @param value (the value of the item)
   */
  saveItemToStorage(t, s) {
    m.isItemValid(s) && y(this.getKeyPrefix(t), this.keySuffix, JSON.stringify(s));
  }
  /**
   * saves the item to the items property and storage.
   * @param key (the key of the item)
   * @param value (the value of the item)
   */
  saveItem(t, s) {
    m.isItemValid(s) && (this.saveItemToItems(t, s), this.saveItemToStorage(t, s));
  }
  /**
   * saves the items to the items property and storage using Save.saveItem.
   */
  saveItems(t) {
    Object.keys(t).forEach((s) => this.saveItem(s, this.items[s]));
  }
  /**
   * deletes the key from the items property.
   * @param key
   */
  deleteItemFromItems(t) {
    delete this.items[t];
  }
  /**
   * deletes the key from storage.
   * @param key
   */
  deleteItemFromStorage(t) {
    L(this.getKeyPrefix(t), this.keySuffix);
  }
  /**
   * deletes the item from the items property and storage.
   * @param key
   */
  deleteItem(t) {
    this.deleteItemFromItems(t), this.deleteItemFromStorage(t);
  }
}
class i {
  /**
   * automatically transfers items
   * @param senderID
   * @param recipientID
   * @param keys
   */
  constructor(e, t, s) {
    /**
     * the storage id of the sender
     * @protected
     */
    n(this, "_senderID");
    /**
     * the storage id of the recipient
     * @protected
     */
    n(this, "_recipientID");
    /**
     * The keys to be transferred.
     * @protected
     */
    n(this, "_keys");
    this._senderID = t, this._recipientID = s, this._keys = i.convertIntoTransferKeys(e), this.transferItems(this.keys);
  }
  get senderID() {
    return this._senderID;
  }
  set senderID(e) {
    this._senderID = e;
  }
  get recipientID() {
    return this._recipientID;
  }
  set recipientID(e) {
    this._recipientID = e;
  }
  get keys() {
    return this._keys;
  }
  set keys(e) {
    this._keys = e;
  }
  /**
   * generates a transfer key from a key
   * @param key
   */
  static generateTransferKeyFromKey(e) {
    return {
      sender: e,
      recipient: e
    };
  }
  /**
   * converts a string into TransferKey.
   * @param key
   */
  static convertIntoTransferKey(e) {
    return typeof e == "string" ? i.generateTransferKeyFromKey(e) : e;
  }
  /**
   * converts strings into TransferKeys.
   * @param array
   */
  static convertIntoTransferKeys(e) {
    return e.map((t) => i.convertIntoTransferKey(t));
  }
  /**
   * checks whether the value is valid (i.e.: can be saved to storage)
   * @param value
   */
  static canBeSavedToStorage(e) {
    return typeof e == "string";
  }
  /**
   * Gets the complete key prefix by concatenating storageID's generalPrefix and the key.
   * @param storageID
   * @param key
   */
  static getKeyPrefix(e, t) {
    return e.generalPrefix + t;
  }
  /**
   * Retrieves the key suffix of the storage id.
   * @param storageID
   */
  static getKeySuffix(e) {
    return e.keySuffix;
  }
  /**
   * @param key
   * @protected
   */
  retrieveItem(e) {
    const t = i.getKeyPrefix(this.senderID, e), s = i.getKeySuffix(this.senderID);
    return S(t, s);
  }
  /**
   * @param key
   * @param value
   * @protected
   */
  saveItem(e, t) {
    if (!i.canBeSavedToStorage(t))
      return;
    const s = i.getKeyPrefix(this.recipientID, e), o = i.getKeySuffix(this.recipientID);
    y(s, o, t);
  }
  /**
   * transfers an item from the sender to the recipient
   * @public
   * @param key
   */
  transferItem(e) {
    e = i.convertIntoTransferKey(e), this.saveItem(e.recipient, this.retrieveItem(e.sender));
  }
  /**
   * transfers items from the sender to the recipient by calling Transfer.transferItem for each key.
   * @public
   * @param keys
   */
  transferItems(e) {
    e = i.convertIntoTransferKeys(e), e.forEach((t) => this.transferItem(t));
  }
}
class Q {
  /**
   * automatically generates a key suffix if the keySuffix parameter is left undefined.
   * @param generalPrefix
   * @param keySuffix
   */
  constructor(e, t) {
    /**
     * the general prefix for all the keys to be retrieved
     * @protected
     */
    n(this, "_generalPrefix");
    /**
     * the key suffix for all the keys to be retrieved
     * @protected
     */
    n(this, "_keySuffix");
    this._generalPrefix = e, this._keySuffix = t ?? $();
  }
  get generalPrefix() {
    return this._generalPrefix;
  }
  set generalPrefix(e) {
    this._generalPrefix = e;
  }
  get keySuffix() {
    return this._keySuffix;
  }
  set keySuffix(e) {
    this._keySuffix = e;
  }
  /**
   * Gets the complete key prefix by concatenating this.generalPrefix and the key.
   * @param key
   */
  getKeyPrefix(e) {
    return this.generalPrefix + e;
  }
  /**
   * Gets the complete key by concatenating this.getKeyPrefix and this.keySuffix.
   * @param key
   */
  getKey(e) {
    return u(this.getKeyPrefix(e), this.keySuffix);
  }
}
export {
  A as HelloWorld,
  J as MyButton,
  X as Retrieve,
  G as Save,
  Q as StorageID,
  i as Transfer,
  u as generateKeyFromPrefixAndSuffix,
  $ as generateKeySuffix,
  q as getItemFromLocalStorage,
  S as getItemFromSessionStorage,
  R as getItemOrDefault,
  z as removeItemFromLocalStorage,
  L as removeItemFromSessionStorage,
  U as setItemIntoLocalStorage,
  y as setItemIntoSessionStorage
};
