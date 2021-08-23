import {WS_URL} from "./VARS";
import {
    connect,
    RoomEvent,
    DataPacket_Kind,
    RemoteParticipant,
    RemoteTrackPublication,
    RemoteTrack,
    Participant,
} from 'livekit-client';
import {ref, reactive} from '@vue/composition-api'

const isConnected = ref(false);
const messages = ref([]);
const participants = ref([]);

const roomInfo = reactive({
    participants: 0
});

let room;
const encoder = new TextEncoder()
const decoder = new TextDecoder()



const setDisconnect = () => {
    isConnected.value;
}

const test = () => {
    console.log("callback ");
}

const disconnectWs = () => {
    room.disconnect();
    isConnected.value = false;
}

const connectWs = (token, serverUrl = WS_URL) => {
    connect(serverUrl, token, {
        audio: false,
        video: false,
    }).then((myRoom) => {

        console.log("room ", room);
        room = myRoom;

        isConnected.value = true;
        console.log('connected to room', myRoom.name);
        console.log('participants in room:', myRoom.participants.size);

        const logParticipants = () => {
            console.log(myRoom.participants);
            console.log(" ---- participants ---- ");
            for(const [key, value] of myRoom.participants) {
                console.log(value.identity);
                // console.log("participant ", key);
            }
        }

        // console.log(myRoom.participants);
        logParticipants();

        roomInfo.participants = myRoom.participants.size;

        const changeParticipants = () => {
            const tmpParticipants = [...participants.value];
            const nowParticipants = [];
            for(const [key, value] of myRoom.participants) {
                nowParticipants.push(value.identity);
            }

            console.log("nowParticipants ", nowParticipants);
            console.log("tmpParticipants ", tmpParticipants);

            const joined = () => {
                return nowParticipants.filter(x => !tmpParticipants.includes(x))
            }
            const left = () => {
                return tmpParticipants.filter(x => !nowParticipants.includes(x))
            }

            const joinedPart = joined();
            const leftPart = left();

            if(joinedPart.length > 0) {
                // console.log("joined: \t", joinedPart[0]);
                for(const join of joinedPart) {
                    console.log("join ", join);
                    participants.value.push(join);
                    messages.value.push({content: ` ${join} joined `, isStatus: true});
                }
            }
            if(leftPart.length > 0) {
                console.log("left: \t", leftPart[0]);
                for(const left of leftPart) {
                    participants.value = participants.value.filter(val => val !== left);
                    messages.value.push({content: ` ${left} left `, isStatus: true});
                }
            }


            console.log("changeParticipants");

            participants.value = [...nowParticipants];
        }
        changeParticipants();

        myRoom
            .on(RoomEvent.ParticipantConnected, changeParticipants)
            .on(RoomEvent.ParticipantDisconnected, changeParticipants)
            .on(RoomEvent.TrackSubscribed, changeParticipants)
            .on(RoomEvent.TrackUnsubscribed, changeParticipants)
            .on(RoomEvent.ActiveSpeakersChanged, test)
            .on(RoomEvent.Disconnected, setDisconnect)
            .on(RoomEvent.DataReceived, (payload, participant, kind) => {
                console.log("data receive");
                const strData = decoder.decode(payload);
                const jsonData = JSON.parse(strData);
                console.log(jsonData.message);
                messages.value.push(jsonData);
                console.log("strData ", jsonData);
                console.log("data receive");
            });

    });
}

const sendData = (myData = "fill your data plies") => {
    console.log("sendData ");
    const data = encoder.encode(myData);
    room.localParticipant.publishData(data, DataPacket_Kind.RELIABLE);
}

const sendTextMessage = (myData = {}) => {
    messages.value.push({...myData, isSender: true});
    const stringData = JSON.stringify(myData);
    const data = encoder.encode(stringData);
    room.localParticipant.publishData(data, DataPacket_Kind.RELIABLE);
}


console.log("livekit.js");


const hi = "hi there"
export {
    hi, isConnected, messages, participants, sendData, sendTextMessage, connectWs, disconnectWs
}

// function handleTrackSubscribed(
//     track: RemoteTrack,
//     publication: RemoteTrackPublication,
//     participant: RemoteParticipant
// ) {
//     if (track.kind === Track.Kind.Video || track.kind === Track.Kind.Audio) {
//         // attach it to a new HTMLVideoElement or HTMLAudioElement
//         const element = track.attach();
//         parentElement.appendChild(element);
//     }
// }
//
// function handleTrackUnsubscribed(
//     track: RemoteTrack,
//     publication: RemoteTrackPublication,
//     participant: RemoteParticipant
// ) {
//     // remove tracks from all attached elements
//     track.detach();
// }
//
// function handleActiveSpeakerChange(speakers: Participant[]) {
//     // show UI indicators when participant is speaking
// }
//
// function handleDisconnect() {
//     console.log('disconnected from room');
// }