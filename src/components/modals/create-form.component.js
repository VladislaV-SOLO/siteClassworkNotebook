import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";

export class FormCreatePostModal extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))
        this.formWrapper = this.componet.firstElementChild;
        this.formWrapper.addEventListener('submit', onSubmitPostHandler.bind(this))
        this.form = new Form(this.formWrapper, {
            title: [Validator.required],
            description: [Validator.required]
        })
    }

    onHide() {
        this.form.clear()
    }
}

function onCloseModalHandler(e) {
    const { target } = e
    // сокрытие модалки на клик оверлея
    let isBg = target == this.componet
    if (isBg) {
        this.hide()
    }
}

function onSubmitPostHandler(e) {
    e.preventDefault()
    if (this.form.isValid()) {
        const formData = {
            id: new Date().getTime(),
            ...this.form.value(),
            status: 'processing'
        }
        Storage.createPost(formData)
            // скрываем модалку
        this.hide()
            // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
        pageContent.show()
    }


}