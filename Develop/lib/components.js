class Component {

    constructor() {

    }


    render() {

        return "<h1>hello world!</h1>"
    }
}

class Header extends Component {


    constructor(date) {
        super()
        this.date = date;

    }


    render() {

        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
    }
}

class TaskListItem extends Component {
    constructor(priority) {
        super()
        this.priority = this.priority


    }


    render() {

        if (this.priority === true)
            return `<li class="tasks-item">{INNER_HTML}</li>`
    }

}







module.exports = { Header, TaskListItem }