<template>
    <button class="button" v-on:click="getContactData">Get Contact Data</button><br>
    <div v-for="contactData in contactDataList" :key="contactData.id" class="flex-container">
        <div class="left">
            <img class="img" :src="contactData.image"/>
            <div class="title">{{ contactData.title }}</div>
        </div>
        <div class="right">
            <div class="name">
                <div>{{ contactData.firstname }} {{ contactData.lastname }}</div>
            </div>
            <div class="coordinates">
                <div>{{ contactData.latitude }} {{ contactData.longitude }}</div>
            </div>
            <div class="company">
                <div>{{ contactData.company }}</div>
            </div>
            <div class="address">
                <div>{{ contactData.address.num }} {{ contactData.address.street }} {{ contactData.address.apt }}</div>
                <div>{{ contactData.address.city }} {{ contactData.address.state }} {{ contactData.address.postalcode }}</div>
            </div>
            <div class="phonenumber">
                <div>P: {{ contactData.phonenumber }}</div>
            </div>
        </div>
        <div class="options">
            <button @click="editContactData()">
                <font-awesome-icon icon="fa-solid fa-pencil" />&nbsp;&nbsp;
            </button>
            <button @click="deleteContact(index)">
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
        </div>  
    </div>
    <AddContactIcon/>
</template>

<script>
import axios from 'axios';
import AddContactIcon from '@/components/AddContactIcon.vue';
// import EditContactCardVue from './EditContactCard.vue';

export default {
    name: 'ContactCard',
    components: {
        AddContactIcon,
    },
    props: {
        // contactDataLis   t: { type: Array, required: true }
    },
    data() {
        return {
            contactDataList: []
        };
    },
    methods: {
        getContactData(){
            axios.get("Contacts.json").then(response => (this.contactDataList = response.data));
            //Or without using Axios:
            // fetch('Contacts.json')
            // .then(res => res.json())
            // .then(data => (this.contactDataList = data))    
        },
        deleteContact(index) {
            this.contactDataList.splice(index, 1);
        },
        editContactData(){
            // <EditContactCardVue/>
        }
    }
};
</script>

<style>
body{
    background-color: lightgray;
    color: grey;
}
.flex-container{
    background-color: white;
    display: inline-flex;
    width: 400px;
    padding: 15px 15px;
    margin: 15px;  
}
.right.left{
    display: inline;
}
.left{
    width: 150px;
}
.img{
    border-radius: 100%;
}
.name{
    padding-bottom: 5px;
    font-weight: bold;
}
.coordinates{
    padding-bottom: 5px;
}
.company{
    font-weight: bold;
}
.options{
    align-self: flex-end;
    color: black;
}
.button{
    border-radius: 80%;
    border: 2px solid grey;
    padding: 15px;
}
</style>