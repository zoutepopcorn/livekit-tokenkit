<template>
  <!--   :disabled="!isConnected" -->
  <v-card v-if="isConnected" align="left">
    <v-form @submit="sendMyTextMessage" onSubmit="return false;">
      <v-card-title class="text-h5">
        Chat
        <h6 class="mt-6 ml-5">{{ selectedToken.name }} - {{ selectedToken.room }}</h6>
      </v-card-title>

      <v-card-text class="pt-0 pl-0 pr-0 pb-6">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Participants ({{participants.length}})
            </v-expansion-panel-header>
            <v-expansion-panel-content>
<!--              {{ participants }}-->
              <div v-for="part of participants">
                {{ part }}
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>

      <v-card-text class="pa-0">
        <div id="scrollDiv">
        <span v-for="msg of messages">

            <div v-if="msg.isSender">
              <v-row>
                  <v-spacer></v-spacer>
                  <v-card class="pa-3 ma-4 mr-6 rounded-l" max-width="60%" color="#F3FDE3">
                            <v-card-text class="ma-0 pa-0">
                              {{ msg.content }}
                              {{ msg.from }}
                            </v-card-text>
                            <v-card-text class="ma-0 pa-0">
                              <p class="ma-0 pa-0 text-right caption">
                                <v-icon color="green" x-small>mdi-check</v-icon>
                                {{ getTime() }}
                              </p>
                            </v-card-text>
                  </v-card>
              </v-row>
            </div>

            <div v-if="msg.isStatus">
              <v-row>
                <v-spacer></v-spacer>
                  <v-card class="pa-1 pb-0 mb-3 ma-2" color="#E1F1FB">
                      {{ msg.content }}
                  </v-card>
                <v-spacer></v-spacer>
              </v-row>
            </div>

            <div v-if="!msg.isStatus && !msg.isSender">
              <v-row>
                  <v-card class="pa-3 ma-4 mr-6" max-width="60%" color="#FFFFFF" rounded>
                            <v-card-text class="ma-0 pa-0">
                              {{ msg.content }}
                              {{ msg.from }}
                            </v-card-text>
                            <v-card-text class="ma-0 pa-0">
                              <p class="ma-0 pa-0 text-right caption">
                                <v-icon color="green" x-small>mdi-check</v-icon>
                                {{ getTime() }}
                              </p>
                            </v-card-text>
                  </v-card>
                  <v-spacer></v-spacer>
              </v-row>
            </div>
      </span>
        </div>
      </v-card-text>

      <v-card-actions v-if="selectedToken && isConnected">
        <v-text-field class="pt-7 mr-3" v-model="message" label="message" outlined rounded></v-text-field>
        <v-btn fab dark color="blue">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import {watch} from '@vue/composition-api'
import JsonViewer from 'vue-json-viewer'
import {WS_URL} from "../state/VARS";
import {ui} from "../state/ui";
import {isConnected, messages, participants, sendData, sendTextMessage, connectWs} from "../state/livekit";
import {token, tokens, selectedToken, requestToken, setToken} from "../state/token";


const scrollDown = () => {
  const container = document.getElementById("scrollDiv");
  container.scroll({
    top: container.scrollHeight,
    behavior: 'smooth'  // 👈
  });
}

export default {
  name: 'Connect',
  setup() {
    return {
      ui,
      token,
      tokens,
      selectedToken,
      isConnected,
      messages,
      participants,
      requestToken,
      sendData,
      sendTextMessage
    }
  },
  data: () => ({
    myTokens: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    server: WS_URL,
    message: ""
  }),
  created() {
    watch(messages, () => {
      setTimeout(scrollDown, 300);
    });
  },
  methods: {
    sendMyTextMessage() {
      sendTextMessage({from: selectedToken.name, content: this.message})
      this.message = ""
    },
    getTime() {
      const today = new Date();
      return today.getHours() + ":" + today.getMinutes();
    }
  },
  components: {
    JsonViewer
  },
  computed: {}
}
</script>

<style>
#scrollDiv {
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>