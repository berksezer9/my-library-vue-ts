(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var p = Object.defineProperty;
var S = (s, e, t) => e in s ? p(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var n = (s, e, t) => (S(s, typeof e != "symbol" ? e + "" : e, t), t);
import { defineComponent as h, ref as y, openBlock as _, createElementBlock as I, Fragment as x, createElementVNode as i, toDisplayString as m, pushScopeId as v, popScopeId as k, createTextVNode as a, reactive as P, normalizeClass as D, unref as g, renderSlot as b } from "vue";
const f = (s) => (v("data-v-8fe7e3eb"), s = s(), k(), s), F = { class: "card" }, V = /* @__PURE__ */ f(() => /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ a(" Edit "),
  /* @__PURE__ */ i("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ a(" to test HMR ")
], -1)), w = /* @__PURE__ */ f(() => /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ a(" Check out "),
  /* @__PURE__ */ i("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ a(", the official Vue + Vite starter ")
], -1)), K = /* @__PURE__ */ f(() => /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ a(" Install "),
  /* @__PURE__ */ i("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ a(" in your IDE for a better DX ")
], -1)), B = /* @__PURE__ */ f(() => /* @__PURE__ */ i("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), E = /* @__PURE__ */ h({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(s) {
    const e = y(0);
    return (t, r) => (_(), I(x, null, [
      i("h1", null, m(t.msg), 1),
      i("div", F, [
        i("button", {
          type: "button",
          onClick: r[0] || (r[0] = (o) => e.value++)
        }, "count is " + m(e.value), 1),
        V
      ]),
      w,
      K,
      B
    ], 64));
  }
});
const d = (s, e) => {
  const t = s.__vccOpts || s;
  for (const [r, o] of e)
    t[r] = o;
  return t;
}, j = /* @__PURE__ */ d(E, [["__scopeId", "data-v-8fe7e3eb"]]), M = /* @__PURE__ */ h({
  __name: "MyButton",
  props: {
    primary: { type: Boolean, default: !1 },
    text: {}
  },
  setup(s) {
    const e = s, { primary: t, text: r } = P(e);
    return (o, L) => (_(), I("button", {
      class: D(["btn", { primary: g(t) }])
    }, [
      b(o.$slots, "default", {}, void 0, !0),
      a(" " + m(g(t)) + " " + m(g(r)), 1)
    ], 2));
  }
});
const A = /* @__PURE__ */ d(M, [["__scopeId", "data-v-7957e8be"]]), O = () => typeof Storage < "u", c = () => {
  if (!O())
    throw new Error("The browser does not support storage.");
}, l = (s, e) => s + e, T = () => {
  const s = Math.floor(Date.now() / 1e3), e = Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
  return `-${s}-${e}`;
}, C = (s, e, t) => {
  c(), sessionStorage.setItem(l(s, e), t);
}, H = (s, e) => (c(), sessionStorage.getItem(l(s, e))), $ = (s, e) => (c(), sessionStorage.removeItem(l(s, e))), J = (s, e, t) => s.getItemOrDefault(e, t), R = (s, e, t) => {
  c(), localStorage.setItem(l(s, e), t);
}, U = (s, e) => (c(), localStorage.getItem(l(s, e))), q = (s, e) => (c(), localStorage.removeItem(l(s, e)));
class u {
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
class z extends u {
  /**
   * automatically retrieves values for the keys from session storage
   * @param keys
   * @param storageID
   */
  constructor(t, r) {
    super(r);
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
    return this.keys.forEach((r) => {
      const o = H(this.getKeyPrefix(r), this.keySuffix);
      o !== null && (t[r] = JSON.parse(o));
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
  getItemOrDefault(t, r) {
    const o = this.items[t];
    return o !== void 0 ? o : r;
  }
}
class X extends u {
  /**
   * automatically saves items to storage
   * @param items
   * @param storageID
   */
  constructor(t, r) {
    super(r);
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
  saveItemToItems(t, r) {
    u.isItemValid(r) && (this.items[t] = r);
  }
  /**
   * JSON-encodes the value and saves it to storage.
   * @param key (the key of the item)
   * @param value (the value of the item)
   */
  saveItemToStorage(t, r) {
    u.isItemValid(r) && C(this.getKeyPrefix(t), this.keySuffix, JSON.stringify(r));
  }
  /**
   * saves the item to the items property and storage.
   * @param key (the key of the item)
   * @param value (the value of the item)
   */
  saveItem(t, r) {
    u.isItemValid(r) && (this.saveItemToItems(t, r), this.saveItemToStorage(t, r));
  }
  /**
   * saves the items to the items property and storage using Save.saveItem.
   */
  saveItems(t) {
    Object.keys(t).forEach((r) => this.saveItem(r, this.items[r]));
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
    $(this.getKeyPrefix(t), this.keySuffix);
  }
  /**
   * deletes the item from the items property and storage.
   * @param key
   */
  deleteItem(t) {
    this.deleteItemFromItems(t), this.deleteItemFromStorage(t);
  }
}
class G {
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
    this._generalPrefix = e, this._keySuffix = t ?? T();
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
    return l(this.getKeyPrefix(e), this.keySuffix);
  }
}
export {
  j as HelloWorld,
  A as MyButton,
  z as Retrieve,
  X as Save,
  G as StorageID,
  l as generateKeyFromPrefixAndSuffix,
  T as generateKeySuffix,
  U as getItemFromLocalStorage,
  H as getItemFromSessionStorage,
  J as getItemOrDefault,
  q as removeItemFromLocalStorage,
  $ as removeItemFromSessionStorage,
  R as setItemIntoLocalStorage,
  C as setItemIntoSessionStorage
};
