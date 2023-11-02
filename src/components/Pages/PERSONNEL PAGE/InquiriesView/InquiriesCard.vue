<template>
  <div class="inquiries-card">

    <div style="display: flex; justify-content: end;">
        <font-awesome-icon id="exit-icon" icon="fa-solid fa-x" @click="exitCard"/>
    </div>

    <header>
        <h3 style="display: inline; font-weight: 700; text-transform: uppercase;">{{ obj.name }}</h3>
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
        <span v-if="obj.subject === 'Request to update the data' && obj.userId" class="approve-decline">
           <button @click="approveRequest('approved')">Approve</button> 
           <button @click="approveRequest('rejected')">Reject</button> 
        </span>
        <span v-else> 
            <button @click="mark(obj.inquiryId)" v-if="!obj.mark">Mark read <font-awesome-icon :icon="['fas', 'envelope-circle-check']" /></button>
            <button v-if="obj.mark" @click="mark(obj.inquiryId)" >Mark Unread <font-awesome-icon :icon="['fas', 'envelope-open']" /></button>            
        </span>    
    </section>

  </div>

  <div v-if="isLoading" class="shade"/>
  <progress-loading type="spin" v-if="isLoading"/>

</template>

<script>
import { toast } from 'vue3-toastify'
export default {
    emits: ['exit'],
    props: ['obj','class-name'],
    data(){
        return{
            isLoading: false,
        }
    },
    methods: {
        exitCard(){
            this.$emit('close-card')
        },  
        async mark(id){
            console.log('mark diri',id)
            const isConfirm =  confirm('Are you sure?')
            if(isConfirm){
                try{
                    this.isLoading = true
                    await this.$store.dispatch('inquiries/markInquiry',id)
                    console.log('somehthingg')
                    this.exitCard()  
                }catch(error){
                    toast.error(error)
                    await new Promise(resolve => setTimeout(resolve,500))
                    this.exitCard() 
                }
                
            }
            
        },
        openLink(link){
            console.log('fb')
            window.open(link,)
        },
        async approveRequest(status){
            try{
                const response = await this.$store.dispatch('inquiries/approveUpdateRequest',{id:this.obj.userId,status:status})
                toast.success(response)
            }catch(error){
                toast.error(error)
            }
        }
    },
    computed:{
        email(){
            return this.obj.email
        }
    },
    mounted(){
        const className = '.'+this.className
        // console.log(className)
        const item = document.querySelector(className)
        // console.log('from the viewport',item.getBoundingClientRect().top)
        // console.log('height',item.offsetHeight)
        // console.log('distance top from relative',item.offsetTop)

        const headerHeight = document.querySelector('.header').offsetHeight/2;
           window.scrollTo({
                      top: item.offsetTop + headerHeight,
                      behavior: 'smooth',
                  });
    }
}
</script>

<style scoped>
.approve-decline{
    display: flex;
    gap: .5rem;
}
.shade{
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0,.2);
}
.inquiries-card{
    width: 100%; 
    height: 70vh;
    background-color: white;
    /* position: absolute; */
    /* top: 50%;
    left: 50%; 
    transform: translate(-50%,-50%); */
    /* border: 1px solid black; */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.401);
    overflow-y: auto; 
    z-index: 10;
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
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.5);
}
button:hover{
    background-color: #30a72a61;
}
button:active{
    color: rgba(0, 0, 0, 0.322);
    box-shadow: none;
}
</style>