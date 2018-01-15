<!--
Description
@authors fanjiongrong
@date    2018-01-04 20:21:56
@version 1.0.0
-->
<template>
  <div class="home">
    <Carousel v-model="selectedValue" loop :autoplay-speed="speed">
      <CarouselItem class="carousel" v-for="(item,index) in carouselList" :key="index">
        <div class="item-carousel" :class="item.icon">
          <!-- <img :src="item.icon" /> -->
          {{item.text}}
        </div>
      </CarouselItem>
    </Carousel>
    <section class="openSource">
      <h2 class="i-main-title">
        <p class="main-title">
          <span class="nofocus">OpenSource /</span>
          <span>开源项目</span>
        </p>
        <p class="sub-title">种类众多的开源项目，让你爱不释手</p>
      </h2>
      <Row>
        <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#">
          <article class="i-art-wrapper">
            <img src="../../images/home/omi.png" alt="">
            <h3>OMI</h3>
            <p>开放现代的Web组件化框架</p>
          </article>
        </a>
        </Col>
        <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#">
          <article class="i-art-wrapper">
            <img src="../../images/home/alloyimage-3f4c70.png" alt="">
            <h3>AlloyImage</h3>
            <p>HTML5专业级图像处理引擎</p>
          </article>
        </a>
        </Col>
        <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#">
          <article class="i-art-wrapper">
            <img src="../../images/home/alloytouch-3364a5.png" alt="">
            <h3>AlloyTouch</h3>
            <p>丝般顺滑的触摸运动方案</p>
          </article>
        </a>
        </Col>
        <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#">
          <article class="i-art-wrapper">
            <img src="../../images/home/sodalogo-4d18ed.png" alt="">
            <h3>Soda</h3>
            <p>高性能模版引擎</p>
          </article>
        </a>
        </Col>
      </Row>
      <div class="sectoin-footer">
        <Button class="more" type="primary">更多开源></Button>
      </div>
    </section>
    <section class="product">
      <h2 class="i-main-title">
        <p class="main-title">
          <span class="nofocus">Product /</span>
          <span>作品</span>
        </p>
        <p class="sub-title">新奇好玩的作品，让你欲罢不能</p>
      </h2>
      <Row>
        <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#" title="全世界首个Javascript程序员的在线编程对战游戏">
          <article class="i-art-wrapper">
            <div>
              <img src="../../images/home/codetank-eeb277.jpg" alt="">
            </div>
            <p class="i-desc">CodeTank</p>
            <p class="i-desc">全世界首个Javascript程序员的在线编程对战游戏</p>
          </article>
        </a>
        </Col>
        <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#" title="加入我们成为大牛！无边界技术组织">
          <article class="i-art-wrapper">
            <div>
              <img src="../../images/home/alloyphoto-cd4563.jpg" alt="">
            </div>
            <p class="i-desc">AlloyPhoto</p>
            <p class="i-desc">专业在线图像处理App</p>
          </article>
        </a>
        </Col>
        <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#" title="HTML5骨骼动画引擎">
          <article class="i-art-wrapper">
            <div>
              <img src="../../images/home/alloystick-d2c55e.jpg" alt="">
            </div>
            <p class="i-desc">AlloyStick</p>
            <p class="i-desc">HTML5骨骼动画引擎</p>
          </article>
        </a>
        </Col>
        <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">
        <a href="#" title="新概念web开发工具">
          <article class="i-art-wrapper">
            <div>
              <img src="../../images/home/alloydesigner-8020c7.png" alt="">
            </div>
            <p class="i-desc">AlloyDesigner</p>
            <p class="i-desc">新概念web开发工具</p>
          </article>
        </a>
        </Col>
      </Row>
      <div class="sectoin-footer">
        <Button class="more" type="primary">更多作品></Button>
      </div>
    </section>
    <section class="blog">
      <h2 class="i-main-title">
        <p class="main-title">
          <span class="nofocus">Blog /</span>
          <span>博客</span>
        </p>
        <p class="sub-title">最新技术发展,业界前沿博客</p>
      </h2>
      <Row>
        <Col class="newest-blog" :xs="24" :sm="24" :md="12" :lg="12">
        <div class="container">
          <div class="header clearfix">
            <span class="text">最新博客</span>
            <span class="icon-wrapper" title="更多">
              <Icon type="ios-more"></Icon>
            </span>
          </div>
          <ul>
            <li>
              <a href="">
                <span class="i-title">gif的故事：解剖表情动图的构成</span>
                <span class="i-autor">jiongrong</span>
              </a>
            </li>
            <li>
              <a href="">
                 <span class="i-title">现代化富文本编辑器Quill Editor</span>
                <span class="i-autor">jiongrong</span>
              </a>
            </li>
            <li>
              <a href="">
                 <span class="i-title">用threejs制作一款简单的赛车游戏</span>
                <span class="i-autor">jiongrong</span>
              </a>
            </li>
            <li>
              <a href="">
                 <span class="i-title">使用 gka 加速 createjs 动画开发及图片优化</span>
                <span class="i-autor">jiongrong</span>
              </a>
            </li>
            <li>
              <a href="">
                 <span class="i-title">AlloyTeam Conf 2017 前端技术大会震撼登陆，明星团队讲师倾城而出！</span>
                <span class="i-autor">jiongrong</span>
              </a>
            </li>
          </ul>
        </div>
        </Col>
        <Col class="blog-category" :xs="24" :sm="24" :md="12" :lg="12">
        <div class="container">
          <div class="header clearfix">
            <span class="text">博客分类</span>
            <span class="icon-wrapper" title="更多">
              <Icon type="ios-more"></Icon>
            </span>
          </div>
          <Row>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <div class="blog-category-icon">
                <img src="" />
              </div>
              <div class="name">
                <p class="title">Javascript</p>
                <p class="i-remark">没看过这些，怎么敢说懂js</p>
              </div>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
            </Col>
          </Row>
           <Row>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
            </Col>
          </Row>
           <Row>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
            </Col>
          </Row>
            
        </div>
        </Col>
      </Row>

      <div></div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selectedValue: 0,
      speed: 10000,
      carouselList: [
        {
          icon: 'first banner-div',
          text: ''
        },
        {
          icon: 'second',
          text: 'Alloy前端周刊'
        },
        {
          icon: 'thirth',
          text: '腾讯AlloyTeam招聘Web+工程师'
        },
        {
          icon: 'firth',
          text: '开放现代的web组件化框架'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.clearfix:after {
  content: "";
  height: 0;
  clear: both;
  display: block;
}
.home {
  color: #000;
  .carousel {
    width: 100%;
    .item-carousel {
      height: 500px;
      width: 100%;
      background-size: 100% 500px;
      text-align: center;
      line-height: 500px;
      font-size: 60px;
    }
    .first {
      background-image: url("../../images/home/banner_20180106.jpg");
    }
    .second {
      background-image: url("../../images/home/banner_0.jpg");
    }
    .thirth {
      background-image: url("../../images/home/banner_1.jpg");
    }
    .firth {
      background-image: url("../../images/home/banner_2.jpg");
    }
  }
  section {
    margin: 50px 47px;
  }
  .openSource {
    .openSource-col {
      padding: 10px;
      a {
        color: #fff;
      }
      .i-art-wrapper {
        box-sizing: border-box;
        height: 180px;
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 20px 10px;
        img {
          height: 60px;
        }
        > h3 {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 24px;
        }
        > p {
          font-size: 14px;
        }
      }
    }
    .openSource-col:nth-of-type(1) .i-art-wrapper {
      background-color: #70c3ff !important;
    }
    .openSource-col:nth-of-type(2) .i-art-wrapper {
      background-color: #fd6a7f !important;
    }
    .openSource-col:nth-of-type(3) .i-art-wrapper {
      background-color: #7f8ea0 !important;
    }

    .openSource-col:nth-of-type(4) .i-art-wrapper {
      background-color: #89d04f !important;
    }
  }
  .i-main-title {
    font-family: Microsoft YaHei, Arial, Helvetica, sans-serif;
    .main-title {
      text-align: center;
      color: #000000;
      padding: 5px 10px;
      font-family: Segoe UI Light, Microsoft YaHei, Arial, Helvetica, sans-serif;
      span.nofocus {
        color: #919191;
      }
      span:nth-of-type(2) {
        font-weight: bold;
        padding: 5px 10px;
      }
    }
    .sub-title {
      font-size: 16px;
      padding: 5px 10px;
      color: rgb(145, 145, 145);
    }
  }
  .product {
    .product-col {
      .i-art-wrapper {
        box-sizing: border-box;
        // height: 180px;
        margin: 20px 10px;
        border-radius: 5px;
        div {
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        p.i-desc {
          text-align: left;
          font-size: 14px;
          color: #000;
        }
      }
      .i-art-wrapper:hover {
        border: 1px solid #e9e9e9;
        img {
          transform: scale(1.2);
        }
      }
    }
  }
  .i-art-wrapper:hover {
    -webkit-transition: -webkit-transform 0.5s;
    transform: translateY(-6px);
    box-shadow: 0 26px 40px -24px rgba(0, 36, 100, 0.5);
  }
  .section-footer {
    text-align: center;
  }
  .blog {
    .newest-blog .container,
    .blog-category .container{
      border-radius: 5px;
      border: 1px solid #e9e9e9;
      color: #616161;
      font-size: 16px;
      margin-left: 10px;
      margin-right: 10px;
      .header {
        border-bottom: 1px solid #e4ecf3;
        margin: 0 10px;
        padding: 15px;
        span.text {
          float: left;
        }
        span.icon-wrapper {
          float: right;
          cursor: pointer;
        }
      }
    }
    .newest-blog {
      ul li {
        text-align: left;
        position: relative;
        padding: 15px;
        a {
          color: #616161;
          .i-title:hover{
            color: #f2b535;
          }
          .i-autor{
            position: absolute;
            right: 10px;
            top: 10px;
          }
        }
      }
    }
    .blog-category{

    }
  }
}
</style>
