import { createRouter, createWebHistory } from "vue-router";
import ContactCard from '../views/ContactCard';
import AddContactCard from '../views/AddContactCard';

const routes = [
    {path: '/get-contacts', name: 'get', component: ContactCard},
    {path: '/add-contact', name: 'add', component: AddContactCard}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router