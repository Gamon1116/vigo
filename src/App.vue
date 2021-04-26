<template>
  <div id="app" class="container">
   <h1 class="text-center">Sooin App</h1>
    <CompletedSooin :sooins="sooins" />
    <AddSooin @add-sooin="addSooin" />
   <hr>
  <SooinList 
    :sooins="sooins" 
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteSooin"
  />
  {{ sooins }}
  </div>
</template>

<script>
import SooinList from '@/components/SooinList';
import AddSooin from '@/components/AddSooin';
import CompletedSooin from '@/components/CompletedSooin';
export default {
  components: {
    SooinList,
    AddSooin,
    CompletedSooin,
    
  },
  data() {
    return {
      sooinText: '',
      sooins: [
        {id : 1, text: 'buy a car', checked: false},
        {id : 2, text: 'play game', checked: false},
      ]
    }
  },
  methods: {
    deleteSooin(id) {
      // const index = this.sooins.findIndex(sooin => {
      //   return sooin.id == id;
      // });
      // this.sooins.splice(index, 1);
      this.sooins = this.sooins.filter(sooin => sooin.id !==id)
    },
    addSooin(value){
      this.sooins.push({
        id:Math.random(),
        text: value,
        checked: false
      });
      this.sooinText = '';
    },
    toggleCheckbox({ id, checked }) {
      const index = this.sooins.findIndex( sooin => {
        return sooin.id === id;
      });
      this.sooins[index].checked = checked;
    }
  }
}
</script>

<style>

</style>
