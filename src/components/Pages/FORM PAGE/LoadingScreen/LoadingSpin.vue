<template>
    <div id="loadingSpinSubmitForm">
      <div class="custom-loader"></div>
    </div>
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  #loadingSpinSubmitForm{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50% , -50%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .custom-loader {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: 
      radial-gradient(farthest-side,#766DF4 94%,#0000) top/16px 16px no-repeat,
      conic-gradient(#ffffffbe 30%,#2517e6);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 16px),#000 0);
    animation:s3 1s infinite linear;
  }
  
  @keyframes s3{ 
    100%{transform: rotate(1turn)}
  }
  </style>