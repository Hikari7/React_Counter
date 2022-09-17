import React, { useState, useEffect } from "react";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState(false); //successの表示
  const [valid, setValid] = useState(false); //valueの仮の変数を置いとく
  const [match, setMatch] = useState(false); //matchの仮の変数を置いとく
  const [num, setNum] = useState(false); //matchの仮の変数を置いとく

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      //それぞれのstateがvalueになってたら
      firstName &&
      lastName &&
      email &&
      password &&
      confirm
    ) {
      setValid(true); //validをtrueにする
    }
    if (confirm === password) {
      setMatch(true);
    }

    if (password.length > 4) {
      setNum(true)
    }

    setSuccess(true);
  };

  return (
    <div className="bg-violet-200 min-h-screen flex flex-col">
      <form
        className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
        onSubmit={handleSubmit}
      >
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-6 text-3xl text-center">Sign up</h1>
          {success && valid && match && num ? ( //successとvalidがtrueだったら"sign up successfully"を出す
            <div className="flex py-3 mb-4 justify-center">
              <svg
                className="w-6 h-6 fill-current text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
              </svg>
              <h2 className="font-semibold text-gray-800">
                Success! Thank you for registering!
              </h2>
            </div>
          ) : null}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="firstname"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {success && !firstName ? ( //firstNameがsuccessとfalseだったらspanが表示される,trueだったらnull
            <span className="text-rose-500">Please enter your first name</span>
          ) : null}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="lastname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {success && !lastName ? (
            <span className="text-rose-500">Please enter your last name</span>
          ) : null}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {success && !email ? (
            <span className="text-rose-500">Please enter your email</span>
          ) : null}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {success && !password ? (
            <span className="text-rose-500">Please enter your password</span>
          ) : null}
          {success && !num ? (
            <span className="text-rose-500">
              Password must be at least 5 characters
            </span>
          ) : null}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="confirm_password"
            value={confirm}
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
          />
          {success && !confirm ? (
            <span className="text-rose-500">
              Please enter your confirm password
            </span>
          ) : null}
          <br></br>
          {success && !match ? (
            <span className="text-rose-500">The password doesn't match</span>
          ) : null}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-red-300 text-white hover:bg-red-400 focus:outline-none my-4"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
