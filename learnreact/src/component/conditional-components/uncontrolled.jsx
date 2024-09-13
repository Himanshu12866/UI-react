import { useState } from "react";


export default function Uncontrolled() {
    const [sigIn, seSignOut] = useState(false);
    function handleSignIn(){
        seSignOut(true);
    }
    function handleSignOut(){
        seSignOut(false)
    }

    return (
        <div>
            <nav className="navbar">
                <a className="navbar-brand">Shopper.</a>
                
                    {
                        (sigIn === true) ?

                            <ol className="navbar-nav">
                              <span>Home</span>
                              <span>Home</span>
                              <span>Home</span>
                              <span>Home</span>
                              <span>Home</span>
                            </ol>
                            :
                            <div></div>
                    }
               
                <ol>
                    {
                        (sigIn === true) ? <button className="btn btn-dark" onClick={handleSignOut}>Sign Out</button> : <button className="btn btn-success" onClick={handleSignIn}>Sign In</button>
                    }
                </ol>


            </nav>
        </div>
    )
}