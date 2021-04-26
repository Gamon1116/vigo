<template>
    <div class="mb-2 d-flex">
        <div>
            <input type="checkbox" :checked="sooin.checked"
                @change="toggleCheckbox"
            >
        </div>
        <span 
            class="ml-3 flex-grow-1"
            :class="sooin.checked ? 'text-muted' : ''"
            :style="sooin.checked ? 'text-decoration: line-through' : ''"
        >
            {{ sooin.text }}
        </span>
        <button 
        class="btn btn-danger btn-sm"
        @click="clickDelete"
        >Delete</button>
        {{ numberOfCompletedSooin }}
    </div>
</template>

<script>
export default {
    props: {
        sooin: {
            type: Object,
            required: true
        }
    },
    computed: {
        numberOfCompletedSooin() {
         return this.$store.getters.numberOfCompletedSooin;
     }
    },
    methods: {
        toggleCheckbox(e) {
            this.$store.dispatch('toggleSooin', {
                id: this.sooin.id,
                checked: e.target.checked 
            })
            // this.$store.commit('TOGGLE_SOOIN', { 
            //     id: this.sooin.id,
            //     checked: e.target.checked 
            //     })
                

        //     this.$emit('toggle-checkbox',{
        //       id: this.sooin.id,
        //        checked: e.target.checked
        //     })
            },
        clickDelete() {
            this.$store.dispatch('deleteSooin', this.sooinId);
            // this.$store.commit('DELETE_SOOIN', this.sooin.id);
            // this.$emit('click-delete', this.sooin.id);
        }
    }
}
</script>

<style>

</style>