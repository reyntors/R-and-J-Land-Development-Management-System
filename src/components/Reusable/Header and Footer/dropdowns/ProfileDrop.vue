<template>
    <div>

    </div>
    <section class="profile" @mouseenter="toggleDropDown(true)" @mouseleave="toggleDropDown(false)">
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
    emits: ['logout-now'],
    data(){
        return{
            listVisible: false,
        }
    },
    methods:{
        toggleDropDown(bool){
            this.listVisible = bool
        },
        goTo(path){
            if(path === 'forms'){
                this.$router.push('/guest-forms')
            }else if(path === 'account'){
                this.$router.push('/account')
            }else{
                // this.$store.commit('auth/eraseStoreState')
                // this.$store.commit('auth/eraseLocalStorage')
                // this.$router.push('/home')
                this.$emit('logout-now')
            }
        }
    },
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
    outline: 1px solid white;
}
li:hover{
    background-color: rgb(219, 219, 219);
    cursor: pointer;
}
li{
    color: black;
    text-align: center;
    padding: .5rem 2rem;
    white-space: nowrap;
}
li:hover{
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
}
ul{
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    list-style: none;
    margin:0;
    padding:0;
    /* border-top: 2px solid black;   */
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.1);
}
.profile:active .person{
    color: rgba(0, 0, 0, 0.3);
    transition: color 0.2s;
}
  .profile .caret{
    /* box-shadow: inset 0 0 1px 1px rgb(72, 62, 8); */
    outline: 1px solid black;
    color: black;
    background-color: gold;
    border-radius: 100%;
    padding: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: all .3s ease-in-out;
  }
  .profile{
    position: relative;
  }
  .profile:hover .caret{
    transform: rotate(540deg);
  }
</style>