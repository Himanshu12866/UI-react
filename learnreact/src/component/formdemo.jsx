import { useState } from "react"


export default function FormDemo() {

    const [name, setName] = useState({
        "userName": "",
        Age: 0,
        City: ""
    })

    function handleName(e) {
        setName({
            userName: e.target.value,
            Age: name.Age,
            City: name.City
        })

    }
    function handleAge(e){
        setName({
            userName:name.userName,
            Age: e.target.value,
            City:name.City

        })
    }
    function handleCity(e){
        setName({
            userName:name.userName,
            Age:name.Age,
            City:e.target.value
        })
    }
    function handleSubmit(e){
e.preventDefault()
alert(` Username : ${name.userName} \n Age : ${name.Age} \n City : ${name.City}
    `)
    }

    return (
        <div className="box3 d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh", backgroundColor: "rgb(29, 49, 65)" }}>
            <div className="card w-50" style={{ height: "auto" }}>
            <p className="m-2 text-danger">Form Without Any 3rd Party Libraries</p>
                <div className="card-header">
                    <h2>Enter Your Details</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                  <label className="form-label">
                        <b>Username:</b>
                    </label>
                    <input className="form-control my-2" onChange={handleName} type="text"></input>
                    <label className="form-label fw-bold">Age :</label>
                    <input className="form-control my-2" onChange={handleAge} type="number"></input>
                    <label className="form-label">Select Your City</label>
                    <select className="form-select" onChange={handleCity}>
                        <option value={-1}>Select</option>
                        <option value={"hyd"}>Hyderabad</option>
                        <option value={"satna"}>Satna</option>
                        <option value={"rewa"}>Rewa</option>
                    </select>
                    <button className="btn btn-dark my-3 w-100">Submit</button>
                  </form>
                </div>
            </div>
        </div>
    )

}