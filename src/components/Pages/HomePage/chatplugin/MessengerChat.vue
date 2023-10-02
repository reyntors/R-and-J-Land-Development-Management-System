<template>
    <div class="messenger-cont">
        <div>
            <!-- Messenger Chat plugin Code -->
            <div id="fb-root"></div>

            <!-- Your Chat plugin code -->
            <div id="fb-customer-chat" class="fb-customerchat"></div>
        </div>        
    </div>

</template>

<script>
/* global FB */
export default {
  mounted() {
    // Your SDK code
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v18.0',
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // Set the page_id and attribution for the Chat plugin
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "107489495346145");
    chatbox.setAttribute("attribution", "biz_inbox");
  },
};
</script>

<style scoped>
.messenger-cont{
    background-color: rgb(196, 196, 212);
    height: 10vh;
}
</style>
