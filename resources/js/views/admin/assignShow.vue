<template>
  <div>
    <div class="card shadow mb-4">
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          <router-link :to="{ name: 'assign' }" class="btn btn-primary">Add Assign</router-link>
        </h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Rider</th>
                <th>Kitchen</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in locations" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.first_name }}</td>
                <td>
                  <ul>
                    <li v-for="kitchen in data.kitchen" :key="kitchen.id">
                      {{ kitchen.first_name }}
                    </li>
                  </ul>
                </td>
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
    axios.get('Assigngets') // Update with the correct API endpoint URL
      .then(response => {
        this.locations = response.data.data; // Update to use response.data.data
        console.log("Fetched Assigngets:", this.locations);
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
