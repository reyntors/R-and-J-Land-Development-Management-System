<template>
  <div style="position: relative;"> 
    <a>
      <slot></slot>
    </a>
  </div>

</template>


<style scoped>
a{
    display: block;
    border: none;
    /* width: 20%; */
    /* min-width: 100px; */
    /* margin: 1rem auto; */
    padding: .5rem 1rem;
    font-size: clamp(.8rem, 1.5vw, 2rem);
    background-color: #86D916;
    box-shadow: 0 1px 1px 1px gray;
    font-weight: 600;
    /* border-radius: 10px; */
    text-align: center;
    color: black;
    text-decoration: none;
    cursor: default;
}
a:hover{
    background-color: #84d91697; 
}
a:active{
    background-color: #84d91697;
    box-shadow: none;
}
</style>