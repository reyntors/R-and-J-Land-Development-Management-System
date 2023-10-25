<template>

  <div class="subdivision-card-cont" :style="setColor">
    
    <form @submit.prevent="update" enctype="multipart/form-data">
    <header>
        <button class="option" @click="toggleOption" v-if="!optionClicked">Option <font-awesome-icon class="icon" icon="fa-solid fa-gear" /></button>
        <button class="option" v-if="optionClicked" type="submit">Update</button>
        <button class="option" @click="toggleOption" v-if="optionClicked">Cancel</button>
    </header>

    <section>
        <div class="div1">
            <subdivision-swiper :list="subdivision.image"></subdivision-swiper>
        </div>
        <div class="div2">

            <span v-if="optionClicked" style="display: flex;">
                <input id="uploadImage" type="file" name="myImage" accept="image/*" @change="getUploadedImg" />                
            </span>
         
            <section>
                <label :for="subdivision.lotNumber">Block and Lot No. </label>:<input :id="subdivision.lotNumber" readonly v-model="lotNo">
            </section>
            <section>
                <label :for="subdivision.lotNumber+'Total Sq. Meters'">Total Sq. Meters</label>: <input :id="subdivision.lotNumber+'Total Sq. Meters'" v-model="totalSq" :readonly="!editable">
            </section>
            <section>
                <label :for="subdivision.lotNumber+'Amount per Sq.'">Amount per Sq.</label>:<input :id="subdivision.lotNumber+'Amount per Sq.'" v-model="amountPerSq" :readonly="!editable">
            </section>
            <section>
                <label :for="subdivision.lotNumber+'Total Amount Due'">Total Amount Due</label>:<input :id="subdivision.lotNumber+'Total Amount Due'" v-model="amountDue" :readonly="!editable">
            </section>
            
        </div>
    </section>
    <div class="selectCont">
        <select :id="idSelect" v-model="status" :disabled="selectDisabled">
                        <option value="sale">SALE</option>
                        <option value="sold">SOLD</option>
                        <option value="reserved">RESERVED</option>
        </select>        
    </div>
    </form>

  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import SubdivisionSwiper from './SubdivisionSwiper.vue'
export default {
  components: { SubdivisionSwiper},
    emits: ['close-one'],
    props: ['subdivision'],
    data(){
        return{
            lotNo: this.subdivision.lotNumber,
            totalSq: this.subdivision.totalSqm,
            amountPerSq: this.subdivision.amountperSquare,
            amountDue: this.subdivision.totalAmountDue,
            status: this.subdivision.status,
            displayedImg: this.subdivision.image,

            imageURL : this.subdivision.URL,

            optionClicked: false,
            editable: false,
            selectDisabled: true, 

            isloading: true,
        }
    },
    
    methods: {
        toggleOption(){
            this.optionClicked = !this.optionClicked
            this.editable = !this.editable
            this.selectDisabled = !this.selectDisabled   
        },

        checkIfDataChanged(){
            if(
                this.totalSq === this.subdivision.totalSqm &&
                this.amountPerSq === this.subdivision.amountperSquare &&
                this.amountDue === this.subdivision.totalAmountDue &&
                this.status === this.subdivision.status && 
                this.displayedImg === this.subdivision.imageUrl){

                return false
            }else{
                return true
            }       
        },
        checkIfNullForm(){
            if(

                //  not yet image checker   
                this.totalSq === null ||
                this.amountPerSq === null ||
                this.amountDue === null ||
                this.status === null
            ){
                return true
            }else{
                return false
            }
        },

        async update(){
            console.log('submit')
            const isUpdated = this.checkIfDataChanged()
            const isNull = this.checkIfNullForm()
            if(isUpdated && !isNull){
                const form = new FormData()
                form.append('totalSqm',this.totalSq)
                form.append('amountperSquare',this.amountPerSq)
                form.append('totalAmountDue',this.amountDue)
                form.append('status',this.status)
                form.append('image',this.displayedImg)
                try{
                    this.$emit('updating-now')
                    const response = await this.$store.dispatch('subdivision/update',{
                                        lotNo: this.lotNo,
                                        form: form
                                    })
                    this.$emit('reload-list') 
                    toast.success(response) 
                }catch(error){
                    console.log(error)
                    toast.error(error)
                }
                this.toggleOption()
                this.$emit('close-one')   
              
            }else{
                if(!isUpdated){
                    toast.warning('No Changes')
                }else if(isNull){
                    toast.warning('Please no empty value')
                }
            }

            
        },

        getUploadedImg(event){
            const uploadedFile = event.target.files[0]
            this.displayedImg  = uploadedFile
        },

    },

    computed:{
        setColor(){
            if(this.subdivision.status === 'sale'){
                return 'background-color: white'
            }else if(this.subdivision.status === 'sold'){
                return 'background-color: green'
            }else if(this.subdivision.status === 'reserved'){
                return 'background-color: yellow'
            }else{
                return 'background-color: white'
            }
        },
        idSelect(){
            return this.lotNo + 'selectSubdivisionStatus'
        },
        idCarousel(){
            return 'carouselSubdivision' + this.lotNo 
        }
    },

    mounted(){
    }


}
</script>

<style scoped>
.subdivision-card-cont{
    background-color: rgba(0, 0, 0, 0.1);
    padding: .5rem;
    border: 1px solid black;
    width: 100%;
    /* position: relative; */
}
.subdivision-card-cont header{
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    margin-bottom: .5rem;
}
.subdivision-card-cont > section{
    display: flex;
    flex-direction: column;
    gap: .2rem;
    /* height: 50vh; */
}
 .subdivision-card-cont section .div1{
    display: flex;
    flex-direction: column;
    height: 50vh;
    border: 1px solid black;
    position: relative;
    width: 100%;
}  
.carousel-sub{
    width: 100%;
    height: 100%;
}
.carousel-inner {
    width: 100%;
    height: 100%;   
}
.carousel-inner img{
    object-fit: cover;
    width: 100%;
}
.subdivision-card-cont section .div1 img{
    object-fit: cover;
    width: 100%;
} 
.subdivision-card-cont section .div1 .icon{
    color: white;
    padding: .2rem .5rem;
    background-color: rgba(0, 0, 0, 0.2);
}
.subdivision-card-cont section .div1 .icon:active{
    color: rgba(0, 0, 0, 0.7);
}

.subdivision-card-cont section .div1 .icon-left{
    position: absolute;
    top: 50%;
    left: 0;
}
.subdivision-card-cont section .div1 .icon-right{
    position: absolute;
    top: 50%;
    right: 0;
}


.subdivision-card-cont section .div2{
    /* width: calc(100%/3*2); */
    display: flex;
    flex-direction: column;
    gap: 5px;
} 

.subdivision-card-cont section .div2 section{
    display: flex;
    width: 100%;
    /* border: 1px solid black; */
}
.subdivision-card-cont section .div2 section input{
    width: 10%;
    flex-grow: 1;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid black;
    padding-left: .5rem;
    margin-left: 2px;
    text-align: center;
    font-weight: 600;
}
.subdivision-card-cont button{
    border:none;
    background-color: #31A72A;
    color: white;
    padding: .5 rem;
    outline: 1px solid black;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.475);
}
.subdivision-card-cont button icon{
    color: white;
}
.subdivision-card-cont button:hover{
    background-color: #30a72a8e;
}
.subdivision-card-cont button:active,
.subdivision-card-cont button:active .icon{
    color: black;
}
.selectCont{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: .5rem;
}
#uploadImage{
    width: 100%; 
    padding-top: .5rem;
}
.btn-bckgrnd{
    background-color: transparent;
}

</style>