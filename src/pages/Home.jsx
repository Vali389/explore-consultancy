import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiClock, FiUsers, FiAward, FiBookOpen, FiMonitor, 
  FiArrowRight, FiStar, FiBriefcase, FiTrendingUp, 
  FiHeadphones, FiPlay, FiPhone, FiChevronDown,
  FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { 
  FaDocker, FaPython, FaJava, FaJenkins, FaGitAlt, FaAws, FaQuoteLeft
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiSelenium } from 'react-icons/si';
import { courses, testimonials } from '../data/courses';

function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const tools = [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Jenkins', icon: <FaJenkins /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Selenium', icon: <SiSelenium /> }
  ];

  const features = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Cherry Picked Trainers',
      description: 'Our trainers have over 14+ years of real-time DevOps and development experience in top MNCs.'
    },
    {
      icon: <FiBookOpen className="text-3xl" />,
      title: 'Curated Content',
      description: 'Industry-focused curriculum designed to address current market demands with hands-on practical training.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: '360° Feedback System',
      description: 'Regular feedback collection from participants to continuously improve our training delivery and content.'
    },
    {
      icon: <FiMonitor className="text-3xl" />,
      title: 'Live Project Experience',
      description: 'Work on 5+ real-time projects during the course to gain practical experience that employers value.'
    },
    {
      icon: <FiBriefcase className="text-3xl" />,
      title: '100% Placement Support',
      description: 'Dedicated placement cell with 500+ hiring partners. Resume building, mock interviews, and job referrals.'
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: 'Lifetime Support',
      description: 'Get lifetime access to course materials, recorded sessions, and doubt clearing support even after completion.'
    }
  ];

  const faqs = [
    {
      question: 'What are the prerequisites for joining Come and Learn courses?',
      answer: 'Most of our courses are beginner-friendly and require no prior programming experience. Basic computer knowledge is sufficient.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide 100% placement assistance. Our dedicated placement cell connects students with 500+ hiring partners including top MNCs.'
    },
    {
      question: 'What is the batch size and timing?',
      answer: 'We maintain small batch sizes of 15-20 students for personalized attention. We offer flexible timings with weekday and weekend batches.'
    },
    {
      question: 'Is online training available?',
      answer: 'Yes, we offer both online and offline training modes. Online classes are conducted live with full interaction.'
    },
  ];

  const popularCourses = courses.filter(c => c.popular).slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500 px-4 py-2 rounded-full text-primary-400 text-sm font-semibold mb-6">
                <FiStar /> India's #1 IT Training Institute
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Career with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                  Come and Learn
                </span>
              </h1>
              
              <p className="text-lg text-secondary-300 mb-8 max-w-xl">
                Master DevOps, Cloud, Full Stack Development & Software Testing with 
                industry expert trainers. Get hands-on experience with real-time projects 
                and 100% placement assistance.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-8">
                {[
                  { number: '15000+', label: 'Students Trained' },
                  { number: '500+', label: 'Hiring Partners' },
                  { number: '14+', label: 'Years Experience' },
                  { number: '95%', label: 'Placement Rate' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-amber-400">{stat.number}</div>
                    <div className="text-sm text-secondary-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all">
                  <FiPlay /> Explore Courses
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                  <FiPhone /> Book Free Demo
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80"
                  alt="IT Training and Education"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-indigo-600/20"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white">
                    <FiAward className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-800">14+ Years</div>
                    <div className="text-sm text-secondary-500">Experience</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                    <FiBriefcase className="text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-secondary-800">500+</div>
                    <div className="text-sm text-secondary-500">Hiring Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Banner */}
        <div className="mt-16 bg-black/30 py-4 overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70 whitespace-nowrap">
                <span className="text-2xl text-amber-400">{tool.icon}</span>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary-800 mb-4">Explore Our Courses</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto">
              Transform your career with hands-on training from industry experts. Master in-demand skills with real-world projects and get 100% placement support to land your dream job.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course) => (
              <div key={course.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-200">
                {/* Gradient Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-indigo-50/0 group-hover:from-purple-50/50 group-hover:via-pink-50/30 group-hover:to-indigo-50/50 transition-all duration-500 pointer-events-none"></div>
                
                {/* Course Image */}
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    ⭐ Popular
                  </span>
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <FiStar className="text-amber-500 fill-amber-500" />
                    <span className="text-sm font-bold text-gray-800">{course.rating}</span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    {course.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{course.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.slice(0, 2).map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200"
                      >
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 2 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-semibold border border-indigo-200">
                        +{course.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <FiClock className="text-purple-500" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <FiUsers className="text-pink-500" />
                        {course.students}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={`/course/${course.id}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 hover:from-purple-700 hover:via-pink-600 hover:to-indigo-700 hover:shadow-lg hover:scale-105 transform"
                  >
                    <FiArrowRight /> Learn More
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-xl hover:bg-primary-500 hover:text-white transition-all"
            >
              View All Courses <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">The Come and Learn Advantage</h2>
            <p className="text-secondary-500 max-w-2xl mx-auto mt-4">
              We are committed to providing quality training that transforms careers with our unique approach to IT education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary-50 rounded-full flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-3">{feature.title}</h3>
                <p className="text-secondary-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Auto Sliding */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-4xl font-bold text-white mt-2">What Our Students Say</h2>
          </div>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                      <FaQuoteLeft className="text-4xl text-primary-400 mb-6" />
                      <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary-400"
                        />
                        <div>
                          <div className="font-bold text-white text-lg">{testimonial.name}</div>
                          <div className="text-secondary-300">{testimonial.role}</div>
                          <div className="flex gap-1 mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FiStar key={i} className="text-amber-400 fill-current text-sm" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index 
                      ? 'bg-primary-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Navigation */}
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button 
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all hidden md:flex"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: <FiUsers />, number: '15000+', label: 'Students Trained' },
              { icon: <FiBriefcase />, number: '500+', label: 'Hiring Partners' },
              { icon: <FiAward />, number: '14+', label: 'Years Experience' },
              { icon: <FiTrendingUp />, number: '95%', label: 'Placement Rate' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-3 h-12">
                  <div className="text-4xl opacity-90">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl font-bold text-secondary-800 mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden border border-secondary-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold text-secondary-800 hover:text-primary-500 transition-colors"
                >
                  {faq.question}
                  <FiChevronDown className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-6 pb-4 text-secondary-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your IT Career Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who transformed their careers with Come and Learn.
            Book a free demo class today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-secondary-100 transition-all"
            >
              Book Free Demo <FiArrowRight />
            </Link>
            <Link 
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

