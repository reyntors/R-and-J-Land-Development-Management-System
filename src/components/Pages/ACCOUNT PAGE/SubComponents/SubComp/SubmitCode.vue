<template>
  <div class="background"></div>

  <div class="card">
    <header>
        <h5 class="fw-bold">Enter Security Code</h5>
    </header>
    <section class="section1">
        <p>Please check your email address for the confirmation code we sent.</p>
        <section class="sub-section">
            <label for="code"><p class="fw-bold">Code</p></label>
            <input id="code" type="text" v-model.trim="code" placeholder="enter code">
        </section>
        
    </section>
    <section class="section2">
        <span style="color: blue;" @click="resendCode" class="resendButton"><p>Resend Code?</p></span>
        <span>
            <button type="button" @click="cancel">Cancel</button>
            <button type="button" @click="submitCode">Submit</button>  
        </span>
        
    </section>
</div>
</template>

<script>
export default {
    emits: ['close-submit-code','submit-code','resend-code'],
    data(){
        return{
            code: '',
        }
    },
    methods:{
        cancel(){
            this.$emit('close-submit-code')
        },
        submitCode(){
            this.$emit('submit-code',this.code)
        },
        resendCode(){
            this.$emit('resend-code')
        }
    }
}
</script>

<style scoped>
.resendButton{
    cursor: pointer;
}
p{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;

}
.resendButton:hover p{
    text-decoration: underline;
}
.section2 span button:active{
    opacity: .5;
}
.section2 span button:hover{
    color: black;
}
.section2 span button{
    border-radius: 5px;
    border: none;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: #31A72A;
    color: white;
}
.section2 span{
    display: flex;
    gap: .5rem;
}
.sub-section input{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.436);
    border: none;
    border-radius: 5px;
}
.sub-section{
    display: flex;
    gap: .5rem;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: .5rem;
}
.section2 button{
    padding: 5px 10px;
}
input{
    padding: .5rem;
}
.p{
    font-size: clamp(1rem, 1.5vw, 2rem);
}
.section2{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
}
.section1{
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
h5{
    padding: 0;
    margin: 0;
    font-size: clamp(1rem, 1.5vw, 2rem);
}
header{
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.4px);
    -webkit-backdrop-filter: blur(9.4px);
    z-index:2;
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
}
.card{
    outline: 1px solid black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    width:50%;
    z-index: 2;
}
</style>