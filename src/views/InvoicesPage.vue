<template>
    <div>
        <h1>Invoices</h1>
    </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'

export default {
    setup() {
        onBeforeRouteLeave(() => {
            const answer = window.confirm('Are you sure you want to leave? Invoices are important!')
            if (!answer) return false
        })
    }
}
</script>