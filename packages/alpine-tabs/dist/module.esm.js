// ../../node_modules/@flexilla/tabs/dist/tabs.js
var C = Object.defineProperty;
var P = (a, t, e) => t in a ? C(a, t, { enumerable: true, configurable: true, writable: true, value: e }) : a[t] = e;
var s = (a, t, e) => P(a, typeof t != "symbol" ? t + "" : t, e);
var E = (a, t = document.body) => t.querySelector(a);
var h = (a, t = document.body) => {
  const e = w(a, t);
  return Array.from(e).find((n) => n.parentElement === t);
};
var w = (a, t = document.body) => Array.from(t.querySelectorAll(a));
var M = ({
  newElement: a,
  existingElement: t
}) => {
  if (!(a instanceof HTMLElement) || !(t instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const e = t.parentElement;
  if (e) e.insertBefore(a, t);
  else throw new Error("Existing element must have a parent element.");
};
var g = (a, t) => {
  for (const [e, n] of Object.entries(t))
    a.setAttribute(e, n);
};
var H = (a, t, e) => {
  const n = new CustomEvent(t, { detail: e });
  a.dispatchEvent(n);
};
var S = "true";
var D = "false";
var I = "inactive";
var A = "active";
var $ = "cubic-bezier(.48,1.55,.28,1)";
var N = { className: "", transformDuration: 0, transformEasing: "" };
var O = ({
  activeTabTrigger: a,
  indicatorClassName: t,
  tabList: e
}) => {
  if (!t || t === "") return;
  const n = document.createElement("span");
  g(n, {
    "data-tab-indicator": "",
    "aria-hidden": "true"
  });
  const i = t.split(" ");
  n.classList.add(...i);
  const c = a.parentElement === e ? a : a.parentElement;
  return M({
    newElement: n,
    existingElement: c
  }), n;
};
var x = ({
  triggerElement: a,
  indicator_: t,
  transformDuration: e = 300,
  transformEasing: n = "ease"
}) => {
  t instanceof HTMLElement && t.animate(
    [
      {
        top: t.style.top,
        left: t.style.left,
        width: t.style.width,
        height: t.style.height
      },
      {
        top: `${a.offsetTop}px`,
        left: `${a.offsetLeft}px`,
        width: `${a.offsetWidth}px`,
        height: `${a.offsetHeight}px`
      }
    ],
    {
      fill: "both",
      duration: e,
      easing: n
    }
  );
};
var R = (a, t) => {
  for (const e of t)
    e !== a && (g(e, { "data-state": I, tabindex: "-1" }), e instanceof HTMLAnchorElement && e.setAttribute("aria-selected", "false"));
};
var V = ({ indicatorTransformDuration: a, indicatorTransformEaseing: t, indicator: e, triggerElement: n, tabList: i }) => {
  !(e instanceof HTMLSpanElement) || !(n instanceof HTMLElement) || x({
    triggerElement: n,
    indicator_: e,
    transformDuration: a,
    transformEasing: t
  });
};
var k = (a, t) => {
  for (const e of t)
    e !== a && (g(e, { "data-state": I, "aria-hidden": S }), e.hidden = true);
};
var v = ({ triggerElement: a, tabTriggers: t, tabsPanelContainer: e, showAnimation: n, indicatorTransformDuration: i, indicatorTransformEaseing: c, tabList: l }) => {
  const r = h("[data-tab-panel][data-state=active]", e);
  if (r instanceof HTMLElement && (g(r, { "data-state": "hidden" }), r.hidden = true), !(a instanceof HTMLElement)) return;
  const o = h(`[data-tab-panel]#${a.getAttribute("data-target")}`, e);
  if (!(o instanceof HTMLElement)) return;
  R(a, t), o.hidden = false, g(o, { "data-state": A, "aria-hidden": D }), g(a, { "data-state": A, tabindex: "0" }), a instanceof HTMLAnchorElement && a.setAttribute("aria-selected", "true"), n && n !== "" && o.style.setProperty("--un-tab-show-animation", `${n}`);
  const d = E("[data-tab-indicator]", l);
  x({
    triggerElement: a,
    indicator_: d,
    transformDuration: i,
    transformEasing: c
  });
  const b = h("[data-fx-tabs]", o);
  if (b instanceof HTMLElement) {
    const f = h("[data-tab-list-wrapper]", b) || b, u = h("[data-tab-list]", f), p = u.querySelector("[data-tabs-trigger][data-state=active]"), T = u.querySelector("span[data-tab-indicator]");
    T instanceof HTMLSpanElement && p instanceof HTMLElement && !b.hasAttribute("data-nested-indicator-seteled") && (b.setAttribute("data-nested-indicator-seteled", ""), V({
      indicatorTransformDuration: i,
      indicatorTransformEaseing: c,
      indicator: T,
      triggerElement: p,
      tabList: u
    }));
  }
  return { currentTabPanel: o };
};
var G = (a, t) => {
  const e = t.findIndex(
    (l) => l.getAttribute("data-state") === A
  ), n = a.key === "ArrowUp" || a.key === "ArrowLeft" ? -1 : 1, i = (l) => !t[l].hasAttribute("disabled"), c = (l, r, o) => {
    let d = (l + r + o) % o;
    for (; !i(d); )
      d = (d + r + o) % o;
    return d;
  };
  if (a.key === "ArrowUp" || a.key === "ArrowDown" || a.key === "ArrowLeft" || a.key === "ArrowRight") {
    a.preventDefault();
    const l = c(
      e,
      n,
      t.length
    ), r = t[l];
    r.focus(), r.click();
  }
};
var L = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
  }
  static getInstance(t, e) {
    var n, i;
    return this.initGlobalRegistry(), (i = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
      (c) => c.element === e
    )) == null ? void 0 : i.instance;
  }
  static removeInstance(t, e) {
    this.initGlobalRegistry(), window.$flexillaInstances[t] && (window.$flexillaInstances[t] = window.$flexillaInstances[t].filter(
      (n) => n.element !== e
    ));
  }
};
var m = class m2 {
  /**
   * Tabs Components
   * @param tabs 
   * @param options 
   */
  /**
   * Creates a new Tabs instance.
   * 
   * @param {string | HTMLElement} tabs - The tabs container element or selector.
   * @param {TabsOptions} [options={}] - Configuration options for the tabs component.
   * @param {string} [options.defaultValue] - The initial active tab panel's ID.
   * @param {string} [options.animationOnShow] - Animation class to apply when showing tab panels.
   * @param {IndicatorOptions} [options.indicatorOptions] - Configuration for the tab indicator.
   * @throws {Error} When invalid elements are provided or required elements are missing.
   */
  constructor(t, e = {}) {
    s(this, "tabsElement");
    s(this, "options");
    s(this, "indicatorOptions");
    s(this, "defaultTabValue");
    s(this, "showAnimation");
    s(this, "tabList");
    s(this, "tabPanels");
    s(this, "tabTriggers");
    s(this, "activeTabTrigger");
    s(this, "indicatorClassName");
    s(this, "indicatorTransformEaseing");
    s(this, "indicatorTransformDuration");
    s(this, "panelsContainer");
    s(this, "getDefActivePanelValue", (t2) => {
      const e2 = h("[data-tab-panel][data-state=active]", t2);
      return e2 == null ? void 0 : e2.getAttribute("id");
    });
    s(this, "handleGlobalTabChanges", (t2) => {
      if (t2.ariaSelected === "true" || this.activeTabTrigger === t2) return;
      this.activeTabTrigger = t2;
      const n2 = v({
        triggerElement: t2,
        tabTriggers: this.tabTriggers,
        tabsPanelContainer: this.panelsContainer,
        showAnimation: this.showAnimation,
        indicatorTransformDuration: this.indicatorTransformDuration,
        indicatorTransformEaseing: this.indicatorTransformEaseing,
        tabList: this.tabList
      });
      this.options.onChangeTab && this.options.onChangeTab({
        currentTrigger: t2,
        currentPanel: n2 == null ? void 0 : n2.currentTabPanel
      }), H(this.tabsElement, "change-tab", {
        currentTrigger: t2,
        currentPanel: n2 == null ? void 0 : n2.currentTabPanel
      });
    });
    s(this, "handleTabChanges", (t2) => {
      const e2 = t2.currentTarget;
      t2.preventDefault(), this.handleGlobalTabChanges(e2);
    });
    s(this, "handleKeyEventChanges", (t2) => {
      G(t2, this.tabTriggers);
    });
    s(this, "cleanupSingle", (t2) => {
      t2 instanceof HTMLElement && (t2.removeEventListener("click", this.handleTabChanges), t2.removeEventListener("keydown", this.handleKeyEventChanges));
    });
    s(this, "cleanup", () => {
      if (this.tabsElement) {
        for (const t2 of this.tabTriggers)
          this.cleanupSingle(t2);
        L.removeInstance("tabs", this.tabsElement), this.tabTriggers = [], this.tabPanels = [], this.activeTabTrigger = null, this.tabList = null, this.panelsContainer = null, this.tabsElement = null, this.options = null, this.indicatorOptions = null;
      }
    });
    s(this, "changeTab", (t2) => {
      const e2 = E(`[data-tabs-trigger][data-target='${t2}']`, this.tabList);
      e2 instanceof HTMLElement && this.handleGlobalTabChanges(e2);
    });
    const n = typeof t == "string" ? E(t) : t;
    if (!(n instanceof HTMLElement))
      throw new Error("Please Provide a valid HTMLElement for the tabs component");
    this.tabsElement = n;
    const i = L.getInstance("tabs", this.tabsElement);
    if (i)
      return i;
    this.panelsContainer = h("[data-panels-container]", this.tabsElement) || this.tabsElement, this.options = e, this.indicatorOptions = this.options.indicatorOptions || N;
    const { defaultValue: c, animationOnShow: l } = this.options;
    this.defaultTabValue = c || this.tabsElement.dataset.defaultValue || this.getDefActivePanelValue(this.panelsContainer) || "", this.showAnimation = l || this.tabsElement.dataset.showAnimation || "";
    const r = h("[data-tab-list-wrapper]", this.tabsElement) || this.tabsElement;
    this.tabList = h("[data-tab-list]", r);
    const o = w("[data-tab-panel]", this.panelsContainer);
    if (this.tabPanels = o.filter((T) => T.parentElement === this.panelsContainer), !(this.tabList instanceof HTMLElement))
      throw new Error("TabList Element is required, tabList must have a data-tab-list attribute and be direct descendant of the tabs or must be wrapped inside another element with data-tab-list-wrapper");
    if (!this.tabPanels.every((T) => T instanceof HTMLElement))
      throw new Error("TabPanels Element are required, tabPanels must have a data-tab-panel attribute and be direct descendant of the tabs or the panels container (data-panels-container)");
    if (this.tabTriggers = w("[data-tabs-trigger]", this.tabList), this.tabTriggers.length <= 0)
      throw new Error("No trigger found, Tab component must have at least one trigger");
    const b = E("[data-tabs-trigger][data-state=active]", this.tabList);
    this.activeTabTrigger = E(`[data-tabs-trigger][data-target='${this.defaultTabValue}']`, this.tabList) || b || this.tabTriggers[0];
    const { transformEasing: f, transformDuration: u, className: p } = this.indicatorOptions;
    this.indicatorClassName = p || this.tabsElement.getAttribute("data-indicator-class-name") || "", this.indicatorTransformEaseing = f || this.tabsElement.dataset.indicatorTransformEasing || $, this.indicatorTransformDuration = u || parseInt(this.tabsElement.dataset.indicatorTransformDuration || "") || 400, this.initTabs(), L.register("tabs", this.tabsElement, this);
  }
  initTabs() {
    this.tabsElement.hasAttribute("data-fx-tabs") || this.tabsElement.setAttribute("data-fx-tabs", ""), this.initializeTab(
      {
        tabTriggers: this.tabTriggers,
        tabPanels: this.tabPanels,
        tabsPanelContainer: this.panelsContainer,
        showAnimation: this.showAnimation,
        indicatorTransformDuration: this.indicatorTransformDuration,
        indicatorTransformEaseing: this.indicatorTransformEaseing,
        activeTabTrigger: this.activeTabTrigger,
        indicatorClassName: this.indicatorClassName,
        tabList: this.tabList
      }
    );
  }
  attachTriggerEvents(t) {
    t instanceof HTMLElement && (t.addEventListener("click", this.handleTabChanges), t.addEventListener("keydown", this.handleKeyEventChanges));
  }
  initializeTab({ tabTriggers: t, tabPanels: e, tabsPanelContainer: n, showAnimation: i, indicatorTransformDuration: c, indicatorTransformEaseing: l, activeTabTrigger: r, indicatorClassName: o, tabList: d }) {
    O({
      activeTabTrigger: r,
      indicatorClassName: o,
      tabList: d
    });
    for (const u of t)
      this.attachTriggerEvents(u);
    const b = h(`[data-tab-panel]#${r.getAttribute("data-target")}`, n);
    k(b, e);
    const f = v({
      triggerElement: r,
      tabTriggers: t,
      tabsPanelContainer: n,
      showAnimation: i,
      indicatorTransformDuration: c,
      indicatorTransformEaseing: l,
      tabList: d
    });
    this.options.onChangeTab && this.options.onChangeTab({
      currentTrigger: r,
      currentPanel: f == null ? void 0 : f.currentTabPanel
    });
  }
};
s(m, "autoInit", (t = "[data-fx-tabs]") => {
  const e = w(t);
  for (const n of e) new m(n);
}), /**
* Creates and initializes a new Tabs instance.
* 
* @param {string | HTMLElement} tabs - The tabs container element or selector.
* @param {TabsOptions} options - Configuration options for the tabs component.
* @returns {Tabs} A new Tabs instance.
* @example
* ```js
* const tabs = Tabs.init('#my-tabs', {
*   defaultValue: 'tab1',
*   indicatorOptions: {
*     className: 'custom-indicator'
*   }
* });
* ```
*/
s(m, "init", (t, e) => new m(t, e));
var y = m;

// src/index.js
function Tabs(Alpine) {
  Alpine.directive("tabs", (el, {}, { cleanup }) => {
    const tabs_ = new y(el);
    cleanup(() => {
      tabs_.cleanup();
    });
  });
}
var src_default = Tabs;

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};
