// import useCapcha from "./Hooks/captch"
// import { useFormik } from "formik"
// import { useEffect, useState } from "react";
// import *as yup from "yup";
// import useGeneratePsw from "./Hooks/generatepsw";

// export default function Captcha() {
//     const [otp, seOtp] = useState(" OTP");
//     const [type, setType] = useState("password")
//     const [show, setShow] = useState(false);
//     const [eye, slashEye] = useState("bi bi-eye-slash");
//     const [psword, setPsword] = useState("....")

//     let initialValues = {
//         name: " ",
//         psw: " ",
//         Mobile: " ",
//         city: " ",
//         codeCaptcha: " "
//     }
//     const formik = useFormik({
//         initialValues: initialValues,
//         validationSchema: yup.object({
//             name: yup.string().required("Enter Username"),
//             Mobile: yup.string().required("Please Enter Valid Number").matches(/\w{10}/, "Please Enter Valid number"),
//             city: yup.string().required("Please Select City"),
//             psw: yup.string().required("Please Enter Password").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, "Atlease one Uppercase , atleast one lowercase , atleaset one muber , atleast one special character"),
//             codeCaptcha: yup.string().required("Please Enter the captcha code").max(6).matches(otp, "Please enter the correct code")
//         }),
//         onSubmit: (values, { resetForm }) => {
//             console.log(values);
//             resetForm();
//           }
          

//     })
//     function ChangeCode() {
//         let code = useCapcha()
//         seOtp(code);
//     }
//     function ChangeType() {
//         if (show) {
//             setType("text")
//             setShow(false)
//             slashEye("bi bi-eye text-light")
//         } else {
//             setType("password")
//             setShow(true);
//             slashEye("bi bi-eye-slash")
//         }
//     }
//     function Generate() {
//         let psw = useGeneratePsw();
//         setPsword(psw);

//     }
//     function Restrict() {
//         document.oncontextmenu = () => {
//             return false;
//         }
//     }
//     useEffect(()=>{

//     })
//     return (
//         <div className="d-flex justify-content-center">
//             <div className="card mt-2 w-75">
//                 <div className="card-header bg-info text-light text-center">
//                     <h1>Registration Form</h1>
//                 </div>
//                 <div className="card-body">
//                     <form onSubmit={formik.handleSubmit}>
//                         <label className="form-label fw-bold"> Username :</label>
//                         <input type="text" onChange={formik.handleChange} className="form-control my-1" name="name" />
//                         <p className="text-danger">{formik.errors.name}</p>
//                         <label className="form-label fw-bold">Password:</label>
//                         <div className="input-group">
//                             <input className="form-control my-1" type={type} onChange={formik.handleChange} name="psw"></input>
//                             <span className={`btn btn-secondary input-group-text my-1  ${eye}`} onClick={ChangeType}></span>
//                         </div>
//                         <div className="d-flex justify-content-between my-2  mx-2">
//                             <p style={{ backgroundColor: "green", color: "black", padding: "14px" }} className="w-25 text-center text-light">{psword}</p>
//                             <p style={{ backgroundColor: "red", textAlign: "center", padding: "14px", color: "white", cursor: "pointer" }} className="bi bi-pencil-square w-25" onCopy={Restrict} onClick={Generate}> &nbsp; Generate Password</p>
//                         </div>
//                         <p className="text-danger">{formik.errors.psw}</p>
//                         <label className="form-label fw-bold">Mobile No. :</label>
//                         <input className="form-control my-1" type="text" name="Mobile" onChange={formik.handleChange}></input>
//                         <p className="text-danger">{formik.errors.Mobile}</p>
//                         <label className="form-label fw-bold">City :</label>
//                         <select className="form-select my-1" name="city" onChange={formik.handleChange}>
//                             <option value="">Select City</option>
//                             <option value="delhi">Delhi</option>
//                             <option value="mumbai">Mumbai</option>
//                             <option value="hyd">Hyderabad</option>
//                         </select>
//                         <p className="text-danger">{formik.errors.city}</p>
//                         <div className="d-flex justify-content-between my-2">
//                             <label className="form-label fw-bold">Please Enter The Captcha :</label>
//                              <p onClick={ChangeCode} className="btn btn-secondary bi bi-arrow-counterclockwise"></p>
//                         </div>
//                         <input type="text" className="form-control" name="codeCaptcha" onChange={formik.handleChange} ></input>
//                         <p className="text-danger">{formik.errors.codeCaptcha}</p>
//                         <button className="btn btn-dark text-light w-100 my-3" style={{ letterSpacing: "1px" }}>{otp}</button>
//                         <div>
//                             <button className="btn btn-success w-100 my-1" type="submit">Submit</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }



import useCapcha from "./Hooks/captch";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import useGeneratePsw from "./Hooks/generatepsw";

export default function Captcha() {
    const [otp, setOtp] = useState("OTP");
    const [type, setType] = useState("password");
    const [show, setShow] = useState(false);
    const [eye, setEye] = useState("bi bi-eye-slash");
    const [psword, setPsword] = useState("....");

    const initialValues = {
        name: "",
        psw: "",
        Mobile: "",
        city: "",
        codeCaptcha: ""
    };

    // Validation schema with dynamic Captcha validation
    const validationSchema = yup.object({
        name: yup.string().required("Enter Username"),
        Mobile: yup.string().required("Please Enter Valid Number").matches(/\d{10}/, "Please Enter Valid number"),
        city: yup.string().required("Please Select City"),
        psw: yup
            .string()
            .required("Please Enter Password")
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/, "At least one Uppercase, one Lowercase, one Number, one Special character"),
        codeCaptcha: yup
            .string()
            .required("Please Enter the captcha code")
            .test("captcha-match", "Please enter the correct code", (value) => value === otp) // Custom validation for Captcha
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm(); // Resets the form to initial values
        }
    });

    function ChangeCode() {
        let code = useCapcha();
        setOtp(code);
    }

    function ChangeType() {
        if (show) {
            setType("text");
            setShow(false);
            setEye("bi bi-eye text-light");
        } else {
            setType("password");
            setShow(true);
            setEye("bi bi-eye-slash");
        }
    }

    function Generate() {
        let psw = useGeneratePsw();
        setPsword(psw);
    }

    function Restrict() {
        document.oncontextmenu = () => {
            return false;
        };
    }

    useEffect(() => {
        ChangeCode(); // Automatically generate Captcha on mount
    }, []);

    return (
        <div className="d-flex justify-content-center">
            <div className="card mt-2 w-75">
                <div className="card-header bg-info text-light text-center">
                    <h1>Registration Form</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit}>
                        <label className="form-label fw-bold"> Username :</label>
                        <input
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="form-control my-1"
                            name="name"
                        />
                        <p className="text-danger">{formik.errors.name}</p>

                        <label className="form-label fw-bold">Password:</label>
                        <div className="input-group">
                            <input
                                className="form-control my-1"
                                type={type}
                                onChange={formik.handleChange}
                                value={formik.values.psw}
                                name="psw"
                            />
                            <span className={`btn btn-secondary input-group-text my-1 ${eye}`} onClick={ChangeType}></span>
                        </div>
                        <div className="d-flex justify-content-between my-2 mx-2">
                            <p
                                style={{ backgroundColor: "green", color: "black", padding: "14px" }}
                                className="w-25 text-center text-light"
                            >
                                {psword}
                            </p>
                            <p
                                style={{ backgroundColor: "red", textAlign: "center", padding: "14px", color: "white", cursor: "pointer" }}
                                className="bi bi-pencil-square w-25"
                                onCopy={Restrict}
                                onClick={Generate}
                            >
                                &nbsp; Generate Password
                            </p>
                        </div>
                        <p className="text-danger">{formik.errors.psw}</p>

                        <label className="form-label fw-bold">Mobile No. :</label>
                        <input
                            className="form-control my-1"
                            type="text"
                            name="Mobile"
                            onChange={formik.handleChange}
                            value={formik.values.Mobile}
                        />
                        <p className="text-danger">{formik.errors.Mobile}</p>

                        <label className="form-label fw-bold">City :</label>
                        <select
                            className="form-select my-1"
                            name="city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        >
                            <option value="">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="hyd">Hyderabad</option>
                        </select>
                        <p className="text-danger">{formik.errors.city}</p>

                        <div className="d-flex justify-content-between my-2">
                            <label className="form-label fw-bold">Please Enter The Captcha :</label>
                            <p onClick={ChangeCode} className="btn btn-secondary bi bi-arrow-counterclockwise"></p>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            name="codeCaptcha"
                            onChange={formik.handleChange}
                            value={formik.values.codeCaptcha}
                        />
                        <p className="text-danger">{formik.errors.codeCaptcha}</p>

                        <button className="btn btn-dark text-light w-100 my-3" style={{ letterSpacing: "1px" }} type="button">
                            {otp}
                        </button>

                        <div>
                            <button className="btn btn-success w-100 my-1" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
