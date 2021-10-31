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
    if (event.code == "F6") {
        event.preventDefault();
        messageQueue.enqueue(
            {
                "type": 0,
                "message": {
                    channelId: getChannelId(),
                    content: "https://cdn.discordapp.com/attachments/903761538568032268/904159350740910150/true.png"
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