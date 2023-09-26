<template>
  <div class="c-container">
    <h3>Client Profile</h3>
    <form>
        <section>
            <label for="fullname">Fullname:</label><input type="text" id="fullname" v-model="fullname">            
        </section>
        <section>
            <label for="email">Email:</label><input type="text" id="email" v-model="email">            
        </section>
        <section>
            <label for="address">Address:</label><input type="text" id="address" v-model="address">            
        </section>

    </form>
  </div>
</template>

<script>
export default {
    props: ['client'],
    data(){
        return{
            fullname: this.client.fullname,
            email: this.client.email,
            address: this.client.address,
        }
    }

}
</script>

<style scoped>
</style>