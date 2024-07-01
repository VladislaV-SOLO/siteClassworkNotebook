import { PageAuthorization } from "./components/page-authorization.component.js";
import { Validator } from "./core/validator.js";



console.log(Validator.isPasswordValid('so me1    !F  '))


const component1 = new PageAuthorization('login')
console.log(component1);