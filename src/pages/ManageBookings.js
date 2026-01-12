import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({});

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleEdit = (booking) => {
    setEditId(booking._id);
    setForm(booking);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await fetch(`http://localhost:5000/api/bookings/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setEditId(null);
    fetchBookings();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, { method: "DELETE" });
    fetchBookings();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">🛠 Manage Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings available.</p>
      ) : (
        <>
          {/* ✅ Desktop / Tablet View */}
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b._id}>
                    {editId === b._id ? (
                      <>
                        <td><input name="name" value={form.name} onChange={handleChange} className="form-control" /></td>
                        <td><input name="email" value={form.email} onChange={handleChange} className="form-control" /></td>
                        <td><input name="phone" value={form.phone} onChange={handleChange} className="form-control" /></td>
                        <td><input name="date" value={form.date} onChange={handleChange} className="form-control" /></td>
                        <td><input name="time" value={form.time} onChange={handleChange} className="form-control" /></td>
                        <td><input name="guests" value={form.guests} onChange={handleChange} className="form-control" /></td>
                        <td>
                          <button className="btn btn-success btn-sm" onClick={handleUpdate}>Save</button>
                          <button className="btn btn-secondary btn-sm ms-2" onClick={() => setEditId(null)}>Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{b.name}</td>
                        <td>{b.email}</td>
                        <td>{b.phone}</td>
                        <td>{b.date}</td>
                        <td>{b.time}</td>
                        <td>{b.guests}</td>
                        <td>
                          <button className="btn btn-warning btn-sm" onClick={() => handleEdit(b)}>Edit</button>
                          <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(b._id)}>Delete</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Mobile View */}
          <div className="d-block d-md-none">
            {bookings.map((b) => (
              <div key={b._id} className="card mb-3 shadow-sm">
                <div className="card-body">
                  {editId === b._id ? (
                    <>
                      <input
                        className="form-control mb-2"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                      />
                      <input
                        className="form-control mb-2"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                      />
                      <input
                        className="form-control mb-2"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      <input
                        className="form-control mb-2"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        placeholder="Date"
                      />
                      <input
                        className="form-control mb-2"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        placeholder="Time"
                      />
                      <input
                        className="form-control mb-2"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        placeholder="Guests"
                      />
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-success btn-sm w-50 me-2" onClick={handleUpdate}>Save</button>
                        <button className="btn btn-secondary btn-sm w-50" onClick={() => setEditId(null)}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h5 className="card-title text-primary fw-bold mb-2">{b.name}</h5>
                      <p className="card-text mb-1"><strong>Email:</strong> {b.email}</p>
                      <p className="card-text mb-1"><strong>Phone:</strong> {b.phone}</p>
                      <p className="card-text mb-1"><strong>Date:</strong> {b.date}</p>
                      <p className="card-text mb-1"><strong>Time:</strong> {b.time}</p>
                      <p className="card-text"><strong>Guests:</strong> {b.guests}</p>

                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-warning btn-sm w-50 me-2" onClick={() => handleEdit(b)}>Edit</button>
                        <button className="btn btn-danger btn-sm w-50" onClick={() => handleDelete(b._id)}>Delete</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ManageBookings;
