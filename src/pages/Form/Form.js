import { useState } from "react";

function Form(props) {
  const userNameRegex = /^\S*$/;
  const emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userName: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
    userNameError: null,
    confirmPasswordError: null,
  });

  const handleRegisteration = (e) => {
    e.preventDefault();
    let needValidation = 0;
    for (const key in errors) {
      if (errors[key] !== "") {
        ++needValidation;
      }
    }
    if (needValidation > 0) {
      alert("complete data with valid info please");
    } else {
      localStorage.setItem("auth", user.name);
      props.history.push(`/favourite`);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    name === "confirmPassword"
      ? setConfirmPassword(value)
      : setUser({
          ...user,
          [name]: value,
        });
    validateForm(name, value);
  };

  const validateForm = (name, value) => {
    let error = "";

    if (name === "name") {
      error = value.length === 0 ? "this field is required" : "";
      setErrors({
        ...errors,
        nameError: error,
      });
    }

    if (name === "userName") {
      error =
        value.length === 0
          ? "this field is required"
          : !userNameRegex.test(value)
          ? "user name shouldn't have space"
          : "";
      setErrors({
        ...errors,
        userNameError: error,
      });
    }

    if (name === "email") {
      error =
        value.length === 0
          ? "this field is required"
          : !emailRegex.test(value)
          ? "email not valid"
          : "";
      setErrors({
        ...errors,
        emailError: error,
      });
    }

    if (name === "password") {
      error =
        value.length === 0
          ? "this field is required"
          : !passwordRegex.test(value)
          ? "password should have at least 6 charachters , one capital litter , one number and one of those characters !@#$%^&* "
          : "";
      setErrors({
        ...errors,
        passwordError: error,
      });
    }

    if (name === "confirmPassword") {
      error =
        value.length === 0
          ? "this field is required"
          : !passwordRegex.test(value)
          ? "password should have at least 6 charachters , one capital litter , one number and one of those characters !@#$%^&* "
          : value !== user.password
          ? "passwords not matched"
          : "";
      setErrors({
        ...errors,
        confirmPasswordError: error,
      });
    }
  };

  return (
    <div className="col-8 mx-auto mt-5">
      {props.location.state?.from?.pathname == "/favourite" && (
        <div className="alert alert-danger mt-3" role="alert">
          you have to login first
        </div>
      )}
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.nameError ? "border-danger" : ""
            }`}
            id="name"
            name="name"
            aria-describedby="nameHelp"
            value={user.name}
            onChange={(ev) => handleChange(ev)}
          />
          <small className="text-danger">{errors.nameError}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.userNameError ? "border-danger" : ""
            }`}
            id="userName"
            name="userName"
            aria-describedby="userNameHelp"
            value={user.userName}
            onChange={(ev) => handleChange(ev)}
          />
          <small className="text-danger">{errors.userNameError}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              errors.emailError ? "border-danger" : ""
            }`}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={(ev) => handleChange(ev)}
          />
          <small className="text-danger">{errors.emailError}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.passwordError ? "border-danger" : ""
            }`}
            id="password"
            name="password"
            value={user.password}
            onChange={(ev) => handleChange(ev)}
          />

          <small className="text-danger">{errors.passwordError}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPasswordError ? "border-danger" : ""
            }`}
            id="confirmPassword"
            name="confirmPassword"
            aria-describedby="confirmPasswordHelp"
            value={confirmPassword}
            onChange={(ev) => handleChange(ev)}
          />
          <small className="text-danger">{errors.confirmPasswordError}</small>
        </div>

        <button
          className="btn btn-primary"
          onClick={(event) => handleRegisteration(event)}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
