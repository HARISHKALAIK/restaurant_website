import React, { useState } from "react";

function BookTable() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      guests: Number(formData.guests),
    };

    try {
      const res = await fetch("http://192.168.43.54:5000/api/Bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "✅ Table booked successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
        });
      } else {
        alert(data.message || "❌ Booking failed");
      }
    } catch (error) {
      alert("❌ Server error");
      console.error(error);
    }
  };

  return (
    <div className="container mt-4 pb-5">
      <h2 className="text-center mb-3">Book a Table</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
        <input className="form-control mb-2" name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
        <input className="form-control mb-2" name="phone" type="tel" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
        <input className="form-control mb-2" name="date" type="date" required value={formData.date} onChange={handleChange} />
        <input className="form-control mb-2" name="time" type="time" required value={formData.time} onChange={handleChange} />
        <input className="form-control mb-2" name="guests" type="number" min="1" placeholder="Guests" required value={formData.guests} onChange={handleChange} />

        <button className="btn btn-primary w-100" type="submit">
          Book Table
        </button>
      </form>
    </div>
  );
}

export default BookTable;
