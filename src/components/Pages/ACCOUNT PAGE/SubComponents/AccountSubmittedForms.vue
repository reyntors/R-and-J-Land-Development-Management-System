<template>
  <div class="account-submitted-forms">
    <h2>Your Submitted Forms</h2>
    <div class="c-conts">
      <ul v-for="(item,index) in list" :key="index">
        <li>
          <section>
            <a :href="item.url" :download="fileName(index)">
              <form-thumbnail :imgThumbTitle="index" :title="index"></form-thumbnail>
            </a>
          </section>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>

export default {
  props: ['formLists'],
  data(){
    return{
      list:[],
    }
  },
  methods:{
    fileName(title){
      return title+'.pdf'
    }
  },
 
  async created(){
    this.list = {...this.formLists}
    console.log(this.list)
  }
}
</script>

<style scoped>
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
section{
  padding: .5rem;
}
.c-conts{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 0;
  /* border: 1px solid black; */
}
.account-submitted-forms{
  width: 90%;
  margin: auto;
  margin-top: 2rem;
}
@media only screen and (min-width: 1200px){
  .c-conts{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 600px){
  .c-conts{
    grid-template-columns: 1fr 1fr;
  }
}
</style>