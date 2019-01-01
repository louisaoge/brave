<template>
<div div="custom-home">
   <!-- <Sidebar/> -->
<HelloWorld/>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // Sidebar
  },
  beforeCreate: function () {
    fetch(this.$store.state.apiUrl + '/api/user', {
      method: 'GET' 
    })
   // .then(res => res.json())
    .then(res => console.log(res));
  }
}
</script>

<style scoped>
div#custom-home{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>