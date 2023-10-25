<template>
    <div class="shade"></div>
    <div class="reportWindow">
        <header>
           <img src="@/assets/logo.png"> 
           <font-awesome-icon class="icon" icon="fa-solid fa-x" fade @click="close"/>
        </header>

        <body>
            <!-- <div v-if="type=='daily'">  -->
                <span v-if="type=='daily'">
                    <strong>Date now: </strong> 
                    <input type="date" v-model="dateNow" readonly>             
                </span>
            <!-- </div> -->

            <!-- <div v-else> -->
                <span v-if="type=='custom'">
                    <strong>Date from: </strong> 
                    <input type="date" v-model="dateFrom" >             
                </span>
                <span v-if="type=='custom'">
                    <strong>Date to: </strong> 
                    <input type="date" v-model="dateTo" >             
                </span>
                <span class="download">
                    <strong>Download: </strong><a :href="urlFileReport" :download="reportFilename">{{ reportFilename }}</a>
                </span>

            <!-- </div> -->

            <div class="display">
                <table>
                    
                    <tr>       
                        <th>Fullname</th>
                        <th>Purpose</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    <progress-loading type="spin" v-if="isGenerating"/>
                    <tbody v-for="(item,index) in reportResult" :key="index">
                        <tr>
                            <td>{{item.fullname}}</td>
                            <td>{{item.purpose}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.date}}</td>
                        </tr>
                        
                    </tbody>
                    <tr style="border-top: 1px solid black;" v-if="totalAmountReport">
                        <td>
                            <strong>TOTAL: </strong>
                        </td>
                        <td colspan="3" style="text-align: center;">
                           {{ totalAmountReport }}
                        </td>
                        
                    </tr>
                </table>
            </div>
            <span class="button">
                <p>*Generate report</p>
                <button @click="generate">{{ buttonText }}</button>
            </span>
        </body>
        
    </div>
</template>

<script>
import { toast } from 'vue3-toastify'
export default{
    props:['type'],
    emits:['close-window'],
    data(){
        return {
            dateNow: null,
            
            dateFrom: null,
            dateTo: null,

            isGenerating: false,
        }
    },
    methods: {
        close(){
            this.$emit('close-window')
        },
        async generate(){
            this.isGenerating = true
            if(this.type === 'daily'){
                try{
                   const response = await this.$store.dispatch('report/dailyRequest',this.dateNow)
                   toast.success(response.message)
                   this.isGenerating = false
                }catch(error){
                    toast.error(error)
                }
                
            }else{
                const payload = {
                        from: this.dateFrom,
                        to: this.dateTo}
                try{
                    const response = await this.$store.dispatch('report/customReport',payload)   
                    toast.success(response.message)   
                    this.isGenerating = false           
                }catch(error){
                    toast.error(error)
                }
            }
        }
    },

    computed:{
      buttonText(){
        if(this.type === 'daily'){
            return "Generate Daily Report"
        }else{
            return "Generate Custom Report"
        }
      },
      reportResult(){
        if(this.type === 'daily'){
            return this.$store.getters['report/dailyReportGetter']
        }else{
            return this.$store.getters['report/customReportGetter']
        }    
      },
      reportFilename(){
        if(this.type === 'daily'){
            return this.$store.getters['report/dailyReportFilenameGetter']
        }else{           
            return this.$store.getters['report/customReportFilenameGetter']
        }
      },
      urlFileReport(){
        if(this.type === 'daily'){
            return this.$store.getters['report/URLdailyfilenameReportGetter']
        }else{           
            return this.$store.getters['report/URLcustomfilenameReportGetter']
        }
      },
      totalAmountReport(){
        if(this.type === 'daily'){
            console.log( this.$store.getters['report/dailyTotalAmountGetter'])
            return this.$store.getters['report/dailyTotalAmountGetter']
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
.reportWindow{
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 300px;    
    width: 70%;
    height: 90%;
    transform: translate(-50%,-50%);
    background-color: white;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    margin: 1rem 0;
    border-radius: 5px;
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
    overflow-y: auto;
    position: relative;
}
table{
    width: 100%;
}
table tr{
    text-align: center;
    cursor: default;
}
table tbody:nth-child(even){
    background-color: rgba(0, 0, 0, 0.05);
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
/*
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
} */
</style>