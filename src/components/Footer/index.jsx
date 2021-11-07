import React, {Component} from "react"
import "./index.css"

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <footer>
                <label><input type="checkbox"/><span>已完成0/全部2</span></label>
                <button>清除已完成任务</button>
            </footer>
        )
    }
}