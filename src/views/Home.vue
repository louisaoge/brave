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