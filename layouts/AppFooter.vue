<template>
    <div class="layout-footer">
        <div>
            <span>Coscom UI {{ version }} . Designed and developed © 2024 COSCOM GmbH. </span>
        </div>
    </div>
</template>

<script>
import pkg from '@/package.json';

export default {
    data() {
        return {
            version: pkg.version
        };
    }
};
</script>
