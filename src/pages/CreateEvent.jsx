import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";

export default function CreateEvent() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "",
    date: "",
    location: "",
    host: "",
    description: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.type ||
      !form.date ||
      !form.location ||
      !form.host ||
      !form.description
    ) {
      setError("All fields are required");
      return;
    }
  const selectedDate = new Date(form.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    setError("Event date must be today or a future date");
    return;
  }
    addEvent(form);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Create / Host an Event</h1>

      {error && <p className="error">{error}</p>}

      <form className="event-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Event Title"
          onChange={handleChange}
        />

        <select name="type" onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Workshop">Workshop</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
          <option value="Meetup">Meetup</option>
          <option value="Fitness">Fitness</option>
          <option value="Entertainment">Entertainment</option>
        </select>

<input
  type="date"
  name="date"
  min={new Date().toISOString().split("T")[0]}
  onChange={handleChange}
/>

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          name="host"
          placeholder="Host Name"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          onChange={handleChange}
        />

        <button type="submit" className="btn primary">
          Create Event
        </button>
      </form>
    </div>
  );
}
