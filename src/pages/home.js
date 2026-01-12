import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import { FaUserTie, FaHome, FaUtensils, FaUsers } from "react-icons/fa";
import Menu from "./menus";
import Chiefs from "./chiefs";
import Events from "./events";
 import { Link } from "react-router-dom";
import Contact from "./contact";


function Home() {
  return (
    <>
      <div className="container py-5  ">
        <div className="row align-items-center">
          
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0 left-box box">
            

            <h1 className="fw-bold display-5 mb-2 text-dark" style={{  fontSize: "5rem", color: "#ff5733" }}>
              Enjoy Your Healthy
            </h1>
            <h1 className="fw-bold display-5 mb-3 text" style={{  fontSize: "5rem", color: "#ff5733" }}>
             Delicious Food
            </h1>
            <p className="text-dark mb-4  fs-4" style={{  fontSize: "3rem", color: "#e63946" }}>
              We are a team of talented designers making websites with Bootstrap.
            </p>
            
            <Link className="btn btn-primary rounded-pill text-white px-4 py-2 shadow-sm" to="/book"style={{  color: "#e63946" }} >Book A Table
            </Link>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 text-center box right-box">
            <img
              src="./assets/hero.png"
              alt="Delicious food"
              className="img-fluid float-animate"
            />
          </div>
        </div>
      </div>
      {/* <div className="container">
        <h2 className="text-center " style={{  fontSize: "2.5rem", color: "#ff5733" }}>About Us</h2>
        <p className="text-center " style={{  fontSize: "2rem", color: "#070707ff" }}>Learn more About Us </p>
      <div className="row">
        <div className="col-lg-7 ">
               <img src="./assets/ambiance.png" alt="ambiance" className="img-fluid rounded"></img>
               <div className="border border-dark border-4 p-2 border-rounded" style={{position:"relative",top:"10px"}}>
                <p className="text-center fw-bold fs-2" style={{  color: "#ff5733" }}>Book a Table</p>
                <p className="text-center fw-bold fs-2 " >+91 6369564771</p>
               </div>
        </div>
        <div className="col-lg-5">
                 <p className="text-center" >A Great Welcome </p>
                <p className="text-center fw-semibold fs-5" >Welcome to <span style={{   color: "#ff5733" }}>HARISH</span>, where flavor meets passion! We believe that every meal should be a celebration — crafted with love, fresh ingredients, and a touch of creativity. Our chefs bring together authentic recipes and modern cooking styles to create dishes that delight your taste buds and warm your heart.</p>
                
                <img src="./assets/am.png" alt="back" className="img-fluid rounded"></img>
                <p className="text-center fw-semibold fs-5" style={{ color: "#ff5733"  }}>At <span style={{ color: "#0f0f0eff" }}>HARISH</span>, we serve more than just food — we serve memories. Whether you’re here for a quick bite, a family dinner, or a romantic evening, our cozy ambiance and friendly staff ensure you always feel at home.</p>
        </div>
      </div>
      </div> */}
     <div className="container text-center my-5">
      <div className="row gy-4">
        <h2 className="text-center box left-box " style={{  fontSize: "2.5rem", color: "#ff5733" }}>About Us</h2>
        <p className="text-center box right-box" style={{  fontSize: "2rem", color: "#070707ff" }}>Learn more About Us </p>
        {/* Chefs */}
        <div className="col-lg-3 col-md-6 col-sm-6  p-3 abc box left-box">
          <FaUserTie size={50} color="#141313ff" className="mb-3 ab" />
          <h4 className="fw-bold" style={{  color: "#ff5733" }}>Our Chefs</h4>
          <p style={{  color: "#0b0b0aff" }}>
            Meet our talented chefs who craft every dish with passion and perfection.
          </p>
        </div>

        {/* Ambiance */}
        <div className="col-lg-3 col-md-6 col-sm-6 p-3 abc box left-box">
          <FaHome size={50} color="#060606ff" className="mb-3" />
          <h4 className="fw-bold" style={{  color: "#ff5733" }}>Ambiance</h4>
          <p style={{ color: "#0b0b0aff" }}>
            Enjoy a cozy and elegant atmosphere that makes your dining memorable.
          </p>
        </div>

        {/* Dishes */}
        <div className="col-lg-3 col-md-6 col-sm-6 p-3 abc box right-box">
          <FaUtensils size={50} color="#0b0b0bff" className="mb-3" />
          <h4 className="fw-bold" style={{  color: "#ff5733" }}>Dishes</h4>
          <p style={{  color: "#0b0b0aff" }}>
            Experience delicious and healthy recipes made with fresh ingredients daily.
          </p>
        </div>

        {/* Servants */}
        <div className="col-lg-3 col-md-6 col-sm-6 p-3 abc box right-box">
          <FaUsers size={50} color="#181716ff" className="mb-3" />
          <h4 className="fw-bold" style={{ color: "#ff5733" }}>Our Staff</h4>
          <p style={{  color: "#0b0b0aff" }}>
            Our friendly and professional staff ensure you receive the best service.
          </p>
        </div>

      </div>
    </div>
    <div className="container">
                
              <div className="row">
                <div className="col-lg-7 box left-box">
                       <img src="./assets/ambiance.png" alt="ambiance" className="img-fluid rounded"></img>
                       <div className="border  border-4 p-2 bbox border-rounded" style={{position:"relative",top:"10px"}}>
                        <p className="text-center fw-bold fs-2" >Book a Table</p>
                        <p className="text-center fw-bold fs-2 " style={{ }}>+91 6369564771</p>
                       </div>
                </div>
                <div className="col-lg-5 box right-box">
                         <p className="text-center" style={{  fontSize: "2rem", color: "#ff5733" }}>A Great Welcome </p>
                        <p className="text-center fw-semibold fs-5" style={{  color: "#0b0b0aff" }}>Welcome to <span style={{   color: "#ff5733" }}>HARISH</span>, where flavor meets passion! We believe that every meal should be a celebration — crafted with love, fresh ingredients, and a touch of creativity. Our chefs bring together authentic recipes and modern cooking styles to create dishes that delight your taste buds and warm your heart.</p>
                        
                        <img src="./assets/am.png" alt="back" className="img-fluid rounded"></img>
                        <p className="text-center fw-semibold fs-5" style={{ color: "#ff5733"  }}>At <span style={{   color: "#0f0f0eff" }}>HARISH</span>, we serve more than just food — we serve memories. Whether you’re here for a quick bite, a family dinner, or a romantic evening, our cozy ambiance and friendly staff ensure you always feel at home.</p>
                </div>
              </div>
              </div>
   <Menu />
   <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <img src="./assets/d2.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{  color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src="./assets/d1.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{  color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src="./assets/b4.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{  color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <img src="./assets/b3.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{ color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src="./assets/l2.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{  color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src="./assets/l1.png" className="img-fluid float-animate" alt="name"></img>
                      <p className="text-center fs-5 pt-2"  style={{  color: "#ff5733" }}>Idly-Set</p>
                      <p className="text-center" style={{   color: "#070707ff" }}>A traditional South Indian breakfast with soft, steamed rice cakes served with sambar & coconut chutney ⭐⭐⭐⭐☆ (4.5/5).</p>
                    </div>
                </div>
        </div>

      <Events/>
      <Chiefs/>
      <Contact/>
    </>
  );
}

export default Home;
