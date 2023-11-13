<template>
  <div style="position: relative;"> 
    <button>
      <slot></slot>
    </button>
  </div>

</template>


<style scoped>
div{
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
}
button{
    /* display: block; */
    border: none;
    /* width: 20%; */
    /* min-width: 100px; */
    /* margin: 1rem auto; */
    padding: .5rem 1rem;
    font-size: clamp(.8rem, 1.5vw, 2rem);
    background-color: #86D916;
    box-shadow: 0 1px 1px 1px gray;
    border-radius: 5px;
    text-align: center;
    color: black;
    text-decoration: none;
    cursor: default;
}
button:hover{
    background-color: #84d91697; 
}
button:active{
    background-color: #84d91697;
    box-shadow: none;
}
</style>