<template>
  <div>
    <header>
        <font-awesome-icon icon="fa-solid fa-filter" shake />
        <h4>Filter</h4>
    </header>
    <ul>
        <li>
            <section>
                <input value="fullname"  type="checkbox"  v-model="filters" id="filter-fullname" ><label for="filter-fullname">Full Name</label>
            </section>
        </li>
        <li>
            <section>
                <input value="amount"  type="checkbox"  v-model="filters" id="filter-amount" ><label for="filter-amount">Amount</label>
            </section>
        </li>
        <li>
            <section>
                <input value="purpose"  type="checkbox"  v-model="filters" id="filter-purpose" ><label for="filter-purpose">Purpose</label>
            </section>
        </li>
        <li>
            <section>
                <input value="contactNo"  type="checkbox"  v-model="filters" id="filter-contactNumber"><label for="filter-contactNumber">Contact Number</label>
            </section>
        </li>
        <li>
            <section>
                <input value="email"  type="checkbox"  v-model="filters" id="filter-emailAddress"><label for="filter-emailAddress">Email Address</label>
            </section>
        </li>
        <li>
            <section>
                <input value="fblink"  type="checkbox"  v-model="filters" id="filter-fblink"><label for="filter-fblink">Facebook Link</label>
            </section>
        </li>




        <li>
            <section>
                <input value="address"  type="checkbox"  v-model="filters" id="filter-address"><label for="filter-address">Address</label>
            </section>
        </li>
        <li>
            <section>
                <input value="civilStatus"  type="checkbox"  v-model="filters" id="filter-civilStatus"><label for="filter-civilStatus">Civil Status</label>
            </section>
        </li>
        <li>
            <section>
                <input value="spouseName"  type="checkbox"  v-model="filters" id="filter-spouseName"><label for="filter-spouseName">Spouse Name</label>
            </section>
        </li>
        <li>
            <section>
                <input value="occupation"  type="checkbox"  v-model="filters" id="filter-occupation"><label for="filter-occupation">Occupation</label>
            </section>
        </li>
        <li>
            <section>
                <input value="monthlyGrossIncome"  type="checkbox"  v-model="filters" id="filter-monthlyGross"><label for="filter-monthlyGross">Monthly Gross Income</label>
            </section>
        </li>
        <li>
            <section>
                <input value="buyerSourceOfIncome"  type="checkbox"  v-model="filters" id="filter-sourceIncome"><label for="filter-sourceIncome">Source of Income</label>
            </section>
        </li>
        <li>
            <section>
                <input value="typeOfEmployment"  type="checkbox" v-model="filters"  id="filter-typeEmployment"><label for="filter-typeEmployment">Type of Employment</label>
            </section>
        </li>
        <li>
            <section>
                <input value="employer"  type="checkbox" v-model="filters"  id="filter-employer"><label for="filter-employer">Employer</label>
            </section>
        </li>
        <li>
            <section>
                <input value="employerAddress"  type="checkbox" v-model="filters"  id="filter-employerAddress"><label for="filter-employerAddress">Employer Address</label>
            </section>
        </li>
        <li>
            <section>
                <input value="grossSalary"  type="checkbox" v-model="filters"  id="filter-grossSalary"><label for="filter-grossSalary">Gross Salary</label>
            </section>
        </li>
        <li>
            <section>
                <input value="businessName"  type="checkbox" v-model="filters"  id="filter-businessName"><label for="filter-businessName">Business Name</label>
            </section>
        </li>
        <li>
            <section>
                <input value="businessAddress"  type="checkbox" v-model="filters"  id="filter-businessAddress"><label for="filter-businessAddress">Business Address</label>
            </section>
        </li>
        <li>
            <section>
                <input value="businessMonthlyIncome"  type="checkbox" v-model="filters"  id="filter-businessMonthlyIncome"><label for="filter-businessMonthlyIncome">Business Monthly Income</label>
            </section>
        </li>
       
            
    </ul>
  </div>
</template>

<script>
export default {
    emits:['pass-data'],
    data(){
        return{
            filters: ['fullname','amount','purpose'],
        }
    },
    watch:{
        filters(){
            this.getData()
        }
    },
    methods:{
        getData(){
            this.$emit('pass-data',this.filters)
        }
    }
}
</script>

<style scoped>
label{
    white-space: nowrap;
}
input{
    scale: 1.5;
    margin: 5px;
}
section{
    display: flex;
    align-items: center;
}
li{
    padding: 0;
    margin: 0;
    list-style: none;
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    
    margin: .5rem;
}
ul{
    padding: 0 .5rem;
    margin: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    overflow-x: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}
h4{
    margin: 0;
    padding: 0;
}

div{
    width: 25%;
    min-width: 260px;
    background-color: white;
    /* border-right: 1px solid black; */
    padding: .5rem;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>