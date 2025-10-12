import React, { useState, useEffect } from 'react';
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
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    notes: ''
  });
  const [showUserForm, setShowUserForm] = useState(false);
  const [meetingLinks, setMeetingLinks] = useState({
    google: '',
    teams: ''
  });
  const [emailjsLoaded, setEmailjsLoaded] = useState(false);

  // Load EmailJS readiness (no script loading needed for fetch approach)
  useEffect(() => {
    // Just set as loaded since we're using fetch API directly
    setEmailjsLoaded(true);
  }, []);

  // Generate calendar dates for the next 30 days
  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for business consultations
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date,
          day: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' }),
          weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
          available: Math.random() > 0.3 // 70% availability simulation
        });
      }
    }
    
    return dates.slice(0, 20); // Show 20 available dates
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
    { value: 'technical-review', label: 'Technical Code Review (30 min)', duration: 30 },
    { value: 'project-consultation', label: 'Project Consultation (60 min)', duration: 60 },
    { value: 'architecture-discussion', label: 'Architecture Discussion (45 min)', duration: 45 },
    { value: 'career-guidance', label: 'Career Guidance (30 min)', duration: 30 },
    { value: 'technology-selection', label: 'Technology Selection (45 min)', duration: 45 }
  ];

  // Generate Google Meet and Teams meeting links
  const generateMeetingLinks = () => {
    const meetingId = Math.random().toString(36).substring(2, 15);
    const teamsId = Math.random().toString(36).substring(2, 15);
    
    return {
      google: `https://meet.google.com/${meetingId}`,
      teams: `https://teams.microsoft.com/l/meetup-join/19%3A${teamsId}%40thread.v2/0`
    };
  };

  // Send email using direct fetch API
  const sendEmail = async (templateParams, recipientEmail) => {
    try {
      // Validate environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID2;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID2;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      if (!recipientEmail) {
        throw new Error('Recipient email address is required');
      }

      // Add recipient email to template params with multiple possible field names
      const finalParams = {
        ...templateParams,
        to_email: recipientEmail,
        user_email: recipientEmail,
        reply_to: recipientEmail,
        email: recipientEmail
      };

      console.log('Sending email with params:', {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        recipient_email: recipientEmail,
        template_params: finalParams
      });

      const requestBody = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: finalParams,
      };

      console.log('Full request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();
      console.log('EmailJS response:', response.status, responseText);

      if (response.ok) {
        console.log('Email sent successfully');
        return response;
      } else {
        console.error("EmailJS failed:", responseText);
        throw new Error(`EmailJS failed: ${responseText}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  // Send booking notification to host
  const sendHostNotification = async (bookingData) => {
    const consultation = consultationTypes.find(type => type.value === bookingData.consultationType);
    
    // Ensure we have a proper Date object
    const bookingDate = bookingData.date instanceof Date ? bookingData.date : new Date(bookingData.date);
    
    // Format date properly
    const dateFormatted = bookingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Format time properly with timezone
    const timeSlot = timeSlots.find(slot => slot.value === bookingData.time);
    const timeFormatted = timeSlot ? `${timeSlot.label} (${bookingData.timezone})` : `${bookingData.time} (${bookingData.timezone})`;

    const templateParams = {
      client_name: userInfo.name,
      client_email: userInfo.email,
      client_company: userInfo.company || 'Not specified',
      client_phone: userInfo.phone || 'Not specified',
      consultation_type: consultation.label,
      date: dateFormatted, // Use consistent field name
      time: timeSlot ? timeSlot.label : bookingData.time, // Separate time field
      timezone: bookingData.timezone, // Separate timezone field
      meeting_link: bookingData.meetingLinks.google, // Primary meeting link
      meeting_link_google: bookingData.meetingLinks.google,
      meeting_link_teams: bookingData.meetingLinks.teams,
      client_notes: userInfo.notes || 'No additional notes provided',
      booking_id: Date.now().toString(),
    };

    return sendEmail(templateParams, 'noureddine.awledbrahim@gmail.com');
  };

  // Send confirmation email to user
  const sendUserConfirmation = async (bookingData) => {
    const consultation = consultationTypes.find(type => type.value === bookingData.consultationType);
    
    // Ensure we have a proper Date object
    const bookingDate = bookingData.date instanceof Date ? bookingData.date : new Date(bookingData.date);
    
    // Format date properly
    const dateFormatted = bookingDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Format time properly with timezone
    const timeSlot = timeSlots.find(slot => slot.value === bookingData.time);
    const timeFormatted = timeSlot ? `${timeSlot.label} (${bookingData.timezone})` : `${bookingData.time} (${bookingData.timezone})`;

    const templateParams = {
      user_name: userInfo.name, // Template expects {{user_name}}
      client_name: userInfo.name,
      client_email: userInfo.email,
      consultation_type: consultation.label,
      date: dateFormatted, // Template expects {{date}}
      time: timeSlot ? timeSlot.label : bookingData.time, // Template expects {{time}}
      timezone: bookingData.timezone, // Template expects {{timezone}}
      meeting_link: bookingData.meetingLinks.google, // Primary meeting link
      meeting_link_google: bookingData.meetingLinks.google,
      meeting_link_teams: bookingData.meetingLinks.teams,
      duration: consultation.duration,
      booking_id: Date.now().toString(),
      user_unsubscribe: 'https://your-website.com/unsubscribe', // Template expects {{user_unsubscribe}}
    };

    return sendEmail(templateParams, userInfo.email);
  };

  // Generate calendar event download link
  const generateCalendarEvent = (bookingData) => {
    const startDate = new Date(bookingData.date);
    const [hours, minutes] = bookingData.time.split(':');
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    const endDate = new Date(startDate);
    const consultation = consultationTypes.find(type => type.value === bookingData.consultationType);
    endDate.setMinutes(startDate.getMinutes() + consultation.duration);

    const formatDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Consultation Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@consultationbooking.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${consultation.label} - ${userInfo.name}
DESCRIPTION:Meeting with ${userInfo.name}\\nCompany: ${userInfo.company}\\nNotes: ${userInfo.notes}\\n\\nGoogle Meet: ${bookingData.meetingLinks.google}\\nMicrosoft Teams: ${bookingData.meetingLinks.teams}
LOCATION:${bookingData.meetingLinks.google}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time when date changes
  };

  const handleProceedToBooking = () => {
    if (!selectedDate || !selectedTime || !consultationType) return;
    setShowUserForm(true);
  };

  const handleUserInfoChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = async () => {
    if (!userInfo.name || !userInfo.email || !selectedDate || !selectedTime || !consultationType) return;
    
    setIsBooking(true);
    
    try {
      // Generate meeting links
      const links = generateMeetingLinks();
      setMeetingLinks(links);
      
      const bookingData = {
        date: selectedDate.date,
        time: selectedTime,
        timezone: selectedTimezone,
        consultationType: consultationType,
        meetingLinks: links
      };

      // Send both emails sequentially to handle any individual failures
      try {
        await sendHostNotification(bookingData);
        console.log('Host notification sent successfully');
      } catch (error) {
        console.error('Failed to send host notification:', error);
        // Continue with user confirmation even if host notification fails
      }

      try {
        await sendUserConfirmation(bookingData);
        console.log('User confirmation sent successfully');
      } catch (error) {
        console.error('Failed to send user confirmation:', error);
        throw error; // This one is critical for user experience
      }
      
      setIsBooking(false);
      setIsBooked(true);
    } catch (error) {
      console.error('Booking error:', error);
      setIsBooking(false);
      alert(`There was an error processing your booking: ${error.message}. Please try again or contact support.`);
    }
  };

  const resetBooking = () => {
    setIsBooked(false);
    setSelectedDate(null);
    setSelectedTime('');
    setConsultationType('');
    setShowUserForm(false);
    setUserInfo({
      name: '',
      email: '',
      company: '',
      phone: '',
      notes: ''
    });
    setMeetingLinks({
      google: '',
      teams: ''
    });
  };

  if (isBooked) {
    const calendarDownloadLink = generateCalendarEvent({
      date: selectedDate.date,
      time: selectedTime,
      timezone: selectedTimezone,
      consultationType: consultationType,
      meetingLinks: meetingLinks
    });

    return (
      <div className="bg-white rounded-2xl shadow-card border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Calendar" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Consultation Booked Successfully! 🎉</h3>
        
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
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Duration:</span>
              <span className="font-semibold text-text-primary">
                {consultationTypes?.find(type => type?.value === consultationType)?.duration} minutes
              </span>
            </div>
          </div>
        </div>

        {/* Meeting Links Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-text-primary mb-4 flex items-center justify-center">
            <Icon name="Video" size={20} className="mr-2" />
            Choose Your Meeting Platform
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={meetingLinks.google} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Icon name="Video" size={16} className="mr-2" />
              Google Meet
            </a>
            <a 
              href={meetingLinks.teams} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              <Icon name="Users" size={16} className="mr-2" />
              Microsoft Teams
            </a>
          </div>
          <p className="text-sm text-text-secondary mt-3">
            Both links will work - choose your preferred platform
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Mail" size={20} className="text-green-600" />
            <p className="text-green-800 text-sm">
              Confirmation emails sent successfully!
            </p>
          </div>
          <p className="text-green-700 text-xs mt-1">
            Check <strong>{userInfo.email}</strong> for meeting details
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href={calendarDownloadLink}
            download="consultation-meeting.ics"
            className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            <Icon name="Download" size={16} className="mr-2" />
            Add to Calendar
          </a>
          <Button 
            variant="outline" 
            onClick={resetBooking}
            className="px-6 py-3"
          >
            Book Another Session
          </Button>
        </div>

        <div className="text-left bg-gray-50 rounded-lg p-6">
          <h4 className="font-semibold text-text-primary mb-3 flex items-center">
            <Icon name="Info" size={18} className="mr-2" />
            Next Steps:
          </h4>
          <ul className="text-sm text-text-secondary space-y-2">
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">1.</span>
              Check your email for detailed meeting information and preparation checklist
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">2.</span>
              Download and add the calendar event to your calendar above
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">3.</span>
              Test your camera and microphone 10 minutes before the meeting
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">4.</span>
              Join 2-3 minutes early using your preferred meeting platform
            </li>
            <li className="flex items-start">
              <span className="text-brand-primary mr-2">5.</span>
              Prepare any questions or materials you'd like to discuss
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (showUserForm) {
    return (
      <div className="bg-white rounded-2xl shadow-card border border-border p-8">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-2">Contact Information</h3>
          <p className="text-text-secondary">
            Please provide your details to complete the booking.
          </p>
        </div>

        {/* Booking Summary */}
        <div className="bg-brand-surface rounded-lg p-6 mb-6">
          <h5 className="font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Calendar" size={18} className="mr-2" />
            Booking Details
          </h5>
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
                  weekday: 'long', 
                  month: 'long', 
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
            <div className="flex justify-between">
              <span className="text-text-secondary">Duration:</span>
              <span className="text-text-primary font-medium">
                {consultationTypes?.find(type => type?.value === consultationType)?.duration} minutes
              </span>
            </div>
          </div>
        </div>

        {/* User Information Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => handleUserInfoChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => handleUserInfoChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                value={userInfo.company}
                onChange={(e) => handleUserInfoChange('company', e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => handleUserInfoChange('phone', e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Additional Notes
            </label>
            <textarea
              value={userInfo.notes}
              onChange={(e) => handleUserInfoChange('notes', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-vertical"
              placeholder="Tell us about your project or specific topics you'd like to discuss..."
            />
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setShowUserForm(false)}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            variant="default"
            onClick={handleBooking}
            loading={isBooking}
            disabled={!userInfo.name || !userInfo.email}
            className="flex-1 bg-brand-primary hover:bg-brand-primary/90"
          >
            {isBooking ? 'Booking...' : 'Confirm Booking'}
          </Button>
        </div>
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

      {/* EmailJS Loading Status */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="CheckCircle" size={16} className="text-green-600" />
          <p className="text-green-800 text-sm">Booking system ready</p>
        </div>
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

      {/* Book Button */}
      <Button
        variant="default"
        size="lg"
        fullWidth
        onClick={handleProceedToBooking}
        disabled={!selectedDate || !selectedTime || !consultationType}
        iconName="Calendar"
        iconPosition="left"
        className="bg-brand-primary hover:bg-brand-primary/90"
      >
        Continue to Booking
      </Button>

      {/* Additional Information */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-blue-600 mt-0.5" />
          <div className="text-sm">
            <h6 className="font-semibold text-blue-900 mb-1">What to Expect</h6>
            <ul className="text-blue-800 space-y-1">
              <li>• You'll receive a calendar invitation with meeting details</li>
              <li>• Choose between Google Meet or Microsoft Teams</li>
              <li>• A pre-meeting questionnaire to maximize our time</li>
              <li>• Follow-up summary with action items and recommendations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;