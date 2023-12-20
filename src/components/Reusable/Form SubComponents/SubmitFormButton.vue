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
    transition: all .3s ease-in;
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
    background-color: red;
    z-index: -1;
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

button:hover::before{
    transform: scale(1.3);
    opacity: 0;
    /* animation: animation 1s ease-in-out infinite; */
}
</style>