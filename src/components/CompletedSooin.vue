<template>
    <div>
      Completed Sooin: {{ numberOfCompletedSooin }}
    </div>
</template>

<script>
export default {
    props: {
        sooins: {
            type: Array,
            required: true
        }
    },

    computed: {
        numberOfCompletedSooin() {
            return this.sooins.filter(sooin => sooin.cheched).length
        }
    }
}
</script>

<style>

</style>