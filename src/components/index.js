import React, { useState, useEffect } from "react";

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

  //initializing API variables
  const [userEmail, setUserEmail] = useState(null);
  const [userEmailName, setUserEmailName] = useState(null);

  //API
  var apiUrl = "https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813";

  //API call to verify user email is not included in password
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        //full email
        setUserEmail(data.user.email);
        setUserEmailName(
          //email before '@'
          data.user.email.substring(0, data.user.email.indexOf("@"))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //check if email match
  let checkEmail = (input) => {
    if (input === userEmail || input.includes(userEmailName)) return false;
    return true;
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
          {/* check user email from API and general email regex  */}
          <li
            className={
              checkEmail(input) && !input.match(regexEmail)
                ? "valid"
                : "invalid"
            }
          >
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
