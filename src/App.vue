<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->    
      <header>
        <!-- 不好的写法 -->
        <!-- <h1 class="logo">
          <a href="#" class=">
            <span class="logo-icon-wrapper"><img src="./images/home/logo.png"></span>
            <span class="logo-text">AollyTeam</span>
          </a>

        </h1> -->
        <a class="logo" href="#">
          <img src="./images/home/logo.png" />
          <span class="logo-text">AollyTeam</span> 
        </a>
        <ul class="container">
            <li v-for="(item,index) in menuArr" :key="index" :link="item.link" @click="directTo( index )" :class="{activeItem:item.isActive}">
              <img class="nav-icon" v-if="typeof item.icon !=='undefined'" :src="item.icon"  />
             {{ item.title }}
            </li>
        </ul>
      </header>
     <div class="main">
        <router-view></router-view>
      </div>
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
          title: '首页',
          link: 'home',
          isActive: false
        },
        {
          title: '博客',
          link: 'bog',
          isActive: false
        },
        {
          title: 'Github',
          link: 'github',
          isActive: false
        },
        {
          icon: '../../src/images/home/hot.png',
          title: 'AC前端大会',
          link: 'github',
          isActive: false
        },
        {
          title: 'SuperStar',
          link: 'github',
          isActive: false
        },
        {
          title: 'Web前端导航',
          link: 'github',
          isActive: false
        },
        {
          title: '关于',
          link: 'github',
          isActive: false
        }
      ],
      currentActive: 0
    }
  },
  mounted () {
    this.$router.push(this.menuArr[this.currentActive].link)
  },
  methods: {
    directTo (index) {
      this.$router.push(this.menuArr[index].link)
      this.menuArr[this.currentActive].isActive = false
      this.menuArr[index].isActive = true
      this.currentActive = index
    }
  }
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
  header {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 30;
    height: 60px;
    width: 100%;
    line-height: 60px;
    padding: 0 60px;
    // opacity: 0;
    color: #fff !important;
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
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-weight: 400;
        vertical-align: middle;
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
        .nav-icon {
          vertical-align: middle;
          width: 18px;
          height: 23px;
        }
      }
      .activeItem {
        color: "#f2b535";
      }
    }
  }
  footer {
    background-color: #26282c;
    padding: 30px 0;
  }
}
</style>
