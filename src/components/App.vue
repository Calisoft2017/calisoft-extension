<template>
    <v-app style="width: 340px">
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
    components: { FormSection }
}
</script>
