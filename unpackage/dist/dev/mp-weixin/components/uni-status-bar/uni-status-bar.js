"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "uni-status-bar",
  setup(__props) {
    let statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight + "px";
    const barHeight = common_vendor.ref(statusBarHeight);
    return (_ctx, _cache) => {
      return {
        a: barHeight.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ac0d4a5"], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/components/uni-status-bar/uni-status-bar.vue"]]);
wx.createPage(MiniProgramPage);
