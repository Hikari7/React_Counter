import React, { useState } from "react";

//Youtubeのチュートリアルバージョン

function SignUpTutorial() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };

  const handleLasttNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefaule();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-violet-200 min-h-screen flex flex-col">
      <form className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full "
          onSubmit={handleSubmit}
        >
          <h1 className="mb-6 text-3xl text-center">Sign up</h1>
          {submitted && valid ? (
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
            onChange={handleFirstNameInputChange}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="firstname"
            placeholder="First Name"
            value={values.firstName}
          />

          {submitted && !values.firstName ? (
            <span className="text-rose-500">Please enter your first name</span>
          ) : null}

          <input
            onChange={handleLasttNameInputChange}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="lastname"
            placeholder="Last Name"
            value={values.lastName}
          />

          {submitted && !values.lastName ? (
            <span className="text-rose-500">Please enter your last name</span>
          ) : null}

          <input
            onChange={handleEmailInputChange}
            type="text"
            className="block border border-grey-light w-full p-3 rounded mt-4"
            name="email"
            placeholder="Email"
            value={values.email}
          />

          {submitted && !values.email ? (
            <span className="text-rose-500">Please enter your email</span>
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

export default SignUpTutorial;
