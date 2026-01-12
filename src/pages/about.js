import { FaUserTie, FaHome, FaUtensils, FaUsers } from "react-icons/fa";
function About(){
    return(
        <>
        <div className="container">
                <h2 className="text-center " style={{  fontSize: "2.5rem", color: "#ff5733" }}>About Us</h2>
                <p className="text-center " style={{  fontSize: "2rem", color: "#070707ff" }}>Learn more About Us </p>
              <div className="row">
                <div className="col-lg-7 ">
                       <img src="./assets/ambiance.png" alt="ambiance" className="img-fluid rounded"></img>
                       <div className="border border-dark border-4 p-2 border-rounded" style={{position:"relative",top:"10px"}}>
                        <p className="text-center fw-bold fs-2" style={{  color: "#ff5733" }}>Book a Table</p>
                        <p className="text-center fw-bold fs-2 " style={{ }}>+91 6369564771</p>
                       </div>
                </div>
                <div className="col-lg-5">
                         <p className="text-center" style={{  fontSize: "2rem", color: "#ff5733" }}>A Great Welcome </p>
                        <p className="text-center fw-semibold fs-5" style={{  color: "#0b0b0aff" }}>Welcome to <span style={{   color: "#ff5733" }}>HARISH</span>, where flavor meets passion! We believe that every meal should be a celebration — crafted with love, fresh ingredients, and a touch of creativity. Our chefs bring together authentic recipes and modern cooking styles to create dishes that delight your taste buds and warm your heart.</p>
                        
                        <img src="./assets/am.png" alt="back" className="img-fluid rounded"></img>
                        <p className="text-center fw-semibold fs-5" style={{ color: "#ff5733"  }}>At <span style={{   color: "#0f0f0eff" }}>HARISH</span>, we serve more than just food — we serve memories. Whether you’re here for a quick bite, a family dinner, or a romantic evening, our cozy ambiance and friendly staff ensure you always feel at home.</p>
                </div>
              </div>
              </div>
             <div className="container text-center my-5">
              <div className="row gy-4">
                
                {/* Chefs */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <FaUserTie size={50} color="#0c0c0cff" className="mb-3" />
                  <h4 className="fw-bold" style={{  color: "#ff5733" }}>Our Chefs</h4>
                  <p style={{  color: "#0b0b0aff" }}>
                    Meet our talented chefs who craft every dish with passion and perfection.
                  </p>
                </div>
        
                {/* Ambiance */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <FaHome size={50} color="#060606ff" className="mb-3" />
                  <h4 className="fw-bold" style={{  color: "#ff5733" }}>Ambiance</h4>
                  <p style={{  color: "#0b0b0aff" }}>
                    Enjoy a cozy and elegant atmosphere that makes your dining memorable.
                  </p>
                </div>
        
                {/* Dishes */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <FaUtensils size={50} color="#0b0b0bff" className="mb-3" />
                  <h4 className="fw-bold" style={{  color: "#ff5733" }}>Dishes</h4>
                  <p style={{  color: "#0b0b0aff" }}>
                    Experience delicious and healthy recipes made with fresh ingredients daily.
                  </p>
                </div>
        
                {/* Servants */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <FaUsers size={50} color="#181716ff" className="mb-3" />
                  <h4 className="fw-bold" style={{  color: "#ff5733" }}>Our Staff</h4>
                  <p style={{  color: "#0b0b0aff" }}>
                    Our friendly and professional staff ensure you receive the best service.
                  </p>
                </div>
        
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 pb-2">
                <img src="./assets/mid.png" alt="big" className="img-fluid rounded" style={{width:"1500px",height:"350px"}}></img>
                </div>
              </div>
            </div>
        
        </>
    )
}
export default About;