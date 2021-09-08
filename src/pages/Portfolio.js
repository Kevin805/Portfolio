import '../App.css';
import Navbar from '../Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
 
function Portfolio() {
  return (
    <div>
      <Navbar />
      <Particles 
        params={{
          particles: { number: { value: 12, density: {
                enable:true, value_area: 850
              }
            },
            shape: { type: "circle", stroke: {
                width: 5, color: "#f9ab"
              }}
            }
        }}
      />
    </div>
  );
}

export default Portfolio;
