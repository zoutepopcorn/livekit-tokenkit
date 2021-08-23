#!/usr/bin/env node
import {WebSocketServer} from 'ws';
import {RoomServiceClient, AccessToken} from 'livekit-server-sdk';

const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;
const LIVEKIT_HOST = 'http://localhost:7880';
const svc = new RoomServiceClient(LIVEKIT_HOST, API_KEY, API_SECRET);
const wss = new WebSocketServer({port: 5555});

const getToken = (options) => {
    const PARAMS = options;
    const at = new AccessToken(API_KEY, API_SECRET, PARAMS.at);
    at.addGrant(PARAMS.options);
    const token = at.toJwt();
    return {name: PARAMS.at.identity, room: PARAMS.options.room, token}
}

wss.on('connection', async (ws) => {
    ws.on('message', async (message) => {
        const msg = JSON.parse(message);
        if (msg.createToken) {
            const createToken = getToken(msg.createToken);
            ws.send(JSON.stringify({createToken}))
        } else if(msg.listRooms) {
            const listRooms = await svc.listRooms()
            ws.send(JSON.stringify({listRooms}));
        }
    });
    ws.send('ws connected');
    console.log(" websocket connected ");
});

console.log("tokenkit websocket running :5555");
console.log("using API_KEY & API_SECRET on http://localhost:7880");