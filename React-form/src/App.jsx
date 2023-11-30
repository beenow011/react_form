import { useState } from "react";
import Form from "./component/Form";
import Display from "./component/Display";
import Github from "./component/github";
function App() {
  return (
    <div className="flex bg-backGroundImg md:h-[100vh] md:w-[100vw] sm:h-full sm:w-full bg-cover flex-col">
      <Form />
    </div>
  );
}

export default App;
