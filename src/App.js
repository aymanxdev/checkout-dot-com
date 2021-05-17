import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import Message from "./Components/Message";
import Students from "./Components/Students";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/Students" component={Students} />
          <Route path="/Message" component={Message} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
