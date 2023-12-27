<template>
  <div id="autoLogout">
    <section>
      <p class="text-capitalize fs-4 font-weight-bold">Session Expired, Please Relogin.</p>
    </section>
  </div>
  
</template>

<script>
export default {
  props: ['type'],
}
</script>

<style scoped>
#autoLogout{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);

}
/* spin loading */

</style>