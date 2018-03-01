chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    console.log(tab.getElementsByTagName("body")[0]);
    darken();
}

function darken() {

}
