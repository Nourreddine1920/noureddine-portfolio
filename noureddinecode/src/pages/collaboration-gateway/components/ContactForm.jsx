import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
    urgency: '',
    preferredContact: '',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'recruitment', label: 'Technical Recruitment' },
    { value: 'client-project', label: 'Client Project Inquiry' },
    { value: 'collaboration', label: 'Peer Collaboration' },
    { value: 'consultation', label: 'Technical Consultation' },
    { value: 'networking', label: 'Professional Networking' },
    { value: 'other', label: 'Other' }
  ];

  const projectTypes = [
    { value: 'embedded-systems', label: 'Embedded Systems Development' },
    { value: 'iot-solutions', label: 'IoT Solutions' },
    { value: 'automotive', label: 'Automotive Systems' },
    { value: 'industrial', label: 'Industrial Automation' },
    { value: 'firmware', label: 'Firmware Development' },
    { value: 'consulting', label: 'Technical Consulting' },
    { value: 'code-review', label: 'Code Review & Optimization' },
    { value: 'training', label: 'Technical Training' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 week)' },
    { value: 'short-term', label: 'Short-term (1-4 weeks)' },
    { value: 'medium-term', label: 'Medium-term (1-3 months)' },
    { value: 'long-term', label: 'Long-term (3+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' }
  ];

  const budgetRanges = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'hourly', label: 'Hourly Rate Discussion' },
    { value: 'discuss', label: 'Prefer to Discuss' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Response within 48 hours' },
    { value: 'medium', label: 'Medium - Response within 24 hours' },
    { value: 'high', label: 'High - Response within 12 hours' },
    { value: 'urgent', label: 'Urgent - Response within 4 hours' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Call' },
    { value: 'linkedin', label: 'LinkedIn Message' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors?.[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.inquiryType) newErrors.inquiryType = 'Please select inquiry type';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (!formData?.terms) newErrors.terms = 'Please accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card border border-border p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary mb-4">Message Sent Successfully!</h3>
        <p className="text-text-secondary mb-6">
          Thank you for reaching out. I'll review your inquiry and respond within the timeframe you specified.
        </p>
        <div className="bg-brand-surface rounded-lg p-4 mb-6">
          <p className="text-sm text-text-secondary">
            <strong>Expected Response Time:</strong> {
              formData?.urgency === 'urgent' ? 'Within 4 hours' :
              formData?.urgency === 'high' ? 'Within 12 hours' :
              formData?.urgency === 'medium'? 'Within 24 hours' : 'Within 48 hours'
            }
          </p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '', email: '', company: '', inquiryType: '', projectType: '',
              timeline: '', budget: '', message: '', urgency: '', preferredContact: '',
              newsletter: false, terms: false
            });
          }}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card border border-border p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Start a Conversation</h3>
        <p className="text-text-secondary">
          Let's discuss your project requirements and explore how we can collaborate.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData?.name}
            onChange={handleInputChange}
            error={errors?.name}
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="your.email@company.com"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />
        </div>

        <Input
          label="Company/Organization"
          name="company"
          type="text"
          placeholder="Your company name (optional)"
          value={formData?.company}
          onChange={handleInputChange}
          description="Help me understand your organizational context"
        />

        {/* Inquiry Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => handleSelectChange('inquiryType', value)}
            error={errors?.inquiryType}
            required
          />
          <Select
            label="Project Type"
            placeholder="Select project type"
            options={projectTypes}
            value={formData?.projectType}
            onChange={(value) => handleSelectChange('projectType', value)}
            description="What type of technical work are you considering?"
          />
        </div>

        {/* Project Parameters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => handleSelectChange('timeline', value)}
            description="When do you need this completed?"
          />
          <Select
            label="Budget Range"
            placeholder="Select budget range"
            options={budgetRanges}
            value={formData?.budget}
            onChange={(value) => handleSelectChange('budget', value)}
            description="Helps me provide appropriate recommendations"
          />
        </div>

        {/* Communication Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Response Urgency"
            placeholder="Select urgency level"
            options={urgencyLevels}
            value={formData?.urgency}
            onChange={(value) => handleSelectChange('urgency', value)}
            description="How quickly do you need a response?"
          />
          <Select
            label="Preferred Contact Method"
            placeholder="Select contact method"
            options={contactMethods}
            value={formData?.preferredContact}
            onChange={(value) => handleSelectChange('preferredContact', value)}
            description="How would you like me to follow up?"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Project Details & Requirements *
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Please describe your project requirements, technical challenges, or questions. Include any specific technologies, constraints, or goals you have in mind."
            value={formData?.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error">{errors?.message}</p>
          )}
          <p className="mt-2 text-xs text-text-secondary">
            The more details you provide, the better I can understand your needs and provide a relevant response.
          </p>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <Checkbox
            label="Subscribe to technical insights newsletter"
            description="Receive monthly updates on embedded systems trends and project insights"
            checked={formData?.newsletter}
            onChange={(e) => handleInputChange(e)}
            name="newsletter"
          />
          <Checkbox
            label="I agree to the terms and privacy policy"
            description="Your information will be used solely for responding to your inquiry"
            checked={formData?.terms}
            onChange={(e) => handleInputChange(e)}
            name="terms"
            error={errors?.terms}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;