import { Component } from "../core/component.js";

export class SignInComponent extends Component {
    constructor(formId) {
        super(formId)
    }

    init() {
        console.log(this.componet);

        this.componet.addEventListener('submit', onSubmitHandler)
    }
}

function required(str = '') {

    return str && str.trim()

}

function onSubmitHandler(event) {
    event.preventDefault()
    console.log(this.name.value);
    console.log(this.password.value);


    // true -> чтобы лог не выполнился 
    if (!required(this.name.value)) {
        console.log('ПОЛЕ USERNAME ОБЯЗАТЕЛЬНО');
    }

    if (!required(this.password.value)) {
        console.log('ПОЛЕ PASSWORD ОБЯЗАТЕЛЬНО');

    }




    // нужно выводить в лог сообщение о том, что поле обязательно если данных не ввели



}