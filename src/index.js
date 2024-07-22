import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";
import { PageContent } from "./components/page-content.component.js";
import { FormCreatePostModal } from "./components/modals/create-form.component.js";



const loginPage = new PageAuthorization('login')
export const pageContent = new PageContent('page-content', loginPage)
export const formCreatePostModal = new FormCreatePostModal('create')


console.log(formCreatePostModal);
export const notification = new Notification('notification')


if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    loginPage.hide()
    pageContent.show()
}