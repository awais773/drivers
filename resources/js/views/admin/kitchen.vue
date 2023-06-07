<template>
    <div>
        <div class="card shadow mb-4">
            <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                  <router-link :to="{ name: 'addBooking' }" class="btn btn-primary">Add Order</router-link>
                </h6>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table
                        class="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellspacing="0"
                    >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>Note</th>
                                <th>Box</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="location in locations" :key="location.id">
                                <td>{{ location.id }}</td>
                                <td>{{ location.latitude }}</td>
                                <td>{{ location.longitude }}</td>
                                <td>{{ location.note }}</td>
                                <td>{{ location.box }}</td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
import axios from 'axios';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

export default {
    name: 'Tables',
    data() {
  return {
    locations: [] // Set an empty array initially
  }
},

mounted() {
  axios.get('location')
    .then(response => {
      this.locations = response.data.date;
      console.log("Fetched location:", this.locations); // Add a console log to check if the data is being fetched correctly
      this.$nextTick(() => {
        $('#dataTable').DataTable();
      });
    })
    .catch(error => {
      console.log(error);
    });
},



}
</script>
