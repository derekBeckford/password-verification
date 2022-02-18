import React, { useState } from "react";

function Password() {
  const [input, setInput] = useState("");

  //verify using regex
  const regexChar = /^.{8,72}$/;
  const regexUc = /[A-Z]/;
  const regexLc = /[a-z]/;
  const regexNum = /\d/;
  const regexEmail =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:|\\)*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:|\\)+)\])/;

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
      <p>Password</p>
      <section className="password">
        <input
          type={shownPassword ? "text" : "password"}
          className="passwordInput"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={togglePassword} className="showPasswordBtn">
          <input
            type="checkbox"
            className="checkbox"
            checked={checkBox}
            onChange={togglePassword}
          />
          <label>Show</label>
        </button>
      </section>
      <section className="criteria">
        <ul>
          {/*Using operational method to set class name to either have a line through the criteria achieved or not*/}
          <li className={input.match(regexChar) ? "valid" : "invalid"}>
            8-72 characters long
          </li>
          <li className={input.match(regexLc) ? "valid" : "invalid"}>
            1 Lowercase Character
          </li>
          <li className={input.match(regexEmail) ? "invalid" : "valid"}>
            Should Not Match Your Email Address
          </li>
          <li className={input.match(regexUc) ? "valid" : "invalid"}>
            1 Uppercase Character
          </li>
          
          <li className={input.match(regexNum) ? "valid" : "invalid"}>
            1 Number
          </li>
          
        </ul>
      </section>
    </section>
  );
}

export default Password;
