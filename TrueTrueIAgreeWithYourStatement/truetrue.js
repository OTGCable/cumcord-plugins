/* to do: get channel id, when alt+f5 pressed, send https://tenor.com/view/funny-gif-23169978 to the channel */

import { findByProps } from "@cumcord/modules/webpack"
const { getChannelId } = findByProps("getChannelId", "getVoiceChannelId");


const keyhandler = async (event) => {
    if (event.code == "F5") {
        event.preventDefault();
        console.log(getChannelId())
        /* figure out how to send a message and put it as the gif */
    }
}

export default (data) => {
    return {
        onLoad() {

            document.addEventListener("keydown", keyhandler)
        },
        onUnload() {
            
            document.removeEventListener("keydown", keyhandler)
        }
    }
}