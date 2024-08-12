import { Storage } from "../core/storage.js";

export const renderPosts = (filters = {}) => {
    console.log(filters);

    let { todoList } = Storage.getUserData();
    if (todoList.length === 0) {
        return '<p class="todos__notice">List is empty</p>';
    }


    [{
            "id": 1722879813639,
            "title": "Hello",
            "description": "1",
            "status": "done"
        },
        {
            "id": 1722880857280,
            "title": "World",
            "description": "212321",
            "status": "processing"
        }
    ],

    { title: '', status: 'done' }

    const filtredPosts = todoList.filter((post) => {


        let isFindPost = true

        Object.keys(filters).forEach(field => {
            let isFind = true

            switch (field) {
                case 'title':
                    isFind = post.title.toLowerCase().includes(filters[field].toLowerCase())
                    if (filters[field] === '') isFind = true;
                    break

                case 'status':
                    isFind = post.status.includes(filters[field])
                    if (filters[field] === 'all') isFind = true;
                    break
            }
            isFindPost = isFind && isFindPost
        })
        return isFindPost
    })

    if (filtredPosts.length === 0) {
        return '<p class="todos__notice">Nothing found</p>';
    }


    const todosForRender = filtredPosts.map((todo) => {
        const style = todo.status === 'done' ? 'todos__item todos__item_done' : 'todos__item'
        return `
            <div class="${style}" data-todo-id=${todo.id}>
                <div class="todos__item-status"></div>
                <p class="todos__item-title">${todo.title}</p>
                <div class="todos__item-edit"></div>
                <div class="todos__item-remove"></div>
            </div>
        `;
    }).join('');

    return todosForRender
};