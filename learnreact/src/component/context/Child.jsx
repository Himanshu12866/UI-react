

import { useContext } from "react"
import { DemoContext } from "./GrandP"

const ChildContext = () => {

    let contextValue = useContext(DemoContext)


    return (
        <div>
            <h3>ChildContext</h3>
            {contextValue}

        </div>
    )
}

export default ChildContext