import "./Navi.css";
import { Link, Routes, Route } from "react-router-dom";
import Break from "./break";
import Lunch from "./lunch";
import Dinner from "./dinner";

function Menu() {
  return (
    <>
      <div className="container pt-5">
        <h2
          className="text-center"
          style={{
            
            fontSize: "2.5rem",
            color: "#ff5733",
          }}
        >
          Our Menu
        </h2>

        <p
          className="text-center"
          style={{
            


            fontSize: "2rem",
            color: "#070707ff",
          }}
        >
          Check Our Harish Spot Menus
        </p>

        {/* Buttons for Menu Selection */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center gap-4 flex-wrap mb-4">
            <Link
              to="break"
              className="btn text-center"
              
            >
              Breakfast
            </Link>

            <Link
              to="lunch"
              className="btn text-center"
              
            >
              Lunch
            </Link>

            <Link
              to="dinner"
              className="btn text-center"
              
            >
              Dinner
            </Link>
          </div>
        </div>

        {/* Nested Routes inside Menu */}
        <div className="text-center mt-4">
          <Routes>
            <Route path="break" element={<Break />} />
            <Route path="lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Menu;
