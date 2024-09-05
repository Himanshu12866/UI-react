import useCapcha from "./Hooks/captch"
export default function Captcha(){

let code = useCapcha()
    return(
        <div className="d-flex justify-content-center">
            <div className="card mt-2">
                <h1>Registration Form</h1>
                <p>{code}</p>
            </div>
        </div>
    )
}