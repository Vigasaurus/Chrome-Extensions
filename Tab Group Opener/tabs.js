chrome.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(message, sender, sendResponse) {
    if (message.run != null)
        window[message.run](message.params);
}


