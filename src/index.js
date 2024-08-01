import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.components.js";
import { ConfirmActionModal } from "./components/modals/confirm-action.component.js";
import { FormEditPostModal } from "./components/modals/edit-form.comonent.js";

const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");
export const postInfoModal = new PostInfoModal("info");
export const confirmInfoModal = new ConfirmActionModal("confirm");
export const formEditPostModal = new FormEditPostModal("edit");



console.log(formEditPostModal);

export const notification = new Notification("notification");

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
    loginPage.hide();
    pageContent.show();
}

/*
const wareStore = {
        jackets: "empty",
        hats: "empty",
        socks: "empty",
        pants: 15,
        parer: true,
        mixers: 14,
        date: new Date(),

    }
    // [
    //   ["jackets", 5],
    //   ["hats", "empty"],
    //   ["socks", "empty"],
    //   ["pants", 15],
    //   ["parer", true],
    //   ["mixers", 14],
    //   ["date", "2024-07-29T16:00:21.931Z"],
    //   ["cookers", "empty"]
    // ];

//   [["hats", "empty"], ["socks", "empty"], ["cookers", "empty"]]

function printReport(obj) {
    const result = Object.entries(obj)
        .filter(([key, value]) => value === "empty")
        .reduce((acc, [key, value]) => `${acc} ${key},`, '');
    return result.trim().length ? `We need this items:${result.slice(0, -1)}!` : 'Everything fine'
}

console.log(printReport(wareStore));

*/

/*

// Дан массив ключей ['login', 'email', 'gender']
// Дан массив значений ['user', 'myEmail@mail.ru', 'male or female']
// создать F , которая принимает два параметра (1 - массив ключей, 2-ой - массив значений)
// по результату должен получится объкт, который F возвращает
const obj = {
    login: 'user',
    email: 'myEmail@mail.ru',
    gender: 'male or female',
}

const keys = ['login', 'email', 'gender']
const value = ['user', 'myEmail@mail.ru', 'male or female']


function createObject(kyesArray, valueArray) {
    // const arr = kyesArray.map((el, index) => {
    //     return [el, valueArray[index]]
    // })
    // return Object.fromEntries(arr)

    // return kyesArray.reduce((acc, item, index) => {
    //     acc[item] = valueArray[index]
    //     return acc
    // }, {})

    // const result = {}

    // kyesArray.forEach((el, indx, arr) => {
    //     console.log(el);
    //     result[el] = valueArray[indx]
    // });

    // return result

    // const obj = {} // так не делать
    // obj[kyesArray[0]] = valueArray[0]
    // obj[kyesArray[1]] = valueArray[1]
    // obj[kyesArray[2]] = valueArray[2]

    // return result

}


console.log(createObject(keys, value))

*/