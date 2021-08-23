<template>
  <v-app>
<!--    <v-app-bar app color="white">-->
      <Appbar/>
<!--      <v-spacer></v-spacer>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-alert v-if="true" class="pt-8" type="success" dense>livekit</v-alert>-->
<!--      <v-alert v-else type="warning" dense>livekit</v-alert>-->
<!--    </v-app-bar>-->
    <v-main>
      <Cards/>
    </v-main>
  </v-app>
</template>

<script>
import Cards from './components/Cards';
import Appbar from './components/Appbar';


export default {
  name: 'App',

  components: {
    Cards,
    Appbar
  },

  data: () => ({
    //
  }),
};
</script>
