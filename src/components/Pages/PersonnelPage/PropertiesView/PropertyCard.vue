<template>
  <div class="property-cont" :style="setColor">
    <!-- {{ property }} -->
    <header>
        <button class="option" @click="toggleOption" v-if="!optionClicked">Option <font-awesome-icon class="icon" icon="fa-solid fa-gear" /></button>
        <button class="option" v-if="optionClicked" @click="update">Update</button>
        <button class="option" @click="toggleOption" v-if="optionClicked">Cancel</button>
    </header>

    <section>
        <div class="div1">
            //image
        </div>
        <div class="div2">
            <section>
                <label :for="property.block_Lot_No">Block and Lot No. </label>:<input :id="property.block_Lot_No" readonly v-model="lotNo">
            </section>
            <section>
                <label :for="property.block_Lot_No+'Total Sq. Meters'">Total Sq. Meters</label>: <input :id="property.block_Lot_No+'Total Sq. Meters'" v-model="totalSq" :readonly="!editable">
            </section>
            <section>
                <label :for="property.block_Lot_No+'Amount per Sq.'">Amount per Sq.</label>:<input :id="property.block_Lot_No+'Amount per Sq.'" v-model="amountPerSq" :readonly="!editable">
            </section>
            <section>
                <label :for="property.block_Lot_No+'Total Amount Due'">Total Amount Due</label>:<input :id="property.block_Lot_No+'Total Amount Due'" v-model="amountDue" :readonly="!editable">
            </section>
        </div>
    </section>
    <div class="selectCont">
        <select :id="idSelect" v-model="status" readonly>
                        <option value="sale">SALE</option>
                        <option value="sold">SOLD</option>
                        <option value="reserved">RESERVED</option>
        </select>        
    </div>

  </div>
</template>

<script>
export default {
    emits: ['close-one'],
    props: ['property'],
    data(){
        return{
            lotNo: this.property.block_Lot_No,
            totalSq: this.property.total_Sq_M,
            amountPerSq: this.property.amount_per_Sq,
            amountDue: this.property.total_Amount_Due,
            status: this.property.status,

            optionClicked: false,
            editable: false,
            selectDisabled: true,
        }
    },
    
    methods: {
        toggleOption(){
            this.optionClicked = !this.optionClicked
            this.editable = !this.editable
            this.selectDisabled = !this.selectDisabled   

            const id = this.lotNo + 'selectPropertyStatus'
            const select = document.getElementById(id)
            const bool = this.selectDisabled
            select.disabled = bool;
        },
        disableSelect(){     
            const id = this.lotNo + 'selectPropertyStatus'
            const select = document.getElementById(id)
            select.disabled = true;         
        },

        update(){
            const payload = {
                block_Lot_No: this.lotNo,
                total_Sq_M: this.totalSq,
                amount_per_Sq: this.amountPerSq,
                total_Amount_Due: this.amountDue,
                status: this.status
            }
            this.$store.dispatch('properties/update',payload)
            this.toggleOption()
            this.$emit('close-one')
        }
    },

    computed:{
        setColor(){
            if(this.property.status === 'sale'){
                return 'background-color: white'
            }else if(this.property.status === 'sold'){
                return 'background-color: green'
            }else if(this.property.status === 'reserved'){
                return 'background-color: yellow'
            }else{
                return 'background-color: white'
            }
        },
        idSelect(){
            return this.lotNo + 'selectPropertyStatus'
        }
    },

    mounted(){
        this.disableSelect()
    }


}
</script>

<style scoped>
.property-cont{
    background-color: rgba(0, 0, 0, 0.1);
    padding: .5rem;
    border: 1px
}
.property-cont header{
    display: flex;
    justify-content: end;
    gap: .5rem;
    margin-bottom: .5rem;
}
.property-cont > section{
    display: flex;
    gap: .2rem;
}
.property-cont section .div1{
    width: calc(100%/3);
    /* border:1px solid black; */
}
.property-cont section .div2{
    width: calc(100%/3*2);
    /* border:1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.property-cont section .div2 section{
    display: flex;
    width: 100%;
    /* border: 1px solid black; */
}
.property-cont section .div2 section input{
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
.property-cont button{
    border:none;
    background-color: #31A72A;
    color: white;
    padding: .5 rem;
    outline: 1px solid black;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.475);
}
.property-cont button icon{
    color: white;
}
.property-cont button:hover{
    background-color: #30a72a8e;
}
.property-cont button:active,
.property-cont button:active .icon{
    color: black;
}
.selectCont{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: .5rem;
}
</style>