import { useState } from "react"



export default function FormDemo1() {
    const [error, setError] = useState("")
    function handleName(e) {
        const valueName = e.target.value;



        if (valueName === "") {
            setError("Name is required")
        }
        else if (valueName.length < 3) {
            setError("Name should be more than 4 characters")
        }
        else if (valueName.length > 12) {
            setError("Name should be less than 12 characters")
        }
        else {
            setError("")

        }


    }


    return (
        <div className="box5 d-flex bg-info justify-content-center align-items-center" style={{ width: "100%", height: "100vh" }}>

            <div className="card w-50">
                <p className="m-2">Form with validtion without any 3rd Party</p>
                <div className="card-header">
                    <h3>Login Details</h3>

                </div>
                <div className="card-body">
                    <form>
                        <label className="form-label">Username :</label>
                        <input className="form-control" onChange={handleName} type="text" required placeholder="Enter your Name"></input>
                        <span className="text-danger">{error}</span>
                        <br></br>
                        <label className="form-label my-3">Age</label>
                        <input className="form-control" type="number" placeholder="Please enter valid Age"></input>
                        <select className="form-select my-3">
                            <option value={-1}>Select</option>
                            <option value={"hyd"}>Hyderabad</option>
                            <option value={"rewa"}>Rewa</option>
                            <option value={"satna"}>Satna</option>
                        </select>
                        <button className="btn btn-dark w-100 my-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>


        </div >
    )
}