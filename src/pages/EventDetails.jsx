import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { events, deleteEvent } = useEvents();

  const event = events.find(e => e.id === Number(id));

  if (!event) {
    return (
      <div className="container">
        <h2>Event not found</h2>
      </div>
    );
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );

    if (confirmDelete) {
      deleteEvent(event.id);   // ✅ USED
      navigate("/");
    }
  };

  return (
    <div className="container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>

      <p><strong>Type:</strong> {event.type}</p>
      <p><strong>Host:</strong> {event.host}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>

      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <button className="btn primary" onClick={() => navigate("/rsvp")}>
          RSVP / Join
        </button>

        <button
          className="btn"
          onClick={() => navigate(`/edit-event/${event.id}`)}
        >
          Edit Event
        </button>

        <button className="btn danger" onClick={handleDelete}>
          Delete Event
        </button>
      </div>
    </div>
  );
}
