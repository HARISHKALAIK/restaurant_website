import "./home.css"
function Chiefs(){
    return(
        <>
        <div className="container">
        <h2 className="text-center p-3 " style={{  fontSize: "2.5rem", color: "#ff5733" }}>Chefs</h2>
        <p className="text-center " style={{  fontSize: "2rem", color: "#070707ff" }}>Our Professional Chefs </p>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center chef-card" >
               <img src="../assets/chef1.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3" />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}>Chef Thamu</h5>
               <p className="" style={{   color: "#070707ff" }}>Master Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Chef Thamu is a master of South Indian cuisine, known for his dedication and love for traditional flavors. he creates dishes that blend authentic taste.</p>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12 text-center chef-card" >
               <img src="../assets/chef2.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3" />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}>Chef Thamu</h5>
               <p className="" style={{   color: "#070707ff" }}>Master Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Chef Matha Pathi Rangarajan is known for his expertise in authentic South Indian cooking. He focuses on bringing out rich traditional flavors. </p>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12 text-center   chef-card" >
               <img src="../assets/chef3.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3 shadow-lg mb-3 " />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}> Chef Koushik Shankar</h5>
               <p className="" style={{   color: "#070707ff" }}>Mad Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Chef Koushik Shankar, is famous for his creative and experimental cooking style. He blends traditional Indian flavors with modern.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center chef-card" >
               <img src="../assets/chef4.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3" />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}>Chef Venkatesh Bhat</h5>
               <p className="" style={{   color: "#070707ff" }}>Master Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Chef Venkatesh Bhat is known for his exceptional cooking. He creates delicious dishes with perfect balance in taste.</p>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12 text-center chef-card" >
               <img src="../assets/chef5.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3" />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}>Chef Thamu</h5>
               <p className="" style={{   color: "#070707ff" }}>Master Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Kani,  widely known after winning the title in Cooku with Comali Season 2 (CWC). Her calm nature, cooking skills, and friendly attitude won the hearts of viewers.</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center chef-card" >
               <img src="../assets/chef6.png" alt="Chef Thamu" className="img-fluid rounded shadow-lg mb-3" />
               <h5 className="fw-bold" style={{  fontSize: "2rem", color: "#ff5733" }}>Chef Sapthagiri</h5>
               <p className="" style={{   color: "#070707ff" }}>Dancing Chefs</p>
                <p className="text-muted text-center" style={{   color: "#070707ff" }}> Chef Sapthagir is known as the Dancing Chef for his energetic and joyful style in the kitchen. He combines rhythm and creativity to make every dish special. </p>
            </div> */}

        </div>
        </div>
        </>
    )
}
export default Chiefs;