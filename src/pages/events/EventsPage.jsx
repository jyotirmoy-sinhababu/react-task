import React, { useState, useEffect } from 'react';
import Navbar from '../../components/nav/Navbar';
import EventCard from '../../components/eventCard/EventCard';
import { PlusCircle, Calendar, MapPin, Trash2 } from 'lucide-react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isViewEventOpen, setIsViewEventOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [timeFilter, setTimeFilter] = useState('all');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Load events from localStorage on initial render
  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date) return;

    const event = {
      id: crypto.randomUUID(),
      ...newEvent,
    };

    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: '',
      image: null,
    });
    setPreviewImage(null);
    setIsAddEventOpen(false);
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setNewEvent({ ...newEvent, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const viewEventDetails = (event) => {
    setCurrentEvent(event);
    setIsViewEventOpen(true);
  };

  const getFilteredEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    return events
      .filter((event) => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);

        switch (timeFilter) {
          case 'today':
            return eventDate.getTime() === today.getTime();
          case 'tomorrow':
            return eventDate.getTime() === tomorrow.getTime();
          case 'thisWeek':
            return eventDate >= today && eventDate < nextWeek;
          case 'thisMonth':
            return eventDate >= today && eventDate < nextMonth;
          default:
            return true;
        }
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const filteredEvents = getFilteredEvents();

  return (
    <>
      <Navbar />
      <section>
        <div className='flex justify-center items-center flex-col mt-[3%]'>
          <p className='text-[#333] text-[1.9rem] font-semibold text-center  font-abril'>
            We Helped Communities Connect & Flourish
          </p>
          <span className='text-transparent bg-gradient-to-r from-[#69caeb] to-black bg-clip-text block mt-2 text-[1.9rem] font-vollkorn '>
            ✦ Upcoming Events
          </span>
          <div className='mt-[2%]'>
            <button
              className='border w-[227px] h-[41px] font-vollkorn'
              onClick={() => setIsAddEventOpen(true)}
            >
              Create new event!
            </button>
          </div>
        </div>
      </section>
      <section className=' flex flex-wrap justify-center items-center mt-[3%] gap-4 sm:mx-0 mx-1'>
        <button
          onClick={() => setTimeFilter('all')}
          className={`px-4 py-2 rounded-md ${
            timeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          All Events
        </button>
        <button
          onClick={() => setTimeFilter('today')}
          className={`px-4 py-2 rounded-md ${
            timeFilter === 'today' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Today
        </button>
        <button
          onClick={() => setTimeFilter('tomorrow')}
          className={`px-4 py-2 rounded-md ${
            timeFilter === 'tomorrow' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Tomorrow
        </button>
        <button
          onClick={() => setTimeFilter('thisWeek')}
          className={`px-4 py-2 rounded-md ${
            timeFilter === 'thisWeek' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          This Week
        </button>
        <button
          onClick={() => setTimeFilter('thisMonth')}
          className={`px-4 py-2 rounded-md ${
            timeFilter === 'thisMonth'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200'
          }`}
        >
          This Month
        </button>
      </section>
      <section>
        <EventCard />
      </section>
      <section className='mx-[3%] mt-[3%]'>
        {filteredEvents.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-500'>
              No events found. Add your first event!
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className=' animate-fadeInUp bg-white rounded-lg shadow-md flex flex-col gap-0 w-[19rem] h-[455px] opacity-0 overflow-hidden p-2 transition-transform duration-300 ease-out'
              >
                {event.image && (
                  <div className='h-48 overflow-hidden'>
                    <img
                      src={event.image || '/placeholder.svg'}
                      alt={event.title}
                      className='w-[18rem] h-[11rem] rounded'
                    />
                  </div>
                )}
                <div className='p-4'>
                  <div className='flex justify-between items-start'>
                    <h3 className='font-[600] text-[1.25rem] font-vollkorn'>
                      {event.title}
                    </h3>
                    <button
                      className='text-red-500 p-1'
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className='h-4 w-4' />
                    </button>
                  </div>
                  <div className='flex items-center text-sm text-gray-500 mt-2'>
                    <Calendar className='mr-2 h-4 w-4' />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  {event.location && (
                    <div className='flex items-center text-sm text-gray-500 mt-1'>
                      <MapPin className='mr-2 h-4 w-4' />
                      <p className='text-[500] text-[1rem]'>{event.location}</p>
                    </div>
                  )}
                  {event.description && (
                    <p className='text-[500] text-[.8rem]'>
                      {event.description}
                    </p>
                  )}
                  <div className='flex justify-center items-center mt-7 bg-slate-900 mx-1 h-[41px] rounded'>
                    <button
                      className='text-white text-[0.9rem] font-abril'
                      onClick={() => viewEventDetails(event)}
                    >
                      Event Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Event Modal */}
        {isAddEventOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg w-full max-w-md'>
              <div className='p-4 border-b'>
                <h2 className='text-xl font-semibold'>Add New Event</h2>
              </div>
              <form onSubmit={handleAddEvent}>
                <div className='p-4 space-y-4'>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='title'
                    >
                      Title
                    </label>
                    <input
                      id='title'
                      name='title'
                      value={newEvent.title}
                      onChange={handleInputChange}
                      placeholder='Event title'
                      className='w-full p-2 border rounded'
                      required
                    />
                  </div>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='date'
                    >
                      Date
                    </label>
                    <input
                      id='date'
                      name='date'
                      type='date'
                      value={newEvent.date}
                      onChange={handleInputChange}
                      className='w-full p-2 border rounded'
                      required
                    />
                  </div>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='location'
                    >
                      Location
                    </label>
                    <input
                      id='location'
                      name='location'
                      value={newEvent.location}
                      onChange={handleInputChange}
                      placeholder='Event location'
                      className='w-full p-2 border rounded'
                    />
                  </div>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='description'
                    >
                      Description
                    </label>
                    <textarea
                      id='description'
                      name='description'
                      value={newEvent.description}
                      onChange={handleInputChange}
                      placeholder='Event description'
                      rows={3}
                      className='w-full p-2 border rounded'
                    />
                  </div>
                  <div>
                    <label
                      className='block text-sm font-medium mb-1'
                      htmlFor='image'
                    >
                      Event Image
                    </label>
                    <input
                      id='image'
                      name='image'
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                      className='w-full p-2 border rounded'
                    />
                    {previewImage && (
                      <div className='mt-2 h-40 overflow-hidden rounded'>
                        <img
                          src={previewImage || '/placeholder.svg'}
                          alt='Preview'
                          className='w-full h-full object-cover'
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className='p-4 border-t flex justify-end gap-2'>
                  <button
                    type='button'
                    className='px-4 py-2 border rounded'
                    onClick={() => setIsAddEventOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='px-4 py-2 bg-blue-600 text-white rounded'
                  >
                    Save Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* View Event Modal */}
        {isViewEventOpen && currentEvent && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg w-full max-w-md'>
              <div className='p-4 border-b'>
                <h2 className='text-xl font-semibold'>{currentEvent.title}</h2>
              </div>
              <div className='p-4 space-y-4'>
                {currentEvent.image && (
                  <div className='h-56 overflow-hidden rounded'>
                    <img
                      src={currentEvent.image || '/placeholder.svg'}
                      alt={currentEvent.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                )}
                <div className='flex items-center text-sm'>
                  <Calendar className='mr-2 h-4 w-4' />
                  {new Date(currentEvent.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                {currentEvent.location && (
                  <div className='flex items-center text-sm'>
                    <MapPin className='mr-2 h-4 w-4' />
                    {currentEvent.location}
                  </div>
                )}
                {currentEvent.description && (
                  <div className='pt-2'>
                    <h4 className='text-sm font-medium mb-1'>Description:</h4>
                    <p className='text-sm'>{currentEvent.description}</p>
                  </div>
                )}
              </div>
              <div className='p-4 border-t flex justify-end'>
                <button
                  className='px-4 py-2 border rounded'
                  onClick={() => setIsViewEventOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default EventsPage;
