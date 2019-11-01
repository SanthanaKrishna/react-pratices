import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number: 0
      }
    }
    componentDidMount(){
        this.myInterval= setInterval(()=>{
            this.setState({number :0})
        }, 1000)
    }
    shouldComponentUpdate(nextProps, nextState){
        if(nextState.number === this.state.number){
            return false
        }else{
            return true
        }
    }
    componentWillMount(){
        clearInterval(this.myInterval)
    }
    render() {
        return (
            <div>
                this is home
            </div>
        )
    }
}
export default Home;