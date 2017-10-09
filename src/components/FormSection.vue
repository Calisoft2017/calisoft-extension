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
        <v-card-text v-show="form">
            {{ form }}
        </v-card-text>
        <v-card-actions>
            <v-layout>
                <v-flex class="text-xs-center">
                    <v-btn v-if="form" v-clipboard="formStr" @success="snackbar = true">Copiar</v-btn>
                    <v-btn error @click="detach()" v-if="formsAttached">Cancelar</v-btn>
                    <v-btn success @click="attach()" v-else>Seleccionar</v-btn>
                </v-flex>
            </v-layout>
        </v-card-actions>
        <v-snackbar bottom v-model="snackbar">
            Formulario copiado al portapapeles!
            <v-btn flat dark @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </v-card>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            formsAttached: false,
            snackbar: false
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
            this.$store.commit({ type: 'SELECT_FORM', form: null })
        }
    },
    computed: {
        ...mapState(['form']),

        formStr() {
            return JSON.stringify(this.form || {})
        }
    },
}
</script>

