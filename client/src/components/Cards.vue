<template>
  <v-container>
    <v-row class="text-center center">
      <!--      <v-col align="center" class="align-content-md-center" cols="12" sm="6" md="4">-->
      <!--        <Rooms></Rooms>-->
      <!--      </v-col>-->
      <v-col v-if="!isConnected" align="center" class="align-content-md-center" cols="12" sm="6" md="4">
        <CreateToken></CreateToken>
      </v-col>
      <v-col align="center" class="align-content-md-center" cols="12" sm="6" md="4">
        <Connect></Connect>
      </v-col>
      <v-col align="center" class="align-content-md-center" cols="12" sm="6" md="4">
        <Chat></Chat>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateToken from "./CreateToken";
import Connect from "./Connect";
import Chat from "./Chat";
import Rooms from "./Rooms";

import {isConnected} from "../state/livekit";


export default {
  name: 'Cards',
  data: () => ({}),
  setup() {
    return {isConnected}
  },
  components: {
    CreateToken,
    Connect,
    Chat,
    Rooms
  }
}
</script>
