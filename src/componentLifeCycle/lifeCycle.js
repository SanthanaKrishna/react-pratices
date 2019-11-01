import React from 'react';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
        console.log('constructor')
    }

    getDervideStatefromProps() {
        console.log("getDervideStatefromProps()");
    }

    componentDidMount() {
        console.log("componentDidMount()");
    }

    changeState = () => {
        return this.setState({ hello: "Geek!" }, () => {
            console.log('setstate callback function')
        });
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>GeeksForGeeks.org, Hello{this.state.hello}</h1>
                <h2>
                    <p onClick={this.changeState}>Press Here!</p>
                </h2>
            </div>);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate()");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}

export default LifeCycle;