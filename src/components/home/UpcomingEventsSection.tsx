type EventType = {
  id: string;
  title: string;
  date: string;
  description: string;
  time?: string;
  location?: string;
  color?: string;
  image?: string;
};

// Helper to get the start date as a Date object
function getEventStartDate(event: EventType) {
  // Handles "YYYY-MM-DD" or "YYYY-MM-DD to YYYY-MM-DD"
  const [start] = event.date.split(" to ");
  return new Date(start);
}

// Helper to get the end date as a Date object
function getEventEndDate(event: EventType) {
  const parts = event.date.split(" to ");
  return new Date(parts[parts.length - 1]);
}

export default function UpcomingEventsSection({ events }: { events: EventType[] }) {
  const today = new Date();
  const upcomingEvents = events
    .filter(event => getEventEndDate(event) >= today)
    .sort((a, b) => getEventStartDate(a).getTime() - getEventStartDate(b).getTime())
    .slice(0, 3);

  return (
    <section className="py-12 bg-white" aria-label="Upcoming Events">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-deep-brown mb-8 text-center">Upcoming Events</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-cream rounded-xl shadow-spiritual p-6 flex flex-col gap-3 flex-1 min-w-0">
              <div>
                <div className="text-peacock-green font-semibold text-base mb-1">{event.date}</div>
                <div className="text-xl font-bold text-deep-brown mb-1">{event.title}</div>
              </div>
              <div className="text-deep-brown/70 text-base mb-2">{event.description}</div>
              {event.time && <div className="text-xs text-peacock-green mt-auto">{event.time}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
