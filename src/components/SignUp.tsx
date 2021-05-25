import { useState } from "react";
import UserPool from "../UserPool";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], [], (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
