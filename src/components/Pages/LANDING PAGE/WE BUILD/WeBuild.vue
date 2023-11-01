<template>
  <div style="background-color:gold;">
    <resedential-house></resedential-house>
    <commercial-bldg></commercial-bldg>
    <amenities-view></amenities-view>
    <structural-foundation></structural-foundation>    
  </div>

</template>

<script>
import ResedentialHouse from './RESEDENTIAL HOUSE/ResedentialHouse.vue';
import CommercialBldg from './COMMERCIAL BLDG/CommercialBldg.vue';
import AmenitiesView from './AMENITIES/AmenitiesView.vue';
import StructuralFoundation from './STRUCTURAL FOUNDATION/StructuralFoundation.vue';

export default {
    components:{
        ResedentialHouse,
        CommercialBldg,
        AmenitiesView,
        StructuralFoundation
    }
}
</script>