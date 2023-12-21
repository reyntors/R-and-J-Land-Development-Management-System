<template>
  <div class="reusableContainer" :style="{backgroundColor: backgroundColor}">
    <header class="title">
        <h1 class="title-text" :style="{color:textColor}">{{title}}</h1>
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
                return 'rgba(0,0,0,.2)'
            }else{
                return '#F0A500'
            }
        },
        textColor(){
            if(this.typeBG == 1){
                return '#F0A500'
            }else{
                return '#F4F4F4'
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
    /* background-image: linear-gradient(120deg,rgba(0, 0, 0, 1),rgba(255, 255, 255, 0.347),rgba(0, 0, 0, 1),white); */
    /* background-size: 400%;
    background-position: 50%; */
    /* transition: all .3s; */
}
.title-text{
    font-weight: 1000;
    /* background: #000000;
    background: linear-gradient(to right, #000000 27%, #FFFFFF 100%, #000000 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    color: #F0A500;
    text-shadow: 2px 2px 1px black;
    /* border: 1px solid black; */
    display: inline-block;
    transform: scale(1.2);
}
.reusableContainer:hover .title{
    background-size: 100%;
    text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.121);
    background-position: 0%;
}
@media only screen and (max-width: 600px){
    .reusableContainer{
        padding: 1rem 3rem;
    }
}
</style>