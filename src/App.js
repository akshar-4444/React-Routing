import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routess from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routess />
      </BrowserRouter>
    </div>
  );
}

export default App;
