import React, {Component} from "react";
import PubSub from "pubsub-js";
// import axios from "axios";
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

    getKeywords = async () => {
        const {keywordsElement: {value}} = this;

        //刚开始时，通知app更新状态
        // updateAppState({isStart: false, isLoading: true});
        PubSub.publish("updataUserData", {isStart: false, isLoading: true});

        //#region
        // 使用axios发送请求
        // axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response => {
        //         // updateAppState({isLoading: false, users: response.data.items});
        //         PubSub.publish("updataUserData", {isLoading: false, users: response.data.items});
        //     },
        //     error => {
        //         // console.log("出错了", updateAppState({isLoading: false, err: error.message}));
        //         console.log("出错了", PubSub.publish("updataUserData", {isLoading: false, err: error.message}));
        //     }
        // );
        //#endregion

        //#region
        // 使用 fetch 发送请求（未优化）
        // fetch(`http://localhost:3000/api1/search/users?q=${value}`).then(
        //     response => {
        //         console.log("请求发送成功", response);
        //         return response.json();
        //     },
        //     error => console.log("请求发送失败,网络出问题了", error)
        // ).then(
        //     data => console.log("成功了", data),
        //     reason => console.log("失败了", reason)
        // );
        //#endregion

        // 使用 fetch 发送请求（优化版）
        try {
            const response = await fetch(`http://localhost:3000/api1/search/users?q=${value}`);
            const data = await response.json();
            PubSub.publish("updataUserData", {isLoading: false, users: data.items});
        } catch (error) {
            console.log("出错了", PubSub.publish("updataUserData", {isLoading: false, err: error.message}));
            console.log(error)
        }
    };
}