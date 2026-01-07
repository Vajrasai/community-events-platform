import { createContext, useContext, useEffect, useState } from "react";
import eventsData from "../data/events.json";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : eventsData.events;
  });

  const [filters, setFilters] = useState({
    type: "",
    location: "",
    date: ""
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    setEvents(prev => [
      ...prev,
      { ...newEvent, id: Date.now() }
    ]);
  };

  const updateEvent = (updatedEvent) => {
    setEvents(prev =>
      prev.map(event =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const deleteEvent = (id) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  const filteredEvents = events.filter(event => {
    return (
      (!filters.type || event.type === filters.type) &&
      (!filters.location ||
        event.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.date || event.date === filters.date)
    );
  });

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        setFilters,
        addEvent,
        updateEvent,
        deleteEvent
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
