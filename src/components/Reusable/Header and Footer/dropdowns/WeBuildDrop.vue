<template>
    <a @click="toggleDropAbout(true)" @mouseover="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)">
        WE BUILD
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </a> 
    <ul @mouseenter="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)" v-if="aboutDropVisible">
        <li @click="navigate('residential-house')">Resedential Houses</li>
        <li @click="navigate('commercial-bldg')">Commercial Building</li>
        <li @click="navigate('amenities')">Amenities</li>
        <li @click="navigate('structural-foundation')">Sturctural Foundation</li>
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