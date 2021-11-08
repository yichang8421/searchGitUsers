import React, {Component} from "react"
import "./index.css"
import PropTypes from "prop-types";

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static propTypes = {
        todoList: PropTypes.array.isRequired,
        checkedAll: PropTypes.func.isRequired
    }

    render() {
        const {todoList} = this.props
        const countDone = todoList.filter(todoObj => todoObj.done).length
        const countAll = todoList.length

        return (
            <footer>
                <label><input type="checkbox"
                              onChange={this.onChecked}
                              checked={(countDone === countAll && countAll)}
                /><span>已完成{countDone}/全部{countAll}</span></label>
                <button onClick={this.onDeleteAllDone}>清除已完成任务</button>
            </footer>
        )
    }

    onChecked = (event) => {
        const {checkedAll} = this.props
        checkedAll(event.target.checked)
    }

    onDeleteAllDone = () => {
        const {deleteAllDone} = this.props
        deleteAllDone()
    }
}