<template>
    <a v-if="isExternal" target="_blank" rel="noopener" class="external-link" :href="to">
        <slot></slot>
    </a>
    <RouterLink v-else v-bind="$props" class="internal-link">
        <slot></slot>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        ...RouterLink.props
    },
    computed: {
        isExternal() {
            return typeof this.to === 'string' && this.to.startsWith('http')
        }
    }
}
</script>