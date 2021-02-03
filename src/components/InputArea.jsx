import React from "react";

function InputArea() {
    return (
        <div classNmae="form">
			<input onChange={handleChange} type="text" value={inputText} />
			<button onClick={addItem}>
				<span>Add</span>
			</button>    		
    	</div>
    )
}

export default InputArea;