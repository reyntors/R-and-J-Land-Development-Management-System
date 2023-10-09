<template>
        <iframe
          width="100%"
          height="640"
          style="width: 100%; height: 640px; border: none; max-width: 100%;"
          allow="xr-spatial-tracking; vr; gyroscope; accelerometer; fullscreen; autoplay; xr"
          scrolling="no"
          allowfullscreen="true"
          frameborder="0"
          :src="linkView"
          allowvr="yes"
        ></iframe>
</template>
<script>
export default {
  props: ['linkView']
}
</script>