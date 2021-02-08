import React ,{useState} from 'react';
import TodoList from './todoList';
function TodoForm(){
    
   const handleChange = (e) =>{
       setInput(e.target.value);
   }

    
    const addItemToList = (e) =>{
        e.preventDefault();
        updateList([...itemList,{item:input,key:Date.now()}]);
        console.log(itemList);
        setInput('');
    }
    const [input,setInput] = useState("");
    const [itemList,updateList] = useState([]);

    return(
        <div>
            <form className="todoForm"  onSubmit={addItemToList} >
                <input 
                value={input}
                className='todo-input'
                placeholder="Add a todo"
                name='text'
                onChange={handleChange} />

                <button 
                className='todo-button'
                onSubmit={addItemToList}
                >Add todo</button>

            </form>
            <TodoList itemList={itemList} updateList={updateList} />
        </div>
    )
}

export default TodoForm;