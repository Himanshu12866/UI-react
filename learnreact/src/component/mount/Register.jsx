import { useEffect } from "react";
import FormDemo4 from "../formikSpread";
export default function RegisterMount(){
    useEffect( ()=> {
        console.log("Register Component has been mounted");
        return () => {
            console.log("Register Component has been unmounted");
        }
    },[])
    return (
        <FormDemo4/>
    )
}