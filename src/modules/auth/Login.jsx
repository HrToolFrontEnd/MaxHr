import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1>Login form</h1>
      <div className=" d-flex">
        <div className=" m-auto">
          <NavLink className="btn btn-success" to="/hr/dashboard">
            MaxHr
          </NavLink>
        </div>

        <div className=" m-auto">
          <NavLink className="btn btn-warning" to="/manager/dashboard">
            Manager
          </NavLink>
        </div>

        <div className=" m-auto">
          <NavLink className="btn btn-warning" to="/Account/dashboard">
            Account
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
