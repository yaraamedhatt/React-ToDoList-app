
import './App.css';
import React , {Component} from 'react'
import ToDoItems from './components/ToDoItems/todoitems'
import AddItem from './components/AddItem/AddItem';


class App extends Component {
  state={
    items:[
      {id:1,name:"yara",age:22},
      {id:2,name:"ahmed",age:23},
      {id:3,name:'rawan',age:22}
    ]
  }
  deleteItem=(id)=>{
    let items=this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }
  AddItem=(item)=>{
    item.id = Math.random()
    let items=this.state.items
    items.push(item)
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>ToDo List</h1>
        <ToDoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem AddItem={this.AddItem} />
      </div>
    );
}
}

export default App;
