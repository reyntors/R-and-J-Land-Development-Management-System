<template>
    <the-header></the-header>
    <carousel-component></carousel-component>
    <about-component></about-component>
    <map-component></map-component>
    <the-footer></the-footer>
</template>

<script>
import AboutComponent from './AboutComponent.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
export default {
    components: {CarouselComponent, AboutComponent, MapComponent}
}
</script>

<style>

</style>
CarouselComponent