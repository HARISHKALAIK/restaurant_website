import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer(){
    return(
        <>
        <div className="container-fluid">
            <div className="row bg-dark text-center pt-5" style={{color:"white"}}>
                <div className="col-lg-3 col-md-6 col-sm-6 ">
                        <p> <i className="bi bi-geo-alt-fill" style={{ fontSize: "1.5rem", color: "#ff5733" }}></i>Address</p>
                        <p>3/3 Vyrakudy,Earumbukkadu(Post),Nagercoil<br></br>Kannyakumari </p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                        <p><i className="bi bi-telephone-fill" style={{ fontSize: "1.5rem", color: "#ff5733" }}></i> Contact</p>
                        <p><span>Phone:</span>+91 6369564771<br></br><span>Email:</span> kharish23k@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                        <p><i className="bi bi-clock" style={{ fontSize: "1.5rem", color: "#ff5733" }}></i>  Opening Hours</p>
                        <p><span>Mon - Sat:</span> 07 am - 10 pm <br></br><span></span> <span>Sunday:</span> 10 am - 12 pm</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                     
                        <p>Follow Us</p>
                        <a href="https://6blkth1w-3000.inc1.devtunnels.ms/" className="px-2 fs-4 text-light"><i className="bi bi-facebook"></i></a><a href="https://6blkth1w-3000.inc1.devtunnels.ms/" className="px-2 fs-4 text-light"><i className="bi bi-instagram"></i></a><a href="https://6blkth1w-3000.inc1.devtunnels.ms/" className="px-2 fs-4 text-light"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 container" style={{width:"1200px",border:"1px solid white"}}></div>
                <div className="col-lg-12 p-3">
                     
                        <p>© Copyright Hari & Spot All Rights Reserved</p>
                        <p>Developed by <a href="https://6blkth1w-3000.inc1.devtunnels.ms/" style={{textDecoration:"none", color:"white"}}>Harish K</a></p>
                </div>
            </div>
        </div>
        
        
        



        </>
    )
}