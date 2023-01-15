<template>
  <ContactCardList/>
  <!-- <AddContactIcon/> -->
  <AddContactCard/>

</template>

<script>
import ContactCardList from './views/ContactCardList.vue';
// import AddContactIcon from './components/AddContactIcon.vue'
import AddContactCard from './views/AddContactCard.vue';

export default {
  name: 'App',
  components: {
    ContactCardList,
    // AddContactIcon,
    AddContactCard
  }
}
</script>

<style>

</style>
