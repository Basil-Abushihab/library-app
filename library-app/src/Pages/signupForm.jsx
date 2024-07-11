import "../styling/signupFormStyle/signup.css";
import { useNavigate } from "react-router-dom";
import User from "../models/userModel.js";
import { Context } from "../Components/contextComponent/context.jsx";
import { useContext } from "react";
function Signup() {
  let navigate = useNavigate();
  const { currentUser, setUser } = useContext(Context);
  function signup(event) {
    event.preventDefault();

    let userData = event.target;

    let user = new User(
      userData.firstName.value,
      userData.lastName.value,
      userData.email.value,
      userData.password.value
    );

    localStorage.setItem("currentUser", JSON.stringify(user));
    setUser(user);
    navigate("/");
  }
  return (
    <div id="signup-page">
      <div id="signup-container">
        <h1>Sign up</h1>
        <form onSubmit={signup}>
          <label className="signup-label">First Name</label>
          <br />

          <input
            className="signup-fields"
            type="text"
            placeholder="Please input your first name"
            name="firstName"
          />
          <br />
          <br />
          <label className="signup-label">Last Name</label>
          <br />

          <input
            className="signup-fields"
            type="text"
            placeholder="Please input your last name"
            name="lastName"
          />
          <br />
          <br />
          <label className="signup-label">Email</label>
          <br />

          <input
            className="signup-fields"
            type="text"
            placeholder="Please input your email"
            name="email"
          />
          <br />
          <br />
          <label className="signup-label">Password</label>
          <br />

          <input
            className="signup-fields"
            type="text"
            name="password"
            placeholder="Please input your password"
          />
          <br />
          <br />
          <div id="button-container">
            <button id="signup-button">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
