import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  function handleFormOnChange(e) {
    setFormData((prevState) => {
      var name = e.target.name;
      var value = e.target.value;
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function onValidation(e) {
    e.preventDefault();

    if (
      (formData.username !== props.username &&
        formData.password !== props.password) ||
      (formData.username === "" && formData.password === "")
    ) {
      alert("incorrect username or password");
      navigate("./register", { replace: true });
    } else {
      alert("correct");
    }
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
