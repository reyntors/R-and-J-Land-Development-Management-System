<template>
    <a @click="clickDropAbout" @mouseenter="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)">
        SERVICES
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
 
        <ul  v-if="aboutDropVisible">     
            <li>WE BUILD</li>       
                    <li class="subList" @click="navigate('residential-house','/home')">Resedential Houses</li>
                    <li class="subList" @click="navigate('commercial-bldg','/home')">Commercial Building</li>
                    <li class="subList" @click="navigate('amenities','/home')">Amenities</li>
                    <li class="subList" @click="navigate('structural-foundation','/home')">Structural Foundation</li>
                
            <li>WE SELL</li>
                    <li class="subList" @click="navigate('land-for-sale','/sell')">Land for Sale</li>
                    <li class="subList" @click="navigate('sell-others','/sell')">Others</li>
            <li>WE PROVIDE</li>
                    <li class="subList" @click="navigate('heavy-equipment','/provide')">Heavy Equipment for Rent</li>
                    <li class="subList" @click="navigate('survey-services','/provide')">Survey Services</li>
                    <li class="subList" @click="navigate('titling-processing','/provide')">Titling Processing</li>
                    <li class="subList" @click="navigate('permits-licenses','/provide')">Business Permits and Licenses</li>
        </ul>
    </a>
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
      clickDropAbout(){
        this.aboutDropVisible = !this.aboutDropVisible
      },
      navigate(sectionID,path){
        this.$emit('navigate-now',sectionID,path)
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
    cursor: default;
    color: white;
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
    color: black;
    padding: .5rem 1rem;
    white-space: nowrap;
    
}
.subList{
    padding-left: 3rem;
    transition: all .3s ease-in-out;
    cursor: default;
}
.subList:hover{
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