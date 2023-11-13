<template>
  <div class="card-container">
    <h3 class="title fw-bold">{{ title }}</h3>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.card-container{
    width: 90%;
    height: auto;
    padding: 1rem;
    margin: 1rem auto;
    /* border: 1px solid black; */
}
.title{
    text-align: center;
}
</style>