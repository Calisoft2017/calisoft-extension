import * as fm from '../src/utils/form'

const getHtml = () => `
    <form>
        <input type="email" name="email" required>
        <input type="search" name="search" required maxlength="50">
    </form>
    <form>
        <input type="text" name="username" required 
            pattern="^[\w\d[\b]]*$">
        <input type="number" name="edad" required min="0">
    </form>
`

const getForms = () => Array.from(document.forms)

describe('Seleccion de formularios', () => {

    document.body.innerHTML = getHtml()

    test('Señalar los formularios', () => {
        fm.attachForms()
        expect(getForms().every(form =>
            form.classList.contains('calisoft-form-extension')
        )).toBeTruthy()
    })

    test('Desmarcar los formularios', () => {
        fm.detachForms()
        expect(getForms().every(form =>
            !form.classList.contains('calisoft-form-extension')
        )).toBeTruthy()
    })

    test('Convirtir reglas de inputs a js (1)', () => {
        let input = getForms()[0].querySelector('input')
        let attrs = fm.getInputAttributes(input)
        expect(attrs).toEqual({
            type: 'email', name: 'email', required: ""
        })
    })

    test('Convirtir reglas de inputs a js (2)', () => {
        let input = getForms()[0].querySelectorAll('input')[1]
        let attrs = fm.getInputAttributes(input)
        expect(attrs).toEqual({
            type: 'search', name: 'search', required: "",
            maxlength: '50'
        })
    })

    test('Convertir formulario a js (1)', () => {
        let form = getForms()[0]
        let result = fm.getFormInputs(form)
        expect(result).toEqual([
            { type: 'email', name: 'email', required: "" },
            {
                type: 'search', name: 'search', required: "",
                maxlength: '50'
            }
        ])
    })

    test('Convertir formulario a js (2)', () => {
        let form = getForms()[1]
        let result = fm.getFormInputs(form)
        expect(result).toEqual([
            {
                type: 'text', name: 'username', required: "",
                pattern: '^[\w\d[\b]]*$'
            },
            {
                type: 'number', name: 'edad', required: "",
                min: '0'
            }
        ])
    })

})