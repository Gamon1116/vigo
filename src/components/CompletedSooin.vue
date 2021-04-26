<template>
    <div>
      Completed Sooin: {{ numberOfCompletedSooin }}
    </div>
</template>

<script>
export default {
    computed: {
    //  sooins() {
    //      return this.$store.state.sooins;
    //  },
     numberOfCompletedSooin() {
         return this.$store.getters.numberOfCompletedSooin;
     }
        
    }
}
</script>

<style>

</style>