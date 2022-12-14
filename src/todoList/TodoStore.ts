import {makeObservable,observable,action, computed} from 'mobx'

interface TodoItem{ 
    id:number;
    title:string;
    completed:boolean
}


export  class TodoStoreImp { 
     todos:TodoItem[] = [];

     constructors(){    
       makeObservable(this,{ 
           todos : observable,
           addTodo:action,
           toggleTodo:action,
           status:computed
       })
     }
    
     addTodo(title:string){ 
       const item:TodoItem = { 
           id:+(Math.random().toFixed(4)),
           title,
           completed:false
       }
      this.todos.push(item)
     }
     toggleTodo(id:number){ 
      const index= this.todos.findIndex(item => item.id === id)
      console.log(index);
      if(index > -1){ 
          console.log(this.todos[index].completed);
          
          this.todos[index].completed = !this.todos[index].completed 
      }
     }
    
     get status() { 
         let completed = 0,remaining = 0;
         this.todos.forEach(todo => { 
             if(todo.completed){ 
                 completed++
             }else{ 
                 remaining++
             }
         })
         return{ completed,remaining}
     }
}

export const TodoStore = new TodoStoreImp