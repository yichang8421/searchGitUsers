import React, {Component} from "react"
import "./index.css"

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {name} = this.props
        return (
            <li className={"item"}>
                <label><input type="checkbox"/>{name}</label>
                <button>删除</button>
            </li>
        )
    }
}