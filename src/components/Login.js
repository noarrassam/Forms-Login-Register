import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../util/GlobalContext";

export default function Login() {
  const context = useContext(GlobalContext);
  const data = context.arrUsers;

  console.log(data);

  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleFormOnChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function onValidation(e) {
    e.preventDefault();
    data.forEach((item) => {
      if (
        formData.username !== item.username ||
        formData.password !== item.pass ||
        formData.username === "" ||
        formData.password === ""
      ) {
        alert("incorrect username or password");
        navigate("./register", { replace: true });
      } else {
        alert("correct");
      }
    });
  }

  return (
    <div className="container border border-dark my-5">
      <div className="row my-5 justify-content-center">
        <div className="col-lg-2">
          <form onSubmit={onValidation}>
            <label className="form-label">
              Username:
              <input
                type="text"
                name="username"
                onChange={handleFormOnChange}
                value={formData.username}
              />
            </label>
            <label className="form-label">
              Password:
              <input
                type="password"
                name="password"
                onChange={handleFormOnChange}
                value={formData.password}
              />
            </label>
            <button
              type="submit"
              name="login"
              value="Login"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
