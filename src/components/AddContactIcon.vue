<template>
    <div class="icon">
        <button @click="goToAddContact">
            <font-awesome-icon  icon="fa-solid fa-plus-circle" size="3x" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'AddContactIcon',
    methods: {
        goToAddContact() {
            this.$router.push('/add-contact')
        }
    },
}

</script>

<style scoped>
.icon {
    display: flex;
    justify-content: center;
    color: black;
}
</style>