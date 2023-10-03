<template>
    <the-header></the-header>
    <carousel-component></carousel-component>
    <!-- <model-houses></model-houses> -->
    <map-component></map-component>
    <!-- <search-component></search-component> -->
    <the-footer></the-footer>
</template>

<script>

// import ModelHouses from './ModelHouses.vue'
import CarouselComponent from './CarouselComponent.vue'
import MapComponent from './MapComponent.vue'
// import SearchComponent from './SearchComponent.vue'
export default {
    components: {CarouselComponent, 
        // ModelHouses, 
        MapComponent,
        // SearchComponent,
    },
}
</script>