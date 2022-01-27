import ListElement from './ListElement'
import Form from './Form'

const List = (props) => {
  const rows = props.todoElements.map((row, index) => {
    return (
      <ListElement description={row} index={index} removeTask={props.removeTask}/>
    )
  })
  return (
  <div className='todoList'>
    <h1>To-Do list</h1>
    <Form handleSubmit={props.handleSubmit}/>
    <ul>
      {rows}
    </ul>
  </div>)
}

export default List