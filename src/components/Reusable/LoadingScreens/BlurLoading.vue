<template>
  <div>
    <progress-loading type="torks"/>
  </div>
</template>

<script>
import ProgressLoading from './ProgressLoading.vue'
export default {
  components: { ProgressLoading },

}
</script>

<style scoped>
div{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    animation: grow .3s ease-in;
}
@keyframes grow {
  0%{
    opacity: 0;
    transform: scale(.5);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
  
}
</style>