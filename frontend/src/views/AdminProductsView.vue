<template lang="">
    <div>
        <h2>Admin Page</h2>
    </div>
    <UserCard/>
    <AdminTable/>
</template>
<script>

import UserCard from '@/components/UserCard.vue'
import AdminTable from '@/components/AdminTable.vue';

export default {
    components : {
        AdminTable, UserCard
    }
}
</script>
<style lang="">
    
</style>