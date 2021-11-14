import React, {Component} from "react";
import "./app.css";
import Searcher from "./components/Searcher";
import UsersList from "./components/UsersList";

export default class App extends Component {
    render() {
        return (
            <div>
                <Searcher/>
                <UsersList/>
            </div>
        );
    }
}