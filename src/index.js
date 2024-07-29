import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.components.js";

const loginPage = new PageAuthorization("login");
export const pageContent = new PageContent("page-content", loginPage);
export const formCreatePostModal = new FormCreatePostModal("create");
export const postInfoModal = new PostInfoModal("info");

console.log(pageContent);

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