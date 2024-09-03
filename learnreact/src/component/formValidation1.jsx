
import { useFormik } from "formik"
export default function FormDemo2(){
    function ValidateUser(formData){
        var errors= {
            UserName:"",
            Age:0,
            City:"",
            Mobile:""
        } 

    if(formData.UserName.length === 0){
        errors.UserName = "Name Required"
        }

        else{
            if(formData.UserName.length < 4){
                errors.UserName = "Name should be more than 4 characters"
            }
            else if(formData.UserName.length>12){
                errors.UserName = "Name should be less than 12 characters"
            }
            else{
                errors.UserName = ""
            }
        }

        if(formData.Age.length=== 0){
            errors.Age = "Age Required"
        }
        else{
            if(isNaN(formData.Age)){
                errors.Age = "Age should be a number"
            }
            else if(formData.Age.length<18){
                errors.Age = "Age should be more than 18"
            }
            else if(formData.Age.length>50){
                errors.Age = "Age should be less than 50"
            }
            else{
                errors.Age = ""
            }
        }


        if(formData.Mobile.length===""){
            errors.Mobile = "Mobile Required"
        }
        else{
            if(formData.Mobile.length!== 10){
                errors.Mobile = "Mobile should be 10 digits"
            }
            else{
                errors.Mobile = ""
            }
        }
        if(formData.City === "-1"){
            errors.City = "Please Select the city"
        }

        else{
            errors.City = ""
        }
    }

    const formik = useFormik({
        initialValues:{
            UserName:"",
            Age:0,
            Mobile:"",
            City:""
        },
        validate: ValidateUser,
        onSubmit: (values) => {
            console.log(values)
        }
    })



    return(
        <div className="containerBox w-75">
            <div className="card w-100">
                <div className="card-header text-center">
                  <h2>  <span className="bi bi-person-fill"></span>  User Login</h2>
                </div>
                <div className="card-body">
                    <form className="p-3"  onSubmit={formik.handleSubmit}>
                        <label className="form-label m-1">Username :</label>
                        
                        <input type="text" onChange={formik.handleChange} name="UserName" className="form-control m-1" ></input>
                        <span className="text-danger">{formik.errors.UserName}</span>
                        <label className="form-label m-1">Age :</label>
                        <input className="form-control m-1" onChange={formik.handleChange}  name="Age" type="text"></input>
                        <span className="text-danger">{formik.errors.Age}</span>
                        <label className="form-label m-1">Mobile No. :</label>
                        <input className="form-control m-1" type="text" onChange={formik.handleChange}  name="Mobile" ></input>
                        <span className="text-danger">{formik.errors.Mobile}</span>
                        <select className="form-select m-1" name="City" onChange={formik.handleChange} >
                            <option value="-1">select City</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="delhi">Delhi</option>
                          <option value="rewa">Rewa</option>
                        </select>
                        <span className="text-danger"> {formik.errors.City}</span>
                        <br></br>
                      
                        <button className="btn btn-dark w-100 m-1 my-2" type="submit"> Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}