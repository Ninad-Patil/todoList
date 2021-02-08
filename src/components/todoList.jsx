import React ,{useState} from 'react';

function TodoList(props){
 
    const deleteFromList = key=>{
        const newList= props.itemList.filter(itemobj =>{
            return itemobj.key !== key;
        });
          props.updateList(newList);
        
    };

    return (<div>
     {props.itemList.map(itemobj=>{
        return (<div className="todo-row">
        <p>{itemobj.item}</p>
        <button className='icons delete-icon'onClick={()=>{deleteFromList(itemobj.key)}}>x</button>
        </div>
        )
     })}
     
    </div>)
}

export default TodoList;