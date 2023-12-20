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
      <img :src="img1"/>
      <div class="details">
        <h3 class="fw-bold">Title of Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="img2" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
      </swiper-slide
    >
    <swiper-slide>
      <img :src="img3" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="img4" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="img5" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img :src="img6" />
      <div class="details">
          <h3 class="fw-bold">Title of Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, iste ullam quis quaerat repellendus veniam doloremque minus reiciendis consectetur recusandae tempora tenetur perspiciatis inventore voluptate. Eius?</p>
      </div>
    </swiper-slide>
  
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="5"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        :src="img1" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img2" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img3" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img4" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img5" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img6" /></swiper-slide
    >
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

  // import required modules
  import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

  // import images
  import img1 from '@/assets/project/project-img1.jpg'
  import img2 from '@/assets/project/project-img2.jpg'
  import img3 from '@/assets/project/project-img3.jpg'
  import img4 from '@/assets/project/project-img4.jpg'
  import img5 from '@/assets/project/project-img5.jpg'
  import img6 from '@/assets/project/project-img6.jpg'

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

        img1: img1,
        img2: img2,
        img3: img3,
        img4: img4,
        img5: img5,
        img6: img6,
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
  height: 100vh;
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
  opacity: 0.45;
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
.custom-swiper {
  display: flex;
  flex-direction: column;
  border: 2px solid red;
}

</style>