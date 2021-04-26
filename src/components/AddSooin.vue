<template>
    <input 
        v-model="sooinText"
        type="text" 
        class="w-100 p-2" 
        placeholder="Type Sooin"
        @keyup.enter="addSooin"
    >
</template>

<script>
export default {
    data() {
        return {
            sooinText: '',
        }
    },
    methods: {
        addSooin(e) {
            // this.$store.commit('ADD_SOOIN', e.target.value)
            this.$store.dispatch('addSooin', e.target.value);
            this.sooinText = '';
            // this.$emit('add-sooin', e.target.value);
        }
    },
}
</script>

<style>

</style>