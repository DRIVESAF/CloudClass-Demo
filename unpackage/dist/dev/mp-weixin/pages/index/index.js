"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const courses = common_vendor.reactive([
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
    let navBarHeight = common_vendor.ref(Number);
    let screenWidth = common_vendor.ref(Number);
    let buttonWidth = common_vendor.ref(Number);
    common_vendor.onLoad(() => {
      console.log("小程序页面初始化");
      screenWidth = common_vendor.wx$1.getSystemInfoSync().screenWidth;
      console.log("屏幕宽度" + screenWidth);
      buttonWidth = common_vendor.wx$1.getMenuButtonBoundingClientRect().width;
      console.log("胶囊宽度" + buttonWidth);
      let info = common_vendor.index.createSelectorQuery().select("#nav-bar");
      info.boundingClientRect((data) => {
        console.log("导航高度" + data.height);
        navBarHeight = data.height;
      }).exec();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(screenWidth) - common_vendor.unref(buttonWidth) + "px",
        b: common_vendor.unref(navBarHeight) + "px",
        c: common_vendor.f(courses, (course, index, i0) => {
          return {
            a: common_vendor.t(course.courseName),
            b: course.courseCover,
            c: common_vendor.t(course.courseClass),
            d: common_vendor.t(course.semester),
            e: common_vendor.t(course.courseNo),
            f: course.courseId,
            g: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/A写乱七八糟代码/Hbuild/Demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
