import { useState } from "react";

const Homepage=()=>{
    const [input,setInput]=useState("")
    const [todoList,setTodoList]=useState([])
    const [counter,setCounter]=useState(0);
    return (<div className="flex absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
       <div className=" mx-auto my-auto">
        <input className="w-100 h-10 p-2  bg-cyan-400 rounded-lg shadow-lg " placeholder="Enter todo" type="text"
        value={input}
        onChange={(e)=>{setInput(e.target.value)
            
        }
        } />
        <button className="mx-4 p-2 bg-green-400 h-10 rounded-lg shadow-lg cursor-pointer"
        onClick={()=>{
            if(input.trim()!=="")
            {
            setCounter(counter+1)
            const newTodo={
                 id:counter,
                 msg:input
            }
        setTodoList([...todoList,newTodo])
        setInput("")
        console.log(todoList)}}
        }
        >Add</button>
         <div>
        {todoList.map((todo,index)=>
            <div className="flex" key={index}>
            <p  className="mt-4 w-100 h-10 border-0 rounded-lg p-2 bg-amber-200 shadow-lg " >{todo.msg}</p>
            <button className="mt-4 ml-4 border-0 p-2 rounded-lg shadow-lg cursor-pointer"
            onClick={()=>{
                 const updatedList=todoList.splice(index,1)
                 setTodoList(updatedList)
            }}
            > ❌</button>
            </div>
        
        )}
     </div>
     </div>
    
    </div>);
}

export default Homepage;