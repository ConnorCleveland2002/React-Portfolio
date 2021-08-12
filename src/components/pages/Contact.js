import React from "react";

export default function Contact() {
  return (
    <div id="contactme" className="contactme">
      <br></br>
      <h1>Contact Me!</h1>
      <hr></hr>
      <form action="">
        <div onMouseLeave="leaveField()">
          <label for="name">Name:</label>
          <br></br>
          <input type="name" id="name" placeholder="Name"></input>
          <div id="field" className="field"><p>Enter Name Above</p></div>
        </div>
        <hr></hr>
        <div onMouseLeave="leaveField()">
          <label for="email">Email:</label>
          <br></br>
          <input type="email" id="email" placeholder="Email"></input>
          <span type="email" id="emailSpan"></span>
        </div>
        <hr></hr>
        <div onMouseLeave="leaveField()">
          <label for="message">Message:</label>
          <br></br>
          <textarea
            id="messasge"
            name="message"
            rows="10"
            cols="50"
            required
          ></textarea>
          <span></span>
        </div>
        <br></br>
      </form>
    </div>
  );
}
