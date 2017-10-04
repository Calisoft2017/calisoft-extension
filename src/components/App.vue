<template>
    <v-app>
        <v-toolbar class="green">
            <v-toolbar-title>
                <img src="assets/img/calisoft.png" alt="">
            </v-toolbar-title>
        </v-toolbar>
        <v-container fluid>
            <form-section></form-section>
        </v-container>
    </v-app>
</template>
<script>

import FormSection from './FormSection'

export default {
    components: { FormSection },
    created() {
        chrome.runtime.onMessage.addListener(message => this.$store.commit(message))
    }
}
</script>
