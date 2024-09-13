import { useState } from "react";
import DataGrid from "./data-grid";


export default function ConditionalRendering() {
    const [sigIn, setSignedIn] = useState(false);
    const [layout, setLayout] = useState("");

    function handleSignIn() {
        setSignedIn(true);
    }
    function handleSignOut() {
        setSignedIn(false);
    }
    function handleSelect(e) {
        setLayout(e.target.value);
    }
    return (
        <div className="boxbox">
            <div>
                {
                    (sigIn === true) ? <h1>You Are Signed In</h1> : <h1>You are Signed Out</h1>
                }
            </div>
            <div>
                {
                    (sigIn === true) ? <button className="btn btn-dark" onClick={handleSignIn}>Sign Out</button> : <button className="btn btn-success" onClick={handleSignOut}>Sign In </button>
                }
            </div>
            <select className="form-select w-25 m-3" onChange={handleSelect}>
                <option value="">Select layout</option>
                <option value="grid">Grid</option>
                <option value="card">card</option>
            </select>

            <DataGrid layout={layout} fields={["Name", "Price"]} data={[{ "Name": "Boat", "Price": "2000" }, { "Name": "JBL", "Price": "2020" }]} />
        </div>
    )
}