import React from "react";
import "./LoginStyle.css";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-wrapper">
      <div className="main" id="login">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={submitHandler}>
            <label for="chk" aria-hidden="true">
              Sing up
            </label>
            <input type="text" name="txt" placeholder="User name" required="" />
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Sing up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={submitHandler}>
            <label for="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required="" />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>

    /*     <form onSubmit={submitHandler}>
        <div className="form-wrapper" id='login'>
            <h2>LOGIN</h2>
            {/* Error! */
    /* <div className="form-detail">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="form-detail">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <input type="submit" value="LOGIN" id="btn-login"/>
        </div>
    </form> */
  );
};

export default Login;