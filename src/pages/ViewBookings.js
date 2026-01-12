import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ManageBookings from "./ManageBookings";

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">📋 All Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings yet.</p>
      ) : (
        <>
          {/* For large screens - Table layout */}
          <div className="table-responsive d-none d-md-block">
            <table className="table table-bordered table-hover align-middle text-center shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, index) => (
                  <tr key={index}>
                    <td>{b.name}</td>
                    <td>{b.email}</td>
                    <td>{b.phone}</td>
                    <td>{b.date}</td>
                    <td>{b.time}</td>
                    <td>{b.guests}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* For small screens - Card layout */}
          <div className="d-block d-md-none">
            {bookings.map((b, index) => (
              <div key={index} className="card mb-3 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary fw-bold mb-2">
                    {b.name}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Email:</strong> {b.email}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Phone:</strong> {b.phone}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Date:</strong> {b.date}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Time:</strong> {b.time}
                  </p>
                  <p className="card-text">
                    <strong>Guests:</strong> {b.guests}
                  </p>
                </div>
              </div>
            ))}
          </div> 
          <ManageBookings/>
        </>
      )}
    </div>
    
  );
}

export default ViewBookings;
