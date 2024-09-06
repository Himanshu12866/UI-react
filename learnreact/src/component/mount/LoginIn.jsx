import { useEffect } from "react";
import Captcha from "../captcha";
export default function LogIN(){
    useEffect( ()=> {
        console.log("Login Compoonent has been mounted");
        return () => {
            console.log("Login Compoonent has been unmounted");
        }
    } ,[])

    return (
        <Captcha/>
    )
}

