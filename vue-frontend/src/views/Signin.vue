// two buttons and a slider
<template>
   
    <v-layout>
        <v-row>
            <v-col>
                <v-row>
<Slider />
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>Sign Up</v-btn>
                    </v-col>
                    <v-col>
<v-btn>Sign In</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
import Slider from '../components/Slider'
export default {
components:{
    Slider
}
}
</script>

<style>

</style>