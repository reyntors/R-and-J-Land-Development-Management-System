<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper}"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
      <div class="details">
        <h3 class="fw-bold">Title of Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
      </swiper-slide
    >
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg"/>
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div></swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
    /></swiper-slide>
  </swiper>
</template>
<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import './style.css';

  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(null);

      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs],
      };
    },
  };
</script>
<style scoped>
.details{
  position: absolute;
  top: 10%;
  width:70%;
  color: white;
  padding: .5rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  border: 1px solid rgba(255, 255, 255, 0.26);
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 85vh;
  width: 100%;
  position: relative;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>