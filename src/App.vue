<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->    
      <header>
        <!-- 不好的写法 -->
        <!-- <h1 class="logo">
          <a href="#" class=">
            <span class="logo-icon-wrapper"><img src="./images/home/logo.png"></span>
            <span class="logo-text">AollyTeam</span>
          </a>y

        </h1> -->
        <a class="logo" href="#">
          <img src="./images/home/logo.png" />
          <span class="logo-text">AollyTeam</span> 
        </a>
        <ul class="container">
            <li v-for="item in menuArr" :key=item.title>
              <img v-if="typeof item.icon !=='undefined'" :src="item.icon" />
              <span>{{ item.title }}</span>
            </li>
        </ul>
      </header>
      <div class="indexCarousel"></div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <footer>这是底部</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      menuArr: [
        {
          title: '首页'
        },
        {
          title: '博客'
        },
        {
          title: 'Github'
        },
        {
          icon: './images/home/hot.png',
          title: 'AC前端大会'
        },
        {
          title: 'SuperStar'
        },
        {
          title: 'Web前端导航'
        },
        {
          title: '关于'
        }
      ]
    }
  },
  mounted () {}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  color: #fff !important;
  margin-top: 60px;
  header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 30;
    height: 60px;
    width: 100%;
    background-color: #000;
    line-height: 60px;
    padding: 0 60px;
    a.logo {
      font-size: 28px;
      font-family: Segoe UI Light;
      float: left;
      color: #fff;
      img {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .logo-text {
        height: 30px;
        line-height: 1.1;
        font-weight: 400;
      }
    }
    ul {
      float: right;
      li {
        display: inline-block;
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
      }
    }
  }
  .indexCarousel {
    height: 400px;
  }
}
</style>
