import React, {Component} from "react";
import "./index.css";

export default class UsersList extends Component {
    render() {
        return (
            <div className="usersList">
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=5" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=6" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=1" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=2" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=3" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
                <a href="#" className="item">
                    <img src="https://picsum.photos/360/460?random=4" alt="GituserName"/>
                    <div className="userName">GituserName</div>
                </a>
            </div>
        );
    }
}