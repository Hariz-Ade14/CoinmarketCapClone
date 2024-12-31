import { Input } from "@/Components/ui/input";
import { PrimaryButton } from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCredentialverification = () => {
        if(!name || !password || !email) {
            setErrorMessage("Credentials cannot be empty") ;  
        }
  }

  const handleSignUp = () => {
        handleCredentialverification();
        setName("");
        setPassword("");
        setEmail("");
  }
  return (
    <div className="flex items-center jutify-center w-full">
      <div className="flex flex-col gap-10 w-full lg:w-[50%] mx-auto p-5 h-screen">
        <h3 className="text-black text-center font-bold text-[35px]">
          Sign up
        </h3>

        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage("");
          }}
          type="text"
          placeholder="Email"
        />
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrorMessage("");
          }}
          type="email"
          placeholder="Username"
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage("");

          }}
          type="password"
          placeholder="Password"
        />
        {errorMessage && <small className="text-red">{errorMessage}</small>}
        <PrimaryButton
          text="Sign up"
          type="button"
          customStyles="!text-white !bg-blue-500 font-semibold !py-3 !rounded"
          onClick={handleSignUp}
        />
        <p className="text-center flex gap-2 items-center justify-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center jutify-center w-full">
      <div className="flex flex-col gap-10 w-full lg:w-[50%] mx-auto p-5 h-screen">
        <h3 className="text-black text-center font-bold text-[35px]">Login</h3>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <PrimaryButton
          text="Login"
          type="button"
          customStyles="!text-white !bg-green-500 font-semibold !py-3 !rounded"
        />
        <p className="text-center flex gap-2 items-center justify-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
