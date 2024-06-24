 export class Component {

     constructor(id) {
         this.componet = document.getElementById(id)
         this.init()
     }

     init() {}

     hide() {
         this.componet.classList.add('hide')
     }

     show() {
         this.componet.classList.remove('hide')
     }


 }