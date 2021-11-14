import React, {Component} from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class UsersList extends Component {
    state = {
        users: [],   //存储users信息
        isStart: true,       //标识是否为首次渲染
        isLoading: false,    //标识请求状态
        err: ""     //存储搜索错误的相关信息
    };

    componentDidMount() {
        this.token = PubSub.subscribe("updataUserData", (_, userObj) => {
            this.setState(userObj);
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {
        const {users, isStart, isLoading, err} = this.state;
        return (
            <div className="usersWrapper">
                <div className="usersList">
                    {
                        isStart ? (<h2>Wellcome!</h2>) :
                            isLoading ? (<h2>Loading...</h2>) :
                                err ? (<h2 style={{color: "red"}}>Sorry, {err}</h2>) :
                                    users.map(userObj => {
                                        return (
                                            <a href={userObj.html_url} className="item" target="_blank"
                                               key={userObj.id} rel="noreferrer">
                                                <img src={userObj.avatar_url} alt={userObj.login}/>
                                                <div className="userName">{userObj.login}</div>
                                            </a>
                                        );
                                    })
                    }
                </div>
            </div>
        )
            ;
    }
}