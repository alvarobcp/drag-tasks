
import React, { useState } from "react";
import { ResizableBox } from 'react-resizable';

function Back() {

    const[title, setTitle] = useState("");

    function handleChange(event){
        setTitle(event.target.value);
    }

    function handleClick(event){
        //Aquí irán cositas...
        event.preventDefault();
    }


   return(
   <>
        <strong><div className="drag-div">/ / / /</div></strong>
        <ResizableBox className="resizable-box" width={200} height={200} minConstraints={[100, 100]}>
           <form>
                <textarea
                    onChange={handleChange}
                    type="text"
                    placeholder="Title..."
                    value={title}
                />
            </form>     
        </ResizableBox> 
    </>)
    
    
}

export default Back

/**/