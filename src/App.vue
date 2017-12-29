<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->    
      <header>
        <h1 class="logo">
          <a href="#">
            <span class="logo-icon-wrapper"><img src="./images/home/logo.png"></span>
            <span class="logo-text">AollyTeam</span>
          </a>
        </h1>
        <ul class="container">
            <li v-for="item in menuArr" :key=item.title>
              {{ item.title }}
            </li>
        </ul>
      </header>
      <div class="indexCarousel"></div>
      <footer>这是底部</footer>
    <router-view/>
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
        }, {
          title: '博客'
        }, {
          title: 'Github'
        }, {
          title: 'AC前端大会'
        }, {
          title: 'SuperStar'
        }, {
          title: 'Web前端导航'
        }, {
          title: '关于'
        }
      ]
    }
  },
  mounted () {
    if (document.all) {
      this.isLtIE9 = true
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  header{
    position:fixed;
    z-index: 30;
    height:40px;
    width:100%;
    .logo-icon-wrapper{
      img{
        width:30px;
        height:30px;
      }
      vertical-align: bottom;
    }
    .logo-text{
      height: 30px;
      line-height: 30px;
    }
    ul{
      li{
        display: inline-block;
        padding: 10px 20px;
        font-size:20px;

      }
    }
  }
  .indexCarousel{
    height: 400px;
  }
}
</style>
