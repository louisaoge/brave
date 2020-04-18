  <template>
  <header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
    <a class="navbar-brand" href="#">
            <img style="max-height:75px;" alt="Vue logo" src="../assets/brave_logo.jpg">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tasks</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Register</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Logout</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Louisa</a>
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
@media only screen and (max-width: 767px) {
    div#navbarCollapse {
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

