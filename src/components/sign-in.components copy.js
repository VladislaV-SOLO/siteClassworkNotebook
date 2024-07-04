import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";

export class SignInComponent extends Component {
    constructor(formId) {
        super(formId)
    }

    init() {
        this.componet.addEventListener('submit', onSubmitHandler.bind(this))
        this.form = new Form(this.componet, {
            name: [Validator.required],
            password: [Validator.required],
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