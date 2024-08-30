import { useState } from "react"



export default function FormDemo1() {
    const [error, setError] = useState("");
    const [errorAge,setErrorAge] = useState("");
    const [className ,setclassName] = useState(
        ""
    )
    const [errorCity, setErrorCity]  = useState("")
    function handleName(e) {
        const valueName = e.target.value;
        if (valueName === "") {
            setError("Name is required")
            setclassName("text-danger")
        }
        else if (valueName.length < 3) {
            setError("Name should be more than 4 characters")
            setclassName("text-danger")

        }
        else if (valueName.length > 12) {
            setError("Name should be less than 12 characters")

            setclassName("text-danger")
        }
        else {
            setclassName("text-success")
            setError("Accepted")
        }
    }
    function handleAge(e){
        const valueAge = e.target.value;
        if (valueAge === "") {
            setclassName("text-danger")
            setErrorAge("Age is required")
        }
        else if (valueAge < 18) {
            setclassName("text-danger")
            setErrorAge("Age must be greater than 18")
        }
        else if (valueAge > 100) {
            setclassName("text-danger")
            setErrorAge("Age must be less than 100")
        }
        else{
            setclassName("text-success")
            setErrorAge("Acctepted")
        }
    }
    function cityChange(e){
        const valueCity = e.target.value;
        console.log(valueCity)
        if(valueCity === -1){
            setErrorCity("Please Select city")
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
                        <span className={className}>{error}</span>
                        <br></br>
                        <label className="form-label my-1">Age</label>
                        <input className="form-control" type="number" onChange={handleAge} placeholder="Please enter valid Age"></input>
                        <span className={className}>{errorAge}</span>
                        <br></br>
                        <select className="form-select my-1" onChange={cityChange}>
                            <option value={"-1"}>Select</option>
                            <option value={"hyd"}>Hyderabad</option>
                            <option value={"rewa"}>Rewa</option>
                            <option value={"satna"}>Satna</option>
                        </select>
                        <span className={className}>{errorCity}</span>
                        <button className="btn btn-dark w-100 my-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    )
}