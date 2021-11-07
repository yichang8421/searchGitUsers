import React, {Component} from "react"
import {nanoid} from "nanoid"
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    state = {
        todoList: [
            {id: nanoid(), name: "吃饭", done: true},
            {id: nanoid(), name: "睡觉", done: true},
            {id: nanoid(), name: "打代码", done: false}
        ]
    }

    render() {
        return (
            <div>
                <div className={"todolist"}>
                    <Header addTodo={this.addTodo}/>
                    <List todoList={this.state.todoList} {...this.state.todoList}/>
                    <Footer/>
                </div>
            </div>
        )
    }

    addTodo = (todoObj) => {
        const {todoList} = this.state
        const newTodoList = [todoObj, ...todoList]
        this.setState({todoList: newTodoList})
    }
}