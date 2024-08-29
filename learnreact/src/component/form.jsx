import { useState } from "react"


export default function FormReact(){
    const [data , setData] = useState({userName: "", passwd:0, City:""})

   function handleName(e){
    setData({
        userName:e.target.value,
        passwd:data.passwd,
        City:data.City
    })
   }
   function handleAge(e){
    setData({
        userName:data.userName,
        passwd:e.target.value,
        City:data.City
    })
   }
   function handleCity(e){
    setData({
        userName:data.userName,
        passwd:data.passwd,
        City:e.target.value
    })
   }
function ClickBtn(){
    alert(`Name : ${data.userName} \n Age : ${data.passwd} \n City : ${data.City}`)
}

    return(
        <div className="d-flex justify-content-center align-items-center" style={{width:"100%" , height:"100vh"}}>
        <div className="card" style={{width:"300px" , height:"400px"}}>

            <div className="card-header text-center">
                <h2>Register Form</h2>
            </div>
            <div className="card-body">
                <label className="form-label">Name:</label>
                <input className="form-control" onChange={handleName} value={data.userName} type="text"></input>
                <label className="form-label my-2" >Age:</label>
                <input className="form-control" onChange={handleAge} value={data.passwd} type="number"></input>
                <select onChange={handleCity} className="form-select my-3" value={data.City}>
                    <option>Select City</option>
                    <option value="delhi">Delhi</option>
                    <option value="hyd">Hyd</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="rewa">Rewa</option>
                </select>

            </div>
            <div className="card-footer">
                <button className="btn btn-dark w-100" onClick={ClickBtn} >Submit</button>
            </div>
        </div>
            
        </div>
    )
}