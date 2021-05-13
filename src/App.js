import { Container, Row, Jumbotron, Col } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Qr from "./Components/pages/Qr";

function App() {
  const marginTop = {
    marginTop: "20px",
  };

  return (
    <Router>
      <Route path="/home" exact component={Home} />
      <Route path="/Qr" exact component={Qr} />
    </Router>
  );
}

export default App;
