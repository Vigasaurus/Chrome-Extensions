chrome.runtime.onMessage.addListener(receiveMessage);

function receiveMessage(message, sender, sendResponse) {
    if (message.run != null)
        window[message.run](message.params);
}

function kittenize() {
    let imgs = [
        "imgs/one.jpg",
        "imgs/two.jpg",
        "imgs/three.jpg",
        "imgs/four.jpg",
        "imgs/five.jpg",
        "imgs/six.jpg",
        "imgs/seven.jpg",
        "imgs/eight.jpg",
        "imgs/nine.jpg",
        "imgs/ten.jpg"
    ];

    let pageImgs = document.getElementsByTagName("img");


    for (elt of pageImgs) {
        //console.log(elt.src);
        elt.src = (chrome.extension.getURL(imgs[Math.floor(Math.random() * imgs.length)]));

    }

}
