import React, { useState } from "react";

function PasswordVerify() {
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
      {/* if else for show password text or hide password text */}
      <h3>Password</h3>
      <input
        type={shownPassword ? "text" : "password"}
        className="passwordInput"
      />
      <button onClick={togglePassword}>
        <span>
          <input type="checkbox" checked={checkBox} onChange={togglePassword}/>
          <label>Show</label>
        </span>
      </button>
    </section>
  );
}

export default PasswordVerify;
