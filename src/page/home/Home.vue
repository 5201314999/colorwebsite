<!--
Description
@authors fanjiongrong
@date    2018-01-04 20:21:56
@version 1.0.0
-->
<template>
  <div class="home">
       <Carousel  v-model="selectedValue" loop
      :autoplay-speed="speed">
        <CarouselItem class="carousel" v-for="(item,index) in carouselList" :key="index">
            <div class="item-carousel" :class="item.icon" >
             <!-- <img :src="item.icon" /> -->
              {{item.text}}
            </div>
        </CarouselItem>
        </Carousel>
        <section class="openSource">
          <h2 class="i-main-title">
            <p class="main-title">
              <span class="nofocus">OpenSource/</span>
              <span>开源项目</span>
            </p>
            <p class="sub-title">种类众多的开源项目，让你爱不释手</p>
          </h2>
         <Row>
            <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
            <a href="#">
              <article class="i-art-wrapper">

              </article>
            </a>
            </Col>
            <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
              <a href="#">
              <article class="i-art-wrapper">

              </article>
            </a>
            </Col>
            <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
              <a href="#">
              <article class="i-art-wrapper">

              </article>
            </a>
            </Col>
            <Col class="openSource-col" :xs="24" :sm="12" :md="6" :lg="6">
                <a href="#">
              <article class="i-art-wrapper">

              </article>
            </a>
            </Col>
        </Row>
        </section> 
        <section class="product">
          <Row >
            <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">1</Col>
            <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">2</Col>
            <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">3</Col>
            <Col class="product-col" :xs="24" :sm="12" :md="6" :lg="6">4</Col>
          </Row>
        </section>
        <section class="blog">
          
        </section>
        
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      selectedValue: 0,
      speed: 10000,
      carouselList: [
        {
          icon: "first banner-div",
          text: ""
        },
        {
          icon: "second",
          text: "Alloy前端周刊"
        },
        {
          icon: "thirth",
          text: "腾讯AlloyTeam招聘Web+工程师"
        },
        {
          icon: "firth",
          text: "开放现代的web组件化框架"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
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
  section{
    margin: auto 50px;
  }
  .openSource {
    .openSource-col {
      padding: 10px;
      .i-art-wrapper {
        box-sizing: border-box;
        height: 180px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
    }
    .openSource-col:nth-of-type(1) .i-art-wrapper{
        background-color:#70c3ff!important;
      }
    .openSource-col:nth-of-type(2) .i-art-wrapper{
        background-color:#fd6a7f!important;
      }
    .openSource-col:nth-of-type(3)  .i-art-wrapper{
        background-color:#7f8ea0!important;
      }

      .openSource-col:nth-of-type(4) .i-art-wrapper{
        background-color:#89d04f!important;
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
      color: #000;
    }
  }
}
</style>
