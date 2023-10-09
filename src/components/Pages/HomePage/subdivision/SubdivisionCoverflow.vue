<template>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      :initialSlide="3"
      class="mySwiper"
    >
        <swiper-slide v-for="item in byGroup" :key="item.lotNumber" @click="select(item)">
            <!-- {{ group }} -->
            <header class="header">
                <span class="span1">Lot Number: <b>{{ item.lotNumber }}</b></span> 
                <span class="span2">{{ item.status }}</span> 
            </header>
            <img
            :src="item.image[0].url" />
        </swiper-slide>
        <subdivision-select :item="selectedItem" v-if="selected && selectedItem" @close-selected="close"></subdivision-select>
    </swiper>
    <!-- {{selectedValue}}  -->
  </template>
 
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/effect-coverflow';
    import 'swiper/css/pagination';
    // import required modules
    import { EffectCoverflow, Pagination } from 'swiper/modules';
    import SubdivisionSelect from './SubdivisionSelect.vue';
    export default {
      props: ['list','group'],
      components: {
        Swiper,
        SwiperSlide,
        SubdivisionSelect
      },
      setup() {
        return {
          modules: [EffectCoverflow, Pagination],
        };
      },
      data(){
        return{
            selectedItem: null,
            selected: false,
        }
      },
      methods: {
        select(param){
            this.selected = true
            this.selectedItem = param
            
            // console.log(this.selectedItem )
        },
        close(){
            console.log('fda')
            this.selectedItem = null
            this.selected = true
        }
      },

      computed:{
        byGroup(){
            const list = this.list
            if(this.group === 'all'){
                return list
            }else{
                const newList = list.filter(item => item.status === this.group)
                return newList
            }    
        },
        selectedValue(){
            console.log(this.selectedItem)
            return this.selectedItem
        }
      }
    };
  </script>
  

<style scoped>
.swiper {
  width: 100%;
  height: 75vh;
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 400px;
}

.swiper-slide img {
  /* object-fit: cover; */
  display: block;
  width: 100%;
  height: 100%;
}
.header{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
}
.span1{
  padding-left: 1rem;
}
.span2{
    text-transform: uppercase;
    padding-right: 1rem;
    font-weight: 700;
}
</style>