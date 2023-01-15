<template>
    <div v-for="(contactData ,index) in getContactList" :key="index" class="flex-container">
        <ContactCard :contactData="contactData" :index="index"></ContactCard>
    </div>
    <AddContactIcon/>
</template>

<script>
import AddContactIcon from '@/components/AddContactIcon.vue';
import ContactCard from './ContactCard.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'ContactCardList',
    components: {
        AddContactIcon,
        ContactCard,
    },
  
    data() {
        return {
            contactDataList: []
        };
    },
    computed: {
        ...mapGetters( ['getContactList']),
    },
};
</script>

<style>
body{
    background-color: lightgray;
    color: grey;
}

</style>