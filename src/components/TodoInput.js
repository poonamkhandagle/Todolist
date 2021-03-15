import React from "react";
class TodoInput extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <input type="text" placeholder="Enter your task" onChange={(e)=>{this.props.onInputChange(e)}} value={this.props.value} />
      <button onClick={() => {this.props.addTodo()}}> Add </button>
      </div>
    )
  }
}
export default TodoInput;
