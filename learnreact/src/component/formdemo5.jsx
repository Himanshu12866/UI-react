
import { useFormik } from "formik";
import *as yup from "yup";
export default function FormDemo5() {
    const formik = useFormik({
        initialValues: {
            username: "",
            age: 0,
            city: ""
        },
        validationSchema: yup.object({
            username: yup.string().required("username is required"),
            age: yup.number().required("Age Requierd"),
            city: yup.string().required("City required")
        }),
        onSubmit: (valeus) => {
            console.log(valeus)
        }

    })
    return (
        <section className="d-flex justify-content-center align-items-center w-75">
            <div className="card w-75">
                <p className="p-3 text-primary fw-bold">Formik Spread Approach</p>
                <div className="card-header text-center">
                    <h1><span className="bi bi-person-fill"></span>User Login</h1>
                </div>
                <div className="card-body">
                    <form className="p-3" onSubmit={formik.handleSubmit}>
                        <label className="form-label">Username :</label>
                        <input className="form-control" {...formik.getFieldProps("username")} name="username" type="text"></input>
                        <p>{formik.errors.username}</p>
                        <label className="form-label">Age</label>
                        <input className="form-control" {...formik.getFieldProps("age")} type="text" name="age"></input>
                        <p>{formik.errors.age}</p>
                        <select className="form-select" {...formik.getFieldProps("city")} name="city">
                            <option value="-1">Select City</option>
                            <option value="rewa">Rewa</option>
                        </select>
                        <p>
                            {
                                formik.errors.city
                            }

                        </p>
                        <button className="btn btn-dark w-100" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}