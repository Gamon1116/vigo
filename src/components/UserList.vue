<template>
    <div>
        User List
        <div v-for="user in users" :key="user.id">{{ user.name }}</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    created() {
       this.getUsers();
    },
    computed: {
        ...mapState(['users'])
        // users() {
        //     return this.$store.state.users;
        // },
        // sooins() {
        //     return this.$store.state.sooins;
        // },
    },
    methods: {
        ...mapActions(['getUsers'])
        // getUsers() {
        //    this.$store.dispatch('getUsers')
        // }
    }
}
</script>

<style>

</style>