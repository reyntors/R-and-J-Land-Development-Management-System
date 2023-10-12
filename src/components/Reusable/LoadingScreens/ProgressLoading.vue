<template>
  <div id="loadingSpinner">
    <div class="custom-loader-spin" v-if="type === 'spin'"></div>
    <div class="custom-loader-progress" v-if="type === 'progress'"></div>
    <!-- <div class="custom-loader-dot" v-if="type === 'dot'"></div> -->
  </div>
  <div class="custom-loader-dot" v-if="type === 'dot'"></div>
  
</template>

<script>
export default {
  props: ['type']
}
</script>

<style scoped>
#loadingSpinner{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-loader-spin {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: 
    radial-gradient(farthest-side,#766DF4 94%,#0000) top/16px 16px no-repeat,
    conic-gradient(#ffffffbe 30%,#2517e6);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 16px),#000 0);
  animation:s3 1s infinite linear;
}
@keyframes s3{ 
  100%{transform: rotate(1turn)}
}

/* progress bar */
.custom-loader-progress {
   height:4px;
   width:130px;
   background:
    linear-gradient(#766DF4 0 0),
    linear-gradient(#766DF4 0 0),
    #E4E4ED;
  background-size: 60% 100%;
  background-repeat: no-repeat;
  animation: p6 3s infinite;
}

@keyframes p6 {
  0%   {background-position:-150% 0,-150% 0}
  66%  {background-position: 250% 0,-150% 0}
  100% {background-position: 250% 0, 250% 0}
}

/* dot loading */
.custom-loader-dot {
  /* position: absolute; */
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