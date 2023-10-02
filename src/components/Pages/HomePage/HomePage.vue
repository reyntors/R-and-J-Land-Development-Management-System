
<template>
    <the-header></the-header>
    <carousel-component></carousel-component>
    <!-- <model-houses></model-houses> -->
    <map-component></map-component><messenger-chat></messenger-chat>
    <!-- <the-footer></the-footer> -->

    <messenger-chat></messenger-chat>
    
</template>

<script>
// import ModelHouses from './ModelHouses.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
import MessengerChat from './chatplugin/MessengerChat.vue'
export default {
    components: {CarouselComponent, 
        // ModelHouses, 
        MapComponent,
        MessengerChat,
    },
}
</script>