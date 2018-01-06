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
        
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        selectedValue: 0,
        speed: 10000,
        carouselList: [{
          icon: 'first banner-div',
          text: ''
        }, {
          icon: 'second',
          text: 'Alloy前端周刊'
        }, {
          icon: 'thirth',
          text: '腾讯AlloyTeam招聘Web+工程师'
        }, {
          icon: 'firth',
          text: '开放现代的web组件化框架'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    .carousel{
        width:100%;
        .item-carousel{
          height:500px;
          width: 100%;
          background-size:100% 500px;
          text-align:center;
          line-height: 500px;
          font-size:60px;
        }
        .first{
          background-image: url('../../images/home/banner_20180106.jpg'); 
        }
        .second{
           background-image: url('../../images/home/banner_0.jpg');
        }
        .thirth{
          background-image: url('../../images/home/banner_1.jpg');
        }
        .firth{
          background-image: url('../../images/home/banner_2.jpg');
        }
    }
  }
</style>
