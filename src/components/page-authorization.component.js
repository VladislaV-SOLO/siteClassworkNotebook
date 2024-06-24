import { Component } from "../core/component.js";

export class PageAuthorization extends Component {
    constructor(id) {
        super(id)

    }

    init() {
        this.signIn = new Component('sign-in')
        this.signUp = new Component('sign-up')
        this.links = this.componet.querySelectorAll('.form__link')
        this.links.forEach(link => {
            link.addEventListener('click', onChangeFormHandler.bind(this))

        })
    }

}


function onChangeFormHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains('link-in')) {
        this.signUp.hide();
        this.signIn.show();
    } else if (event.target.classList.contains('link-up')) {
        this.signIn.hide();
        this.signUp.show();
    }
}