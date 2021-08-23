import {TOKEN_URL, BASE_URL, WS_TOKEN_URL} from "./VARS";
import jwt_decode from "jwt-decode";
import {ref, reactive} from '@vue/composition-api'

const token = ref("");
const tokens = ref([]);
const rooms = ref([]);
const selectedToken = ref("");
const server = ref("");

let ws;

const status = reactive({
    success: false,
    connected: false
});

server.value = WS_TOKEN_URL;

const disconnectWs = (url) => {
    ws.close();
    status.connected = false;

}
const connectWs = (url) => {
    ws = new WebSocket(url);
    ws.onopen = () => {
        // ws.send(JSON.stringify({test: true}));
        ws.send(JSON.stringify({listRooms: true}));
        status.connected = true;
    };

    ws.onmessage = (evt) => {
        try {
            const data = JSON.parse(evt.data);
            console.log("DATA ", data.createToken);
            if (evt.data.test) {
                console.log(evt.data.test);
            }
            if (data.createToken) {
                const TOKEN = data.createToken;
                const DECODE = jwt_decode(TOKEN.token);
                TOKEN.decode = DECODE;
                setToken(TOKEN);
                status.success = true;
            } else if(data.listRooms) {
                rooms.value = data.listRooms;
                console.log("rooms ", rooms);
            }
        } catch (e) {
            console.log(e);
            console.log(evt.data);
        }


    };

    ws.onclose = () => {
        status.connected = false;
    };
}

const requestToken = async (options) => {
    const at = { identity: options.username, ttl: options.ttl };
    const {username, ttl, ...atOptions} = options;

    const createToken = {
        at, options: atOptions
    }

    ws.send(JSON.stringify({createToken}));


    // console.log("URL ", URL);
    // try {
    //     const URL = `${TOKEN_URL}/${room}/${user}`;
    //     const RESPONSE = await fetch(URL);
    //     console.log("RESPONSE");
    //     console.log(RESPONSE);
    //     const TOKEN = await RESPONSE.json();
    //     console.log(TOKEN);
    //     const DECODE = jwt_decode(TOKEN.token);
    //     console.log(DECODE);
    //     TOKEN.decode = DECODE;
    //     setToken(TOKEN);
    //     status.success = true;
    // } catch (e) {
    //     console.log("error");
    //     console.log(e);
    // }
}

const setTokenText = () => {
    // const ALL = [myToken, ...TOKENS];
    for (const ITEM of tokens.value) {
        console.log(ITEM);
    }
    // tokens.value = ALL;
}

const setTokens = (myToken) => {
    const TOKENS = JSON.parse(localStorage.getItem('tokens')) || [];
    const ALL = myToken ? [myToken, ...TOKENS] : [...TOKENS];
    localStorage.setItem('tokens', JSON.stringify(ALL));
    tokens.value = ALL;
}

const setToken = (myToken) => {
    localStorage.setItem('token', JSON.stringify(myToken));
    token.value = myToken;
    setTokens(myToken);
}

const setStatus = async () => {
    try {
        const RESPONSE = await fetch(`${BASE_URL}/ping`);
        const PONG = await RESPONSE.json();
        status.connected = PONG.pong;
    } catch (e) {
        console.log("ERREUR");
    }
}

const initTokens = () => {
    token.value = JSON.parse(localStorage.getItem('token'));
    setTokens()
}


connectWs(server.value);


// setStatus().then(() => {});
initTokens();

export {token, tokens, rooms, selectedToken, status, server, requestToken, setToken, connectWs, disconnectWs}