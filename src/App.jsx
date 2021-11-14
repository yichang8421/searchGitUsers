import React, {Component} from "react";
import "./app.css";
import Searcher from "./components/Searcher";
import UsersList from "./components/UsersList";

export default class App extends Component {
    state = {
        users: [],   //存储users信息
        isStart: true,       //标识是否为首次渲染
        isLoading: false,    //标识请求状态
        err: ""     //存储搜索错误的相关信息
    };

    updateAppState = (usersObj) => {
        this.setState(usersObj);
    };

    render() {
        return (
            <div>
                <Searcher updateAppState={this.updateAppState}/>
                <UsersList {...this.state}/>
            </div>
        );
    }
}