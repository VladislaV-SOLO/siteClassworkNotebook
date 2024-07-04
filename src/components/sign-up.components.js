import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";

export class SignUpComponent extends Component {
    constructor(formId) {
        super(formId)
    }

    init() {
        this.componet.addEventListener('submit', onSubmitHandler.bind(this))
        this.form = new Form(this.componet, {
            name: [Validator.required],
            email: [Validator.required, Validator.isEmailValid],
            password: [Validator.required, Validator.isPasswordValid],
        })

    }

    onHide() {
        this.form.clear()
    }
}


function onSubmitHandler(event) {
    event.preventDefault()

    console.log(this.form.isValid());



}