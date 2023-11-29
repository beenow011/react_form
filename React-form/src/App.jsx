import { useState } from "react";
import Form from "./component/Form";
import Display from "./component/Display";
import Github from "./component/github";
function App() {
  return (
    <div className="flex bg-backGroundImg h-[100vh] w-[100vw] bg-cover flex-col">
      <Form />
      <Github />
    </div>
  );
}

export default App;
