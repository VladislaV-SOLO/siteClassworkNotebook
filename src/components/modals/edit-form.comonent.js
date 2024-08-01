import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";

export class FormEditPostModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.componet.addEventListener("click", onCloseModalHandler.bind(this));
        this.formWrapper = this.componet.firstElementChild;
        this.formWrapper.addEventListener("submit", onSubmitPostHandler.bind(this));
        this.form = new Form(this.formWrapper, {
            title: [Validator.required],
            description: [Validator.required],
        });
    }

    onShow(todoId) {
        this.todoId = todoId;
        this.todoData = Storage.getPostInfo(todoId);
        this.formWrapper.title.value = this.todoData.title;
        this.formWrapper.description.value = this.todoData.description;
    }

    onHide() {
        this.form.clear();
    }
}

function onCloseModalHandler(e) {
    const { target } = e;
    // сокрытие модалки на клик оверлея
    let isBg = target == this.componet;
    if (isBg) {
        this.hide();
    }
}

function onSubmitPostHandler(e) {
    e.preventDefault();
    if (this.form.isValid()) {
        const formData = {
            ...this.todoData,
            ...this.form.value(),
        };
        Storage.editPost(this.todoId, formData);
        // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow() и провести перерендер списка
        pageContent.show();
        // скрываем модалку
        this.hide();
    }
}