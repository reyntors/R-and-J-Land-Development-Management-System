<template>
    <div class="custom-loader"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
.custom-loader {
  position: absolute;
  width: 69px;
  height: 12px;
  --c:radial-gradient(farthest-side,#766DF4 90%,#0000);
  background:
    var(--c) ,
    var(--c) ,
    var(--c) ,
    var(--c) ;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation:
    d10-1 1.5s infinite alternate,
    d10-2 3s infinite alternate; 
}

@keyframes d10-1 {
  0%,
  10% {background-position: 0 0,0 0,0 0,0 0}
  33% {background-position: 0 0,calc(100%/3) 0,calc(100%/3) 0,calc(100%/3) 0}
  66% {background-position: 0 0,calc(100%/3) 0,calc(2*100%/3) 0,calc(2*100%/3) 0}
  90%,
  100% {background-position: 0 0,calc(100%/3) 0,calc(2*100%/3) 0,100% 0}
}

@keyframes d10-2 {
  0%,49.99% {transform: scale( 1)}
  50%,100%  {transform: scale(-1)}
}


</style>