import React, {Component} from "react"
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css"

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static propTypes = {
        todoList: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const {todoList, updateTodo, deleteTodo} = this.props
        return (
            <ul className={"list"}>
                {
                    todoList.map(todoList =>
                        <Item key={todoList.id}
                              updateTodo={updateTodo}
                              deleteTodo={deleteTodo}
                              {...todoList}/>)
                }
            </ul>
        )
    }
}