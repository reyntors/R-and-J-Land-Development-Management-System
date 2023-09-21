<template>
    <button>
      <slot></slot>
    </button>
  </template>
  
  
  <style scoped>
  button{
      display: block;
      border: none;
      width: 20%;
      min-width: 100px;
      margin: 1rem auto;
      padding: .5rem;
      font-size: clamp(.8rem, 1.5vw, 2rem);
      background-color: #86D916;
      box-shadow: 0 1px 1px 1px gray;
      font-weight: 500;
      border-radius: 10px;
  }
  button:hover{
      outline: 1px solid black;  
  }
  button:active{
      background-color: #84d91697;
  }
  </style>