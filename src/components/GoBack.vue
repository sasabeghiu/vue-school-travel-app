<template>
    <span class="go-back">
        <button @click="goBack()">Go Back</button>
    </span>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back();
        },
    },
};
</script>