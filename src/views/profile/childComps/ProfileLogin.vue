<template>
  <div>
    <div class="login">
      <div class="login-touxiang">
        <i class="iconfont touxiang-icon">&#xe655;</i>
      </div>
      <div class="login-text">
        <div class="text-login-registered">登录/注册</div>
        <div class="text-bind">
          <i class="bind-icon iconfont">&#xe809;</i>
          <div class="bind-text">暂无绑定手机号</div>
        </div>
      </div>
      <div class="login-more">
        <i class="iconfont more-icon">&#xe63c;</i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileLogin',
}
</script>

<style scoped>
  .login {
    background-color: var(--color-tint);
    padding: 15px 20px;
    display: flex;
  }
  .login-touxiang {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: #f2f2f2;
    color: #999;
    border-radius: 50%;
  }
  .touxiang-icon {
    font-size: 40px;
    font-weight: 700;
  }
  .login-text {
    flex: 1;
    padding: 5px 0 0 20px;
    color: #fff;
    font-weight: 700;
  }
  .text-login-registered {
    font-size: 18px;
  }
  .text-bind {
    display: flex;
    height: 20px;
    line-height: 20px;
    font-size: 14px
  }
  .bind-icon {
    font-weight: 400;
    font-size: 18px;
  }
  /* .bind-text {
  } */
  .login-more {
    text-align: center;
    width: 30px;
    position: relative;
  }
  .more-icon {
    font-size: 30px;
    color: #fff;
    font-weight: 700;
    position: absolute;
    right: 0;
    bottom: 10px;
  }
</style>