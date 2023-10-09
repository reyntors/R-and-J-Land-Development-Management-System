<template>
  <div class="inquiries-card">
    <div style="display: flex; justify-content: end;">
        <font-awesome-icon id="exit-icon" icon="fa-solid fa-x" @click="exitCard"/>
    </div>
    <header>
        <h4 style="display: inline;">{{ obj.name }}</h4>
        <span> {{ email }}</span>
    </header>
    <hr>
    <article>
        <h6>{{ obj.subject }}</h6>
        <p>{{ obj.message }}</p>

    </article>
    <hr>
    <section class="option">
        <button @click="delInquiry(obj.id)">Delete <font-awesome-icon :icon="['fas', 'trash-can']" /></button>
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
        delInquiry(id){
            this.$store.commit('inquiries/delInquiry',id)
            this.exitCard()
        },
        mark(id){
            console.log('mark',id)
            this.$store.commit('inquiries/markInquiry',id)
        }
    },
    computed:{
        email(){
            return '< '+ this.obj.email + ' >'
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
</style>