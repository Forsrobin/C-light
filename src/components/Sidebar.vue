<template>
  <div class="sidebarWrapper">
    <router-link :to=" {name: 'Home'} ">Home</router-link>
    <router-link :to=" {name: 'Programmer'} ">Programmer</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebarWrapper {
  width: 90%;
  height: auto;
  position: relative;
}

.sidebarWrapper div {
  display: flex;
  text-align: center;
  position: relative;
  justify-content: center;
  padding:10px;
  background: white;
}
</style>