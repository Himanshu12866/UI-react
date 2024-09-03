
import { formic } from "formik"
export default function FormDemo2(){



    return(
        <div className="containerBox w-75">
            <div className="card w-100">
                <div className="card-header">
                    <h2>User Login</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={formic.handleSubmit}></form>
                </div>
            </div>
        </div>
    )
}