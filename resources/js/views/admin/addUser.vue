<template>
  <div class="main-sub">
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div class="container-fluid">
      <form @submit.prevent="addUser">
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
            <div id="app">
  <div class="form-group" v-for="(input, k) in inputs" :key="k">
    <label for="">Note:</label>
    <input type="text" class="form-control" v-model="input.note">
    <label for="">latitude:</label>
    <input type="text" class="form-control" v-model="input.latitude">
    <label for="">longitude:</label>
    <input type="text" class="form-control" v-model="input.longitude">
    <br>
    <span>
      <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || (!k && inputs.length > 1)">Remove</i>
      <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length - 1">Add Location</i>
    </span>
  </div>
</div>
        </div>
        <div class="col-sm">
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Add User</button>
      </form>
    </div>
 </div>
</template>

<script>
  export default {
    name: 'Buttons',

    data() {
  return {
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
    errors: {},
    successMessage: '',
    inputs: [{ latitude: '', note: '', longitude: '' }]
  }
},
      methods: {
   addUser() {
    const inputData = this.inputs.reduce(
    (acc, curr) => {
      acc.latitude.push(curr.latitude);
      acc.note.push(curr.note);
      acc.longitude.push(curr.longitude);
      return acc;
    },
    { latitude: [], note: [], longitude: [] }
  );

    axios
      .post("addVender", {
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
        latitude: inputData.latitude,
      note: inputData.note,
      longitude: inputData.longitude,     
     })
      .then((response) => {
        console.log(response.data);
        this.successMessage = "User added successfully!";
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
        console.log(error.response.data);
      });
  },
  add(index) {
    this.inputs.splice(index + 1, 0, {
      latitude: "",
      note: "",
      longitude: "",
    });
  },
  remove(index) {
    this.inputs.splice(index, 1);
  },
},
   
  }
</script>



