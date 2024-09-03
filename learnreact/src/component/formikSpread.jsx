import { useFormik } from "formik"

 import *as yup from "yup"


 export default function FormDemo4(){

    const formik = useFormik({
        initialValues: {
            username:"",
            age:0,
            city:""
        },
        validationSchema: yup.object({
            username: yup.string().required("Name Required"),
            age: yup.number().required("Age Required"),
            city: yup.string().required("City Required")
        }),
        onSubmit: (values) =>{
            console.log(values);
        }
    })
    return (
        <div className="divBox d-flex justify-content-center align-items-center w-75">
            <div className="card w-50">
                <div className="card-header text-center">
                    <h1><span className="bi bi-person-fill"> </span>User Login</h1>
                </div>
                <div className="card-body">
                    <form className="p-2" onSubmit={formik.handleSubmit}>
                        <label className="form-label">Userename :</label>
                        <input className="form-control" type="text" name="username" onChange={formik.handleChange}></input>
                        <p>{formik.errors.username}</p>
                        <label className="form-label ">Age : </label>
                        <input className="form-control" name="age" onChange={formik.handleChange} type="text"></input>
                        <p>{formik.errors.age}</p>
                        <select className="form-select" onChange={formik.handleChange} name="city">
                            <option value="select">Select city</option>
                            <option value="rew">Rewa</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="delhi">Delhi</option>
                        </select>
                        <p>{formik.errors.city}</p>
                        <button className="btn btn-dark w-100" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
 }