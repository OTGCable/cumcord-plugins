import { findByProps, findAll } from "@cumcord/modules/webpack"
const { getChannelId } = findByProps("getChannelId", "getVoiceChannelId");
const messageQueue = findAll(arg => arg.enqueue)[0]

const keyHandler = async (event) => {
    if (event.code == "F5") {
        event.preventDefault();
        messageQueue.enqueue(
            {
                "type": 0,
                "message": {
                    channelId: getChannelId(),
                    content: "https://tenor.com/view/funny-gif-23169978"
                }
            },
            r => {
                return;
            }
        )
    }
}

const keyHandler = async (event) => {
    if (event.code == "F6") {
        event.preventDefault();
        messageQueue.enqueue(
            {
                "type": 0,
                "message": {
                    channelId: getChannelId(),
                    content: "https://i.imgur.com/kJonTcq.png"
                }
            },
            r => {
                return;
            }
        )
    }
}

export default (data) => {
    return {
        onLoad() {

            document.addEventListener("keydown", keyHandler)
        },
        onUnload() {
            
            document.removeEventListener("keydown", keyHandler)
        }
    }
}