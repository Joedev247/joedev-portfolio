import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  AtSign, 
  Send, 
  Loader2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';
import SocialLink from './SocialLink';
import InputField from './InputField';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { href: "https://github.com/Joedev247/", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/joseph-jose-oribaloye-558043348", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/Joedev237", icon: Twitter, label: "Twitter" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are still placeholder values
      if (!serviceId || !templateId || !publicKey || 
          serviceId.includes('your_') || templateId.includes('your_') || publicKey.includes('your_')) {
        console.warn('EmailJS not configured properly. Please update your .env.local file with real values.');
        setSubmitStatus('setup_required');
        setFormData({ name: "", email: "", message: "" }); // Reset form
        setTimeout(() => setSubmitStatus(null), 10000);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'joedev247@gmail.com', // Your email
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" }); // Reset form
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More specific error handling based on EmailJS error messages
      if (error.text && error.text.includes('Public Key is invalid')) {
        setSubmitStatus('invalid_public_key');
      } else if (error.text && error.text.includes('Service ID')) {
        setSubmitStatus('invalid_service_id');
      } else if (error.text && error.text.includes('Template ID')) {
        setSubmitStatus('invalid_template_id');
      } else if (error.status === 400) {
        setSubmitStatus('config_error');
      } else if (error.status === 422) {
        setSubmitStatus('validation_error');
      } else {
        setSubmitStatus('error');
      }
      
      // Hide error message after 10 seconds for config errors
      setTimeout(() => {
        setSubmitStatus(null);
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      className="py-24  relative px-4 sm:px-6 lg:px-8"
      id="contact"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <MessageSquare className="w-5 h-5 text-orange-500" />
            <p className="text-orange-500 font-medium text-sm uppercase tracking-wider">
              Let's Connect
            </p>
          </motion.div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-white to-orange-200 filter drop-shadow-lg"
            style={{
              textShadow: "2px 2px 4px rgba(255, 165, 0, 0.2)",
              WebkitTextStroke: "1px rgba(255, 165, 0, 0.1)",
            }}
          >
            Contact{" "}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactInfoCard
              Icon={Mail}
              title="Email"
              content="joedev247@gmail.com"
              link="mailto:joedev247@gmail.com"
            />
            <ContactInfoCard
              Icon={Phone}
              title="Phone"
              content="(+237) 6 53 95 61 70"
              link="tel:+12345678901"
            />
            <ContactInfoCard
              Icon={MapPin}
              title="Location"
              content="Cameroon, Douala"
              link="https://maps.google.com"
            />

            {/* Social Links */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-gray-300 text-sm font-medium mb-4">
                Connect with me on social media
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <SocialLink key={index} {...social} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/30 p-6 sm:p-8  backdrop-blur-sm border border-gray-800/50">
              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mb-6 p-4  border ${
                    submitStatus === 'success'
                      ? 'bg-green-500/10 border-green-500/30 text-green-400'
                      : submitStatus === 'setup_required'
                      ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : submitStatus === 'setup_required' ? (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-medium">
                        {submitStatus === 'success' && 'Message sent successfully!'}
                        {submitStatus === 'setup_required' && 'EmailJS Setup Required'}
                        {submitStatus === 'invalid_public_key' && 'Invalid Public Key'}
                        {submitStatus === 'invalid_service_id' && 'Invalid Service ID'}
                        {submitStatus === 'invalid_template_id' && 'Invalid Template ID'}
                        {submitStatus === 'config_error' && 'Configuration Error'}
                        {submitStatus === 'validation_error' && 'Validation Error'}
                        {submitStatus === 'error' && 'Failed to send message'}
                      </p>
                      <p className="text-sm opacity-90 mt-1">
                        {submitStatus === 'success' && 
                          'Thank you for reaching out. I\'ll get back to you soon!'
                        }
                        {submitStatus === 'setup_required' && 
                          'Please update your .env.local file with actual EmailJS credentials (not placeholder values).'
                        }
                        {submitStatus === 'invalid_public_key' && 
                          'The Public Key in your .env.local file is invalid. Go to EmailJS Dashboard → Account to get the correct Public Key.'
                        }
                        {submitStatus === 'invalid_service_id' && 
                          'The Service ID is invalid. Check your EmailJS dashboard for the correct Service ID.'
                        }
                        {submitStatus === 'invalid_template_id' && 
                          'The Template ID is invalid. Check your EmailJS dashboard for the correct Template ID.'
                        }
                        {submitStatus === 'config_error' && 
                          'EmailJS configuration error. Please check your service ID, template ID, and public key.'
                        }
                        {submitStatus === 'validation_error' && 
                          'Please check that all form fields are filled correctly and try again.'
                        }
                        {submitStatus === 'error' && 
                          'Please try again or contact me directly via WhatsApp or email below.'
                        }
                      </p>
                      {(submitStatus === 'setup_required' || submitStatus === 'config_error' || 
                        submitStatus === 'invalid_public_key' || submitStatus === 'invalid_service_id' || 
                        submitStatus === 'invalid_template_id' || submitStatus === 'error') && (
                        <div className="mt-3 space-y-2">
                          {(submitStatus === 'invalid_public_key' || submitStatus === 'invalid_service_id' || 
                            submitStatus === 'invalid_template_id' || submitStatus === 'setup_required') && (
                            <div className="text-xs bg-gray-800/50 p-3 rounded border-l-2 border-orange-500">
                              <p className="font-medium text-orange-400 mb-2">Quick Fix Steps:</p>
                              <ol className="list-decimal list-inside space-y-1 text-gray-300">
                                <li>Go to <a href="https://dashboard.emailjs.com" target="_blank" className="text-blue-400 hover:text-blue-300">EmailJS Dashboard</a></li>
                                <li>Get your Service ID, Template ID, and Public Key</li>
                                <li>Update .env.local file with real values (not placeholders)</li>
                                <li>Restart your development server</li>
                              </ol>
                            </div>
                          )}
                          <p className="text-xs opacity-75">Alternative contact methods:</p>
                          <div className="flex flex-col gap-1 text-xs">
                            <a 
                              href="mailto:joedev247@gmail.com" 
                              className="text-orange-400 hover:text-orange-300 transition-colors"
                            >
                              📧 joedev247@gmail.com
                            </a>
                            <a 
                              href="https://wa.me/237653956170" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-green-300 transition-colors"
                            >
                              💬 WhatsApp: +237 653 956 170
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <InputField
                    label="Your Name"
                    icon={User}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <InputField
                    label="Email Address"
                    icon={AtSign}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-orange-500" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50  focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/25 text-gray-100 text-sm transition-all resize-none placeholder:text-gray-500"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white  hover:from-orange-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
