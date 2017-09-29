console.log("Background")
chrome.runtime.onMessage.addListener((request, sender, response) => {
    console.log(request);
})