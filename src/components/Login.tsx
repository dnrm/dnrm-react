import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("Success! ", data);
      },
      onFailure: (data) => {
        console.error("Failure :c ", data);
      },
      newPasswordRequired: (data) => {
        console.log("New password required! ", data);
      },
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
        <label htmlFor="passowrd">Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
