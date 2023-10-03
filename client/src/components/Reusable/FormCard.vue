<template>
  <div class="card-container">
    <h5 class="title">{{ title }}</h5>
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
    width: 100%;
    height: auto;
    outline: 1px solid black;
    box-shadow: 0 0 2px 1px black;
    padding: 1rem;
    margin: 1rem auto;
}
.title{
    text-align: center;
}
</style>