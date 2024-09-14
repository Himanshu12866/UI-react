import { useReducer } from "react"



let initialvalue = { count: 0 }
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
    }
}

const Reducerdemo1 = () => {

    const [state, dispatch] = useReducer(reducer, initialvalue)

    function handleIncrement(){
        dispatch({type: 'INCREMENT'})
    }

    function handleDecrement(){
        dispatch({type: 'DECREMENT'})
    }
    return (
        <div>reducerdemo
        <p>{state.count}</p>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    )
}

export default Reducerdemo1