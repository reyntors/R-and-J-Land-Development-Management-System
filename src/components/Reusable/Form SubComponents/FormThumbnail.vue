<template>
  <div class="card-container">
    <header class="fw-bold p-3">
        {{ title }}
    </header>
    <section>
        <img :src="imgLink">
    </section>
  </div>
</template>

<script>
import LetterOfIntent from '@/assets/form-thumbnails/letter-of-intent.jpg';
import BIR_TIN_Request from '@/assets/form-thumbnails/bir.jpg';
import BuyerInfo from '@/assets/form-thumbnails/buyer-info.jpg';
import ReservationAgreement from '@/assets/form-thumbnails/reservation.jpg';
import individual from '@/assets/form-thumbnails/individual-buyer-declaration.png';
import ApprovedPaymentScheme from '@/assets/form-thumbnails/approve-payment.png';
import ChecklistClosingSale from '@/assets/form-thumbnails/checklist-for-closing.png';
import CallSlip from '@/assets/form-thumbnails/call-slip.png';
import ContractToSell from '@/assets/form-thumbnails/Contract-to-sell.png'

export default {
    props: ['title','imgThumbTitle'],
    data(){
        return{
            img: null,
        }
    },
    computed:{
        imgLink(){
            if(this.imgThumbTitle === 'letterOfIntent'){
                return LetterOfIntent
            }
            else if(this.imgThumbTitle === 'birTinRequest'){
                return BIR_TIN_Request
            }
            else if(this.imgThumbTitle === 'buyerInfoSheet'){
                return BuyerInfo
            }


            else if(this.imgThumbTitle === 'individualBuyerDeclaration'){
                return individual
            }
            else if(this.imgThumbTitle === 'approvePayment'){
                return ApprovedPaymentScheme
            }
            else if(this.imgThumbTitle === 'checkListForClosing'){
                return ChecklistClosingSale
            }
            else if(this.imgThumbTitle === 'callSlip'){
                return CallSlip
            
            }
            else if(this.imgThumbTitle === 'reservationAgreement'){
                return ReservationAgreement
            }
            else if(this.imgThumbTitle === 'contractToSell'){
                return ContractToSell
            }
            //contract to sell here
            else{
                return null
            }
        }
    }
}
</script>


<style scoped>
.card-container{
    /* width: 70%; */
    margin: auto;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
}
.card-container:hover{
    margin: auto;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
}
.card-container header{
    border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    font-weight: 700;
    background-color: white;
    padding: 1rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    white-space: nowrap;
}
.card-container section{
    width: 100%;
    border: 1px solid black;
    border-top: none;
    display: flex;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
img{
    width: 100%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>