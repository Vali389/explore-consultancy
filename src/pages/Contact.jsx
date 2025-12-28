import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-400/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sky-400 text-sm font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span>Get in </span>
              <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to transform your career? Reach out and let's discuss your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Section - Contact Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter a valid email address"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    required
                  />
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                {submitted ? (
                  <div className="flex items-center gap-3 text-sky-400">
                    <FiCheckCircle className="text-2xl" />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
                  >
                    <FiSend /> Send Message
                  </button>
                )}
              </form>
            </div>

            {/* Right Section - Get in Touch Info */}
            <div className="w-full space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Get in touch
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  We can ensure reliability, low important, with safety and co
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Etiam sit amet convallis erat – litora torquent per conubia!
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/comeandlearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="https://instagram.com/comeandlearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="https://linkedin.com/company/comeandlearn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:border-sky-400 hover:bg-sky-400/10 transition-all"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
