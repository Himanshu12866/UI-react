
import { useFormik } from "formik";
import * as yup from "yup";


export default function FormDemo3(){
    const formik = useFormik({
        initialValues: {
            Username : "",
            Age : 0,
            Mobile : "",
            city:""
        },
        validationSchema:yup.object({
            Username : yup.string().required("Username Require").min(4, "Userename must be more than 4 chars").max(12 , "Username must be less than 12 chars"),
            Age : yup.number().required("Age required").min(18, "Age must be 18 or above").max(50 , "Age shuold be less than 50"),
            Mobile: yup.string().required("Mobile No. Must be enter").matches(/\w{10}/ , "Please enter valid Number"),
            city:yup.string().required("City is required")

        }),
        onSubmit: (values) =>{
            console.log(values)
        }
    })

    return (
        <div className="containerBox2 w-75 d-flex justify-content-center align-items-center">

        <div className="card w-75">
            <div className="card-header text-center">
                <h2><span className="bi bi-person-fill"></span> User Login</h2>
            </div>
            <div className="card-body">
                <form className="p-2" onChange={formik.handleSubmit}>
                    <label className="form-label">Username :</label>
                    <input className="form-control m-1" type="text" name="Usernamr" onChange={formik.handleChange} placeholder="Enter Your Name"></input>
                    <div className="text-danger">{formik.errors.Username}</div>
                    <label className="form-label my-2">Age :</label>
                    <input className="form-control m-1" type="text" name="Age"  onChange={formik.handleChange} placeholder="Please Enter Age" ></input>
                    <div className="text-danger">{formik.errors.Age}</div>
                    <label className="form-label my-2"> Mobile No. :</label>
                    <input className="form-control" type="text" name="Mobile"  onChange={formik.handleChange} placeholder="Enter Your Mobile No< :"></input>
                    <div className="text-danger">{formik.errors.Mobile}</div>
                    <select className="form-select my-2" name="city"  onChange={formik.handleChange}>
                        <option value="-1">Select City</option>
                        <option value="hyd">Hyderabad</option>
                        <option value="rewa">Rewa</option>
                        <option value="delhi">Delhi</option>
                    </select>
                    <div className="text-danger">{formik.errors.city}</div>
                    <button type="submit" className="btn btn-dark my-2 w-100">Submit</button>
                </form>
            </div>
        </div>
         </div>
    )

}