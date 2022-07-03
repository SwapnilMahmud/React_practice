import React, { Component } from 'react'

export default class Event_Handler_class extends Component {


    constructor(props) {
      super(props)
      this.state = {
         changedValue : ''
      }
    }
    
    handleOnchange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            changedValue : e.target.value
        },()=>{
            console.log(this.state.changedValue)
        })
        
    }
    handleClick=()=>{
        console.log("clicked")
    }
  render() {
    return (
      <div>
        <h1>Event Handling</h1>
        <input type="text" onChange={this.handleOnchange}/>
        {this.state.changedValue}
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
