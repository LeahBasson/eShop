<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Register</h2>
        </div>
        <div class="row">
            <form class="form" @submit.prevent="register">
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="text" placeholder="last name" v-model="payload.lastName"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="text" placeholder="Age" v-model="payload.age" required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAdd"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="password" placeholder="Password" v-model="payload.pwd"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper">
                    <span>
                        <input class="form-control" type="url" placeholder="Profile link" v-model="payload.profileURL"
                            required />
                    </span>
                </div>
                <div class="form-control-wrapper d-md-flex d-block justify-content-between">
                    <button type="submit" class="btn btn-success">Submit</button>
                    <button type="reset" class="btn btn-dark">Reset</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const payload = reactive({
    firstName: '',
    lastName: '',
    age: '',
    emailAdd: '',
    pwd: '',
    profileURL: 'https://i.postimg.cc/3rZ0H0D8/profile-Image.png'
})
function register() {
    store.dispatch('register', payload)
}
</script>

<style scoped></style>