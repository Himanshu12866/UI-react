
// import { useContext } from "react";
import { ContextDemo1 } from "./node";

import { useContext } from "react";
// import { ContextDemo1 } from "./subchild-node";

//  const SubChild = () => {
//     let contextValue = useContext(ContextDemo1)
//     return (
//        <div>
//          <h1>SubChild</h1>
//          <p>{contextValue}</p>
//        </div>
//     )
// }
// export default SubChild;



// export {ContextDemo1} from "./node";

const SubChild = () =>{
const valueOf = useContext(ContextDemo1)

return (
        <div>
            <h1>SubChild Node</h1>
            <p>{valueOf}</p>
        </div>
    )
}
export default SubChild;
