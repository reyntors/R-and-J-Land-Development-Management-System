<template>
  <div class="background">
  </div>
  <div class="card">
    <form @submit.prevent="">
        <div class="icon-container">
          <h1>Login Form</h1>
          <font-awesome-icon icon="fa-solid fa-x" size="1x"  class="icon" @click="close"/>
        </div>

        <img src="@/assets/logo.png">
        <div class="form">
          <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
              
          </div>
          <div class="c-button">
            <button type="button" class="btn btn-primary p-3 fs-5">LOGIN</button>
            <div class="or">
              <span/>or<span/>
            </div>
            <button type="button" class="btn btn-primary p-3 fs-5">SIGN UP</button>
          </div>  
        </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    close(){
      this.$emit('close-button')
    }
  }
}
</script>


<style scoped>
.card{
    position: absolute;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
    width: 40vw;
    /* height: 60vh; */
    border-radius: 10px;
    padding: 2rem;
    z-index: 2;
    background-color: white;
    outline: 1px solid black;
    text-align: center;
}
form{
  position: relative;
}
.icon-container{
  display: flex;
  justify-content: space-between
}
.icon{
  /* background-color: rgb(219, 209, 209); */
  padding: 1rem;
}
.icon:active, .icon:hover{
  background-color:rgba(195, 181, 181, 0.844)}
img{
  width: 40%;
}
.form{
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.c-button{
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}
.c-button span{
  display: inline-block;
  width: 50%;
  border: .5px solid rgba(156, 139, 139, 0.721);
  margin: 0 .5rem;
}
.or{
  display: flex;
  align-items: center;
  justify-content: center;
}
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(116, 105, 105, 0.425);
  z-index: 2;
}
</style>