<template>
    <the-header></the-header>
    <carousel-component></carousel-component>
    <about-component></about-component>
    <map-component></map-component>
    <!-- <search-component></search-component> -->
    <the-footer></the-footer>
</template>

<script>

import AboutComponent from './ModelHouses.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
// import SearchComponent from './SearchComponent.vue'
export default {
    components: {CarouselComponent, 
        AboutComponent, MapComponent,
        // SearchComponent,
    },
}
</script>