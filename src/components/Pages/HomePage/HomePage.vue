
<template>
    <the-header></the-header>

    <carousel-component></carousel-component>
    <model-houses></model-houses>
    <map-component></map-component>
    <messenger-chat></messenger-chat>

    <the-footer ></the-footer>  
</template>

<script>
import ModelHouses from './ModelHouses.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
import MessengerChat from './chatplugin/MessengerChat.vue'
export default {
    components: {
        CarouselComponent, 
        ModelHouses, 
        MapComponent,
        MessengerChat
    },
    // computed: {
    //     authorizationRoleGuest(){
    //         return this.$store.getters['auth/authorizationRoleGuest']
    //     }
    // },
    // mounted(){
    //     var chatbox = document.getElementById('fb-customer-chat');
    //     chatbox.setAttribute("page_id", "107489495346145");
    //     chatbox.setAttribute("attribution", "biz_inbox"); 
    // }
}
</script>

<style scoped>
.display{
    visibility: hidden;
}
</style>