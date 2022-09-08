import {observer} from 'mobx-react'
import {FC ,useState } from 'react'
import {TodoStoreImp} from './TodoStore'

interface TodoListProps{ 
  todoStore : TodoStoreImp
}


 const TodoList:FC<TodoListProps> =observer(({todoStore}) => { 
     console.log(todoStore)
     const [value,setValue]  = useState<string>("")
     const status = todoStore.status
     return ( 
        <div style = {{marginTop:'20px'}}>
           <input 
           type = "text"
           value = {value}
           onChange = {e =>setValue(e.target.value)}
           />
           <button
           onClick = {
               () => { 
                //    console.log(value)
                   todoStore.addTodo(value)
                   setValue('')
                }
            }
           >submit</button>
         <h3>completed : {status.completed} </h3>
         <h3>remaining : {status.remaining} </h3>
           
         <ul>
             { 
             todoStore.todos.map(todo =>( 
                  <li 
                  style = {{cursor:'pointer'}}
                  key = {todo.id}
                  onClick = {() => todoStore.toggleTodo(todo.id)}
                  > [{todo.completed ? 'x' : ''}]  {todo.title}</li>
             ))
             }
         </ul>
                
           
        </div>
    )
});
export default TodoList