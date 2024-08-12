import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { originUrl, pageContent } from "../../index.js";
import { renderPostInfo } from "../../template/render-post-info.js";

export class PostInfoModal extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))

    }

    onShow(todoId) {
        if (location.href.includes(todoId) && Storage.getPostInfo(todoId)) {
            this.componet.innerHTML = ''
            const htmlInfo = renderPostInfo(todoId)
            this.componet.insertAdjacentHTML('afterbegin', htmlInfo)
        }
    }

    onHide() {
        this.componet.innerHTML = ''
    }
}

function onCloseModalHandler(e) {
    const { target } = e
    // сокрытие модалки на клик оверлея или btn
    const okeyBtn = this.componet.querySelector('.modal__btn')
    let isTargetToClose = target == this.componet || target == okeyBtn
    if (isTargetToClose) {
        history.pushState(null, null, originUrl)
        this.hide()
    }
}

function onSubmitPostHandler(e) {
    e.preventDefault()
    if (this.form.isValid()) {
        const formData = {
            id: new Date().getTime(),
            ...this.form.value(),
            status: 'precossing'
        }
        Storage.createPost(formData)
            // скрываем модалку
        this.hide()
            // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
        pageContent.show()
    }


}