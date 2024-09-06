
import { useState } from "react";
import LogIN from "./LoginIn";
import RegisterMount from "./Register";
export default function MountDemo(){

   const [component , setComponent] = useState()
   function LoginComponent(){
       setComponent(<RegisterMount/>)
    }
    function RegisterComponent(){
       setComponent(<LogIN/>)
   }
   return(
    <div>
        <button className="btn btn-dark" onClick={LoginComponent}>Login</button>
        <button className="btn btn-secondary" onClick={RegisterComponent}> Register</button>

        <div>
            {
                component
            }
        </div>
    </div>
   )
}