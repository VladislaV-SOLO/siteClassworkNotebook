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
            const existUsers = getAllUsersFromLocalStorage()
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))

        }

        // вызов уведомления о создание пользователя 
        notification.show('Account is created')
        return userData.id;
    }

    static enterTodoList(login) {
        const existUsers = getAllUsersFromLocalStorage()
        const user = existUsers.find(({ name, password }) => {
            return name === login.name && password === login.password
        })
        if (user) {
            notification.show('Successfull authorization')
            return user.id
        } else {
            notification.show('Incorrect login or password')
        }

    }

    static getUserData() {
        return findUserData()
    }

    static createPost(postData) {
        const existUsers = getAllUsersFromLocalStorage()
        const currentUser = findUserData()
        const updateUser = {
            ...currentUser,
            todoList: [...currentUser.todoList, postData]
        }
        const indexCurrentUser = existUsers.findIndex((user) => user.id === currentUser.id)
        const updateUsersArray = [...existUsers.slice(0, indexCurrentUser), updateUser, ...existUsers.slice(indexCurrentUser + 1)]
        localStorage.setItem('users', JSON.stringify(updateUsersArray))
        notification.show('Post created')
    }
}

function checkUserExist(userData) {
    let isUser = false
        // получаем уже существующих пользователей - массив пользователей 
    const existUsers = getAllUsersFromLocalStorage()
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

function getAllUsersFromLocalStorage() {
    const existUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    return existUsers
}

function findUserData() {
    const userId = JSON.parse(localStorage.getItem('selectedUserId'))
    if (userId) {
        const users = getAllUsersFromLocalStorage()
        return users.find((user) => {
            return user.id === userId
        })
    }
}