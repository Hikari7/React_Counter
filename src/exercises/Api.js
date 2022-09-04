import React, { useState, useEffect } from "react";
import axios from "axios";

const GetInfo = () => {
  const [name, setName] = useState("octocat");
  const [img, setImg] = useState();
  const ids = [
    "Hikari7",
    "octocat",
    "google",
    "facebook",
    "BuzzFeed",
    "LinkedIn",
    "Twitter",
    "aws",
  ];
  const [id, setId] = useState("octocat");
  const getRandomId = () => {
    const newId = ids[Math.floor(Math.random() * ids.length)];
    setId(newId);
  };

  //useEffectでAPIを呼んであげる

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setImg(res.data.avatar_url);
        // console.log(res);
        // console.log(res.data.name);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [id]);
  return (
    <figure className="bg-slate-100 rounded-xl p-2 my-9 w-64 dark:bg-slate-800 text-slate-50  mx-auto justify-center">
      <div className="container mx-auto my-10 flex justify-center">
        <div>
          <p>
            <div>
              <p className="text-sky-500 dark:text-sky-400">
                <div> {name} </div>
              </p>
              is the user name of
              <p className="text-sky-500 dark:text-sky-400">
                <div>{id} </div>
              </p>
              <p>
                <div>on Github.</div>
              </p>
            </div>
          </p>
          <img
            className="w-36 h-36 my-5 rounded-full mx-auto mx-auto"
            src={img}
            alt="user img"
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={getRandomId}
          >
            Change the ID
          </button>
        </div>
      </div>
    </figure>
  );
};

export default GetInfo;
