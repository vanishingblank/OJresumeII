<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <header>
    <div class="navbar">
      <div class="logo">OJLab</div>

      <div class="nav-buttons">
        <RouterLink to="/">首页</RouterLink>
        <a href="https://love-oj.github.io/OJ/" target="_blank" rel="noopener noreferrer">纳新简章</a>
        <RouterLink to="/form">简历投递</RouterLink>

      </div>
    </div>
  </header>


  <body>
    <RouterView />
  </body>

</template>

<style>
body {
  /* background-image: url(../src/assets/2.gif);
  background-repeat: repeat; */
  background-color: black;
  /* 重复背景图像 */
  background-size: cover;
  /* 使背景图像覆盖整个容器 */
  z-index: -1;
  /* 确保背景在其他内容后面 */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

.navbar {
  box-sizing: border-box;
  width: 100%;
  /* 设置宽度为100% */
  position: relative;
  /* 使阴影效果更明显 */
  z-index: 1;
  /* 确保导航栏在其他内容之上 */
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 5.0);
}

.navbar .logo {
  font-size: 24px;
  font-weight: bold;
}

.navbar .nav-buttons {
  display: flex;
  gap: 15px;
}

.navbar .nav-button {
  text-decoration: none;
  color: #333;
  padding: 8px 15px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;
}

.navbar .nav-button:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}
</style>
