import '../App.css';
import Navbar from '../Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import Particles from "react-particles-js";
 
function Portfolio() {
  return (
    <div>
      <Particles 
        params={{
          particles: {
            number: {
              value: 35,
              density: {
                enable:true,
                value_area: 850,
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 2.4,
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

export default Portfolio;
