import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Frame from "./Components/Frame";
import Main from "./Pages/Main";
import Dashboard from "./Pages/Dashboard";
import ReferEarn from "./Pages/ReferEarn";
import WorkingProcess from "./Pages/WorkingProcess";
import FriendEnrolled from "./Pages/FriendEnrolled";
import TermAndCodition from "./Pages/TermAndCodition";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Frame />
      <Dashboard />
      <ReferEarn/>
      <WorkingProcess />
      <FriendEnrolled />
      <TermAndCodition />
    </div>
  );
}

export default App;
