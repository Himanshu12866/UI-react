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
                <a className="navbar-brand">Shopper.</a>

                {
                    (sigIn === true) ?

                        <ol className="navbar-nav">
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