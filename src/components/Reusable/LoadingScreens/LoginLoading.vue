<template>
    <div id="loadingSpinner">
      <div class="custom-loader"></div>
    </div>
    
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  #loadingSpinner{
    position: absolute;
    top: 200%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
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