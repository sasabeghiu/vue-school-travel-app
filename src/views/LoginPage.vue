<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" name="username" type="text" class="input">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
        const username = ref('')
        const password = ref('')
        const route = useRoute()
        const router = useRouter()

        const login = () => {
            //auth user against api in real word
            window.user = username.value
            const redirectPath = route.query.redirect || '/protected'
            router.push(redirectPath)
        }
        return { username, password, login }
    }
}
</script>