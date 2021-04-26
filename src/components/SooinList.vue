<template>
  <div>
    <Sooin 
      v-for="sooin in sooins" 
      :key="sooin.id" 
      :sooin="sooin"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteSooin"
   />
  </div>
</template>

<script>
import Sooin from '@/components/Sooin.vue';

export default {
  components: {
    Sooin
  },
  props: {
    sooins: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit('toogle-checkbox', value)
    },
    deleteSooin(sooinId) {
      this.$emit('click-delete', sooinId);
    }
  },
}
</script>

<style>

</style>