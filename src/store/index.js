import { createStore } from 'vuex'

export default createStore({
  state: {
    contactList:[]
  },
  getters: {
    getContactList (state) {
      return state.contactList
    }
  },
  mutations: {
    ADD_CONTACT_TO_LIST(state,contact){
      state.contactList.push(contact)
    }
  },
  actions: {
    addContactToList:({  commit },contact)=>{
      commit('ADD_CONTACT_TO_LIST',contact)
    }
  },
  modules: {
  }
})
