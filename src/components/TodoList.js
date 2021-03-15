import React from "react";
class TodoList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {todos} = this.props;
    return (
      <div>
        {todos && <ul>
         { todos.map((item,index) => {
           const elem = <li key={index} >{item.title} <span onClick={()=>this.props.onDelete(item)}>X</span ></li>;
           return elem;
         })}
        </ul>}
      </div>
    )
  }
}
export default TodoList;
