<template>
    <div>

        <!-- Page Heading -->

        <!-- DataTales Example -->

        <div class="card shadow mb-4">
            <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
            <div class="card-header py-3">

                <h6 class="m-0 font-weight-bold text-primary">
                    DataTables Example
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

                                <th>Name</th>

                                <th>Email</th>

                                <th>City</th>

                                <th>Country</th>

                                <th>Gender</th>

                                <th>Status</th>

                                <th>Country</th>
                                <th>Age</th>
                                <th>Postal Code</th>
                                <!-- <th>Location</th> -->
                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.first_name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.city }}</td>
                                <td>{{ user.country }}</td>
                                <td>{{ user.gender }}</td>
                                <td>{{ user.status }}</td>
                                <td>{{ user.contact_number }}</td>
                                <td>{{ user.age }}</td>
                                <td>{{ user.postalCode }}</td>
                                <!-- <td>
                  <ul>
                    <li v-for="location in user.location">
                      Note: {{ location.note }}, Magnitude: {{ location.magnitude }}, Longitude: {{ location.longitude }}
                    </li>
                  </ul>
                </td>                               -->
                              <td>
                              <button class="btn btn-danger" @click="deleteUser(user.id)">Delete </button>
                              <button class="btn btn-primary" @click="editUser(user.id)">Edit</button>
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
    users: [] // Set an empty array initially
  }
},

mounted() {
  axios.get('users')
    .then(response => {
      this.users = response.data.data;
      console.log("Fetched users:", this.users); // Add a console log to check if the data is being fetched correctly
      this.$nextTick(() => {
        $('#dataTable').DataTable();
      });
    })
    .catch(error => {
      console.log(error);
    });
},

methods: {
    deleteUser(userId) {
      axios
        .delete(`delete/${userId}`)
        .then((response) => {
          console.log("User deleted successfully:", response.data);
          // Remove the deleted user from the users array
          this.successMessage = 'User deleted successfully!';
          this.users = this.users.filter((user) => user.id !== userId);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    editUser(userId) {
    this.$router.push({ name: 'EditUser', params: { id: userId } });
  },
  },

}
</script>
