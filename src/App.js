import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Frame from "./Components/Frame";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Frame />
      <Main />
    </div>
  );
}

export default App;
