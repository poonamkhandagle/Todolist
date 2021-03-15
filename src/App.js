import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { text:'',
    todos:[]
  }
}
onInputChange = (event) => {
  console.log(event.target.value);
  this.setState({text:event.target.value})
}
addTodo = () => {
  const {text} = this.state;
  if(!text) return this.setState({text: ''});
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  if(todos.filter(item => item.title === text).length) return this.setState({text: ''});
  const newTask ={title:text};
  todos.push(newTask);
  localStorage.setItem('todos',JSON.stringify(todos));
  this.setState({text: '',todos})
}

onDelete = (item) => {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  const filteredTodos = todos.filter((todo) => todo.title !== item.title )
  localStorage.setItem('todos',JSON.stringify(filteredTodos))
  this.setState({todos:filteredTodos})
}
componentDidMount = () => {
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  this.setState({todos})
}

render(){
 const {text,todos} = this.state;
  return(
    <div>
    <TodoInput onInputChange={this.onInputChange} addTodo={this.addTodo} value={text} />
    <TodoList todos={todos} onDelete={this.onDelete}/>
    </div>
  )
}
}
export default App;
