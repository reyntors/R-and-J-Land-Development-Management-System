<template>
    <a @click="clickDropAbout" @mouseenter="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)">
        ABOUT
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
   <ul  v-if="aboutDropVisible">
        <li @click="navigate('about')">Commitments</li>
        <li @click="navigate('sustainability')">Sustainability</li>
        <li @click="navigate('corp-officers')">Corporate Officers</li>
        <li @click="navigate('licenses&permits')">Licenses and Permits</li>
    </ul>        
    </a>
    
 
</template>

<script>
export default {
    emits: ['navigate-now'],
    data(){
        return{
            aboutDropVisible: false,
            mouseEnterList: false,
        }
    },
    methods: {
      toggleDropAbout(bool){
        this.aboutDropVisible = bool
      },
      clickDropAbout(){
        this.aboutDropVisible = !this.aboutDropVisible
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
    color: white;
    cursor: default;
}
ul{
    position: absolute;
    top: 100%;
    left: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    border-top: 2px solid black;
    animation: grow .2s ease-in;
    overflow: hidden;
    box-shadow: 0 5px 20px 5px rgba(0, 0, 0, .15);
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.9);
}
li{
    background-color: white; 
    padding: .5rem 1rem;
    white-space: nowrap;
    color: black;
    cursor: default;
}
li:hover{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}
@keyframes grow {
    0%{
        opacity: 0;
        height: 100%;
    }
    100%{
        opacity: 1;
        height: 400%;
    }
}
</style>