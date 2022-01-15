import { BroadcastChannel } from 'broadcast-channel'

const CHANNEL_NAME = 'react-pizza'

let channel

const broadcastCreateChannel = onMessageCallback => {
	channel = new BroadcastChannel(CHANNEL_NAME, {
		idb: {
			onclose: () => {
				channel.close()
			}
		}
	})

	channel.onmessage = onMessageCallback
}

const broadcastPostMessage = msg => {
	channel.postMessage(msg)
}

export { broadcastCreateChannel, broadcastPostMessage }
