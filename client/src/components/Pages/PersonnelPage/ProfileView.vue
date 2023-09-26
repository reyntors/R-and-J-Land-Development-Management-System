<template>
    <div class="profileViewContainer">
  
      <section class="imageName">
          <img src="@/assets/profile.jpg">
          <h6>Mary Grace P. Gallardo</h6>
      </section>
  <br>
      <section class="navigations">
          <router-link to="/personnel/dashboard">DASHBOARD</router-link>
          <router-link to="/personnel/client">CLIENTS</router-link>
          <router-link to="/personnel/properties">PROPERTIES</router-link>
          <router-link to="/personnel/inquiries">INQUIRIES</router-link>
          <router-link to="/personnel/payment">PAYPMENT</router-link>
          <router-link to="/personnel/reports">REPORTS</router-link>
      </section>
  
    </div>
  </template>
  
  
  <style scoped>
  .profileViewContainer{
      width: 20vw;
      height: 85vh;
      padding: 1rem;
      border-right: 1px solid black;
  }
  .imageName{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 1rem;
  }
  .imageName img{
      width: 80%;
      border-radius: 100%;
      border: 2px solid black;
  }
  
  .navigations{
      display: flex;
      flex-direction: column;
  }
  .navigations a{
      text-align: center;
      border: 1px solid black;
      padding: .5rem;
      margin-bottom: 2px;
      text-decoration: none;
  }
  .router-link-active{
    /* outline: 1px solid blue; */
    background-color: purple;
    color: white;
  }
  </style>