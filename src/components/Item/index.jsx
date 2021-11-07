import React, {Component} from "react"
import "./index.css"

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {flag: false, colorNumber: parseInt(Math.random() * 8 % 9)}
        this.colorList = ["#ff8000", "#6c3758", "pink", "gray", "#3689a6", "yellowgreen", "#4ec9b0", "#569cd6"]
    }

    render() {
        const {name} = this.props
        const {flag, colorNumber} = this.state
        return (
            <li className={"item"} style={{backgroundColor: flag ? this.colorList[colorNumber] : ""}}
                onMouseEnter={this.onHover(true)} onMouseLeave={this.onHover(false)}>
                <label><input type="checkbox"/>{name}</label>
                <button>删除</button>
            </li>
        )
    }

    onHover = (flag) => {
        return () => {
            let {colorNumber} = this.state
            colorNumber -= 1
            colorNumber = colorNumber < 0 ? 7 : colorNumber
            this.setState({flag, colorNumber})
        }
    }
}