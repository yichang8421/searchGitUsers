import React, {Component} from "react";
import "./app.css";
import Searcher from "./components/Searcher";
import UsersList from "./components/UsersList";

export default class App extends Component {
    state = {users: []};

    saveUsers = (users) => {
        this.setState({users});
    };

    render() {
        return (
            <div>
                <Searcher saveUsers={this.saveUsers}/>
                <UsersList users={this.state.users}/>
            </div>
        );
    }
}