<template>
  <div class="legend-container">
    <h5>Legend</h5>
    <ul>
      <li><span class="box box1"/>Sale</li> <!--color BLUE: sale-->
      <li><span class="box box2"/>Sold</li> <!--color RED: sale-->
      <li><span class="box box3"/>Reserved</li> <!--color GOLD: sale-->
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.legend-container{
    position: absolute;
    top: 0;
    right: 0;
    /* width: 15rem;
    height: 11rem; */
    background-color: white;
    border-radius: 3px;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 0 .2rem .1rem rgba(0, 0, 0, 0.5);
    text-align: center;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
li{
  display: flex;
  align-items: center;
  gap: .5rem;
  flex-wrap: nowrap;
}
.box{
  display: inline-block;
  outline: 1px solid black;
  height: 1rem;
  width: 2rem;
}
.box1{
  background-color: rgba(0, 0, 255, 0.5);
}
.box2{
  background-color: rgba(255, 0, 0, 0.5)}
.box3{
  background-color: rgba(255, 217, 0, .5);
}
</style>