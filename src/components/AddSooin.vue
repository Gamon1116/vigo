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
            this.$emit('add-sooin', e.target.value);
        }
    },
}
</script>

<style>

</style>