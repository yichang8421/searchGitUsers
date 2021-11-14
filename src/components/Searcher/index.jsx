import React, {Component} from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import "./index.css";

export default class Searcher extends Component {
    render() {
        return (
            <div className="searcher">
                <h1>Search GitHub Users</h1>
                <div className="ipt">
                    <input ref={c => this.keywordsElement = c} type="text"/>
                    <button onClick={this.getKeywords}>Search</button>
                </div>
            </div>
        );
    }

    getKeywords = () => {
        const {keywordsElement: {value}} = this;

        //刚开始时，通知app更新状态
        // updateAppState({isStart: false, isLoading: true});
        PubSub.publish("updataUserData", {isStart: false, isLoading: true});

        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                // updateAppState({isLoading: false, users: response.data.items});
                PubSub.publish("updataUserData", {isLoading: false, users: response.data.items});
            },
            error => {
                // console.log("出错了", updateAppState({isLoading: false, err: error.message}));
                console.log("出错了", PubSub.publish("updataUserData", {isLoading: false, err: error.message}));
            }
        );
    };
}