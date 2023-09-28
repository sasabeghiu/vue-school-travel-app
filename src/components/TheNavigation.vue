<template>
    <div id="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/brazil">Brazil</RouterLink>
        <RouterLink to="/panama">Panama</RouterLink>
        <RouterLink to="/hawaii">Hawaii</RouterLink>
        <RouterLink to="/jamaica">Jamaica</RouterLink>
    </div>
</template>

<style lang="css">
#nav .active-link {
    color: magenta;
    border-bottom: 2px solid purple;
}
</style>