import './App.css';
import React, {Component} from 'react'
import List from './List'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoElements: []
    };

    this.handleSubmit = (task) => {
      this.setState({todoElements: [...this.state.todoElements, task.value]});
    }
  
    this.removeTask = index=> {
      const {todoElements} = this.state;
      this.setState({
        todoElements: todoElements.filter((todoElements,i) => {
          return i !== index;
        })
      });
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    this.loadLocalStorage = () =>{
      var tasks = localStorage.getItem("tasks");
      if(tasks){
        tasks = JSON.parse(tasks);
        for(const task of tasks.reverse()){
          if(!this.state.todoElements.includes(task)){
            this.setState(this.handleSubmit({value:task}));
          }
        }
      }
    }
  }

  render() {
    this.loadLocalStorage();
    const {todoElements} = this.state;
    return (
      <List todoElements={todoElements} removeTask={this.removeTask} handleSubmit={this.handleSubmit}/>
    )
  }
}

export default App;
