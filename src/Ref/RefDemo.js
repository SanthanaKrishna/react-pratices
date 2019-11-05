import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        //another method "callback ref"
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }
    componentDidMount() {
        this.inputRef.current.focus();
        //callback ref
        if (this.cbRef) {
            this.cbRef.focus()
        }
        console.log(this.inputRef);
    }
    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}></button>
            </div>
        )
    }
}

export default RefsDemo;
