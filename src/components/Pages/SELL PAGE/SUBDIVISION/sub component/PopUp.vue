<template>
    <div class="popup-container" :class="returnClass(details.status)">
        <section class="popup-container-section">
            <font-awesome-icon icon="fa-solid fa-xmark" class="icon" @click="closeDetails"/>  
            <div class="details">
                <ul class="unordered-list">
                    <li class="unordered-list-item"><span>Lot Number:</span><span>{{ details.lotNumber }}</span></li>
                    <li class="unordered-list-item"><span>Total Squared Meters:</span><span>{{ details.totalSqm }}</span></li>
                    <li class="unordered-list-item"><span>Status:</span><span>{{ details.status }}</span></li>
                    <li class="unordered-list-item"><span>Total Price:</span><span>{{ details.totalAmountDue }}</span></li>
                    <li class="unordered-list-item"><span>Images:</span>
                        <ul class="sub-unordered-list"> 
                            <li class="sub-unordered-list-item" v-for="(image,index) in details.image" :key="index">
                                <p @click="openImg(image)">{{image}}</p>
                            </li>                            
                                                      
                        </ul>
                    </li>
                    <li class="button-container">
                        <animated-button v-if="availableButton" @click="clickedReserveNow">Reserve now</animated-button>
                       <!-- <a class="button" v-if="availableButton" @click="clickedReserveNow">Reserve now</a> -->
                    </li>
                    
                </ul>
                        
   
            </div>
        
        </section>
        
    </div>
</template>

<script>
export default {
    props:['details'],
    emits: ['closeDetails',"reserveNow"],
    data(){
        return{
            img: null,
            projectName : "Heirs of Joel Joaquin"
        }
    },
    methods:{
        returnClass(status){ //assign class based on the status
            if(status === 'sold'){
                return 'sold'
            }else if(status === 'sell'){
                return 'sell'
            }else if(status == 'reserved'){
                return 'reserved'
            }else{
                return 'none'
            }
        },
        closeDetails(){
            this.$emit('closeDetails')
        },
        openImg(img){
            console.log(img)
            // window.open(img, '_blank');
        },
        clickedReserveNow(){ //emit reservenow
            this.$store.commit('subdivision/setlotNumberSelected',{     //pass the lot info into the letter of intent
                projectName:this.projectName,
                lotNumberSelected:this.details.lotNumber
            })  
            this.$store.commit('subdivision/redirectLetterOfIntent',true)   //set the redirect to letter of intent to true after logging in
            this.$emit('reserveNow',this.details)
        }
    },
    computed:{
        availableButton(){ //show button if the status is sell
            if(this.details.status === 'sell'){
                return true
            }else{
                return false
            }
           
        }
    }
}
</script>

<style scoped>
.popup-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-height: 12rem;
    min-width: 12rem;
    height: 40%;
    width: 50%;
    max-width: 30rem;
    background-color: white;
    box-shadow: 0 0 .2rem .2rem rgba(0, 0, 255, .3);
    animation: respawn .5s ease-in-out;
    outline: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px; 
}
@keyframes respawn {
    0%{
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.1);
    }
    100%{
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}
.sell{
    /* background-image: linear-gradient(120deg, rgba(0, 0, 255, .5),rgba(0, 0, 255, .1),rgba(0, 0, 255, .5)); */
    outline: .2rem solid rgba(0, 0, 255, .2);
    background-image: radial-gradient(white,rgba(82, 114, 242, .95));
    /* background-color: rgba(82, 114, 242, .95); */
    box-shadow: 0 0 1rem .1rem rgba(0, 0, 255, .3);
}
.sold{
    outline: .2rem solid rgba(255, 0, 0, .2);
    /* background-image: linear-gradient(120deg, rgba(255, 0, 0, .5),rgba(255, 0, 0, .1),rgba(255, 0, 0, .5)); */
    background-image: radial-gradient(white,rgba(255, 0, 0, .5));
    box-shadow: 0 0 1rem .1rem rgba(255, 0, 0, .3);
}
.reserved{
    outline: .2rem solid rgba(255, 217, 0, 1);
    background-image: radial-gradient( white,rgba(255, 217, 0, .5));
    box-shadow: 0 0 1rem .1rem rgba(255, 217, 0, .3);
}
.popup-container .popup-container-section{
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: relative;
    /* border: 1px solid black; */
}
.popup-container .popup-container-section .icon{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    color: rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
    padding: .5rem;
    transition: color .3s ease-in-out;
}
.popup-container .popup-container-section .icon:hover{
    color: black;
}
.details{
    height: 100%;
    padding-top: 1rem;
}
.unordered-list{
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    height: 100%;
    
}
.unordered-list .unordered-list-item:not(:nth-child(5)){
    display: flex;
    justify-content: space-between;
}
.unordered-list .unordered-list-item span{
    text-transform: capitalize;
}
.unordered-list .unordered-list-item span:not(:first-child){
    font-weight: 900;
}
.unordered-list .unordered-list-item:nth-child(5){
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
.unordered-list .unordered-list-item .sub-unordered-list{
    display: block;
    overflow: auto;
    height: 100%;
}
.unordered-list .unordered-list-item .sub-unordered-list p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: all .5s ease-in-out;
}
.unordered-list .unordered-list-item .sub-unordered-list p:hover{
    font-weight: 700;
    text-decoration: underline;
}
.button-container{
    text-align: center;
    margin-top: .5rem;
}
.button-container .button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: .5rem;
    transition: all .5s ease-in-out;
    background-color: red;
    z-index: -1;
}
.button-container .button{
    padding: .5rem 1rem;
    text-decoration: none;
    text-transform: capitalize;
    color: black;
    border-radius: .5rem;
    box-shadow: 0 0 .2rem .1rem rgba(0, 0, 0, 0.2);
    position: relative;
    white-space: nowrap;
    background-color: gold;
    cursor: pointer;
    z-index: 1;
}

.button-container .button:hover::before{
    transform: scale(1.3);
    opacity: 0;
    /* animation: animation 1s ease-in-out infinite; */
}
/* @keyframes animation {
    0%{
        transform: scale(1);
        opacity: 1;
    }
    100%{
        transform: scale(1.3);
        opacity: 0;
    }
} */
::-webkit-scrollbar-thumb {
    border-radius: 3rem;
}
</style>