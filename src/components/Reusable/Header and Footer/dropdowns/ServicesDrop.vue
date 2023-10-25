<template>
    <a @click="toggleDropAbout(true)" @mouseover="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)">
        SERVICES
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
    </a>
    
    <ul @mouseenter="toggleDropAbout(true)" @mouseleave="toggleDropAbout(false)" v-if="aboutDropVisible">
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
.subList{
    color: gray;
    padding-left: 3rem;
}
</style>