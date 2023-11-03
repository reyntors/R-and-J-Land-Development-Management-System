<template>
    <div class="shade"></div>
    <div class="report-container"> 
        <filter-setting 
            @pass-data="getFilters"
        />
        <div class="reportWindow">
            <header>
            <img src="@/assets/logo.png"> 
            <font-awesome-icon class="icon" icon="fa-solid fa-x" fade @click="close"/>
            </header>

            <body>
                <h5 class="fw-bold">{{ titleText }}</h5>
                <div v-if="type=='custom'" class="custom-dates">
                    <span>
                        <p>Date from: </p> 
                        <input type="date" v-model="dateFrom" >             
                    </span>
                    <span>
                        <p>Date to: </p> 
                        <input type="date" v-model="dateTo" >             
                    </span>                    
                </div>

                <span class="download">
                    <p>Download: </p><a :href="urlFileReport" :download="reportFilename">{{ reportFilename }}</a>
                </span>


                <div class="display">
                    <progress-loading type="spin" v-if="isGenerating"/>
                    <table v-if="reportResult">       
                        <tr>       
                            <th v-for="(_,index) in reportResult[0]" :key="index">
                                {{generateTableHeader(index)}}
                            </th>
                        </tr>
                        
                        <tbody>
                            <tr v-for="(item,index) in reportResult" :key="index">
                                <td v-for="data of item" :key="data">{{dataGenerator(data)}}</td>
                            </tr>                       
                        </tbody>

                        <!-- <tr style="border-top: 1px solid black;" v-if="totalAmountReport">
                            <td>
                                <strong>TOTAL: </strong>
                            </td>
                            <td colspan="3" style="text-align: center;">
                            {{ totalAmountReport }}
                            </td>    
                        </tr> -->
                    </table>
                </div>

                <span class="button">
                    <p>*Generate report</p>
                    <button @click="generate">{{ buttonText }}</button>
                </span>
            </body>
            
        </div>        
    </div>
 
</template>

<script>
import { toast } from 'vue3-toastify'
import FilterSetting from './FilterSetting.vue'
export default{
    props:['type'],
    emits:['close-window'],
    components: {FilterSetting},
    data(){
        return {
            dateNow: null,
            
            dateFrom: null,
            dateTo: null,

            isGenerating: false,
            filters: ['fullname','amount','purpose'],
        }
    },
    methods: {
        close(){
            this.$emit('close-window')
        },
        getFilters(filters){
            // console.log(filters)
            this.filters = filters
        },
        dataGenerator(params){
            if(params !== null && params !== '' && !!params && params !== undefined){
                return params
            }else{
                return 'None'
            }
        },
        generateTableHeader(params){
            if(params ==='fullname'){
                return 'Full Name'
            }else if(params ==='amount'){
                return 'Amount'
            }else if(params ==='purpose'){
                return 'Purpose'
            }else if(params ==='contactNo'){
                return 'Contact Number'
            }else if(params ==='email'){
                return 'Email'
            }else if(params ==='fblink'){
                return 'Facebook Link'
            }else if(params ==='address'){
                return 'Address'
            }else if(params ==='civilStatus'){
                return 'Civil Status'
            }else if(params ==='spouseName'){
                return 'Spouse Name'
            }else if(params ==='occupation'){
                return 'Occupation'
            }else if(params ==='monthlyGrossIncome'){
                return 'Monthly Gross Income'
            }else if(params ==='buyerSourceOfIncome'){
                return 'Buyer Source of Income'
            }else if(params ==='typeOfEmployment'){
                return 'Type of Employment'
            }else if(params ==='employer'){
                return 'Employer'
            }else if(params ==='employerAddress'){
                return 'Employer Address'
            }else if(params ==='grossSalary'){
                return 'Gross Salary'
            }else if(params ==='businessName'){
                return 'Business Name'
            }else if(params ==='businessAddress'){
                return 'Business Address'
            }else if(params ==='businessMonthlyIncome'){
                return 'Business Monthly Income'
            }else{
                return 'unknown'
            }
        },
        async generate(){
            console.log(this.filters)
            // console.log(this.filters[0])
            this.isGenerating = true
            if(this.type === 'daily'){
                try{
                   const response = await this.$store.dispatch('report/dailyRequest',{
                    dateNow: this.dateNow,
                    selectedColumns: this.filters
                   })
                   toast.success(response.message)
                   
                }catch(error){
                    toast.error(error)
                }
                
            }else if(this.type === 'weekly'){
                try{
                    const response = await this.$store.dispatch('report/weeklyReport',{
                        selectedColumns: this.filters
                    })   
                    toast.success(response.message)                                  
                }catch(error){
                    toast.error(error)
                }

            }else if(this.type === 'monthly'){
                try{
                    const response = await this.$store.dispatch('report/monthlyReport',{
                        selectedColumns: this.filters
                    })   
                    toast.success(response.message)                                  
                }catch(error){
                    toast.error(error)
                }

            }else if(this.type === 'custom'){
                try{
                    const response = await this.$store.dispatch('report/customReport',{
                        from: this.dateFrom,
                        to: this.dateTo,
                        selectedColumns: this.filters
                    })   
                    toast.success(response.message)                                  
                }catch(error){
                    toast.error(error)
                }
            }
            this.isGenerating = false
        }
    },

    computed:{
      titleText(){
        if(this.type === 'daily'){
            return 'Daily Report'
        }else if(this.type === 'weekly'){
            return 'Weekly Report'
        }else if(this.type === 'monthly'){
            return 'Monthly Report'
        }else if(this.type === 'custom'){
            return 'Custom Report'
        }else{
            return 'Unknown'
        }
      },
      buttonText(){
        if(this.type === 'daily'){
            return "Generate Daily Report"
        }else if(this.type === 'weekly'){
            return "Generate Weekly Report"
        }else if(this.type === 'monthly'){
            return "Generate Monthly Report"
        }else if(this.type === 'custom'){
            return "Generate Custom Report"
        }else{
            return "Unknown"
        }
      },
      reportResult(){
        if(this.type === 'daily'){
            return this.$store.getters['report/dailyReportGetter']
        }else if(this.type === 'weekly'){
            return this.$store.getters['report/weeklyReportGetter']
        }else if(this.type === 'monthly'){
            return this.$store.getters['report/monthlyReportGetter']
        }else{
            return this.$store.getters['report/customReportGetter']
        }   
      },
      reportFilename(){
        if(this.type === 'daily'){
            return   this.$store.getters['report/dailyReportFilenameGetter']
        }else if(this.type === 'weekly'){
            return this.$store.getters['report/weeklyReportFilenameGetter']
        }else if(this.type === 'monthly'){
            return this.$store.getters['report/monthlyReportFilenameGetter']
        }else{           
            return this.$store.getters['report/customReportFilenameGetter']
        }

      },
      urlFileReport(){
        if(this.type === 'daily'){
            return this.$store.getters['report/URLdailyfilenameReportGetter']
        }else if(this.type === 'weekly'){
            return this.$store.getters['report/URLweeklyfilenameReportGetter']
        }else if(this.type === 'monthly'){
            return this.$store.getters['report/URLmonthlyfilenameReportGetter']
        }else{           
            return this.$store.getters['report/URLcustomfilenameReportGetter']
        }
      },
      totalAmountReport(){
        if(this.type === 'daily'){
            return this.$store.getters['report/dailyTotalAmountGetter']
        }else if(this.type === 'weekly'){
            return this.$store.getters['report/weeklyTotalAmountGetter']
        }else if(this.type === 'monthly'){
            return this.$store.getters['report/monthlyTotalAmountGetter']
        }else{           
            return this.$store.getters['report/customTotalAmountGetter']
        }
      }
    },
    created(){
        const dateNow = new Date();
        const dateString = dateNow.toISOString().split('T')[0];
        this.dateNow = dateString
    }

}
</script>
<style scoped>
.custom-dates span{
    display: flex;
}
.report-container{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 300px;    
    width: 100%;
    height: 100%;
    padding: 5px;
}
.reportWindow{
    /* flex-grow: 1; */
    width: 75%;
    /* transform: translate(-50%,-50%); */
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    /* margin: 1rem 0; */
}

.reportWindow header{
    display: flex;
    justify-content: center;
    position: relative;
}
.reportWindow header img{
    width: 50%;
    max-width: 200px;
}
.reportWindow header .icon{
    position: absolute;
    right: 0;
    /* top: 5%; */
    cursor: pointer;
    padding: .3rem;
}
.reportWindow header .icon:active{
    animation: none;
    background-color: rgba(0, 0, 0, 0.2);
}

.reportWindow body{
    flex-grow: 1;
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    overflow-y: auto;    
}
.reportWindow  input{
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
}
.reportWindow  input:focus{
    outline: none;
}

.reportWindow body .button{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3px;
}

.reportWindow body .button p{
    font-style: oblique;
    font-size: small;
}
.reportWindow body .button button{
    padding: .5rem;
    border: none;
    background-color: #31A72A;
    color: white;
}

.display{
    margin: 1rem 0;
    border: 1px solid black;
    flex-grow: 1;
    overflow: auto;
    overflow-x: auto;
    max-width: 100%;
    position: relative;
}
td{
    padding: .5rem 1rem;
}
th{
    border: 1px solid black;
    padding: .5rem 1rem;
    white-space: nowrap;
}
table{
    width: 100%;
}
table tr{
    text-align: center;
    cursor: default;
}
table tbody tr:nth-child(odd){
    background-color: rgba(0, 0, 0, 0.1);
}
tr:hover{
    outline: 1px solid black;
}
.shade{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
.download{
    display: flex;
    gap: .5rem;
}
.download span{
    color: blue;
    text-decoration: underline;
    cursor: default;
} 
.download span:hover{
    color: rgba(0, 0, 255, 0.404);
}
.download span:active{
    color: rgba(0, 0, 0, 0.5);
    cursor: progress;
}
</style>