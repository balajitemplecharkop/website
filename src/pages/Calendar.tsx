import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, CalendarPlus } from "lucide-react";
import events from "@/data/temple-events.json";
import { Helmet } from 'react-helmet-async';

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const getEventForDay = (day: number | null) => {
    if (!day || typeof day !== 'number') return null;
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(event => event.date === dateStr);
  };

  const upcomingEvents = events.slice(0, 3);

  const dailySchedule = [
    { activity: "Morning Aarti", time: "6:00 AM" },
    { activity: "Bhajans", time: "7:30 AM" },
    { activity: "Annadanam", time: "12:00 PM" },
    { activity: "Evening Aarti", time: "6:00 PM" },
    { activity: "Night Prayers", time: "8:00 PM" },
  ];

  const today = new Date();
  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  return (
    <>
      <Helmet>
        <title>Temple Calendar - Balaji Mandir Charkop</title>
        <meta name="description" content="Stay updated with temple events, festivals, and community programs at Balaji Mandir Charkop." />
        <meta property="og:title" content="Temple Calendar - Balaji Mandir Charkop" />
        <meta property="og:description" content="Stay updated with temple events, festivals, and community programs at Balaji Mandir Charkop." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirupatibalajitemplecharkop.com/calendar" />
      </Helmet>
      <div className="pt-16">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-deep-brown mb-4">Temple Calendar</h2>
              <p className="text-xl text-deep-brown/70 max-w-3xl mx-auto">
                Stay updated with our temple events, festivals, special poojas, and community programs. Never miss a sacred occasion.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Calendar Widget */}
              <div className="lg:col-span-2">
                <Card className="bg-spiritual-beige shadow-spiritual">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-deep-brown">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={prevMonth} className="hover:bg-light-saffron">
                          <ChevronLeft className="h-4 w-4 text-deep-brown" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={nextMonth} className="hover:bg-light-saffron">
                          <ChevronRight className="h-4 w-4 text-deep-brown" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {/* Days of week header */}
                      {daysOfWeek.map((day) => (
                        <div key={day} className="p-3 text-sm font-semibold text-deep-brown">
                          {day}
                        </div>
                      ))}
                      
                      {/* Calendar days */}
                      {getDaysInMonth(currentMonth).map((day, index) => {
                        const event = typeof day === 'number' ? getEventForDay(day) : null;
                        const style: React.CSSProperties = {};
                        if (event && event.color) {
                          style.background = event.color;
                          style.color = '#fff';
                        }
                        const showToday = typeof day === 'number' && isToday(day);
                        return (
                          <div
                            key={index}
                            className={`p-3 text-center transition-spiritual relative ${
                              day
                                ? event
                                  ? "rounded-lg cursor-pointer shadow"
                                  : showToday
                                  ? "border-2 border-peacock-green bg-white text-peacock-green font-bold rounded-lg shadow"
                                  : "text-deep-brown hover:bg-light-saffron rounded-lg cursor-pointer"
                                : "text-deep-brown/40"
                            }`}
                            style={style}
                          >
                            {day}
                            {event && (
                              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                            )}
                            {showToday && !event && (
                              <span className="absolute top-1 right-1 w-2 h-2 bg-peacock-green rounded-full animate-pulse" title="Today"></span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6 lg:space-y-6 lg:col-span-1">
                {/* Upcoming Events */}
                <Card className="bg-cream shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-xl text-deep-brown">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-peacock-green">
                          <span className="text-white font-bold text-sm">{new Date(event.date).getDate()}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-deep-brown">{event.title}</h4>
                          <p className="text-xs text-deep-brown/70">{event.description}</p>
                          <p className="text-xs text-peacock-green">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Daily Schedule */}
                <Card className="bg-cream shadow-spiritual">
                  <CardHeader>
                    <CardTitle className="text-lg text-deep-brown">Daily Schedule</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {dailySchedule.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-deep-brown/70">{item.activity}</span>
                        <span className="text-deep-brown font-medium">{item.time}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Button className="w-full bg-deep-saffron hover:bg-deep-saffron/90 text-white py-3 rounded-xl font-semibold shadow-spiritual">
                  <CalendarPlus className="mr-2 h-4 w-4" />
                  Add to My Calendar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
