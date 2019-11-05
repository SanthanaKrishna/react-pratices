import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Santhana'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }
    clickHandler=()=>{
        this.setState({
            name:'Krishna'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <LifecycleB />
                <h2>LifecycleA Component</h2>
                <button onClick={this.clickHandler}>Change State</button>
            </div>
        )
    }
}

export default LifecycleA
