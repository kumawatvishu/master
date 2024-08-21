import { useState } from 'react'

function CounterButton() {
    // const [count, setCount] = useState(0)
    let arr= useState(0)
    return <button onClick={() => arr[1]((count) => count + 1)}>
        count is {arr[0]}
    </button>
}

export default CounterButton;