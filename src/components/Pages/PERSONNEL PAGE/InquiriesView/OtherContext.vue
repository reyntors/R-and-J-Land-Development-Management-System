<template>
  <div>
    <p>{{ context.title }}</p>
    <ul v-for="(item,index) in context" :key="index">
        <li v-if="index !== 'title'">{{ index }} : <span>{{ item }}</span> </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['context'],
}
</script>

<style scoped>
span{
    font-weight: 500;
}
</style>