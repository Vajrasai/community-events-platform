import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import EventCard from "../components/EventCard";
import { useEvents } from "../context/EventContext";

export default function Home() {
  const { filteredEvents } = useEvents();

  return (
    <>
      <Navbar />
      <div className="container">
        <FilterBar />
        <div className="event-grid">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}
