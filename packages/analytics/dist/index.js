"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  analytics: () => analytics,
  initializeAnalytics: () => initializeAnalytics,
  trackConversion: () => trackConversion,
  trackEvent: () => trackEvent,
  trackPageView: () => trackPageView
});
module.exports = __toCommonJS(index_exports);
var import_react_ga4 = __toESM(require("react-ga4"));
var Analytics = class {
  constructor() {
    this.config = {};
    this.initialized = false;
  }
  /**
   * Initialize analytics with configuration
   */
  initialize(config) {
    this.config = config;
    if (config.enabled === false) {
      console.log("[Analytics] Analytics disabled");
      return;
    }
    if (config.googleAnalyticsId) {
      import_react_ga4.default.initialize(config.googleAnalyticsId, {
        gaOptions: {
          anonymizeIp: true
        }
      });
      console.log("[Analytics] Google Analytics initialized:", config.googleAnalyticsId);
    }
    if (config.facebookPixelId && typeof window !== "undefined") {
      this.initializeFacebookPixel(config.facebookPixelId);
    }
    if (config.twitterPixelId && typeof window !== "undefined") {
      this.initializeTwitterPixel(config.twitterPixelId);
    }
    this.initialized = true;
  }
  /**
   * Track page view
   */
  pageView(params) {
    if (!this.initialized || this.config.enabled === false) return;
    if (this.config.googleAnalyticsId) {
      import_react_ga4.default.send({ hitType: "pageview", page: params.path, title: params.title });
    }
    if (this.config.facebookPixelId && typeof window !== "undefined") {
      ;
      window.fbq?.("track", "PageView");
    }
    if (this.config.twitterPixelId && typeof window !== "undefined") {
      ;
      window.twq?.("track", "PageView");
    }
    console.log("[Analytics] Page view:", params.path);
  }
  /**
   * Track custom event
   */
  trackEvent(params) {
    if (!this.initialized || this.config.enabled === false) return;
    if (this.config.googleAnalyticsId) {
      import_react_ga4.default.event({
        category: params.category,
        action: params.action,
        label: params.label,
        value: params.value,
        nonInteraction: params.nonInteraction
      });
    }
    if (this.config.facebookPixelId && typeof window !== "undefined") {
      ;
      window.fbq?.("trackCustom", params.action, {
        category: params.category,
        label: params.label,
        value: params.value
      });
    }
    console.log("[Analytics] Event:", params);
  }
  /**
   * Track conversion event
   */
  trackConversion(event) {
    if (!this.initialized || this.config.enabled === false) return;
    const { type, value, currency = "USD", metadata } = event;
    if (this.config.googleAnalyticsId) {
      import_react_ga4.default.event({
        category: "Conversion",
        action: type,
        label: metadata ? JSON.stringify(metadata) : void 0,
        value
      });
    }
    if (this.config.facebookPixelId && typeof window !== "undefined") {
      const fbEventMap = {
        signup: "CompleteRegistration",
        login: "Login",
        trade: "Purchase",
        deposit: "AddPaymentInfo",
        lead: "Lead"
      };
      const fbEvent = fbEventMap[type] || type;
      window.fbq?.("track", fbEvent, {
        value,
        currency,
        ...metadata
      });
    }
    if (this.config.twitterPixelId && typeof window !== "undefined") {
      const twEventMap = {
        signup: "tw-signup",
        login: "tw-login",
        trade: "tw-purchase",
        deposit: "tw-deposit",
        lead: "tw-lead"
      };
      const twEvent = twEventMap[type];
      if (twEvent) {
        ;
        window.twq?.("event", twEvent, {
          value: value?.toString(),
          currency,
          ...metadata
        });
      }
    }
    console.log("[Analytics] Conversion:", type, value, metadata);
  }
  /**
   * Initialize Facebook Pixel
   */
  initializeFacebookPixel(pixelId) {
    if (typeof window === "undefined") return;
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
    console.log("[Analytics] Facebook Pixel initialized:", pixelId);
  }
  /**
   * Initialize Twitter Pixel
   */
  initializeTwitterPixel(pixelId) {
    if (typeof window === "undefined") return;
    (function(e, t, n, s, u, a) {
      e.twq || (s = e.twq = function() {
        s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
      }, s.version = "1.1", s.queue = [], u = t.createElement(n), u.async = true, u.src = "https://static.ads-twitter.com/uwt.js", a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
    })(window, document, "script");
    window.twq("config", pixelId);
    console.log("[Analytics] Twitter Pixel initialized:", pixelId);
  }
};
var analytics = new Analytics();
var initializeAnalytics = (config) => analytics.initialize(config);
var trackPageView = (params) => analytics.pageView(params);
var trackEvent = (params) => analytics.trackEvent(params);
var trackConversion = (event) => analytics.trackConversion(event);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  analytics,
  initializeAnalytics,
  trackConversion,
  trackEvent,
  trackPageView
});
