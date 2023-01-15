i wouldn't make another component, duplicating code is a bad habit

<template>
    <form @submit.prevent="saveContact" class="container">
        <div class="left">
            <input v-modal="contactItem.title" name="title" type="text" class="title" placeholder="title">
        </div>
        <div class="right">
            <div class="name">
                <input v-modal="contactItem.firstname" name="firstname" type="text" placeholder="first name"><br />
                <input v-modal="contactItem.lastname" name="lastname" type="text" placeholder="last name">
            </div>
            <div class="company">
                <input v-modal="contactItem.company" name="company" type="text" placeholder="company">
            </div>
            <div class="address">
                <input v-modal="contactItem.num" name="num" type="text" placeholder="street number"><br />
                <input v-modal="contactItem.street" name="street" type="text" placeholder="street name"><br />
                <input v-modal="contactItem.apt" name="apt" type="text" placeholder="apartment number"><br />
                <input v-modal="contactItem.city" name="city" type="text" placeholder="city"><br />
                <input v-modal="contactItem.state" name="state" type="text" placeholder="state"><br />
                <input v-modal="contactItem.postalcode" name="postalcode" type="text" placeholder="postal code">
            </div>
            <div class="phonenumber">
                <!-- <input type="tel" placeholder="phone number" @keypress="checkNumber(inputtxt)"> -->
                <input v-modal="contactItem.phonenumber" name="phonenumber"
                    :class="{ valid: isValidPhoneNumber, invalid: !isValidPhoneNumber }" v-model="phoneNumber"
                    type="text" placeholder="phone number" @keyup="validatePhoneNumber" />
                <div class="invalid-warning" v-if="!isValidPhoneNumber">
                    Invalid phone number!
                </div>
            </div>
            <button class="btn" @click="saveContact()">Save</button>
            <button class="btn" @click="cancelSave()">Cancel</button>

        </div>
    </form>
    <div v-for="contactItem in contactItems" :key="contactData.id" class="flex-container">
        <div class="left">
            <!-- <img class="img" :src="contactData.image" /> -->
            <div class="title">{{ contactData.title }}</div>
        </div>
        <div class="right">
            <div class="name">
                <div>{{ contactItem.firstname }} {{ contactItem.lastname }}</div>
            </div>
            <div class="coordinates">
                <div>{{ contactItem.latitude }} {{ contactItem.longitude }}</div>
            </div>
            <div class="company">
                <div>{{ contactItem.company }}</div>
            </div>
            <div class="address">
                <div>{{ contactItem.address.num }} {{ contactItem.address.street }} {{ contactItem.address.apt }}</div>
                <div>{{ contactItem.address.city }} {{ contactItem.address.state }} {{ contactItem.address.postalcode }}
                </div>
            </div>
            <div class="phonenumber">
                <div>P: {{ contactItem.phonenumber }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditContactCard',
    data() {
        return {
            contactItem: {
                title: '',
                firstname: '',
                lastname: '',
                company: '',
                num: '',
                street: '',
                apt: '',
                city: '',
                state: '',
                postalcode: '',
                phonenumber: '',
                isValidPhoneNumber: true,
                contactDataList: []
            }
        }
    },
    methods: {
        validatePhoneNumber: function () {
            let validationRegex = /^[+()]*[0-9]*[+()0-9]*[+(0-9)0-9]$/;
            if (this.phoneNumber.match(validationRegex)) {
                this.isValidPhoneNumber = true;
            } else {
                this.isValidPhoneNumber = false;
            }
        },
        saveContact() {
            const contact = {
                title: this.title,
                firstname: this.firstname,
                lastname: this.lastname,
                number: this.number,
                company: this.company,
                num: this.num,
                street: this.street,
                apt: this.apt,
                city: this.city,
                state: this.state,
                postalcode: this.postalcode,
                phonenumber: this.phonenumber
            };
            this.contactDataList.push(contact)
        },
        cancelSave(){

        }
    },
}
</script>

<style scoped>
body {
    background-color: lightgray;
    color: grey;
}

.container {
    background-color: white;
    border-radius: 10%;
    width: 300px;
    height: 430px;
    padding-top: 50ox;
    padding-left: 100px;
    padding-bottom: 50ox;
}

/* .avatar {
    width: 50px;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 60px;
    margin-bottom: 10px;
} */

.btn {
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 10px;
}

.invalid {
    border: 2px solid red;
}

.invalid-warning {
    margin: 10px auto;
    color: red;
}
</style>