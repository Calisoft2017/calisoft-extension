
import { attachForms, detachForms } from './utils/form'

const ACTIONS = {
    'ATTACH_FORMS': attachForms,
    'DETACH_FORMS': detachForms
}

chrome.runtime.onMessage.addListener((message, seeder, sendResponse) => {
    ACTIONS[message.type](message.payload);
})
