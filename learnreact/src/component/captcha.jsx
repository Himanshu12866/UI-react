import useCapcha from "./Hooks/captch"
import { useFormik } from "formik"
import { useState } from "react";
import *as yup from "yup";

export default function Captcha() {
    const [otp, seOtp] = useState(" OTP");
    const [type, setType] = useState("password")
    const [show, setShow] = useState(false);
    const [eye, slashEye] = useState("bi bi-eye-slash")

    const formik = useFormik({
        initialValues: {
            name: "",
            psw: "",
            Mobile: "",
            city: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Enter Username"),

            Mobile: yup.string().required("Please Enter Valid Number").matches(/\w{10}/, "Please Enter Valid number"),
            city: yup.string().required("Please Select City")
        })
    })
    function ChangeCode() {

        let code = useCapcha()
        seOtp(code)
    }

    function ChangeType() {

        if (show) {
            setType("text")
            setShow(false)
            slashEye("bi bi-eye text-light")


        } else {
            setType("password")
            setShow(true);
            slashEye("bi bi-eye-slash")

        }
    }


    return (
        <div className="d-flex justify-content-center">
            <div className="card mt-2 w-75">

                <div className="card-header bg-info text-light text-center">
                    <h1>Registration Form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <label className="form-label"> Userename :</label>
                        <input type="text" onChange={formik.handleChange} className="form-control my-1" name="name" />
                        <p className="text-danger">{formik.errors.name}</p>
                        <label className="form-label">Password:</label>

                        <div className="input-group">
                            <input className="form-control my-1" type={type} name="psw"></input>
                            <span className={`btn btn-secondary input-group-text my-1  ${eye}`} onClick={ChangeType}></span>
                        </div>

                        <p className="text-danger">{ }</p>
                        <label className="form-label">Mobile No. :</label>
                        <input className="form-control my-1" type="text" name="Mobile" onChange={formik.handleChange}></input>
                        <p className="text-danger">{formik.errors.Mobile}</p>
                        <label className="form-label">City :</label>
                        <select className="form-select my-1" name="city" onChange={formik.handleChange}>
                            <option value="">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="hyd">Hyderabad</option>
                        </select>
                        <p className="text-danger">{formik.errors.city}</p>
                        <div>
                            <button className="btn btn-success w-100 my-1">Submit</button>
                        </div>
                    <div className="d-flex justify-content-between my-2">
                        <label className="form-label">Please Enter The Captcha :</label> <button onClick={ChangeCode} className="btn btn-secondary bi bi-arrow-counterclockwise"></button>
                    </div>
                    <input type="text" className="form-control" ></input>
                    <button className="btn btn-dark text-light w-100 my-3" style={{letterSpacing:"1px"}}>{otp}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}