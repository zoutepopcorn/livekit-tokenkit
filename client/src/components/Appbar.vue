<template>
  <v-app-bar app color="white">
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-alert v-if="isConnected" class="pt-8" type="success" dense>livekit</v-alert>
    <v-alert v-else type="warning" dense>livekit</v-alert>

    <v-alert v-if="status.connected" class="pt-8 ml-2" type="success" dense>token</v-alert>
    <v-alert class="ml-2" v-else type="warning" dense>token</v-alert>
  </v-app-bar>
</template>


<script>
import {isConnected, messages, connectWs} from "../state/livekit";
import {token, tokens, selectedToken, status} from "../state/token";

export default {
  name: 'Connect',
  setup() {
    return {selectedToken, isConnected, status}
  },
  data: () => ({}),
  methods: {},
  components: {}
}
</script>