import { useEvents } from "../context/EventContext";

export default function FilterBar() {
  const { setFilters } = useEvents();

  return (
    <div className="filters">
      <select onChange={e => setFilters(f => ({ ...f, type: e.target.value }))}>
        <option value="">All Types</option>
        <option value="Workshop">Workshop</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
        <option value="Meetup">Meetup</option>
        <option value="Fitness">Fitness</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      <input
        type="date"
        onChange={e => setFilters(f => ({ ...f, date: e.target.value }))}
      />

      <input
        type="text"
        placeholder="Search by location"
        onChange={e => setFilters(f => ({ ...f, location: e.target.value }))}
      />
    </div>
  );
}
