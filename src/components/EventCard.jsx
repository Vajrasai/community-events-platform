import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {event.date}</p>

      <Link to={`/event/${event.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
