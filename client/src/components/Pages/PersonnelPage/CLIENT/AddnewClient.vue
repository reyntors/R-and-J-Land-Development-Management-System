<template>
    <div>
      <section>
          <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left-long" size="2x" @click="back"/>
      </section>
      <form>
          ADD NEW CLIENT FORM HERE
      </form>
    </div>
  </template>
  
  <script>
  export default{
      emits: ['go-back'],
      methods: {
          back(){
              this.$emit('go-back')
          }
      }
  }
  </script>
  
  
  <style scoped>
  div{
      height: 100%;
      width: 100%;
      background-color: bisque;
      padding: 0 1rem;
  }
  section{
      height: 10%;
      padding-left: .5rem;
      display: flex;
      justify-content: start;
      align-items: center;
  }
  section .icon{
      cursor: pointer;
  }
  section .icon:hover{
      color: blue;
      scale: 1.2;
  }
  section .icon:active{
      color: rgba(0, 0, 0, 0.427);
  }
  </style>