import "./home.css";

function Events() {
    return (
        <>
            <h2 className="text-center p-5" style={{ fontSize: "2.5rem", color: "#ff5733" }}>
                Events
            </h2>
            

            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6  col-sm-12 event-card ">
                        <img src="../assets/fd.png" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Food Festivals</p>
                        <p className="text-center ">
                            A vibrant celebration featuring multi-cuisine dishes, live counters, 
                            and an energetic festival atmosphere loved by families.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/aa.png" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Live Music Night</p>
                        <p className="text-center ">
                            Enjoy calm evenings with soothing melodies, creating a relaxing mood 
                            for your perfect dinner experience.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/s.png" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Restaurant Interior</p>
                        <p className="text-center ">
                            Beautifully designed interiors with warm lighting and comfortable seating 
                            for a premium dining atmosphere.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/ms.png" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Birthday Celebration</p>
                        <p className="text-center ">
                            Celebrate your special moments with custom decoration, special seating, 
                            and a joyful ambience perfect for surprises.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/sd.jpeg" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Couple Candle Light Dinner</p>
                        <p className="text-center ">
                            A romantic setup with candle lights, soft music, and a peaceful atmosphere 
                            curated for unforgettable moments.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/ssds.jpeg" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Family Get-Together</p>
                        <p className="text-center ">
                            Spacious seating and warm ambience perfect for family gatherings, reunions, 
                            and celebrations.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/fs.jpeg" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Festival Decoration</p>
                        <p className="text-center ">
                            Traditional festival-themed decorations for Diwali, Pongal, New Year, and 
                            other seasonal celebrations.
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 event-card">
                        <img src="../assets/kds.jpeg" alt="bd" className="img-fluid rounded as" />
                        <p className="text-center fw-semibold fs-4 pt-2 eventstext">Kids Birthday Theme</p>
                        <p className="text-center ">
                            Fun and colorful themed decorations with balloons, cartoon characters, 
                            and kid-friendly arrangements.
                        </p>
                    </div>

                </div>
                
            </div>
            <div className="container-fluid">
        {/* <div className="col-lg-12 pt-5">
            <img src="./assets/fffff.png" alt="imm" className="img-fluid rounded"></img>
        </div> */}
        </div>
        </>
    );
}

export default Events;
