import { Component } from "../../core/component.js";

export class FormCreatePostModal extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))
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