import { useState } from "react";


export default function Uncontrolled() {
    const [sigIn, seSignOut] = useState(false);
    function handleSignIn() {
        seSignOut(true);
    }
    function handleSignOut() {
        seSignOut(false)
    }

    return (
        <div className="navlist">
            <nav className="navbar">
                <a className="navbar-brand fs-4 text-dark fw-bold">Shopper.</a>

                {
                    (sigIn === true) ?

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                        : 
                        <div></div>
                }

                <div>
                    {
                        (sigIn === true) ? <button className="btn btn-dark" onClick={handleSignOut}>Sign Out</button> : <button className="btn btn-success" onClick={handleSignIn}>Sign In</button>
                    }
                </div>


            </nav>
            
        </div>
    )
}