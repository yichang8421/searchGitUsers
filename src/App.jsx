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

    componentDidUpdate() {
        window.localStorage.setItem("todoList", JSON.stringify(this.state));
    }

    componentDidMount() {
        this.setState(JSON.parse(window.localStorage.getItem("todoList") || "[]"));
    }

    render() {
        return (
            <div>
                <div className={"todolist"}>
                    <Header todoList={this.state.todoList} addTodo={this.addTodo}/>
                    <List todoList={this.state.todoList} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todoList={this.state.todoList} checkedAll={this.checkedAll}
                            deleteAllDone={this.deleteAllDone}/>
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

    checkedAll = (isChecked) => {
        const {todoList} = this.state

        const newTodoList = todoList.map(todoObj => {
            todoObj.done = todoObj.done === isChecked ? todoObj.done : isChecked
            return todoObj
        })

        this.setState({todoList: newTodoList})
    }

    deleteAllDone = () => {
        const {todoList} = this.state

        const newTodoList = todoList.filter(todoObj => !todoObj.done)

        this.setState({todoList: newTodoList})
    }
}