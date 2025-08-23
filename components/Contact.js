function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null);
    
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        const response = await fetch('https://formsubmit.co/prashikbhalerao2070@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact: Message from ${formData.name}`,
            _captcha: false
          })
        });
        
        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };
    
    const contactItems = [
      {
        icon: 'mail',
        label: 'Email',
        value: 'prashikbhalerao2070@gmail.com',
        href: 'mailto:prashikbhalerao2070@gmail.com'
      },
      {
        icon: 'phone',
        label: 'Phone',
        value: '+91 93099 02070',
        href: 'tel:+919309902070'
      },
      {
        icon: 'map-pin',
        label: 'Location',
        value: 'Chhatrapati Sambhajinagar, Maharashtra',
        href: null
      }
    ];
    
    const socialLinks = [
      {
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/PrashikBhalerao8888'
      },
      {
        icon: 'external-link',
        label: 'Portfolio link',
        href: 'https://b496pa28cdnf.trickle.host'
      }
    ];

    
    return (
      <section 
        id="contact" 
        className="py-20"
        data-name="contact" 
        data-file="components/Contact.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{background: 'var(--primary-color)'}}></div>
            <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
              Ready to collaborate on your next data project? Let's connect and discuss how I can help transform your data into insights.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="fade-in">
                <h3 className="text-2xl font-bold mb-8">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
                      style={{
                        background: 'var(--secondary-color)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)',
                        focusRingColor: 'var(--primary-color)'
                      }}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors"
                      style={{
                        background: 'var(--secondary-color)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: 'var(--text-secondary)'}}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors resize-none"
                      style={{
                        background: 'var(--secondary-color)',
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 rounded-lg border" style={{background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#22c55e'}}>
                      <div className="flex items-center">
                        <div className="icon-check-circle text-xl mr-2"></div>
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-lg border" style={{background: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444'}}>
                      <div className="flex items-center">
                        <div className="icon-x-circle text-xl mr-2"></div>
                        <span>Failed to send message. Please try again or contact me directly.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
              
              <div className="fade-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{background: 'rgba(59, 130, 246, 0.1)'}}
                      >
                        <div className={`icon-${item.icon} text-xl`} style={{color: 'var(--primary-color)'}}></div>
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{color: 'var(--text-muted)'}}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-lg hover:text-[var(--primary-color)] transition-colors"
                            style={{color: 'var(--text-secondary)'}}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg" style={{color: 'var(--text-secondary)'}}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-bold mb-8">Follow My Work</h3>
                <div className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'var(--secondary-color)',
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                        style={{background: 'rgba(59, 130, 246, 0.1)'}}
                      >
                        <div className={`icon-${link.icon} text-xl`} style={{color: 'var(--primary-color)'}}></div>
                      </div>
                      <div>
                        <p className="text-lg font-medium" style={{color: 'var(--text-primary)'}}>
                          {link.label}
                        </p>
                        <p className="text-sm" style={{color: 'var(--text-muted)'}}>
                          View my projects and contributions
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}