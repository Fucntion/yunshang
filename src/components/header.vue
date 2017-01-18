<template>
     <el-row class="panel-top">
        <el-col :span="24" >
            <img src="~assets/logo.png" class="logo"> 
            <el-tooltip class="item tip-logout" @click="logout" effect="dark" content="退出" placement="bottom" style="padding:0px;">
                <i class="logout" aria-hidden="true" v-on:click="logout"></i>
            </el-tooltip>
            <h2 class="company">您好！管理员</h2>
            <div class="tip">
                <div></div>
                <span>0</span>
            </div>
             
        </el-col>

       
    </el-row>   


</template>

<script>
	export default {

		data: function() {
			return {
                
            }

		},
		methods:{

            //退出登录
            logout:function(){
                var _this=this;
                this.$confirm('确认退出吗?', '提示', {

                }).then(() => {
                    localStorage.removeItem('userName');
                    localStorage.removeItem('accessToken');
                    _this.$router.replace('/login');
                }).catch(() => {

                })

             
            }
		}
	}
</script>
<style lang="less">
.logout{
	display: inline-block;
	background: url('~assets/logout.png') no-repeat center;
	background-size: cover;
	margin-top: 20px;
	width: 20px;
	height: 20px;
}
.tip-logout{
    cursor: pointer;
}
</style>