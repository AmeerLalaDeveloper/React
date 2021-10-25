import { useState } from "react";
import Task from "./Task";

const languages=[
{ name: "CSS", completed: true },
{ name: "JavaScript", completed: true },
{ name: "Learn React", completed: false },
{ name: "Learn mongoDB", completed: false },
{ name: "Learn Node JS", completed: false },
]
const Todo = () => {
    const [data,setData]=useState(languages)

    return ( 
        <div>
            { data.map(language=>{
                return <Task key={language.name} name={language.name} completed={language.completed}></Task>
        
    })
    }
        </div>
     );
}
 
export default Todo;