export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {};
        Object.keys(this.controls).forEach((field) => {
            value[field] = this.form[field].value
        })

        return value
    }

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach((field) => {

            const validatorsFns = this.controls[field]

            let isValid = true

            validatorsFns.forEach((validator) => {
                isValid = validator(this.form[field].value) && isValid
            })

            isValid
                ?
                clearNoticeError(this.form[field]) :
                setNoticeError(this.form[field])

            isFormValid = isValid && isFormValid

        })

        return isFormValid
    }

    clear() {
        Object.keys(this.controls).forEach(field => {
            this.form[field].value = ''
            clearNoticeError(this.form[field])
        })
    }

}

const requiredErrorText = 'Field is required'
const emailErrorText = 'Field is required (at least: "@" symbol)'
const passwordErrorText = 'Field is required (at least: 1 uppercase letter and 1 digit)'


function setNoticeError(input) {
    clearNoticeError(input)

    input.parentElement.classList.add('invalid')

    const fieldName = input.getAttribute('name')
    if (fieldName === 'name') {
        input.insertAdjacentHTML('afterend', setErrorText(requiredErrorText))
    }

    if (fieldName === 'email') {
        input.insertAdjacentHTML('afterend', setErrorText(emailErrorText))
    }

    if (fieldName === 'password') {

        input.dataset.signIn === 'sign-in' ?
            input.insertAdjacentHTML('afterend', setErrorText(requiredErrorText)) :
            input.insertAdjacentHTML('afterend', setErrorText(passwordErrorText))
    }

}

function clearNoticeError(input) {
    // если ошибка есть то будем проводить очистку

    if (input.nextElementSibling) {
        if (input.closest('.form__field')) {
            input.closest('.form__field').removeChild(input.nextElementSibling)
            input.parentElement.classList.remove('invalid')

        }
        // input.closest('.form__field').classList.remove('invalid')
        // console.log(input.closest('.form__field'));
        // input.parentElement.classList.remove('invalid')
    }

}

function setErrorText(text) {
    return `<p class="form__field-warning">${text}</p>`
}