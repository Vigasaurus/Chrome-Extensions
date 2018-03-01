chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var tabUrl = tab.url;
    if (tabUrl == ("https://www.youtube.com/")) {
        chrome.tabs.update(tabId, {
            url: "https://www.youtube.com/feed/subscriptions"
        });
    }
});
