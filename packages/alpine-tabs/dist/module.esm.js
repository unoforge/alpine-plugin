// ../../node_modules/@flexilla/tabs/dist/tabs.js
var x = Object.defineProperty;
var P = (a, t, e) => t in a ? x(a, t, { enumerable: true, configurable: true, writable: true, value: e }) : a[t] = e;
var s = (a, t, e) => P(a, typeof t != "symbol" ? t + "" : t, e);
var g = (a, t = document.body) => t.querySelector(a);
var d = (a, t = document.body) => {
  const e = T(a, t);
  return Array.from(e).find((n) => n.parentElement === t);
};
var T = (a, t = document.body) => Array.from(t.querySelectorAll(a));
var M = ({
  newElement: a,
  existingElement: t
}) => {
  if (!(a instanceof HTMLElement) || !(t instanceof HTMLElement))
    throw new Error("Both parameters must be valid HTML elements.");
  const e = t.parentElement;
  if (e)
    e.insertBefore(a, t);
  else
    throw new Error("Existing element must have a parent element.");
};
var p = (a, t) => {
  for (const [e, n] of Object.entries(t))
    a.setAttribute(e, n);
};
var H = (a, t, e) => {
  const n = new CustomEvent(t, { detail: e });
  a.dispatchEvent(n);
};
var O = ({
  container: a,
  attributeToWatch: t,
  onChildAdded: e
}) => {
  const n = new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList" && Array.from(l.addedNodes).some(
        (r) => r instanceof HTMLElement && r.hasAttribute(t)
      )) {
        e();
        break;
      }
  });
  return n.observe(a, {
    childList: true
  }), () => {
    n.disconnect();
  };
};
var S = "true";
var D = "false";
var I = "inactive";
var L = "active";
var $ = "cubic-bezier(.48,1.55,.28,1)";
var N = { className: "", transformDuration: 0, transformEasing: "" };
var R = ({
  activeTabTrigger: a,
  indicatorClassName: t,
  tabList: e
}) => {
  if (!t || t === "")
    return;
  const n = document.createElement("span");
  p(n, {
    "data-tab-indicator": "",
    "aria-hidden": "true"
  });
  const i = t.split(" ");
  n.classList.add(...i);
  const l = a.parentElement === e ? a : a.parentElement;
  return M({
    newElement: n,
    existingElement: l
  }), n;
};
var C = ({
  triggerElement: a,
  indicator_: t,
  transformDuration: e = 200,
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
var V = (a, t) => {
  for (const e of t)
    e !== a && (p(e, { "data-state": I, tabindex: "-1" }), e instanceof HTMLAnchorElement && e.setAttribute("aria-selected", "false"));
};
var k = ({ indicatorTransformDuration: a, indicatorTransformEaseing: t, indicator: e, triggerElement: n }) => {
  !(e instanceof HTMLSpanElement) || !(n instanceof HTMLElement) || C({
    triggerElement: n,
    indicator_: e,
    transformDuration: a,
    transformEasing: t
  });
};
var G = (a, t) => {
  for (const e of t)
    e !== a && (p(e, { "data-state": I, "aria-hidden": S }), e.hidden = true);
};
var v = ({ triggerElement: a, tabTriggers: t, tabsPanelContainer: e, showAnimation: n, indicatorTransformDuration: i, indicatorTransformEaseing: l, tabList: r }) => {
  const o = d("[data-tab-panel][data-state=active]", e);
  if (o instanceof HTMLElement && (p(o, { "data-state": "hidden" }), o.hidden = true), !(a instanceof HTMLElement))
    return;
  const c = d(`[data-tab-panel]#${a.getAttribute("data-target")}`, e);
  if (!(c instanceof HTMLElement))
    return;
  V(a, t), c.hidden = false, p(c, { "data-state": L, "aria-hidden": D }), p(a, { "data-state": L, tabindex: "0" }), a instanceof HTMLAnchorElement && a.setAttribute("aria-selected", "true"), n && n !== "" && c.style.setProperty("--un-tab-show-animation", `${n}`);
  const h = g("[data-tab-indicator]", r);
  C({
    triggerElement: a,
    indicator_: h,
    transformDuration: i,
    transformEasing: l
  });
  const b = d("[data-fx-tabs]", c);
  if (b instanceof HTMLElement) {
    const f = d("[data-tab-list-wrapper]", b) || b, u = d("[data-tab-list]", f), E = u.querySelector("[data-tabs-trigger][data-state=active]"), A = u.querySelector("span[data-tab-indicator]");
    A instanceof HTMLSpanElement && E instanceof HTMLElement && !b.hasAttribute("data-nested-indicator-seteled") && (b.setAttribute("data-nested-indicator-seteled", ""), k({
      indicatorTransformDuration: i,
      indicatorTransformEaseing: l,
      indicator: A,
      triggerElement: E
    }));
  }
  return { currentTabPanel: c };
};
var q = (a, t) => {
  const e = t.findIndex(
    (r) => r.getAttribute("data-state") === L
  ), n = a.key === "ArrowUp" || a.key === "ArrowLeft" ? -1 : 1, i = (r) => !t[r].hasAttribute("disabled"), l = (r, o, c) => {
    let h = (r + o + c) % c;
    for (; !i(h); )
      h = (h + o + c) % c;
    return h;
  };
  if (a.key === "ArrowUp" || a.key === "ArrowDown" || a.key === "ArrowLeft" || a.key === "ArrowRight") {
    a.preventDefault();
    const r = l(
      e,
      n,
      t.length
    ), o = t[r];
    o.focus(), o.click();
  }
};
var w = class {
  static initGlobalRegistry() {
    window.$flexillaInstances || (window.$flexillaInstances = {});
  }
  static register(t, e, n) {
    return this.initGlobalRegistry(), window.$flexillaInstances[t] || (window.$flexillaInstances[t] = []), this.getInstance(t, e) || (window.$flexillaInstances[t].push({ element: e, instance: n }), n);
  }
  static getInstance(t, e) {
    var n, i;
    return this.initGlobalRegistry(), (i = (n = window.$flexillaInstances[t]) == null ? void 0 : n.find(
      (l) => l.element === e
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
    s(this, "cleanupObserver", null);
    s(this, "getDefActivePanelValue", (t2) => {
      const e2 = d("[data-tab-panel][data-state=active]", t2);
      return e2 == null ? void 0 : e2.getAttribute("id");
    });
    s(this, "handleGlobalTabChanges", (t2) => {
      if (t2.ariaSelected === "true" || this.activeTabTrigger === t2)
        return;
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
      q(t2, this.tabTriggers);
    });
    s(this, "cleanupSingle", (t2) => {
      t2 instanceof HTMLElement && (t2.removeEventListener("click", this.handleTabChanges), t2.removeEventListener("keydown", this.handleKeyEventChanges));
    });
    s(this, "cleanup", () => {
      if (this.tabsElement) {
        for (const t2 of this.tabTriggers)
          this.cleanupSingle(t2);
        this.cleanupObserver && (this.cleanupObserver(), this.cleanupObserver = null), w.removeInstance("tabs", this.tabsElement), this.tabTriggers = [], this.tabPanels = [];
      }
    });
    s(this, "reload", () => {
      this.cleanup();
      const t2 = d("[data-tab-list-wrapper]", this.tabsElement) || this.tabsElement;
      this.tabList = d("[data-tab-list]", t2);
      const e2 = T("[data-tab-panel]", this.panelsContainer);
      this.tabPanels = e2.filter((n2) => n2.parentElement === this.panelsContainer), this.validateTabElements(this.tabList, this.tabPanels), this.tabTriggers = T("[data-tabs-trigger]", this.tabList), this.initTabs();
    });
    s(this, "changeTab", (t2) => {
      const e2 = g(`[data-tabs-trigger][data-target='${t2}']`, this.tabList);
      e2 instanceof HTMLElement && this.handleGlobalTabChanges(e2);
    });
    const n = typeof t == "string" ? g(t) : t;
    if (!(n instanceof HTMLElement))
      throw new Error("Please Provide a valid HTMLElement for the tabs component");
    this.tabsElement = n;
    const i = w.getInstance("tabs", this.tabsElement);
    if (i)
      return i;
    this.panelsContainer = d("[data-panels-container]", this.tabsElement) || this.tabsElement, this.options = e, this.indicatorOptions = this.options.indicatorOptions || N;
    const { defaultValue: l, animationOnShow: r } = this.options;
    this.defaultTabValue = l || this.tabsElement.dataset.defaultValue || this.getDefActivePanelValue(this.panelsContainer) || "", this.showAnimation = r || this.tabsElement.dataset.showAnimation || "";
    const o = d("[data-tab-list-wrapper]", this.tabsElement) || this.tabsElement;
    this.tabList = d("[data-tab-list]", o);
    const c = T("[data-tab-panel]", this.panelsContainer);
    if (this.tabPanels = c.filter((E) => E.parentElement === this.panelsContainer), this.validateTabElements(this.tabList, this.tabPanels), this.tabTriggers = T("[data-tabs-trigger]", this.tabList), this.tabTriggers.length <= 0)
      throw new Error("No trigger found, Tab component must have at least one trigger");
    const h = g("[data-tabs-trigger][data-state=active]", this.tabList);
    this.activeTabTrigger = g(`[data-tabs-trigger][data-target='${this.defaultTabValue}']`, this.tabList) || h || this.tabTriggers[0];
    const { transformEasing: b, transformDuration: f, className: u } = this.indicatorOptions;
    this.indicatorClassName = u || this.tabsElement.getAttribute("data-indicator-class-name") || "", this.indicatorTransformEaseing = b || this.tabsElement.dataset.indicatorTransformEasing || $, this.indicatorTransformDuration = f || parseInt(this.tabsElement.dataset.indicatorTransformDuration || "") || 400, this.initTabs();
  }
  validateTabElements(t, e) {
    if (!(t instanceof HTMLElement))
      throw new Error("TabList Element is required, tabList must have a data-tab-list attribute and be direct descendant of the tabs or must be wrapped inside another element with data-tab-list-wrapper");
    if (!e.every((i) => i instanceof HTMLElement))
      throw new Error("TabPanels Element are required, tabPanels must have a data-tab-panel attribute and be direct descendant of the tabs or the panels container (data-panels-container)");
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
    ), this.cleanupObserver = O({
      container: this.panelsContainer,
      attributeToWatch: "data-tab-panel",
      onChildAdded: this.reload
    }), w.register("tabs", this.tabsElement, this);
  }
  attachTriggerEvents(t) {
    t instanceof HTMLElement && (t.addEventListener("click", this.handleTabChanges), t.addEventListener("keydown", this.handleKeyEventChanges));
  }
  initializeTab({ tabTriggers: t, tabPanels: e, tabsPanelContainer: n, showAnimation: i, indicatorTransformDuration: l, indicatorTransformEaseing: r, activeTabTrigger: o, indicatorClassName: c, tabList: h }) {
    R({
      activeTabTrigger: o,
      indicatorClassName: c,
      tabList: h
    });
    for (const u of t)
      this.attachTriggerEvents(u);
    const b = d(`[data-tab-panel]#${o.getAttribute("data-target")}`, n);
    G(b, e);
    const f = v({
      triggerElement: o,
      tabTriggers: t,
      tabsPanelContainer: n,
      showAnimation: i,
      indicatorTransformDuration: l,
      indicatorTransformEaseing: r,
      tabList: h
    });
    this.options.onChangeTab && this.options.onChangeTab({
      currentTrigger: o,
      currentPanel: f == null ? void 0 : f.currentTabPanel
    });
  }
};
s(m, "autoInit", (t = "[data-fx-tabs]") => {
  const e = T(t);
  for (const n of e)
    new m(n);
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
