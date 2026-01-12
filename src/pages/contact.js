import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function Contact() {
  const [condata, setCondata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setCondata({ ...condata, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://192.168.43.54:5000/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(condata),
      });

      const data = await res.json();
      alert(data.message || "Message sent successfully");

      // Clear form
      setCondata({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
      console.error(error);
    }
  };

  return (
    <>
      {/* MAP SECTION */}
      <div className="container-fluid">
        <h2
          className="text-center pt-5"
          style={{ fontSize: "2.5rem", color: "#ff5733" }}
        >
          Contact
        </h2>
        <p
          className="text-center"
          style={{ fontSize: "2rem", color: "#070707ff" }}
        >
          Need Help ? Contact Us
        </p>

        <div className="row">
          <div className="col-12">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.6546831243313!2d77.38262817449126!3d8.136592802320312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f073eb88b3e9%3A0x3a03f779e673c9e1!2sC.S.I%20CHURCH.%20Vyrakudy!5e0!3m2!1sen!2sin!4v1766036722800!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* INFO + FORM */}
      <div className="container p-5">
        {/* INFO BOXES */}
        <div className="row text-center g-3">
          <div
            className="col-lg-6 col-sm-12"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          >
            <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
            <p>Address</p>
            <p>
              3/3 Vyrakudy, Earumbukkadu(Post), Nagercoil <br />
              Kanyakumari
            </p>
          </div>

          <div
            className="col-lg-6 col-sm-12"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          >
            <i className="bi bi-telephone-fill fs-1 text-danger"></i>
            <p>Call Me</p>
            <p>+91 6369564771</p>
          </div>

          <div
            className="col-lg-6 col-sm-12"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          >
            <i className="bi bi-clock fs-1 text-danger"></i>
            <p>Opening Hours</p>
            <p>
              Mon - Sat: 07 am - 10 pm <br />
              Sunday: 10 am - 12 pm
            </p>
          </div>

          <div
            className="col-lg-6 col-sm-12"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          >
            <i className="bi bi-youtube fs-1 text-danger"></i>
            <p>YouTube</p>
            <p>Subscribe for updates</p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="container-fluid mt-5">
          <div
            className="row p-4"
            style={{ boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          >
            <form onSubmit={handlesubmit}>
              <div className="row">
                <div className="col-lg-6 pt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={condata.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-lg-6 pt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={condata.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="pt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  value={condata.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="pt-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  name="message"
                  rows="4"
                  value={condata.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary d-block mx-auto mt-4 px-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
