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

        console.log(this.controls);

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
                console.log(` Инпут под названием тега name - ${field} Валидно`) :
                console.log(` Инпут под названием тега name - ${field} НЕ ВАЛИДНО!`)

            isFormValid = isValid && isFormValid

        })

        return isFormValid
    }

}