<template>
  <div style="position: relative;"> 
    <button>
      <slot></slot>
    </button>
  </div>

</template>


<style scoped>
div{
  display: flex;
  justify-content: center;
  margin-top: .5rem;
}
button{
      border: none;
      padding: .5rem 1rem;
      text-decoration: none;
      text-transform: capitalize;
      color: black;
      border-radius: .5rem;
      box-shadow: 0 0 .2rem .1rem rgba(0, 0, 0, 0.2);
      position: relative;
      white-space: nowrap;
      background-color: gold;
      cursor: pointer;
      z-index: 1;
  }
  button::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      border-radius: .5rem;
      transition: all .5s ease-in-out;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
      animation: animation 1s ease-in-out infinite;
  }
  button::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      border-radius: .5rem;
      background-color: gold;
      z-index: -1;
  }
  button:hover::after,
  button:hover::before,
  button:hover{
      background-color: rgba(0, 0, 0, 0.5);
      animation: none;
      color: white;
  }
  @keyframes animation{
  0%{
    opacity: 1;
    transform: scale(1);
  }
  100%{
    transform: scale(1.4);
    opacity: .1;
  }
}
</style>