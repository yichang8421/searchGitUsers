import React, {Component} from "react"
import Item from "../Item";
import "./index.css"

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {todoList} = this.props
        return (
            <ul className={"list"}>
                {
                    todoList.map(todoList => <Item key={todoList.id} {...todoList}/>)
                }
            </ul>
        )
    }
}