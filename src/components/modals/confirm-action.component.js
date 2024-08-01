import { Component } from "../../core/component.js";
import { Storage } from "../../core/storage.js";
import { pageContent } from "../../index.js";
import { renderConfirmModal } from "../../template/render-confirm.js";

export class ConfirmActionModal extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))

    }

    onShow(todoId) {
        this.todoId = todoId
        this.componet.innerHTML = ''
        const htmlInfo = renderConfirmModal(todoId)
        this.componet.insertAdjacentHTML('afterbegin', htmlInfo)
    }

    onHide() {
        this.componet.innerHTML = ''
    }
}

function onCloseModalHandler(e) {
    const { target } = e
    // сокрытие модалки на клик оверлея или btn
    const isCancelBtn = this.componet.querySelector('.modal__actions-btn_disagree')
    let isTargetToClose = target == this.componet || target == isCancelBtn
    if (isTargetToClose) {
        this.hide()
    }
    // удаляет пост и осуществялет перерендер списка постов заного
    const isOkBtn = this.componet.querySelector('.modal__actions-btn_agree')
    if (target == isOkBtn) {
        Storage.removeTodo(this.todoId)
        this.hide()
        pageContent.show()
    }

}