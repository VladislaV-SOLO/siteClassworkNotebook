import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
import { pageContent } from "../index.js";

export class SignInComponent extends Component {
    constructor(formId, page) {
        super(formId)
        this.page = page
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

    if (this.form.isValid()) {
        const formData = {
            ...this.form.value()
        }
        this.form.clear()
        const userId = Storage.enterTodoList(formData)
        if (!userId) return
        localStorage.setItem('selectedUserId', userId)
        setTimeout(() => {
            this.page.classList.add('hide')
            pageContent.show()
        }, 2500)
    }


}