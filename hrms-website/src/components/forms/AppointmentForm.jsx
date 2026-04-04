import { useState } from "react";

function AppointmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Handle Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Validation
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      alert("Please fill all required fields");
      return;
    }

    setSuccess(true);

    // Reset Form
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        Book an Appointment
      </h2>

      {success && (
        <p className="text-green-600 text-center mb-4">
          ✅ Appointment Booked Successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Message (Optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        ></textarea>

        {/* Gradient Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-[#76C3FF] text-white py-3 rounded-lg hover:opacity-90 transition"
        >
          Book Now
        </button>

      </form>
    </div>
  );
}

export default AppointmentForm;