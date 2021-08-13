import React, { useState } from "react";

export default function Contact() {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const leaveEmail = (evt) => {
      setErrorEmail("This field cannot be blank")
  };
  const leaveName = (evt) => {
    if (evt.target.value.length <= 0) {
      setErrorName("This field cannot be blank");
    } else setErrorName("");
  };
  const leaveMessage = (evt) => {
    if (evt.target.value.length <= 0) {
      setErrorMessage("This field cannot be blank");
    } else setErrorName("");
  };

  const enterEmail = (evt) => {
    setErrorEmail("");
  };
  const enterName = (evt) => {
    setErrorName("")
  };
  const enterMessage = (evt) => {
    setErrorMessage("")
  };

  const emailValidation = (evt) => {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (regex.test(evt.target.value)) {
      setErrorEmail("Your email is valid.");
    } else {
      setErrorEmail("Your email in invalid.");
    }
  };
  return (
    <div id="contactme" className="contactme">
      <br></br>
      <h1>Contact Me!</h1>
      <hr></hr>
      <form action="">
        <div>
          <label>Name:</label>
          <br></br>
          <input
            type="name"
            id="name"
            placeholder="Name"
            onBlur={leaveName}
            onFocus={enterName}
          ></input>
          <span>{errorName}</span>
        </div>
        <hr></hr>
        <div>
          <label>Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={emailValidation}
            onBlur={leaveEmail}
            onFocus={enterEmail}
          ></input>
          <span>{errorEmail}</span>
        </div>
        <hr></hr>
        <div>
          <label>Message:</label>
          <br></br>
          <textarea
            id="messasge"
            name="message"
            rows="10"
            cols="50"
            onBlur={leaveMessage}
            onFocus={enterMessage}
          ></textarea>
          <span>{errorMessage}</span>
        </div>
        <br></br>
      </form>
    </div>
  );
}
