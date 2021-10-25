import { useState } from "react";

const Task = ({name,completed}) => {
    const [language,setLanguage]=useState(name);
    const [done,setDone]=useState(completed)

    return (
          <div>
                <span style={{
                    textDecoration:done?'line-through':'none'
                }}>
                {language}
                </span>
            <button onClick={e=>setDone(!done)}>{done?'✓':'X'}</button>
            </div>
          );
}
 
export default Task;