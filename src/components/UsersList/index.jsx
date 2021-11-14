import React, {Component} from "react";
import "./index.css";

export default class UsersList extends Component {
    render() {
        const {users, isStart, isLoading, err} = this.props;
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
                                               key={userObj.id}  rel="noreferrer">
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