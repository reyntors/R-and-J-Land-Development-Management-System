<template>
    <form @click="uploadToCloud" enctype="multipart/form-data">
        <font-awesome-icon :icon="['fas', 'arrow-up-from-bracket']" size="3x" />

        <p>{{ fileName }}</p>
        <label for="idUpload" @click="aw">
            Upload File
        </label>
        <input type="file" id="idUpload" accept="image/*" @change="uploadedImg">
    </form>
    
</template>

<script>
export default {
    data(){
        return{
            image: null,
            imageTitle: '',
            userId: '',
        }
    },
    methods:{
        uploadedImg(event){
            const img = event.target.files[0]
            if(img){
                console.log(img)
                this.image = img
                this.imageTitle = img.name
            }
        },
        async uploadToCloud(){
            if(this.image){
                const data = new FormData()
                data.append('image',this.image)
                const payload = {
                    id: this.userId,
                    image: data
                }
                try{
                    const response = await this.$store.dispatch('myProfile/uploadID',payload)
                    console.log(response)
                }catch(error){
                    console.error(error)
                }
                  
            }
        }
    },
    computed:{
        fileName(){  
            return this.imageTitle
        }
    },
    created(){
        this.userId = this.$store.getters['auth/getUserId']
    }
}
</script>

<style scoped>

label{
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    bottom: 0;
    border: none;
    padding: .5rem 0;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
    text-align: center;
    background-color: white;
}
p{
    color: blue;
}
input{
    display: none;
}
form:hover{
    background-color: rgba(255, 255, 255, 0.2)
}
form{
    border: 1px solid black;
    height: 50%;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-height: 200px;
}
</style>