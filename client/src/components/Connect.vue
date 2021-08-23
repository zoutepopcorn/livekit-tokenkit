<template>
  <v-card align="left">
    <v-card-title class="text-h5">
      Connect
    </v-card-title>

    <v-card-actions>
      <v-select v-model="selectedToken" :disabled="isConnected" item-text="name" :items="tokens" filled label="tokens"
                return-object
                dense></v-select>
    </v-card-actions>

    <v-expansion-panels v-if="selectedToken">
      <v-expansion-panel>
        <v-expansion-panel-header>
          Token Info
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-text>
            <json-viewer sort :value="selectedToken.decode"></json-viewer>
          </v-card-text>
          <v-card-actions>
            <v-text-field class="pt-7 mr-3" v-model="selectedToken.token" label="token" outlined></v-text-field>
            <v-btn @click="copyToken()">Copy</v-btn>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!--    <v-card-text v-if="selectedToken">-->
    <!--    </v-card-text>-->
    <v-card-actions class="mt-6">
      <v-text-field :disabled="isConnected" class="mr-3" v-model="server" label="server" placeholder="server"
                    outlined></v-text-field>
    </v-card-actions>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!isConnected" @click="connect()" :disabled="!selectedToken.token">connect</v-btn>
      <v-btn v-else @click="disconnectWs()">disconnect</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import JsonViewer from 'vue-json-viewer'
import {WS_URL} from "../state/VARS";
import {ui} from "../state/ui";
import {isConnected, connectWs, disconnectWs} from "../state/livekit";
import {token, tokens, selectedToken, requestToken, setToken} from "../state/token";

export default {
  name: 'Connect',
  setup() {
    return {ui, token, tokens, isConnected, selectedToken, requestToken, disconnectWs}
  },
  data: () => ({
    myTokens: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    server: WS_URL
  }),
  methods: {
    connect() {
      connectWs(selectedToken.value.token, this.server);
    },
    copyToken() {
      navigator.clipboard.writeText(selectedToken.value.token);
    }
  },
  components: {
    JsonViewer
  }
}
</script>
