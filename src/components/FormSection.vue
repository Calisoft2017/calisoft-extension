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
                    <v-btn success>Cargar</v-btn>
                </v-flex>
                <v-flex class="text-xs-center">
                    <v-btn success>Pegar</v-btn>
                </v-flex>
            </v-layout>

        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    name: 'form-section'
}
</script>

