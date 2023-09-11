<template>
    <the-header></the-header>
    <!-- <login-form></login-form> -->
    <carousel-component></carousel-component>
    <about-component></about-component>
    <map-component></map-component>
    <the-footer></the-footer>
</template>

<script>
// import LoginForm from '@/components/Forms/LoginForm.vue'
import AboutComponent from './AboutComponent.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
export default {
    components: {CarouselComponent, 
        AboutComponent, MapComponent,
    },
}
</script>