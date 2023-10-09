<template>

  <router-view></router-view>

</template>

<style >
*{
  padding: 0;
  margin: 0;
  font-family: 'Poppins';
}
p {
  font-size: clamp(.5rem, 1.5vw, 2rem);
}
h2{
  font-weight: 500;
}
h4{
  font-size: clamp(1rem, 1.7vw, 2rem);
}
.router-link-active{
  outline: 1px solid blue;
  /* color: white; */
}

</style>