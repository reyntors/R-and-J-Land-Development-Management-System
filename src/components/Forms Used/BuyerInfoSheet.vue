<template>
  <the-header/>
    <form-card id="Buyer-info-sheet" title="Buyer's Information Sheet">
    
      <property-details @passData="getPropertyDetails"></property-details>

      <principal-buyer @passData="getPrincipalBuyerDetails" @toggleCivilStatus="toggleSpouseInfoVisibility"></principal-buyer>

      <spouse-info @passData="getSpouseDetails" v-if="showSpouseDetails"></spouse-info>

      <attorney-fact @passData="getSPADetails"></attorney-fact>

      <submit-form-button @click="submit" class="mb-4">Submit Form</submit-form-button> 
      <blur-loading v-if="isLoading"/>
    </form-card>
</template>
  
<script>
import PropertyDetails from './Sub Components/PropertyDetails.vue'
import PrincipalBuyer from './Sub Components/PrincipalBuyer.vue'
import SpouseInfo from './Sub Components/SpouseInfo.vue'
import AttorneyFact from './Sub Components/AttorneyFact.vue'
import { toast } from 'vue3-toastify'
export default{
  components: {
    PrincipalBuyer,
    PropertyDetails,
    SpouseInfo,
    AttorneyFact
  },
  data(){
    return{
      propertydetails: {},
      buyerDetails: {},
      spouseDetails: {},
      spaDetails:{},

      isLoading: false,
      showSpouseDetails: true,  //var holder to show the spouse details
      emptyValues: false, //var holder that will be true if there is null or "" values
      emptyKeys: false, //var holder tath will decide if the object has at least one key or none
    }
  },
  methods:{
    toggleSpouseInfoVisibility(bool){ //hide the spouse details if the buyer is single
      this.showSpouseDetails  = bool
    },
    getPropertyDetails(details){
      // console.log('propertydetails',details)
      this.propertydetails = details;
      const isReset = this.resetObjects(this.propertydetails);
      if(isReset){
        this.propertydetails = {};
      }
    },
    getPrincipalBuyerDetails(details){
      this.buyerDetails = details
      // console.log('buyer details', details)
      const isReset = this.resetObjects(this.buyerDetails);
      if(isReset){
        this.buyerDetails = {};
      }
    },
    getSpouseDetails(details){
      this.spouseDetails = details
      // console.log('spouse details', details)
      const isReset = this.resetObjects(this.spouseDetails);
      if(isReset){
        this.spouseDetails = {};
      }
    },
    getSPADetails(details){
      this.spaDetails = details
      // console.log('spa details', details)
      const isReset = this.resetObjects(this.spaDetails);
      if(isReset){
        this.spaDetails = {};
      }
    },  
    resetObjects(object){
      const listKeys = Object.keys(object); //get the list of the keys of the object
      const lengthKeys = listKeys.length;   //get the lenght of the listKeys
      let counter = 0;  //counter of the values that is "" or null
      if(lengthKeys>0){
        for(let i = 0; i<listKeys.length; i++){
          if(object[listKeys[i]] === null || object[listKeys[i]] === ""){   //increment the counter if the value is "" or null
            counter++;
          }
        }
      }
      console.log(counter,lengthKeys)
      if(counter === lengthKeys){     //comparing the counter and the length of listKeys
        return true   //return true if the all values is empty
      }else{
        return false
      }

    },
    checkObjectValues(object){  //check if there is a value that is empty or null
      const listKeys = Object.keys(object)  //get the list of all keys on the object
      // console.log(listKeys)
      if(listKeys.length>0){
        this.emptyKeys = false  //set to false if there is at least one existed on the object
        for(let i = 0; i<listKeys.length; i++){
          if(object[listKeys[i]] === null || object[listKeys[i]] === ''){   //stops the loop and set the emptyData to True if null or ""
            this.emptyValues = true
            return
          }
        }        
      }else{
        this.emptyKeys = true //set to true if the object has no keys
      }

    },
    async submit(){
      this.emptyValues = false    //instantiate to false the var holder to assume details are not empty
      this.emptyKeys = false      //instantiate to false the var holder to assume that the object has at least one key
      const payload = {
        ...this.propertydetails,
        ...this.buyerDetails,
        ...this.spouseDetails,
        ...this.spaDetails
      }
      this.checkObjectValues(payload)  //check the combined objects if there is a null value
      console.log(payload)

      if(
        !this.emptyValues &&                              //ok if all final object keys has values
      !this.emptyKeys &&                                  //ok if the final object is not empty
        Object.keys(this.propertydetails).length>0 &&     //ok if property details is not empty/IT IS STRICT REQUIRED FIELD
        Object.keys(this.buyerDetails).length>0           //ok if buyer details is not empty/ IT IS STRICT REQUIRED FIELD
        ){     
          this.isLoading  = true
          try{
            
            const response = await this.$store.dispatch('form/submitBuyerInfoSheet',payload)
            console.log(response)
            toast.success(response)
          }catch(error){
            toast.error(error)
          }
          this.isLoading  = false
      }else{
        toast.warning('Please complete the required details')
      }
    }
  },
  watch:{
    showSpouseDetails(bool){  //empty the spouse details if the buyer chagne the status into single
      if(bool === false){
        this.spouseDetails = {}
      }
    }
  }

}
</script>,
    BlurLoading

<style scoped>
#Buyer-info-sheet{
  position: relative;
}
.cont{
  border: 1px solid black;
}
</style>
