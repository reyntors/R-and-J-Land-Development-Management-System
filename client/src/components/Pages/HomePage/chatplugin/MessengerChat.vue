<template>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
export default {
  mounted(){
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "107489495346145");
    chatbox.setAttribute("attribution", "biz_inbox");
  }
}
</script>

<style>

</style>