<template>
  <div class="login-wrapper">
      <div class="modal">
        <h3>火星</h3>
        <el-form ref="loginForm" status-icon :model="loginForm" :rules="rules">
          <el-form-item prop="userName">
            <el-input v-model="loginForm.userName" prefix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input type="password"  v-model="loginForm.userPwd" prefix-icon="el-icon-user" />
          </el-form-item>
          <el-form-item>
            <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      loginForm : {
        userName : "",
        userPwd : ""
      },
      rules : {
        userName : [{required : true, message : "请输入用户名", trigger:"blur"}],
        userPwd : [{required : true, message : "请输入密码", trigger : "blur"}]
      }
    }
  },
  methods : {
    handleLogin(){
      this.$refs["loginForm"].validate(async valid=>{
        if(!valid) return
        await this.$store.dispatch("handleUserLogin",this.loginForm)
        this.$router.push("/")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper{
  background-color: #f9fcff;
  height: 100%;

  .modal{
    width: 500px;
    padding: 50px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 3px rgb(199 201 203 / 30%);
    background-color: #fff;
    position: absolute;
    border-radius: 4px;
    left : 0;
    top : 0;
    bottom: 0;
    right : 0;
    margin: auto;
    height: max-content;

    h3{
      text-align: center;
      font-size: 50px;
      margin-bottom: 30px;
      line-height: 1.5;
    }

    .login-button{
      width: 100%;
    }

  }
}
</style>
