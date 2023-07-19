<template>
    <div class="main-sub">
        <div v-if="successMessage" class="alert alert-success">
            {{ successMessage }}
        </div>
        <div class="container-fluid">
            <form @submit.prevent="addUser">
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="first_name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                class="form-control"
                                v-model="name"
                            />
                            <span class="text-danger" v-if="errors.name">{{
                                errors.name[0]
                            }}</span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="email">Capacity:</label>
                            <input
                                type="text"
                                id="capacity"
                                class="form-control"
                                v-model="capacity"
                            />
                            <span class="text-danger" v-if="errors.capacity">{{
                                errors.capacity[0]
                            }}</span>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="icon_type">Icon Types:</label>
                            <select
                                id="icon_type"
                                class="form-control"
                                v-model="icon_type"
                            >
                                <option value="taxi">Taxi</option>
                                <option value="moter_bike">Moter Bike</option>
                                <!-- Add more options as needed -->
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="supported_vehicle"
                                >Supported Vehicles:</label
                            >
                            <textarea
                                id="supported_vehicle"
                                class="form-control"
                                placeholder="Example: Toyato,Audi,Acura"
                                spellcheck="false"
                                v-model="supported_vehicle"
                            ></textarea>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="password">Description:</label>
                            <textarea
                                id="description"
                                class="form-control"
                                placeholder="Enter Description"
                                spellcheck="false"
                                v-model="description"
                            ></textarea>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="form-group">
                            <label for="Icon">Icon:</label>
                            <input type="file" id="Icon" />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="isLoading"
                >
                    <span
                        v-if="isLoading"
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    <span v-else>Add Vehicle</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Buttons",

    data() {
        return {
            first_name: "",
            kitchen_name: "",
            email: "",
            password: "",
            contact_number: "",
            country: "",
            city: "",
            province: "",
            postalCode: "",
            pic_lat: "",
            ratting: "",
            pic_long: "",
            age: "",
            type: "",
            gender: "",
            errors: {},
            successMessage: "",
            isLoading: false,
        };
    },
    methods: {
        addUser() {
            this.isLoading = true;
            axios
                .post("addRiderSignup", {
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
                    type: (this.type = "rider"),
                    kitchen_name: this.kitchen_name,
                    ratting: this.ratting,
                })
                .then((response) => {
                    console.log(response.data);
                    this.successMessage = "Rider added successfully!";
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error.response.data);
                })
                .finally(() => {
                    this.isLoading = false; // Set isLoading to false after the API call completes
                });
        },
    },
};
</script>
