import React, {Component} from "react"
import {nanoid} from "nanoid"
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    state = {
        todoList: [
            {id: nanoid(), name: "吃饭", done: false},
            {id: nanoid(), name: "睡觉", done: false},
            {id: nanoid(), name: "打代码", done: false}
        ]
    }

    render() {
        return (
            <div>
                <div className={"todolist"}>
                    <Header addTodo={this.addTodo}/>
                    <List todoList={this.state.todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todoList={this.state.todoList} allChecked={this.allChecked}/>
                </div>
            </div>
        )
    }

    // 添加代办
    addTodo = (todoObj) => {
        const {todoList} = this.state
        const newTodoList = [todoObj, ...todoList]
        this.setState({todoList: newTodoList})
    }

    // 当勾选待办时，后台数据也响应更改
    updateTodo = (id, newDone) => {
        const {todoList} = this.state

        const newTodoList = todoList.map(todoObj => {
            if (todoObj.id === id) {
                return {...todoObj, done: newDone}
            } else {
                return todoObj
            }
        })

        this.setState({todoList: newTodoList})
    }

    // 删除待办事项
    deleteTodo = (id) => {
        const {todoList} = this.state

        const newTodoList = todoList.filter(todoObj => {
            return todoObj.id !== id
        })

        this.setState({todoList: newTodoList})
    }

    allChecked = (isChecked) => {
        const {todoList} = this.state

        const newTodoList = todoList.map(todoObj => {
            todoObj.done = todoObj.done === isChecked ? todoObj.done : isChecked
            return todoObj
        })

        this.setState({todoList: newTodoList})
    }
}