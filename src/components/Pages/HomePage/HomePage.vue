
<template>
    
    <the-header></the-header>

    <carousel-component></carousel-component>
    <about-comp></about-comp>
    <model-houses></model-houses>
    <div style="display: flex; justify-content: center; padding-top: 1rem;">
        <span style="display: block; width: 50%; border-bottom: 2px solid rgba(0, 0, 0, 0.2);"></span>
    </div>
    
    <map-component></map-component>
    <messenger-chat></messenger-chat>

    <the-footer ></the-footer>  
</template>

<script>
import AboutComp from './ABOUT/AboutComp.vue'
import ModelHouses from './MODEL HOUSE/ModelHouses.vue'
import CarouselComponent from './CAROUSEL/CarouselComponent.vue'
import MapComponent from './SUBDIVISION/MapComponent.vue'
import MessengerChat from './MESSENGER/MessengerChat.vue'
export default {
    components: {
        CarouselComponent,
        AboutComp, 
        ModelHouses, 
        MapComponent,
        MessengerChat
    },
}
</script>

<style scoped>
.display{
    visibility: hidden;
}
.bg{
    background-color: rgba(128, 128, 128, 0.722));
}
</style>