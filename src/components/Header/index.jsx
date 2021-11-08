import React, {Component} from "react"
import PropTypes from "prop-types";
import {nanoid} from "nanoid"
import "./index.css"

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static propTypes = {
        todoList: PropTypes.array.isRequired,
        addTodo: PropTypes.func.isRequired
    }

    render() {
        return (
            <header>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder={"请输入你的任务名称,按回车键确认"}/>
            </header>
        )
    }

    handleKeyUp = (event) => {
        const {target, keyCode} = event
        const {todoList, addTodo} = this.props

        // 当点击回车键时
        if (keyCode === 13) {
            // 当输入为空时
            if (!target.value.trim()) {
                alert("输入不能为空")
                target.value = ""
                return
            }

            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].name === target.value.replace(/\s*/g, "")) {
                    alert("此待办已添加过了，不用重复添加")
                    target.value = ""
                    return
                }
            }

            const todoObj = {id: nanoid(), name: target.value, done: false}
            addTodo(todoObj)

            // 清空输入框
            target.value = ""
        }
    }
}