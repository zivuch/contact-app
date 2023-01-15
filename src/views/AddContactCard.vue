<template>
    <form @submit.prevent="addContact" class="container">
        <div class="left">
            <img class="avatar" src="avatar.jpg" />
            <input name="title" type="text" class="title" placeholder="title">
        </div>
        <div class="right">
            <div class="name">
                <input name="firstname" type="text" placeholder="first name"><br/>
                <input name="lastname" type="text" placeholder="last name">
            </div>
            <!-- <div class="coordinates">
                <input type="number" placeholder="latitude"><br />
                <input type="number" placeholder="longitude">
            </div> -->
            <div class="company">
                <input name="company" type="text" placeholder="company">
            </div>
            <div class="address">
                <input name="num" type="text" placeholder="street number"><br />
                <input name="street" type="text" placeholder="street name"><br />
                <input name="apt" type="text" placeholder="apartment number"><br />
                <input name="city" type="text" placeholder="city"><br />
                <input name="state" type="text" placeholder="state"><br />
                <input name="postalcode" type="text" placeholder="postal code">
            </div>
            <div class="phonenumber">
                <input name="phoneNumber" :class="{ valid: isValidPhoneNumber, invalid: !isValidPhoneNumber }" v-model="phoneNumber"
                    type="text" placeholder="phone number" @keyup="validatePhoneNumber" />
                <div class="invalid-warning" v-if="!isValidPhoneNumber">
                    Invalid phone number!
                </div>
            </div>
            <button class="btn">Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddContactCard',
    data() {
        return {
            title: '',
            firstname: '',
            lastname: '',
            // latitude:'',
            // longitude: '',
            company: '',
            num: '',
            street: '',
            apt: '',
            city: '',
            state: '',
            postalcode: '',
            phonenumber: '',
            isValidPhoneNumber: true,
            contactDataList:[]
        }
    },
    methods: {
        validatePhoneNumber: function()
        {
            let validationRegex = /^[+()]*[0-9]*[+()0-9]*[+(0-9)0-9]$/;
            if (this.phoneNumber.match(validationRegex)) {
                this.isValidPhoneNumber = true;
            } else {
                this.isValidPhoneNumber = false;
            }
        },
        addContact() {
            const contact = {
                title: this.title,
                firstname: this.firstname,
                lastname: this.lastname,
                number: this.number,
                // latitude: this.latitude,
                // longitude: this.longitude,
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
        }
    },
}
</script>

<style scoped>
body {
    background-color: lightgray;
    color: grey;
}
.container{
    background-color: white;
    border-radius: 10%;
    width: 300px;
    height: 430px;
    padding-top: 50ox;
    padding-left: 100px;
    padding-bottom: 50ox;
}
.avatar{
    width: 50px;
    border-radius: 50%;
    margin-top: 15px;
    margin-left: 60px;
    margin-bottom: 10px;
}
.btn{
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