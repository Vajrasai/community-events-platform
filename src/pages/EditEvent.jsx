import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";
import { useState } from "react";

export default function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, updateEvent } = useEvents();

  const existingEvent = events.find(e => e.id === Number(id));

  const [form, setForm] = useState(existingEvent);
  const [error, setError] = useState("");

  if (!existingEvent) {
    return <p className="container">Event not found</p>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required validation
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

    // Date validation
    const selectedDate = new Date(form.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setError("Event date must be today or a future date");
      return;
    }

    updateEvent(form);
    navigate(`/event/${form.id}`);
  };

  return (
    <div className="container">
      <h1>Edit Event</h1>

      {error && <p className="error">{error}</p>}

      <form className="event-form" onSubmit={handleSubmit}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
        >
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
          value={form.date}
          onChange={handleChange}
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
        />

        <input
          name="host"
          value={form.host}
          onChange={handleChange}
        />

        <textarea
          name="description"
          rows="4"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="btn primary">
          Update Event
        </button>
      </form>
    </div>
  );
}
