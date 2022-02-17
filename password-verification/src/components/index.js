import React, { useState } from "react";

function Password() {
  const [input, setInput] = useState("");

  //verify 8 and 72 character long
  const regexChar = /^.{8,72}$/;

  //contains 1 uppercase character
  const regexUc = /[A-Z]/;

  //contains 1 lowercase character
  const regexLc = /[a-z]/;

  //contains at least 1 numeric character
  const regexNum = /\d/;

  //does not match users email address
  const regexEmail =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/

  //initiating a false boolean state with useState
  const [shownPassword, setShownPassword] = useState(false);

  //initiating false state so that when a user clicks outside the checkbox but within the button they are able check the box.
  var [checkBox, setCheckBox] = useState(false);

  //function to toggle shown or hiddent password
  const togglePassword = () => {
    setShownPassword(!shownPassword);
    setCheckBox(!checkBox);
  };

  return (
    <section>
      {/* if/else for showing password text or hiding password text */}
      <h3>Password</h3>
      <input
        type={shownPassword ? "text" : "password"}
        className="passwordInput"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={togglePassword}>
        <span>
          <input type="checkbox" checked={checkBox} onChange={togglePassword} />
          <label>Show</label>
        </span>
      </button>
      <section>
        <ul>
          <li className={input.match(regexChar) ? "valid" : "invalid"}>8-72 characters long</li>
          <li className={input.match(regexUc) ? "valid" : "invalid"}>1 Uppercase Character</li>
          <li className={input.match(regexLc) ? "valid" : "invalid"}>1 Lowercase Character</li>
          <li className={input.match(regexNum) ? "valid" : "invalid"}>1 Number</li>
          <li className={input.match(regexNum) ? "invalid" : "valid"}>Should Not Match Your Email Address</li>
        </ul>
      </section>
    </section>
  );
}

export default Password;
