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
                    <List updateTodo={this.updateTodo} todoList={this.state.todoList}/>
                    <Footer/>
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
    updateTodo = (todoObj) => {
        const {todoList} = this.state
        const {id, done} = todoObj

        todoList.map(item => {
            if (item.id === id) {
                item.done = item.done === done ? item.done : done
            }
            return item
        })

        this.setState({todoList})
    }
}