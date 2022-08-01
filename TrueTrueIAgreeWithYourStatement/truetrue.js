import { findByProps, findAll } from "@cumcord/modules/webpack"
const { getChannelId } = findByProps("getChannelId", "getVoiceChannelId");
const messageQueue = findAll(arg => arg.enqueue)[0]

function enqueueMessage(text) {
    return messageQueue.enqueue(
        {
            "type": 0,
            "message": {
                channelId: getChannelId(),
                content: text
            }
        },
        r => {
            return;
        }
    )
}

// Ideally we would want to be able to remap the keys but i'm just here to make this functional and not shit
function keyHandler(event) {
    if(event.altKey == true && event.keyCode == 70) { // ALT + F - Dog
        event.preventDefault();
        return enqueueMessage("https://tenor.com/view/funny-gif-23169978");
    } else if(event.altKey == true && event.keyCode == 72) { // ALT + H - Beef
        event.preventDefault();
        return enqueueMessage("https://media.discordapp.net/attachments/981688516935315497/987909824933134416/IMG_2303.png?width=447&height=676");
    }

    return event;
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
