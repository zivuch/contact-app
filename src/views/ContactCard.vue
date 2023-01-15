<template>
    <div class="left">
        <img class="img" :src="contactData.image"/>
        <div class="title">{{ contactData.title }}</div>
    </div>
    <div class="right">
        <div class="name">
            <div>{{ contactData.firstname }} {{ contactData.lastname }}</div>
        </div>
            <!-- <div class="coordinates">
                <div>{{ contactData.latitude }} {{ contactData.longitude }}</div>
            </div> -->
            <!-- <div class="company">
                <div>{{ contactData.company }}</div>
            </div> -->
            <!-- <div class="address">
                <div>{{ contactData.address.num }} {{ contactData.address.street }} {{ contactData.address.apt }}</div>
                <div>{{ contactData.address.city }} {{ contactData.address.state }} {{ contactData.address.postalcode }}</div>
            </div> -->
    </div>
    <div class="phonenumber">
        <div>P: {{ contactData.phonenumber }}</div>
    </div>
        <div class="options">
            <button @click="editContactData">
                <font-awesome-icon icon="fa-solid fa-pencil" />&nbsp;&nbsp;
            </button>
            <button @click="deleteContact">
                <font-awesome-icon icon="fa-solid fa-trash" />
            </button>
        </div>
</template>
<script>
export default {
    name:'contactCard',
    props:{
        contactData:{ type:Object, default:()=>{} },
        index:{type:Number,required:true}
    },
    methods:{
        deleteContact(){
            // implement this. use the index to access the vuex store (index.js) in order to delete this card
            console.log("helo",this.index);
        },
        editContactData(){
            // i would make the cards lines as inputs. and make them readonly, and when the user clicks on edit
            // i would make the inputs not read only anymore and editable. afterwards ill make a function in the store
            // that access the list in the correct index, either edit it directly using v-models, or override it completely with scoped state
            console.log('hello',this.index);
        }
    }
}
</script>

<style scoped>
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