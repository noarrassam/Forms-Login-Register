import { useContext, useState } from "react";
import GlobalContext from "../util/GlobalContext";

export default function Register(props) {
  const context = useContext(GlobalContext);
  const defaultFormData = {
    fname: "",
    lname: "",
    username: "",
    gender: "",
    address: "",
    email: "",
    pass: "",
    repass: "",
  };
  const [formData, setFormData] = useState(defaultFormData);

  //const [state, setState] = useState([]);

  function handleOnChange(e) {
    var name = e.target.name;
    var val = e.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: val,
      };
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (formData.pass !== formData.repass) {
      alert("Password does not match");
    } else {
      console.log(formData);
      context.arrUsers.push(formData);
      setFormData(defaultFormData);
    }
  }

  return (
    <div className="container border border-dark my-5">
      <div className="row my-3">
        <div className="col-lg-2">
          <form onSubmit={handleOnSubmit}>
            <label> Firstname: </label> <br />
            <input
              type="text"
              required
              name="fname"
              size="15"
              onChange={handleOnChange}
              value={formData.fname}
            />
            <br />
            <label>Lastname:</label>
            <br />
            <input
              type="text"
              required
              name="lname"
              size="15"
              onChange={handleOnChange}
              value={formData.lname}
            />
            <br />
            <label>Username:</label>
            <br />
            <input
              type="text"
              required
              name="username"
              size="15"
              onChange={handleOnChange}
              value={formData.username}
            />
            <br />
            <label>Gender:</label>
            <br />
            <input
              type="radio"
              name="gender"
              onChange={handleOnChange}
              value="Male"
            />{" "}
            Male <br />
            <input
              type="radio"
              name="gender"
              onChange={handleOnChange}
              value="Female"
            />{" "}
            Female <br />
            Email:
            <input
              type="email"
              required
              id="email"
              name="email"
              onChange={handleOnChange}
              value={formData.email}
            />{" "}
            <br />
            Password:
            <input
              type="Password"
              required
              id="pass"
              name="pass"
              onChange={handleOnChange}
              value={formData.pass}
            />{" "}
            <br />
            Re-type password:
            <input
              type="Password"
              required
              id="repass"
              name="repass"
              onChange={handleOnChange}
              value={formData.repass}
            />{" "}
            <br />
            <textarea
              cols="80"
              rows="5"
              placeholder="Enter address"
              name="address"
              onChange={handleOnChange}
              value={formData.address}
              required
              className="my-2"
            ></textarea>{" "}
            <br />
            <button name="submit" value="Login" className="btn btn-primary">
              Submit
            </button>
          </form>{" "}
        </div>
      </div>
    </div>
  );
}
