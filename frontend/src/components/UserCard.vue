<template>
  <div v-if="users">
    <div class="container">
      <div class="row table-container">
        <div class="col-12">
          <h1>Users</h1>
          <button
            type="button"
            class="btn btn-success add-btn"
            data-bs-toggle="modal"
            data-bs-target="#addUserModal"
          >
            Add
          </button>
        </div>
        <div class="col">
          <table
            class="table is-striped is-bordered mt-2 is-fullwidth array-lists"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Image</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID" class="bord">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.emailAdd }}</td>
                <td><img class="tableImg" :src="user.userProfile" alt="" /></td>
                <td>
                  <button
                    type="button"
                    class="btn bton"
                    data-bs-toggle="modal"
                    data-bs-target="#editUserModal"
                    id="edit-row"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btton"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="delete-row"
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    class="btn btton"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="delete-row"
                  >
                    View
                  </button>
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
  

  import UserCard from '@/components/UserCard.vue';
export default {
    props: ["user"],
    computed: {
        products() {
            return this.$store.state.products
        }
    },

    mounted() {
        this.$store.dispatch("getProducts")
    },

    components: {UserCard},
}
</script>
<style></style>
