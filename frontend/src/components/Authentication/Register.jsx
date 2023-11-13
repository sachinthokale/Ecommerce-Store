import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../Redux/actions/loginAction";
import { clearErrors } from "../../Redux/Slice/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error } = useSelector((state) => state.login);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(clearErrors());
    dispatch(registerAction(name, email, password));
    if (message) {
      toast(message);
      navigate("/");
    }
    if (error) {
      toast(error);
    }
    dispatch(clearErrors());
  };

  return (
    <div className="login">
      <div className="login-form">
        <form action="" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPass ? "text" : "password"}
            value={password}
            placeholder="Enter your Password"
          />
          <div className="show-password" onClick={() => setShowPass(!showPass)}>
            Show password
          </div>
          <button type="submit">CREATE ACCOUNT</button>
        </form>
        <Link to={"/login"}>Click here to login</Link>
      </div>
    </div>
  );
};

export default Register;
