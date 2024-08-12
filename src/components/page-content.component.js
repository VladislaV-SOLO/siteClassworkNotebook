import { Component } from "../core/component.js";
import { Storage } from "../core/storage.js";
import { confirmInfoModal, formCreatePostModal, formEditPostModal, postInfoModal } from "../index.js"; // statusDoneBg
import { renderPosts } from "../template/render-posts.js";
import { FormFiltersComponent } from "./form-filters.component.js";
import { ThemeComponent } from "./theme.component.js";

export class PageContent extends Component {
    constructor(id, pageAuthorization) {
        super(id)
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('header-btn')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
        this.createBtn = document.getElementById('create-btn')
        this.createBtn.addEventListener('click', onShowFormCreatePostHandler.bind(this))
        this.todoList = document.querySelector('.todos-container')
        this.filters = new FormFiltersComponent('search')
        this.welcome = document.getElementById('welcome')
        this.theme = new ThemeComponent('theme', this.componet)
    }

    onShow() {
        this.todoList.innerHTML = ''
        this.componet.classList.add(this.theme.value())
        this.welcome.innerText = Storage.getUserData().name
        const postsElemtnts = renderPosts(this.filters.value())
        this.todoList.insertAdjacentHTML('afterbegin', postsElemtnts)
        this.items = this.todoList.querySelectorAll('.todos__item')
        Array.from(this.items).forEach((item) => item.addEventListener('click', onTodoHandler))

    }

    onHide() {
        this.filters.clear()
    }
}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorization.show()
}

function onShowFormCreatePostHandler() {
    formCreatePostModal.show()
}

function onTodoHandler(e) {
    const todoId = this.dataset.todoId

    if (e.target.classList.contains('todos__item')) {
        history.pushState(todoId, null, `${location.origin}/todos/${todoId}`)
        postInfoModal.show(todoId)
    
        // console.log(history);
        // console.log(location);
    }

    if (e.target.classList.contains('todos__item-status')) {
        this.classList.toggle('todos__item_done')
        Storage.updateTodoStatus(todoId)
    }
    if (e.target.classList.contains('todos__item-edit')) {
        formEditPostModal.show(todoId)
    }
    if (e.target.classList.contains('todos__item-remove')) {
        confirmInfoModal.show(todoId)
    }
}