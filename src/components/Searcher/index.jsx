import React, {Component} from "react";
import "./index.css";

export default class Searcher extends Component {
    render() {
        return (
            <div className="searcher">
                <h1>Search GitHub Users</h1>
                <div className="ipt">
                    <input type="text"/>
                    <button>Search</button>
                </div>
            </div>
        );
    }
}