<template>
  <div id="app" class="container">
   <h1 class="text-center">Sooin App</h1>
    <CompletedSooin />
    <AddSooin />
    <hr>
    <SooinList />
    <UserList />
  </div>
</template>

<script>
import SooinList from '@/components/SooinList';
import AddSooin from '@/components/AddSooin';
import CompletedSooin from '@/components/CompletedSooin';
import UserList from '@/components/UserList';
export default {
  components: {
    SooinList,
    AddSooin,
    CompletedSooin,
    UserList,
    
  },
}
</script>

<style>

</style>
