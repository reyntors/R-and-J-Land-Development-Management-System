<template>
  <div class="reusableContainer" :style="{backgroundColor: backgroundColor}">
    <header class="title">
        <h1 class="title-text">{{title}}</h1>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default{
    props: ['title','typeBG'],
    computed:{
        backgroundColor(){
            if(this.typeBG == 1){
                return 'white'
            }else{
                return 'rgba(0, 0, 0, .1)'
            }
        },

        color(){
            return 'red'
        }
    },
    mounted(){
        console.log('type background',this.typeBG)
    }
}
</script>



<style scoped>
.reusableContainer{
    /* border: 3px solid blue; */
    padding: 1rem 5rem;
}
.title{
    text-align: center;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 3px;
    /* background-image: linear-gradient(120deg,black,white,black,white); */
    background-image: linear-gradient(120deg,rgba(0, 0, 0, 1),rgba(255, 255, 255, 0.347),rgba(0, 0, 0, 1),white);
    background-size: 400%;
    background-position: 50%;
    transition: all .3s;
}
.title-text{
    font-weight: 1000;
    background: #000000;
    background: linear-gradient(to right, #000000 27%, #FFFFFF 100%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 1px white;
}
.reusableContainer:hover .title{
    background-size: 100%;
    text-shadow: 2px 2px 1px white;
    background-position: 0%;
}
@media only screen and (max-width: 600px){
    .reusableContainer{
        padding: 1rem 3rem;
    }
}
</style>