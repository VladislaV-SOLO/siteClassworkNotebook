 export class Component {

     constructor(id) {
         this.componet = document.getElementById(id)
         this.init()
     }

     init() {
         // заглушка чтобы не было ошибки при вызове this.init() (если вдруг этого метода не будет в наследниках)
     }

     onHide() {
         // заглушка чтобы не было ошибки при вызове this.onHide() (если вдруг этого метода не будет в наследниках)
     }

     onShow() {
         // заглушка чтобы не было ошибки при вызове this.onShow() (если вдруг этого метода не будет в наследниках)
     }

     hide() {
         // метод для сокрытия полученного элемента (this.componet)
         this.componet.classList.add('hide')
         this.onHide()
     }

     show(e) {
         // метод для отображения полученного элемента (this.componet)
         this.componet.classList.remove('hide')
         this.onShow(e)
     }


 }