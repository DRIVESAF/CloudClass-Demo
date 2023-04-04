<template>
	<view>
		<!-- 自定义状态栏 -->
<!-- 		<uni-status-bar>
		</uni-status-bar> -->

		<!-- 条件编译-导航栏 -->
		// #ifdef APP-PLUS
		<view class="f-between pb-1 bg-light" id="nav-bar"
			:style="{ width: screenWidth + 'px', height: navBarHeight + 'px' }">
			<view>
				<text class="text-info font-weight-bold ml-1 label">我创建的</text>
				<text class="text-dark font-weight-bold mx-2">我加入的</text>
				<text class="text-dark font-weight-bold ">我共建的</text>
				<text class="iconfont icon-Plus-Light text-info"></text>
				<text class="iconfont icon-Scan-Light mx-2 text-info"></text>
			</view>
		</view>
		
		//#endif


		//#ifdef MP-WEIXIN
		<view class="f-start pb-1 bg-light" id="nav-bar"
			:style="{ width: (screenWidth - buttonWidth) + 'px', height: navBarHeight + 'px' }">
			<view>
				<text class="text-info font-weight-bold ml-1 label">我创建的</text>
				<text class="text-dark font-weight-bold mx-2">我加入的</text>
				<text class="text-dark font-weight-bold pr-max">我共建的</text>
			</view>
			<view class="text-info">
      		    <text class="iconfont icon-Scan-Light"></text>
				<text class="iconfont icon-Paper-Light mx-2"></text>
			</view>
		</view>
		//#endif

		<!-- 搜索框 -->
		<view class="flex my-2 px-2 ">
			<view class="position-relative flex-5">
				<view class="search-icon text-light-muted">
					<text class="iconfont icon-Search-Light"></text>
				</view>
				<input type="text" placeholder="搜索" class="font-md search-box flex-1">
			</view>
			<text class="flex-1 text-info font-weight-bold f-center">调序</text>
		</view>
		
	</view>

	<!-- 主体部分 -->
	<view v-for="(course, index) in courses" :key="course.courseId" :index="index" class="bg-white mb-2 border-bottom">
		<view class="text-dark h4 font-weight-bold p-2">
			{{ course.courseName }}
		</view>

		<view class="flex px-2">
			<view class="flex-1">
				<image :src="course.courseCover" class="thumbnail"></image>
			</view>
			<view class="flex-4 ml-2 ">
				<text>{{ course.courseClass }}</text>

				<view class="mt-1 font-sm">
					<text class="text-muted mr-2">{{ course.semester }}</text>
					<text class="text-info">{{ course.courseNo }}</text>
				</view>
			</view>

			<view class="flex-1 text-right">
				<text class="iconfont icon-fangxiang text-muted"></text>
			</view>
		</view>

		<view class="p-2 f-around">

			<view>

				<view class="iconfont icon-Edit-Light"></view>

				<view class="font-sm text-muted mt-1">签到</view>

			</view>

			<view>

				<view class="iconfont icon-Work-Light"></view>

				<view class="font-sm text-muted mt-1">课堂</view>

			</view>

			<view>

				<view class="iconfont icon-Document-Light"></view>

				<view class="font-sm text-muted mt-1">课件</view>

			</view>

			<view>

				<view class="iconfont icon-Category-Light"></view>

				<view class="font-sm text-muted mt-1">活动</view>

			</view>

			<view>

				<view class="iconfont icon-Voice-Light text-info"></view>

				<view class="font-sm text-muted mt-1">语音</view>

			</view>
		</view>
	</view>

</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'

	import {
		onLoad,
		onReady
	} from "@dcloudio/uni-app";

	const courses = reactive([{
			courseId: 1,
			courseClass: "软件2242 Web2班",
			courseNo: "2942577",
			courseName: "后端工程开发",
			courseCover: "/static/images/sb.jpg",
			courseTeacher: {
				name: "许莫淇",
				avatar: "/static/images/mqxu.jpg",
			},
			semester: "2022-2-23-2",
			finished: false,
			show: false,
		},
		{
			courseId: 2,
			courseClass: "软件2242 Web2班",
			courseNo: "9488275",
			courseName: "前端工程开发",
			courseCover: "/static/images/vue.jpg",
			courseTeacher: {
				name: "许莫淇",
				avatar: "/static/images/mqxu.jpg",
			},
			semester: "2022-2-23-2",
			finished: false,
			show: false,
		},
		{
			courseId: 3,
			courseClass: "软件2242 Web2班",
			courseNo: "8175074",
			courseName: "Web应用开发",
			courseCover: "/static/images/web.png",
			courseTeacher: {
				name: "许莫淇",
				avatar: "/static/images/mqxu.jpg",
			},
			semester: "2022-2-23-2",
			finished: false,
			show: false,
		},
		{
			courseId: 4,
			courseClass: "软件2216",
			courseNo: "2942577",
			courseName: "Java程序设计",
			courseCover: "/static/images/java.jpg",
			courseTeacher: {
				name: "许莫淇",
				avatar: "/static/images/mqxu.jpg",
			},
			semester: "2022-2-23-2",
			finished: false,
			show: false,
		}
	])

	let navBarHeight = ref(Number) //导航栏高度
	let screenWidth = ref(Number) //设备屏幕宽度
	let buttonWidth = ref(Number) //小程序胶囊宽度

	// #ifdef APP-PLUS
	onReady(() => {
		console.log('APP 页面初始化')
		screenWidth = uni.getSystemInfoSync().screenWidth
		console.log('屏幕宽度' + screenWidth)
		let info = uni.createSelectorQuery().select('#nav-bar')
		info
			.boundingClientRect((data) => {
				console.log('导航高度' + data.height)
				navBarHeight = data.height + 40
			})
			.exec()
	});

	// #endif

	// #ifdef MP-WEIXIN
	onLoad(() => {
		console.log('小程序页面初始化')
		screenWidth = wx.getSystemInfoSync().screenWidth
		console.log("屏幕宽度" + screenWidth)
		buttonWidth = wx.getMenuButtonBoundingClientRect().width
		console.log("胶囊宽度" + buttonWidth)
		let info = uni.createSelectorQuery().select('#nav-bar')
		info
			.boundingClientRect((data) => {
				console.log("导航高度" + data.height)
				navBarHeight = data.height
			})
			.exec()
	});
	// #endif
</script>

<style lang="scss" scoped>
	.label {
		position: relative;
	}

	.label::after {
		content: '';
		position: absolute;
		top: 55rpx;
		left: 40rpx;
		width: 55rpx;
		height: 6rpx;
		background-color: var(--info);
	}

	.search-icon {
		width: 70rpx;
		height: 70rpx;
		position: absolute;
		top: 16rpx;
		left: 15rpx;
	}

	.search-box {
		height: 70rpx;
		padding-left: 70rpx;
		background-color:#FFFFFF;
		border-radius: var(--radius);
	}

	.thumbnail {
		width: 50px;
		height: 110rpx;
		border-radius: var(--radius);
	}
	
	.pr-max{
		padding-right: 130rpx;
	}
	
	.icon-fangxiang{
			font-weight:bold;
	}
</style>