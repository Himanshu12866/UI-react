import useCapcha from "./Hooks/captch"
import { useFormik } from "formik"
import *as yup from "yup";

export default function Captcha() {

    const formik = useFormik({
        initialValues: {
            name: "",
            psw: "",
            Mobile: "",
            city: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Username"),
            psw: yup.string().required("Required"),
            Mobile: yup.string().required("Please Enter Valid Number").matches(/^\(\+91\)\d{10}$/, "Please Enter valid number"),
            city: yup.string().required()
        })
    })

    let code = useCapcha()

    return (
        <div className="d-flex justify-content-center">
            <div className="card mt-2">
                <p>{code}</p>
                <div className="card-header">
                    <h1>Registration Form</h1>
                </div>
                <div className="card-body">
                    <form>
                        <label className="form-label"> Userename :</label>
                        <input type="text" onChange={formik.handleChange} className="form-control my-1" name="name" />
                        <p className="text-danger">{formik.errors.name}</p>
                        <label className="form-label">Password:</label>
                        <input className="form-control my-1" name="psw"></input>
                        <p className="text-danger">{formik.errors.psw}</p>
                        <label className="form-label">Mobile No. :</label>
                        <input className="form-control my-1" type="text" name="Number" onChange={formik.handleChange}></input>
                        <p className="text-danger">{formik.errors.Mobile}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}