<template>
  <div class="foot-container"> 
    <section class="section1">
      <header>
        <img class="logo" src="../../../assets/logo.png">
      </header>
      <div>
        <section class="icons mb-1">
          <img src="../../../assets/social-icons/fb.png">
          <img src="../../../assets/social-icons/IGLogo.png">
        </section>
        <section class="mb-2">
          <h5>Head Office</h5>
          <p class="fw-100">{{ comapnyAddress }}</p>
        </section>
        <section class="mb-2">
          <h5>Phone</h5>
          <p class="fw-100">{{ companyContactNumber }}</p>
          <p class="fw-100"></p>
        </section>
        <section>
          <h5>Email</h5>
          <p class="fw-light">{{ companyEmail }}</p>
        </section>
        
      </div>
    </section>

    <section class="section2">
      <header>
        <h5>Services</h5>
      </header>
      <div class="section2-content">
        <section class="mb-3">
          <h6 class="mb-1">We Build</h6>
          <p @click="navigateServices('residential-house','/home')">Residential House</p>
          <p @click="navigateServices('commercial-bldg','/home')">Commercial Building</p>
          <p @click="navigateServices('amenities','/home')">Amenities</p>
          <p @click="navigateServices('structural-foundation','/home')">Structural Foundation</p>
        </section>
        <section class="mb-3">
          <h6 class="mb-1">We Provide</h6>
          <p @click="navigateServices('heavy-equipment','/provide')">Heavy Equipment for rent</p>
          <p @click="navigateServices('survey-services','/provide')">Survey Services</p>
          <p @click="navigateServices('titling-processing','/provide')">Titling Processing</p>
          <p @click="navigateServices('permits-licenses','/provide')">Business Permits and Licenses</p>
        </section>
        <section class="mb-3">
          <h6 class="mb-1">We Sell</h6>
          <p @click="navigateServices('land-for-sale','/sell')">Land for Sale</p>
          <p @click="navigateServices('sell-others','/sell')">Others</p>
        </section>
        <section class="mb-3">
          <h6 class="mb-1">About</h6>
          <p @click="navigateAbout('about')">Commitments</p>
          <p @click="navigateAbout('sustainability')">Sustainability</p>
          <p @click="navigateAbout('corp-officers')">Corporate Officers</p>
          <p @click="navigateAbout('licenses&permits')">Licenses and Permits</p>
        </section>
        <section class="mb-3">
          <h6 class="mb-1" @click="routeNow('/projects')">Projects</h6>
        </section>
        <section class="mb-3">
          <h6 class="mb-1" @click="routeNow('/careers')">Careers</h6>
        </section>
        <section class="mb-3">
          <h6 class="mb-1" @click="routeNow('/customer-service')">Customer Service</h6>
        </section>
      </div>
    </section>

    <section class="section3">
      <header>
        <h5>Inquire Now</h5>
      </header>
      <div>
        <form @submit.prevent="submitCallSlip">
          <div class="mb-2">
            <div class="row g-2">
              <div class="col-md">
                <div class="mb-2">
                  <input type="text" class="form-control" id="floatingInput" placeholder="lastname" v-model.trim="lastName">
                </div>
              </div>
              <div class="col-md">
                <div class="mb-2">
                  <input type="text" class="form-control" id="floatingInput" placeholder="firstname" v-model.trim="firstName">
                </div>
              </div>
              <div class="col-md">
                <div class="mb-2">
                  <input type="text" class="form-control" id="floatingInput" placeholder="middlename" v-model.trim="middleName">
                </div>
              </div>
            </div>
        </div>
<!-- spouse -->
        <div class="mb-3">
          <input type="text" class="form-control" id="spouseName" placeholder="Enter Spouse Name" v-model.trim="spouseName">
        </div>

        <div class="mb-2">
          <div class="row g-2">
            <div class="col-md">
              <div class="mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="FB account" v-model.trim="messengerAcc">
              </div>
            </div>
            <div class="col-md">
              <div class="mb-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="contact no" v-model.trim="contactNumber">
              </div>
            </div>
            <div class="col-md">
              <div class="mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="email" v-model.trim="email">
              </div>
            </div>
          </div>
        </div>
<!-- prospect interested -->
        <div class="mb-2">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"  placeholder="Prospect/s interested in" v-model.trim="interestIn"></textarea>
        </div>
<!-- prospects from-->
        <div class="">
          <label class="form-label">Prospects from: </label>
          <div class="checkboxes">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="regular prospect" id="regular-prospect" v-model.trim="prospects">
              <label class="form-check-label" for="regular-prospect">
                Regular Prospect
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="referral" id="refferal" v-model.trim="prospects">
              <label class="form-check-label" for="refferal">
                Referral
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="open house" id="open-house" v-model.trim="prospects">
              <label class="form-check-label" for="open-house">
                Open House
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="office in charge" id="office-in-charge" v-model.trim="prospects">
              <label class="form-check-label" for="office-in-charge">
                Office-in-Charge
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="fb/website" id="fb-website" v-model.trim="prospects">
              <label class="form-check-label" for="fb-website">
                FB/Website
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="mall exhibits" id="mall-exhibits" v-model.trim="prospects">
              <label class="form-check-label" for="mall-exhibits">
                Mall Exhibits
              </label>
            </div>
          </div>            
          </div>

        
        <!-- <progress-loading type="torks"></progress-loading> -->

      <clickable-button type="submit">Submit</clickable-button>
        </form>
      </div>
    </section>
    <blur-loading v-if="isLoading"></blur-loading>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
export default {
  data(){
    return{
      dateNow : null,
      lastName : "",
      firstName : "",
      middleName : "",
      contactNumber : "",
      spouseName : "",
      email : "",
      messengerAcc : "",
      prospects : [],

      isLoading : false,
    }
  },
  methods:{
    allowedSubmition(){
      if(this.lastName != "" && this.lastName != "" && this.firstName != "" && this.contactNumber != "" && this.email != "" && this.messengerAcc != ""
        && this.prospects.length>0)
        {
          return true
        }
      else{
        return false
      }
    },
    getData(){
        return{
        date : this.dateNow ,
        lastName : this.lastName,
        firstName : this.firstName,
        middleName : this.middleName,
        contactNumber : this.contactNumber,
        spouseName : this.spouseName,
        email : this.email,
        messengerAcc : this.messengerAcc,
        interestIn: this.interestIn,
        prospects : this.prospects    
      }
    },
    async submitCallSlip(){
      const allowed = this.allowedSubmition()
      if(allowed){
        this.isLoading = true
        const payload = this.getData()
        try{
          const response = await this.$store.dispatch('callSlip/submitcallSlip',payload)
          toast.success(response, {autoClose: 500})
        }catch(error){
          toast.error(error)
        }     
        this.isLoading = false   
      }else{
        toast.warning('Please complete the required details')
      }

    },

    //navigations sections methods
    navigateAbout(id){
      toast.success('clicked naviation about')
      // this.$store.commit('resetId')
      this.scrollNavigateAbout(id)     
    },
    scrollNavigateAbout(sectionID){
      // this.activeHomeNav = sectionID
      if(this.$route.path === '/home'){
        this.$emit('navigation-scroll',sectionID)
      }else{
        this.$router.push({path:'/', query: {to: sectionID}});
      }
    },
    navigateServices(sectionID,path){
      if(this.$route.path === path){
        this.$emit('navigation-scroll',sectionID)
      }else{
        if(path === '/home'){
          this.$router.push({path:'/', query: {to: sectionID}});
        }else if(path === '/sell'){
          this.$router.push({path:'/sell', query: {to: sectionID}});
        }else if(path === '/provide'){
          this.$router.push({path:'/provide', query: {to: sectionID}});
        }else{
          console.error('something wrong on navigation')
        } 
      }          
    },

    //routing to new page without auto scrolling events
    routeNow(path){
      this.$router.push(path)
    }
  },
  created(){
    const dateNow = new Date();
    const dateString = dateNow.toISOString().split('T')[0];
    this.dateNow = dateString
  },

  computed:{
    comapnyAddress(){
      return this.$store.getters['companyAddress']
    },
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
.foot-container{
  display: grid;
  justify-content: center;
  grid-template-columns: 32% 32% 32%;
  padding: 2rem 5rem;
  border-top: 2px solid white;
  background-color: rgb(24, 22, 22);
  color: white;
  position: relative;
}
h5,h6,p{
  padding: 0;
  margin: 0;
  cursor: default;
}
p{
  color: rgb(153, 131, 131);
  font-weight: 100;
  transition: all .3s ease-in-out;
}
p:hover,
p:active{
  color: rgb(202, 184, 184);
  text-decoration: underline;
}
.section1,.section2, .section3{
  text-align: center;
  padding: 0 .5rem;
}
.section1,.section2{
  border-right: 1px solid gold;
}
.section1{
  text-align: start;
}
.section1 header{
  text-align: center;
}

.logo{
  max-height: 5rem;
}
.icons{
  display: flex;
  gap: .5rem;
}
.icons img{
  max-height: 2rem;
}

/* SECOND SECTION */
.section2 .section2-content{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.section2 header,
.section3 header{
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}


/* THIRS SECTION */
.section3{
  position: relative;
  text-align: start;
}
.section3 .checkboxes{
  display: flex;
  column-gap: .5rem;
  flex-wrap: wrap;
}
input,textarea{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: rgb(153, 131, 131);
}
input:focus,
textarea:focus{
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
  color: rgb(153, 131, 131);
}
input::placeholder,
textarea::placeholder{
  color: rgb(153, 131, 131);
}
input[type='checkbox']{
  border: 1px solid white;
}
input[type='checkbox'] ~ label{
  color: rgb(153, 131, 131);
  transition: all .3s ease-in-out;
}
input[type='checkbox'] ~ label:hover,
input[type='checkbox'] ~ label:active{
  color: rgb(202, 184, 184);
  text-decoration: underline;
}

@media only screen and (max-width: 1500px) {
  .foot-container{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 1300px) {
  .foot-container{
    padding: 3rem;
    grid-template-columns: 45% 45%;
  }
  .section2{
    border: none;
  }
  .section3{
    border-top: 1px solid gold;
    margin-top: 1rem;
    grid-column: span 2;
  }
}
@media only screen and (max-width: 1000px) {
  .foot-container{
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .foot-container{
    padding: 2rem 5rem;
    display: block;
  }
  .section1{
    text-align: center;
    border: none;
    padding-bottom: 1rem;
    border-bottom: 1px solid gold;
  }
  .icons{
    justify-content: center;
    margin-top: 1rem;
  }
  .section2{
    border-bottom: 1px solid gold;
  }
  .section3{
    border: none;
  }
}
</style>