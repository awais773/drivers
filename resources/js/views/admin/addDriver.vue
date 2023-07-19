<template>
  <div class="main-sub">
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div class="container-fluid">
      <form @submit.prevent="addUser">
        <!---------------- Add Car-------------------- -->

    <div class="row">
    <div class="col-sm">
        <div class="input-group">
            <!-- <span class="input-group-text" id="add-driver-label">Add Drivers:</span> -->
            <input type="text" id="add_driver" class="form-control" v-model="add_driver" aria-describedby="add-driver-label" placeholder="Add Drivers" style="background-color:#dcd5d573; color: blueviolet;">
        </div>
        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
    </div>
</div>
<br>
        <!-- ------------Add Car End---------------------- -->
        <div class="row">
            <div class="col-sm">
          <div class="form-group">
              <label for="text">First Name:</label>
              <input type="text" id="first_name" class="form-control" v-model="first_name">
              <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="text">Last Name:</label>
              <input type="text" id="last_name" class="form-control" v-model="last_name">
              <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
          </div>
        </div>
           <div class="col-sm">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" id="email" class="form-control" v-model="email">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="contact_number">Mobile:</label>
              <input type="text" id="contact_number" class="form-control" v-model="contact_number">
          </div>
        </div>
            <!-- <div class="col-sm">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" id="email" class="form-control" v-model="email">
          </div>
        </div> -->
        <div class="col-sm">
          <div class="form-group">
              <label for="gender">Gender:</label>
              <input type="text" id="gender" class="form-control" v-model="gender">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="select_type">Select Type:</label>
              <input type="text" id="select_type" class="form-control" v-model="select_type">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="ref_name">Reference Name:</label>
              <input type="text" id="ref_name" class="form-control" v-model="ref_name">
          </div>
        </div>
            <div class="col-sm">
          <div class="form-group">
              <label for="ref_num">Reference Number:</label>
              <input type="text" id="ref_num" class="form-control" v-model="ref_num">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="cnic">CNIC:</label>
              <input type="text" id="cnic" class="form-control" v-model="cnic">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="car_number">Car Select:</label>
              <input type="text" id="car_number" class="form-control" v-model="car_number">
          </div>
        </div>
           <div class="col-sm">
             <!-- <div class="form-group">
              <label for="profile_img">Profile:</label>
              <input type="file" id="profile_img" class="form-control"
              required
              >
          </div> -->
        </div>
         <div class="col-sm">
          <!-- <div class="form-group">
              <label for="profile_img">Profile:</label>
              <input type="text" id="profile_img" class="form-control" v-model="profile_img"
              required
              >
          </div> -->
        </div>
    </div>
    <!-- <button type="submit" class="btn btn-primary">Add Driver</button> -->
     <!-- <div class="container">
        <div class="row">
            <div class="col" style="border-top: 2px solid rgb(215, 211, 211); margin-top: 10px;">

            </div>
        </div>
     </div> -->
      </form>
    </div>

<div class="container-fluid">
      <form @submit.prevent="addUser">
         <!-- -------------------------------------------Add Car------------------- -->
      <div class="row">
    <div class="col-sm">
        <div class="input-group">
            <input type="text" id="add_driver" class="form-control" v-model="add_driver" aria-describedby="add-driver-label" placeholder="Add Car" style="background-color: #dcd5d573; color: blueviolet;">
        </div>
        <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
    </div>
</div>
<br>
    <!------------------------------------------ Add Car End--------------------------------- -->
        <div class="row">
            <div class="col-sm">
          <div class="form-group">
              <label for="text">First Name:</label>
              <input type="text" id="first_name" class="form-control" v-model="first_name">
              <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="text">Last Name:</label>
              <input type="text" id="last_name" class="form-control" v-model="last_name">
              <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
          </div>
        </div>
           <div class="col-sm">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" id="email" class="form-control" v-model="email">
          </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="contact_number">Mobile:</label>
              <input type="text" id="contact_number" class="form-control" v-model="contact_number">
          </div>
        </div>
            <!-- <div class="col-sm">
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="text" id="email" class="form-control" v-model="email">
          </div>
        </div> -->
        <div class="col-sm">
          <div class="form-group">
              <label for="gender">Gender:</label>
              <input type="text" id="gender" class="form-control" v-model="gender">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="select_type">Select Type:</label>
              <input type="text" id="select_type" class="form-control" v-model="select_type">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="ref_name">Reference Name:</label>
              <input type="text" id="ref_name" class="form-control" v-model="ref_name">
          </div>
        </div>
            <div class="col-sm">
          <div class="form-group">
              <label for="ref_num">Reference Number:</label>
              <input type="text" id="ref_num" class="form-control" v-model="ref_num">
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
              <label for="cnic">CNIC:</label>
              <input type="text" id="cnic" class="form-control" v-model="cnic">
          </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm">
          <div class="form-group">
              <label for="car_number">Car Select:</label>
              <input type="text" id="car_number" class="form-control" v-model="car_number">
          </div>
        </div>
           <div class="col-sm">
             <!-- <div class="form-group">
              <label for="profile_img">Profile:</label>
              <input type="file" id="profile_img" class="form-control"
              required
              >
          </div> -->
        </div>
         <div class="col-sm">
          <!-- <div class="form-group">
              <label for="profile_img">Profile:</label>
              <input type="text" id="profile_img" class="form-control" v-model="profile_img"
              required
              >
          </div> -->
        </div>
    </div>
     <button type="submit" class="btn btn-primary">Add Car</button>
     <!-- <div class="container">
        <div class="row">
            <div class="col" style="border-top: 2px solid rgb(215, 211, 211); margin-top: 10px;">

            </div>
        </div>
     </div> -->

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
    kitchen_name: '',
    email: '',
    password: '',
    contact_number: '',
    country: '',
    city: '',
    province: '',
    postalCode: '',
    pic_lat: '',
    ratting: '',
    pic_long: '',
    age: '',
    gender: '',
    type: '',
    errors: {},
    successMessage: '',
  }
},

      methods: {
   addUser() {
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
        pic_long: this.pic_long,
        pic_lat: this.pic_lat,
        kitchen_name: this.kitchen_name,
        type: this.type = 'kitchen',
     })
      .then((response) => {
        console.log(response.data);
        this.successMessage = "Kitchen added successfully!";
      })
      .catch((error) => {
        this.errors = error.response.data.errors;
        console.log(error.response.data);
      });
  },

},

  }
</script>