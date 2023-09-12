<template>
    <the-header></the-header>
    <!-- <login-form></login-form> -->
    <carousel-component></carousel-component>
    <about-component></about-component>
    <map-component></map-component>
    <search-component></search-component>
    <the-footer></the-footer>
</template>

<script>
// import LoginForm from '@/components/Forms/LoginForm.vue'
import AboutComponent from './AboutComponent.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
import SearchComponent from './SearchComponent.vue'
export default {
    components: {CarouselComponent, 
        AboutComponent, MapComponent,
        SearchComponent,
    },
}
</script>