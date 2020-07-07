<template>
<div>
    <h1> Login Route </h1>
    <b-form class="custom-form" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Username: "
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.Password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="secondary">Submit</b-button>
    </b-form>
</div>
</template>

<script>
import * as auth from '../../services/AuthService'

  export default {
      name: 'login',
    data() {
      return {
        form: {
          username: '',
          password: '',
          },
          show: true 
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        auth.login();
        this.$router.push({name:'Home'});
        //alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
    }
</script>

<style scoped>
.custom-form{
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
}
</style>