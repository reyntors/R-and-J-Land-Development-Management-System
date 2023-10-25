<template>
    <div>

    </div>
    <section class="profile" @click="toggleDropDown">
        <font-awesome-icon class="person" icon="fa-solid fa-circle-user" size="3x" />
        <font-awesome-icon class="caret" icon="fa-solid fa-chevron-down" size="sm" /> 
        <ul v-if="listVisible">
            <li @click="goTo('forms')">Forms</li>
            <li @click="goTo('account')">Account</li>
            <li @click="goTo('logout')">Log out</li>
        </ul>         
    </section>
    
</template>

<script>
export default {
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
li:hover{
    background-color: rgb(219, 219, 219);
    cursor: pointer;
}
li{
    text-align: center;
    padding: .5rem 2rem;
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