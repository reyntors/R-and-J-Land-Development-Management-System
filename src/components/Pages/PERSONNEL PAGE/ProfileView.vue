<template>
    <div class="profileViewContainer">

        <section class="imageName">
            <img :src="profile" alt="Cannot display the image">
            <h5>{{personnelType}}</h5>
        </section>
    <br>
        <section class="navigations">
            <!-- <router-link to="/personnel/dashboard">DASHBOARD</router-link> -->
            <router-link @click="toggle" to="/personnel/client">CLIENTS</router-link>
            <router-link @click="toggle" to="/personnel/inquiries">INQUIRIES</router-link>
            <router-link @click="toggle" to="/personnel/approval" v-if="isUserAdmin">ADDED CLIENTS</router-link>
            <router-link @click="toggle" to="/personnel/subdivision">SUBDIVISION</router-link> 
            <router-link @click="toggle" to="/personnel/emptyForms">EMPTY FORMS</router-link>
            <router-link @click="toggle" to="/personnel/reports">REPORTS</router-link>
            
        </section>

    </div>
</template>

<script>
export default {
    methods:{
        toggle(){
            this.$store.commit('personnel/togglePofileShow')
        }
    },
    computed:{
        profile(){
            return this.$store.getters['auth/profilePicGetter']
        },
        personnelType(){
            return  'Welcome, ' + this.$store.getters['auth/getRoleType']
        },
        isUserAdmin(){
            return this.$store.getters['auth/authorizationRoleAdmin']
        }
    }
}
</script>

<style scoped>
h5{
    text-transform: capitalize;
    text-align: center;
}
.profileViewContainer{
    /* width: 20vw; */
    /* min-width: 200px; */
    /* height: 85vh; */
    /* padding: 1rem; */
    /* overflow: scroll; */
    width: 20vw;
    box-sizing: border-box;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.3);
}
.imageName{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-top: 1rem; */
    gap: .5rem;
    margin: 0 1rem;
    margin-top: 1rem;
}
.imageName img{
    min-width: 150px;
    /* max-width: 300px; */
    width: 75%;
    border-radius: 100%;
}

.navigations{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin: 0 1rem;
    margin-bottom: 1rem;
}
.navigations a{
    /* color: black; */
    text-align: center;
    padding: .5rem;
    margin-bottom: 2px;
    text-decoration: none;
    white-space: nowrap;
    border-radius: .2rem;
    text-transform: uppercase;
    /* background: #fff; */
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    /* border: 1px solid rgba(0, 0, 0, 0.51); */
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.2);
    transition: background-color .5s ease-in-out;
    transition: box-shadow .5s ease-in-out;
}
.navigations a:active{
    cursor: progress;
}.navigations a:hover{
   background-color: rgba(128, 0, 128, 0.5);
   box-shadow:none;
   color: rgba(255, 255, 255, 0.8);
}
.router-link-active{
  /* outline: 1px solid blue; */
  background-color: rgba(128, 0, 128, 0.8);
  color: white;
  box-shadow:none;
}
a:not(.router-link-active) {
    color: black;
}
</style>