import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, 
  FiUsers, FiAward, FiBookOpen, FiHeadphones, FiStar, FiChevronLeft, FiChevronRight,
  FiArrowRight, FiPlay
} from 'react-icons/fi';
import { FaWhatsapp, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { courses, testimonials } from '../data/courses';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: <FiMapPin className="text-2xl" />, 
      title: 'Visit Us', 
      content: 'Kundalahalligate, Varthur Main Rd, Bengaluru - 560066',
      link: 'https://maps.google.com/?q=Gamut+Gurus+Bangalore'
    },
    { 
      icon: <FiPhone className="text-2xl" />, 
      title: 'Call Us', 
      content: '+91 96276 62769',
      link: 'tel:+919627662769'
    },
    { 
      icon: <FiMail className="text-2xl" />, 
      title: 'Email Us', 
      content: 'info@gamutgurus.com',
      link: 'mailto:info@gamutgurus.com'
    },
    { 
      icon: <FiClock className="text-2xl" />, 
      title: 'Working Hours', 
      content: 'Mon - Sat: 9 AM - 8 PM',
      link: null
    },
  ];

  const whyContactUs = [
    { icon: <FiBookOpen />, title: 'Free Demo Class', desc: 'Experience our teaching quality', color: 'from-cyan-500 to-blue-500' },
    { icon: <FiUsers />, title: 'Expert Counseling', desc: 'Personalized career guidance', color: 'from-emerald-500 to-teal-500' },
    { icon: <FiAward />, title: '100% Placement', desc: 'Guaranteed job assistance', color: 'from-orange-500 to-pink-500' },
    { icon: <FiHeadphones />, title: '24/7 Support', desc: 'Always here for you', color: 'from-purple-500 to-indigo-500' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com/gamutgurus', color: 'hover:bg-blue-600' },
    { icon: <FaTwitter />, url: 'https://twitter.com/gamutgurus', color: 'hover:bg-sky-500' },
    { icon: <FaInstagram />, url: 'https://instagram.com/gamutgurus', color: 'hover:bg-pink-500' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/gamutgurus', color: 'hover:bg-blue-700' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@gamutgurus', color: 'hover:bg-red-600' },
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  return (
    <div className="min-h-screen pt-20 bg-slate-950">
      {/* HERO SECTION with Dynamic Animations */}
      <section className="relative min-h-[100vh] overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
          {/* Animated Gradient Mesh */}
          <div className="absolute inset-0 opacity-50">
            <div 
              className="absolute w-[800px] h-[800px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)',
                top: '10%',
                left: '20%',
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            <div 
              className="absolute w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
                bottom: '10%',
                right: '10%',
                transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
            <div 
              className="absolute w-[500px] h-[500px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          </div>

          {/* Animated Grid Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 20s linear infinite'
          }} />

          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-[10%] w-20 h-20 border border-cyan-500/20 rotate-45 animate-float" />
          <div className="absolute top-40 right-[15%] w-16 h-16 border border-purple-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-[20%] w-12 h-12 border border-teal-500/30 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/3 right-[25%] w-24 h-24 border border-blue-500/15 rotate-12 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-[30%] w-8 h-8 bg-cyan-500/10 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-[5%] w-6 h-6 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />

          {/* Glowing Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.3 + Math.random() * 0.5
              }}
            />
          ))}

          {/* Scanning Line Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
              style={{
                animation: 'scanLine 4s linear infinite',
              }}
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">We're Here to Help</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Get in </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Touch</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              Ready to transform your career? Reach out and let's discuss your goals.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <FiMail className="text-white" />
                  </span>
                  Send us a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <FiCheckCircle className="text-white text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-slate-400 mb-6">
                      We've received your message. Our team will contact you within 24 hours.
                    </p>
                    <Link to="/courses" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                      Explore Our Courses <FiArrowRight />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Select Course</label>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                          required
                        >
                          <option value="" className="bg-slate-800">Choose a course...</option>
                          {courses.map(course => (
                            <option key={course.id} value={course.title} className="bg-slate-800">{course.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Your Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your goals and how we can help..."
                        rows="4"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                    >
                      <FiSend /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Side */}
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link?.startsWith('http') ? '_blank' : undefined}
                    rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group p-5 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all hover:-translate-y-1 ${info.link ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-slate-400 text-sm">{info.content}</p>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 ${social.color} hover:text-white transition-all hover:scale-110`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+919627662769"
                  className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all"
                >
                  <FiPhone className="text-lg" /> Call Now
                </a>
                <a 
                  href="https://wa.me/919627662769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all"
                >
                  <FaWhatsapp className="text-lg" /> WhatsApp
                </a>
              </div>

              {/* Video CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 p-6">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                    <FiPlay className="text-white text-xl ml-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Watch Our Demo</h4>
                    <p className="text-purple-300 text-sm">See how we transform careers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us - Feature Cards */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-slate-400">Experience the best in IT training and career support</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {whyContactUs.map((item, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-all hover:-translate-y-2"
              >
                <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-2">What Our Students Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              Real success stories from our alumni who transformed their careers with us
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6 px-2">
                      {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all group"
                        >
                          <FaQuoteLeft className="text-cyan-500/30 text-3xl mb-4" />
                          <p className="text-slate-300 leading-relaxed mb-6 line-clamp-4">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                              {testimonial.name?.charAt(0) || 'U'}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{testimonial.name}</h4>
                              <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <FiStar key={i} className="text-amber-400 fill-current text-sm" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronRight className="text-2xl" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'bg-cyan-500 w-8' 
                      : 'bg-slate-600 w-2 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">Our Location</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-6">Visit Our Training Center</h2>
              <p className="text-slate-600 mb-8">
                Located in the heart of Bangalore's tech hub, our training center is easily accessible 
                and equipped with modern facilities for an optimal learning experience.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 flex-shrink-0">
                    🇮🇳
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">India (Headquarters)</h4>
                    <p className="text-slate-500 text-sm">Sy.No 5/3, 4th floor, Kundalahalligate, Bangalore - 560066</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 flex-shrink-0">
                    🇨🇦
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Canada</h4>
                    <p className="text-slate-500 text-sm">#1080, 2482 Yonge Street, Toronto, ON M4P 2H5</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-80 rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.310825736844!2d77.69918!3d12.955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzE4LjAiTiA3N8KwNDEnNTcuMSJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gamut Gurus Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-slate-800 mt-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'What are batch timings?', a: 'Weekday (Mon-Fri 7-9 PM) & Weekend (Sat-Sun 10 AM - 2 PM) batches available.' },
              { q: 'Is online training available?', a: 'Yes, we offer live interactive sessions with screen sharing and doubt clearing.' },
              { q: 'Do you provide placement?', a: '100% placement assistance with resume prep, mock interviews, and company referrals.' },
              { q: 'What is the course fee?', a: 'Fees vary by course (₹35,000 - ₹55,000). EMI options available.' },
              { q: 'Can freshers join?', a: 'Absolutely! Our courses are designed for both freshers and working professionals.' },
              { q: 'What is the batch size?', a: 'Small batches of 15-20 students for personalized attention.' },
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-slate-200 hover:border-cyan-300 hover:shadow-md transition-all bg-slate-50">
                <h3 className="font-bold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-white/80 mb-8">
            Join 15,000+ successful alumni who started their journey with a simple inquiry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919627662769"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-lg"
            >
              <FiPhone /> Call Now
            </a>
            <a 
              href="https://wa.me/919627662769"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-lg"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes scanLine {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default Contact;
