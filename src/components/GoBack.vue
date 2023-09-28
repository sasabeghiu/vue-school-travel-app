<template>
    <span class="go-back">
        <button @click="router.back()">Go Back</button>
    </span>
</template>

<!-- ignore useless error -->
<script>
export default {
    methods: {
        goBack() {
            this.$router.back();
        },
    },
};
</script>