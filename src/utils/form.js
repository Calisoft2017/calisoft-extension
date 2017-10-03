/**
 * Marca los formularios y les asigna el listener para ser selecionado
 */
export function attachForms() {
    Array.from(document.getElementsByTagName('form')).forEach(form => {
        form.classList.add("calisoft-form-extension");
        form.addEventListener('click', selectForm)
    });
}

/**
 * Desmarca los formularios y retira el listener del evento
 */
export function detachForms() {
    Array.from(document.getElementsByTagName('form')).forEach(form => {
        form.classList.remove("calisoft-form-extension");
        form.removeEventListener('click', selectForm)
    });
}

/**
 * Seleciona el formulario 
 * @param {Event} event 
 */
export function selectForm(event) {
    let form = getFormInputs(event.currentTarget)
    chrome.runtime.sendMessage({ type: 'selectForm', payload: form })
}

/**
 * Extrae los inputs del formulario en formato
 * @param {HTMLFormElement} form
 * @return {any[]} inputs
 */
export function getFormInputs(form) {
    let inputs = form.querySelectorAll('input');
    return Array.from(inputs).map(elem => {
        let input = {};
        for (let attr of elem.attributes) {
            input[attr.name] = attr.value
        }
        return input;
    });
}