<template>
    <v-card>
        <v-card-media height="80px" class="white--text" src="assets/img/form.jpg">
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 flexbox class="text-xs-center">
                        <span class="headline">Formularios</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-media>
        <v-card-actions>
            <v-layout>
                <v-flex class="text-xs-center">
                    <v-btn error @click="detach()" v-if="formsAttached">Cancelar</v-btn>
                    <v-btn success @click="attach()" v-else>Seleccionar</v-btn>
                </v-flex>
            </v-layout>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: 'form-section',
    created() {
        chrome.runtime.onMessage.addListener(this.selectForm.bind(this))
    },
    data() {
        return {
            form: null,
            formsAttached: false
        }
    },
    methods: {
        attach() {
            this.$send('ATTACH_FORMS')
            this.formsAttached = true
        },
        detach() {
            this.$send('DETACH_FORMS')
            this.formsAttached = false
        },
        selectForm(message, seeder, sendResponse) {

        }
    }
}
</script>

