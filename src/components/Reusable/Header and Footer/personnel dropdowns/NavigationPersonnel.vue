<template>
    <div class="navStaffAdmin">
        <font-awesome-icon icon="fa-solid fa-circle-user" size="2x" /> <span></span><p>Welcome {{ authorizationPersonnelTEXT }}</p>
        <font-awesome-icon class="icon" v-if="!isShowStaffAdminColumn" :icon="['fas', 'caret-down']" @click="toggleStaffAdminColumn" />
        <font-awesome-icon class="icon" v-if="isShowStaffAdminColumn" :icon="['fas', 'caret-up']" @click="toggleStaffAdminColumn" />
        <div class="dropdown" v-if="isShowStaffAdminColumn">
            <!-- <router-link to="/personnel/client" @click="toggleStaffAdminColumn">CLIENTS</router-link>
            <router-link to="/personnel/subdivision" @click="toggleStaffAdminColumn">SUBDIVISION</router-link>
            <router-link to="/personnel/inquiries" @click="toggleStaffAdminColumn">INQUIRIES</router-link>
            <router-link to="/personnel/emptyForms" @click="toggleStaffAdminColumn">EMPTY FORMS</router-link>
            <router-link to="/personnel/reports" @click="toggleStaffAdminColumn">REPORTS</router-link>
            <button>STAFF REQUEST</button> -->
            <!-- <button>Profile</button> -->
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
        authorizationPersonnelTEXT(){
            return this.$store.getters['auth/authorizationPersonnelTEXT']
        },
    }
}
</script>

<style scoped>

.dropdown{
    background-color: white;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.1);
    z-index: 3;
}
.navStaffAdmin{
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 1rem;
  }
  .navStaffAdmin p{
    margin-left: .2rem;
    margin-right: .5rem;
  }
  .navStaffAdmin div{
    position: absolute;
    right: 0;
    top: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .navStaffAdmin .icon{
    cursor: pointer;
    scale: 1.5;
  }
  .navStaffAdmin .icon:hover{
    scale: 1.8;
    transition: scale .1s ease-in;
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