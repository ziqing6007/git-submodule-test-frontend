import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Routes>
              <Route path="/test" element={<Test />} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
