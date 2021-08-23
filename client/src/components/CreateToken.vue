<template>
  <v-card>
<!--    <v-img class="white&#45;&#45;text align-end" src="token.png">-->
      <v-card-title id="createtoken">
        Create Token ({{ tokens.length }})
        <!--          <h6 class="mb-16 ml-5">({{ tokens.length }} tokens) </h6>-->
      </v-card-title>
<!--    </v-img>-->

    <v-card-actions>
      <v-text-field class="pt-7 mr-3" v-model="server" label="server" placeholder="server" outlined></v-text-field>
      <v-btn v-if="!status.connected" @click="connectWs(server)">Connect</v-btn>
      <v-btn v-else @click="disconnectWs()">Disconnect</v-btn>
    </v-card-actions>


    <v-form ref="form" @submit="requestMyToken" onSubmit="return false;">

      <v-card-actions>
        <v-text-field v-model="form.room" :rules="[rules.minLength]" :disabled="!status.connected" class="mr-3"
                      label="room"
                      placeholder="room"
                      outlined></v-text-field>
        <v-text-field v-model="form.username" :rules="[rules.minLength]" :disabled="!status.connected" class="ml-3"
                      label="username"
                      placeholder="username" outlined></v-text-field>
      </v-card-actions>

      <v-card-text class="pt-0 pl-0 pr-0 pb-6">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Options
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card-text>
                <v-checkbox v-model="form.roomCreate" label="roomCreate"></v-checkbox>
                <v-checkbox v-model="form.roomList" label="roomList"></v-checkbox>
                <v-checkbox v-model="form.roomJoin" label="roomJoin"></v-checkbox>
                <v-checkbox v-model="form.roomAdmin" label="roomAdmin"></v-checkbox>
                <v-checkbox v-model="form.canPublish" label="canPublish"></v-checkbox>
                <v-checkbox v-model="form.canSubscribe" label="canSubscribe"></v-checkbox>
                <v-checkbox v-model="form.hidden" label="hidden"></v-checkbox>
                <v-subheader class="pl-0">
                  Duration
                </v-subheader>

                <v-btn-toggle v-model="form.ttl" tile color="blue accent-3" group>
                  <v-btn value="1h">1h</v-btn>
                  <v-btn value="6h">6h</v-btn>
                  <v-btn value="1w">1w</v-btn>
                  <v-btn value="30d">30d</v-btn>
                  <v-btn value="1y">1y</v-btn>
                </v-btn-toggle>

              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" :disabled="!status.connected" :loading="status.success">GET TOKEN</v-btn>
      </v-card-actions>
    </v-form>

  </v-card>


</template>

<script>
import {ui} from "../state/ui";
import {isConnected} from "../state/livekit";
import {token, tokens, requestToken, connectWs, disconnectWs, status, server, setToken} from "../state/token";
import {watch} from '@vue/composition-api'

export default {
  name: 'CreateToken',
  created() {
  },
  setup() {
    watch(status, (newValue, oldValue) => {
      if (status.success) {
        setTimeout(() => {
          status.success = false;
        }, 500);
      } else {

      }
    });
    return {ui, token, tokens, status, server, isConnected, requestToken, connectWs, disconnectWs}
  },
  data: () => ({
    form: {
      room: "",
      username: "",
      roomCreate: true,
      roomList: true,
      roomJoin: true,
      roomAdmin: true,
      canPublish: true,
      canSubscribe: true,
      hidden: false,
      ttl: '1y'
    },
    rules: {
      minLength: value => (value && value.length > 0) || "min length 1 char"
    }
  }),
  methods: {
    connect() {

    },
    requestMyToken() {
      // const userAndRoom = {this.room ? this.room : 'room', this.username ? this.username : 'user'}
      if (this.$refs.form.validate()) {
        requestToken({...this.form})
        setTimeout(() => {
          this.$refs.form.reset();
        }, 500)
        // setTimeout(() => {
        //   this.form.room = "";
        //   this.form.username = "";
        // }, 5000);
      } else {
      }
    }
  }
}
</script>
