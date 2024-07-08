import { notification } from "../index.js";

export class Storage {

    static createNewUser(userData) {

        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([userData]))
        } else {
            // проверяем существует ли такой пользователь 
            if (checkUserExist(userData)) {
                // если пользователя нету - выходим из функции и ничего не создаем
                // вызов уведомления о том, что такой пользователь уже существует
                notification.show('This use already exist')
                return
            }
            // иначе записываем в localStorage уже существующих пользователей + добавляем нового
            const existUsers = JSON.parse(localStorage.getItem('users'))
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))

        }

        // вызов уведомления о создание пользователя 
        notification.show('Account is created')

    }
}

function checkUserExist(userData) {
    let isUser = false
        // получаем уже существующих пользователей - массив пользователей 
    const existUsers = JSON.parse(localStorage.getItem('users'))
        // в массиве делаем проверку на соответствие значений username и email
    existUsers.forEach(({ name, email }) => {

        if (name === userData.name && email === userData.email) {
            // если результат if будет true - значит такой пользователь есть
            // поэтому меняе значение переменной isUser на true
            isUser = true
        }
    });

    return isUser
}