if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const ON_READY = "onReady";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    __name: "index",
    setup(__props) {
      const courses = vue.reactive([
        {
          courseId: 1,
          courseClass: "软件2242 Web2班",
          courseNo: "2942577",
          courseName: "后端工程开发",
          courseCover: "/static/images/sb.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 2,
          courseClass: "软件2242 Web2班",
          courseNo: "9488275",
          courseName: "前端工程开发",
          courseCover: "/static/images/vue.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 3,
          courseClass: "软件2242 Web2班",
          courseNo: "8175074",
          courseName: "Web应用开发",
          courseCover: "/static/images/web.png",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        },
        {
          courseId: 4,
          courseClass: "软件2216",
          courseNo: "2942577",
          courseName: "Java程序设计",
          courseCover: "/static/images/java.jpg",
          courseTeacher: {
            name: "许莫淇",
            avatar: "/static/images/mqxu.jpg"
          },
          semester: "2022-2-23-2",
          finished: false,
          show: false
        }
      ]);
      let navBarHeight = vue.ref(Number);
      let screenWidth = vue.ref(Number);
      vue.ref(Number);
      onReady(() => {
        formatAppLog("log", "at pages/index/index.vue:196", "APP 页面初始化");
        screenWidth = uni.getSystemInfoSync().screenWidth;
        formatAppLog("log", "at pages/index/index.vue:198", "屏幕宽度" + screenWidth);
        let info = uni.createSelectorQuery().select("#nav-bar");
        info.boundingClientRect((data) => {
          formatAppLog("log", "at pages/index/index.vue:202", "导航高度" + data.height);
          navBarHeight = data.height + 40;
        }).exec();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", null, [
              vue.createCommentVNode(" 自定义状态栏 "),
              vue.createCommentVNode(" 		<uni-status-bar>\r\n		</uni-status-bar> "),
              vue.createCommentVNode(" 条件编译-导航栏 "),
              vue.createElementVNode(
                "view",
                {
                  class: "f-between pb-1 bg-light",
                  id: "nav-bar",
                  style: vue.normalizeStyle({ width: vue.unref(screenWidth) + "px", height: vue.unref(navBarHeight) + "px" })
                },
                [
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode("text", { class: "text-info font-weight-bold ml-1 label" }, "我创建的"),
                    vue.createElementVNode("text", { class: "text-dark font-weight-bold mx-2" }, "我加入的"),
                    vue.createElementVNode("text", { class: "text-dark font-weight-bold" }, "我共建的"),
                    vue.createElementVNode("text", { class: "iconfont icon-Plus-Light text-info" }),
                    vue.createElementVNode("text", { class: "iconfont icon-Scan-Light mx-2 text-info" })
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createCommentVNode(" 搜索框 "),
              vue.createElementVNode("view", { class: "flex my-2 px-2" }, [
                vue.createElementVNode("view", { class: "position-relative flex-5" }, [
                  vue.createElementVNode("view", { class: "search-icon text-light-muted" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-Search-Light" })
                  ]),
                  vue.createElementVNode("input", {
                    type: "text",
                    placeholder: "搜索",
                    class: "font-md search-box flex-1"
                  })
                ]),
                vue.createElementVNode("text", { class: "flex-1 text-info font-weight-bold f-center" }, "调序")
              ])
            ]),
            vue.createCommentVNode(" 主体部分 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(courses, (course, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: course.courseId,
                  index,
                  class: "bg-white mb-2 border-bottom"
                }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text-dark h4 font-weight-bold p-2" },
                    vue.toDisplayString(course.courseName),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "flex px-2" }, [
                    vue.createElementVNode("view", { class: "flex-1" }, [
                      vue.createElementVNode("image", {
                        src: course.courseCover,
                        class: "thumbnail"
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "flex-4 ml-2" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(course.courseClass),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "mt-1 font-sm" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "text-muted mr-2" },
                          vue.toDisplayString(course.semester),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "text-info" },
                          vue.toDisplayString(course.courseNo),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "flex-1 text-right" }, [
                      vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted" })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "p-2 f-around" }, [
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-Edit-Light" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "签到")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-Work-Light" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课堂")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-Document-Light" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "课件")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-Category-Light" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "活动")
                    ]),
                    vue.createElementVNode("view", null, [
                      vue.createElementVNode("view", { class: "iconfont icon-Voice-Light text-info" }),
                      vue.createElementVNode("view", { class: "font-sm text-muted mt-1" }, "语音")
                    ])
                  ])
                ], 8, ["index"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/pages/index/index.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 功能区开始 "),
      vue.createElementVNode("view", {
        class: "bg-white mb-5",
        style: { "color": "blue" }
      }, [
        vue.createElementVNode("view", { class: "border p-3" }, [
          vue.createElementVNode("text", { class: "iconfont icon-a-3User-Light pl-3" }),
          vue.createElementVNode("text", {
            class: "text-dark pr-max",
            style: { "padding-right": "430rpx" }
          }, "课程圈"),
          vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
        ]),
        vue.createElementVNode("view", { class: "border-bottom p-3" }, [
          vue.createElementVNode("text", { class: "iconfont icon-Video-Light pl-3" }),
          vue.createElementVNode("text", {
            class: "text-dark pr-min",
            style: { "padding-right": "430rpx" }
          }, "公开课"),
          vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
        ])
      ]),
      vue.createElementVNode("view", {
        class: "bg-white medal",
        style: { "color": "blue" }
      }, [
        vue.createElementVNode("view", { class: "border-bottom p-3" }, [
          vue.createElementVNode("text", { class: "iconfont icon-Edit-Light pl-3" }),
          vue.createElementVNode("text", {
            class: "text-dark pr-more",
            style: { "padding-right": "430rpx" }
          }, "云教材"),
          vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
        ]),
        vue.createElementVNode("view", { class: "border-bottom p-3" }, [
          vue.createElementVNode("text", { class: "iconfont icon-Document-Light pl-3" }),
          vue.createElementVNode("text", {
            class: "text-dark pr-more",
            style: { "padding-right": "400rpx" }
          }, "书香中国"),
          vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
        ])
      ]),
      vue.createCommentVNode(" 功能区结束 ")
    ]);
  }
  const PagesFindFind = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/pages/find/find.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 自定义状态栏 "),
        vue.createCommentVNode(" 	<uni-status-bar>\r\n	</uni-status-bar> "),
        vue.createCommentVNode(" 用户区开始 "),
        vue.createElementVNode("view", { class: "p-3 bg-white border-bottom" }, [
          vue.createElementVNode("image", {
            src: "/static/logo.png",
            class: "thumbnail"
          }),
          vue.createElementVNode("view", { class: "username" }, [
            vue.createElementVNode("text", { class: "text-dark pr-usr" }, "用户名"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ])
        ]),
        vue.createCommentVNode(" 用户区结束 "),
        vue.createCommentVNode(" 数值区开始 "),
        vue.createElementVNode("view", { class: "p-2 f-around bg-white mb-5" }, [
          vue.createElementVNode("view", { class: "border-right value-box pr-3" }, [
            vue.createElementVNode("view", { class: "font text-muted mt-1 pl-3 blue" }, "11"),
            vue.createElementVNode("view", { class: "font text-muted mt-1 h4" }, "经验值")
          ]),
          vue.createElementVNode("view", { class: "border-right pr-5" }, [
            vue.createElementVNode("view", { class: "font text-muted mt-1 pl-4 blue" }, "0"),
            vue.createElementVNode("view", { class: "font text-muted mt-1 h4" }, "魅力值")
          ]),
          vue.createElementVNode("view", { class: "border-right pr-5" }, [
            vue.createElementVNode("view", { class: "font text-muted mt-1 pl-2 blue" }, "0"),
            vue.createElementVNode("view", { class: "font text-muted mt-1 h4" }, "蓝豆")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", { class: "font text-muted mt-1 pl-2 blue" }, "0"),
            vue.createElementVNode("view", { class: "font text-muted mt-1 h4" }, "心意")
          ])
        ]),
        vue.createCommentVNode(" 数值区结束 "),
        vue.createCommentVNode(" 管理区开始 "),
        vue.createElementVNode("view", { class: "p-2 f-around bg-white mb-5 border-bottom mana-box" }, [
          vue.createElementVNode("view", { style: { "color": "blue" } }, [
            vue.createElementVNode("view", { class: "iconfont icon-Password-Light pl-3" }),
            vue.createElementVNode("view", { class: "font text-muted mt-1" }, "我的空间")
          ]),
          vue.createElementVNode("view", { style: { "color": "goldenrod" } }, [
            vue.createElementVNode("view", { class: "iconfont icon-Heart-Light pl-4" }),
            vue.createElementVNode("view", { class: "font text-muted mt-1" }, "我的收藏")
          ]),
          vue.createElementVNode("view", { style: { "color": "hotpink" } }, [
            vue.createElementVNode("view", { class: "iconfont icon-Document-Light pl-4" }),
            vue.createElementVNode("view", { class: "font text-muted mt-1" }, "心意卡片")
          ]),
          vue.createElementVNode("view", { style: { "color": "green" } }, [
            vue.createElementVNode("view", { class: "iconfont icon-Category-Light pl-4" }),
            vue.createElementVNode("view", { class: "font text-muted mt-1" }, "任务中心")
          ]),
          vue.createElementVNode("view", { style: { "color": "deepskyblue" } }, [
            vue.createElementVNode("view", { class: "iconfont icon-Message-Light pl-4" }),
            vue.createElementVNode("view", { class: "font text-muted mt-1" }, "系统消息")
          ])
        ]),
        vue.createCommentVNode(" 管理区结束 "),
        vue.createCommentVNode(" 勋章区开始 "),
        vue.createElementVNode("view", { class: "bg-white medal" }, [
          vue.createElementVNode("view", { class: "border p-3 mb-5" }, [
            vue.createElementVNode("text", { class: "text-dark pr-min" }, "我的勋章"),
            vue.createElementVNode("text", { class: "text-light-muted" }, "快来获得第一枚勋章"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ])
        ]),
        vue.createCommentVNode(" 勋章区结束 "),
        vue.createCommentVNode(" 功能区开始 "),
        vue.createElementVNode("view", { class: "bg-white function" }, [
          vue.createElementVNode("view", { class: "border p-3" }, [
            vue.createElementVNode("text", { class: "text-dark pr-max" }, "文件暂存区"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ]),
          vue.createElementVNode("view", { class: "border-bottom p-3" }, [
            vue.createElementVNode("text", { class: "text-dark pr-min" }, "分享给朋友"),
            vue.createElementVNode("text", { class: "text-light-muted" }, "累计分享成功 0 次"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ]),
          vue.createElementVNode("view", { class: "border-bottom p-3" }, [
            vue.createElementVNode("text", { class: "text-dark pr-more" }, "用户协议"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ]),
          vue.createElementVNode("view", { class: "border-bottom p-3" }, [
            vue.createElementVNode("text", { class: "text-dark pr-more" }, "隐私政策"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted" })
          ]),
          vue.createElementVNode("view", { class: "border-bottom p-3" }, [
            vue.createElementVNode("text", { class: "text-dark pr-sup" }, "设置"),
            vue.createElementVNode("text", { class: "iconfont icon-fangxiang text-muted text-light-muted pl-5" })
          ])
        ]),
        vue.createCommentVNode(" 功能区结束 ")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/pages/my/my.vue"]]);
  const _sfc_main$1 = {
    __name: "uni-status-bar",
    setup(__props) {
      let statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
      const barHeight = vue.ref(statusBarHeight);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            style: vue.normalizeStyle({ height: barHeight.value }),
            class: "uni-status-bar"
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const ComponentsUniStatusBarUniStatusBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2ac0d4a5"], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/components/uni-status-bar/uni-status-bar.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/find/find", PagesFindFind);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("components/uni-status-bar/uni-status-bar", ComponentsUniStatusBarUniStatusBar);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/A写乱七八糟代码/Hbuild/Demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
