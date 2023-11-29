import React from "react";
import Form from "./Form";
const Display = ({ name, place, phone, email, age, occupation }) =>
  // { place },
  //   { phone },
  //   { email },
  //   { age },
  //   { occupation }
  {
    return (
      <div className="bg-displayImg w-3/4 m-10 rounded-2xl bg-center shadow-lg shadow-black bg-cover p-10 pt-24 h-2/4 text-green-500 font-mono ml-24">
        <p>Name:{name}</p>
        <p>Place:{place}</p>
        <p>Phone:{phone}</p>
        <p>Email:{email}</p>
        <p>Age:{age}</p>
        <p>Occupation:{occupation}</p>
      </div>
    );
  };

export default Display;
