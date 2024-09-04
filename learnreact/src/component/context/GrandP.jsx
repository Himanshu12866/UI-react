import { useState } from "react"

import { createContext } from "react"
import ParentContext from "./Parent"

export let DemoContext = createContext(null)

const GrandP = () => {
    const [state, setState] = useState("")

    return (
        <DemoContext.Provider value={state}>
            <h3>GrandP</h3>
            <input placeholder="Enter text" onChange={(e) => setState(e.target.value)} />
            <ParentContext/>
        </DemoContext.Provider>
    )
}


export default GrandP