import React, { Component } from 'react'

class ClassTimer extends Component {
    interval ///instance field
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.SVGElementInstanceList(prevState => ({ timer: prevState + 1 }))
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                class timer - {this.state.timer}
                <button onClick={() => clearInterval(this.interval)}></button>
            </div>
        )
    }
}

export default ClassTimer
