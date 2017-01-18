<template>
	<div class="error_box">
		<span class="windmill2">
			<span class="pillar"></span>
		<span class="axis">
				<span class="swing"></span>
		<span class="swing2"></span>
		<span class="swing3"></span>
		</span>
		</span>
		<h2 class="text">Not Found<br/><a href="#" class="back" @click="goback">返回上一页</a></h2>
	</div>
</template>
<script>
export default {
	name: 'error',
	data: function () {

		return {

		}
	},
	methods: {
		goback: function () {

			this.$router.go(-1)
		}
	},
	components: {

	},
	watch: {

	},
	mounted() {

	}
}
</script>
<style lang="less">
.error_box {
	background: #a5cad6;
	/*background-image:url(~assets/bg.gif);*/
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.windmill2 {
	display: block;
	position: relative;
	margin: 30% auto 0;
	width: 100px;
	height: 100px;
}

.text {
	text-align: center;
	.back {
		font-size: 16px;
		color: #333333;
	}
}

.windmill2 .pillar {
	position: absolute;
	top: 8px;
	left: 44px;
	display: block;
	height: 0;
	width: 4px;
	border-width: 0 4px 80px 4px;
	border-style: none solid solid;
	border-color: transparent transparent white;
}

.windmill2 .axis {
	position: absolute;
	top: 0px;
	left: 46px;
	width: 4px;
	height: 4px;
	border: 3px #fff solid;
	background: #a5cad6;
	border-radius: 5px;
	z-index: 88;
	-webkit-transition-property: -webkit-transform;
	-webkit-transition-duration: 1s;
	-moz-transition-property: -moz-transform;
	-moz-transition-duration: 1s;
	-webkit-animation: rotate 4s linear infinite;
	-moz-animation: rotate 4s linear infinite;
	-o-animation: rotate 4s linear infinite;
	animation: rotate 4s linear infinite;
}

.windmill2 .swing {
	position: absolute;
	top: 1px;
	left: -2px;
	display: block;
	height: 0;
	width: 2px;
	border-width: 50px 2px 0px 2px;
	border-style: solid solid none;
	border-color: white transparent transparent;
	box-shadow: 1px 1px 1px rgba(105, 97, 97, 0.1);
	-webkit-transform-origin: 0px 0px;
	-webkit-transform: rotate(60deg);
	-moz-transform-origin: 0px 0px;
	-moz-transform: rotate(60deg);
	-ms-transform-origin: 0px 0px;
	-ms-transform: rotate(60deg);
	-o-transform-origin: 0px 0px;
	-o-transform: rotate(60deg);
	transform-origin: 0px 0px;
	transform: rotate(60deg);
}

.windmill2 .swing2 {
	position: absolute;
	top: 0px;
	left: 4.5px;
	display: block;
	height: 0;
	width: 2px;
	border-width: 50px 2px 0px 2px;
	border-style: solid solid none;
	border-color: white transparent transparent;
	-webkit-transform-origin: 0px 0px;
	-webkit-transform: rotate(180deg);
	-moz-transform-origin: 0px 0px;
	-moz-transform: rotate(180deg);
	-ms-transform-origin: 0px 0px;
	-ms-transform: rotate(180deg);
	-o-transform-origin: 0px 0px;
	-o-transform: rotate(180deg);
	transform-origin: 0px 0px;
	transform: rotate(180deg);
}

.windmill2 .swing3 {
	position: absolute;
	top: 6px;
	left: 3px;
	display: block;
	height: 0;
	width: 2px;
	border-width: 50px 2px 0px 2px;
	border-style: solid solid none;
	border-color: white transparent transparent;
	-webkit-transform-origin: 0px 0px;
	-webkit-transform: rotate(300deg);
	-moz-transform-origin: 0px 0px;
	-moz-transform: rotate(300deg);
	-ms-transform-origin: 0px 0px;
	-ms-transform: rotate(300deg);
	-o-transform-origin: 0px 0px;
	-o-transform: rotate(300deg);
	transform-origin: 0px 0px;
	transform: rotate(300deg);
}

.windmill2 .axis:hover {
	-webkit-animation: rotate2 .3s linear infinite;
	-moz-animation: rotate2 .3s linear infinite;
	-o-animation: rotate2 .3s linear infinite;
	animation: rotate2 .3s linear infinite;
}

@-webkit-keyframes rotate {
	from {
		-webkit-transform: rotate(0deg)
	}
	to {
		-webkit-transform: rotate(360deg)
	}
}

@-moz-keyframes rotate {
	from {
		-moz-transform: rotate(0deg)
	}
	to {
		-moz-transform: rotate(359deg)
	}
}

@-o-keyframes rotate {
	from {
		-o-transform: rotate(0deg)
	}
	to {
		-o-transform: rotate(359deg)
	}
}

@keyframes rotate {
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(359deg)
	}
}

@-webkit-keyframes rotate2 {
	from {
		-webkit-transform: rotate(0deg)
	}
	to {
		-webkit-transform: rotate(360deg)
	}
}

@-moz-keyframes rotate2 {
	from {
		-moz-transform: rotate(0deg)
	}
	to {
		-moz-transform: rotate(359deg)
	}
}

@-o-keyframes rotate2 {
	from {
		-o-transform: rotate(0deg)
	}
	to {
		-o-transform: rotate(359deg)
	}
}

@keyframes rotate2 {
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(359deg)
	}
}
</style>