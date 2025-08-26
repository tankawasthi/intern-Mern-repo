import React,{Component} from "react"

// CLASS BASED COMPONENTS
export class Welcome extends Component{
  render(){
    return(
      <h1>hello,{this.props.name}!</h1>
    )
  }
}