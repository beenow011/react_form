import React from "react";
import Display from "./Display";
import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("Bupendra Jogi");
  const [place, setPlace] = useState("America");
  const [phone, setPhone] = useState("69696969");
  const [email, setEmail] = useState("nambatadobupendrajogi@america.com");
  const [age, setAge] = useState("45");
  const [occupation, setOccupation] = useState("travelling");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setPlace(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setPhone(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setAge(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setOccupation(event.target.value);
  };
  return (
    <div className="bg-formImg bg-cover bg-center h-2/3 m-6 w-[50vw] ml-40 p-6 mt-11 rounded-xl shadow-xl shadow-purple-950  hover:shadow-orange-300 flex ">
      <h1 className="text-purple-600 font-mono mb-10 text-5xl">
        Chad's biodata
      </h1>
      <form className="flex flex-col items-center justify-center mt-16">
        <div className="mb-3 flex">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">Name</label>
          </div>
          <input
            type="text"
            name="Name"
            placeholder="Bupendra Jogi"
            // value={name} // Value is set to the state variable
            onChange={handleInputChange}
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono  "
          />
        </div>
        <div className="mb-3 flex">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">Place</label>
          </div>
          <input
            type="text"
            name="Place"
            placeholder="America"
            onChange={handleInputChange2}
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>
        <div className="mb-3 flex">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">Phone</label>
          </div>
          <input
            type="text"
            name="Phone"
            placeholder="69696969"
            onChange={handleInputChange3}
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>
        <div className="mb-3 flex">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">Email</label>
          </div>
          <input
            type="text"
            name="Email"
            onChange={handleInputChange4}
            placeholder="nambatadobupendrajogi@america.com"
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>
        <div className="mb-3 flex">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">age</label>
          </div>

          <input
            type="number"
            name="age"
            placeholder="45"
            onChange={handleInputChange5}
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>

        <div className="mb-3 flex ">
          <div className="mr-10 w-11 pt-3 ">
            <label className="text-purple-400 ">Occupation</label>
          </div>

          <input
            type="text"
            name="occupation"
            placeholder="travelling"
            onChange={handleInputChange6}
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>
      </form>
      <Display
        name={name}
        place={place}
        phone={phone}
        email={email}
        age={age}
        occupation={occupation}
      />
    </div>
  );
};

export default Form;
