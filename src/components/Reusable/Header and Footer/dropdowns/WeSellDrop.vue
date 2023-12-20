<template>
    <a @click="toggleDropAbout(true)" @mouseover="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)">
        WE SELL
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </a> 
    <ul @mouseenter="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)" v-if="aboutDropVisible">
        <li @click="navigate('land-for-sale')">Land for Sale</li>
        <li @click="navigate('sell-others')">Others</li>

    </ul>
</template>

<script>
export default {
    emits: ['navigate-now'],
    data(){
        return{
            aboutDropVisible: false,
        }
    },
    methods: {
      toggleDropAbout(bool){
        this.aboutDropVisible = bool   
      },
      navigate(id){
        console.log(id)
        this.$emit('navigate-now',id)
      }
    },
}
</script>

<style scoped>
a{
    padding: .5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: blue;
    cursor: default;
}
ul{
    position: absolute;
    top: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    border-top: 2px solid black;
    /* display: none; */
}
li{
    background-color: white;
    padding: .5rem 1rem;
    white-space: nowrap;
}
li:hover{
    background-color: rgb(219, 219, 219);
    cursor: pointer;
}
</style>