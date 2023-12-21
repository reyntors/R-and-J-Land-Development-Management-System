<template>
  
  <the-header></the-header>

  <div class="display">
    <article class="article1">
    </article>

    <article class="article2">
      <h1 class="fw-bold">CONTACT US</h1>
      <p>Connect with us through our contact details below.</p>
      <section style="margin-top: 1rem;">
        <p class="text">Phone Number: <span class = "companyDetails">{{ companyContactNumber }}</span></p>
        <p class="text">Email Address: <span class = "companyDetails">{{ companyEmail }}</span></p>
        <p class="text" @click="openFB">Facebook Page:  
          <span class="fblink companyDetails">
            <font-awesome-icon icon="fa-brands fa-square-facebook" size="1x" style="color: #0b68ff;" />
          RandJLandDevCorp
        </span>
          
        </p>
      </section>
      
      <clickable-button @click="openReserve">Reserve Now</clickable-button>
      <clickable-button @click="openInquire">Inquire Now</clickable-button>

      <hr>
      
      <form @submit.prevent="submitContactUS">
            <div class="row g-2 mb-1">
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingFirstname" placeholder="Juan" v-model="firstName">
                  <label for="floatingFirstname">Firstname</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingLastname" placeholder="Cruz" v-model="lastName">
                  <label for="floatingLastname">LastName</label>
                </div>
              </div>
            </div>

            <div class="row g-2 mb-1">
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingCompany" placeholder="R&J" v-model="company">
                  <label for="floatingCompany">Company</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingJobtitle" placeholder="Programmer" v-model="jobTitle">
                  <label for="floatingJobtitle">Jobtitle</label>
                </div>
              </div>
            </div>
          

            <div class="row g-2 mb-1">
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="text" class="form-control" id="floatingPhone" placeholder="09123456789" v-model="phone">
                  <label for="floatingPhone">Phone</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating mb-2">
                  <input type="email" class="form-control" id="floatingEmail" placeholder="sample@gmail.com" v-model="email">
                  <label for="floatingEmail">Email</label>
                </div>
              </div>
            </div>
            <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingFacebookLInk" placeholder="https://fblink" v-model="facebookLink">
              <label for="floatingFacebookLInk">Facebook Link (optional)</label>
            </div>

            <div class="mb-2"> 
              <h4>Interest in</h4>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="checkval1" value="1" v-model="temp">
                <label class="form-check-label" for="checkval1">Switch Value 1</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="checkval2" value="2" v-model="temp">
                <label class="form-check-label" for="checkval2">Switch Value 2</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="checkval3" value="3" v-model="temp">
                <label class="form-check-label" for="checkval3">Switch Value 3</label>
              </div>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="checkval4" value="4" v-model="temp">
                <label class="form-check-label" for="checkval4">Switch Value 4</label>
              </div>              
            </div>

            <div class="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message here.." v-model="message"></textarea>
            </div>

          <section class="submit-container">
            <clickable-button  class="submit" type="submit">Send</clickable-button> 
          </section>
          

      </form>
      
    </article>
  </div>

  <the-footer/>
</template>

<script>
import ClickableButton from '@/components/Reusable/widgets/ClickableButton.vue'
import { toast } from 'vue3-toastify'
export default {
  components: { ClickableButton },
  data(){
    return{
      typeClient: 'default',

      firstName: "",
      lastName: "",
      company: "",
      jobTitle: "",
      phone: "",
      email: "",
      facebookLink: "",
      type: "",
      temp: [],
      message: "",
    }
  },
  methods:{
    openFB(){
      window.open('https://www.facebook.com/')
    },
    openReserve(){
      this.$router.push('/sell')
    },
    openInquire(){
      this.$router.push('/inquire')
    },
    checkEmpty(){
      if(
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.company !== "" &&
        this.jobTitle !== "" &&
        this.phone !== "" &&
        this.email !== "" &&
        this.type !== "" &&
        this.temp.length !== 0 &&
        this.message !== ""
      ){
        return true
      }else{
        return false
      }
    },
    getData(){
      return{
        firstName: this.firstName,
        lastName: this.lastName,
        company: this.company,
        jobTitle: this.jobTitle,
        phone: this.phone,
        email: this.email,
        facebookLink: this.facebookLink,
        type: this.type,
        temp: this.temp,
        message: this.message,
      }
    },
    async submitContactUS(){
      const isGood = this.checkEmpty()
      console.log(isGood)
      if(isGood){
        const payload = this.getData()
        try{
          const response = await this.$store.dispatch('contactUs/submitContactUS',payload)
          toast.success(response.message,{autoClose: 500})
        }catch(error){
          toast.error(error,{autoClose: 2000})
        }
      }else{
        console.log("empty")
        toast.warning("please check your information", {autoClose: 500})
      }
    }
  },
  computed:{
    companyEmail(){
      return this.$store.getters['companyEmail']
    },
    companyContactNumber(){
      return this.$store.getters['companyContactNumber']
    }
  }
}
</script>

<style scoped>
.companyDetails{
  margin-left: .5rem;
  font-weight: 500;
  transition: all .2s ease-in;
}
.companyDetails:hover{
  font-weight: 700;
}
.text{
  cursor: default;
}
.text:hover .companyDetails{
  font-weight: 700;
}
.fblink:hover{
  border-bottom: 2px solid rgba(0, 0, 255, 0.75); 
  display: inline; color: rgba(0, 0, 255, 0.75); 
}
.fblink{
  border-bottom: 2px solid blue; 
  display: inline; color: blue; 
  cursor: pointer;
}
.submit-container{
  width: 100%;
  box-sizing: content-box;

}
.submit{
  margin: auto;
  width: 50%;
  display: block;
}
textarea{
  resize: none;
  width: 100%;
  min-height: 100px;
  padding: .5rem;
  box-sizing: border-box;
}
.article2{
  padding: 2rem;
}
.article1{
  display: flex;
  background-image: url('../../../assets/contact us/contactus1.jpg');
  /* height: 85vh; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.display{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 900px) {
  .display{
    grid-template-columns: 1fr;
  }
  .article1{
    display: none;
  }
  .article2{
    width: 100%;
    background-image: linear-gradient(120deg,rgba(255, 255, 255, 0.7  ),rgba(0, 0, 0, 0.3)),url('../../../assets/contact us/contactus1.jpg');
    background-repeat: no-repeat;
    background-size: conver;
    background-position: center;

  }
}
</style>