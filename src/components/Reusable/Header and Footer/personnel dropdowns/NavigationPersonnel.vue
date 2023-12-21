<template>
    <div class="navStaffAdmin" @mouseenter="toggleStaffAdminColumn" @mouseleave="toggleStaffAdminColumn">
        <!-- <font-awesome-icon class="icon icon1" icon="fa-solid fa-circle-user"/> -->
        <p class="text">{{ fullname }}<font-awesome-icon class="icon icon2"  :icon="['fas', 'caret-down']"/></p>
        <div class="dropdown" v-if="isShowStaffAdminColumn">
            <button @click="gotoSettings">Settings</button>
            <button @click="gotoDashboard">Dashboard</button>
            <button @click="logout">Log Out</button>
        </div>  
    </div>
</template>

<script>
export default {
    emits: ['logout-now'],
    data(){
        return{
            isShowStaffAdminColumn: false,
        }
    },
    methods:{
        toggleStaffAdminColumn(){
            this.isShowStaffAdminColumn = !this.isShowStaffAdminColumn
        },
        gotoSettings(){
          this.$store.commit('personnel/switchSettings')
          this.toggleStaffAdminColumn()
        },
        gotoDashboard(){
          this.$store.commit('personnel/switchDashboard')
          this.toggleStaffAdminColumn()
        },
        logout(){
            this.$emit('logout-now')
        }
    },
    computed:{
        fullname(){
            return this.$store.getters['auth/fullnameGetter']
        },
    }
}
</script>

<style scoped>
.navStaffAdmin{
    color: white;
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1rem;
    position: relative;
  }
  .dropdown{
    background-color: white;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.1);
    z-index: 3;
  }
  .navStaffAdmin .text{
    /* margin-left: 1rem; */
    margin-right: .1rem;
    text-transform: capitalize;
    transition: all .3s ease-in-out;
    cursor: default;
    display: flex;
    align-items: center;
    gap: .5rem;
    position: relative;
  } 
  .navStaffAdmin .text::after{
    content:'';
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid white;
    visibility: hidden;
    transition: visibility .3s ease-in-out;
  }
  .navStaffAdmin .text:hover::after{
    visibility: visible;
  }
  .icon{
    transition: transform .3s ease-in-out;
  }
  .navStaffAdmin:hover .text .icon2{
    transform: rotate(180deg);
  }
  .navStaffAdmin div{
    position: absolute;
    right: 0;
    top: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .navStaffAdmin .icon2{
    cursor: pointer;
    scale: 1.5;
  }
  button{
    background-color: transparent;
    border: none;
    outline: none;
  }
  a,button{
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 5px .5rem;
    white-space: nowrap;
  }
  a:hover, button:hover{
    background-color: rgb(219, 219, 219);
    cursor: pointer;
  }
</style>