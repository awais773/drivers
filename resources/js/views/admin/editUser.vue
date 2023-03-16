<template>
  <div class="main-sub">
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div class="container-fluid">
      <form @submit.prevent="updateUser">
        <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="first_name">Name:</label>
              <input type="text" id="first_name" class="form-control" v-model="first_name">
              <span class="text-danger" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
          </div>
        </div>
            <div class="col-sm">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" class="form-control" v-model="email">
              <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" id="password" class="form-control" v-model="password">
              <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="contact_number">Number:</label>
              <input type="text" id="contact_number" class="form-control" v-model="contact_number">
          </div>
        </div>
            <div class="col-sm">
          <div class="form-group">
              <label for="country">Country:</label>
              <input type="text" id="country" class="form-control" v-model="country">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="city">City:</label>
              <input type="text" id="city" class="form-control" v-model="city">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="province">Province:</label>
              <input type="text" id="province" class="form-control" v-model="province">
          </div>
        </div>
            <div class="col-sm">
          <div class="form-group">
              <label for="postalCode">Postal Code:</label>
              <input type="text" id="postalCode" class="form-control" v-model="postalCode">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="age">Age:</label>
              <input type="text" id="age" class="form-control" v-model="age">
          </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="gender">Gender:</label>
              <input type="text" id="gender" class="form-control" v-model="gender">
          </div>
        </div>
          <div class="col-sm">
            <div class="form-group">
              <label for="gender">Status:</label>
              <input type="text" id="status" class="form-control" v-model="status">
          </div>
        </div>
        <div class="col-sm">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Update User</button>
      </form>
    </div>
 </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Buttons',

    data() {
      return {
        id: '',
        first_name: '',
        email: '',
        password: '',
        contact_number: '',
        country: '',
        city: '',
        province: '',
        postalCode: '',
        age: '',
        gender: '',
        status: '',
        errors: {},
        successMessage: '',
      }
    },

    created() {
      // Fetch user data and populate fields
      const userId = this.$route.params.id;
      axios
        .get(`getuser/${userId}`)
        .then((response) => {
          const userData = response.data.data;
          this.id = userData.id;
          this.first_name = userData.first_name;
          this.email = userData.email;
          this.password = userData.password;
          this.contact_number = userData.contact_number;
          this.country = userData.country;
          this.city = userData.city;
          this.province = userData.province;
          this.postalCode = userData.postalCode;
          this.age = userData.age;
          this.gender = userData.gender;
          this.status = userData.status;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },

    methods: {
      updateUser() {
        axios
          .put(`updateVender/${this.id}`, {
            first_name: this.first_name,
            email: this.email,
            password: this.password,
            contact_number: this.contact_number,
            country: this.country,
            city: this.city,
            province: this.province,
            postalCode: this.postalCode,
            age: this.age,
            gender: this.gender,
            status: this.status,
          })
          .then((response) => {
            console.log(response.data);
            this.successMessage = 'User updated successfully!';
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
            console.log(error.response.data);
          });
      },
    },
  }
</script>




