<template>
  <div class="profileViewContainer">

    <section class="imageName">
        <img :src="profile" alt="Cannot display the image">
        <h5>{{personnelType}}</h5>
    </section>
<br>
    <section class="navigations">
        <!-- <router-link to="/personnel/dashboard">DASHBOARD</router-link> -->
        <router-link to="/personnel/client">CLIENTS</router-link>
        <router-link to="/personnel/inquiries">INQUIRIES</router-link>
        <router-link to="/personnel/approval" v-if="isUserAdmin">ADDED CLIENTS</router-link>
        <router-link to="/personnel/subdivision">SUBDIVISION</router-link> 
        <router-link to="/personnel/emptyForms">EMPTY FORMS</router-link>
        <router-link to="/personnel/reports">REPORTS</router-link>
        
    </section>

  </div>
</template>

<script>
export default {
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
    max-width: 20vw;
    /* height: 85vh; */
    padding: 1rem;
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
}
.imageName img{
    min-width: 150px;
    width: 75%;
    border-radius: 100%;
}

.navigations{
    display: flex;
    flex-direction: column;
}
.navigations a{
    /* color: black; */
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.51);
    padding: .5rem;
    margin-bottom: 2px;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 5px;
    text-transform: uppercase;
    /* background: #fff; */
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(0, 0, 0, 0.51);;
    /*  */
    
}
.router-link-active{
  /* outline: 1px solid blue; */
  background-color: purple;
  transition: background-color 0.2s ease-in;
  color: white;
}
a:not(.router-link-active) {
    color: black;
}
</style>