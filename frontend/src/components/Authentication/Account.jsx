import { useEffect } from "react";
import "./Account.css";
import WalletIcon from "@mui/icons-material/Wallet";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutAction } from "../../Redux/actions/loginAction";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { clearUserError } from "../../Redux/Slice/getUserSlice";
const Account = () => {
  const dispatch = useDispatch();
  const { user, message, isAuthenticated, error } = useSelector(
    (state) => state.userData
  );
  console.log(user);
  useEffect(() => {
    dispatch(clearUserError());
    const token = localStorage.getItem("token");
    dispatch(getUser(token));
    if (message) {
      toast(message);
    }
    if (error) {
      toast(error);
    }
    dispatch(clearUserError());
  }, []);
  const logoutHandler = () => {
    dispatch(logoutAction());
    toast(error);
  };

  if (isAuthenticated) {
    return (
      <div className="account">
        <div className="account-heading">
          <h1>Hi, {user.name}</h1>

          <p>Thanks for being a customer from {user.createdAt} years</p>
        </div>
        <div className="account-main">
          <div className="wallet">
            <div className="wallet-heading">
              <WalletIcon />
              <h3>Wallet</h3>
            </div>
            <div className="wallet-desc">
              <p>
                Manage your payment methods and learn about our rewards card,
                payment tools, and more
              </p>
            </div>
            <button>Add Payment Method</button>
          </div>
          <div className="purchase-history">
            <div className="wallet-heading">
              <WalletIcon />
              <h3>Purchase History</h3>
            </div>
            <div className="wallet-desc">
              <p>
                Track your order status, start a return, or view purchase
                history and receipts
              </p>
            </div>
          </div>
          <div className="manage-account">
            <div className="wallet-heading">
              <WalletIcon />
              <h3>Manage Account</h3>
            </div>
          </div>
        </div>
        <button onClick={logoutHandler}>LOGOUT</button>
      </div>
    );
  } else {
    return (
      <div className="account-login">
        <Link to={"/login"}>
          <button>LOGIN</button>
        </Link>
      </div>
    );
  }
};

export default Account;
