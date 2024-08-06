export default function InputBox() {
    return (
       <div className="parent">
         <div className="inputBox">
            <img src="images/insta.png" />

            <div className="text-box">
                <input type="text" className="form-control " placeholder="Phone number, email or username"></input>
                <input type="password" className="form-control  " placeholder="Password"></input>
                <button className="btn w-100 my-3 p-1">Login</button>
            </div>

            <div className="row">
                <div className="col-5"></div>
                <div className="col-2">OR</div>
                <div className="col-5"></div>
            </div>
            <div className="text">
                <p><span className="bi bi-facebook"></span>Log in with Facebook</p>
                <a href="#">Forgot Password?</a>
            </div>
        </div>
        <div className="account">
            <p>Don&apos;t have an account? <a href="#">Sign up</a></p>
        </div>
        <div className="play">
           <p>Get the app.</p>
           <img  src="images/playstore.png"/>
        </div>
       </div>


    )
}