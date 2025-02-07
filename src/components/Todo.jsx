import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({todo, deleteTodo, toggleCompleted, toggleEditing, editTodo}) {
  return (
    todo.isEditing
      ? <EditForm todo={todo} editTodo={editTodo}/>
      :<div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
          <p
            style={{cursor: 'pointer'}}
            onClick={() => toggleCompleted(todo.id)}
          >{todo.content}</p>
          <div>
            <MdEdit
              style={{cursor: 'pointer', marginRight: '5px'}}
              onClick={() => toggleEditing(todo.id)}
            />
            <MdDelete
              style={{cursor: 'pointer'}}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
  )
}

export default Todo