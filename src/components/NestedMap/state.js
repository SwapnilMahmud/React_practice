import React, { Component } from 'react'

export default class state extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleIncrement=()=>{
        //console.log('clicked')
        this.setState({
            count:this.state.count+1
        })
    }
    handleDecrement=()=>{
        //console.log('clicked')
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    const{count}=this.state
    return (
      <div>
        <h1>State</h1>
        <h3>Count:{count}</h3>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
