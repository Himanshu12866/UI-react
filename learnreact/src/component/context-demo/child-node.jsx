

// import { useContext } from "react";
// import { ContextDemo1 } from "./node";
// import SubChild from "./subchild-node";

// const ChildNode = () => {
//     const  contextValue = useContext(ContextDemo1)
//   return (
//     <div>
//     <h2>child-node</h2>

//      <p>{contextValue}</p>
//      <SubChild/>
//     </div>

//   )
// }

// export default ChildNode


import { useContext } from "react";

import { ContextDemo1 } from "./node";
import SubChild from "./subchild-node";

const ChildNode = () => {
    const valueOf = useContext(ContextDemo1)
    return (
        < div >
            <h1>Child Node</h1>
            <p>{valueOf}</p>
            <SubChild/>
        </div >
    )
}
export default ChildNode