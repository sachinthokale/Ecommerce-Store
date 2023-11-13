import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../Redux/actions/loginAction.js";
import { clearErrors } from "../../Redux/Slice/authSlice.js";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { message, error } = useSelector((state) => state.login);

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    await dispatch(loginAction(email, password));

    if (message) {
      setTimeout(() => {
        toast(message);
        navigate("/");
      }, 2000);
    }

    if (error) {
      setTimeout(() => {
        toast(error);
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <form method="post" onSubmit={loginSubmitHandler}>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="show-password" onClick={() => setShowPass(!showPass)}>
            Show password
          </div>
          <button type="submit">LOGIN</button>
        </form>
        <p>New User?</p>
        <Link to="/register">Click here to Create Account</Link>
      </div>
    </div>
  );
};

export default Login;
