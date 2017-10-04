
//connection with dev tools
chrome.runtime.onConnect.addListener(devPort => {

    function devPortListenter(message, seeder, sendResponse) {
        chrome.tabs.sendMessage(message.id, message.action)
    }

    //Añade el listener
    devPort.onMessage.addListener(devPortListenter);

    //elimina el listener en desconexion
    devPort.onDisconnect.addListener(() => {
        devPort.onMessage.removeListener(devPortListenter)
    })

})


