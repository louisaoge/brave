<template>
  <div class="jumbotron custom-bg-dark">
  <h1 class="display-4">Welcome to B.R.A.V.E</h1>
  <p class="lead">Broadcast Manager</p>
  <hr class="my-4">
  <p>Click below to explore</p>
  <router-link class="btn btn-success btn-lg" to="/tasks">Explore
  </router-link>
</div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
