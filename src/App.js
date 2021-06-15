import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Particles from "react-particles-js";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
 
function App() {
  return (
    <div>
      <Router>
        <Route path="/" component= {Portfolio} />
      </Router>
      <Particles 
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable:true,
                value_area: 900,
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 2,
                color: "#f9ab"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
