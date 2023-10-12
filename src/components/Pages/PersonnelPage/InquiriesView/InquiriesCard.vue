<template>
  <div class="inquiries-card">
    <div style="display: flex; justify-content: end;">
        <font-awesome-icon id="exit-icon" icon="fa-solid fa-x" @click="exitCard"/>
    </div>
    <header>
        <h3 style="display: inline; font-weight: 700;">{{ obj.name }}</h3>
        <p> {{  obj.subject }}</p>
    </header>
    <hr>
    <article>
        <p>DATE: <span>{{ obj.date }}</span></p>
        <p>EMAIL:<span>{{ email }}</span></p>
        <p>PHONE NO.:<span>{{ obj.phonenumber }}</span></p>
        <p>FACEBOOK LINK.:<span class="link" @click="openLink('https://www.facebook.com/karl.borromeo.35/')">{{ obj.fblink }}</span></p>
        <br>
        <p>{{ obj.context }}</p>

    </article>
    <hr>
    <section class="option">
        <button @click="mark(obj.id)" v-if="!obj.read">Mark read <font-awesome-icon :icon="['fas', 'envelope-circle-check']" /></button>
        <button @click="mark(obj.id)" v-if="obj.read">Mark Unread <font-awesome-icon :icon="['fas', 'envelope-open']" /></button>
    </section>
  </div>
</template>

<script>

export default {
    emits: ['exit'],
    props: ['obj'],
    methods: {
        exitCard(){
            this.$emit('close-card')
        },  
        mark(id){
            console.log('mark',id)
            const isConfirm =  confirm('Are you sure?')
            if(isConfirm){
                this.$store.commit('inquiries/markInquiry',id)
                this.exitCard()
            }
            
        },
        openLink(link){
            console.log('fb')
            window.open(link,)
        }
    },
    computed:{
        email(){
            return this.obj.email
        }
    }
}
</script>

<style scoped>
.inquiries-card{
    width: 80%;
    height: 85%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.401);
}
.inquiries-card article{
    flex-grow: 1;
}
#exit-icon{
    color: #b0bbcf;
    cursor: pointer;
}
#exit-icon:hover{
    color: black;
}
#exit-icon:active{
    color: #b0bbcf;
}
.option{
    display: flex;
    justify-content: space-between;
}
span{
    margin-left: .5rem;
    font-weight: 600;
}
.link{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
.link:hover{
    color: rgba(0, 0, 255, 0.5);  
}
.link:active{
    cursor: progress;
}
button{
    padding: .5rem;
    background-color: #30a72a8e;
    border: none;
}
button:hover{
    background-color: #30a72a61;
}
button:active{
    color: rgba(0, 0, 0, 0.322);
}
</style>