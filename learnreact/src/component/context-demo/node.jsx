// import { createContext , useState } from "react";
// let contextValue = createContext(null)

// const Node = () => {
//     const [msg , setMsg] = useState("")
//     return(
//         <contextValue.Provider value={msg}>
//             <h1>Node Box</h1>
//             <input type="text" onChange={(e) => setMsg(e.target.value)}></input>
//         </contextValue.Provider>
//     )
// }
// export default Node;


// import { createContext,useState } from "react";
// import ChildNode from "./child-node";
//  export let ContextDemo1 = createContext(null);


// const Node = () => {
//     const [msg, setMsg] = useState("");
//     return(
//         <ContextDemo1.Provider value={msg}>
//             <h1>Node Box</h1>
//             <input type="text" onChange={(e) => setMsg(e.target.value)}></input>
//             <ChildNode/>
//         </ContextDemo1.Provider>
//     )
// }

// export default Node


import { createContext, useState } from "react";
export let ContextDemo1 = createContext(null)
import ChildNode from "./child-node";

const Node = () => {
    const [msg , setMsg] = useState("")
    return (
        <ContextDemo1.Provider value={msg}>
        <h1>Node Box</h1>
        <input type="text" onChange={(e) => setMsg(e.target.value)} ></input>
<ChildNode/>
        </ContextDemo1.Provider>
    )
}

export default Node;












