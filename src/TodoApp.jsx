import React from "react"

function InputBox(props) {
    console.log(props);
    
    const [todos, setTodos] = React.useState(props.inisialTodos)

    // props.onStatuschange(checked, value){
    //     [...todos].map((todo) => {
    //         if (todo.id == value) {
    //             todo.isCompleted = checked;
    //             console.log(todo.isCompleted);
    //         }
    //     })
    // };

    return (
        <div>
            <input type="text" ></input>
            <button>add</button>
        </div>
    )
}

export default InputBox