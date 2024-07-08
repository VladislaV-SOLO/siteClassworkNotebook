import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";





const loginPage = new PageAuthorization('login')

export const notification = new Notification('notification')


console.log(notification);