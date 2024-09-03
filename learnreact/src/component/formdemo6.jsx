
import { Formik, Form, Field, ErrorMessage } from "formik";
import *as yup from "yup"

export default function FormDemo6() {
    return (
        <section className="d-flex justify-content-center align-items-center w-75">
            <div className="card w-75">
                <p className="p-3">Formik Components</p>
                <div className="card-header text-center">
                    <h2><span className="bi bi-person-fill"></span>User Login</h2>
                </div>
                <div className="card-body">
                    <Formik initialValues={
                        {
                            username: "",
                            age: 0

                        }
                    }  


                    validationSchema = {
                        yup.object({
                            username: yup.string().required("Username is required"),
                            age: yup.number().required("Age is required").positive().integer()

                        })
                    }
                    onSubmit={ (values) => {
                        console.log(values);
                    }}
                   >
                    <Form>
                        <label className="form-label">Username :</label>
                        <Field className="form-control my-2" type="text" name="username"></Field>
                        <ErrorMessage className="text-danger" name="username"></ErrorMessage><br></br>
                        <label className="form-label">Age :</label>
                        <Field className="form-control my-2" type="text" name="age"></Field>
                        <span className="text-danger"><ErrorMessage  name="age"></ErrorMessage></span><br></br>
                        <Field as="select" className="form-select" name="city">
                            <option value="rewa">Rewa</option>
                        </Field>
                        <button className="btn btn-dark w-100 my-2" type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
        </section >
    )
}