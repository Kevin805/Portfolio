import '../App.css';
import Navbar from '../Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Header';
import Particles from "react-particles-js";
 
function Home() {
  return (
    <div>
      <Particles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable:true,
                value_area: 800,
              }
            },
            shape: {
              type: "triangle",
              stroke: {
                width: 2.2,
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

export default Home;
