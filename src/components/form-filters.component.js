import { Component } from "../core/component.js";
import { pageContent } from "../index.js";


export class FormFiltersComponent extends Component {
    constructor(id) {
        super(id)
        this.filters = {
            title: '',
            status: 'all'
        }
    }

    value() {
        return this.filters
    }

    init() {
        this.componet.addEventListener('input', onFilterHandler.bind(this))
    }

    clear() {
        this.filters.title = '';
        this.filters.status = 'all';
        this.componet.title.value = '';
        this.componet.status.value = 'all';
    }
}

function onFilterHandler(e) {
    e.preventDefault()
    Object.keys(this.filters).forEach(field => {
        this.filters[field] = this.componet[field].value
    })
    pageContent.show()
}