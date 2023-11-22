<template>
  <div class="logout-loading-cont">
    
    <progress-loading type="torks"/>
    <div class="logoutPrompt">
      <h1>Logging Out</h1>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
h1{
  text-shadow: 1px 1px 1px white;
  font-weight: bolder;
}
.logoutPrompt{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid white;
  padding: .5rem;
  border-radius: 5px;
}
.logout-loading-cont{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0, 0, 255, 0.36); */
  background: rgba(255, 255, 255, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.3px);
    -webkit-backdrop-filter: blur(7.3px);
    z-index: 4;
}
</style>