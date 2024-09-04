
import { useContext } from "react";
import { ContextDemo1 } from "./node";

 const SubChild = () => {
    let contextValue = useContext(ContextDemo1)
    return (
       <div>
         <h1>SubChild</h1>
         <p>{contextValue}</p>
       </div>
    )
}
export default SubChild;
