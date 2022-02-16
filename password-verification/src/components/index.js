import React, { useState } from "react";

function PasswordVerify() {
    //initiating a false boolean state with useState
    const [shownPassword, setShownPassword] = useState(false);

    //function to toggle shown or hiddent password
    const togglePassword = () => {
        setShownPassword(!shownPassword)
    }

  return (
    <section>
        {/* if else for show password text or hide password text */}
      <input type={shownPassword ? "text" : "password" }/>
      <button onClick={togglePassword}> Show Password </button>
    </section>
  );
}

export default PasswordVerify;
