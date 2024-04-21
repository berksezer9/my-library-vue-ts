(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("html{scroll-behavior:smooth}body{color:#222;line-height:1.5;background-color:#fcfcfc}h1{font-size:2.75em}h2{font-size:2.25em}h3{font-size:2em}h4{font-size:1.625em}h5{font-size:1.25em}h6{font-size:1.125em}p{font-size:1em;margin-bottom:10px}@media screen and (max-width: 767px){h1{font-size:2em}h2{font-size:1.875em}h3{font-size:1.75em}h4{font-size:1.5em}h5{font-size:1.375em}}img,svg{width:100%;height:auto}.main{display:flex;flex-direction:column}.wrapper{scroll-behavior:smooth;flex:1 0 0;position:relative}.container{width:calc(100% - 30px);margin:0 auto}.read-the-docs[data-v-8fe7e3eb]{color:#888}button[data-v-7957e8be]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-7957e8be]:hover{background-color:#535bf2}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as u, ref as m, openBlock as p, createElementBlock as d, Fragment as f, createElementVNode as t, toDisplayString as a, pushScopeId as h, popScopeId as v, createTextVNode as n, reactive as y, normalizeClass as b, unref as _, renderSlot as g } from "vue";
const c = (e) => (h("data-v-8fe7e3eb"), e = e(), v(), e), k = { class: "card" }, V = /* @__PURE__ */ c(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ n(" Edit "),
  /* @__PURE__ */ t("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ n(" to test HMR ")
], -1)), x = /* @__PURE__ */ c(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ n(" Check out "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ n(", the official Vue + Vite starter ")
], -1)), B = /* @__PURE__ */ c(() => /* @__PURE__ */ t("p", null, [
  /* @__PURE__ */ n(" Install "),
  /* @__PURE__ */ t("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ n(" in your IDE for a better DX ")
], -1)), I = /* @__PURE__ */ c(() => /* @__PURE__ */ t("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), H = /* @__PURE__ */ u({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    const s = m(0);
    return (o, l) => (p(), d(f, null, [
      t("h1", null, a(o.msg), 1),
      t("div", k, [
        t("button", {
          type: "button",
          onClick: l[0] || (l[0] = (r) => s.value++)
        }, "count is " + a(s.value), 1),
        V
      ]),
      x,
      B,
      I
    ], 64));
  }
});
const i = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [l, r] of s)
    o[l] = r;
  return o;
}, C = /* @__PURE__ */ i(H, [["__scopeId", "data-v-8fe7e3eb"]]), M = /* @__PURE__ */ u({
  __name: "MyButton",
  props: {
    primary: { type: Boolean, default: !1 },
    text: {}
  },
  setup(e) {
    const s = e, { primary: o, text: l } = y(s);
    return (r, W) => (p(), d("button", {
      class: b(["btn", { primary: _(o) }])
    }, [
      g(r.$slots, "default", {}, void 0, !0),
      n(" " + a(_(o)) + " " + a(_(l)), 1)
    ], 2));
  }
});
const S = /* @__PURE__ */ i(M, [["__scopeId", "data-v-7957e8be"]]), D = {
  install: (e) => {
    e.component("HelloWorld", C), e.component("MyButton", S);
  }
};
export {
  C as HelloWorld,
  S as MyButton,
  D as default
};
