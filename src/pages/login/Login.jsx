import "./login.scss";
  import { useNavigate } from "react-router-dom";
export default function Login() {

  let navigate = useNavigate();
    const handleClick = () => {
       navigate("/", { replace: true });}
  return (
    <>
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://www.pinclipart.com/picdir/big/2-23236_transparent-netflix-logo-2018-clipart.png"
              alt=""
            />
            <button className="loginButton" onClick={handleClick}>Sign In</button>
          </div>
        </div>
        <div className="container">
        <form >
           <h1>Sign In</h1>
           <input type="email" placeholder="Email or phone number"/>
           <input type="password" placeholder="Password"/>
        <button className="loginButton"  onClick={handleClick}>Sign In</button>
        <span>New to Netflix? <b>Sign up now</b> </span>
        <small>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b>
        </small>
        </form>
        </div>
      </div>
    </>
  );
}

