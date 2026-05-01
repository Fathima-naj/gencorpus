import React,{useState} from 'react'

function Todo() {
    const [value,setValue]=useState("");
    const [todo,setTodo]=useState([]) 
    const [editIndex,setEditIndex]=useState(null)
   
    
    const addItem=()=>{
        if(value.trim("")=="") return;
        if (editIndex!==null) {
            const updatedTodos = [...todo];
          updatedTodos[editIndex].text = value;
          setTodo(updatedTodos);
          setEditIndex(null);
        } else {
            setTodo([...todo,{id:Date.now(),text:value}])   
        }
        setValue("")

    }
    

    const handleDelete=(index)=>{
      let delteItems=todo.filter((e,i)=>i!=index)
      setTodo(delteItems)
    }

     const handleEdit=(index)=>{
        setValue(todo[index].text)
        setEditIndex(index)
    }
    
  return (
    <div className='text-center mt-'>
      <input type='text'className='border' value={value} onChange={(e)=>setValue(e.target.value)}/>
      {editIndex!==null? <button onClick={addItem} className=''>update</button>:<button onClick={addItem}>Add</button>}
      
      {todo.map((item,index)=>(
        <ul>
        <li key={item.id}>{item.text}
         <button onClick={()=>handleDelete(index)}>Delete</button> 
         <button onClick={()=>handleEdit(index)}>Edit</button>
        </li>
        
        </ul>
      ))}
    </div>
  )
}

export default Todo
