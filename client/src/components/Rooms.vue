<template>
  <v-card align="left">
    <v-card-title class="text-h5">
      Rooms
    </v-card-title>
    <v-card-actions>
      <div v-for="room of rooms">
        {{room.name}},
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
// import JsonViewer from 'vue-json-viewer'
// import {WS_URL} from "../state/VARS";
// import {ui} from "../state/ui";
// import {isConnected, connectWs, disconnectWs} from "../state/livekit";
import {status, rooms} from "../state/token";

export default {
  name: 'Connect',
  setup() {
    return {status, rooms}
  },
  data: () => ({
  }),
  methods: {
  },
  components: {
  }
}
</script>
