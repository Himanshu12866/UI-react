import { useContext } from "react"
import { DemoContext } from "./GrandP"
import ChildContext from "./Child"

const ParentContext = () => {

    const contextValue = useContext(DemoContext)

    return (
        <div>
            <h3>ParentContext</h3>
            {contextValue}
            <ChildContext/>
        </div>
    )
}

export default ParentContext