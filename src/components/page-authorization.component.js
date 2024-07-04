import { Component } from "../core/component.js";
import { SignInComponent } from "./sign-in.components copy.js";
import { SignUpComponent } from "./sign-up.components.js";

export class PageAuthorization extends Component {
    constructor(id) {
        // прокидываем id в constructor родителя
        super(id)

    }

    init() {
        // инициализируем формы
        this.signIn = new SignInComponent('sign-in')
        this.signUp = new SignUpComponent('sign-up')
            // получаем ссылки
        this.links = this.componet.querySelectorAll('.form__link')
            // навешиваем слушатели событий
        this.links.forEach(link => {
            link.addEventListener('click', onChangeFormHandler.bind(this))
        })
    }

}


function onChangeFormHandler(event) {
    console.log('onChangeFormHandler');
    // функция переключения форм с Sign-in на Sign-up и обратно
    event.preventDefault();
    if (event.target.classList.contains('link-in')) {
        this.signUp.hide();
        this.signIn.show();
    } else if (event.target.classList.contains('link-up')) {
        this.signIn.hide();
        this.signUp.show();
    }
}