<template lang="">
    <div>
      <div>
        <!-- <div v-if="product"> -->
        
        <!-- </div> -->
        <label class="label">First Name</label>
                <input
                  class="input"
                  v-model="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <label class="label">Last Name</label>
                <input
                  class="input"
                  v-model="lastName"
                  type="text"
                  placeholder="quantity"
                  required
                />
                <label class="label">Gender</label>
                <input
                  class="input"
                  v-model="Gender"
                  type="number"
                  placeholder="R"
                  required
                />
                <label class="label">Age</label>
                <input
                  class="input"
                  v-model="userAge"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Role</label>
                <input
                  class="input"
                  v-model="userRole"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Email</label>
                <input
                  class="input"
                  v-model="emailAdd"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Password</label>
                <input
                  class="input"
                  v-model="userPass"
                  type="text"
                  placeholder="Name"
                  required
                />
                <label class="label">Profile</label>
                <input
                  class="input"
                  v-model="userProfile"
                  type="text"
                  placeholder="http://"
                  required
                />
                <button
                  class="btn btn-success mt-3"
                  @click="addUser"
                >
                  Add
                </button>
      </div>
    </div>
    </template>
    <script>
    
    import axios from 'axios'
    
    export default {
        data() {
            return {
                    firstName: '',
                    lastName: '',
                    userAge: '',
                    Gender: '',
                    userRole: '',
                    emailAdd: '',
                    userPass: '',
                    userProfile: ''
            }
        },
        methods: {
            async addUser(){
                try {
                    await axios.post('https://nodeeomp.onrender.com/users', {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        userAge: this.userAge,
                        Gender: this.Gender,
                        userRole: this.userRole,
                        userPass: this.userPass,
                        userProfile: this.userProfile
                    })
                    this.firstName = '';
                    this.lastName = '';
                    this.userAge = '';
                    this.Gender = '';
                    this.userRole= '';
                    this.userPass = '';
                    this.userProfile = ''
                    this.$router.push('/admin')                
                } catch ( err ){
                  alert( err )
                }
            }
        }
    };
    
    </script>
    <style lang="">
    
    </style>