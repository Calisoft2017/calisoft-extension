
export default {
    install(Vue) {
        let connection = chrome.runtime.connect({ name: 'panel ' })
        Vue.prototype.$connection = connection;

        Vue.prototype.$send = function (type, payload) {
            this.$connection.postMessage({
                id: chrome.devtools.inspectedWindow.tabId,
                action: { type, payload }
            })
        };
    }
}