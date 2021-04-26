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
    methods: {
        toggleCheckbox(e) {
            this.$emit('toggle-checkbox',{
              id: this.sooin.id,
               checked: e.target.checked
            })
        },
        clickDelete() {
            this.$emit('click-delete', this.sooin.id);
        }
    },
}
</script>

<style>

</style>