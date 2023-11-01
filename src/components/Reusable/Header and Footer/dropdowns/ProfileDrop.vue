<template>
    <div>

    </div>
    <section class="profile" @click="toggleDropDown">
        <!-- <font-awesome-icon class="person" icon="fa-solid fa-circle-user" size="3x" /> -->
        <img :src="imgProfile">
        <font-awesome-icon class="caret" icon="fa-solid fa-chevron-down" size="sm" /> 
        <ul v-if="listVisible">
            <li @click="goTo('account')">My Account</li>
            <li @click="goTo('forms')">Forms</li>
            <li @click="goTo('logout')">Log out</li>
        </ul>         
    </section>
    
</template>

<script>
export default {
    props: ['imgProfile'],
    data(){
        return{
            listVisible: false,
        }
    },
    methods:{
        toggleDropDown(){
            this.listVisible = !this.listVisible
        },
        goTo(path){
            if(path === 'forms'){
                this.$router.push('/guest-forms')
            }else if(path === 'account'){
                this.$router.push('/account')
            }else{
                this.$store.commit('auth/eraseStoreState')
                this.$store.commit('auth/eraseLocalStorage')
                this.$router.push('/home')
            }
        }
    }
}
</script>

<style scoped>
img{
    width: 50px;
    height: 50px;
    /* height: 100%;
    width: 100%; */
    object-fit: cover;
    border-radius: 100%;
    outline: 1px solid black;
}
li:hover{
    background-color: rgb(219, 219, 219);
    cursor: pointer;
}
li{
    text-align: center;
    padding: .5rem 2rem;
    white-space: nowrap;
}
ul{
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    list-style: none;
    margin:0;
    padding:0;
    border-top: 2px solid black;
}
.profile:active .person{
    color: rgba(0, 0, 0, 0.3);
    transition: color 0.2s;
}
  .profile .caret{
    box-shadow: inset 0 0 1px 1px rgb(72, 62, 8);
    outline: 1px solid black;
    /* box-shadow: 0 0 1px 5px white; */
    background-color: rgb(255, 255, 255);
    border-radius: 100%;
    padding: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .profile{
    position: relative;
  }
</style>