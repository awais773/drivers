<template>
  <div class="main-sub">
    <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    <div class="container-fluid">
      <table class="table">
        <thead>
          <tr>
              <th>Latitude</th>
            <th>Longitude</th>
            <th>Note</th>
            <th>Box</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in locationData" :key="location.id">
            <td>{{ location.latitude }}</td>
            <td>{{ location.longitude }}</td>
            <td>
              <input type="text" v-model="location.note" />
            </td>
            <td>
              <div class="number-input">
                <button class="number-input__btn" @click="decrementBox(location)">
                  <i class="fas fa-minus"></i>
                </button>
                <span>{{ location.box }}</span>
                <button class="number-input__btn" @click="incrementBox(location)">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </td>
            <td>
              <button @click="updateLocation(location)" class="btn btn-primary">Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buttons',

  data() {
    return {
      locationData: [], // Array to store the location data from the API response
      errors: {},
      successMessage: '',
    }
  },

  mounted() {
    this.fetchLocationData(); // Fetch the location data from the API when the component is mounted
  },

  methods: {
    fetchLocationData() {
      axios.get("location")
        .then((response) => {
          this.locationData = response.data.date;
          this.locationData.forEach((location) => {
            location.box = 1;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },

    decrementBox(location) {
      if (location.box > 1) {
        location.box--;
      }
    },

    incrementBox(location) {
      if (location.box < 20) {
        location.box++;
      }
    },

    updateLocation(location) {
      axios.put(`updateLocation/${location.id}`, {
        box: location.box,
        note: location.note
      })
        .then((response) => {
          console.log(response.data);
          this.successMessage = "Order added successfully!";
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteLocation(locationId) {
      this.locationData = this.locationData.filter(location => location.id !== locationId);
    },

    addUser() {
      // Logic to add the selected locations as an order
    },
  },
}
</script>
