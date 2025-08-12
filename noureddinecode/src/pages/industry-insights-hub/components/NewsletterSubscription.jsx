import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-success to-success/80 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
        <p className="text-white/90 mb-4">
          Thank you for subscribing to our embedded systems insights newsletter.
        </p>
        <p className="text-white/80 text-sm">
          You'll receive the latest articles, tutorials, and industry updates directly in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Mail" size={32} className="text-white" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">
          Stay Updated with Embedded Systems Insights
        </h3>
        
        <p className="text-white/90 mb-6">
          Get the latest articles, tutorials, and industry trends delivered to your inbox. 
          Join 2,500+ embedded systems professionals who trust our insights.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
          
          <Button
            type="submit"
            variant="default"
            loading={isLoading}
            iconName="Send"
            iconPosition="right"
            className="bg-white text-brand-primary hover:bg-white/90 font-medium px-6"
          >
            Subscribe
          </Button>
        </form>
        
        <div className="flex items-center justify-center space-x-6 mt-6 text-white/80 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} />
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>Weekly updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="X" size={16} />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;