
import { useEffect } from "react";
export default function MountDemo(){

    useEffect(() => {
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        }
    },[])
}