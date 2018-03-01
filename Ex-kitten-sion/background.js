chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        run: "kittenize"
    };
    chrome.tabs.sendMessage(tab.id, msg)
}
