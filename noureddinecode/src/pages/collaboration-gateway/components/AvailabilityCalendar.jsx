import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState('EST');
  const [consultationType, setConsultationType] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Generate calendar dates for the next 30 days
  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip weekends for business consultations
      if (date?.getDay() !== 0 && date?.getDay() !== 6) {
        dates?.push({
          date: date,
          day: date?.getDate(),
          month: date?.toLocaleDateString('en-US', { month: 'short' }),
          weekday: date?.toLocaleDateString('en-US', { weekday: 'short' }),
          available: Math.random() > 0.3 // 70% availability simulation
        });
      }
    }
    
    return dates?.slice(0, 20); // Show 20 available dates
  };

  const [calendarDates] = useState(generateCalendarDates());

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const timezones = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' },
    { value: 'JST', label: 'Japan Standard Time (JST)' }
  ];

  const consultationTypes = [
    { value: 'technical-review', label: 'Technical Code Review (30 min)' },
    { value: 'project-consultation', label: 'Project Consultation (60 min)' },
    { value: 'architecture-discussion', label: 'Architecture Discussion (45 min)' },
    { value: 'career-guidance', label: 'Career Guidance (30 min)' },
    { value: 'technology-selection', label: 'Technology Selection (45 min)' }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !consultationType) return;
    
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsBooking(false);
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="bg-white rounded-2xl shadow-card border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Calendar" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Consultation Booked!</h3>
        <div className="bg-brand-surface rounded-lg p-6 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Date:</span>
              <span className="font-semibold text-text-primary">
                {selectedDate?.date?.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Time:</span>
              <span className="font-semibold text-text-primary">
                {timeSlots?.find(slot => slot?.value === selectedTime)?.label} ({selectedTimezone})
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Type:</span>
              <span className="font-semibold text-text-primary">
                {consultationTypes?.find(type => type?.value === consultationType)?.label}
              </span>
            </div>
          </div>
        </div>
        <p className="text-text-secondary mb-6">
          You'll receive a calendar invitation and meeting details via email shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsBooked(false);
            setSelectedDate(null);
            setSelectedTime('');
            setConsultationType('');
          }}
        >
          Book Another Session
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-border p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Schedule a Consultation</h3>
        <p className="text-text-secondary">
          Book a technical consultation to discuss your project requirements and get expert guidance.
        </p>
      </div>
      {/* Consultation Type Selection */}
      <div className="mb-8">
        <Select
          label="Consultation Type"
          placeholder="Select consultation type"
          options={consultationTypes}
          value={consultationType}
          onChange={setConsultationType}
          description="Choose the type of consultation that best fits your needs"
        />
      </div>
      {/* Timezone Selection */}
      <div className="mb-8">
        <Select
          label="Your Timezone"
          placeholder="Select your timezone"
          options={timezones}
          value={selectedTimezone}
          onChange={setSelectedTimezone}
          description="All times will be displayed in your selected timezone"
        />
      </div>
      {/* Calendar Grid */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-text-primary mb-4">Available Dates</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {calendarDates?.map((dateObj, index) => (
            <button
              key={index}
              onClick={() => dateObj?.available && handleDateSelect(dateObj)}
              disabled={!dateObj?.available}
              className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                selectedDate?.day === dateObj?.day && selectedDate?.month === dateObj?.month
                  ? 'bg-brand-primary text-white border-brand-primary shadow-interactive'
                  : dateObj?.available
                  ? 'bg-white border-border hover:border-brand-primary hover:bg-brand-surface' :'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="text-xs font-medium">{dateObj?.weekday}</div>
              <div className="text-lg font-bold">{dateObj?.day}</div>
              <div className="text-xs">{dateObj?.month}</div>
            </button>
          ))}
        </div>
      </div>
      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-text-primary mb-4">
            Available Times - {selectedDate?.date?.toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots?.map((slot) => (
              <button
                key={slot?.value}
                onClick={() => setSelectedTime(slot?.value)}
                className={`p-3 rounded-lg border text-center transition-all duration-200 ${
                  selectedTime === slot?.value
                    ? 'bg-brand-primary text-white border-brand-primary shadow-interactive'
                    : 'bg-white border-border hover:border-brand-primary hover:bg-brand-surface'
                }`}
              >
                <div className="font-semibold">{slot?.label}</div>
                <div className="text-xs text-current opacity-70">{selectedTimezone}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Booking Summary */}
      {selectedDate && selectedTime && consultationType && (
        <div className="bg-brand-surface rounded-lg p-6 mb-6">
          <h5 className="font-semibold text-text-primary mb-4">Booking Summary</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Consultation:</span>
              <span className="text-text-primary font-medium">
                {consultationTypes?.find(type => type?.value === consultationType)?.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Date:</span>
              <span className="text-text-primary font-medium">
                {selectedDate?.date?.toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Time:</span>
              <span className="text-text-primary font-medium">
                {timeSlots?.find(slot => slot?.value === selectedTime)?.label} ({selectedTimezone})
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Book Button */}
      <Button
        variant="default"
        size="lg"
        fullWidth
        onClick={handleBooking}
        loading={isBooking}
        disabled={!selectedDate || !selectedTime || !consultationType}
        iconName="Calendar"
        iconPosition="left"
        className="bg-brand-primary hover:bg-brand-primary/90"
      >
        {isBooking ? 'Booking Session...' : 'Book Consultation'}
      </Button>
      {/* Additional Information */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div className="text-sm">
            <h6 className="font-semibold text-blue-900 mb-1">What to Expect</h6>
            <ul className="text-blue-800 space-y-1">
              <li>• You'll receive a calendar invitation with meeting details</li>
              <li>• A pre-meeting questionnaire to maximize our time</li>
              <li>• Video call link (Google Meet or Zoom)</li>
              <li>• Follow-up summary with action items and recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;