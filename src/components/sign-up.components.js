import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
import { pageContent } from "../index.js";

export class SignUpComponent extends Component {
    constructor(formId, page) {
        super(formId)
        this.page = page
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

    // проверяем валидна ли форма
    if (this.form.isValid()) {
        // если форма валидна - создаем пользователя
        const formData = {
            id: new Date().getTime(),
            ...this.form.value(),

        }
        this.form.clear()
        const userId = Storage.createNewUser(formData)
            // очищаем форму  после создания польщователя
        if (!userId) return
        localStorage.setItem('selectedUserId', userId)
        setTimeout(() => {
            // скрываем страницу авторизации
            this.page.classList.add('hide')
                // расткрыть страницу списка дел
            pageContent.show()
        }, 2500)
    }


}