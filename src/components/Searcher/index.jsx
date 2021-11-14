import React, {Component} from "react";
import "./index.css";
import axios from "axios";

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
        const {props: {saveUsers}} = this;
        const {keywordsElement: {value}} = this;
        axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
            response => {
                // console.log(response.data);
                saveUsers(response.data.items);
            },
            error => console.log("失败了", error)
        );
    };
}