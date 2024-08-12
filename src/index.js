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

export const originUrl = window.location.href
console.log(originUrl);


console.log(formEditPostModal);

export const notification = new Notification("notification");

if (JSON.parse(localStorage.getItem("selectedUserId"))) {
    loginPage.hide();
    pageContent.show();
}

window.addEventListener('popstate', function(e) {
    const userId = JSON.parse(localStorage.getItem('selectedUserId'))
    if (e.state && userId) {
        postInfoModal.show(e.state)
    }
})






/*
const arr1 = ['opel', 'bmw', 'audi', 'mazda', 'nissan', 'mercedes']
const str = 'bmw'
const arr2 = ['bmw', 'mercedes']

function foo1 (arr1, str) {
    return arr1.filter((el)=>el !== str) // пройти по массиву и оставить всё кроме str = bmw
}
// console.log(foo1(arr1 , str)) // ['opel', 'audi', 'mazda', 'nissan', 'mercedes']



function fooTemp (arr1, arr2) {
    return arr1.filter((el) => {
        return !arr2.find((item) => item === el) //! - нам даётне найденые значения сравнивая(arr2)
    }) // ['opel', 'audi', 'mazda', 'nissan']
}
console.log(fooTemp(arr1, arr2));






const forTestArr = [
    {role: 'admin', status: 'online'},
 {role: 'user', status: 'online'},
  {role: 'user', status: 'offline'},
   {role: 'admin', status: 'online'},
   { name: "Vlad", age: "32" },
   { name: "Sveta", age: "32" },
   { name: "Anna", age: "32" },
   { car: "BMV", age: "1990" },
]

// function fooTemp (arr, value) {
//     return arr.find((el)=>el.name === value)
// }
// console.log(fooTemp(forTestArr, 'Vlad')); // { name: "Vlad", age: "32" },



function filterByKey(key, arr) {
  const result = arr.filter((el)=>{ // по каждому обьекту(итерация) проходит 
    return  el.hasOwnProperty(key) // и hasOwnProperty считывает наши ключи(true, false)
  })//key -- мы передаем ключ из массива forTestArr в функцию(role, name, car)
  return result.length ? result : null
}

// console.log(filterByKey('role' , forTestArr))



function filterByRole(role, arr) {
    const result = arr.filter((el)=>{ //проходит по каждой строчке в массиве
        return  el.role === role // сравниваем каждый объект role с заданным(role) в функции
    })
    return result.length ? result : null
}

// console.log(filterByRole('user' , forTestArr))


function filterByStatus(status, arr) {
    const result = arr.filter((el)=>{ //проходит по каждой строчке в массиве
        return  el.status === status // сравниваем каждый объект status с заданным(role) в функции
    })
    return result.length ? result : null
}

// console.log(filterByStatus('online' , forTestArr))

*/









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

// найти в массиве числа и сложить их
// const num = [2, 'dwa', {}, null, false, 5, 1]

// function sum(arr) {
//     return arr.reduce((acc, item) => {
//         if (typeof item === "number") {
//            return  acc += item //acc = acc + item
//         }
//         return acc
//     }, 0)
// }
// const sum2 = (arr) => arr.reduce((acc, item) => typeof item === "number" ? acc += item : acc, 0)


// console.log(sum(num)) // 8
// console.log(sum2(num)) // 8
// console.log(sum3(num)) // можно решить с помощью .forEach()



// //////////////////////////////////////////////////////////////

// const obj = {
//     name: 'Vlad',
//     age: 32,
//     sayHi() {
//         console.log('Hello', this.name);
//     },
//     empty: undefined,
//     car: undefined
// }

// function transformData1(obj) {// замена значения undefined на 'пусто'
//     const result = {}
//     for (let key in obj) {
//         if (obj[key] === undefined) {
//             result[key] = 'пусто'
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     return result
// }

// function transformData2(obj) {
//     const result = Object.keys(obj).reduce((acc, key) => {
//         if (obj[key] === undefined) {
//             acc[key] = 'пусто'
//             return acc
//         } else {
//             acc[key] = obj[key]
//             return acc
//         }
//     }, {})
//     return result
// }

// function transformData3(obj) {
//     const result = Object.entries(obj).map(([key, value]) => {
//         if (value === undefined) {
//             return [key, 'пусто']
//         } else {
//             return [key, value]
//         }
//     })
//     return Object.fromEntries(result)
// }
// console.log(transformData1(obj)); // замена значения undefined на 'пусто' метод for(цикл)
// console.log(transformData2(obj)); // замена значения undefined на 'пусто' метод reduce
// console.log(transformData3(obj)); // замена значения undefined на 'пусто' метод Object.entries