<template>
  <ContactCard/>
  <!-- <AddContactIcon/> -->
  <AddContactCard/>

</template>

<script>
import ContactCard from './views/ContactCard.vue';
// import AddContactIcon from './components/AddContactIcon.vue'
import AddContactCard from './views/AddContactCard.vue';

export default {
  name: 'App',
  components: {
    ContactCard,
    // AddContactIcon,
    AddContactCard
  }
}
</script>

<style>

</style>
