<template>
  <div>
      <div v-if="successMessage" class="alert alert-success">
          {{ successMessage }}
      </div>
      <h1>Assign Rider to Kitchen</h1>
      <form @submit.prevent="assignCaregiver">
          <div class="row">
              <div class="col-sm">
                  <div class="form-group">
                      <label for="caregiver_id">Rider:</label>
                      <select
                          id="caregiver_id"
                          class="form-control"
                          v-model="caregiverId"
                          required
                      >
                          <option
                              v-for="caregiver in caregivers"
                              :key="caregiver.id"
                              :value="caregiver.id"
                          >
                              {{ caregiver.first_name }}
                          </option>
                      </select>
                  </div>
              </div>
              <div class="col-sm" style="height: 204px; overflow-x: scroll">
                  <div class="form-group">
                      <label for="searchTerm">Search:</label>
                      <input
                          type="text"
                          class="form-control"
                          v-model="searchTerm"
                      />
                      <div v-for="client in filteredClients" :key="client.id">
                          <input
                              type="checkbox"
                              :id="'client_' + client.id"
                              :value="client.id"
                              v-model="clientIds"

                          />
                          <label :for="'client_' + client.id">{{
                              client.first_name
                          }}</label>
                      </div>
                  </div>
              </div>
          </div>
          <button type="submit" class="btn btn-primary">
              Assign Rider
          </button>
      </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
      return {
          caregiverId: "",
          clientIds: [],
          clients: [],
          caregivers: [],
          searchTerm: "",
          successMessage: "",
      };
  },
  created() {
      // Load the clients data when the component is created
      axios
          .get("kitchenGet")
          .then((response) => {
              this.clients = response.data.data;
          })
          .catch((error) => {
              console.log(error);
          });

      // Load the caregivers data when the component is created
      axios
          .get("riderGet")
          .then((response) => {
              this.caregivers = response.data.data;
          })
          .catch((error) => {
              console.log(error);
          });
  },
  methods: {
      assignCaregiver() {
          // Make a POST request to the Laravel API to assign the caregiver to the clients
          axios
              .post("RiderAssign", {
                  rider_id: this.caregiverId,
                  kitchen_id: this.clientIds,
              })
              .then((response) => {
                  console.log(response.data);
                  this.successMessage = "Assignments made successfully!";
              })
              .catch((error) => {
                  console.log(error);
              });
      },
  },

  computed: {
      filteredClients() {
          if (!this.searchTerm) {
              return this.clients;
          }
          const searchTermLower = this.searchTerm.toLowerCase();
          return this.clients.filter((client) => {
              return client.first_name
                  .toLowerCase()
                  .includes(searchTermLower);
          });
      },
  },
};
</script>
