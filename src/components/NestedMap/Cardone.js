import React,{Component} from "react";
class Cardone extends Component{
    render(){
        return(
            <div>
 <h1>using class components</h1>
            <p>{this.props.name}</p>
            </div>
           
        )
    }
}
export default Cardone;