import React, {Component} from "react";
import "./index.css";

export default class UsersList extends Component {
    render() {
        const users = this.props.users;
        return (
            <div className="usersWrapper">
                <div className="usersList">
                    {
                        users.map(userObj => {
                            return (
                                <a href={userObj.html_url} className="item" key={userObj.id}>
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