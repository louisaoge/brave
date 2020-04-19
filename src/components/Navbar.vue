  <template>
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
    <!-- <b-button v-b-toggle.sidebar-no-header class="mb-2 mr-2">
       <b-icon icon="list" variant="outline-light">
        </b-icon>   
    </b-button> -->
    <router-link to="/" class="navbar-brand">
      <img style="max-height:75px;" alt="App logo" 
      src="../assets/brave_logo.jpg">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
          Home
        </router-link>
        </li>
        <li class="nav-item">
           <router-link to="/tasks" class="nav-link">
            Tasks
          </router-link>
        </li>
         <li class="nav-item">
           <router-link to="/register" class="nav-link">
            Register
          </router-link>
        </li>
         <li class="nav-item">
           <router-link to="/login" class="nav-link">
            Login
          </router-link>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">
            {{ this.$store.state.username ?
            this.$store.state.username : 'User' }}
            </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
    
</template>


  
<style scoped>

nav.navbar{
    height: 6rem;
}

a.navbar-brand{
    text-transform: uppercase;
    letter-spacing: 3px;
    
}

li.nav-item {
    text-transform: uppercase;

}
@media screen and (max-width: 767px) {
    #navbarCollapse {
        width: 100%;
        position: fixed;
        top: 75px;
        left: 0;
        padding-left: 20px;
        padding-bottom: 5px;
        background-color: #202643;
    }
}
</style>

