import React from "react";

const Form = () => {
  return (
    <div className="bg-formImg bg-cover bg-center h-2/3 m-6 w-[50vw] ml-40 p-6 mt-11 rounded-xl shadow-xl shadow-purple-950  hover:shadow-orange-300">
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
            className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-16 w-[30vw] h-10 rounded-xl p-6 shadow-sm  font-mono "
          />
        </div>
        <button className="w-32 h-10 bg-purple-500 rounded-2xl mt-5 text-white pb-1 shadow-xl shadow-blue-500 hover:shadow-orange-300 hover:bg-purple-600 hover:ring-2">
          Done
        </button>
      </form>
    </div>
  );
};

export default Form;
